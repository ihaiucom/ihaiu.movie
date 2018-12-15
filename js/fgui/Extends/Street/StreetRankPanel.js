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
    var Street;
    (function (Street) {
        var StreetRankPanel = /** @class */ (function (_super) {
            __extends(StreetRankPanel, _super);
            function StreetRankPanel() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.selectIndex = -1;
                return _this;
            }
            StreetRankPanel.prototype.onInit = function (moduleWindow) {
                this.moduleWindow = moduleWindow;
                this.m_btnClose.onClick(this, this.OnCloseClick);
                this.m_listTab.onClick(this, this.OnTabClick);
                this.m_streetIcon.onClick(this, this.OnStreetIconClick);
                this.m_list.itemRenderer = new Handler(this, this.RenderListItem, null, false);
                this.m_list.itemProvider = new Handler(this, this.ProviderItem, null, false);
                this.m_list.setVirtual();
                this.tick = Game.tick.AddTick(1, 0, new Handler(this, this.OnTick), new Handler(this, this.OnTickFinish));
                this.congraTick = Game.tick.AddTick(1, 0, new Handler(this, this.OnCongraTick), new Handler(this, this.OnCongraTickFinish));
                this.m_marquee.onWindowInited();
            };
            StreetRankPanel.prototype.onWindowDestory = function () {
                Game.tick.ClearTick(this.tick);
                Game.tick.ClearTick(this.congraTick);
                this.m_marquee.onWindowDestory();
            };
            StreetRankPanel.prototype.RenderListItem = function (index, obj) {
                if (this.m_rankType.selectedIndex == 0) {
                    var item = obj;
                    var data = this.rankGroupList[index];
                    item.Render(data);
                }
                else {
                    var item = obj;
                    var data = this.rankGroupMovieList[index];
                    item.Render(data);
                }
            };
            StreetRankPanel.prototype.ProviderItem = function (index) {
                if (this.m_rankType.selectedIndex == 0) {
                    return fgui.Street.RankGroupItem.URL;
                }
                else {
                    return fgui.Street.RankGroupMovieItem.URL;
                }
            };
            StreetRankPanel.prototype.OnTick = function () {
                this.m_txtMovieTime.text = TimeHelper.TimeFormat(Game.moduleModel.street.groupRankCD);
            };
            StreetRankPanel.prototype.OnTickFinish = function () {
                this.tick.Stop();
            };
            StreetRankPanel.prototype.OnCongraTick = function () {
                var cd;
                if (this.m_rankType.selectedIndex == 0) {
                    cd = Game.moduleModel.street.gronpRankCongratulateCD;
                }
                else {
                    cd = Game.moduleModel.street.groupMovieRankCongratulateCD;
                }
                if (cd > 0) {
                    for (var index = 0; index < this.m_list.numChildren; index++) {
                        var obj = this.m_list.getChildAt(index);
                        if (this.m_rankType.selectedIndex == 0) {
                            var item = obj;
                            item.OnTick(cd);
                        }
                        else {
                            var item = obj;
                            item.OnTick(cd);
                        }
                    }
                }
            };
            StreetRankPanel.prototype.OnCongraTickFinish = function () {
                this.congraTick.Stop();
                this.UpdateView();
            };
            StreetRankPanel.prototype.UpdateView = function () {
                var selfStreetData = Game.moduleModel.street.selfStreetData;
                this.m_title.text = Games.TEXT.StreetTitle.format(Game.moduleModel.rank.rankInfo.serverId, TimeHelper.DateTimeFormat3(Game.time.serverSeconds));
                this.m_streetIcon.icon = selfStreetData.iconUrl;
                this.m_streetIcon.title = selfStreetData.Cfg.name;
                this.m_streetIcon.isRed = Game.moduleModel.street.RedNum;
                var msgList = [Game.config.msg.getTxt(MsgKey.ranking_list_tips1), Game.config.msg.getTxt(MsgKey.ranking_list_tips2)];
                this.m_marquee.UpdateView(msgList);
                switch (this.m_rankType.selectedIndex) {
                    case 0:
                        this.UpdateGroupView();
                        break;
                    case 1:
                        this.UpdateMovieView();
                        this.tick.Stop();
                        break;
                    default:
                        break;
                }
            };
            StreetRankPanel.prototype.UpdateGroupView = function () {
                this.tick.SetTargetTimes(Game.moduleModel.street.groupRankCD);
                this.tick.Restart();
                var cd = Game.moduleModel.street.gronpRankCongratulateCD;
                if (cd > 0) {
                    this.congraTick.SetTargetTimes(cd);
                    this.congraTick.Restart();
                }
                else {
                    this.congraTick.Stop();
                }
                this.rankGroupList = Game.moduleModel.rank.GroupRankList || [];
                this.m_list.numItems = this.rankGroupList.length;
                var userData = Game.moduleModel.rank.SelfGroupRankData;
                if (userData) {
                    this.m_txtGroupMovieRank.text = Games.TEXT.RankText.format(userData.rank);
                    this.m_txtGroupMovie.text = formatNumberUnit(userData.desc.totalBoxOffice || 0, userData.desc.totalBoxOffice >= 1000 ? 1 : 0);
                }
                this.m_tip.text = Game.config.msg.getTxt(MsgKey.ranking_list_reset);
            };
            StreetRankPanel.prototype.UpdateMovieView = function () {
                var cd = Game.moduleModel.street.groupMovieRankCongratulateCD;
                if (cd > 0) {
                    this.congraTick.SetTargetTimes(cd);
                    this.congraTick.Restart();
                }
                else {
                    this.congraTick.Stop();
                }
                this.rankGroupMovieList = Game.moduleModel.rank.GroupMovieRankList || [];
                this.m_list.numItems = this.rankGroupMovieList.length;
                var userData = Game.moduleModel.rank.SelfGroupMovieRankData;
                if (userData && userData.desc.movieName != "") {
                    this.m_txtMovieName.text = userData.desc.movieName;
                    this.m_txtMovieRank.text = Games.TEXT.RankText.format(userData.rank);
                    this.m_txtMovie.text = formatNumberUnit(userData.desc.totalBoxOffice || 0, userData.desc.totalBoxOffice >= 1000 ? 1 : 0);
                }
                else {
                    this.m_txtMovieName.text = "";
                    this.m_txtMovieRank.text = "";
                    this.m_txtMovie.text = "";
                }
            };
            StreetRankPanel.prototype.OnStreetIconClick = function () {
                this.moduleWindow.conent.OpenStreetListPanel();
            };
            StreetRankPanel.prototype.OnTabClick = function (index) {
                if (this.selectIndex == this.m_rankType.selectedIndex) {
                    return;
                }
                this.selectIndex = this.m_rankType.selectedIndex;
                switch (this.m_rankType.selectedIndex) {
                    case 0:
                        this.UpdateGroupView();
                        break;
                    case 1:
                        Game.moduleModel.task.openRankNum = 1;
                        this.UpdateMovieView();
                        break;
                    default:
                        break;
                }
            };
            StreetRankPanel.prototype.onWindowOpen = function () {
                var arg = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    arg[_i] = arguments[_i];
                }
                Game.protosender.rank.GetGroupRankList();
                Game.protosender.rank.GetGroupMovieRankList();
                this.selectIndex = -1;
                this.m_rankType.setSelectedIndex(0);
                this.OnTabClick(0);
            };
            StreetRankPanel.prototype.onWindowShow = function () {
                this.m_marquee.Show();
                Game.protoOkEvent.add(ProtoEventKey.rank_GetGroupMovieRankList, this.UpdateView, this);
                Game.protoOkEvent.add(ProtoEventKey.rank_GetGroupRankList, this.UpdateView, this);
                Game.protoOkEvent.add(ProtoEventKey.rank_GetStreetReward, this.UpdateView, this);
                Game.protoOkEvent.add(ProtoEventKey.GameData_RenameGameData, this.UpdateView, this);
                Game.protoOkEvent.add(ProtoEventKey.GameData_RePortraitGameData, this.UpdateView, this);
            };
            StreetRankPanel.prototype.onWindowHide = function () {
                this.tick.Stop();
                this.m_marquee.Hide();
                Game.protoOkEvent.remove(ProtoEventKey.rank_GetGroupMovieRankList, this.UpdateView, this);
                Game.protoOkEvent.remove(ProtoEventKey.rank_GetGroupRankList, this.UpdateView, this);
                Game.protoOkEvent.remove(ProtoEventKey.rank_GetStreetReward, this.UpdateView, this);
                Game.protoOkEvent.remove(ProtoEventKey.GameData_RenameGameData, this.UpdateView, this);
                Game.protoOkEvent.remove(ProtoEventKey.GameData_RePortraitGameData, this.UpdateView, this);
            };
            StreetRankPanel.prototype.OnCloseClick = function () {
                this.moduleWindow.menuClose();
            };
            return StreetRankPanel;
        }(Street.StreetRankPanelStruct));
        Street.StreetRankPanel = StreetRankPanel;
    })(Street = fgui.Street || (fgui.Street = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=StreetRankPanel.js.map