var Games;
(function (Games) {
    var ActionType;
    (function (ActionType) {
        ActionType[ActionType["Time"] = 1] = "Time";
        ActionType[ActionType["Point"] = 2] = "Point";
    })(ActionType = Games.ActionType || (Games.ActionType = {}));
    //avatar事件
    var ATEvent = /** @class */ (function () {
        function ATEvent() {
        }
        ATEvent.parse = function (eventId) {
            var self = new ATEvent();
            var eventCfg = Game.config.event.getConfig(eventId);
            self.evtId = eventCfg.id;
            self.actionInfo = new ATActionInfo();
            self.actionInfo.parse(eventCfg);
            return self;
        };
        ATEvent.prototype.setTalkParams = function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            this.actionInfo.setTalkParams(args);
        };
        return ATEvent;
    }());
    Games.ATEvent = ATEvent;
    //avatar动作信息
    var ATActionInfo = /** @class */ (function () {
        function ATActionInfo() {
            this.actionType = ActionType.Time; //动作类型
            this.talkParams = []; //对话参数 {0}用于需要传参对话
        }
        ATActionInfo.prototype.parse = function (config) {
            this.config = config;
            this.actionType = config.type;
            this.actions = new Array();
            var act = this.getAct();
            this.actionId = act.v1;
            if (this.actionType == ActionType.Time) {
                this.actionTime = act.v2;
            }
            else if (this.actionType == ActionType.Point) {
                this.actionPointX = act.v2;
            }
            var talk = this.getTalk();
            this.talkActionId = talk.v1;
            this.talkActionTime = talk.v2;
        };
        ATActionInfo.prototype.getAct = function () {
            var maxRandom = 0;
            this.config.action.forEach(function (value, index, array) {
                maxRandom += value.v3;
            });
            var randVal = Random.rangeBoth(0, maxRandom);
            var dr = 0;
            for (var i = 0; i < this.config.action.length; i++) {
                dr += this.config.action[i].v3;
                if (dr >= randVal) {
                    var act = this.config.action[i];
                    this.actionId = act.v1;
                    this.actionTime = act.v2;
                    return act;
                }
            }
            return null;
        };
        ATActionInfo.prototype.getTalk = function () {
            var maxRandom = 0;
            this.config.speak.forEach(function (value, index, array) {
                maxRandom += value.v3;
            });
            var randVal = Random.rangeBoth(0, maxRandom);
            var dr = 0;
            for (var i = 0; i < this.config.speak.length; i++) {
                dr += this.config.speak[i].v3;
                if (dr >= randVal) {
                    var talk = this.config.speak[i];
                    this.talkActionId = talk.v1;
                    this.talkActionTime = talk.v2;
                    return talk;
                }
            }
            return null;
        };
        ATActionInfo.prototype.setTalkParams = function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            this.talkParams = args;
        };
        return ATActionInfo;
    }());
    Games.ATActionInfo = ATActionInfo;
})(Games || (Games = {}));
//# sourceMappingURL=ATEventData.js.map