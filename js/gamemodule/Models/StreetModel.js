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
    var StreetModel = /** @class */ (function (_super) {
        __extends(StreetModel, _super);
        function StreetModel() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.NextStreetNum = 5;
            return _this;
        }
        StreetModel.prototype.UpdateStreetCup = function (addNum) {
            var cupNum = this.cupNum;
            var lastCupLimit = this.LastStreetCupLimit;
            if (cupNum - addNum < lastCupLimit) {
                Game.system.streetLevelUp();
            }
        };
        Object.defineProperty(StreetModel.prototype, "LastStreetCupLimit", {
            get: function () {
                var lastCfg = Game.config.blockLevel.GetLastStreetCfg(this.streetCurrentId);
                if (lastCfg) {
                    return lastCfg.upgrade_req;
                }
                return 0;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(StreetModel.prototype, "unlockStreetList", {
            get: function () {
                var streetId = this.streetCurrentId;
                var cfgList = Game.config.blockLevel.getConfigList();
                var retList = [];
                var index = 0;
                for (; index < cfgList.length; index++) {
                    var cfg = cfgList[index];
                    retList.push(Games.StreetData.CreateStreet(cfg.id));
                    if (cfg.id == streetId) {
                        return retList;
                    }
                }
                return retList;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(StreetModel.prototype, "StreetList", {
            get: function () {
                var streetId = this.streetCurrentId;
                var cfgList = Game.config.blockLevel.getConfigList();
                var retList = [];
                var index = 0;
                for (; index < cfgList.length; index++) {
                    var cfg = cfgList[index];
                    retList.push(Games.StreetData.CreateStreet(cfg.id));
                    if (cfg.id == streetId) {
                        break;
                    }
                }
                var lockIndex = ++index + this.NextStreetNum;
                for (index; index < lockIndex; index++) {
                    var cfg = cfgList[index];
                    if (cfg) {
                        retList.push(Games.StreetData.CreateStreet(cfg.id));
                    }
                    else {
                        break;
                    }
                }
                retList = retList.sort(function (a, b) { return b.id - a.id; });
                return retList;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(StreetModel.prototype, "cupNum", {
            get: function () {
                return Game.moduleModel.rank.cupNum;
            },
            enumerable: true,
            configurable: true
        });
        StreetModel.prototype.GetMaxCup = function (id) {
            var cfg = Game.config.blockLevel.getConfig(id);
            return cfg.upgrade_req;
        };
        StreetModel.prototype.GetStreetName = function (id) {
            var cfg = Game.config.blockLevel.getConfig(id);
            if (cfg) {
                return cfg.name;
            }
            return "";
        };
        Object.defineProperty(StreetModel.prototype, "streetCurrentId", {
            get: function () {
                return User.info.stall;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(StreetModel.prototype, "currentStreetData", {
            get: function () {
                return Games.StreetData.CreateStreet(this.streetCurrentId);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(StreetModel.prototype, "selfStreetData", {
            get: function () {
                return Games.StreetData.CreateStreet(this.streetCurrentId);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(StreetModel.prototype, "cinemaNumber", {
            get: function () {
                var nums = 0;
                for (var index = 0; index < User.info.theaterIds.length; index++) {
                    var treaterId = User.info.theaterIds[index];
                    var cfg = Game.config.cinema.getConfig(treaterId);
                    if (cfg) {
                        nums += cfg.num;
                    }
                }
                return nums;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(StreetModel.prototype, "canReward", {
            get: function () {
                var nowDate = new Date(Game.time.serverMilliseconds);
                var nH = nowDate.getHours();
                var limitH = Game.config.global.getConfig(15).value;
                if (nH >= limitH) {
                    nowDate.setHours(limitH);
                    return nowDate.valueOf() > User.info.lastGetStreetRewardTimt * 1000;
                }
                else {
                    nowDate.setHours(limitH);
                    return nowDate.valueOf() - 23 * 60 * 60 * 1000 > User.info.lastGetStreetRewardTimt * 1000;
                }
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(StreetModel.prototype, "canSign", {
            get: function () {
                var cfg = Game.config.blockLevel.getConfig(User.info.stall);
                if (cfg == null) {
                    return true;
                }
                if (cfg.cinema.length == 0) {
                    return false;
                }
                var cinemaList = cfg.cinema;
                for (var i = 0; i < User.info.theaterIds.length; i++) {
                    var theaterId = User.info.theaterIds[i];
                    for (var j = 0; j < cinemaList.length; j++) {
                        var cinemaId = cinemaList[j];
                        if (cinemaId == theaterId) {
                            return false;
                        }
                    }
                }
                return true;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(StreetModel.prototype, "hasCongratulateNums", {
            get: function () {
                var total = Game.config.global.getConfig(18).value;
                var times = User.info.sendGroupRankListTimes || 0;
                var resetH = Game.config.global.getConfig(GlobalKey.Block_Ranking_List_Reset).value;
                var nowTime = Game.time.serverSeconds;
                var lastTime = User.info.lastSendGroupRankListTime;
                if (this.IsNeedReset(lastTime, resetH)) {
                    return true;
                }
                return total > times;
            },
            enumerable: true,
            configurable: true
        });
        StreetModel.prototype.IsNeedReset = function (lastResetTime, resetH, resetM, resetS) {
            if (resetH === void 0) { resetH = 0; }
            if (resetM === void 0) { resetM = 0; }
            if (resetS === void 0) { resetS = 0; }
            var nowDate = new Date(Game.time.serverMilliseconds);
            var resetDate = new Date(Game.time.serverMilliseconds);
            var lastDate = new Date(lastResetTime);
            resetDate.setHours(resetH);
            resetDate.setMinutes(resetM);
            resetDate.setSeconds(resetS);
            // 如果当前还没到今日刷新时间
            if (nowDate.valueOf() < resetDate.valueOf()) {
                resetDate = new Date(resetDate.valueOf() - 24 * 60 * 60 * 1000);
            }
            return lastDate.valueOf() < resetDate.valueOf();
        };
        Object.defineProperty(StreetModel.prototype, "gronpRankCongratulateCD", {
            get: function () {
                var nowTime = Game.time.serverSeconds;
                var lastTime = User.info.lastSendGroupRankListTime;
                var cd = Game.config.global.getConfig(GlobalKey.Block_Ranking_List_Congratulate_Cd).value;
                return lastTime + cd - nowTime;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(StreetModel.prototype, "groupMovieRankCongratulateCD", {
            get: function () {
                var nowTime = Game.time.serverSeconds;
                var lastTime = User.info.lastSendGroupMovieRankListTime;
                var cd = Game.config.global.getConfig(19).value;
                return lastTime + cd - nowTime;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(StreetModel.prototype, "groupRankCD", {
            get: function () {
                var nowTime = Game.time.serverSeconds;
                var limitHour = Game.config.global.getConfig(15).value;
                var limitDate = new Date(Game.time.serverMilliseconds);
                var nowHour = limitDate.getHours();
                limitDate.setHours(limitHour);
                limitDate.setMinutes(0);
                limitDate.setSeconds(0);
                if (nowHour >= limitHour) {
                    return limitDate.valueOf() / 1000 + 24 * 60 * 60 - nowTime;
                }
                else {
                    return limitDate.valueOf() / 1000 - nowTime;
                }
            },
            enumerable: true,
            configurable: true
        });
        /**
         * 验证街区等级ID是否满足条件（街区开发功能验证）
         * @param blockLevelId 街区等级ID
         */
        StreetModel.prototype.validataBlockLevelId = function (blockLevelId) {
            return blockLevelId <= this.streetCurrentId;
        };
        Object.defineProperty(StreetModel.prototype, "RedNum", {
            get: function () {
                return 0;
            },
            enumerable: true,
            configurable: true
        });
        return StreetModel;
    }(Games.MModel));
    Games.StreetModel = StreetModel;
})(Games || (Games = {}));
//# sourceMappingURL=StreetModel.js.map