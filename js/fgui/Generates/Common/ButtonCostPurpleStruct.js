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
        var ButtonCostPurpleStruct = /** @class */ (function (_super) {
            __extends(ButtonCostPurpleStruct, _super);
            function ButtonCostPurpleStruct() {
                return _super.call(this) || this;
            }
            ButtonCostPurpleStruct.createInstance = function () {
                return (fairygui.UIPackage.createObject("Common", "ButtonCostPurple"));
            };
            ButtonCostPurpleStruct.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_button = this.getController("button");
                this.m_num = (this.getChild("num"));
                this.m_title = (this.getChild("title"));
                this.m_icon = (this.getChild("icon"));
            };
            ButtonCostPurpleStruct.URL = "ui://txcuvopdq41hg7";
            ButtonCostPurpleStruct.DependPackages = ["Common"];
            return ButtonCostPurpleStruct;
        }(fairygui.GButton));
        Common.ButtonCostPurpleStruct = ButtonCostPurpleStruct;
    })(Common = fgui.Common || (fgui.Common = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=ButtonCostPurpleStruct.js.map