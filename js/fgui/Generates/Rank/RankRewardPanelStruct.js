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
        var RankRewardPanelStruct = /** @class */ (function (_super) {
            __extends(RankRewardPanelStruct, _super);
            function RankRewardPanelStruct() {
                return _super.call(this) || this;
            }
            RankRewardPanelStruct.createInstance = function () {
                return (fairygui.UIPackage.createObject("Rank", "RankRewardPanel"));
            };
            RankRewardPanelStruct.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_title = (this.getChild("title"));
                this.m_listRanKReward = (this.getChild("listRanKReward"));
                this.m_btnClose = (this.getChild("btnClose"));
                this.m_txtTip = (this.getChild("txtTip"));
            };
            RankRewardPanelStruct.URL = "ui://pqepuo38pqkq4";
            RankRewardPanelStruct.DependPackages = ["Rank", "Common"];
            return RankRewardPanelStruct;
        }(fairygui.GComponent));
        Rank.RankRewardPanelStruct = RankRewardPanelStruct;
    })(Rank = fgui.Rank || (fgui.Rank = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=RankRewardPanelStruct.js.map