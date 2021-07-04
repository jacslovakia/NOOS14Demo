"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CppObject = void 0;
var CppObject = (function () {
    function CppObject(ptr, inst) {
        this.ptr = ptr;
        this.inst = inst;
    }
    CppObject.prototype.checkAlive = function () {
        if (this.ptr)
            return;
        throw Error('Call after destroyed');
    };
    CppObject.prototype.getPointer = function () {
        this.checkAlive();
        return this.ptr;
    };
    return CppObject;
}());
exports.CppObject = CppObject;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ3BwT2JqZWN0LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiQ3BwT2JqZWN0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUVBO0lBSUUsbUJBQXNCLEdBQVcsRUFBRSxJQUFVO1FBQzNDLElBQUksQ0FBQyxHQUFHLEdBQUcsR0FBRyxDQUFDO1FBQ2YsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7SUFDbkIsQ0FBQztJQUVTLDhCQUFVLEdBQXBCO1FBQ0UsSUFBSSxJQUFJLENBQUMsR0FBRztZQUFFLE9BQU87UUFDckIsTUFBTSxLQUFLLENBQUMsc0JBQXNCLENBQUMsQ0FBQztJQUN0QyxDQUFDO0lBRUQsOEJBQVUsR0FBVjtRQUNFLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQztRQUNsQixPQUFPLElBQUksQ0FBQyxHQUFHLENBQUM7SUFDbEIsQ0FBQztJQUNILGdCQUFDO0FBQUQsQ0FBQyxBQWxCRCxJQWtCQztBQWxCWSw4QkFBUyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBaQmFyIGZyb20gJy4vWkJhcic7XHJcblxyXG5leHBvcnQgY2xhc3MgQ3BwT2JqZWN0IHtcclxuICBwcm90ZWN0ZWQgcHRyOiBudW1iZXI7XHJcbiAgcHJvdGVjdGVkIGluc3Q6IFpCYXI7XHJcblxyXG4gIHByb3RlY3RlZCBjb25zdHJ1Y3RvcihwdHI6IG51bWJlciwgaW5zdDogWkJhcikge1xyXG4gICAgdGhpcy5wdHIgPSBwdHI7XHJcbiAgICB0aGlzLmluc3QgPSBpbnN0O1xyXG4gIH1cclxuXHJcbiAgcHJvdGVjdGVkIGNoZWNrQWxpdmUoKTogdm9pZCB7XHJcbiAgICBpZiAodGhpcy5wdHIpIHJldHVybjtcclxuICAgIHRocm93IEVycm9yKCdDYWxsIGFmdGVyIGRlc3Ryb3llZCcpO1xyXG4gIH1cclxuXHJcbiAgZ2V0UG9pbnRlcigpOiBudW1iZXIge1xyXG4gICAgdGhpcy5jaGVja0FsaXZlKCk7XHJcbiAgICByZXR1cm4gdGhpcy5wdHI7XHJcbiAgfVxyXG59XHJcbiJdfQ==