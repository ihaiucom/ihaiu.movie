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
        var SliderStruct = /** @class */ (function (_super) {
            __extends(SliderStruct, _super);
            function SliderStruct() {
                return _super.call(this) || this;
            }
            SliderStruct.createInstance = function () {
                return (fairygui.UIPackage.createObject("Common", "Slider"));
            };
            SliderStruct.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_bg = (this.getChild("bg"));
                this.m_bar = (this.getChild("bar"));
                this.m_list = (this.getChild("list"));
                this.m_light = (this.getChild("light"));
                this.m_num = (this.getChild("num"));
                this.m_grip = (this.getChild("grip"));
            };
            SliderStruct.URL = "ui://txcuvopdnsfy29";
            SliderStruct.DependPackages = ["Common"];
            return SliderStruct;
        }(fairygui.GSlider));
        Common.SliderStruct = SliderStruct;
    })(Common = fgui.Common || (fgui.Common = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=SliderStruct.js.map