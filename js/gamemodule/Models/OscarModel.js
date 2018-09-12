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
var Games;
(function (Games) {
    var OscarModel = /** @class */ (function (_super) {
        __extends(OscarModel, _super);
        function OscarModel() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.listOscarAwards = [];
            _this.listGameRewardInfo = [];
            _this.listDailyEvent = [];
            _this.listYesterdatEvent = [];
            _this.listDanmu = [];
            _this.rewardFlags = [];
            return _this;
            /** 测试用 */
            // get OscarTime(): number
            // {
            // 	let hour = Game.config.global.getConfig(25).value;
            // 	let date = new Date(Game.time.serverMilliseconds);
            // 	let nowH = date.getHours();
            // 	//TODO
            // 	hour = 1;
            // 	let m = 50;
            // 	let nowM = date.getMinutes();
            // 	date.setHours(hour);
            // 	date.setMinutes(m);
            // 	date.setSeconds(0);
            // 	return hour > nowH || (hour == nowH && m > nowM) ?
            // 		date.valueOf() / 1000 - Game.time.serverSeconds : date.valueOf() / 1000 + 24 * 60 * 60 - Game.time.serverSeconds;
            // }
        }
        // 初始化
        OscarModel.prototype.install = function () {
            this.InitData();
        };
        OscarModel.prototype.UpdateOscarData = function (msg) {
            this.oscarStreetId = msg.blockLevel;
            this.listOscarAwards = [];
            // 1
            this.listOscarAwards.push(Games.AwardsData.Create(Games.OscarAwardsType.Man, msg.man, msg.bestMan));
            // 2
            this.listOscarAwards.push(Games.AwardsData.Create(Games.OscarAwardsType.Woman, msg.woman, msg.bestWoman));
            // 3
            this.listOscarAwards.push(Games.AwardsData.Create(Games.OscarAwardsType.Perform, msg.perform, msg.bestPerform));
            // 4
            this.listOscarAwards.push(Games.AwardsData.Create(Games.OscarAwardsType.Art, msg.art, msg.bestArt));
            // 5
            this.listOscarAwards.push(Games.AwardsData.Create(Games.OscarAwardsType.PublicPraise, msg.publicPraise, msg.bestPublicPraise));
        };
        OscarModel.prototype.UpdateRewardData = function (msg) {
            this.timePropagandaDepartment = msg.propaganda_department;
            //  "big_sell": "int", // 大卖电影数量
            // "totalBoxOffice": "int", // 最高总票房
            // "totalBoxOfficeRank": "int", // 最高总票房排名
            // "movies": "int", // 电影拍摄数量
            // "bestBoxOffice": "int", // 最高票房
            // "bestBoxOfficeName": "string", // 最高票房电影
            // "bestBoxOfficeRank": "int", // 最高票房排名
            // "rewardFlags": "array<int>" // 奖励领取标记
            // "historyBestTotalBoxOffice": "int", // 历史总票房最佳
            // "historyBestTotalBoxOfficeRank": "int", // 历史总票房最佳排名
            // "historyBestTotalBexOfficeBlockLevel": "int", // 历史最佳的街区排名
            // "historyBestTotalBexOfficeTotal": "int", // 当前街区玩家人数
            // "historyIsNew": "bool", // 是否新记录
            this.listGameRewardInfo = [];
            this.listGameRewardInfo.push(Games.OscarRewardData.Create(Proto.SE.EOscarType.bestBoxOffice, msg.bestBoxOffice, //value1 最高票房
            msg.bestBoxOfficeName, //value2 最高票房电影
            msg.bestBoxOfficeRank + 1 //value3 最高票房排名
            ));
            this.listGameRewardInfo.push(Games.OscarRewardData.Create(Proto.SE.EOscarType.totalBoxOffice, msg.totalBoxOffice, //value1 历史总票房最佳
            msg.totalBoxOfficeRank + 1, //value2 最高总票房排名
            msg.historyBestTotalBexOfficeTotal, //value3 当前街区玩家人数
            msg.historyBestTotalBoxOfficeRank, //value4 历史总票房最佳排名
            msg.historyIsNew));
            this.listGameRewardInfo.push(Games.OscarRewardData.Create(Proto.SE.EOscarType.movies, msg.movies));
            this.listGameRewardInfo.push(Games.OscarRewardData.Create(Proto.SE.EOscarType.bigSell, msg.big_sell));
            this.rewardFlags = msg.rewardFlags;
        };
        OscarModel.prototype.UpdateDailyEventData = function (msg) {
            this.listDailyEvent = [];
            this.listYesterdatEvent = [];
            for (var index = 0; index < msg.data.length; index++) {
                var data = msg.data[index];
                var event = Games.DailyEventData.CreateByProto(data);
                if (event.isToday) {
                    this.listDailyEvent.push(event);
                }
                else if (event.hasData) {
                    this.listYesterdatEvent.push(event);
                }
            }
            this.listDailyEvent.sort(Games.DailyEventData.sort);
            this.listYesterdatEvent.sort(Games.DailyEventData.sort);
        };
        OscarModel.prototype.UpdateDanmu = function (msg) {
            this.listDanmu = [];
            for (var index = 0; index < msg.data.length; index++) {
                var item = msg.data[index];
                this.listDanmu.push(Games.DanmuData.CreateByProto(item));
            }
        };
        OscarModel.prototype.AddOscarEvent = function (_list, isToday) {
            var list = _list.slice(0);
            var hour = Game.config.global.getConfig(25).value;
            var date = new Date(Game.time.serverMilliseconds);
            var nowH = date.getHours();
            date.setHours(hour);
            date.setMinutes(0);
            date.setSeconds(0);
            if (isToday) {
                // let time = nowH >= hour ? date.valueOf() / 1000 + 24 * 60 * 60 : date.valueOf() / 1000;
                var time = date.valueOf() / 1000;
                list.push(Games.DailyEventData.Create(Games.DailyEventType.Awards, time, Games.TEXT.OscarName));
            }
            else {
                // let time = nowH >= hour ? date.valueOf() / 1000 : date.valueOf() / 1000 - 24 * 60 * 60;
                var time = date.valueOf() / 1000 - 24 * 60 * 60;
                var event_1 = Games.DailyEventData.Create(Games.DailyEventType.Awards, time, Games.TEXT.OscarName);
                if (event_1.hasData) {
                    list.push(event_1);
                }
            }
            return list;
        };
        Object.defineProperty(OscarModel.prototype, "OscarAwardsList", {
            get: function () {
                var list = this.listOscarAwards.slice(0);
                return this.listOscarAwards;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(OscarModel.prototype, "OscarRewardList", {
            get: function () {
                return this.listGameRewardInfo;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(OscarModel.prototype, "OscarDailyEventList", {
            get: function () {
                if (Game.moduleModel.oscar.isUnLockNextOscar) {
                    return this.AddOscarEvent(this.listDailyEvent, true);
                }
                return this.listDailyEvent.sort(function (a, b) { return b.TimeNum - a.TimeNum; });
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(OscarModel.prototype, "OscarYesterdayEventList", {
            get: function () {
                if (Game.moduleModel.oscar.isUnLockOscar) {
                    return this.AddOscarEvent(this.listYesterdatEvent, false);
                }
                return this.listYesterdatEvent.sort(function (a, b) { return b.TimeNum - a.TimeNum; });
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(OscarModel.prototype, "DanmuList", {
            get: function () {
                return this.listDanmu;
            },
            enumerable: true,
            configurable: true
        });
        OscarModel.prototype.GetDanmu = function (flag) {
            var list = [];
            for (var index = 0; index < this.listDanmu.length; index++) {
                var danmu = this.listDanmu[index];
                if (danmu.flag == flag) {
                    list.push(danmu);
                }
            }
            return list;
        };
        OscarModel.prototype.GetOscarAwards = function (type) {
            return this.listOscarAwards[type];
        };
        Object.defineProperty(OscarModel.prototype, "lastMovieReward", {
            get: function () {
                var cfg = Game.config.blockLevel.getConfig(this.oscarStreetId);
                if (cfg) {
                    return cfg.movie_daily_reward;
                }
                return [];
            },
            enumerable: true,
            configurable: true
        });
        OscarModel.prototype.InitData = function () {
            // this.listGameRewardInfo.push(OscarRewardData.Create(Proto.SE.EOscarType.bestBoxOffice, 0, "", 0));
            // this.listGameRewardInfo.push(OscarRewardData.Create(Proto.SE.EOscarType.totalBoxOffice, 0, 0));
            // this.listGameRewardInfo.push(OscarRewardData.Create(Proto.SE.EOscarType.movies, 0));
            // this.listGameRewardInfo.push(OscarRewardData.Create(Proto.SE.EOscarType.bigSell, 0));
            // this.LocalData();
        };
        OscarModel.prototype.LocalData = function () {
            var oscarDesc = new Proto.SS.OscarDesc();
            oscarDesc.name = "Name";
            oscarDesc.playerName = "PlayerName";
            oscarDesc.userId = 0;
            oscarDesc.id = 1001;
            var listCandidate = [];
            listCandidate.push(oscarDesc);
            listCandidate.push(oscarDesc);
            listCandidate.push(oscarDesc);
            // 1
            this.listOscarAwards.push(Games.AwardsData.Create(Games.OscarAwardsType.Man, [], 1));
            // 2
            this.listOscarAwards.push(Games.AwardsData.Create(Games.OscarAwardsType.Woman, listCandidate, 1));
            // 3
            this.listOscarAwards.push(Games.AwardsData.Create(Games.OscarAwardsType.Perform, listCandidate, 1));
            // 4
            this.listOscarAwards.push(Games.AwardsData.Create(Games.OscarAwardsType.Art, [], 1));
            // 5
            this.listOscarAwards.push(Games.AwardsData.Create(Games.OscarAwardsType.PublicPraise, listCandidate, 1));
            // this.listGameRewardInfo.push(OscarRewardData.Create(Proto.SE.EOscarType.bestBoxOffice, 1, " msg.bestBoxOfficeName", 1));
            // this.listGameRewardInfo.push(OscarRewardData.Create(Proto.SE.EOscarType.totalBoxOffice, 1, 1));
            // this.listGameRewardInfo.push(OscarRewardData.Create(Proto.SE.EOscarType.movies, 1));
            // this.listGameRewardInfo.push(OscarRewardData.Create(Proto.SE.EOscarType.bigSell, 1));
            var time = Game.time.serverMilliseconds;
            this.listDailyEvent.push(Games.DailyEventData.Create(Games.DailyEventType.Movie, time + 1000 * 60, "Movie"));
            this.listDailyEvent.push(Games.DailyEventData.Create(Games.DailyEventType.Movie, time + 2000 * 60, "Movie"));
            this.listDailyEvent.push(Games.DailyEventData.Create(Games.DailyEventType.Movie, time + 3000 * 60, "Movie"));
            this.listYesterdatEvent.push(Games.DailyEventData.Create(Games.DailyEventType.Movie, time - 24 * 60 * 60 * 1000 + 4000 * 60, "Movie"));
            this.listYesterdatEvent.push(Games.DailyEventData.Create(Games.DailyEventType.Movie, time - 24 * 60 * 60 * 1000 + 5000 * 60, "Movie"));
            this.listDailyEvent.sort(Games.DailyEventData.sort);
            this.listYesterdatEvent.sort(Games.DailyEventData.sort);
        };
        OscarModel.prototype.HasGetReward = function (type) {
            if (this.rewardFlags[type - 1] == 1) {
                return true;
            }
            return false;
        };
        Object.defineProperty(OscarModel.prototype, "IsFinishReward", {
            get: function () {
                for (var index = 0; index < this.listGameRewardInfo.length; index++) {
                    var data = this.listGameRewardInfo[index];
                    if (data.canReward && !this.HasGetReward(data.type)) {
                        return false;
                    }
                }
                return true;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(OscarModel.prototype, "IsFinishOscar", {
            get: function () {
                if (Game.moduleModel.rank.rankInfo) {
                    if (Game.moduleModel.rank.rankInfo.lastGroupId == 0) {
                        return true;
                    }
                    if (Game.moduleModel.rank.rankInfo.isNew) {
                        return false;
                    }
                    else {
                        return this.IsFinishReward;
                    }
                }
                return true;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(OscarModel.prototype, "isUnLockOscar", {
            get: function () {
                var hasOscarData = true;
                if (Game.moduleModel.rank.rankInfo && Game.moduleModel.rank.rankInfo.lastGroupId == 0) {
                    hasOscarData = false;
                }
                if (this.timePropagandaDepartment) {
                    var oscarTime = this.OscarCD;
                    if (oscarTime - this.timePropagandaDepartment <= 60 * 60 * 24) {
                        hasOscarData = false;
                    }
                }
                var isRoomBuild = Game.moduleModel.building.hasBuildByType(Games.RoomType.Spread);
                return hasOscarData && isRoomBuild;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(OscarModel.prototype, "isUnLockNextOscar", {
            get: function () {
                var isRoomBuild = Game.moduleModel.building.hasBuildByType(Games.RoomType.Spread);
                return isRoomBuild;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(OscarModel.prototype, "OscarCD", {
            //今日奥斯卡CD， 秒
            get: function () {
                return this.OscarTime - Game.time.serverSeconds;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(OscarModel.prototype, "OscarTime", {
            //今日奥斯卡时间， 秒
            get: function () {
                var hour = Game.config.global.getConfig(25).value;
                var date = new Date(Game.time.serverMilliseconds);
                var nowH = date.getHours();
                date.setHours(hour);
                date.setMinutes(0);
                date.setSeconds(0);
                return hour >= nowH ? date.valueOf() / 1000 : date.valueOf() / 1000 + 24 * 60 * 60;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(OscarModel.prototype, "LastOscarTime", {
            //上次奥斯卡时间， 秒
            get: function () {
                var hour = Game.config.global.getConfig(25).value;
                var date = new Date(Game.time.serverMilliseconds);
                var nowH = date.getHours();
                date.setHours(hour);
                date.setMinutes(0);
                date.setSeconds(0);
                return hour >= nowH ? date.valueOf() / 1000 - 24 * 60 * 60 : date.valueOf() / 1000;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(OscarModel.prototype, "LastOscarDay", {
            get: function () {
                var lastTime = Game.moduleModel.oscar.LastOscarTime;
                return Games.TimeHelper.DateTimeFormat3(lastTime);
            },
            enumerable: true,
            configurable: true
        });
        return OscarModel;
    }(Games.MModel));
    Games.OscarModel = OscarModel;
})(Games || (Games = {}));
//# sourceMappingURL=OscarModel.js.map