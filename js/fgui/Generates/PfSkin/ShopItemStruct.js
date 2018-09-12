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
        var ShopItemStruct = /** @class */ (function (_super) {
            __extends(ShopItemStruct, _super);
            function ShopItemStruct() {
                return _super.call(this) || this;
            }
            ShopItemStruct.createInstance = function () {
                return (fairygui.UIPackage.createObject("PfSkin", "ShopItem"));
            };
            ShopItemStruct.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_hasPeriodTime = this.getController("hasPeriodTime");
                this.m_hasSallUp = this.getController("hasSallUp");
                this.m_name = (this.getChild("name"));
                this.m_tip = (this.getChild("tip"));
                this.m_timeCanBuy = (this.getChild("timeCanBuy"));
                this.m_timeCanBuyTitle = (this.getChild("timeCanBuyTitle"));
                this.m_tiptitle = (this.getChild("tiptitle"));
                this.m_labItem = (this.getChild("labItem"));
                this.m_btnSelect = (this.getChild("btnSelect"));
                this.m_labCost = (this.getChild("labCost"));
            };
            ShopItemStruct.URL = "ui://s33x8418ap5a1us";
            ShopItemStruct.DependPackages = ["PfSkin", "Common"];
            return ShopItemStruct;
        }(fairygui.GLabel));
        PfSkin.ShopItemStruct = ShopItemStruct;
    })(PfSkin = fgui.PfSkin || (fgui.PfSkin = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=ShopItemStruct.js.map