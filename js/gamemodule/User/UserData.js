var Games;
(function (Games) {
    // 玩家数据
    var UserData = /** @class */ (function () {
        function UserData() {
            this.sGameInfoUpdate = new Signal();
            // 是否登录
            this.isLogined = false;
            this.account = new Games.UserAccountData();
            this.protoUserData = new Proto.SS.UsrData();
            this.info = new Proto.SS.GameInfo();
            this.infoExt = new Proto.SS.GameInfoExt();
            //金币兑换次数
            this._goldExchangeCount = 0;
            // 计时器
            this.isNineToFiftyTimeOuntNum = 0;
            this.isNineToFiftyFiveTimeOuntNum = 0;
            this.isNineToTenTimeOuntNum = 0;
            this.isNineToZeroTimeOuntNum = 0;
            // 是否开始计时
            this.isSetIntervalStart = false;
            // 是否0点
            this.isZeroTime = false;
            // 是否9点50
            this.isNineToFifty = false;
            // 是否9点55
            this.isNineToFiftyFive = false;
            // 是否10点
            this.isTenTime = false;
            this.exchangeTimeOutId = 0;
        }
        Object.defineProperty(UserData.prototype, "goldExchangeCount", {
            get: function () {
                return this._goldExchangeCount;
            },
            set: function (value) {
                this._goldExchangeCount = value;
                this.startResetGoldExchangeTime();
            },
            enumerable: true,
            configurable: true
        });
        //获取默认头像
        UserData.prototype.getDefaultPortrait = function () {
            var _this = this;
            var portraitCfgList = Game.config.headPortrait.getConfigList();
            var portraitSexList = portraitCfgList.filter(function (value, index, array) {
                return value.sex == _this.info.sex;
            });
            for (var _i = 0, portraitSexList_1 = portraitSexList; _i < portraitSexList_1.length; _i++) {
                var portrait = portraitSexList_1[_i];
                if (portrait.unlock.itemId == 0 && portrait.unlock.itemNum == 0) {
                    return portrait.id;
                }
            }
            return 0;
        };
        Object.defineProperty(UserData.prototype, "headIconId", {
            // 获取头像ID		
            get: function () {
                var portraitId = this.info.portrait;
                if (portraitId == 0) {
                    portraitId = this.getDefaultPortrait();
                }
                return portraitId;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(UserData.prototype, "headIconUrl", {
            // 获取头像Url		
            get: function () {
                var portraitCfg = Game.config.headPortrait.getConfig(this.headIconId);
                if (portraitCfg) {
                    return portraitCfg.iconUrl;
                }
                return "";
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(UserData.prototype, "upgradeFans", {
            // 获取升级需要经验值
            get: function () {
                var config = Game.config.playerLevel.getConfig(User.info.level);
                if (config) {
                    return config.fans;
                }
                return 0;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(UserData.prototype, "streatRank", {
            // 获取街区排行
            get: function () {
                return 0;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(UserData.prototype, "trainNumCount", {
            /**
             * 获取培训艺人次数
             */
            get: function () {
                var num = 0;
                num += Game.config.playerLevel.getConfig(User.info.level).train_count;
                num += Game.moduleModel.building.getBuildEffectPar(Games.RoomType.Actor, Games.BuildingEffectType.effect_add_train_actor);
                //
                var actors = Game.moduleModel.actor.getActors();
                for (var index = 0; index < actors.length; index++) {
                    var element = actors[index];
                    num += element.addTrainNum;
                }
                return num;
            },
            enumerable: true,
            configurable: true
        });
        /**
         * 建号第X日
         */
        UserData.prototype.createDayNumber = function () {
            // 注册时间
            var regTime = Game.time.timestampToTime(Game.time.registerSeconds);
            // 当前系统时间
            var sevTime = Game.time.timestampToTime(Game.time.serverSeconds);
            if (regTime[0] === sevTime[0]) {
                // 同一年
                if (regTime[1] === sevTime[1]) {
                    // 同一月
                    return sevTime[2] - regTime[2];
                }
                else {
                    // 不同月
                    if (sevTime[1] - regTime[1] > 1) {
                        // 超过30天
                        return 30;
                    }
                    else {
                        return this.cuyMonuthDay(regTime[0], regTime[1]) - regTime[2] + sevTime[2];
                    }
                }
            }
            else {
                if (sevTime[0] - regTime[0] > 1) {
                    // 超过1年
                    return 30;
                }
                else {
                    if (regTime[1] === 12 && sevTime[1] === 1) {
                        return 31 - regTime[2] + sevTime[2];
                    }
                    else {
                        // 超过1月
                        return 30;
                    }
                }
            }
        };
        UserData.prototype.cuyMonuthDay = function (year, mouth) {
            var days = 30;
            if (mouth == 2) { //当月份为二月时，根据闰年还是非闰年判断天数
                days = year % 4 == 0 ? 29 : 28;
            }
            else if (mouth == 1 || mouth == 3 || mouth == 5 || mouth == 7 || mouth == 8 || mouth == 10 || mouth == 12) {
                //月份为：1,3,5,7,8,10,12 时，为大月.则天数为31；
                days = 31;
            }
            else {
                //其他月份，天数为：30.
                days = 30;
            }
            return days;
        };
        UserData.prototype.newDay = function () {
            var isNewDay = false;
            if (Games.GameLocalStorage.Instance.hasItem("__PopUpMain_HidePopTodayServerTime", false)) {
                // 依据最后存储的改变时间，判断是否跨天
                var nextTime = Games.GameLocalStorage.Instance.getInt("__PopUpMain_HidePopTodayServerTime", false);
                isNewDay = Game.time.checkNewDayToRefrush(nextTime / 1000, 24);
            }
            if (isNewDay) {
                Games.GameLocalStorage.Instance.setBoolean("__PopUpMain_HavePopToday", false, false);
            }
            return isNewDay;
        };
        // 是否存在弹窗
        UserData.prototype.isHavePopUp = function () {
            var result = this.popUpInf().length > 0;
            if (result && !this.newDay()) {
                if (Games.GameLocalStorage.Instance.hasItem("__PopUpMain_HavePopToday", false)) {
                    result = !Games.GameLocalStorage.Instance.getBoolean("__PopUpMain_HavePopToday", false);
                }
            }
            return result;
        };
        // 弹窗信息
        UserData.prototype.popUpInf = function () {
            var curPopUpconfigList = [];
            var mainTask = Game.moduleModel.task.getCurrentMainTask();
            if (mainTask === null) {
                var isNewDay = false;
                if (Games.GameLocalStorage.Instance.hasItem("__PopUpMain_HidePopTodayServerTime", false)) {
                    // 依据最后存储的改变时间，判断是否跨天
                    var nextTime = Games.GameLocalStorage.Instance.getInt("__PopUpMain_HidePopTodayServerTime", false);
                    isNewDay = Game.time.checkNewDayToRefrush(nextTime / 1000, 24);
                }
                var popUpConfigList = Game.config.popUp.getConfigList();
                var length_1 = popUpConfigList.length;
                // 当前系统时间
                var curSerTime = Game.time.timestampToTime(Game.time.serverSeconds);
                if (length_1 > 0) {
                    // 当前建号第几天
                    var curDayNum = this.createDayNumber() + 1;
                    for (var i = 0; i < length_1; i++) {
                        var popupItem = popUpConfigList[i];
                        if (popupItem.start_type === 1) {
                            if (popupItem.start_par1 === curDayNum) {
                                var isPush = true;
                                if (!isNewDay && Games.GameLocalStorage.Instance.hasItem("__PopUpMain_HidePopToday" + popupItem.id, false)) {
                                    isPush = !Games.GameLocalStorage.Instance.getBoolean("__PopUpMain_HidePopToday" + popupItem.id, false);
                                }
                                if (isPush) {
                                    curPopUpconfigList.push(popupItem);
                                }
                            }
                        }
                        else if (popupItem.start_type === 2) {
                            if (curSerTime[0] === popupItem.start_par2.y && curSerTime[1] === popupItem.start_par2.m && curSerTime[2] === popupItem.start_par2.d) {
                                var isPush = true;
                                if (!isNewDay && Games.GameLocalStorage.Instance.hasItem("__PopUpMain_HidePopToday" + popupItem.id, false)) {
                                    isPush = !Games.GameLocalStorage.Instance.getBoolean("__PopUpMain_HidePopToday" + popupItem.id, false);
                                }
                                if (isPush) {
                                    curPopUpconfigList.push(popupItem);
                                }
                            }
                        }
                    }
                }
            }
            return curPopUpconfigList;
        };
        /**
         * 更新时间限制，比如22点，21:55
         */
        UserData.prototype.startTimeTick = function () {
            var _this = this;
            if (!this.isSetIntervalStart) {
                this.isNineToFifty = false;
                this.isNineToFiftyFive = false;
                this.isTenTime = false;
                this.isSetIntervalStart = true;
                // 晚上9点50，提醒
                if (Game.time.checkTime(Game.time.serverMilliseconds, 21, 50)) {
                    this.isNineToFifty = true;
                }
                else {
                    var server = Game.time.timeLeft(Game.time.serverMilliseconds, 21, 50);
                    this.isNineToFiftyTimeOuntNum = setTimeout(function () {
                        _this.timeoutToNineToFifty();
                    }, server);
                }
                // 晚上9点55，提醒
                if (Game.time.checkTime(Game.time.serverMilliseconds, 21, 55)) {
                    this.isNineToFiftyFive = true;
                }
                else {
                    var server = Game.time.timeLeft(Game.time.serverMilliseconds, 21, 55);
                    this.isNineToFiftyFiveTimeOuntNum = setTimeout(function () {
                        _this.timeoutToNineToFiftyFive();
                    }, server);
                }
                // 晚上10点，提醒
                if (Game.time.checkTime(Game.time.serverMilliseconds, 22, 0)) {
                    this.isTenTime = true;
                }
                else {
                    var server = Game.time.timeLeft(Game.time.serverMilliseconds, 22, 0);
                    this.isNineToTenTimeOuntNum = setTimeout(function () {
                        _this.timeoutToTen();
                    }, server);
                }
                // 晚上24点，提醒
                var client = Game.time.timeLeft(Game.time.serverMilliseconds, 24, 0);
                this.isNineToZeroTimeOuntNum = setTimeout(function () {
                    _this.timeoutToZero();
                }, client);
            }
        };
        // 晚上9点50，提醒
        UserData.prototype.timeoutToNineToFifty = function () {
            this.isNineToFifty = true;
            Game.event.dispatch(GameEventKey.GameEventKey_TimeLimitRemind, Games.TimeLimitType.NineToFifty);
        };
        // 晚上9点55，提醒
        UserData.prototype.timeoutToNineToFiftyFive = function () {
            this.isNineToFiftyFive = true;
            Game.event.dispatch(GameEventKey.GameEventKey_TimeLimitRemind, Games.TimeLimitType.NineToFiftyFive);
        };
        // 晚上10点，提醒
        UserData.prototype.timeoutToTen = function () {
            this.isTenTime = true;
            Game.moduleModel.warData.delFimingMove();
            Game.moduleModel.warData.newlicenceDataRefrush();
            if (Game.config.global.getConfig(GlobalKey.Shoot_Story_Refresh_ResetTime).value === 22) {
                Game.moduleModel.warData.setRefrushData(null, true);
            }
            Game.event.dispatch(GameEventKey.GameEventKey_TimeLimitRemind, Games.TimeLimitType.NineToFiftyFive);
        };
        // 晚上24点，提醒
        UserData.prototype.timeoutToZero = function () {
            var _this = this;
            clearTimeout(this.isNineToFiftyTimeOuntNum);
            clearTimeout(this.isNineToFiftyFiveTimeOuntNum);
            clearTimeout(this.isNineToTenTimeOuntNum);
            clearTimeout(this.isNineToZeroTimeOuntNum);
            this.isSetIntervalStart = false;
            this.isZeroTime = true;
            Games.Static.Instance.initNewDay();
            // 跨天刷新七日礼包信息
            Game.protosender.sevenAddUp.Touch();
            if (Game.config.global.getConfig(GlobalKey.Shoot_Story_Refresh_ResetTime).value === 0) {
                Game.moduleModel.warData.setRefrushData(null, true);
            }
            Game.event.dispatch(GameEventKey.GameEventKey_TimeLimitRemind, Games.TimeLimitType.Zero);
            setTimeout(function () {
                // 重新统计
                _this.startTimeTick();
            }, 1000);
        };
        Object.defineProperty(UserData.prototype, "goldExchangeCost", {
            /**
             * 金币兑换的消耗
             */
            get: function () {
                if (this._goldExchangeCost == null) {
                    this._goldExchangeCost = new DTItemNum();
                }
                this._goldExchangeCost.itemId = EItemId.gold;
                var level = User.info.level;
                this._goldExchangeCost.itemNum = Math.floor((level / 10 + 1) * 5 * level + level * 20);
                return this._goldExchangeCost;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(UserData.prototype, "goldExchangeReward", {
            /**
             * 金币兑换的消耗
             */
            get: function () {
                if (this._goldExchangeReward == null) {
                    this._goldExchangeReward = new DTItemNum();
                }
                this._goldExchangeReward.itemId = EItemId.dollar;
                var level = User.info.level;
                this._goldExchangeReward.itemNum = Math.floor((level / 4 + 1) * level * 100 + 400);
                return this._goldExchangeReward;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(UserData.prototype, "goldExchangeTotal", {
            /**
             * 金币兑换次数
             */
            get: function () {
                var num = GlobalConfig.getValue(GlobalKey.Conversion_Initial_Times);
                num += Game.moduleModel.building.getBuildEffectPar(Games.RoomType.Finance, Games.BuildingEffectType.effect_add_goldexchange_num);
                return num;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(UserData.prototype, "goldExchangeRemain", {
            /**
             * 金币兑换次数剩余
             */
            get: function () {
                var total = this.goldExchangeTotal;
                var cost = this.goldExchangeCount;
                return Math.max(0, total - cost);
            },
            enumerable: true,
            configurable: true
        });
        //
        //开启倒计时重置
        UserData.prototype.startResetGoldExchangeTime = function () {
            var _this = this;
            clearTimeout(this.exchangeTimeOutId);
            var resetHour = GlobalConfig.getValue(GlobalKey.Conversion_Refresh_Time);
            if (resetHour == 0) {
                resetHour = 24;
            }
            var lastTime = 0; //
            //下一时间
            var nextSecond = Games.TimeHelper.TimeReformat(resetHour).getTime() / 1000;
            var currSecond = Game.time.serverSeconds;
            if (currSecond < nextSecond) {
                var time = nextSecond - currSecond;
                this.exchangeTimeOutId = setTimeout(function () {
                    _this.goldExchangeCount = 0;
                }, time * 1000);
            }
        };
        return UserData;
    }());
    Games.UserData = UserData;
})(Games || (Games = {}));
//# sourceMappingURL=UserData.js.map