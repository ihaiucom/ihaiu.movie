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
    var Rank;
    (function (Rank) {
        var RankMainPanelStruct = /** @class */ (function (_super) {
            __extends(RankMainPanelStruct, _super);
            function RankMainPanelStruct() {
                return _super.call(this) || this;
            }
            RankMainPanelStruct.createInstance = function () {
                return (fairygui.UIPackage.createObject("Rank", "RankMainPanel"));
            };
            RankMainPanelStruct.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_rankList = (this.getChild("rankList"));
                this.m_name = (this.getChild("name"));
                this.m_txtChangeName = (this.getChild("txtChangeName"));
                this.m_userRank = (this.getChild("userRank"));
                this.m_marquee = (this.getChild("marquee"));
                this.m_btnChangeName = (this.getChild("btnChangeName"));
                this.m_btnHelp = (this.getChild("btnHelp"));
                this.m_btnClose = (this.getChild("btnClose"));
                this.m_rank3 = (this.getChild("rank3"));
                this.m_rank2 = (this.getChild("rank2"));
                this.m_rank1 = (this.getChild("rank1"));
            };
            RankMainPanelStruct.URL = "ui://pqepuo38pqkq0";
            RankMainPanelStruct.DependPackages = ["Rank", "Common"];
            return RankMainPanelStruct;
        }(fairygui.GComponent));
        Rank.RankMainPanelStruct = RankMainPanelStruct;
    })(Rank = fgui.Rank || (fgui.Rank = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=RankMainPanelStruct.js.map