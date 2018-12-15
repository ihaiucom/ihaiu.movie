var Games;
(function (Games) {
    var OscarRewardData = /** @class */ (function () {
        function OscarRewardData() {
        }
        OscarRewardData.Create = function (type, value1, value2, value3, value4, value5) {
            var data = new OscarRewardData();
            data.type = type;
            data.value1 = value1;
            data.value2 = value2;
            data.value3 = value3;
            data.value4 = value4;
            data.value5 = value5;
            return data;
        };
        Object.defineProperty(OscarRewardData.prototype, "name", {
            get: function () {
                switch (this.type) {
                    case Proto.SE.EOscarType.bestBoxOffice:
                        return Games.TEXT.OscarRewardNameDesc_6;
                    case Proto.SE.EOscarType.bigSell:
                        return Games.TEXT.OscarRewardNameDesc_9;
                    case Proto.SE.EOscarType.totalBoxOffice:
                    case Proto.SE.EOscarType.movies:
                        return "";
                    default:
                        break;
                }
                return "";
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(OscarRewardData.prototype, "title", {
            get: function () {
                switch (this.type) {
                    case Proto.SE.EOscarType.bestBoxOffice:
                        var str = this.value2;
                        str = str.replace('&', "&amp;");
                        return str == "" ? Games.TEXT.OscarRewardNoMovie : str;
                    case Proto.SE.EOscarType.totalBoxOffice:
                        return Games.TEXT.OscarRewardValueDesc_7.format(this.value2, formatNumberUnit(this.value1, this.value1 > 1000 ? 1 : 0));
                    case Proto.SE.EOscarType.movies:
                        return Games.TEXT.OscarRewardValueDesc_8.format(this.value1);
                    case Proto.SE.EOscarType.bigSell:
                        return Games.TEXT.OscarRewardValueDesc_9.format(this.value1);
                    default:
                        break;
                }
                return "";
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(OscarRewardData.prototype, "info", {
            get: function () {
                switch (this.type) {
                    case Proto.SE.EOscarType.bestBoxOffice:
                        return Games.TEXT.OscarRewardInfoDesc_6.format(this.value3, formatNumberUnit(this.value1, this.value1 > 1000 ? 1 : 0));
                    case Proto.SE.EOscarType.totalBoxOffice:
                        if (this.value4 == 0 || this.value3 == 0) {
                            return "";
                        }
                        return Games.TEXT.OscarRewardInfoDesc_7.format((this.value4 / this.value3 * 100).toFixed(1), Game.moduleModel.street.GetStreetName(Game.moduleModel.oscar.OscarStreetId), this.value3);
                    case Proto.SE.EOscarType.movies:
                    case Proto.SE.EOscarType.bigSell:
                        return "";
                    default:
                        break;
                }
                return "";
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(OscarRewardData.prototype, "tip", {
            get: function () {
                return Game.config.msg.getConfig(OscarRewardData.listTipDesc[this.type]).notice;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(OscarRewardData.prototype, "RewardList", {
            get: function () {
                if (this.rewards) {
                    return this.rewards;
                }
                var items = [];
                switch (this.type) {
                    case Proto.SE.EOscarType.bestBoxOffice:
                        items = Game.config.blockRankingList.GetReward(2, this.value3);
                        break;
                    case Proto.SE.EOscarType.totalBoxOffice:
                        items = Game.config.blockRankingList.GetReward(1, this.value2);
                        break;
                    case Proto.SE.EOscarType.movies:
                        if (this.value1 == 0) {
                            break;
                        }
                        var movieReward = Game.moduleModel.oscar.lastMovieReward;
                        for (var index = 0; index < movieReward.length; index++) {
                            var reward = new DTItemNum();
                            reward.itemId = movieReward[index].itemId;
                            reward.itemNum = movieReward[index].itemNum * this.value1;
                            items.push(reward);
                        }
                        break;
                    case Proto.SE.EOscarType.bigSell:
                        if (this.value1 == 0) {
                            break;
                        }
                        var globalMaxLimit = Game.config.global.getConfig(GlobalKey.KEY_24_AoSiKaBi__JiangLiShangXian).value;
                        var maxValue = this.value1 > globalMaxLimit ? globalMaxLimit : this.value1;
                        var cfg = Game.config.global.getConfig(GlobalKey.KEY_23_AoSiKaBi__JiangLiDaoJu);
                        if (cfg) {
                            var values = cfg.value2;
                            for (var index = 0; index < values.length; index++) {
                                var value = values[index];
                                var item_1 = new DTItemNum;
                                item_1.itemId = value.v1;
                                item_1.itemNum = value.v2 * maxValue;
                                items.push(item_1);
                            }
                        }
                        break;
                    default:
                        break;
                }
                this.rewards = [];
                for (var index = 0; index < items.length; index++) {
                    var item = items[index];
                    this.rewards.push(Games.ItemData.Create(item.itemId, item.itemNum));
                }
                return this.rewards;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(OscarRewardData.prototype, "IsHistoryBest", {
            get: function () {
                switch (this.type) {
                    case Proto.SE.EOscarType.totalBoxOffice:
                        return this.value5;
                    default:
                        break;
                }
                return false;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(OscarRewardData.prototype, "canReward", {
            get: function () {
                // console.log("奥斯卡奖励type" + this.type + "length" + this.RewardList.length);
                return this.RewardList.length > 0;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(OscarRewardData.prototype, "hasGetReward", {
            get: function () {
                return Game.moduleModel.oscar.HasGetReward(this.type);
            },
            enumerable: true,
            configurable: true
        });
        OscarRewardData.listTipDesc = [0, 0, 0, 0, 0, 0,
            1063, 1064, 1065, 1066];
        return OscarRewardData;
    }());
    Games.OscarRewardData = OscarRewardData;
    // bestBoxOffice = 6,
    // "bestBoxOffice": "int", // 最高票房
    // "bestBoxOfficeName": "string", // 最高票房电影
    // "bestBoxOfficeRank": "int", // 最高票房排名
    // totalBoxOffice = 7,
    // "totalBoxOffice": "int", // 最高总票房
    // "totalBoxOfficeRank": "int", // 最高总票房排名
    // movies = 8,
    // "movies": "int", // 电影拍摄数量
    // bigSell = 9, 
    // "big_sell": "int", // 大卖电影数量
    // "rewardFlags": "array<int>" // 奖励领取标记
    // "historyBestTotalBoxOffice": "int", // 历史总票房最佳
    // "historyBestTotalBoxOfficeRank": "int", // 历史总票房最佳排名
    // "historyBestTotalBexOfficeBlockLevel": "int", // 历史最佳的街区排名
    // "historyIsNew": "bool", // 是否新记录
})(Games || (Games = {}));
//# sourceMappingURL=OscarRewardData.js.map