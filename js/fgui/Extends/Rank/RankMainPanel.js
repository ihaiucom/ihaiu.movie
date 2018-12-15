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
        var RankMainPanel = /** @class */ (function (_super) {
            __extends(RankMainPanel, _super);
            function RankMainPanel() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            RankMainPanel.prototype.onWindowInited = function () {
                this.m_btnClose.onClick(this, this.OnBtnCloseClick);
                this.m_btnHelp.onClick(this, this.OnBtnHelpClick);
                this.m_btnChangeName.onClick(this, this.OnBtnChangeName);
                this.m_rankList.itemRenderer = new Handler(this, this.RenderRankItem, null, false);
                this.m_rankList.setVirtual();
                this.m_marquee.onWindowInited();
            };
            RankMainPanel.prototype.onWindowDestory = function () {
                this.m_marquee.onWindowDestory();
            };
            RankMainPanel.prototype.onWindowOpen = function () {
                var arg = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    arg[_i] = arguments[_i];
                }
                this.UpdateView();
                Game.protosender.rank.GetServerRankList();
            };
            RankMainPanel.prototype.onWindowShow = function () {
                this.m_marquee.Show();
                Game.protoOkEvent.add(ProtoEventKey.rank_GetServerRankList, this.OnRankGetServerRankList, this);
                Game.protoOkEvent.add(ProtoEventKey.SelfRankListDesc, this.UpdateView, this);
                Game.protoOkEvent.add(ProtoEventKey.rank_ChangeServerName, this.UpdateView, this);
                Game.protoOkEvent.add(ProtoEventKey.rank_GetServerListReward, this.UpdateView, this);
            };
            RankMainPanel.prototype.onWindowHide = function () {
                this.m_marquee.Hide();
                Game.protoOkEvent.remove(ProtoEventKey.rank_GetServerRankList, this.OnRankGetServerRankList, this);
                Game.protoOkEvent.remove(ProtoEventKey.SelfRankListDesc, this.UpdateView, this);
                Game.protoOkEvent.remove(ProtoEventKey.rank_ChangeServerName, this.UpdateView, this);
                Game.protoOkEvent.remove(ProtoEventKey.rank_GetServerListReward, this.UpdateView, this);
            };
            RankMainPanel.prototype.UpdateView = function () {
                this.m_name.text = Game.moduleModel.rank.ServerName;
                this.rankList = Game.moduleModel.rank.ServerRankList;
                if (this.rankList.length >= 1) {
                    this.m_rank1.visible = true;
                    this.m_rank1.Render(this.rankList[0]);
                    this.m_rank1.m_BG.setSelectedIndex(1);
                }
                else {
                    this.m_rank1.visible = false;
                }
                if (this.rankList.length >= 2) {
                    this.m_rank2.visible = true;
                    this.m_rank2.Render(this.rankList[1]);
                    this.m_rank2.m_BG.setSelectedIndex(1);
                }
                else {
                    this.m_rank2.visible = false;
                }
                if (this.rankList.length >= 3) {
                    this.m_rank3.visible = true;
                    this.m_rank3.Render(this.rankList[2]);
                    this.m_rank3.m_BG.setSelectedIndex(1);
                }
                else {
                    this.m_rank3.visible = false;
                }
                if (this.rankList.length > 3) {
                    this.m_rankList.numItems = this.rankList.length - 3;
                    this.m_rankList.refreshVirtualList();
                }
                else {
                    this.m_rankList.numItems = 0;
                }
                this.m_userRank.Render(Game.moduleModel.rank.SelfServerRankData);
                var msgList = [Game.config.msg.getTxt(MsgKey.ranking_list_tips1), Game.config.msg.getTxt(MsgKey.ranking_list_tips2)];
                this.m_marquee.UpdateView(msgList);
            };
            RankMainPanel.prototype.RenderRankItem = function (index, item) {
                var data = this.rankList[index + 3];
                item.Render(data);
            };
            RankMainPanel.prototype.OnBtnHelpClick = function () {
                this.moduleWindow.openSubwindowByIndex("rankReward", true);
            };
            RankMainPanel.prototype.OnBtnCloseClick = function () {
                this.moduleWindow.menuClose();
            };
            RankMainPanel.prototype.OnBtnChangeName = function () {
                if (Game.moduleModel.rank.CanChangeName) {
                    Game.system.rename("", this, this.OnChangeName, Game.moduleModel.rank.ServerName);
                }
            };
            RankMainPanel.prototype.OnRankGetServerRankList = function () {
                this.UpdateView();
            };
            RankMainPanel.prototype.OnChangeName = function (newName) {
                Game.protosender.rank.ChangeServerName(Game.moduleModel.rank.ServerUuid, newName);
            };
            RankMainPanel.prototype.onChangeServerNameResponse = function () {
                Game.protosender.rank.GetSelfList();
            };
            return RankMainPanel;
        }(Rank.RankMainPanelStruct));
        Rank.RankMainPanel = RankMainPanel;
    })(Rank = fgui.Rank || (fgui.Rank = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=RankMainPanel.js.map