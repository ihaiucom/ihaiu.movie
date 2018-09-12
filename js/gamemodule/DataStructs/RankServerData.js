var Games;
(function (Games) {
    var RankServerData = /** @class */ (function () {
        function RankServerData(rank, desc) {
            this.rank = rank;
            this.desc = desc;
            if (desc.totalBoxOffice != null) {
                var total = desc.totalBoxOffice.toString();
                this.desc.totalBoxOffice = parseInt(total);
                if (this.desc.totalBoxOffice < 0) {
                    this.desc.totalBoxOffice = 0;
                }
            }
            else {
                this.desc.totalBoxOffice = -1;
                console.warn("[error]服务器数据 RankServerData.totalBoxOffice为空值");
            }
        }
        Object.defineProperty(RankServerData.prototype, "playerIconUrl", {
            get: function () {
                return Game.config.headPortrait.GetPlayerIconUrl(this.desc.portrait, this.desc.sex);
            },
            enumerable: true,
            configurable: true
        });
        return RankServerData;
    }());
    Games.RankServerData = RankServerData;
    var RankGroupData = /** @class */ (function () {
        function RankGroupData(rank, desc) {
            this.rank = rank;
            this.desc = desc;
            if (desc.totalBoxOffice != null) {
                var total = desc.totalBoxOffice.toString();
                this.desc.totalBoxOffice = parseInt(total);
                if (this.desc.totalBoxOffice < 0) {
                    this.desc.totalBoxOffice = 0;
                }
            }
            else {
                this.desc.totalBoxOffice = -1;
                console.warn("[error]服务器数据 RankGroupData.totalBoxOffice为空值");
            }
        }
        Object.defineProperty(RankGroupData.prototype, "canCongratulate", {
            get: function () {
                var cfgList = Game.config.blockRankingList.getConfigList();
                for (var index = 0; index < cfgList.length; index++) {
                    var cfg = cfgList[index];
                    if (cfg.type == Games.RankListType.GroupMovieList && cfg.rank == this.rank && cfg.congratulate_switch == true) {
                        return Game.moduleModel.street.hasCongratulateNums;
                    }
                }
                return false;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(RankGroupData.prototype, "hasReward", {
            get: function () {
                var cfgList = Game.config.blockRankingList.getConfigList();
                for (var index = 0; index < cfgList.length; index++) {
                    var cfg = cfgList[index];
                    if (cfg.type == Games.RankListType.GroupList && cfg.rank == this.rank && cfg.extra_reward && cfg.extra_reward.length > 0) {
                        return true;
                    }
                }
                return false;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(RankGroupData.prototype, "playerIconUrl", {
            get: function () {
                return Game.config.headPortrait.GetPlayerIconUrl(this.desc.portrait, this.desc.sex);
            },
            enumerable: true,
            configurable: true
        });
        return RankGroupData;
    }());
    Games.RankGroupData = RankGroupData;
    var RankGroupMovieData = /** @class */ (function () {
        function RankGroupMovieData(rank, desc) {
            this.rank = rank;
            this.desc = desc;
            if (desc.totalBoxOffice != null) {
                var total = desc.totalBoxOffice.toString();
                this.desc.totalBoxOffice = parseInt(total);
                if (this.desc.totalBoxOffice < 0) {
                    this.desc.totalBoxOffice = 0;
                }
            }
            else {
                this.desc.totalBoxOffice = -1;
                console.warn("[error]服务器数据 RankGroupMovieData.totalBoxOffice为空值");
            }
        }
        Object.defineProperty(RankGroupMovieData.prototype, "canCongratulate", {
            get: function () {
                var cfgList = Game.config.blockRankingList.getConfigList();
                for (var index = 0; index < cfgList.length; index++) {
                    var cfg = cfgList[index];
                    if (cfg.type == Games.RankListType.GroupList && cfg.rank == this.rank && cfg.congratulate_switch == true) {
                        return Game.moduleModel.street.hasCongratulateNums;
                    }
                }
                return false;
            },
            enumerable: true,
            configurable: true
        });
        return RankGroupMovieData;
    }());
    Games.RankGroupMovieData = RankGroupMovieData;
})(Games || (Games = {}));
//# sourceMappingURL=RankServerData.js.map