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
exports.scanImageData = exports.scanRGBABuffer = exports.scanGrayBuffer = exports.getDefaultScanner = void 0;
var Image_1 = require("./Image");
var ImageScanner_1 = require("./ImageScanner");
var defaultScannerPromise = ImageScanner_1.ImageScanner.create();
exports.getDefaultScanner = function () { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4, defaultScannerPromise];
            case 1: return [2, _a.sent()];
        }
    });
}); };
var scanImage = function (image, scanner) { return __awaiter(void 0, void 0, void 0, function () {
    var res;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (!(scanner === undefined)) return [3, 2];
                return [4, defaultScannerPromise];
            case 1:
                scanner = _a.sent();
                _a.label = 2;
            case 2:
                res = scanner.scan(image);
                if (res < 0) {
                    throw Error('Scan Failed');
                }
                if (res === 0)
                    return [2, []];
                return [2, image.getSymbols()];
        }
    });
}); };
exports.scanGrayBuffer = function (buffer, width, height, scanner) { return __awaiter(void 0, void 0, void 0, function () {
    var image, res;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4, Image_1.Image.createFromGrayBuffer(width, height, buffer)];
            case 1:
                image = _a.sent();
                return [4, scanImage(image, scanner)];
            case 2:
                res = _a.sent();
                image.destroy();
                return [2, res];
        }
    });
}); };
exports.scanRGBABuffer = function (buffer, width, height, scanner) { return __awaiter(void 0, void 0, void 0, function () {
    var image, res;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4, Image_1.Image.createFromRGBABuffer(width, height, buffer)];
            case 1:
                image = _a.sent();
                return [4, scanImage(image, scanner)];
            case 2:
                res = _a.sent();
                image.destroy();
                return [2, res];
        }
    });
}); };
exports.scanImageData = function (image, scanner) { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4, exports.scanRGBABuffer(image.data.buffer, image.width, image.height, scanner)];
            case 1: return [2, _a.sent()];
        }
    });
}); };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLGlDQUFnQztBQUNoQywrQ0FBOEM7QUFHOUMsSUFBTSxxQkFBcUIsR0FBRywyQkFBWSxDQUFDLE1BQU0sRUFBRSxDQUFDO0FBQ3ZDLFFBQUEsaUJBQWlCLEdBQUc7OztvQkFDeEIsV0FBTSxxQkFBcUIsRUFBQTtvQkFBbEMsV0FBTyxTQUEyQixFQUFDOzs7S0FDcEMsQ0FBQztBQUVGLElBQU0sU0FBUyxHQUFHLFVBQ2hCLEtBQVksRUFDWixPQUFzQjs7Ozs7cUJBRWxCLENBQUEsT0FBTyxLQUFLLFNBQVMsQ0FBQSxFQUFyQixjQUFxQjtnQkFDYixXQUFNLHFCQUFxQixFQUFBOztnQkFBckMsT0FBTyxHQUFHLFNBQTJCLENBQUM7OztnQkFFbEMsR0FBRyxHQUFHLE9BQU8sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7Z0JBQ2hDLElBQUksR0FBRyxHQUFHLENBQUMsRUFBRTtvQkFDWCxNQUFNLEtBQUssQ0FBQyxhQUFhLENBQUMsQ0FBQztpQkFDNUI7Z0JBQ0QsSUFBSSxHQUFHLEtBQUssQ0FBQztvQkFBRSxXQUFPLEVBQUUsRUFBQztnQkFDekIsV0FBTyxLQUFLLENBQUMsVUFBVSxFQUFFLEVBQUM7OztLQUMzQixDQUFDO0FBRVcsUUFBQSxjQUFjLEdBQUcsVUFDNUIsTUFBbUIsRUFDbkIsS0FBYSxFQUNiLE1BQWMsRUFDZCxPQUFzQjs7OztvQkFFUixXQUFNLGFBQUssQ0FBQyxvQkFBb0IsQ0FBQyxLQUFLLEVBQUUsTUFBTSxFQUFFLE1BQU0sQ0FBQyxFQUFBOztnQkFBL0QsS0FBSyxHQUFHLFNBQXVEO2dCQUN6RCxXQUFNLFNBQVMsQ0FBQyxLQUFLLEVBQUUsT0FBTyxDQUFDLEVBQUE7O2dCQUFyQyxHQUFHLEdBQUcsU0FBK0I7Z0JBQzNDLEtBQUssQ0FBQyxPQUFPLEVBQUUsQ0FBQztnQkFDaEIsV0FBTyxHQUFHLEVBQUM7OztLQUNaLENBQUM7QUFFVyxRQUFBLGNBQWMsR0FBRyxVQUM1QixNQUFtQixFQUNuQixLQUFhLEVBQ2IsTUFBYyxFQUNkLE9BQXNCOzs7O29CQUVSLFdBQU0sYUFBSyxDQUFDLG9CQUFvQixDQUFDLEtBQUssRUFBRSxNQUFNLEVBQUUsTUFBTSxDQUFDLEVBQUE7O2dCQUEvRCxLQUFLLEdBQUcsU0FBdUQ7Z0JBQ3pELFdBQU0sU0FBUyxDQUFDLEtBQUssRUFBRSxPQUFPLENBQUMsRUFBQTs7Z0JBQXJDLEdBQUcsR0FBRyxTQUErQjtnQkFDM0MsS0FBSyxDQUFDLE9BQU8sRUFBRSxDQUFDO2dCQUNoQixXQUFPLEdBQUcsRUFBQzs7O0tBQ1osQ0FBQztBQUVXLFFBQUEsYUFBYSxHQUFHLFVBQzNCLEtBQWdCLEVBQ2hCLE9BQXNCOzs7b0JBRWYsV0FBTSxzQkFBYyxDQUN6QixLQUFLLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFDakIsS0FBSyxDQUFDLEtBQUssRUFDWCxLQUFLLENBQUMsTUFBTSxFQUNaLE9BQU8sQ0FDUixFQUFBO29CQUxELFdBQU8sU0FLTixFQUFDOzs7S0FDSCxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW1hZ2UgfSBmcm9tICcuL0ltYWdlJztcclxuaW1wb3J0IHsgSW1hZ2VTY2FubmVyIH0gZnJvbSAnLi9JbWFnZVNjYW5uZXInO1xyXG5pbXBvcnQgeyBTeW1ib2wgfSBmcm9tICcuL1N5bWJvbCc7XHJcblxyXG5jb25zdCBkZWZhdWx0U2Nhbm5lclByb21pc2UgPSBJbWFnZVNjYW5uZXIuY3JlYXRlKCk7XHJcbmV4cG9ydCBjb25zdCBnZXREZWZhdWx0U2Nhbm5lciA9IGFzeW5jICgpID0+IHtcclxuICByZXR1cm4gYXdhaXQgZGVmYXVsdFNjYW5uZXJQcm9taXNlO1xyXG59O1xyXG5cclxuY29uc3Qgc2NhbkltYWdlID0gYXN5bmMgKFxyXG4gIGltYWdlOiBJbWFnZSxcclxuICBzY2FubmVyPzogSW1hZ2VTY2FubmVyXHJcbik6IFByb21pc2U8QXJyYXk8U3ltYm9sPj4gPT4ge1xyXG4gIGlmIChzY2FubmVyID09PSB1bmRlZmluZWQpIHtcclxuICAgIHNjYW5uZXIgPSBhd2FpdCBkZWZhdWx0U2Nhbm5lclByb21pc2U7XHJcbiAgfVxyXG4gIGNvbnN0IHJlcyA9IHNjYW5uZXIuc2NhbihpbWFnZSk7XHJcbiAgaWYgKHJlcyA8IDApIHtcclxuICAgIHRocm93IEVycm9yKCdTY2FuIEZhaWxlZCcpO1xyXG4gIH1cclxuICBpZiAocmVzID09PSAwKSByZXR1cm4gW107XHJcbiAgcmV0dXJuIGltYWdlLmdldFN5bWJvbHMoKTtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBzY2FuR3JheUJ1ZmZlciA9IGFzeW5jIChcclxuICBidWZmZXI6IEFycmF5QnVmZmVyLFxyXG4gIHdpZHRoOiBudW1iZXIsXHJcbiAgaGVpZ2h0OiBudW1iZXIsXHJcbiAgc2Nhbm5lcj86IEltYWdlU2Nhbm5lclxyXG4pOiBQcm9taXNlPEFycmF5PFN5bWJvbD4+ID0+IHtcclxuICBjb25zdCBpbWFnZSA9IGF3YWl0IEltYWdlLmNyZWF0ZUZyb21HcmF5QnVmZmVyKHdpZHRoLCBoZWlnaHQsIGJ1ZmZlcik7XHJcbiAgY29uc3QgcmVzID0gYXdhaXQgc2NhbkltYWdlKGltYWdlLCBzY2FubmVyKTtcclxuICBpbWFnZS5kZXN0cm95KCk7XHJcbiAgcmV0dXJuIHJlcztcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBzY2FuUkdCQUJ1ZmZlciA9IGFzeW5jIChcclxuICBidWZmZXI6IEFycmF5QnVmZmVyLFxyXG4gIHdpZHRoOiBudW1iZXIsXHJcbiAgaGVpZ2h0OiBudW1iZXIsXHJcbiAgc2Nhbm5lcj86IEltYWdlU2Nhbm5lclxyXG4pOiBQcm9taXNlPEFycmF5PFN5bWJvbD4+ID0+IHtcclxuICBjb25zdCBpbWFnZSA9IGF3YWl0IEltYWdlLmNyZWF0ZUZyb21SR0JBQnVmZmVyKHdpZHRoLCBoZWlnaHQsIGJ1ZmZlcik7XHJcbiAgY29uc3QgcmVzID0gYXdhaXQgc2NhbkltYWdlKGltYWdlLCBzY2FubmVyKTtcclxuICBpbWFnZS5kZXN0cm95KCk7XHJcbiAgcmV0dXJuIHJlcztcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBzY2FuSW1hZ2VEYXRhID0gYXN5bmMgKFxyXG4gIGltYWdlOiBJbWFnZURhdGEsXHJcbiAgc2Nhbm5lcj86IEltYWdlU2Nhbm5lclxyXG4pOiBQcm9taXNlPEFycmF5PFN5bWJvbD4+ID0+IHtcclxuICByZXR1cm4gYXdhaXQgc2NhblJHQkFCdWZmZXIoXHJcbiAgICBpbWFnZS5kYXRhLmJ1ZmZlcixcclxuICAgIGltYWdlLndpZHRoLFxyXG4gICAgaW1hZ2UuaGVpZ2h0LFxyXG4gICAgc2Nhbm5lclxyXG4gICk7XHJcbn07XHJcbiJdfQ==