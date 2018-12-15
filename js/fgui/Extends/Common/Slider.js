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
    var Common;
    (function (Common) {
        var Slider = /** @class */ (function (_super) {
            __extends(Slider, _super);
            function Slider() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            Slider.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
            };
            Object.defineProperty(Slider.prototype, "progress", {
                get: function () {
                    if (this._progress == null) {
                        this._progress = this.value / this.max;
                    }
                    return this._progress;
                },
                set: function (value) {
                    this._progress = value;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(Slider.prototype, "num", {
                get: function () {
                    var value = Math.floor(this.progress * this.max);
                    if (value == 0) {
                        value = 1;
                    }
                    return value;
                },
                set: function (value) {
                    this.progress = value / this.max;
                    this.value = this.num;
                    this.OnSliderChange();
                },
                enumerable: true,
                configurable: true
            });
            Slider.prototype.updateWidthPercent = function (percent) {
                _super.prototype.updateWidthPercent.call(this, percent);
                var oldNum = this.num;
                this.progress = percent;
                if (oldNum != this.num) {
                    this.OnSliderChange();
                }
            };
            Slider.prototype.OnSliderChange = function () {
                this.m_num.text = this.num + "/" + this.max;
            };
            return Slider;
        }(Common.SliderStruct));
        Common.Slider = Slider;
    })(Common = fgui.Common || (fgui.Common = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=Slider.js.map