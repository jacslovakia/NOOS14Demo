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
Object.defineProperty(exports, "__esModule", { value: true });
exports.Symbol = void 0;
var enum_1 = require("./enum");
var TypePointer = (function () {
    function TypePointer(ptr, buf) {
        this.ptr = ptr;
        this.ptr32 = ptr >> 2;
        this.buf = buf;
        this.HEAP8 = new Int8Array(buf);
        this.HEAPU32 = new Uint32Array(buf);
        this.HEAP32 = new Int32Array(buf);
    }
    return TypePointer;
}());
var SymbolPtr = (function (_super) {
    __extends(SymbolPtr, _super);
    function SymbolPtr() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(SymbolPtr.prototype, "type", {
        get: function () {
            return this.HEAPU32[this.ptr32];
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SymbolPtr.prototype, "data", {
        get: function () {
            var len = this.HEAPU32[this.ptr32 + 2];
            var ptr = this.HEAPU32[this.ptr32 + 3];
            return Int8Array.from(this.HEAP8.subarray(ptr, ptr + len));
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SymbolPtr.prototype, "points", {
        get: function () {
            var len = this.HEAPU32[this.ptr32 + 5];
            var ptr = this.HEAPU32[this.ptr32 + 6];
            var ptr32 = ptr >> 2;
            var res = [];
            for (var i = 0; i < len; ++i) {
                var x = this.HEAP32[ptr32 + i * 2];
                var y = this.HEAP32[ptr32 + i * 2 + 1];
                res.push({ x: x, y: y });
            }
            return res;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SymbolPtr.prototype, "next", {
        get: function () {
            var ptr = this.HEAPU32[this.ptr32 + 8];
            if (!ptr)
                return null;
            return new SymbolPtr(ptr, this.buf);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SymbolPtr.prototype, "time", {
        get: function () {
            return this.HEAPU32[this.ptr32 + 10];
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SymbolPtr.prototype, "cacheCount", {
        get: function () {
            return this.HEAP32[this.ptr32 + 11];
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SymbolPtr.prototype, "quality", {
        get: function () {
            return this.HEAP32[this.ptr32 + 12];
        },
        enumerable: false,
        configurable: true
    });
    return SymbolPtr;
}(TypePointer));
var SymbolSetPtr = (function (_super) {
    __extends(SymbolSetPtr, _super);
    function SymbolSetPtr() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(SymbolSetPtr.prototype, "head", {
        get: function () {
            var ptr = this.HEAPU32[this.ptr32 + 2];
            if (!ptr)
                return null;
            return new SymbolPtr(ptr, this.buf);
        },
        enumerable: false,
        configurable: true
    });
    return SymbolSetPtr;
}(TypePointer));
var Symbol = (function () {
    function Symbol(ptr) {
        this.type = ptr.type;
        this.typeName = enum_1.ZBarSymbolType[this.type];
        this.data = ptr.data;
        this.points = ptr.points;
        this.time = ptr.time;
        this.cacheCount = ptr.cacheCount;
        this.quality = ptr.quality;
    }
    Symbol.createSymbolsFromPtr = function (ptr, buf) {
        if (ptr == 0)
            return [];
        var set = new SymbolSetPtr(ptr, buf);
        var symbol = set.head;
        var res = [];
        while (symbol !== null) {
            res.push(new Symbol(symbol));
            symbol = symbol.next;
        }
        return res;
    };
    Symbol.prototype.decode = function (encoding) {
        var encodedString = String.fromCharCode.apply(null, this.data);
        return decodeURIComponent(escape((encodedString)));
    };
    return Symbol;
}());
exports.Symbol = Symbol;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU3ltYm9sLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiU3ltYm9sLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQSwrQkFBd0M7QUFPeEM7SUFPRSxxQkFBWSxHQUFXLEVBQUUsR0FBZ0I7UUFDdkMsSUFBSSxDQUFDLEdBQUcsR0FBRyxHQUFHLENBQUM7UUFDZixJQUFJLENBQUMsS0FBSyxHQUFHLEdBQUcsSUFBSSxDQUFDLENBQUM7UUFDdEIsSUFBSSxDQUFDLEdBQUcsR0FBRyxHQUFHLENBQUM7UUFDZixJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksU0FBUyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ2hDLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxXQUFXLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDcEMsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLFVBQVUsQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUNwQyxDQUFDO0lBQ0gsa0JBQUM7QUFBRCxDQUFDLEFBZkQsSUFlQztBQUVEO0lBQXdCLDZCQUFXO0lBQW5DOztJQXlDQSxDQUFDO0lBeENDLHNCQUFJLDJCQUFJO2FBQVI7WUFDRSxPQUFPLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBbUIsQ0FBQztRQUNwRCxDQUFDOzs7T0FBQTtJQUVELHNCQUFJLDJCQUFJO2FBQVI7WUFDRSxJQUFNLEdBQUcsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFDLENBQUM7WUFDekMsSUFBTSxHQUFHLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQyxDQUFDO1lBQ3pDLE9BQU8sU0FBUyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxHQUFHLEVBQUUsR0FBRyxHQUFHLEdBQUcsQ0FBQyxDQUFDLENBQUM7UUFDN0QsQ0FBQzs7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QUMsT0FBTyxHQUFHLEdBQUcsQ0FBQyxPQUFPLENBQUM7SUFDN0IsQ0FBQztJQUVNLDJCQUFvQixHQUEzQixVQUE0QixHQUFXLEVBQUUsR0FBZ0I7UUFDdkQsSUFBSSxHQUFHLElBQUksQ0FBQztZQUFFLE9BQU8sRUFBRSxDQUFDO1FBRXhCLElBQU0sR0FBRyxHQUFHLElBQUksWUFBWSxDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUMsQ0FBQztRQUN2QyxJQUFJLE1BQU0sR0FBRyxHQUFHLENBQUMsSUFBSSxDQUFDO1FBQ3RCLElBQU0sR0FBRyxHQUFHLEVBQUUsQ0FBQztRQUNmLE9BQU8sTUFBTSxLQUFLLElBQUksRUFBRTtZQUN0QixHQUFHLENBQUMsSUFBSSxDQUFDLElBQUksTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7WUFDN0IsTUFBTSxHQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUM7U0FDdEI7UUFDRCxPQUFPLEdBQUcsQ0FBQztJQUNiLENBQUM7SUFFRCx1QkFBTSxHQUFOLFVBQU8sUUFBaUI7UUFFdEIsSUFBSSxhQUFhLEdBQUcsTUFBTSxDQUFDLFlBQVksQ0FBQyxLQUFLLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUcvRCxPQUFPLGtCQUFrQixDQUFDLE1BQU0sQ0FBQyxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUNyRCxDQUFDO0lBQ0gsYUFBQztBQUFELENBQUMsQUF2Q0QsSUF1Q0M7QUF2Q1ksd0JBQU0iLCJzb3VyY2VzQ29udGVudCI6WyIvLyBpbXBvcnQgeyBnZXRJbnN0YW5jZSB9IGZyb20gJy4vaW5zdGFuY2UnO1xyXG5pbXBvcnQgeyBaQmFyU3ltYm9sVHlwZSB9IGZyb20gJy4vZW51bSc7XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIFBvaW50IHtcclxuICB4OiBudW1iZXI7XHJcbiAgeTogbnVtYmVyO1xyXG59XHJcblxyXG5jbGFzcyBUeXBlUG9pbnRlciB7XHJcbiAgcHJvdGVjdGVkIHB0cjogbnVtYmVyO1xyXG4gIHByb3RlY3RlZCBwdHIzMjogbnVtYmVyO1xyXG4gIHByb3RlY3RlZCBidWY6IEFycmF5QnVmZmVyO1xyXG4gIHByb3RlY3RlZCBIRUFQODogSW50OEFycmF5O1xyXG4gIHByb3RlY3RlZCBIRUFQMzI6IEludDMyQXJyYXk7XHJcbiAgcHJvdGVjdGVkIEhFQVBVMzI6IFVpbnQzMkFycmF5O1xyXG4gIGNvbnN0cnVjdG9yKHB0cjogbnVtYmVyLCBidWY6IEFycmF5QnVmZmVyKSB7XHJcbiAgICB0aGlzLnB0ciA9IHB0cjtcclxuICAgIHRoaXMucHRyMzIgPSBwdHIgPj4gMjtcclxuICAgIHRoaXMuYnVmID0gYnVmO1xyXG4gICAgdGhpcy5IRUFQOCA9IG5ldyBJbnQ4QXJyYXkoYnVmKTtcclxuICAgIHRoaXMuSEVBUFUzMiA9IG5ldyBVaW50MzJBcnJheShidWYpO1xyXG4gICAgdGhpcy5IRUFQMzIgPSBuZXcgSW50MzJBcnJheShidWYpO1xyXG4gIH1cclxufVxyXG5cclxuY2xhc3MgU3ltYm9sUHRyIGV4dGVuZHMgVHlwZVBvaW50ZXIge1xyXG4gIGdldCB0eXBlKCk6IFpCYXJTeW1ib2xUeXBlIHtcclxuICAgIHJldHVybiB0aGlzLkhFQVBVMzJbdGhpcy5wdHIzMl0gYXMgWkJhclN5bWJvbFR5cGU7XHJcbiAgfVxyXG5cclxuICBnZXQgZGF0YSgpOiBJbnQ4QXJyYXkge1xyXG4gICAgY29uc3QgbGVuID0gdGhpcy5IRUFQVTMyW3RoaXMucHRyMzIgKyAyXTtcclxuICAgIGNvbnN0IHB0ciA9IHRoaXMuSEVBUFUzMlt0aGlzLnB0cjMyICsgM107XHJcbiAgICByZXR1cm4gSW50OEFycmF5LmZyb20odGhpcy5IRUFQOC5zdWJhcnJheShwdHIsIHB0ciArIGxlbikpO1xyXG4gIH1cclxuXHJcbiAgZ2V0IHBvaW50cygpOiBBcnJheTxQb2ludD4ge1xyXG4gICAgY29uc3QgbGVuID0gdGhpcy5IRUFQVTMyW3RoaXMucHRyMzIgKyA1XTtcclxuICAgIGNvbnN0IHB0ciA9IHRoaXMuSEVBUFUzMlt0aGlzLnB0cjMyICsgNl07XHJcbiAgICBjb25zdCBwdHIzMiA9IHB0ciA+PiAyO1xyXG4gICAgY29uc3QgcmVzID0gW107XHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxlbjsgKytpKSB7XHJcbiAgICAgIGNvbnN0IHggPSB0aGlzLkhFQVAzMltwdHIzMiArIGkgKiAyXTtcclxuICAgICAgY29uc3QgeSA9IHRoaXMuSEVBUDMyW3B0cjMyICsgaSAqIDIgKyAxXTtcclxuICAgICAgcmVzLnB1c2goeyB4LCB5IH0gYXMgUG9pbnQpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHJlcztcclxuICB9XHJcblxyXG4gIGdldCBuZXh0KCk6IFN5bWJvbFB0ciB8IG51bGwge1xyXG4gICAgY29uc3QgcHRyID0gdGhpcy5IRUFQVTMyW3RoaXMucHRyMzIgKyA4XTtcclxuICAgIGlmICghcHRyKSByZXR1cm4gbnVsbDtcclxuICAgIHJldHVybiBuZXcgU3ltYm9sUHRyKHB0ciwgdGhpcy5idWYpO1xyXG4gIH1cclxuXHJcbiAgZ2V0IHRpbWUoKTogbnVtYmVyIHtcclxuICAgIHJldHVybiB0aGlzLkhFQVBVMzJbdGhpcy5wdHIzMiArIDEwXTtcclxuICB9XHJcblxyXG4gIGdldCBjYWNoZUNvdW50KCk6IG51bWJlciB7XHJcbiAgICByZXR1cm4gdGhpcy5IRUFQMzJbdGhpcy5wdHIzMiArIDExXTtcclxuICB9XHJcblxyXG4gIGdldCBxdWFsaXR5KCk6IG51bWJlciB7XHJcbiAgICByZXR1cm4gdGhpcy5IRUFQMzJbdGhpcy5wdHIzMiArIDEyXTtcclxuICB9XHJcbn1cclxuXHJcbmNsYXNzIFN5bWJvbFNldFB0ciBleHRlbmRzIFR5cGVQb2ludGVyIHtcclxuICBnZXQgaGVhZCgpOiBTeW1ib2xQdHIgfCBudWxsIHtcclxuICAgIGNvbnN0IHB0ciA9IHRoaXMuSEVBUFUzMlt0aGlzLnB0cjMyICsgMl07XHJcbiAgICBpZiAoIXB0cikgcmV0dXJuIG51bGw7XHJcbiAgICByZXR1cm4gbmV3IFN5bWJvbFB0cihwdHIsIHRoaXMuYnVmKTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBTeW1ib2wge1xyXG4gIHR5cGU6IFpCYXJTeW1ib2xUeXBlO1xyXG4gIHR5cGVOYW1lOiBzdHJpbmc7XHJcbiAgZGF0YTogSW50OEFycmF5O1xyXG4gIHBvaW50czogQXJyYXk8UG9pbnQ+O1xyXG4gIHRpbWU6IG51bWJlcjtcclxuICBjYWNoZUNvdW50OiBudW1iZXI7XHJcbiAgcXVhbGl0eTogbnVtYmVyO1xyXG5cclxuICBwcml2YXRlIGNvbnN0cnVjdG9yKHB0cjogU3ltYm9sUHRyKSB7XHJcbiAgICB0aGlzLnR5cGUgPSBwdHIudHlwZTtcclxuICAgIHRoaXMudHlwZU5hbWUgPSBaQmFyU3ltYm9sVHlwZVt0aGlzLnR5cGVdO1xyXG4gICAgdGhpcy5kYXRhID0gcHRyLmRhdGE7XHJcbiAgICB0aGlzLnBvaW50cyA9IHB0ci5wb2ludHM7XHJcbiAgICB0aGlzLnRpbWUgPSBwdHIudGltZTtcclxuICAgIHRoaXMuY2FjaGVDb3VudCA9IHB0ci5jYWNoZUNvdW50O1xyXG4gICAgdGhpcy5xdWFsaXR5ID0gcHRyLnF1YWxpdHk7XHJcbiAgfVxyXG5cclxuICBzdGF0aWMgY3JlYXRlU3ltYm9sc0Zyb21QdHIocHRyOiBudW1iZXIsIGJ1ZjogQXJyYXlCdWZmZXIpOiBBcnJheTxTeW1ib2w+IHtcclxuICAgIGlmIChwdHIgPT0gMCkgcmV0dXJuIFtdO1xyXG5cclxuICAgIGNvbnN0IHNldCA9IG5ldyBTeW1ib2xTZXRQdHIocHRyLCBidWYpO1xyXG4gICAgbGV0IHN5bWJvbCA9IHNldC5oZWFkO1xyXG4gICAgY29uc3QgcmVzID0gW107XHJcbiAgICB3aGlsZSAoc3ltYm9sICE9PSBudWxsKSB7XHJcbiAgICAgIHJlcy5wdXNoKG5ldyBTeW1ib2woc3ltYm9sKSk7XHJcbiAgICAgIHN5bWJvbCA9IHN5bWJvbC5uZXh0O1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHJlcztcclxuICB9XHJcblxyXG4gIGRlY29kZShlbmNvZGluZz86IHN0cmluZykge1xyXG4gICAgLy8gY29uc3QgZGVjb2RlciA9IG5ldyBUZXh0RGVjb2RlcihlbmNvZGluZyk7XHJcbiAgICBsZXQgZW5jb2RlZFN0cmluZyA9IFN0cmluZy5mcm9tQ2hhckNvZGUuYXBwbHkobnVsbCwgdGhpcy5kYXRhKTtcclxuXHJcbiAgICAvLyByZXR1cm4gZGVjb2Rlci5kZWNvZGUodGhpcy5kYXRhKTtcclxuICAgIHJldHVybiBkZWNvZGVVUklDb21wb25lbnQoZXNjYXBlKChlbmNvZGVkU3RyaW5nKSkpO1xyXG4gIH1cclxufVxyXG4iXX0=