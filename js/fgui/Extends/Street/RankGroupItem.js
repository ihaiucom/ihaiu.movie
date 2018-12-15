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
        var RankGroupItem = /** @class */ (function (_super) {
            __extends(RankGroupItem, _super);
            function RankGroupItem() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            RankGroupItem.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_btnCongratulate.onClick(this, this.OnBtnCongratulateClick);
                this.m_btnPlayer.onClick(this, this.OnBtnPlayerClick);
                // this.m_labReward.onClick(this, this.OnRewardClick);
            };
            RankGroupItem.prototype.Render = function (rankData) {
                this.rankData = rankData;
                if (this.rankData) {
                    this.rank = this.rankData.rank;
                    this.icon = this.rankData.playerIconUrl;
                    this.m_txtName.text = this.rankData.desc.name;
                    this.m_txtMovie.text = this.rankData.desc.totalBoxOffice > 0 ? formatNumberUnit(this.rankData.desc.totalBoxOffice) : "";
                    var userRank = Game.moduleModel.rank.SelfGroupRankData;
                    if (User.account.userId == this.rankData.desc.userId) {
                        this.icon = User.headIconUrl;
                        this.m_txtName.text = User.info.name;
                        this.m_BG.setSelectedIndex(1);
                        this.m_isMine.setSelectedIndex(1);
                    }
                    else {
                        this.m_BG.setSelectedIndex(0);
                        this.m_isMine.setSelectedIndex(0);
                    }
                    this.m_hasReward.setSelectedIndex(this.rankData.hasReward ? 1 : 0);
                    if (this.rankData.hasReward) {
                        // this.m_labReward.setInfo(this.rankData.extraReward);
                        this.m_labReward.PopupInfo = this.rankData.extraReward.itemId;
                        this.m_labReward.title = "";
                    }
                    if (this.rankData.canCongratulate) {
                        this.m_btnCongratulate.visible = true;
                        var cd = Game.moduleModel.street.gronpRankCongratulateCD;
                        if (cd > 0) {
                            this.m_btnCongratulate.enabled = false;
                        }
                        else {
                            this.m_btnCongratulate.enabled = true;
                        }
                    }
                    else {
                        this.m_btnCongratulate.visible = false;
                    }
                }
            };
            RankGroupItem.prototype.OnBtnPlayerClick = function () {
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
            RankGroupItem.prototype.OnBtnCongratulateClick = function () {
                var cd = Game.moduleModel.street.gronpRankCongratulateCD;
                if (cd <= 0) {
                    if (this.rankData.desc.userId == User.account.userId) {
                        Game.system.toastText(Games.TEXT.StreetCongratulateSelf);
                        return;
                    }
                    Game.protosender.rank.GetStreetReward(1000 + this.rankData.rank);
                }
            };
            Object.defineProperty(RankGroupItem.prototype, "rank", {
                // private OnRewardClick()
                // {
                // 	Game.system.showItemInfo(this, this.rankData.extraReward.itemId);
                // }
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
            RankGroupItem.prototype.OnTick = function (residue_times) {
                if (this.m_btnCongratulate.m_time.visible) {
                    this.m_btnCongratulate.m_time.text = TimeHelper.TimeFormat(residue_times);
                    return;
                }
            };
            return RankGroupItem;
        }(Street.RankGroupItemStruct));
        Street.RankGroupItem = RankGroupItem;
    })(Street = fgui.Street || (fgui.Street = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=RankGroupItem.js.map