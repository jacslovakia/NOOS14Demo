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
exports.ImageScanner = void 0;
var CppObject_1 = require("./CppObject");
var instance_1 = require("./instance");
var Symbol_1 = require("./Symbol");
var ImageScanner = (function (_super) {
    __extends(ImageScanner, _super);
    function ImageScanner() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ImageScanner.create = function () {
        return __awaiter(this, void 0, void 0, function () {
            var inst, ptr;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, instance_1.getInstance()];
                    case 1:
                        inst = _a.sent();
                        ptr = inst.ImageScanner_create();
                        return [2, new this(ptr, inst)];
                }
            });
        });
    };
    ImageScanner.prototype.destroy = function () {
        this.checkAlive();
        this.inst.ImageScanner_destory(this.ptr);
        this.ptr = 0;
    };
    ImageScanner.prototype.setConfig = function (sym, conf, value) {
        this.checkAlive();
        return this.inst.ImageScanner_set_config(this.ptr, sym, conf, value);
    };
    ImageScanner.prototype.enableCache = function (enable) {
        if (enable === void 0) { enable = true; }
        this.checkAlive();
        this.inst.ImageScanner_enable_cache(this.ptr, enable);
    };
    ImageScanner.prototype.recycleImage = function (image) {
        this.checkAlive();
        this.inst.ImageScanner_recycle_image(this.ptr, image.getPointer());
    };
    ImageScanner.prototype.getResults = function () {
        this.checkAlive();
        var res = this.inst.ImageScanner_get_results(this.ptr);
        return Symbol_1.Symbol.createSymbolsFromPtr(res, this.inst.memory.buffer);
    };
    ImageScanner.prototype.scan = function (image) {
        this.checkAlive();
        return this.inst.ImageScanner_scan(this.ptr, image.getPointer());
    };
    return ImageScanner;
}(CppObject_1.CppObject));
exports.ImageScanner = ImageScanner;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiSW1hZ2VTY2FubmVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiSW1hZ2VTY2FubmVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSx5Q0FBd0M7QUFFeEMsdUNBQXlDO0FBQ3pDLG1DQUFrQztBQUdsQztJQUFrQyxnQ0FBUztJQUEzQzs7SUFzQ0EsQ0FBQztJQXJDYyxtQkFBTSxHQUFuQjs7Ozs7NEJBQ2UsV0FBTSxzQkFBVyxFQUFFLEVBQUE7O3dCQUExQixJQUFJLEdBQUcsU0FBbUI7d0JBQzFCLEdBQUcsR0FBRyxJQUFJLENBQUMsbUJBQW1CLEVBQUUsQ0FBQzt3QkFDdkMsV0FBTyxJQUFJLElBQUksQ0FBQyxHQUFHLEVBQUUsSUFBSSxDQUFDLEVBQUM7Ozs7S0FDNUI7SUFFRCw4QkFBTyxHQUFQO1FBQ0UsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDO1FBQ2xCLElBQUksQ0FBQyxJQUFJLENBQUMsb0JBQW9CLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ3pDLElBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQyxDQUFDO0lBQ2YsQ0FBQztJQUVELGdDQUFTLEdBQVQsVUFBVSxHQUFtQixFQUFFLElBQW9CLEVBQUUsS0FBYTtRQUNoRSxJQUFJLENBQUMsVUFBVSxFQUFFLENBQUM7UUFDbEIsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLHVCQUF1QixDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLElBQUksRUFBRSxLQUFLLENBQUMsQ0FBQztJQUN2RSxDQUFDO0lBRUQsa0NBQVcsR0FBWCxVQUFZLE1BQXNCO1FBQXRCLHVCQUFBLEVBQUEsYUFBc0I7UUFDaEMsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDO1FBQ2xCLElBQUksQ0FBQyxJQUFJLENBQUMseUJBQXlCLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRSxNQUFNLENBQUMsQ0FBQztJQUN4RCxDQUFDO0lBRUQsbUNBQVksR0FBWixVQUFhLEtBQVk7UUFDdkIsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDO1FBQ2xCLElBQUksQ0FBQyxJQUFJLENBQUMsMEJBQTBCLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRSxLQUFLLENBQUMsVUFBVSxFQUFFLENBQUMsQ0FBQztJQUNyRSxDQUFDO0lBRUQsaUNBQVUsR0FBVjtRQUNFLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQztRQUNsQixJQUFNLEdBQUcsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLHdCQUF3QixDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUN6RCxPQUFPLGVBQU0sQ0FBQyxvQkFBb0IsQ0FBQyxHQUFHLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDbkUsQ0FBQztJQUVELDJCQUFJLEdBQUosVUFBSyxLQUFZO1FBQ2YsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDO1FBQ2xCLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUFFLEtBQUssQ0FBQyxVQUFVLEVBQUUsQ0FBQyxDQUFDO0lBQ25FLENBQUM7SUFDSCxtQkFBQztBQUFELENBQUMsQUF0Q0QsQ0FBa0MscUJBQVMsR0FzQzFDO0FBdENZLG9DQUFZIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ3BwT2JqZWN0IH0gZnJvbSAnLi9DcHBPYmplY3QnO1xyXG5pbXBvcnQgeyBJbWFnZSB9IGZyb20gJy4vSW1hZ2UnO1xyXG5pbXBvcnQgeyBnZXRJbnN0YW5jZSB9IGZyb20gJy4vaW5zdGFuY2UnO1xyXG5pbXBvcnQgeyBTeW1ib2wgfSBmcm9tICcuL1N5bWJvbCc7XHJcbmltcG9ydCB7IFpCYXJTeW1ib2xUeXBlLCBaQmFyQ29uZmlnVHlwZSB9IGZyb20gJy4vZW51bSc7XHJcblxyXG5leHBvcnQgY2xhc3MgSW1hZ2VTY2FubmVyIGV4dGVuZHMgQ3BwT2JqZWN0IHtcclxuICBzdGF0aWMgYXN5bmMgY3JlYXRlKCk6IFByb21pc2U8SW1hZ2VTY2FubmVyPiB7XHJcbiAgICBjb25zdCBpbnN0ID0gYXdhaXQgZ2V0SW5zdGFuY2UoKTtcclxuICAgIGNvbnN0IHB0ciA9IGluc3QuSW1hZ2VTY2FubmVyX2NyZWF0ZSgpO1xyXG4gICAgcmV0dXJuIG5ldyB0aGlzKHB0ciwgaW5zdCk7XHJcbiAgfVxyXG5cclxuICBkZXN0cm95KCk6IHZvaWQge1xyXG4gICAgdGhpcy5jaGVja0FsaXZlKCk7XHJcbiAgICB0aGlzLmluc3QuSW1hZ2VTY2FubmVyX2Rlc3RvcnkodGhpcy5wdHIpO1xyXG4gICAgdGhpcy5wdHIgPSAwO1xyXG4gIH1cclxuXHJcbiAgc2V0Q29uZmlnKHN5bTogWkJhclN5bWJvbFR5cGUsIGNvbmY6IFpCYXJDb25maWdUeXBlLCB2YWx1ZTogbnVtYmVyKTogbnVtYmVyIHtcclxuICAgIHRoaXMuY2hlY2tBbGl2ZSgpO1xyXG4gICAgcmV0dXJuIHRoaXMuaW5zdC5JbWFnZVNjYW5uZXJfc2V0X2NvbmZpZyh0aGlzLnB0ciwgc3ltLCBjb25mLCB2YWx1ZSk7XHJcbiAgfVxyXG5cclxuICBlbmFibGVDYWNoZShlbmFibGU6IGJvb2xlYW4gPSB0cnVlKTogdm9pZCB7XHJcbiAgICB0aGlzLmNoZWNrQWxpdmUoKTtcclxuICAgIHRoaXMuaW5zdC5JbWFnZVNjYW5uZXJfZW5hYmxlX2NhY2hlKHRoaXMucHRyLCBlbmFibGUpO1xyXG4gIH1cclxuXHJcbiAgcmVjeWNsZUltYWdlKGltYWdlOiBJbWFnZSk6IHZvaWQge1xyXG4gICAgdGhpcy5jaGVja0FsaXZlKCk7XHJcbiAgICB0aGlzLmluc3QuSW1hZ2VTY2FubmVyX3JlY3ljbGVfaW1hZ2UodGhpcy5wdHIsIGltYWdlLmdldFBvaW50ZXIoKSk7XHJcbiAgfVxyXG5cclxuICBnZXRSZXN1bHRzKCk6IEFycmF5PFN5bWJvbD4ge1xyXG4gICAgdGhpcy5jaGVja0FsaXZlKCk7XHJcbiAgICBjb25zdCByZXMgPSB0aGlzLmluc3QuSW1hZ2VTY2FubmVyX2dldF9yZXN1bHRzKHRoaXMucHRyKTtcclxuICAgIHJldHVybiBTeW1ib2wuY3JlYXRlU3ltYm9sc0Zyb21QdHIocmVzLCB0aGlzLmluc3QubWVtb3J5LmJ1ZmZlcik7XHJcbiAgfVxyXG5cclxuICBzY2FuKGltYWdlOiBJbWFnZSk6IG51bWJlciB7XHJcbiAgICB0aGlzLmNoZWNrQWxpdmUoKTtcclxuICAgIHJldHVybiB0aGlzLmluc3QuSW1hZ2VTY2FubmVyX3NjYW4odGhpcy5wdHIsIGltYWdlLmdldFBvaW50ZXIoKSk7XHJcbiAgfVxyXG59XHJcbiJdfQ==