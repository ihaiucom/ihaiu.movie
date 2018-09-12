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
        var ShopTopPanelStruct = /** @class */ (function (_super) {
            __extends(ShopTopPanelStruct, _super);
            function ShopTopPanelStruct() {
                return _super.call(this) || this;
            }
            ShopTopPanelStruct.createInstance = function () {
                return (fairygui.UIPackage.createObject("PfSkin", "ShopTopPanel"));
            };
            ShopTopPanelStruct.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_listAsset = (this.getChild("listAsset"));
                this.m_title = (this.getChild("title"));
                this.m_btnClose = (this.getChild("btnClose"));
            };
            ShopTopPanelStruct.URL = "ui://s33x8418kl6dt21n";
            ShopTopPanelStruct.DependPackages = ["PfSkin", "Common"];
            return ShopTopPanelStruct;
        }(fairygui.GLabel));
        PfSkin.ShopTopPanelStruct = ShopTopPanelStruct;
    })(PfSkin = fgui.PfSkin || (fgui.PfSkin = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=ShopTopPanelStruct.js.map