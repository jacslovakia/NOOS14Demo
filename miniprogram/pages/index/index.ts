import { scanImageData } from './module';
export * from './Image';
export * from './ImageScanner';
export * from './module';
export * from './Symbol';

// const app = getApp<IAppOption>()
const systemInfo = wx.getSystemInfoSync();
const SELECT_TYPE = {
  NONE: 0,
  IMAGE: 1,
  VIDEO: 2,
};

Page({
  data: {
    code1: '点击scan开始识别',
    code2: 'Hello World2',
    code3: 'Hello World3',
    config: {
      minInterval: 1000, //最短的两次CRS请求间隔
    },
    //识别到这个数组中的ID就触发内容
    targetIds: [
      "TODO 云识别管理 - 某个图库 - 识别图 - 某个识别图的ID",
    ],

    showLoading: false,
    showLoadingText: "",
  },
  /** @type {CameraFrameListener} 相机帧回调 */
  listener: undefined,
  /** @type {HTMLCanvasElement} canvas对象 */
  canvas: undefined,

  /** @type {boolean} 是否需要持续识别，在点击“识别体验”之后和识别成功之前为true */
  runningScan: undefined,
  /** @type {boolean} 当前是否正在进行CRS请求 */
  busy: undefined,
  /** @type {CrsClient} 负责发起CRS请求的对象 */
  crsClient: undefined,
  /** @type {number} 最后一次CRS请求的事件，用于判断是否满足最短请求间隔 */
  last: undefined,

  // 事件处理函数
  bindViewTap() {
    wx.navigateTo({
      url: '../logs/logs',
    })
  },
  //图像识别部分：
  onShow: function () {
    if (this.listener) this.listener.start(); //页面隐藏时相机帧的监听会自动停止，但恢复展示时不会自动启动，这里手动启动
  },
  onReady: function () {
    if (systemInfo.platform === "devtools") { //开发工具不会触发initdone事件，于是在onReady手动触发
      this.onCameraInit();
    }
  },
  showLoading(text: string) {
    this.setData({
      showLoading: true,
      showLoadingText: text,
    });
  },
  hideLoading() {
    this.setData({
      showLoading: false,
    });
  },
  onCameraInit: function () {

    //找到canvas对象
    const query = wx.createSelectorQuery();
    query.select('#capture')
      .fields({ node: true })
      .exec((res) => {
        const canvas = res[0].node;
        //设置canvas内部尺寸为480*640，frame-size="medium"的设置下相机帧大多是480*640
        canvas.width = 480;
        canvas.height = 640;
        this.canvas = canvas;

        // this.crsClient = new CrsClient(this.data.config, this.canvas);
        //开始监听相机帧
        let cameraContext = wx.createCameraContext();
        this.listener = cameraContext.onCameraFrame(frame => {
          if (!this.canvas) return;
          let canvas = this.canvas;
          //如果尺寸不匹配，就修改canvas尺寸以适应相机帧
          if (canvas.width !== frame.width || canvas.height !== frame.height) {
            canvas.width = frame.width;
            canvas.height = frame.height;
          }

          this.queryImage(frame, this.canvas);
        });
        this.listener.start();
      });
  },
  queryImage: async function (frame: any, canvas: any) {
    // if (!this.runningScan || this.busy || !this.crsClient) return;
    if (!this.runningScan || this.busy) return;
    //最短的两次CRS请求间隔
    let now = new Date().getTime();
    if (this.last && (now - this.last < this.data.config.minInterval)) return;
    this.last = now;

    this.busy = true; //如果正在进行请求，就不允许再次请求

    if (!this.runningScan) return; //避免在停止后仍然触发
    // console.log(res[0].typeName); // ZBAR_QRCODE
    // console.log(res[0].decode()); // Hello World
    // let result = res && res.result;
    console.log("frame:", frame)
    let context = canvas.getContext('2d')
    let ctxImageData = context.createImageData(frame.width, frame.height); //#1
    ctxImageData.data.set(new Uint8ClampedArray(frame.data)); //#1
    context.putImageData(ctxImageData, 0, 0); //#1
    let img = context.getImageData(0, 0, frame.width, frame.height);
    // console.log("img1:",img)

    const res = await scanImageData(img);

    if (res.length == 1) {
      this.setData({
        code1: String(res[0].typeName) + " " + String(res[0].decode()),
      })
    } else if (res.length == 2) {
      this.setData({
        code1: String(res[1].typeName) + " " + String(res[1].decode()),
        code2: String(res[0].typeName) + " " + String(res[0].decode()),
      })
    } else if (res.length == 3) {
      this.setData({
        code1: String(res[2].typeName) + " " + String(res[2].decode()),
        code2: String(res[1].typeName) + " " + String(res[1].decode()),
        code3: String(res[0].typeName) + " " + String(res[0].decode()),
      })
      console.log(res[0].decode());
    } else {
      this.setData({
        code1: "code1",
        code2: "code2",
        code3: "code3",
      })

    }


    console.log("res in index:", res)
    // console.log(res[0].typeName); // ZBAR_QRCODE
    // console.log(res[0].decode()); // Hello World
    // this.setData({
    //   code1: res[0].typeName+" "+res[0].decode()
    // })

    // this.setData({
    //   code3: String(res[0].decode()),
    // })


    let result = res;
    if (!result) return;

    // if (result.target) {
    //     console.log("识别成功", result.target.targetId);
    //     //如果待触发的id列表中存在识别到的这个id，就触发
    //     if (this.data.targetIds.find(targetId => targetId === result.target.targetId)) {
    //         this.onResult(result.target);
    //     }
    // } else {
    //     console.log("识别失败", result.message);
    // }
    this.busy = false;
  },
  onResult: function (target: { meta: any; }) {
    this.runningScan = false;
    this.hideLoading();
    console.log("触发内容!");
    if (target.meta) {
      console.log("meta base64:", target.meta);
    }
    this.setData({
      showOverlay: false,
      showContent: true,
      selectType: SELECT_TYPE.IMAGE,
    });
  },
  onLoad() {
    // const ctx = wx.createCanvasContext('canvas')
    // ctx.setFillStyle('red')
    // ctx.fillRect(10, 10, 150, 75)
    // ctx.draw()
    // const query = wx.createSelectorQuery();
    // query.select('#capture')
    //     .fields({node: true})
    //     .exec((res) => {
    //         const canvas = res[0].node;
    //         //设置canvas内部尺寸为480*640，frame-size="medium"的设置下相机帧大多是480*640
    //         canvas.width = 480;
    //         canvas.height = 640;
    //         this.canvas = canvas;
    //     });

    // const context = wx.createCameraContext()
    // const listener = context.onCameraFrame((frame) => {
    //   console.info(frame.data instanceof ArrayBuffer, frame.width, frame.height)
    //   const res = scanImageData(frame);
    //   console.log(res[0].typeName); // ZBAR_QRCODE
    //   console.log(res[0].decode()); // Hello World
    //   this.setData({
    //     code1: res,
    //   })
    // })
    // listener.start()
  },
  //界面：

  back: function () {
    this.runningScan = false;
    this.setData({
      showOverlay: true,
      showContent: false,
      selectType: SELECT_TYPE.NONE,
    });
    this.hideLoading();
  },

  experience: function () {
    this.setData({
      showOverlay: false,
      showContent: true,
      selectType: SELECT_TYPE.IMAGE,
    });
  },

  scan: function () {
    this.runningScan = true;
    this.setData({
      showOverlay: false,
      showContent: false,
      selectType: SELECT_TYPE.NONE,
    });
    this.showLoading("识别中");
  },

  download: function () {
    wx.saveImageToPhotosAlbum({
      filePath: "/images/namecard.jpg",
      success: _res => {
        wx.showToast({ title: "已保存到相册", icon: "none" });
      },
      fail: _res => {
        wx.showToast({ title: "保存失败", icon: "none" });
      },
    });
  },

  selectContent: function (e: { currentTarget: { dataset: { contenttype: any; }; }; }) {
    this.setData({
      selectType: e.currentTarget.dataset.contenttype,
    });
  },
})