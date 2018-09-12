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
        var ShopMainPanelStruct = /** @class */ (function (_super) {
            __extends(ShopMainPanelStruct, _super);
            function ShopMainPanelStruct() {
                return _super.call(this) || this;
            }
            ShopMainPanelStruct.createInstance = function () {
                return (fairygui.UIPackage.createObject("PfSkin", "ShopMainPanel"));
            };
            ShopMainPanelStruct.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_tab = this.getController("tab");
                this.m_listSingleItem = (this.getChild("listSingleItem"));
                this.m_listSpecialItem = (this.getChild("listSpecialItem"));
                this.m_listTab = (this.getChild("listTab"));
                this.m_listAsset = (this.getChild("listAsset"));
                this.m_btnClose = (this.getChild("btnClose"));
            };
            ShopMainPanelStruct.URL = "ui://s33x8418ap5a1uq";
            ShopMainPanelStruct.DependPackages = ["PfSkin", "Common"];
            return ShopMainPanelStruct;
        }(fairygui.GComponent));
        PfSkin.ShopMainPanelStruct = ShopMainPanelStruct;
    })(PfSkin = fgui.PfSkin || (fgui.PfSkin = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=ShopMainPanelStruct.js.map