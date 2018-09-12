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
        var RankMainPanelStruct = /** @class */ (function (_super) {
            __extends(RankMainPanelStruct, _super);
            function RankMainPanelStruct() {
                return _super.call(this) || this;
            }
            RankMainPanelStruct.createInstance = function () {
                return (fairygui.UIPackage.createObject("PfSkin", "RankMainPanel"));
            };
            RankMainPanelStruct.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_txtTip = (this.getChild("txtTip"));
                this.m_txtChangeName = (this.getChild("txtChangeName"));
                this.m_rankList = (this.getChild("rankList"));
                this.m_btnChangeName = (this.getChild("btnChangeName"));
                this.m_btnHelp = (this.getChild("btnHelp"));
                this.m_btnClose = (this.getChild("btnClose"));
                this.m_rank1 = (this.getChild("rank1"));
                this.m_rank2 = (this.getChild("rank2"));
                this.m_rank3 = (this.getChild("rank3"));
                this.m_userRank = (this.getChild("userRank"));
                this.m_marquee = (this.getChild("marquee"));
            };
            RankMainPanelStruct.URL = "ui://s33x8418swip1nx";
            RankMainPanelStruct.DependPackages = ["PfSkin", "Common"];
            return RankMainPanelStruct;
        }(fairygui.GComponent));
        PfSkin.RankMainPanelStruct = RankMainPanelStruct;
    })(PfSkin = fgui.PfSkin || (fgui.PfSkin = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=RankMainPanelStruct.js.map