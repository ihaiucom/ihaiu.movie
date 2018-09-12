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
        var SliderRed_gripStruct = /** @class */ (function (_super) {
            __extends(SliderRed_gripStruct, _super);
            function SliderRed_gripStruct() {
                return _super.call(this) || this;
            }
            SliderRed_gripStruct.createInstance = function () {
                return (fairygui.UIPackage.createObject("Common", "SliderRed_grip"));
            };
            SliderRed_gripStruct.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_button = this.getController("button");
            };
            SliderRed_gripStruct.URL = "ui://txcuvopdhh7655";
            SliderRed_gripStruct.DependPackages = ["Common"];
            return SliderRed_gripStruct;
        }(fairygui.GButton));
        Common.SliderRed_gripStruct = SliderRed_gripStruct;
    })(Common = fgui.Common || (fgui.Common = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=SliderRed_gripStruct.js.map