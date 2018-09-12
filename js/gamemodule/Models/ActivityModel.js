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
    /**
     * 活动 数据模型
     */
    var ActivityModel = /** @class */ (function (_super) {
        __extends(ActivityModel, _super);
        function ActivityModel() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            // 30天签到===========================================================================
            // 上次签到信息，打开界面使用
            _this.preSingMsg = null;
            // 当前第几个月
            _this.curCycle = 1;
            // 已经签到的列表
            _this.haveSignList = new Array();
            // 当前签到达到第几天
            _this.curSignDay = 0;
            // 当天是否签到
            _this.curIsSign = false;
            // 签到信息
            _this.signDic = new Dictionary();
            // 签到掉落
            _this.signDrop = null;
            // 签到回调
            _this.sUpdateSign = new Signal();
            // 上次更新的信息
            _this.preSevenMsg = null;
            _this.isSetIntervalStart = false;
            // 待领取的数量
            _this.waitForGetNum = 0;
            // 领取信息
            _this.sevenDic = new Dictionary();
            _this.sUpdateSeven = new Signal();
            return _this;
        }
        ActivityModel.prototype.signInit = function (msg) {
            if (msg !== null) {
                this.preSingMsg = msg;
            }
            if (this.preSingMsg === null) {
                return;
            }
            this.curSignDay = this.preSingMsg.count;
            this.curCycle = 1;
            while (this.curSignDay > 30) {
                this.curSignDay -= 30;
                this.curCycle++;
            }
            // 服务器时间
            var sevTime = Game.time.timestampToTime(this.preSingMsg.updateTime);
            // 本地时间
            var locTime = Game.time.localTimestamToTime();
            // 当天已签到
            this.curIsSign = true;
            // 判断年月日是否同一天
            for (var i = 0; i < 3; i++) {
                if (sevTime[i] < locTime[i]) {
                    this.curIsSign = false;
                    break;
                }
            }
            if (!this.curIsSign) {
                this.curSignDay++;
            }
            for (var i = 1; i < 31; i++) {
                var state = 0;
                if (i === this.curSignDay) {
                    if (this.curIsSign) {
                        state = 2;
                    }
                    else {
                        state = 1;
                    }
                }
                else if (i < this.curSignDay) {
                    state = 2;
                }
                this.signDic.add(i, state);
            }
        };
        // 某一天签到状态
        ActivityModel.prototype.curSignStatus = function (index) {
            if (this.signDic.hasKey(index)) {
                return this.signDic.getValue(index);
            }
            return 0;
        };
        // 发送签到信息
        ActivityModel.prototype.sendSign = function () {
            Game.protosender.dailySign.sign();
        };
        // 签到服务器返回
        ActivityModel.prototype.handlerSign = function (msg) {
            this.signDrop = msg.dropout;
            this.sUpdateSign.dispatch();
        };
        Object.defineProperty(ActivityModel.prototype, "sevenConfig", {
            // 配置表信息
            get: function () {
                if (!this._sevenConfig || this._sevenConfig === null) {
                    this._sevenConfig = Game.config.countActivities.sevenConfigList();
                }
                return this._sevenConfig;
            },
            enumerable: true,
            configurable: true
        });
        ActivityModel.prototype.sevenInit = function (msg, uuid) {
            var _this = this;
            if (uuid === void 0) { uuid = null; }
            if (!this.isSetIntervalStart) {
                this.isSetIntervalStart = true;
                setInterval(function () {
                    _this.secondUpdateActivity();
                }, 1000);
            }
            this.waitForGetNum = 0;
            if (msg !== null) {
                this.uuid = uuid;
                this.preSevenMsg = msg;
            }
            if (this.preSevenMsg === null || this.sevenIsOver) {
                this.preSevenMsg = null;
                return false;
            }
            for (var i = 1; i < this.sevenConfig.length + 1; i++) {
                if (this.preSevenMsg.progress >= i) {
                    var staus = (this.preSevenMsg.staus >> (i - 1)) & 1;
                    this.sevenDic.add(i, staus + 1);
                    if (staus === 0) {
                        this.waitForGetNum++;
                    }
                }
                else {
                    this.sevenDic.add(i, 0);
                }
            }
            return true;
        };
        // 某一天签到状态
        ActivityModel.prototype.curSevenStatus = function (index) {
            if (this.sevenDic.hasKey(index)) {
                return this.sevenDic.getValue(index);
            }
            return 0;
        };
        Object.defineProperty(ActivityModel.prototype, "sevenIsOver", {
            // 七日活动是否结束 
            // 检查是否存在七日活动
            get: function () {
                // 注册时间
                var regTime = Game.time.timestampToTime(Game.time.registerSeconds);
                var regt = Date.UTC(regTime[0], regTime[1], regTime[2]);
                // 本地时间
                var locTime = Game.time.localTimestamToTime();
                var loct = Date.UTC(locTime[0], locTime[1], locTime[2]);
                var activityConfig = Game.config.activities.getConfig(1);
                return activityConfig.duration * 24 * 3600 < (loct - regt) * 0.001;
            },
            enumerable: true,
            configurable: true
        });
        // 发送七日奖励请求
        ActivityModel.prototype.sendSevenGet = function (gear) {
            Game.protosender.sevenAddUp.GetReward(this.uuid, gear + 1);
        };
        // 返回
        ActivityModel.prototype.handlerSevenGet = function (msg) {
            this.curGear = msg.gear - 1;
            this.sUpdateSeven.dispatch();
        };
        // 七日礼包跨天刷新请求
        ActivityModel.prototype.secondUpdateActivity = function () {
            if (Game.time.checkNewDayToRefrush(Game.time.serverSeconds, 0)) {
                Game.protosender.sevenAddUp.Touch();
            }
        };
        return ActivityModel;
    }(Games.MModel));
    Games.ActivityModel = ActivityModel;
})(Games || (Games = {}));
//# sourceMappingURL=ActivityModel.js.map