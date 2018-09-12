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
    var SecretaryModel = /** @class */ (function (_super) {
        __extends(SecretaryModel, _super);
        function SecretaryModel() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.secretaryKeyValueDict = new Dictionary();
            _this._isAutoRead = false; //自动阅读
            _this._isAutoVisit = false; //自动接待粉丝
            _this._isAutoPublicize = false; //自动宣传
            _this._isAutoActorTrain = false; //自动培养完成
            _this.moneyRewardGot = false;
            _this._resetTimeHandler = 0;
            // 开始刷新
            _this.isSetIntervalStart = false;
            // 申请许可证是否已刷新
            _this.isNewDayForLicense = false;
            return _this;
        }
        SecretaryModel.prototype.install = function () {
        };
        /**
         * 通过协议格式化数据
         * @param msg
         */
        SecretaryModel.prototype.addSecretaryByProto = function (msg) {
            var _this = this;
            this._secretaryData = msg;
            if (!this.isSetIntervalStart) {
                this.isSetIntervalStart = true;
                setInterval(function () {
                    _this.secondUpdateActivity();
                }, 1000);
            }
            this.secretaryKeyValueDict.clear();
            for (var index = 0; index < this._secretaryData.timeList.length; index++) {
                var element = this._secretaryData.timeList[index];
                this.secretaryKeyValueDict.add(element.key, element);
                switch (element.key) {
                    case ESecretary.cityTimes:
                        this._isAutoPublicize = element.isOpen;
                        break;
                    case ESecretary.visitTimes:
                        this._isAutoVisit = element.isOpen;
                        break;
                    case ESecretary.workTimes:
                        this._isAutoRead = element.isOpen;
                        break;
                    case ESecretary.trainTime:
                        this._isAutoActorTrain = element.isOpen;
                        break;
                    default:
                        break;
                }
            }
            if (this.preMoneyReward && this.isMoneyGetReward && this.moneyRewardGot == false) {
                this.moneyRewardGot = true;
                var giftConfig = Game.config.secretaryGift.getConfig(2001);
                Game.system.getItemText(giftConfig.items);
            }
            this.startResetTime();
        };
        // 隔天刷新
        SecretaryModel.prototype.secondUpdateActivity = function () {
            if (Game.time.checkNewDayToRefrush(this._secretaryData.applyLastTime, 0)) {
                // 隔天
                this.isNewDayForLicense = true;
            }
        };
        //开始重置时间
        SecretaryModel.prototype.startResetTime = function () {
            var _this = this;
            //重置
            if (this._resetTimeHandler > 0) {
                clearTimeout(this._resetTimeHandler);
                this._resetTimeHandler = 0;
            }
            //临时终身秘书，需要倒计时清除
            if (this._secretaryData.secretaryType == ESecretaryType.temporaryHad) {
                var nowTime = Game.time.serverSeconds;
                var endTime = Game.config.secretary.getConfig(10).par;
                if (endTime > nowTime) {
                    var duration = endTime - nowTime;
                    this._resetTimeHandler = setTimeout(function () {
                        //重置
                        _this._secretaryData.secretaryType = ESecretaryType.noHave;
                    }, duration * 1000);
                }
            }
        };
        Object.defineProperty(SecretaryModel.prototype, "secretaryData", {
            get: function () {
                return this._secretaryData;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(SecretaryModel.prototype, "isInActivityTime", {
            //是否处于活动期间
            get: function () {
                var startTime = Game.config.secretary.getConfig(9).par;
                var endTime = Game.config.secretary.getConfig(10).par;
                var nowTime = Game.time.serverSeconds;
                var isIn = false;
                if (nowTime >= startTime && nowTime < endTime) {
                    isIn = true;
                }
                return true;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(SecretaryModel.prototype, "isForever", {
            //是否是永久的小秘书
            get: function () {
                return this.secretaryData.secretaryType == ESecretaryType.had;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(SecretaryModel.prototype, "noseIntoNum", {
            //星探次数
            get: function () {
                var config = Game.config.secretary.getConfig(5);
                var num = 0;
                if (config) {
                    num = config.par;
                }
                return num;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(SecretaryModel.prototype, "resetCdRate", {
            //星探次数
            get: function () {
                var config = Game.config.secretary.getConfig(4);
                var num = 0;
                if (config) {
                    num = config.par;
                }
                return num;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(SecretaryModel.prototype, "isTempSecretary", {
            //是否是临时的小秘书
            get: function () {
                if (this.isForever == false) {
                    return this.secretaryData.secretaryType == ESecretaryType.temporaryHad;
                }
                return false;
            },
            enumerable: true,
            configurable: true
        });
        //获取剩余次数
        SecretaryModel.prototype.getValueByKey = function (key) {
            if (this.secretaryKeyValueDict.hasKey(key)) {
                return this.secretaryKeyValueDict.getValue(key).value;
            }
            return 0;
        };
        Object.defineProperty(SecretaryModel.prototype, "autoBusinessReadNum", {
            //获取自动阅读次数
            get: function () {
                var num = 0;
                if (this.isForever) {
                    num = 999;
                }
                else if (this.isTempSecretary) {
                    num = Game.config.secretary.getConfig(7).par - this.getValueByKey(ESecretary.workTimes); //Game.config.secretary.getConfig(7).par
                }
                num = Math.max(0, num);
                return num;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(SecretaryModel.prototype, "autoVisitNum", {
            //获取接待次数
            get: function () {
                var num = 0;
                if (this.isForever) {
                    num = 999;
                }
                else if (this.isTempSecretary) {
                    num = Game.config.secretary.getConfig(8).par - this.getValueByKey(ESecretary.visitTimes); //
                }
                num = Math.max(0, num);
                return num;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(SecretaryModel.prototype, "autoPublicizeNum", {
            //获取宣传次数
            get: function () {
                var num = 0;
                if (this.isForever) {
                    num = 999;
                }
                else if (this.isTempSecretary) {
                    num = Game.config.secretary.getConfig(6).par - this.getValueByKey(ESecretary.cityTimes); //Game.config.secretary.getConfig(6).par
                }
                num = Math.max(0, num);
                return num;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(SecretaryModel.prototype, "isMoneyGetReward", {
            //每日礼包有没有购买过
            get: function () {
                if (Game.time.checkNewDayToRefrush(this.secretaryData.lastTime, 0)) {
                    return false;
                }
                else {
                    return this.getValueByKey(ESecretary.moneyGiftId) > 0;
                }
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(SecretaryModel.prototype, "isFreeGetReward", {
            //每日=福利有没有领取过
            get: function () {
                if (Game.time.checkNewDayToRefrush(this.secretaryData.lastTime, 0)) {
                    return false;
                }
                else {
                    return this.getValueByKey(ESecretary.freeGiftId) > 0;
                }
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(SecretaryModel.prototype, "hasSetAuto", {
            //拥有设置权限		
            get: function () {
                var has = false;
                if (this.isForever) {
                    has = true;
                }
                else if (this.isTempSecretary) {
                    has = true;
                }
                return has;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(SecretaryModel.prototype, "isAutoRead", {
            /**
             * 自动阅读
             */
            get: function () {
                if (this.isForever == false && this.autoBusinessReadNum <= 0) {
                    this.isAutoRead = false;
                }
                return this._isAutoRead;
            },
            /**
             * 自动阅读
             */
            set: function (value) {
                if (this._isAutoRead != value && this.hasSetAuto) {
                    Game.protosender.secretary.OpenSecretary(ESecretary.workTimes, value ? 1 : 0);
                }
                this._isAutoRead = value;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(SecretaryModel.prototype, "isAutoActorTrain", {
            get: function () {
                return this._isAutoActorTrain;
            },
            /**
             * 自动培养
             */
            set: function (value) {
                if (this._isAutoActorTrain != value && this.isForever) {
                    Game.protosender.secretary.OpenSecretary(ESecretary.trainTime, value ? 1 : 0);
                }
                this._isAutoActorTrain = value;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(SecretaryModel.prototype, "isAutoVisit", {
            get: function () {
                if (this.isForever == false && this.autoVisitNum <= 0) {
                    return false;
                }
                return this._isAutoVisit;
            },
            /**
             * 自动接待拜访粉丝
             */
            set: function (value) {
                if (this._isAutoVisit != value && this.hasSetAuto) {
                    Game.protosender.secretary.OpenSecretary(ESecretary.visitTimes, value ? 1 : 0);
                }
                this._isAutoVisit = value;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(SecretaryModel.prototype, "isAutoPublicize", {
            get: function () {
                if (this.isForever == false && this.autoPublicizeNum <= 0) {
                    return false;
                }
                return this._isAutoPublicize;
            },
            /**
             * 自动宣传
             */
            set: function (value) {
                if (this._isAutoPublicize != value && this.hasSetAuto) {
                    Game.protosender.secretary.OpenSecretary(ESecretary.cityTimes, value ? 1 : 0);
                }
                this._isAutoPublicize = value;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(SecretaryModel.prototype, "realAutoRead", {
            get: function () {
                return this._isAutoRead;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(SecretaryModel.prototype, "realAutoPublicize", {
            get: function () {
                return this._isAutoPublicize;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(SecretaryModel.prototype, "realAutoVisit", {
            get: function () {
                return this._isAutoVisit;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(SecretaryModel.prototype, "isCanGetWelf", {
            get: function () {
                var can = false;
                if (this.isForever && this.isFreeGetReward == false) {
                    can = true;
                }
                return can;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(SecretaryModel.prototype, "skillExpRate", {
            //星探次数
            get: function () {
                var num = 0;
                if (this.isForever) {
                    var config = Game.config.secretary.getConfig(2);
                    if (config) {
                        num = config.par;
                    }
                }
                return num;
            },
            enumerable: true,
            configurable: true
        });
        return SecretaryModel;
    }(Games.MModel));
    Games.SecretaryModel = SecretaryModel;
})(Games || (Games = {}));
//# sourceMappingURL=SecretaryModel.js.map