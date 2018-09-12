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
        var BagItemInfoStruct = /** @class */ (function (_super) {
            __extends(BagItemInfoStruct, _super);
            function BagItemInfoStruct() {
                return _super.call(this) || this;
            }
            BagItemInfoStruct.createInstance = function () {
                return (fairygui.UIPackage.createObject("PfSkin", "BagItemInfo"));
            };
            BagItemInfoStruct.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_buttonType = this.getController("buttonType");
                this.m_ItemType = this.getController("ItemType");
                this.m_txtItemCount = (this.getChild("txtItemCount"));
                this.m_txtInfo = (this.getChild("txtInfo"));
                this.m_tipAct = (this.getChild("tipAct"));
                this.m_labItem = (this.getChild("labItem"));
                this.m_labPrice = (this.getChild("labPrice"));
                this.m_btnSale = (this.getChild("btnSale"));
                this.m_btnUse = (this.getChild("btnUse"));
                this.m_btnInfo = (this.getChild("btnInfo"));
                this.m_btnResolve = (this.getChild("btnResolve"));
                this.m_btnGive = (this.getChild("btnGive"));
                this.m_btnCompound = (this.getChild("btnCompound"));
            };
            BagItemInfoStruct.URL = "ui://s33x8418ow2j1nq";
            BagItemInfoStruct.DependPackages = ["PfSkin", "MainUI", "Common"];
            return BagItemInfoStruct;
        }(fairygui.GComponent));
        PfSkin.BagItemInfoStruct = BagItemInfoStruct;
    })(PfSkin = fgui.PfSkin || (fgui.PfSkin = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=BagItemInfoStruct.js.map