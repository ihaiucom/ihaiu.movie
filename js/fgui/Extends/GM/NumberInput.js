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
    var GM;
    (function (GM) {
        var NumberInput = /** @class */ (function (_super) {
            __extends(NumberInput, _super);
            function NumberInput() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.downTimeoutHandler = -1;
                _this.downIntervalHandler = -1;
                _this.upTimeoutHandler = -1;
                _this.isDowning = false;
                return _this;
            }
            NumberInput.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_upButton.onClick(this, this.onClickUpButton);
                this.m_downButton.onClick(this, this.onClickDownButton);
                this.m_upButton.on(laya.events.Event.MOUSE_DOWN, this, this.onMouseDownUpButton);
                this.m_downButton.on(laya.events.Event.MOUSE_DOWN, this, this.onMouseDownDownButton);
                this.m_upButton.on(laya.events.Event.MOUSE_UP, this, this.onMouseUP);
                this.m_downButton.on(laya.events.Event.MOUSE_UP, this, this.onMouseUP);
                this.m_upButton.on(laya.events.Event.MOUSE_OUT, this, this.onMouseUP);
                this.m_downButton.on(laya.events.Event.MOUSE_OUT, this, this.onMouseUP);
            };
            NumberInput.prototype.onClickUpButton = function () {
                if (!this.isDowning) {
                    this.value += this.onceValue;
                }
                this.isDowning = false;
            };
            NumberInput.prototype.onClickDownButton = function () {
                if (!this.isDowning) {
                    this.value -= this.onceValue;
                }
                this.isDowning = false;
            };
            NumberInput.prototype.onMouseDownUpButton = function () {
                var _this = this;
                if (this.upTimeoutHandler != -1) {
                    clearTimeout(this.upTimeoutHandler);
                    this.upTimeoutHandler = -1;
                }
                this.downTimeoutHandler = setTimeout(function () {
                    _this.isDowning = true;
                    _this.downIntervalHandler = setInterval(function () {
                        _this.value += _this.onceValue;
                    }, 10);
                }, 200);
            };
            NumberInput.prototype.onMouseDownDownButton = function () {
                var _this = this;
                if (this.upTimeoutHandler != -1) {
                    clearTimeout(this.upTimeoutHandler);
                    this.upTimeoutHandler = -1;
                }
                this.downTimeoutHandler = setTimeout(function () {
                    _this.isDowning = true;
                    _this.downIntervalHandler = setInterval(function () {
                        _this.value -= _this.onceValue;
                    }, 10);
                }, 200);
            };
            NumberInput.prototype.onMouseUP = function () {
                var _this = this;
                if (this.downTimeoutHandler != -1) {
                    clearTimeout(this.downTimeoutHandler);
                    this.downTimeoutHandler = -1;
                }
                if (this.downIntervalHandler != -1) {
                    clearInterval(this.downIntervalHandler);
                    this.downIntervalHandler = -1;
                }
                if (this.isDowning) {
                    this.upTimeoutHandler = setTimeout(function () {
                        _this.isDowning = false;
                    }, 200);
                }
            };
            Object.defineProperty(NumberInput.prototype, "onceValue", {
                get: function () {
                    var length = Math.abs(this.value).toString().length - 1;
                    var v = 1;
                    for (var i = 1; i < length; i++) {
                        v *= 10;
                    }
                    return v;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(NumberInput.prototype, "value", {
                get: function () {
                    if (isNullOrEmpty(this.m_title.text)) {
                        return 0;
                    }
                    return toInt(this.m_title.text);
                },
                set: function (val) {
                    this.m_title.text = val.toString();
                },
                enumerable: true,
                configurable: true
            });
            return NumberInput;
        }(GM.NumberInputStruct));
        GM.NumberInput = NumberInput;
    })(GM = fgui.GM || (fgui.GM = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=NumberInput.js.map