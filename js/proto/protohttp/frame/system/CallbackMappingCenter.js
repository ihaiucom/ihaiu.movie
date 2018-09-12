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
 * 回调映射管理中心
 * 通过此映射可以将回调函数通过映射关系绑定到目标对象，而不需要直接传递回调函数。
 * 一般用于将控制器的方法映射到视图对象，视图对象在不访问控制器的情况下可以将数据传递给控制器。（两者之间没有直接耦合关系）
 * author chuhua
 */
var frame;
(function (frame) {
    var system;
    (function (system) {
        var CallbackMappingCenter = /** @class */ (function (_super) {
            __extends(CallbackMappingCenter, _super);
            function CallbackMappingCenter() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this._callbackFunctionList = [];
                _this._callbackThisList = [];
                _this._vClassList = [];
                return _this;
            }
            CallbackMappingCenter.prototype.register = function (callbackFunction, callbackThis, vClass) {
                this._callbackFunctionList.push(callbackFunction);
                this._callbackThisList.push(callbackThis);
                this._vClassList.push(vClass);
            };
            CallbackMappingCenter.prototype.unRegister = function (callbackFunction) {
                for (var i = this._callbackFunctionList.length - 1; i >= 0; i--) {
                    if (this._callbackFunctionList[i] == callbackFunction) {
                        this._callbackFunctionList.splice(i, 1);
                        this._callbackThisList.splice(i, 1);
                        this._vClassList.splice(i, 1);
                    }
                }
            };
            CallbackMappingCenter.prototype.unRegisterByThisObj = function (thisObj) {
                for (var i = this._callbackThisList.length - 1; i >= 0; i--) {
                    if (this._callbackThisList[i] == thisObj) {
                        this._callbackFunctionList.splice(i, 1);
                        this._callbackThisList.splice(i, 1);
                        this._vClassList.splice(i, 1);
                    }
                }
            };
            CallbackMappingCenter.prototype.doCallback = function (vClassInstance, type, value) {
                if (value === void 0) { value = null; }
                var callBackFuncList = Frame.CallbackMappingCenter.getCallFunctionList(vClassInstance);
                if (callBackFuncList.length > 0) {
                    var callBackFunc;
                    var callBackThis;
                    for (var i = 0; i < callBackFuncList.length; i++) {
                        callBackFunc = callBackFuncList[i];
                        callBackThis = Frame.CallbackMappingCenter.getCallFunctionThis(vClassInstance, callBackFunc);
                        if (callBackFunc != null && callBackThis != null) {
                            callBackFunc.call(callBackThis, type, value);
                        }
                    }
                }
            };
            CallbackMappingCenter.prototype.getCallFunctionList = function (vClassInstance) {
                var funcList = [];
                for (var i = 0; i < this._vClassList.length; i++) {
                    if (vClassInstance instanceof this._vClassList[i])
                        funcList.push(this._callbackFunctionList[i]);
                }
                return funcList;
            };
            CallbackMappingCenter.prototype.getCallFunctionThis = function (vClassInstance, callbackFunction) {
                for (var i = 0; i < this._vClassList.length; i++) {
                    if (this._callbackFunctionList[i] == callbackFunction && vClassInstance instanceof this._vClassList[i]) {
                        return this._callbackThisList[i];
                    }
                }
                return null;
            };
            return CallbackMappingCenter;
        }(frame.base.BaseSingleton));
        system.CallbackMappingCenter = CallbackMappingCenter;
    })(system = frame.system || (frame.system = {}));
})(frame || (frame = {}));
//# sourceMappingURL=CallbackMappingCenter.js.map