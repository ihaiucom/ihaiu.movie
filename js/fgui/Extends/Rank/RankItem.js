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
        var RankItem = /** @class */ (function (_super) {
            __extends(RankItem, _super);
            function RankItem() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            RankItem.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_btnMovie.onClick(this, this.OnBtnMovieClick);
                this.m_btnPlayer.onClick(this, this.OnBtnPlayerClick);
            };
            Object.defineProperty(RankItem.prototype, "rank", {
                set: function (num) {
                    if (num <= 3 && num > 0) {
                        this.m_Rank.setSelectedIndex(num);
                    }
                    else {
                        this.m_Rank.setSelectedIndex(0);
                        this.m_txtRank.text = num.toString();
                    }
                },
                enumerable: true,
                configurable: true
            });
            RankItem.prototype.Render = function (rankData) {
                this.rankData = rankData;
                if (this.rankData) {
                    this.rank = rankData.rank;
                    this.icon = this.rankData.playerIconUrl;
                    this.m_txtName.text = rankData.desc.name;
                    this.m_txtMovie.text = this.rankData.desc.totalBoxOffice > 0 ? formatNumberUnit(this.rankData.desc.totalBoxOffice) : "";
                    this.m_btnMovie.icon = Game.config.story.GetPoster(rankData.desc.movieId);
                    this.m_btnMovie.visible = this.rankData.desc.movieId != 0;
                    var userRank = Game.moduleModel.rank.SelfServerRankData;
                    if (User.account.userId == this.rankData.desc.userId) {
                        this.icon = User.headIconUrl;
                        this.m_BG.setSelectedIndex(1);
                        this.m_isMine.setSelectedIndex(1);
                    }
                    else {
                        this.m_BG.setSelectedIndex(0);
                        this.m_isMine.setSelectedIndex(0);
                    }
                }
            };
            RankItem.prototype.OnBtnMovieClick = function () {
                if (this.rankData.desc.movieUuid) {
                    var movieData = Game.moduleModel.rank.GetMovieShort(this.rankData.desc.movieUuid);
                    if (movieData) {
                        Game.system.movieInfo(movieData);
                    }
                    else {
                        Game.system.movieInfo(this.rankData.desc.movieUuid);
                    }
                }
            };
            RankItem.prototype.OnBtnPlayerClick = function () {
                if (this.rankData.desc.userId) {
                    var playerData = Game.moduleModel.rank.GetPlayerShortData(this.rankData.desc.userId);
                    if (playerData) {
                        Game.system.playerInfo(playerData);
                    }
                    else {
                        Game.system.playerInfo(this.rankData.desc.userId);
                    }
                }
            };
            return RankItem;
        }(Rank.RankItemStruct));
        Rank.RankItem = RankItem;
    })(Rank = fgui.Rank || (fgui.Rank = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=RankItem.js.map