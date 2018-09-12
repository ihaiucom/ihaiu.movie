var Games;
(function (Games) {
    // 玩家数据
    var UserData = /** @class */ (function () {
        function UserData() {
            this.sGameInfoUpdate = new Signal();
            this.account = new Games.UserAccountData();
            this.info = new Proto.SS.GameInfo();
            this.infoExt = new Proto.SS.GameInfoExt();
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
        }
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
                return num;
            },
            enumerable: true,
            configurable: true
        });
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
                if (Game.time.checkTime(Game.time.serverSeconds, 22, 0)) {
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
            Game.event.dispatch(GameEventKey.GameEventKey_TimeLimitRemind50, Games.TimeLimitType.NineToFifty);
        };
        // 晚上9点55，提醒
        UserData.prototype.timeoutToNineToFiftyFive = function () {
            this.isNineToFiftyFive = true;
            Game.event.dispatch(GameEventKey.GameEventKey_TimeLimitRemind, Games.TimeLimitType.NineToFiftyFive);
        };
        // 晚上10点，提醒
        UserData.prototype.timeoutToTen = function () {
            this.isTenTime = true;
        };
        // 晚上24点，提醒
        UserData.prototype.timeoutToZero = function () {
            clearTimeout(this.isNineToFiftyTimeOuntNum);
            clearTimeout(this.isNineToFiftyFiveTimeOuntNum);
            clearTimeout(this.isNineToTenTimeOuntNum);
            clearTimeout(this.isNineToZeroTimeOuntNum);
            this.isSetIntervalStart = false;
            this.startTimeTick();
            this.isZeroTime = true;
            Game.event.dispatch(GameEventKey.GameEventKey_TimeLimitRemind, Games.TimeLimitType.Zero);
        };
        return UserData;
    }());
    Games.UserData = UserData;
})(Games || (Games = {}));
//# sourceMappingURL=UserData.js.map