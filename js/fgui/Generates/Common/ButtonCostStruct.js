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
        var ButtonCostStruct = /** @class */ (function (_super) {
            __extends(ButtonCostStruct, _super);
            function ButtonCostStruct() {
                return _super.call(this) || this;
            }
            ButtonCostStruct.createInstance = function () {
                return (fairygui.UIPackage.createObject("Common", "ButtonCost"));
            };
            ButtonCostStruct.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_button = this.getController("button");
                this.m_title = (this.getChild("title"));
                this.m_icon = (this.getChild("icon"));
                this.m_number = (this.getChild("number"));
            };
            ButtonCostStruct.URL = "ui://txcuvopdw1srd0";
            ButtonCostStruct.DependPackages = ["Common", "Manage"];
            return ButtonCostStruct;
        }(fairygui.GButton));
        Common.ButtonCostStruct = ButtonCostStruct;
    })(Common = fgui.Common || (fgui.Common = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=ButtonCostStruct.js.map