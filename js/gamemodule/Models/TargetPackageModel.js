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
    //======================
    // 小目标 数据模型
    //----------------------
    var TargetPackageModel = /** @class */ (function (_super) {
        __extends(TargetPackageModel, _super);
        function TargetPackageModel() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.lgLength = 0;
            _this.levelGoal = new Games.GoalData();
            _this.sGetLevelGiftSignal = new TypedSignal();
            _this.sCupSignalUpdate = new TypedSignal();
            _this.sGetCupGiftSignal = new TypedSignal();
            // 奖杯礼包时间到
            _this.sCupOverSignal = new Signal();
            return _this;
        }
        // 获得小目标列表		
        TargetPackageModel.prototype.getTargetConfig = function () {
            // 判断新手引导是否完成 null表示完成
            var mainTask = Game.moduleModel.task.getCurrentMainTask();
            if (mainTask === null && this.levelGiftData) {
                if (!this.levelGiftConfList) {
                    this.levelGiftConfList = Game.config.levelGiftPackage.getConfigList();
                    this.lgLength = this.levelGiftConfList.length;
                }
                if (this.lgLength > 0) {
                    if (this.levelGiftData.giftId === 0) {
                        return this.levelGiftConfList[0];
                    }
                    else {
                        for (var i = 0; i < this.lgLength; i++) {
                            var item = this.levelGiftConfList[i];
                            if (item.id === this.levelGiftData.giftId && item.next_id !== 0) {
                                return Game.config.levelGiftPackage.getConfig(this.levelGiftConfList[i].next_id);
                            }
                        }
                    }
                }
            }
            return null;
        };
        Object.defineProperty(TargetPackageModel.prototype, "progressLevelGoal", {
            //10/10
            get: function () {
                var Levelconf = this.getTargetConfig();
                if (Levelconf) {
                    this.levelGoal.initData(User.info.level, Levelconf.player_level);
                }
                else {
                    return null;
                }
                return this.levelGoal;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(TargetPackageModel.prototype, "progressCupGoal", {
            get: function () {
                var cupConfig = this.getCupConfig();
                if (cupConfig) {
                    this.levelGoal.initData(this.cupGiftData.process, cupConfig.target_num);
                }
                else {
                    return null;
                }
                return this.levelGoal;
            },
            enumerable: true,
            configurable: true
        });
        // 服务器奖杯礼包数据获取
        TargetPackageModel.prototype.oobCupData = function (Data) {
            this.cupGiftData = Data;
            Laya.timer.clear(this, this.CupTimeUpdate);
            if (this.cupGiftData && this.cupGiftData.status === 0 && this.cupGiftData.startTime > 0 && this.cupGiftData.giftId > 0) {
                this.curCupConf = Game.config.cupPackage.getConfig(this.cupGiftData.giftId);
                var subTime = this.curCupConf.limit_time - Game.time.getSubSecondsPre(this.cupGiftData.startTime);
                if (subTime > 0) {
                    Laya.timer.loop(1000, this, this.CupTimeUpdate);
                }
            }
            //解锁变更
            Game.event.dispatch(GameEventKey.GameEventKey_UnlockChange, Games.UnlockID.CupGift);
        };
        // 奖杯礼包倒计时计算
        TargetPackageModel.prototype.CupTimeUpdate = function () {
            var subTime = this.curCupConf.limit_time - Game.time.getSubSecondsPre(this.cupGiftData.startTime);
            var cupDelayTime = "00:00:00";
            if (subTime > 0) {
                cupDelayTime = Games.TimeHelper.TimeFormat(subTime);
            }
            else {
                this.sCupOverSignal.dispatch();
                Laya.timer.clear(this, this.CupTimeUpdate);
                Game.protosender.smallTarget.GetCupMail();
            }
            this.sCupSignalUpdate.dispatch(cupDelayTime);
        };
        TargetPackageModel.prototype.curTimeStr = function () {
            var subTime = 0;
            if (this.curCupConf && this.cupGiftData) {
                subTime = this.curCupConf.limit_time - Game.time.getSubSecondsPre(this.cupGiftData.startTime);
            }
            subTime = Math.max(0, subTime);
            return Games.TimeHelper.TimeFormat(subTime);
        };
        // 获取奖杯礼包配置
        TargetPackageModel.prototype.getCupConfig = function () {
            if (this.cupGiftData && this.cupGiftData.status === 0 && this.cupGiftData.startTime > 0 && this.cupGiftData.giftId > 0) {
                return Game.config.cupPackage.getConfig(this.cupGiftData.giftId);
            }
            return null;
        };
        Object.defineProperty(TargetPackageModel.prototype, "isCloseLevelGift", {
            //等级礼包是否关闭
            get: function () {
                return this.getTargetConfig() == null;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(TargetPackageModel.prototype, "isCloseCupGift", {
            //奖杯礼包是否关闭
            get: function () {
                var isClose = false;
                if (this.cupGiftData) {
                    isClose = this.cupGiftData.status == 1;
                }
                return isClose;
            },
            enumerable: true,
            configurable: true
        });
        return TargetPackageModel;
    }(Games.MModel));
    Games.TargetPackageModel = TargetPackageModel;
})(Games || (Games = {}));
//# sourceMappingURL=TargetPackageModel.js.map