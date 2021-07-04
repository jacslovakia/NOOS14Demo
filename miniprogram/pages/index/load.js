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
exports.loadWasmInstance = function (importObj) { return __awaiter(void 0, void 0, void 0, function () {
    var output;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4, WXWebAssembly.instantiate('zbar.wasm', importObj)];
            case 1:
                output = _a.sent();
                return [2, output.instance];
        }
    });
}); };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9hZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImxvYWQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBS2EsUUFBQSxnQkFBZ0IsR0FBRyxVQUM5QixTQUFjOzs7O29CQU1DLFdBQU0sYUFBYSxDQUFDLFdBQVcsQ0FBQyxXQUFXLEVBQUUsU0FBUyxDQUFDLEVBQUE7O2dCQUFoRSxNQUFNLEdBQUcsU0FBdUQ7Z0JBQ3RFLFdBQU8sTUFBTSxDQUFDLFFBQVEsRUFBQzs7O0tBQ3hCLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyB2YXIgZnMgPSB3eC5nZXRGaWxlU3lzdGVtTWFuYWdlcigpXHJcbi8vIGNvbnN0IHV0aWwgPSByZXF1aXJlKCd1dGlsJyk7XHJcblxyXG4vLyBjb25zdCByZWFkRmlsZSA9IHV0aWwucHJvbWlzaWZ5KGZzLnJlYWRGaWxlKTtcclxuXHJcbmV4cG9ydCBjb25zdCBsb2FkV2FzbUluc3RhbmNlID0gYXN5bmMgKFxyXG4gIGltcG9ydE9iajogYW55XHJcbik6IFByb21pc2U8YW55PiA9PiB7XHJcbiAgLy8gY29uc3QgYmluYXJ5ID0gYXdhaXQgd3guZ2V0RmlsZVN5c3RlbU1hbmFnZXIoKS5yZWFkRmlsZVN5bmMoJ3piYXIud2FzbScpIGFzIEFycmF5QnVmZmVyO1xyXG4gIC8vIGNvbnN0IG15TW9kdWxlID0gYXdhaXQgV2ViQXNzZW1ibHkuY29tcGlsZShiaW5hcnkpO1xyXG4gIC8vIGNvbnN0IG91dHB1dCA9IGF3YWl0IFdlYkFzc2VtYmx5Lmluc3RhbnRpYXRlKG15TW9kdWxlLCBpbXBvcnRPYmopO1xyXG4gIC8vIHJldHVybiBvdXRwdXQ7XHJcbiAgY29uc3Qgb3V0cHV0ID0gYXdhaXQgV1hXZWJBc3NlbWJseS5pbnN0YW50aWF0ZSgnemJhci53YXNtJywgaW1wb3J0T2JqKTtcclxuICByZXR1cm4gb3V0cHV0Lmluc3RhbmNlO1xyXG59O1xyXG4iXX0=