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
        var MarketSelectActorPanelStruct = /** @class */ (function (_super) {
            __extends(MarketSelectActorPanelStruct, _super);
            function MarketSelectActorPanelStruct() {
                return _super.call(this) || this;
            }
            MarketSelectActorPanelStruct.createInstance = function () {
                return (fairygui.UIPackage.createObject("PfSkin", "MarketSelectActorPanel"));
            };
            MarketSelectActorPanelStruct.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_title = (this.getChild("title"));
                this.m_list = (this.getChild("list"));
                this.m_txtTip = (this.getChild("txtTip"));
                this.m_btnClose = (this.getChild("btnClose"));
            };
            MarketSelectActorPanelStruct.URL = "ui://s33x8418mywn1ku";
            MarketSelectActorPanelStruct.DependPackages = ["PfSkin", "Common"];
            return MarketSelectActorPanelStruct;
        }(fairygui.GComponent));
        PfSkin.MarketSelectActorPanelStruct = MarketSelectActorPanelStruct;
    })(PfSkin = fgui.PfSkin || (fgui.PfSkin = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=MarketSelectActorPanelStruct.js.map