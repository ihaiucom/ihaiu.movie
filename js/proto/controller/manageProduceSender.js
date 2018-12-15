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
    //====================
    // 消息发送器
    //--------------------
    var manageProduceSender = /** @class */ (function (_super) {
        __extends(manageProduceSender, _super);
        function manageProduceSender() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.moduleName = Games.ProtoModuleNames.manageProduce;
            return _this;
        }
        /**
         * 生产
         * @param produceId
         */
        manageProduceSender.prototype.Produce = function (produceId) {
            var reqData = new Proto.API.manageProduce.ProduceRequest();
            var uuid = Game.moduleModel.produce.getProduceUuid(produceId);
            reqData.uuid = uuid;
            this.send(reqData);
        };
        /**
         * 领取生产物品
         * @param produceId
         */
        manageProduceSender.prototype.GetReward = function (produceId) {
            var reqData = new Proto.API.manageProduce.GetRewardRequest();
            var uuid = Game.moduleModel.produce.getProduceUuid(produceId);
            reqData.uuid = uuid;
            this.send(reqData);
        };
        /**
         * 生产升级
         * @param produceId
         * @param produceSkillId
         */
        manageProduceSender.prototype.Uplevel = function (produceId, produceSkillId) {
            var reqData = new Proto.API.manageProduce.UplevelRequest();
            var uuid = Game.moduleModel.produce.getProduceUuid(produceId);
            reqData.uuid = uuid;
            reqData.skillId = produceSkillId;
            this.send(reqData);
        };
        /**
         * 派遣艺人
         * @param produceId
         * @param produceSkillId
         */
        manageProduceSender.prototype.SendActor = function (produceId, actorId) {
            var reqData = new Proto.API.manageProduce.SendActorRequest();
            var uuid = Game.moduleModel.produce.getProduceUuid(produceId);
            reqData.uuid = uuid;
            reqData.actBaseId = actorId;
            this.send(reqData);
        };
        /**
         * 生产解锁
         * @param produceId
         */
        manageProduceSender.prototype.Deblocking = function (produceId) {
            var reqData = new Proto.API.manageProduce.DeblockingRequest();
            reqData.produceId = produceId;
            this.send(reqData);
        };
        /**
         * 一键领取
         */
        manageProduceSender.prototype.QuickGetReward = function (stall) {
            var reqData = new Proto.API.manageProduce.QuickGetRewardRequest();
            reqData.stall = stall;
            this.send(reqData);
        };
        /**
         * 一键生产
         */
        manageProduceSender.prototype.QuickProduce = function (stall) {
            var reqData = new Proto.API.manageProduce.QuickProduceRequest();
            reqData.stall = stall;
            this.send(reqData);
        };
        /**
         * 清除倒计时
         * @param produceId
         */
        manageProduceSender.prototype.cleanTime = function (produceId) {
            var reqData = new Proto.API.manageProduce.cleanTimeRequest();
            var uuid = Game.moduleModel.produce.getProduceUuid(produceId);
            reqData.uuid = uuid;
            this.send(reqData);
        };
        return manageProduceSender;
    }(Games.ProtoSender));
    Games.manageProduceSender = manageProduceSender;
})(Games || (Games = {}));
//# sourceMappingURL=manageProduceSender.js.map