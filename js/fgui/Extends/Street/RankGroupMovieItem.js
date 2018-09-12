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
        var RankGroupMovieItem = /** @class */ (function (_super) {
            __extends(RankGroupMovieItem, _super);
            function RankGroupMovieItem() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            RankGroupMovieItem.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_btnCongratulate.onClick(this, this.OnBtnCongratulateClick);
                this.m_btnMovie.onClick(this, this.OnBtnMovieClick);
                this.tick = Game.tick.AddTick(1, -1, new Handler(this, this.OnTick), new Handler(this, this.OnTickFinish));
            };
            RankGroupMovieItem.prototype.Render = function (rankData) {
                this.rankData = rankData;
                if (this.rankData) {
                    this.rank = this.rankData.rank;
                    this.m_txtName.text = this.rankData.desc.name;
                    this.m_txtMovie.text = this.rankData.desc.totalBoxOffice > 0 ? formatNumberUnit(this.rankData.desc.totalBoxOffice) : "";
                    this.m_btnMovie.icon = Game.config.story.GetPoster(this.rankData.desc.movieId);
                    this.m_btnMovie.visible = this.rankData.desc.movieId != 0;
                    this.m_txtMovieName.text = this.rankData.desc.movieName;
                    if (User.account.userId == this.rankData.desc.userId) {
                        this.m_txtName.text = User.info.name;
                        this.m_BG.setSelectedIndex(1);
                        this.m_isMine.setSelectedIndex(1);
                    }
                    else {
                        this.m_BG.setSelectedIndex(0);
                        this.m_isMine.setSelectedIndex(0);
                    }
                    if (this.rankData.canCongratulate) {
                        this.m_btnCongratulate.visible = true;
                        var cd = Game.moduleModel.street.groupMovieRankCongratulateCD;
                        if (cd > 0) {
                            this.m_btnCongratulate.enabled = false;
                            this.tick.SetTargetTimes(cd);
                            this.tick.Restart();
                        }
                        else {
                            this.m_btnCongratulate.enabled = true;
                            this.tick.Stop();
                        }
                    }
                    else {
                        this.m_btnCongratulate.visible = false;
                        this.tick.Stop();
                    }
                }
            };
            Object.defineProperty(RankGroupMovieItem.prototype, "rank", {
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
            RankGroupMovieItem.prototype.OnBtnMovieClick = function () {
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
            RankGroupMovieItem.prototype.OnBtnCongratulateClick = function () {
                var cd = Game.moduleModel.street.groupMovieRankCongratulateCD;
                if (cd <= 0) {
                    if (this.rankData.desc.userId == User.account.userId) {
                        Game.system.toastText(Games.TEXT.StreetCongratulateSelf);
                        return;
                    }
                    Game.protosender.rank.GetStreetReward(2000 + this.rankData.rank);
                }
            };
            RankGroupMovieItem.prototype.OnTick = function (residue_times) {
                if (this.m_btnCongratulate.m_time.visible) {
                    this.m_btnCongratulate.m_time.text = TimeHelper.TimeFormat(residue_times);
                    return;
                }
                this.tick.Stop();
            };
            RankGroupMovieItem.prototype.OnTickFinish = function () {
                this.tick.Stop();
            };
            return RankGroupMovieItem;
        }(Street.RankGroupMovieItemStruct));
        Street.RankGroupMovieItem = RankGroupMovieItem;
    })(Street = fgui.Street || (fgui.Street = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=RankGroupMovieItem.js.map