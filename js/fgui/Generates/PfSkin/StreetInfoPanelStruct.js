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
        var StreetInfoPanelStruct = /** @class */ (function (_super) {
            __extends(StreetInfoPanelStruct, _super);
            function StreetInfoPanelStruct() {
                return _super.call(this) || this;
            }
            StreetInfoPanelStruct.createInstance = function () {
                return (fairygui.UIPackage.createObject("PfSkin", "StreetInfoPanel"));
            };
            StreetInfoPanelStruct.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_isCurrent = this.getController("isCurrent");
                this.m_canReward = this.getController("canReward");
                this.m_txtRewardInfo = (this.getChild("txtRewardInfo"));
                this.m_listReward = (this.getChild("listReward"));
                this.m_txtTip1 = (this.getChild("txtTip1"));
                this.m_txtTip2 = (this.getChild("txtTip2"));
                this.m_txtTip3 = (this.getChild("txtTip3"));
                this.m_txtStreetInfo = (this.getChild("txtStreetInfo"));
                this.m_title = (this.getChild("title"));
                this.m_viewPanel = (this.getChild("viewPanel"));
                this.m_progress = (this.getChild("progress"));
                this.m_btnConfirm = (this.getChild("btnConfirm"));
                this.m_btnReward = (this.getChild("btnReward"));
            };
            StreetInfoPanelStruct.URL = "ui://s33x8418wpay1w7";
            StreetInfoPanelStruct.DependPackages = ["PfSkin", "Common"];
            return StreetInfoPanelStruct;
        }(fairygui.GComponent));
        PfSkin.StreetInfoPanelStruct = StreetInfoPanelStruct;
    })(PfSkin = fgui.PfSkin || (fgui.PfSkin = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=StreetInfoPanelStruct.js.map