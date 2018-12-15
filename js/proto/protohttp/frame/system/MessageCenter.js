var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
/**
 * 消息处理中心
 * author chuhua
 */
var frame;
(function (frame) {
    var system;
    (function (system) {
        var MessageCenter = /** @class */ (function (_super) {
            __extends(MessageCenter, _super);
            function MessageCenter() {
                var _this = _super.call(this) || this;
                _this._typeList = [];
                _this._listenerList = [];
                _this._thisObjList = [];
                _this._groupList = [];
                return _this;
            }
            MessageCenter.prototype.on = function (type, listener, thisObj, group) {
                if (group === void 0) { group = null; }
                if (type && listener && type.length > 0) {
                    this.off(type, listener, thisObj);
                    this._typeList.push(type);
                    this._listenerList.push(listener);
                    this._thisObjList.push(thisObj);
                    this._groupList.push(group);
                }
            };
            MessageCenter.prototype.off = function (type, listener, thisObj) {
                var idx = this._listenerList.indexOf(listener);
                if (idx >= 0 && this._typeList[idx] == type && this._thisObjList[idx] == thisObj) {
                    this.offByIdx(idx);
                }
            };
            MessageCenter.prototype.offByType = function (type) {
                if (type) {
                    for (var idx = this._typeList.length - 1; idx >= 0; idx--) {
                        if (this._typeList[idx] == type) {
                            this.offByIdx(idx);
                        }
                    }
                }
            };
            MessageCenter.prototype.offByThisObj = function (thisObj) {
                if (thisObj) {
                    for (var idx = this._thisObjList.length - 1; idx >= 0; idx--) {
                        if (this._thisObjList[idx] == thisObj) {
                            this.offByIdx(idx);
                        }
                    }
                }
            };
            MessageCenter.prototype.offByGroup = function (group) {
                if (group) {
                    for (var idx = this._groupList.length - 1; idx >= 0; idx--) {
                        if (this._groupList[idx] == group) {
                            this.offByIdx(idx);
                        }
                    }
                }
            };
            MessageCenter.prototype.offByIdx = function (idx) {
                this._typeList.splice(idx, 1);
                this._listenerList.splice(idx, 1);
                this._thisObjList.splice(idx, 1);
                this._groupList.splice(idx, 1);
            };
            MessageCenter.prototype.event = function (type, data) {
                if (data === void 0) { data = null; }
                var idx;
                var dispatchListenerList = [];
                var dispatchThisObjList = [];
                for (idx = 0; idx < this._typeList.length; idx++) {
                    if (this._typeList[idx] == type) {
                        dispatchListenerList.push(this._listenerList[idx]);
                        dispatchThisObjList.push(this._thisObjList[idx]);
                    }
                }
                if (dispatchListenerList.length > 0) {
                    var listener;
                    var thisObj;
                    for (idx = 0; idx < dispatchListenerList.length; idx++) {
                        listener = dispatchListenerList[idx];
                        thisObj = dispatchThisObjList[idx];
                        if (data == null) {
                            listener.apply(thisObj);
                        }
                        else {
                            listener.apply(thisObj, [data]);
                        }
                    }
                    Frame.Tool.clearArray(dispatchListenerList);
                    Frame.Tool.clearArray(dispatchThisObjList);
                }
            };
            return MessageCenter;
        }(frame.base.BaseSingleton));
        system.MessageCenter = MessageCenter;
    })(system = frame.system || (frame.system = {}));
})(frame || (frame = {}));
//# sourceMappingURL=MessageCenter.js.map