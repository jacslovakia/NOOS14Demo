"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !exports.hasOwnProperty(p)) __createBinding(exports, m, p);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var module_1 = require("./module");
__exportStar(require("./Image"), exports);
__exportStar(require("./ImageScanner"), exports);
__exportStar(require("./module"), exports);
__exportStar(require("./Symbol"), exports);
var systemInfo = wx.getSystemInfoSync();
var SELECT_TYPE = {
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
            minInterval: 1000,
        },
        targetIds: [
            "TODO 云识别管理 - 某个图库 - 识别图 - 某个识别图的ID",
        ],
        showLoading: false,
        showLoadingText: "",
    },
    listener: undefined,
    canvas: undefined,
    runningScan: undefined,
    busy: undefined,
    crsClient: undefined,
    last: undefined,
    bindViewTap: function () {
        wx.navigateTo({
            url: '../logs/logs',
        });
    },
    onShow: function () {
        if (this.listener)
            this.listener.start();
    },
    onReady: function () {
        if (systemInfo.platform === "devtools") {
            this.onCameraInit();
        }
    },
    showLoading: function (text) {
        this.setData({
            showLoading: true,
            showLoadingText: text,
        });
    },
    hideLoading: function () {
        this.setData({
            showLoading: false,
        });
    },
    onCameraInit: function () {
        var _this = this;
        var query = wx.createSelectorQuery();
        query.select('#capture')
            .fields({ node: true })
            .exec(function (res) {
            var canvas = res[0].node;
            canvas.width = 480;
            canvas.height = 640;
            _this.canvas = canvas;
            var cameraContext = wx.createCameraContext();
            _this.listener = cameraContext.onCameraFrame(function (frame) {
                if (!_this.canvas)
                    return;
                var canvas = _this.canvas;
                if (canvas.width !== frame.width || canvas.height !== frame.height) {
                    canvas.width = frame.width;
                    canvas.height = frame.height;
                }
                _this.queryImage(frame, _this.canvas);
            });
            _this.listener.start();
        });
    },
    queryImage: function (frame, canvas) {
        return __awaiter(this, void 0, void 0, function () {
            var now, context, ctxImageData, img, res, result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!this.runningScan || this.busy)
                            return [2];
                        now = new Date().getTime();
                        if (this.last && (now - this.last < this.data.config.minInterval))
                            return [2];
                        this.last = now;
                        this.busy = true;
                        if (!this.runningScan)
                            return [2];
                        console.log("frame:", frame);
                        context = canvas.getContext('2d');
                        ctxImageData = context.createImageData(frame.width, frame.height);
                        ctxImageData.data.set(new Uint8ClampedArray(frame.data));
                        context.putImageData(ctxImageData, 0, 0);
                        img = context.getImageData(0, 0, frame.width, frame.height);
                        return [4, module_1.scanImageData(img)];
                    case 1:
                        res = _a.sent();
                        if (res.length == 1) {
                            this.setData({
                                code1: String(res[0].typeName) + " " + String(res[0].decode()),
                            });
                        }
                        else if (res.length == 2) {
                            this.setData({
                                code1: String(res[1].typeName) + " " + String(res[1].decode()),
                                code2: String(res[0].typeName) + " " + String(res[0].decode()),
                            });
                        }
                        else if (res.length == 3) {
                            this.setData({
                                code1: String(res[2].typeName) + " " + String(res[2].decode()),
                                code2: String(res[1].typeName) + " " + String(res[1].decode()),
                                code3: String(res[0].typeName) + " " + String(res[0].decode()),
                            });
                            console.log(res[0].decode());
                        }
                        else {
                            this.setData({
                                code1: "code1",
                                code2: "code2",
                                code3: "code3",
                            });
                        }
                        console.log("res in index:", res);
                        result = res;
                        if (!result)
                            return [2];
                        this.busy = false;
                        return [2];
                }
            });
        });
    },
    onResult: function (target) {
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
    onLoad: function () {
    },
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
            success: function (_res) {
                wx.showToast({ title: "已保存到相册", icon: "none" });
            },
            fail: function (_res) {
                wx.showToast({ title: "保存失败", icon: "none" });
            },
        });
    },
    selectContent: function (e) {
        this.setData({
            selectType: e.currentTarget.dataset.contenttype,
        });
    },
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxtQ0FBeUM7QUFDekMsMENBQXdCO0FBQ3hCLGlEQUErQjtBQUMvQiwyQ0FBeUI7QUFDekIsMkNBQXlCO0FBR3pCLElBQU0sVUFBVSxHQUFHLEVBQUUsQ0FBQyxpQkFBaUIsRUFBRSxDQUFDO0FBQzFDLElBQU0sV0FBVyxHQUFHO0lBQ2xCLElBQUksRUFBRSxDQUFDO0lBQ1AsS0FBSyxFQUFFLENBQUM7SUFDUixLQUFLLEVBQUUsQ0FBQztDQUNULENBQUM7QUFFRixJQUFJLENBQUM7SUFDSCxJQUFJLEVBQUU7UUFDSixLQUFLLEVBQUUsWUFBWTtRQUNuQixLQUFLLEVBQUUsY0FBYztRQUNyQixLQUFLLEVBQUUsY0FBYztRQUNyQixNQUFNLEVBQUU7WUFDTixXQUFXLEVBQUUsSUFBSTtTQUNsQjtRQUVELFNBQVMsRUFBRTtZQUNULG9DQUFvQztTQUNyQztRQUVELFdBQVcsRUFBRSxLQUFLO1FBQ2xCLGVBQWUsRUFBRSxFQUFFO0tBQ3BCO0lBRUQsUUFBUSxFQUFFLFNBQVM7SUFFbkIsTUFBTSxFQUFFLFNBQVM7SUFHakIsV0FBVyxFQUFFLFNBQVM7SUFFdEIsSUFBSSxFQUFFLFNBQVM7SUFFZixTQUFTLEVBQUUsU0FBUztJQUVwQixJQUFJLEVBQUUsU0FBUztJQUdmLFdBQVc7UUFDVCxFQUFFLENBQUMsVUFBVSxDQUFDO1lBQ1osR0FBRyxFQUFFLGNBQWM7U0FDcEIsQ0FBQyxDQUFBO0lBQ0osQ0FBQztJQUVELE1BQU0sRUFBRTtRQUNOLElBQUksSUFBSSxDQUFDLFFBQVE7WUFBRSxJQUFJLENBQUMsUUFBUSxDQUFDLEtBQUssRUFBRSxDQUFDO0lBQzNDLENBQUM7SUFDRCxPQUFPLEVBQUU7UUFDUCxJQUFJLFVBQVUsQ0FBQyxRQUFRLEtBQUss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QUFDLENBQUM7WUFDbEQsQ0FBQztZQUNELElBQUksRUFBRSxVQUFBLElBQUk7Z0JBQ1IsRUFBRSxDQUFDLFNBQVMsQ0FBQyxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFLE1BQU0sRUFBRSxDQUFDLENBQUM7WUFDaEQsQ0FBQztTQUNGLENBQUMsQ0FBQztJQUNMLENBQUM7SUFFRCxhQUFhLEVBQUUsVUFBVSxDQUEwRDtRQUNqRixJQUFJLENBQUMsT0FBTyxDQUFDO1lBQ1gsVUFBVSxFQUFFLENBQUMsQ0FBQyxhQUFhLENBQUMsT0FBTyxDQUFDLFdBQVc7U0FDaEQsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztDQUNGLENBQUMsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHNjYW5JbWFnZURhdGEgfSBmcm9tICcuL21vZHVsZSc7XHJcbmV4cG9ydCAqIGZyb20gJy4vSW1hZ2UnO1xyXG5leHBvcnQgKiBmcm9tICcuL0ltYWdlU2Nhbm5lcic7XHJcbmV4cG9ydCAqIGZyb20gJy4vbW9kdWxlJztcclxuZXhwb3J0ICogZnJvbSAnLi9TeW1ib2wnO1xyXG5cclxuLy8gY29uc3QgYXBwID0gZ2V0QXBwPElBcHBPcHRpb24+KClcclxuY29uc3Qgc3lzdGVtSW5mbyA9IHd4LmdldFN5c3RlbUluZm9TeW5jKCk7XHJcbmNvbnN0IFNFTEVDVF9UWVBFID0ge1xyXG4gIE5PTkU6IDAsXHJcbiAgSU1BR0U6IDEsXHJcbiAgVklERU86IDIsXHJcbn07XHJcblxyXG5QYWdlKHtcclxuICBkYXRhOiB7XHJcbiAgICBjb2RlMTogJ+eCueWHu3NjYW7lvIDlp4vor4bliKsnLFxyXG4gICAgY29kZTI6ICdIZWxsbyBXb3JsZDInLFxyXG4gICAgY29kZTM6ICdIZWxsbyBXb3JsZDMnLFxyXG4gICAgY29uZmlnOiB7XHJcbiAgICAgIG1pbkludGVydmFsOiAxMDAwLCAvL+acgOefreeahOS4pOasoUNSU+ivt+axgumXtOmalFxyXG4gICAgfSxcclxuICAgIC8v6K+G5Yir5Yiw6L+Z5Liq5pWw57uE5Lit55qESUTlsLHop6blj5HlhoXlrrlcclxuICAgIHRhcmdldElkczogW1xyXG4gICAgICBcIlRPRE8g5LqR6K+G5Yir566h55CGIC0g5p+Q5Liq5Zu+5bqTIC0g6K+G5Yir5Zu+IC0g5p+Q5Liq6K+G5Yir5Zu+55qESURcIixcclxuICAgIF0sXHJcblxyXG4gICAgc2hvd0xvYWRpbmc6IGZhbHNlLFxyXG4gICAgc2hvd0xvYWRpbmdUZXh0OiBcIlwiLFxyXG4gIH0sXHJcbiAgLyoqIEB0eXBlIHtDYW1lcmFGcmFtZUxpc3RlbmVyfSDnm7jmnLrluKflm57osIMgKi9cclxuICBsaXN0ZW5lcjogdW5kZWZpbmVkLFxyXG4gIC8qKiBAdHlwZSB7SFRNTENhbnZhc0VsZW1lbnR9IGNhbnZhc+WvueixoSAqL1xyXG4gIGNhbnZhczogdW5kZWZpbmVkLFxyXG5cclxuICAvKiogQHR5cGUge2Jvb2xlYW59IOaYr+WQpumcgOimgeaMgee7reivhuWIq++8jOWcqOeCueWHu+KAnOivhuWIq+S9k+mqjOKAneS5i+WQjuWSjOivhuWIq+aIkOWKn+S5i+WJjeS4unRydWUgKi9cclxuICBydW5uaW5nU2NhbjogdW5kZWZpbmVkLFxyXG4gIC8qKiBAdHlwZSB7Ym9vbGVhbn0g5b2T5YmN5piv5ZCm5q2j5Zyo6L+b6KGMQ1JT6K+35rGCICovXHJcbiAgYnVzeTogdW5kZWZpbmVkLFxyXG4gIC8qKiBAdHlwZSB7Q3JzQ2xpZW50fSDotJ/otKPlj5HotbdDUlPor7fmsYLnmoTlr7nosaEgKi9cclxuICBjcnNDbGllbnQ6IHVuZGVmaW5lZCxcclxuICAvKiogQHR5cGUge251bWJlcn0g5pyA5ZCO5LiA5qyhQ1JT6K+35rGC55qE5LqL5Lu277yM55So5LqO5Yik5pat5piv5ZCm5ruh6Laz5pyA55+t6K+35rGC6Ze06ZqUICovXHJcbiAgbGFzdDogdW5kZWZpbmVkLFxyXG5cclxuICAvLyDkuovku7blpITnkIblh73mlbBcclxuICBiaW5kVmlld1RhcCgpIHtcclxuICAgIHd4Lm5hdmlnYXRlVG8oe1xyXG4gICAgICB1cmw6ICcuLi9sb2dzL2xvZ3MnLFxyXG4gICAgfSlcclxuICB9LFxyXG4gIC8v5Zu+5YOP6K+G5Yir6YOo5YiG77yaXHJcbiAgb25TaG93OiBmdW5jdGlvbiAoKSB7XHJcbiAgICBpZiAodGhpcy5saXN0ZW5lcikgdGhpcy5saXN0ZW5lci5zdGFydCgpOyAvL+mhtemdoumakOiXj+aXtuebuOacuuW4p+eahOebkeWQrOS8muiHquWKqOWBnOatou+8jOS9huaBouWkjeWxleekuuaXtuS4jeS8muiHquWKqOWQr+WKqO+8jOi/memHjOaJi+WKqOWQr+WKqFxyXG4gIH0sXHJcbiAgb25SZWFkeTogZnVuY3Rpb24gKCkge1xyXG4gICAgaWYgKHN5c3RlbUluZm8ucGxhdGZvcm0gPT09IFwiZGV2dG9vbHNcIikgeyAvL+W8gOWPkeW3peWFt+S4jeS8muinpuWPkWluaXRkb25l5LqL5Lu277yM5LqO5piv5Zyob25SZWFkeeaJi+WKqOinpuWPkVxyXG4gICAgICB0aGlzLm9uQ2FtZXJhSW5pdCgpO1xyXG4gICAgfVxyXG4gIH0sXHJcbiAgc2hvd0xvYWRpbmcodGV4dDogc3RyaW5nKSB7XHJcbiAgICB0aGlzLnNldERhdGEoe1xyXG4gICAgICBzaG93TG9hZGluZzogdHJ1ZSxcclxuICAgICAgc2hvd0xvYWRpbmdUZXh0OiB0ZXh0LFxyXG4gICAgfSk7XHJcbiAgfSxcclxuICBoaWRlTG9hZGluZygpIHtcclxuICAgIHRoaXMuc2V0RGF0YSh7XHJcbiAgICAgIHNob3dMb2FkaW5nOiBmYWxzZSxcclxuICAgIH0pO1xyXG4gIH0sXHJcbiAgb25DYW1lcmFJbml0OiBmdW5jdGlvbiAoKSB7XHJcblxyXG4gICAgLy/mib7liLBjYW52YXPlr7nosaFcclxuICAgIGNvbnN0IHF1ZXJ5ID0gd3guY3JlYXRlU2VsZWN0b3JRdWVyeSgpO1xyXG4gICAgcXVlcnkuc2VsZWN0KCcjY2FwdHVyZScpXHJcbiAgICAgIC5maWVsZHMoeyBub2RlOiB0cnVlIH0pXHJcbiAgICAgIC5leGVjKChyZXMpID0+IHtcclxuICAgICAgICBjb25zdCBjYW52YXMgPSByZXNbMF0ubm9kZTtcclxuICAgICAgICAvL+iuvue9rmNhbnZhc+WGhemDqOWwuuWvuOS4ujQ4MCo2NDDvvIxmcmFtZS1zaXplPVwibWVkaXVtXCLnmoTorr7nva7kuIvnm7jmnLrluKflpKflpJrmmK80ODAqNjQwXHJcbiAgICAgICAgY2FudmFzLndpZHRoID0gNDgwO1xyXG4gICAgICAgIGNhbnZhcy5oZWlnaHQgPSA2NDA7XHJcbiAgICAgICAgdGhpcy5jYW52YXMgPSBjYW52YXM7XHJcblxyXG4gICAgICAgIC8vIHRoaXMuY3JzQ2xpZW50ID0gbmV3IENyc0NsaWVudCh0aGlzLmRhdGEuY29uZmlnLCB0aGlzLmNhbnZhcyk7XHJcbiAgICAgICAgLy/lvIDlp4vnm5HlkKznm7jmnLrluKdcclxuICAgICAgICBsZXQgY2FtZXJhQ29udGV4dCA9IHd4LmNyZWF0ZUNhbWVyYUNvbnRleHQoKTtcclxuICAgICAgICB0aGlzLmxpc3RlbmVyID0gY2FtZXJhQ29udGV4dC5vbkNhbWVyYUZyYW1lKGZyYW1lID0+IHtcclxuICAgICAgICAgIGlmICghdGhpcy5jYW52YXMpIHJldHVybjtcclxuICAgICAgICAgIGxldCBjYW52YXMgPSB0aGlzLmNhbnZhcztcclxuICAgICAgICAgIC8v5aaC5p6c5bC65a+45LiN5Yy56YWN77yM5bCx5L+u5pS5Y2FudmFz5bC65a+45Lul6YCC5bqU55u45py65binXHJcbiAgICAgICAgICBpZiAoY2FudmFzLndpZHRoICE9PSBmcmFtZS53aWR0aCB8fCBjYW52YXMuaGVpZ2h0ICE9PSBmcmFtZS5oZWlnaHQpIHtcclxuICAgICAgICAgICAgY2FudmFzLndpZHRoID0gZnJhbWUud2lkdGg7XHJcbiAgICAgICAgICAgIGNhbnZhcy5oZWlnaHQgPSBmcmFtZS5oZWlnaHQ7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgdGhpcy5xdWVyeUltYWdlKGZyYW1lLCB0aGlzLmNhbnZhcyk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgdGhpcy5saXN0ZW5lci5zdGFydCgpO1xyXG4gICAgICB9KTtcclxuICB9LFxyXG4gIHF1ZXJ5SW1hZ2U6IGFzeW5jIGZ1bmN0aW9uIChmcmFtZTogYW55LCBjYW52YXM6IGFueSkge1xyXG4gICAgLy8gaWYgKCF0aGlzLnJ1bm5pbmdTY2FuIHx8IHRoaXMuYnVzeSB8fCAhdGhpcy5jcnNDbGllbnQpIHJldHVybjtcclxuICAgIGlmICghdGhpcy5ydW5uaW5nU2NhbiB8fCB0aGlzLmJ1c3kpIHJldHVybjtcclxuICAgIC8v5pyA55+t55qE5Lik5qyhQ1JT6K+35rGC6Ze06ZqUXHJcbiAgICBsZXQgbm93ID0gbmV3IERhdGUoKS5nZXRUaW1lKCk7XHJcbiAgICBpZiAodGhpcy5sYXN0ICYmIChub3cgLSB0aGlzLmxhc3QgPCB0aGlzLmRhdGEuY29uZmlnLm1pbkludGVydmFsKSkgcmV0dXJuO1xyXG4gICAgdGhpcy5sYXN0ID0gbm93O1xyXG5cclxuICAgIHRoaXMuYnVzeSA9IHRydWU7IC8v5aaC5p6c5q2j5Zyo6L+b6KGM6K+35rGC77yM5bCx5LiN5YWB6K645YaN5qyh6K+35rGCXHJcblxyXG4gICAgaWYgKCF0aGlzLnJ1bm5pbmdTY2FuKSByZXR1cm47IC8v6YG/5YWN5Zyo5YGc5q2i5ZCO5LuN54S26Kem5Y+RXHJcbiAgICAvLyBjb25zb2xlLmxvZyhyZXNbMF0udHlwZU5hbWUpOyAvLyBaQkFSX1FSQ09ERVxyXG4gICAgLy8gY29uc29sZS5sb2cocmVzWzBdLmRlY29kZSgpKTsgLy8gSGVsbG8gV29ybGRcclxuICAgIC8vIGxldCByZXN1bHQgPSByZXMgJiYgcmVzLnJlc3VsdDtcclxuICAgIGNvbnNvbGUubG9nKFwiZnJhbWU6XCIsIGZyYW1lKVxyXG4gICAgbGV0IGNvbnRleHQgPSBjYW52YXMuZ2V0Q29udGV4dCgnMmQnKVxyXG4gICAgbGV0IGN0eEltYWdlRGF0YSA9IGNvbnRleHQuY3JlYXRlSW1hZ2VEYXRhKGZyYW1lLndpZHRoLCBmcmFtZS5oZWlnaHQpOyAvLyMxXHJcbiAgICBjdHhJbWFnZURhdGEuZGF0YS5zZXQobmV3IFVpbnQ4Q2xhbXBlZEFycmF5KGZyYW1lLmRhdGEpKTsgLy8jMVxyXG4gICAgY29udGV4dC5wdXRJbWFnZURhdGEoY3R4SW1hZ2VEYXRhLCAwLCAwKTsgLy8jMVxyXG4gICAgbGV0IGltZyA9IGNvbnRleHQuZ2V0SW1hZ2VEYXRhKDAsIDAsIGZyYW1lLndpZHRoLCBmcmFtZS5oZWlnaHQpO1xyXG4gICAgLy8gY29uc29sZS5sb2coXCJpbWcxOlwiLGltZylcclxuXHJcbiAgICBjb25zdCByZXMgPSBhd2FpdCBzY2FuSW1hZ2VEYXRhKGltZyk7XHJcblxyXG4gICAgaWYgKHJlcy5sZW5ndGggPT0gMSkge1xyXG4gICAgICB0aGlzLnNldERhdGEoe1xyXG4gICAgICAgIGNvZGUxOiBTdHJpbmcocmVzWzBdLnR5cGVOYW1lKSArIFwiIFwiICsgU3RyaW5nKHJlc1swXS5kZWNvZGUoKSksXHJcbiAgICAgIH0pXHJcbiAgICB9IGVsc2UgaWYgKHJlcy5sZW5ndGggPT0gMikge1xyXG4gICAgICB0aGlzLnNldERhdGEoe1xyXG4gICAgICAgIGNvZGUxOiBTdHJpbmcocmVzWzFdLnR5cGVOYW1lKSArIFwiIFwiICsgU3RyaW5nKHJlc1sxXS5kZWNvZGUoKSksXHJcbiAgICAgICAgY29kZTI6IFN0cmluZyhyZXNbMF0udHlwZU5hbWUpICsgXCIgXCIgKyBTdHJpbmcocmVzWzBdLmRlY29kZSgpKSxcclxuICAgICAgfSlcclxuICAgIH0gZWxzZSBpZiAocmVzLmxlbmd0aCA9PSAzKSB7XHJcbiAgICAgIHRoaXMuc2V0RGF0YSh7XHJcbiAgICAgICAgY29kZTE6IFN0cmluZyhyZXNbMl0udHlwZU5hbWUpICsgXCIgXCIgKyBTdHJpbmcocmVzWzJdLmRlY29kZSgpKSxcclxuICAgICAgICBjb2RlMjogU3RyaW5nKHJlc1sxXS50eXBlTmFtZSkgKyBcIiBcIiArIFN0cmluZyhyZXNbMV0uZGVjb2RlKCkpLFxyXG4gICAgICAgIGNvZGUzOiBTdHJpbmcocmVzWzBdLnR5cGVOYW1lKSArIFwiIFwiICsgU3RyaW5nKHJlc1swXS5kZWNvZGUoKSksXHJcbiAgICAgIH0pXHJcbiAgICAgIGNvbnNvbGUubG9nKHJlc1swXS5kZWNvZGUoKSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLnNldERhdGEoe1xyXG4gICAgICAgIGNvZGUxOiBcImNvZGUxXCIsXHJcbiAgICAgICAgY29kZTI6IFwiY29kZTJcIixcclxuICAgICAgICBjb2RlMzogXCJjb2RlM1wiLFxyXG4gICAgICB9KVxyXG5cclxuICAgIH1cclxuXHJcblxyXG4gICAgY29uc29sZS5sb2coXCJyZXMgaW4gaW5kZXg6XCIsIHJlcylcclxuICAgIC8vIGNvbnNvbGUubG9nKHJlc1swXS50eXBlTmFtZSk7IC8vIFpCQVJfUVJDT0RFXHJcbiAgICAvLyBjb25zb2xlLmxvZyhyZXNbMF0uZGVjb2RlKCkpOyAvLyBIZWxsbyBXb3JsZFxyXG4gICAgLy8gdGhpcy5zZXREYXRhKHtcclxuICAgIC8vICAgY29kZTE6IHJlc1swXS50eXBlTmFtZStcIiBcIityZXNbMF0uZGVjb2RlKClcclxuICAgIC8vIH0pXHJcblxyXG4gICAgLy8gdGhpcy5zZXREYXRhKHtcclxuICAgIC8vICAgY29kZTM6IFN0cmluZyhyZXNbMF0uZGVjb2RlKCkpLFxyXG4gICAgLy8gfSlcclxuXHJcblxyXG4gICAgbGV0IHJlc3VsdCA9IHJlcztcclxuICAgIGlmICghcmVzdWx0KSByZXR1cm47XHJcblxyXG4gICAgLy8gaWYgKHJlc3VsdC50YXJnZXQpIHtcclxuICAgIC8vICAgICBjb25zb2xlLmxvZyhcIuivhuWIq+aIkOWKn1wiLCByZXN1bHQudGFyZ2V0LnRhcmdldElkKTtcclxuICAgIC8vICAgICAvL+WmguaenOW+heinpuWPkeeahGlk5YiX6KGo5Lit5a2Y5Zyo6K+G5Yir5Yiw55qE6L+Z5LiqaWTvvIzlsLHop6blj5FcclxuICAgIC8vICAgICBpZiAodGhpcy5kYXRhLnRhcmdldElkcy5maW5kKHRhcmdldElkID0+IHRhcmdldElkID09PSByZXN1bHQudGFyZ2V0LnRhcmdldElkKSkge1xyXG4gICAgLy8gICAgICAgICB0aGlzLm9uUmVzdWx0KHJlc3VsdC50YXJnZXQpO1xyXG4gICAgLy8gICAgIH1cclxuICAgIC8vIH0gZWxzZSB7XHJcbiAgICAvLyAgICAgY29uc29sZS5sb2coXCLor4bliKvlpLHotKVcIiwgcmVzdWx0Lm1lc3NhZ2UpO1xyXG4gICAgLy8gfVxyXG4gICAgdGhpcy5idXN5ID0gZmFsc2U7XHJcbiAgfSxcclxuICBvblJlc3VsdDogZnVuY3Rpb24gKHRhcmdldDogeyBtZXRhOiBhbnk7IH0pIHtcclxuICAgIHRoaXMucnVubmluZ1NjYW4gPSBmYWxzZTtcclxuICAgIHRoaXMuaGlkZUxvYWRpbmcoKTtcclxuICAgIGNvbnNvbGUubG9nKFwi6Kem5Y+R5YaF5a65IVwiKTtcclxuICAgIGlmICh0YXJnZXQubWV0YSkge1xyXG4gICAgICBjb25zb2xlLmxvZyhcIm1ldGEgYmFzZTY0OlwiLCB0YXJnZXQubWV0YSk7XHJcbiAgICB9XHJcbiAgICB0aGlzLnNldERhdGEoe1xyXG4gICAgICBzaG93T3ZlcmxheTogZmFsc2UsXHJcbiAgICAgIHNob3dDb250ZW50OiB0cnVlLFxyXG4gICAgICBzZWxlY3RUeXBlOiBTRUxFQ1RfVFlQRS5JTUFHRSxcclxuICAgIH0pO1xyXG4gIH0sXHJcbiAgb25Mb2FkKCkge1xyXG4gICAgLy8gY29uc3QgY3R4ID0gd3guY3JlYXRlQ2FudmFzQ29udGV4dCgnY2FudmFzJylcclxuICAgIC8vIGN0eC5zZXRGaWxsU3R5bGUoJ3JlZCcpXHJcbiAgICAvLyBjdHguZmlsbFJlY3QoMTAsIDEwLCAxNTAsIDc1KVxyXG4gICAgLy8gY3R4LmRyYXcoKVxyXG4gICAgLy8gY29uc3QgcXVlcnkgPSB3eC5jcmVhdGVTZWxlY3RvclF1ZXJ5KCk7XHJcbiAgICAvLyBxdWVyeS5zZWxlY3QoJyNjYXB0dXJlJylcclxuICAgIC8vICAgICAuZmllbGRzKHtub2RlOiB0cnVlfSlcclxuICAgIC8vICAgICAuZXhlYygocmVzKSA9PiB7XHJcbiAgICAvLyAgICAgICAgIGNvbnN0IGNhbnZhcyA9IHJlc1swXS5ub2RlO1xyXG4gICAgLy8gICAgICAgICAvL+iuvue9rmNhbnZhc+WGhemDqOWwuuWvuOS4ujQ4MCo2NDDvvIxmcmFtZS1zaXplPVwibWVkaXVtXCLnmoTorr7nva7kuIvnm7jmnLrluKflpKflpJrmmK80ODAqNjQwXHJcbiAgICAvLyAgICAgICAgIGNhbnZhcy53aWR0aCA9IDQ4MDtcclxuICAgIC8vICAgICAgICAgY2FudmFzLmhlaWdodCA9IDY0MDtcclxuICAgIC8vICAgICAgICAgdGhpcy5jYW52YXMgPSBjYW52YXM7XHJcbiAgICAvLyAgICAgfSk7XHJcblxyXG4gICAgLy8gY29uc3QgY29udGV4dCA9IHd4LmNyZWF0ZUNhbWVyYUNvbnRleHQoKVxyXG4gICAgLy8gY29uc3QgbGlzdGVuZXIgPSBjb250ZXh0Lm9uQ2FtZXJhRnJhbWUoKGZyYW1lKSA9PiB7XHJcbiAgICAvLyAgIGNvbnNvbGUuaW5mbyhmcmFtZS5kYXRhIGluc3RhbmNlb2YgQXJyYXlCdWZmZXIsIGZyYW1lLndpZHRoLCBmcmFtZS5oZWlnaHQpXHJcbiAgICAvLyAgIGNvbnN0IHJlcyA9IHNjYW5JbWFnZURhdGEoZnJhbWUpO1xyXG4gICAgLy8gICBjb25zb2xlLmxvZyhyZXNbMF0udHlwZU5hbWUpOyAvLyBaQkFSX1FSQ09ERVxyXG4gICAgLy8gICBjb25zb2xlLmxvZyhyZXNbMF0uZGVjb2RlKCkpOyAvLyBIZWxsbyBXb3JsZFxyXG4gICAgLy8gICB0aGlzLnNldERhdGEoe1xyXG4gICAgLy8gICAgIGNvZGUxOiByZXMsXHJcbiAgICAvLyAgIH0pXHJcbiAgICAvLyB9KVxyXG4gICAgLy8gbGlzdGVuZXIuc3RhcnQoKVxyXG4gIH0sXHJcbiAgLy/nlYzpnaLvvJpcclxuXHJcbiAgYmFjazogZnVuY3Rpb24gKCkge1xyXG4gICAgdGhpcy5ydW5uaW5nU2NhbiA9IGZhbHNlO1xyXG4gICAgdGhpcy5zZXREYXRhKHtcclxuICAgICAgc2hvd092ZXJsYXk6IHRydWUsXHJcbiAgICAgIHNob3dDb250ZW50OiBmYWxzZSxcclxuICAgICAgc2VsZWN0VHlwZTogU0VMRUNUX1RZUEUuTk9ORSxcclxuICAgIH0pO1xyXG4gICAgdGhpcy5oaWRlTG9hZGluZygpO1xyXG4gIH0sXHJcblxyXG4gIGV4cGVyaWVuY2U6IGZ1bmN0aW9uICgpIHtcclxuICAgIHRoaXMuc2V0RGF0YSh7XHJcbiAgICAgIHNob3dPdmVybGF5OiBmYWxzZSxcclxuICAgICAgc2hvd0NvbnRlbnQ6IHRydWUsXHJcbiAgICAgIHNlbGVjdFR5cGU6IFNFTEVDVF9UWVBFLklNQUdFLFxyXG4gICAgfSk7XHJcbiAgfSxcclxuXHJcbiAgc2NhbjogZnVuY3Rpb24gKCkge1xyXG4gICAgdGhpcy5ydW5uaW5nU2NhbiA9IHRydWU7XHJcbiAgICB0aGlzLnNldERhdGEoe1xyXG4gICAgICBzaG93T3ZlcmxheTogZmFsc2UsXHJcbiAgICAgIHNob3dDb250ZW50OiBmYWxzZSxcclxuICAgICAgc2VsZWN0VHlwZTogU0VMRUNUX1RZUEUuTk9ORSxcclxuICAgIH0pO1xyXG4gICAgdGhpcy5zaG93TG9hZGluZyhcIuivhuWIq+S4rVwiKTtcclxuICB9LFxyXG5cclxuICBkb3dubG9hZDogZnVuY3Rpb24gKCkge1xyXG4gICAgd3guc2F2ZUltYWdlVG9QaG90b3NBbGJ1bSh7XHJcbiAgICAgIGZpbGVQYXRoOiBcIi9pbWFnZXMvbmFtZWNhcmQuanBnXCIsXHJcbiAgICAgIHN1Y2Nlc3M6IF9yZXMgPT4ge1xyXG4gICAgICAgIHd4LnNob3dUb2FzdCh7IHRpdGxlOiBcIuW3suS/neWtmOWIsOebuOWGjFwiLCBpY29uOiBcIm5vbmVcIiB9KTtcclxuICAgICAgfSxcclxuICAgICAgZmFpbDogX3JlcyA9PiB7XHJcbiAgICAgICAgd3guc2hvd1RvYXN0KHsgdGl0bGU6IFwi5L+d5a2Y5aSx6LSlXCIsIGljb246IFwibm9uZVwiIH0pO1xyXG4gICAgICB9LFxyXG4gICAgfSk7XHJcbiAgfSxcclxuXHJcbiAgc2VsZWN0Q29udGVudDogZnVuY3Rpb24gKGU6IHsgY3VycmVudFRhcmdldDogeyBkYXRhc2V0OiB7IGNvbnRlbnR0eXBlOiBhbnk7IH07IH07IH0pIHtcclxuICAgIHRoaXMuc2V0RGF0YSh7XHJcbiAgICAgIHNlbGVjdFR5cGU6IGUuY3VycmVudFRhcmdldC5kYXRhc2V0LmNvbnRlbnR0eXBlLFxyXG4gICAgfSk7XHJcbiAgfSxcclxufSkiXX0=