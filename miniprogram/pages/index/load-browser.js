"use strict";
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
exports.loadWasmInstance = void 0;
var zbar_wasm_bin_1 = require("./zbar.wasm.bin");
exports.loadWasmInstance = function (importObj) { return __awaiter(void 0, void 0, void 0, function () {
    var res, binary, output;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4, fetch(zbar_wasm_bin_1.default)];
            case 1:
                res = _a.sent();
                if (!res['ok']) {
                    console.error('Failed to load wasm binary file at ' + zbar_wasm_bin_1.default);
                    return [2, null];
                }
                return [4, res.arrayBuffer()];
            case 2:
                binary = _a.sent();
                return [4, WebAssembly.instantiate(binary, importObj)];
            case 3:
                output = _a.sent();
                return [2, output.instance];
        }
    });
}); };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9hZC1icm93c2VyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibG9hZC1icm93c2VyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQU9BLGlEQUE2QztBQUVoQyxRQUFBLGdCQUFnQixHQUFHLFVBQzlCLFNBQWM7Ozs7b0JBWUYsV0FBTSxLQUFLLENBQUMsdUJBQWMsQ0FBQyxFQUFBOztnQkFBakMsR0FBRyxHQUFHLFNBQTJCO2dCQUN2QyxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxFQUFFO29CQUNkLE9BQU8sQ0FBQyxLQUFLLENBQUMscUNBQXFDLEdBQUcsdUJBQWMsQ0FBQyxDQUFDO29CQUN0RSxXQUFPLElBQUksRUFBQztpQkFDYjtnQkFDYyxXQUFNLEdBQUcsQ0FBQyxXQUFXLEVBQUUsRUFBQTs7Z0JBQWhDLE1BQU0sR0FBRyxTQUF1QjtnQkFDdkIsV0FBTSxXQUFXLENBQUMsV0FBVyxDQUFDLE1BQU0sRUFBRSxTQUFTLENBQUMsRUFBQTs7Z0JBQXpELE1BQU0sR0FBRyxTQUFnRDtnQkFDL0QsV0FBTyxNQUFNLENBQUMsUUFBUSxFQUFDOzs7S0FDeEIsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxyXG4gKiBXZWJwYWNrIEZpbGUtbG9hZGVyIHdpbGwgYnJlYWsgd2hlbiB0aGUgZXh0ZW5zaW9uIGlzIC53YXNtLlxyXG4gKiBDaGFuZ2luZyB0aGUgZXh0ZW5zaW9uIGlzIGEgd29ya2Fyb3VuZC4gQW5kIGJlY2F1c2Ugb2YgdGhpc1xyXG4gKiB8aW5zdGFudGlhdGVTdHJlYW1pbmd8IGlzIGFsd2F5cyBmYWlsZWQgZHVlIHRvIHdyb25nIE1JTUUgdHlwZS5cclxuICogc2VlIGh0dHBzOi8vZ2l0aHViLmNvbS93ZWJwYWNrL3dlYnBhY2svaXNzdWVzLzY3MjVcclxuICovXHJcbi8vIGltcG9ydCB3YXNtQmluYXJ5RmlsZSBmcm9tICcuL3piYXIud2FzbSc7XHJcbmltcG9ydCB3YXNtQmluYXJ5RmlsZSBmcm9tICcuL3piYXIud2FzbS5iaW4nO1xyXG5cclxuZXhwb3J0IGNvbnN0IGxvYWRXYXNtSW5zdGFuY2UgPSBhc3luYyAoXHJcbiAgaW1wb3J0T2JqOiBhbnlcclxuKTogUHJvbWlzZTxXZWJBc3NlbWJseS5JbnN0YW5jZSB8IG51bGw+ID0+IHtcclxuICAvLyB0cnkge1xyXG4gIC8vICAgY29uc3Qgb3V0cHV0ID0gYXdhaXQgV2ViQXNzZW1ibHkuaW5zdGFudGlhdGVTdHJlYW1pbmcoXHJcbiAgLy8gICAgIGZldGNoKHdhc21CaW5hcnlGaWxlKSxcclxuICAvLyAgICAgaW1wb3J0T2JqXHJcbiAgLy8gICApO1xyXG4gIC8vICAgcmV0dXJuIG91dHB1dC5pbnN0YW5jZTtcclxuICAvLyB9IGNhdGNoIChlcnIpIHtcclxuICAvLyAgIGNvbnNvbGUuZXJyb3IoJ1dhc20gc3RyZWFtaW5nIGNvbXBpbGUgZmFpbGVkOiAnICsgZXJyKTtcclxuICAvLyAgIGNvbnNvbGUuZXJyb3IoJ0ZhbGxpbmcgYmFjayB0byBBcnJheUJ1ZmZlciBpbnN0YW50aWF0aW9uJyk7XHJcbiAgLy8gfVxyXG4gIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKHdhc21CaW5hcnlGaWxlKTtcclxuICBpZiAoIXJlc1snb2snXSkge1xyXG4gICAgY29uc29sZS5lcnJvcignRmFpbGVkIHRvIGxvYWQgd2FzbSBiaW5hcnkgZmlsZSBhdCAnICsgd2FzbUJpbmFyeUZpbGUpO1xyXG4gICAgcmV0dXJuIG51bGw7XHJcbiAgfVxyXG4gIGNvbnN0IGJpbmFyeSA9IGF3YWl0IHJlcy5hcnJheUJ1ZmZlcigpO1xyXG4gIGNvbnN0IG91dHB1dCA9IGF3YWl0IFdlYkFzc2VtYmx5Lmluc3RhbnRpYXRlKGJpbmFyeSwgaW1wb3J0T2JqKTtcclxuICByZXR1cm4gb3V0cHV0Lmluc3RhbmNlO1xyXG59O1xyXG4iXX0=