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
            _this.listEvent = [];
            _this.lastOscarDataTime = 0;
            _this.listDanmu = [];
            _this.rewardFlags = [];
            //>>>>>>>>奥斯卡自动弹出状态控制
            //奥斯卡开关 用于判定是否在计时器中打开新的奥斯卡
            _this.hasOpenNewOscarShow = false;
            _this.isLocalFinishReward = true;
            return _this;
        }
        Object.defineProperty(OscarModel.prototype, "listDailyEvent", {
            get: function () {
                var list = [];
                for (var index = 0; index < this.listEvent.length; index++) {
                    var data = this.listEvent[index];
                    if (data.isToday) {
                        list.push(data);
                    }
                }
                return list;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(OscarModel.prototype, "listYesterdatEvent", {
            get: function () {
                var list = [];
                for (var index = 0; index < this.listEvent.length; index++) {
                    var data = this.listEvent[index];
                    if (data.isYestody) {
                        list.push(data);
                    }
                }
                return list;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(OscarModel.prototype, "OscarStreetId", {
            get: function () {
                return this.oscarStreetId;
            },
            enumerable: true,
            configurable: true
        });
        // 初始化
        OscarModel.prototype.install = function () {
            this.InitData();
        };
        //新数据来是刷新开关
        OscarModel.prototype.OnOscarDataUpdate = function () {
            this.hasOpenNewOscarShow = false;
            this.TryOpenOscarShow();
        };
        //判断是否打开新的奥斯卡
        OscarModel.prototype.TryOpenOscarShow = function () {
            if (!this.hasOpenNewOscarShow) {
                if ((!this.IsFinishOscar) && this.isUnLockOscar && (!Game.menu.isOpened(Games.MenuId.Awards))) {
                    Game.menu.open(Games.MenuId.Awards, Games.OscarSubEnum.OscarShow);
                    this.hasOpenNewOscarShow = true;
                }
                else {
                    this.hasOpenNewOscarShow = false;
                }
            }
        };
        //<<<<<<<<<奥斯卡自动弹出状态控制
        OscarModel.prototype.UpdateOscarTick = function () {
            this.TryOpenOscarShow();
            if (Math.floor(this.OscarCD) <= 1) {
                this.onOscarTickFinish();
            }
            return false;
        };
        OscarModel.prototype.GetOscarCDTxt = function () {
            return Games.TimeHelper.TimeFormat(this.OscarCD);
        };
        OscarModel.prototype.onOscarTickFinish = function () {
            console.log("奥斯卡倒计时结束");
            setTimeout(function () {
                Game.protosender.rank.GetOscarData();
            }, 1000);
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
            this.lastOscarDataTime = Game.time.serverSeconds;
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
            msg.historyBestTotalBoxOfficeRank + 1, //value4 历史总票房最佳排名
            msg.historyIsNew));
            this.listGameRewardInfo.push(Games.OscarRewardData.Create(Proto.SE.EOscarType.movies, msg.movies));
            this.listGameRewardInfo.push(Games.OscarRewardData.Create(Proto.SE.EOscarType.bigSell, msg.big_sell));
            this.rewardFlags = msg.rewardFlags;
        };
        OscarModel.prototype.UpdateDailyEventData = function (msg) {
            this.listEvent = [];
            for (var index = 0; index < msg.data.length; index++) {
                var data = msg.data[index];
                var event = Games.DailyEventData.CreateByProto(data);
                this.listEvent.push(event);
            }
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
            var hour = Game.config.global.OscarHour;
            var min = Game.config.global.OscarMin;
            var date = Games.TimeHelper.TimeReformat(hour, min, 0);
            if (isToday) {
                var time = date.valueOf() / 1000;
                list.push(Games.DailyEventData.Create(Games.DailyEventType.Awards, time, Games.TEXT.OscarName));
            }
            else {
                var time = date.valueOf() / 1000 - 24 * 60 * 60;
                var event_1 = Games.DailyEventData.Create(Games.DailyEventType.Awards, time, Games.TEXT.OscarName);
                if (event_1.hasData) {
                    list.push(event_1);
                }
            }
            return list.sort(function (a, b) { return a.TimeNum - b.TimeNum; });
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
                return this.listDailyEvent.sort(function (a, b) { return a.TimeNum - b.TimeNum; });
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(OscarModel.prototype, "OscarYesterdayEventList", {
            get: function () {
                if (Game.moduleModel.oscar.isUnLockOscar) {
                    return this.AddOscarEvent(this.listYesterdatEvent, false);
                }
                return this.listYesterdatEvent.sort(function (a, b) { return a.TimeNum - a.TimeNum; });
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
                // console.log("领取奥斯卡奖励-----奖励已领取" + (type - 1));
                return true;
            }
            // console.log("领取奥斯卡奖励-----奖励未领取" + (type - 1));
            return false;
        };
        OscarModel.prototype.SetIsFinishReward = function () {
            this.isLocalFinishReward = false;
        };
        Object.defineProperty(OscarModel.prototype, "IsFinishReward", {
            get: function () {
                if (this.isLocalFinishReward == false) {
                    this.isLocalFinishReward = true;
                    return false;
                }
                for (var index = 0; index < this.listGameRewardInfo.length; index++) {
                    var data = this.listGameRewardInfo[index];
                    if (data.canReward && !this.HasGetReward(data.type)) {
                        // console.log("奥斯卡未完成-----奖励未领取,type " + data.type);
                        return false;
                    }
                }
                // console.log("奥斯卡已完成-----奖励已领取");
                return true;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(OscarModel.prototype, "IsFinishOscar", {
            get: function () {
                if (Game.moduleModel.rank.rankInfo) {
                    if (Game.moduleModel.rank.rankInfo.lastGroupId == 0) {
                        // console.log("奥斯卡已完成-----上次街区id为0");
                        return true;
                    }
                    if (Game.moduleModel.rank.rankInfo.isNew) {
                        // console.log("奥斯卡未完成-----新数据");
                        return false;
                    }
                    else {
                        return this.IsFinishReward;
                    }
                }
                // console.log("奥斯卡完成-----缺少数据");
                return true;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(OscarModel.prototype, "isUnLockOscar", {
            get: function () {
                var hasOscarData = true;
                var isRoomBuild = Game.moduleModel.building.hasBuildByType(Games.RoomType.Spread);
                if (isRoomBuild == false) {
                    // console.log("奥斯卡缺少数据------没有建设宣传部");
                }
                else {
                    if (Game.moduleModel.rank.rankInfo && Game.moduleModel.rank.rankInfo.lastGroupId == 0) {
                        // console.log("奥斯卡缺少数据------上次街区id为0");
                        hasOscarData = false;
                    }
                    if (this.timePropagandaDepartment) {
                        var oscarTime = this.LastOscarTime;
                        if (oscarTime < this.timePropagandaDepartment) {
                            // console.log("奥斯卡缺少数据------宣传部建设时间（" + this.timePropagandaDepartment + "）晚于上次奥斯卡颁奖时间(" + oscarTime + ")");
                            hasOscarData = false;
                        }
                    }
                }
                return isRoomBuild && hasOscarData;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(OscarModel.prototype, "isUnLockNextOscar", {
            get: function () {
                var isRoomBuild = Game.moduleModel.building.hasBuildByType(Games.RoomType.Spread);
                if (isRoomBuild == false) {
                    // console.log("奥斯卡没有解锁--------没有建设宣传部");
                }
                return isRoomBuild;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(OscarModel.prototype, "OscarCD", {
            //今日奥斯卡CD， 秒
            get: function () {
                return this.NextOscarTime - Game.time.serverSeconds;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(OscarModel.prototype, "NextOscarTime", {
            //下次将要颁奖的奥斯卡时间， 秒
            get: function () {
                var hour = Game.config.global.OscarHour;
                var min = Game.config.global.OscarMin;
                var date = Games.TimeHelper.TimeReformat(hour, min, 0);
                if (Game.time.serverMilliseconds > date.valueOf()) {
                    return Math.floor(date.valueOf() / 1000 + 24 * 60 * 60);
                }
                else {
                    return Math.floor(date.valueOf() / 1000);
                }
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(OscarModel.prototype, "LastOscarTime", {
            //上次已经颁奖的奥斯卡时间， 秒
            get: function () {
                return this.NextOscarTime - 24 * 60 * 60;
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