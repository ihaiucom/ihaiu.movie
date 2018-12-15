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
        var ButtonDoubleLabelStruct = /** @class */ (function (_super) {
            __extends(ButtonDoubleLabelStruct, _super);
            function ButtonDoubleLabelStruct() {
                return _super.call(this) || this;
            }
            ButtonDoubleLabelStruct.createInstance = function () {
                return (fairygui.UIPackage.createObject("Common", "ButtonDoubleLabel"));
            };
            ButtonDoubleLabelStruct.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_button = this.getController("button");
                this.m_icon = (this.getChild("icon"));
                this.m_title = (this.getChild("title"));
                this.m_number = (this.getChild("number"));
            };
            ButtonDoubleLabelStruct.URL = "ui://txcuvopdw1srd3";
            ButtonDoubleLabelStruct.DependPackages = ["Common"];
            return ButtonDoubleLabelStruct;
        }(fairygui.GButton));
        Common.ButtonDoubleLabelStruct = ButtonDoubleLabelStruct;
    })(Common = fgui.Common || (fgui.Common = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=ButtonDoubleLabelStruct.js.map