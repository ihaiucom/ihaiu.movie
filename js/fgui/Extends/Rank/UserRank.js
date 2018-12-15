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
        var UserRank = /** @class */ (function (_super) {
            __extends(UserRank, _super);
            function UserRank() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            UserRank.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_btnMovie.onClick(this, this.OnBtnMovieClick);
                this.m_btnReward.onClick(this, this.OnBtnRewardClick);
                this.m_listReward.itemRenderer = new Handler(this, this.RenderRewardItem, null, false);
            };
            UserRank.prototype.Render = function (rankData) {
                this.rankData = rankData;
                if (this.rankData == null) {
                    this.m_btnMovie.visible = false;
                    this.m_txtRank.text = "";
                    this.m_txtName.text = "";
                    this.m_txtMovie.text = "";
                    this.m_listReward.numItems = 0;
                    return;
                }
                this.m_txtRank.text = this.rankData.rank.toString();
                if (this.rankData.desc.movieId != 0) {
                    this.m_txtName.text = this.rankData.desc.movieName;
                    this.m_txtMovie.text = formatNumberUnit(this.rankData.desc.totalBoxOffice || 0, this.rankData.desc.totalBoxOffice > 1000 ? 1 : 0);
                    this.m_btnMovie.icon = Game.config.story.GetPoster(rankData.desc.movieId);
                    this.m_btnMovie.visible = true;
                }
                else {
                    this.m_btnMovie.visible = false;
                    this.m_txtName.text = "";
                    this.m_txtMovie.text = "";
                    this.m_listReward.numItems = 0;
                }
                this.lastRewardList = Game.moduleModel.rank.LastRewardList;
                this.m_listReward.numItems = this.lastRewardList.length;
                if (Game.moduleModel.rank.hasGetLastReward) {
                    this.m_hasGetReward.setSelectedIndex(1);
                }
                else {
                    this.m_hasGetReward.setSelectedIndex(0);
                    this.m_btnReward.enabled = this.lastRewardList.length > 0;
                }
            };
            UserRank.prototype.RenderRewardItem = function (index, obj) {
                if (this.rankData == null) {
                    return;
                }
                var data = this.lastRewardList[index];
                obj.title = data.itemNumTxt;
                obj.m_star.starNum = data.itemStar;
                obj.icon = Games.ItemData.GetIconUrl(data.itemId);
                obj.PopupInfo = data.itemId;
            };
            UserRank.prototype.OnBtnMovieClick = function () {
                if (this.rankData == null) {
                    return;
                }
                var movieData = Game.moduleModel.rank.GetMovieShort(this.rankData.desc.movieUuid);
                if (movieData) {
                    Game.system.movieInfo(movieData);
                }
                else {
                    if (this.rankData.desc.movieUuid) {
                        Game.protosender.rank.GetMovieShortData(this.rankData.desc.movieUuid);
                    }
                }
            };
            UserRank.prototype.OnBtnRewardClick = function () {
                if (this.rankData == null) {
                    return;
                }
                if (Game.moduleModel.rank.CanGetReward) {
                    Game.protosender.rank.GetServerListReward(Game.moduleModel.rank.ServerUuid);
                }
            };
            return UserRank;
        }(Rank.UserRankStruct));
        Rank.UserRank = UserRank;
    })(Rank = fgui.Rank || (fgui.Rank = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=UserRank.js.map