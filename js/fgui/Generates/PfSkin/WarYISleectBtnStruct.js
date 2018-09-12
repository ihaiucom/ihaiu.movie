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
    var PfSkin;
    (function (PfSkin) {
        var WarYISleectBtnStruct = /** @class */ (function (_super) {
            __extends(WarYISleectBtnStruct, _super);
            function WarYISleectBtnStruct() {
                return _super.call(this) || this;
            }
            WarYISleectBtnStruct.createInstance = function () {
                return (fairygui.UIPackage.createObject("PfSkin", "WarYISleectBtn"));
            };
            WarYISleectBtnStruct.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_button = this.getController("button");
                this.m_costOrNo = this.getController("costOrNo");
                this.m_icon = (this.getChild("icon"));
                this.m_tip = (this.getChild("tip"));
                this.m_tip2 = (this.getChild("tip2"));
                this.m_title = (this.getChild("title"));
                this.m_costIcon = (this.getChild("costIcon"));
                this.m_noCost = (this.getChild("noCost"));
            };
            WarYISleectBtnStruct.URL = "ui://s33x84186ve81g6";
            WarYISleectBtnStruct.DependPackages = ["PfSkin"];
            return WarYISleectBtnStruct;
        }(fairygui.GButton));
        PfSkin.WarYISleectBtnStruct = WarYISleectBtnStruct;
    })(PfSkin = fgui.PfSkin || (fgui.PfSkin = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=WarYISleectBtnStruct.js.map