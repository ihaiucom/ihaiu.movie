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
        var RankRewardPanel = /** @class */ (function (_super) {
            __extends(RankRewardPanel, _super);
            function RankRewardPanel() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            RankRewardPanel.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_btnClose.onClick(this, this.OnBtnCloseClick);
                this.m_listRanKReward.itemRenderer = new Handler(this, this.RenderItem, null, false);
                this.m_listRanKReward.setVirtual();
            };
            RankRewardPanel.prototype.OnWindowOpen = function () {
                this.UpdateView();
            };
            RankRewardPanel.prototype.UpdateView = function () {
                this.serverRewardList = Game.moduleModel.rank.RankRewardList; //Game.config.serverRankingList.weekRewardList;
                this.m_listRanKReward.numItems = this.serverRewardList.length;
                this.m_txtTip.title = Game.config.msg.getTxt(MsgKey.ranking_list_instruction1) + "\n" + Game.config.msg.getTxt(MsgKey.ranking_list_instruction2) + "\n" + Game.config.msg.getTxt(MsgKey.ranking_list_instruction3);
            };
            RankRewardPanel.prototype.RenderItem = function (index, obj) {
                var data = this.serverRewardList[index];
                obj.Render(data);
            };
            RankRewardPanel.prototype.OnBtnCloseClick = function () {
                this.moduleWindow.closeSelf();
            };
            return RankRewardPanel;
        }(Rank.RankRewardPanelStruct));
        Rank.RankRewardPanel = RankRewardPanel;
    })(Rank = fgui.Rank || (fgui.Rank = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=RankRewardPanel.js.map