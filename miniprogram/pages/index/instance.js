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
exports.getMemoryGrowTimestamp = exports.getInstance = void 0;
var load_1 = require("./load");
var inst = null;
var HEAP32 = new Int32Array();
var clock_gettime = function (clk_id, tp) {
    var now = Date.now();
    HEAP32[tp >> 2] = (now / 1e3) | 0;
    HEAP32[(tp + 4) >> 2] = ((now % 1e3) * 1e3 * 1e3) | 0;
    return 0;
};
var lastGrowTimestamp = 0;
var emscripten_notify_memory_growth = function (idx) {
    if (lastGrowTimestamp) {
        console.info('zbar.wasm: Memory Grow: ', inst.memory.buffer.byteLength);
    }
    lastGrowTimestamp = Date.now();
    HEAP32 = new Int32Array(inst.memory.buffer);
};
var importObj = {
    env: {
        clock_gettime: clock_gettime,
        emscripten_notify_memory_growth: emscripten_notify_memory_growth
    }
};
var instPromise = (function () { return __awaiter(void 0, void 0, void 0, function () {
    var res;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4, load_1.loadWasmInstance(importObj)];
            case 1:
                res = _a.sent();
                if (!res) {
                    throw Error('WASM was not loaded');
                }
                inst = res.exports;
                emscripten_notify_memory_growth(0);
                return [2, inst];
        }
    });
}); })();
exports.getInstance = function () { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4, instPromise];
            case 1: return [2, _a.sent()];
        }
    });
}); };
exports.getMemoryGrowTimestamp = function () {
    return lastGrowTimestamp;
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5zdGFuY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbnN0YW5jZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSwrQkFBMEM7QUFHMUMsSUFBSSxJQUFJLEdBQWdCLElBQUksQ0FBQztBQUM3QixJQUFJLE1BQU0sR0FBRyxJQUFJLFVBQVUsRUFBRSxDQUFDO0FBRTlCLElBQU0sYUFBYSxHQUFHLFVBQUMsTUFBYyxFQUFFLEVBQVU7SUFDL0MsSUFBTSxHQUFHLEdBQUcsSUFBSSxDQUFDLEdBQUcsRUFBRSxDQUFDO0lBQ3ZCLE1BQU0sQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQ2xDLE1BQU0sQ0FBQyxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxHQUFHLEdBQUcsQ0FBQyxHQUFHLEdBQUcsR0FBRyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDdEQsT0FBTyxDQUFDLENBQUM7QUFDWCxDQUFDLENBQUM7QUFFRixJQUFJLGlCQUFpQixHQUFHLENBQUMsQ0FBQztBQUMxQixJQUFNLCtCQUErQixHQUFHLFVBQUMsR0FBVztJQUNsRCxJQUFJLGlCQUFpQixFQUFFO1FBQ3JCLE9BQU8sQ0FBQyxJQUFJLENBQUMsMEJBQTBCLEVBQUUsSUFBSyxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsVUFBVSxDQUFDLENBQUM7S0FDMUU7SUFDRCxpQkFBaUIsR0FBRyxJQUFJLENBQUMsR0FBRyxFQUFFLENBQUM7SUFDL0IsTUFBTSxHQUFHLElBQUksVUFBVSxDQUFDLElBQUssQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUM7QUFDL0MsQ0FBQyxDQUFDO0FBRUYsSUFBTSxTQUFTLEdBQUc7SUFDaEIsR0FBRyxFQUFFO1FBQ0gsYUFBYSxlQUFBO1FBQ2IsK0JBQStCLGlDQUFBO0tBQ2hDO0NBQ0YsQ0FBQztBQUVGLElBQUksV0FBVyxHQUFHLENBQUM7Ozs7b0JBQ0wsV0FBTSx1QkFBZ0IsQ0FBQyxTQUFTLENBQUMsRUFBQTs7Z0JBQXZDLEdBQUcsR0FBRyxTQUFpQztnQkFDN0MsSUFBSSxDQUFDLEdBQUcsRUFBRTtvQkFDUixNQUFNLEtBQUssQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDO2lCQUNwQztnQkFDRCxJQUFJLEdBQUcsR0FBRyxDQUFDLE9BQWUsQ0FBQztnQkFDM0IsK0JBQStCLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQ25DLFdBQU8sSUFBSSxFQUFDOzs7S0FDYixDQUFDLEVBQUUsQ0FBQztBQUVRLFFBQUEsV0FBVyxHQUFHOzs7b0JBQ2xCLFdBQU0sV0FBVyxFQUFBO29CQUF4QixXQUFPLFNBQWlCLEVBQUM7OztLQUMxQixDQUFDO0FBRVcsUUFBQSxzQkFBc0IsR0FBRztJQUNwQyxPQUFPLGlCQUFpQixDQUFDO0FBQzNCLENBQUMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGxvYWRXYXNtSW5zdGFuY2UgfSBmcm9tICcuL2xvYWQnO1xyXG5pbXBvcnQgWkJhciBmcm9tICcuL1pCYXInO1xyXG5cclxubGV0IGluc3Q6IFpCYXIgfCBudWxsID0gbnVsbDtcclxubGV0IEhFQVAzMiA9IG5ldyBJbnQzMkFycmF5KCk7XHJcblxyXG5jb25zdCBjbG9ja19nZXR0aW1lID0gKGNsa19pZDogbnVtYmVyLCB0cDogbnVtYmVyKTogbnVtYmVyID0+IHtcclxuICBjb25zdCBub3cgPSBEYXRlLm5vdygpO1xyXG4gIEhFQVAzMlt0cCA+PiAyXSA9IChub3cgLyAxZTMpIHwgMDtcclxuICBIRUFQMzJbKHRwICsgNCkgPj4gMl0gPSAoKG5vdyAlIDFlMykgKiAxZTMgKiAxZTMpIHwgMDtcclxuICByZXR1cm4gMDtcclxufTtcclxuXHJcbmxldCBsYXN0R3Jvd1RpbWVzdGFtcCA9IDA7XHJcbmNvbnN0IGVtc2NyaXB0ZW5fbm90aWZ5X21lbW9yeV9ncm93dGggPSAoaWR4OiBudW1iZXIpID0+IHtcclxuICBpZiAobGFzdEdyb3dUaW1lc3RhbXApIHtcclxuICAgIGNvbnNvbGUuaW5mbygnemJhci53YXNtOiBNZW1vcnkgR3JvdzogJywgaW5zdCEubWVtb3J5LmJ1ZmZlci5ieXRlTGVuZ3RoKTtcclxuICB9XHJcbiAgbGFzdEdyb3dUaW1lc3RhbXAgPSBEYXRlLm5vdygpO1xyXG4gIEhFQVAzMiA9IG5ldyBJbnQzMkFycmF5KGluc3QhLm1lbW9yeS5idWZmZXIpO1xyXG59O1xyXG5cclxuY29uc3QgaW1wb3J0T2JqID0ge1xyXG4gIGVudjoge1xyXG4gICAgY2xvY2tfZ2V0dGltZSxcclxuICAgIGVtc2NyaXB0ZW5fbm90aWZ5X21lbW9yeV9ncm93dGhcclxuICB9XHJcbn07XHJcblxyXG5sZXQgaW5zdFByb21pc2UgPSAoYXN5bmMgKCkgPT4ge1xyXG4gIGNvbnN0IHJlcyA9IGF3YWl0IGxvYWRXYXNtSW5zdGFuY2UoaW1wb3J0T2JqKTtcclxuICBpZiAoIXJlcykge1xyXG4gICAgdGhyb3cgRXJyb3IoJ1dBU00gd2FzIG5vdCBsb2FkZWQnKTtcclxuICB9XHJcbiAgaW5zdCA9IHJlcy5leHBvcnRzIGFzIFpCYXI7XHJcbiAgZW1zY3JpcHRlbl9ub3RpZnlfbWVtb3J5X2dyb3d0aCgwKTtcclxuICByZXR1cm4gaW5zdDtcclxufSkoKTtcclxuXHJcbmV4cG9ydCBjb25zdCBnZXRJbnN0YW5jZSA9IGFzeW5jICgpOiBQcm9taXNlPFpCYXI+ID0+IHtcclxuICByZXR1cm4gYXdhaXQgaW5zdFByb21pc2U7XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgZ2V0TWVtb3J5R3Jvd1RpbWVzdGFtcCA9ICgpOiBudW1iZXIgPT4ge1xyXG4gIHJldHVybiBsYXN0R3Jvd1RpbWVzdGFtcDtcclxufTtcclxuIl19