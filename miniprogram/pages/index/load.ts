// var fs = wx.getFileSystemManager()
// const util = require('util');

// const readFile = util.promisify(fs.readFile);

export const loadWasmInstance = async (
  importObj: any
): Promise<any> => {
  // const binary = await wx.getFileSystemManager().readFileSync('zbar.wasm') as ArrayBuffer;
  // const myModule = await WebAssembly.compile(binary);
  // const output = await WebAssembly.instantiate(myModule, importObj);
  // return output;
  const output = await WXWebAssembly.instantiate('zbar.wasm', importObj);
  return output.instance;
};
