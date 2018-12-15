/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////
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
var fgui;
(function (fgui) {
    var System;
    (function (System) {
        var StateItem = /** @class */ (function (_super) {
            __extends(StateItem, _super);
            function StateItem() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.unitM = 1024 * 1024;
                return _this;
            }
            Object.defineProperty(StateItem.prototype, "key", {
                get: function () {
                    return this._key;
                },
                set: function (value) {
                    this._key = value;
                    this.m_key.text = value;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(StateItem.prototype, "val", {
                set: function (value) {
                    this.m_value.text = value;
                },
                enumerable: true,
                configurable: true
            });
            StateItem.prototype.setVal = function (val) {
                if (isNumber(val)) {
                    if (this.key == "currentMemorySize") {
                        if (val > this.unitM) {
                            this.val = Math.floor(val / this.unitM * 100) / 100 + " M";
                        }
                        else {
                            this.val = Math.floor(val / 1024 * 100) / 100 + " K";
                        }
                    }
                    else {
                        this.val = val.toString();
                    }
                }
                else if (isString(val)) {
                    this.val = val;
                }
                else {
                    this.val = val.toString();
                }
            };
            return StateItem;
        }(System.StateItemStruct));
        System.StateItem = StateItem;
    })(System = fgui.System || (fgui.System = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=StateItem.js.map