"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
exports.Image = void 0;
var CppObject_1 = require("./CppObject");
var Symbol_1 = require("./Symbol");
var instance_1 = require("./instance");
var Image = (function (_super) {
    __extends(Image, _super);
    function Image() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Image.createFromGrayBuffer = function (width, height, dataBuf, sequence_num) {
        if (sequence_num === void 0) { sequence_num = 0; }
        return __awaiter(this, void 0, void 0, function () {
            var inst, heap, data, len, buf, ptr;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, instance_1.getInstance()];
                    case 1:
                        inst = _a.sent();
                        heap = new Uint8Array(inst.memory.buffer);
                        data = new Uint8Array(dataBuf);
                        len = width * height;
                        if (len !== data.byteLength) {
                            throw Error('dataBuf does not match width and height');
                        }
                        buf = inst.malloc(len);
                        heap.set(data, buf);
                        ptr = inst.Image_create(width, height, 0x30303859, buf, len, sequence_num);
                        return [2, new this(ptr, inst)];
                }
            });
        });
    };
    Image.createFromRGBABuffer = function (width, height, dataBuf, sequence_num) {
        if (sequence_num === void 0) { sequence_num = 0; }
        return __awaiter(this, void 0, void 0, function () {
            var inst, heap, data, len, buf, i, r, g, b, ptr;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, instance_1.getInstance()];
                    case 1:
                        inst = _a.sent();
                        heap = new Uint8Array(inst.memory.buffer);
                        data = new Uint8Array(dataBuf);
                        len = width * height;
                        if (len * 4 !== data.byteLength) {
                            throw Error('dataBuf does not match width and height');
                        }
                        buf = inst.malloc(len);
                        for (i = 0; i < len; ++i) {
                            r = data[i * 4];
                            g = data[i * 4 + 1];
                            b = data[i * 4 + 2];
                            heap[buf + i] = (r * 19595 + g * 38469 + b * 7472) >> 16;
                        }
                        ptr = inst.Image_create(width, height, 0x30303859, buf, len, sequence_num);
                        return [2, new this(ptr, inst)];
                }
            });
        });
    };
    Image.prototype.destroy = function () {
        this.checkAlive();
        this.inst.Image_destory(this.ptr);
        this.ptr = 0;
    };
    Image.prototype.getSymbols = function () {
        this.checkAlive();
        var res = this.inst.Image_get_symbols(this.ptr);
        return Symbol_1.Symbol.createSymbolsFromPtr(res, this.inst.memory.buffer);
    };
    return Image;
}(CppObject_1.CppObject));
exports.Image = Image;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiSW1hZ2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJJbWFnZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEseUNBQXdDO0FBQ3hDLG1DQUFrQztBQUNsQyx1Q0FBeUM7QUFFekM7SUFBMkIseUJBQVM7SUFBcEM7O0lBcUVBLENBQUM7SUFwRWMsMEJBQW9CLEdBQWpDLFVBQ0UsS0FBYSxFQUNiLE1BQWMsRUFDZCxPQUFvQixFQUNwQixZQUF3QjtRQUF4Qiw2QkFBQSxFQUFBLGdCQUF3Qjs7Ozs7NEJBRVgsV0FBTSxzQkFBVyxFQUFFLEVBQUE7O3dCQUExQixJQUFJLEdBQUcsU0FBbUI7d0JBQzFCLElBQUksR0FBRyxJQUFJLFVBQVUsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDO3dCQUMxQyxJQUFJLEdBQUcsSUFBSSxVQUFVLENBQUMsT0FBTyxDQUFDLENBQUM7d0JBQy9CLEdBQUcsR0FBRyxLQUFLLEdBQUcsTUFBTSxDQUFDO3dCQUMzQixJQUFJLEdBQUcsS0FBSyxJQUFJLENBQUMsVUFBVSxFQUFFOzRCQUMzQixNQUFNLEtBQUssQ0FBQyx5Q0FBeUMsQ0FBQyxDQUFDO3lCQUN4RDt3QkFDSyxHQUFHLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQzt3QkFDN0IsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLEVBQUUsR0FBRyxDQUFDLENBQUM7d0JBQ2QsR0FBRyxHQUFHLElBQUksQ0FBQyxZQUFZLENBQzNCLEtBQUssRUFDTCxNQUFNLEVBQ04sVUFBVSxFQUNWLEdBQUcsRUFDSCxHQUFHLEVBQ0gsWUFBWSxDQUNiLENBQUM7d0JBQ0YsV0FBTyxJQUFJLElBQUksQ0FBQyxHQUFHLEVBQUUsSUFBSSxDQUFDLEVBQUM7Ozs7S0FDNUI7SUFFWSwwQkFBb0IsR0FBakMsVUFDRSxLQUFhLEVBQ2IsTUFBYyxFQUNkLE9BQW9CLEVBQ3BCLFlBQXdCO1FBQXhCLDZCQUFBLEVBQUEsZ0JBQXdCOzs7Ozs0QkFFWCxXQUFNLHNCQUFXLEVBQUUsRUFBQTs7d0JBQTFCLElBQUksR0FBRyxTQUFtQjt3QkFDMUIsSUFBSSxHQUFHLElBQUksVUFBVSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUM7d0JBQzFDLElBQUksR0FBRyxJQUFJLFVBQVUsQ0FBQyxPQUFPLENBQUMsQ0FBQzt3QkFDL0IsR0FBRyxHQUFHLEtBQUssR0FBRyxNQUFNLENBQUM7d0JBQzNCLElBQUksR0FBRyxHQUFHLENBQUMsS0FBSyxJQUFJLENBQUMsVUFBVSxFQUFFOzRCQUMvQixNQUFNLEtBQUssQ0FBQyx5Q0FBeUMsQ0FBQyxDQUFDO3lCQUN4RDt3QkFDSyxHQUFHLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQzt3QkFDN0IsS0FBUyxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxHQUFHLEVBQUUsRUFBRSxDQUFDLEVBQUU7NEJBQ3RCLENBQUMsR0FBRyxJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDOzRCQUNoQixDQUFDLEdBQUcsSUFBSSxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7NEJBQ3BCLENBQUMsR0FBRyxJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQzs0QkFDMUIsSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxLQUFLLEdBQUcsQ0FBQyxHQUFHLEtBQUssR0FBRyxDQUFDLEdBQUcsSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDO3lCQUMxRDt3QkFDSyxHQUFHLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FDM0IsS0FBSyxFQUNMLE1BQU0sRUFDTixVQUFVLEVBQ1YsR0FBRyxFQUNILEdBQUcsRUFDSCxZQUFZLENBQ2IsQ0FBQzt3QkFDRixXQUFPLElBQUksSUFBSSxDQUFDLEdBQUcsRUFBRSxJQUFJLENBQUMsRUFBQzs7OztLQUM1QjtJQUVELHVCQUFPLEdBQVA7UUFDRSxJQUFJLENBQUMsVUFBVSxFQUFFLENBQUM7UUFDbEIsSUFBSSxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ2xDLElBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQyxDQUFDO0lBQ2YsQ0FBQztJQUVELDBCQUFVLEdBQVY7UUFDRSxJQUFJLENBQUMsVUFBVSxFQUFFLENBQUM7UUFDbEIsSUFBTSxHQUFHLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDbEQsT0FBTyxlQUFNLENBQUMsb0JBQW9CLENBQUMsR0FBRyxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQ25FLENBQUM7SUFDSCxZQUFDO0FBQUQsQ0FBQyxBQXJFRCxDQUEyQixxQkFBUyxHQXFFbkM7QUFyRVksc0JBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDcHBPYmplY3QgfSBmcm9tICcuL0NwcE9iamVjdCc7XHJcbmltcG9ydCB7IFN5bWJvbCB9IGZyb20gJy4vU3ltYm9sJztcclxuaW1wb3J0IHsgZ2V0SW5zdGFuY2UgfSBmcm9tICcuL2luc3RhbmNlJztcclxuXHJcbmV4cG9ydCBjbGFzcyBJbWFnZSBleHRlbmRzIENwcE9iamVjdCB7XHJcbiAgc3RhdGljIGFzeW5jIGNyZWF0ZUZyb21HcmF5QnVmZmVyKFxyXG4gICAgd2lkdGg6IG51bWJlcixcclxuICAgIGhlaWdodDogbnVtYmVyLFxyXG4gICAgZGF0YUJ1ZjogQXJyYXlCdWZmZXIsXHJcbiAgICBzZXF1ZW5jZV9udW06IG51bWJlciA9IDBcclxuICApOiBQcm9taXNlPEltYWdlPiB7XHJcbiAgICBjb25zdCBpbnN0ID0gYXdhaXQgZ2V0SW5zdGFuY2UoKTtcclxuICAgIGNvbnN0IGhlYXAgPSBuZXcgVWludDhBcnJheShpbnN0Lm1lbW9yeS5idWZmZXIpO1xyXG4gICAgY29uc3QgZGF0YSA9IG5ldyBVaW50OEFycmF5KGRhdGFCdWYpO1xyXG4gICAgY29uc3QgbGVuID0gd2lkdGggKiBoZWlnaHQ7XHJcbiAgICBpZiAobGVuICE9PSBkYXRhLmJ5dGVMZW5ndGgpIHtcclxuICAgICAgdGhyb3cgRXJyb3IoJ2RhdGFCdWYgZG9lcyBub3QgbWF0Y2ggd2lkdGggYW5kIGhlaWdodCcpO1xyXG4gICAgfVxyXG4gICAgY29uc3QgYnVmID0gaW5zdC5tYWxsb2MobGVuKTtcclxuICAgIGhlYXAuc2V0KGRhdGEsIGJ1Zik7XHJcbiAgICBjb25zdCBwdHIgPSBpbnN0LkltYWdlX2NyZWF0ZShcclxuICAgICAgd2lkdGgsXHJcbiAgICAgIGhlaWdodCxcclxuICAgICAgMHgzMDMwMzg1OSAvKiBZODAwICovLFxyXG4gICAgICBidWYsXHJcbiAgICAgIGxlbixcclxuICAgICAgc2VxdWVuY2VfbnVtXHJcbiAgICApO1xyXG4gICAgcmV0dXJuIG5ldyB0aGlzKHB0ciwgaW5zdCk7XHJcbiAgfVxyXG5cclxuICBzdGF0aWMgYXN5bmMgY3JlYXRlRnJvbVJHQkFCdWZmZXIoXHJcbiAgICB3aWR0aDogbnVtYmVyLFxyXG4gICAgaGVpZ2h0OiBudW1iZXIsXHJcbiAgICBkYXRhQnVmOiBBcnJheUJ1ZmZlcixcclxuICAgIHNlcXVlbmNlX251bTogbnVtYmVyID0gMFxyXG4gICk6IFByb21pc2U8SW1hZ2U+IHtcclxuICAgIGNvbnN0IGluc3QgPSBhd2FpdCBnZXRJbnN0YW5jZSgpO1xyXG4gICAgY29uc3QgaGVhcCA9IG5ldyBVaW50OEFycmF5KGluc3QubWVtb3J5LmJ1ZmZlcik7XHJcbiAgICBjb25zdCBkYXRhID0gbmV3IFVpbnQ4QXJyYXkoZGF0YUJ1Zik7XHJcbiAgICBjb25zdCBsZW4gPSB3aWR0aCAqIGhlaWdodDtcclxuICAgIGlmIChsZW4gKiA0ICE9PSBkYXRhLmJ5dGVMZW5ndGgpIHtcclxuICAgICAgdGhyb3cgRXJyb3IoJ2RhdGFCdWYgZG9lcyBub3QgbWF0Y2ggd2lkdGggYW5kIGhlaWdodCcpO1xyXG4gICAgfVxyXG4gICAgY29uc3QgYnVmID0gaW5zdC5tYWxsb2MobGVuKTtcclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGVuOyArK2kpIHtcclxuICAgICAgY29uc3QgciA9IGRhdGFbaSAqIDRdO1xyXG4gICAgICBjb25zdCBnID0gZGF0YVtpICogNCArIDFdO1xyXG4gICAgICBjb25zdCBiID0gZGF0YVtpICogNCArIDJdO1xyXG4gICAgICBoZWFwW2J1ZiArIGldID0gKHIgKiAxOTU5NSArIGcgKiAzODQ2OSArIGIgKiA3NDcyKSA+PiAxNjtcclxuICAgIH1cclxuICAgIGNvbnN0IHB0ciA9IGluc3QuSW1hZ2VfY3JlYXRlKFxyXG4gICAgICB3aWR0aCxcclxuICAgICAgaGVpZ2h0LFxyXG4gICAgICAweDMwMzAzODU5IC8qIFk4MDAgKi8sXHJcbiAgICAgIGJ1ZixcclxuICAgICAgbGVuLFxyXG4gICAgICBzZXF1ZW5jZV9udW1cclxuICAgICk7XHJcbiAgICByZXR1cm4gbmV3IHRoaXMocHRyLCBpbnN0KTtcclxuICB9XHJcblxyXG4gIGRlc3Ryb3koKTogdm9pZCB7XHJcbiAgICB0aGlzLmNoZWNrQWxpdmUoKTtcclxuICAgIHRoaXMuaW5zdC5JbWFnZV9kZXN0b3J5KHRoaXMucHRyKTtcclxuICAgIHRoaXMucHRyID0gMDtcclxuICB9XHJcblxyXG4gIGdldFN5bWJvbHMoKTogQXJyYXk8U3ltYm9sPiB7XHJcbiAgICB0aGlzLmNoZWNrQWxpdmUoKTtcclxuICAgIGNvbnN0IHJlcyA9IHRoaXMuaW5zdC5JbWFnZV9nZXRfc3ltYm9scyh0aGlzLnB0cik7XHJcbiAgICByZXR1cm4gU3ltYm9sLmNyZWF0ZVN5bWJvbHNGcm9tUHRyKHJlcywgdGhpcy5pbnN0Lm1lbW9yeS5idWZmZXIpO1xyXG4gIH1cclxufVxyXG4iXX0=