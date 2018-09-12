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
    var VisitModel = /** @class */ (function (_super) {
        __extends(VisitModel, _super);
        function VisitModel() {
            var _this = _super.call(this) || this;
            _this.isAutoVisit = false;
            _this.visitTalkGroupId = 1; //探班对话组Id
            return _this;
        }
        VisitModel.prototype.getVisitData = function () {
            return this.visitData;
        };
        VisitModel.prototype.getVisitName = function () {
            if (this.visitData.actorId > 0) {
                return this.visitData.actorData.name;
            }
            return "";
        };
        /**
         * 根据服务器传的信息解析
         * @param msg 数据
         */
        VisitModel.prototype.addVisitData = function (msg) {
            if (this.visitData == null) {
                this.visitData = new Games.VisitData();
            }
            this.visitData.uuid = msg.uuid;
            this.visitData.startTime = msg.startTime;
            this.visitData.lastTime = msg.lastTime;
            this.visitData.lineLimit = msg.lineLimit;
            this.visitData.intervalTime = msg.intervalTime;
            this.visitData.id = msg.visitId;
            this.visitData.actorId = msg.actId;
            this.visitData.starTimeToVisit();
            //
            this.visitData.startToMaxTime();
            return this.visitData;
        };
        VisitModel.prototype.saveVisitId = function () {
            this.rewardVisitId = this.visitData.id;
        };
        //------------------------------------
        // 探班对话事件
        //------------------------------------
        //获取探班对话组Id 
        VisitModel.prototype.setRDTalkGroupId = function () {
            this.playActVisitList = Game.config.playAct.getConfigList();
            this.playActVisitList = this.playActVisitList.filter(function (value, index, array) {
                return value.type == Games.PerformType.ReceptionFansTalk;
            });
            this.visitTalkGroupId = Random.range(0, this.playActVisitList.length);
            return this.visitTalkGroupId;
        };
        //粉丝开场
        VisitModel.prototype.getFansStartTalk = function () {
            var playActList = Game.config.playAct.getConfigList();
            playActList = playActList.filter(function (value, index, array) {
                return value.type == Games.PerformType.ReceptionFansTalk;
            });
            return playActList[this.visitTalkGroupId].eventList;
        };
        //艺人开场
        VisitModel.prototype.getActorStartTalk = function () {
            var playActList = Game.config.playAct.getConfigList();
            playActList = playActList.filter(function (value, index, array) {
                return value.type == Games.PerformType.ReceptionActorTalk;
            });
            return playActList[this.visitTalkGroupId].eventList;
        };
        //获取探班对话列表
        VisitModel.prototype.getReceptionDialog = function () {
            var playActList = Game.config.playAct.getConfigList();
            playActList = playActList.filter(function (value, index, array) {
                return value.type == Games.PerformType.Reception;
            });
            return playActList[this.visitTalkGroupId].eventList;
        };
        //点错探班艺人对话
        VisitModel.prototype.getWrongActorClickDialog = function () {
            var speeks = [];
            speeks.push(Game.config.msg.getTxt(MsgKey.visit_wrong1));
            speeks.push(Game.config.msg.getTxt(MsgKey.visit_wrong2));
            speeks.push(Game.config.msg.getTxt(MsgKey.visit_wrong3));
            return speeks[Random.range(0, speeks.length)];
        };
        Object.defineProperty(VisitModel.prototype, "isRed", {
            get: function () {
                var b = false;
                var isBuild = Game.moduleModel.building.hasBuildByType(Games.RoomType.Reception);
                if (isBuild) {
                    if (this.visitData && Game.moduleModel.actor.hasCanVisitActor) {
                        b = this.visitData.isMax;
                    }
                }
                return b;
            },
            enumerable: true,
            configurable: true
        });
        return VisitModel;
    }(Games.MModel));
    Games.VisitModel = VisitModel;
})(Games || (Games = {}));
//# sourceMappingURL=VisitModel.js.map