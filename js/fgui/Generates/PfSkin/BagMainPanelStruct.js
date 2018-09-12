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
        var BagMainPanelStruct = /** @class */ (function (_super) {
            __extends(BagMainPanelStruct, _super);
            function BagMainPanelStruct() {
                return _super.call(this) || this;
            }
            BagMainPanelStruct.createInstance = function () {
                return (fairygui.UIPackage.createObject("PfSkin", "BagMainPanel"));
            };
            BagMainPanelStruct.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_select = this.getController("select");
                this.m_listBagItem = (this.getChild("listBagItem"));
                this.m_listTab = (this.getChild("listTab"));
                this.m_txtCapacity = (this.getChild("txtCapacity"));
                this.m_btnClose = (this.getChild("btnClose"));
                this.m_btnLv = (this.getChild("btnLv"));
                this.m_itemInfo = (this.getChild("itemInfo"));
            };
            BagMainPanelStruct.URL = "ui://s33x8418mywn1k4";
            BagMainPanelStruct.DependPackages = ["PfSkin", "Common", "MainUI"];
            return BagMainPanelStruct;
        }(fairygui.GComponent));
        PfSkin.BagMainPanelStruct = BagMainPanelStruct;
    })(PfSkin = fgui.PfSkin || (fgui.PfSkin = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=BagMainPanelStruct.js.map