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
        var ShopGoodsItemStruct = /** @class */ (function (_super) {
            __extends(ShopGoodsItemStruct, _super);
            function ShopGoodsItemStruct() {
                return _super.call(this) || this;
            }
            ShopGoodsItemStruct.createInstance = function () {
                return (fairygui.UIPackage.createObject("PfSkin", "ShopGoodsItem"));
            };
            ShopGoodsItemStruct.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_type = this.getController("type");
                this.m_listGive = (this.getChild("listGive"));
                this.m_title = (this.getChild("title"));
                this.m_labBuy = (this.getChild("labBuy"));
            };
            ShopGoodsItemStruct.URL = "ui://s33x8418ap5a1v1";
            ShopGoodsItemStruct.DependPackages = ["PfSkin"];
            return ShopGoodsItemStruct;
        }(fairygui.GLabel));
        PfSkin.ShopGoodsItemStruct = ShopGoodsItemStruct;
    })(PfSkin = fgui.PfSkin || (fgui.PfSkin = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=ShopGoodsItemStruct.js.map