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
        var ButtonPurpleSmallStruct = /** @class */ (function (_super) {
            __extends(ButtonPurpleSmallStruct, _super);
            function ButtonPurpleSmallStruct() {
                return _super.call(this) || this;
            }
            ButtonPurpleSmallStruct.createInstance = function () {
                return (fairygui.UIPackage.createObject("Common", "ButtonPurpleSmall"));
            };
            ButtonPurpleSmallStruct.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_button = this.getController("button");
                this.m_title = (this.getChild("title"));
            };
            ButtonPurpleSmallStruct.URL = "ui://txcuvopdx9zq4l";
            ButtonPurpleSmallStruct.DependPackages = ["Common"];
            return ButtonPurpleSmallStruct;
        }(fairygui.GButton));
        Common.ButtonPurpleSmallStruct = ButtonPurpleSmallStruct;
    })(Common = fgui.Common || (fgui.Common = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=ButtonPurpleSmallStruct.js.map