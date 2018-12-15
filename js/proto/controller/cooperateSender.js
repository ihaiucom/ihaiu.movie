/////////////////////////////////////
// ihaiu.ExportProto生成
// http://blog.ihaiu.com
/////////////////////////////////////
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
     *  合作系统

     */
    var cooperateSender = /** @class */ (function (_super) {
        __extends(cooperateSender, _super);
        function cooperateSender() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.moduleName = Games.ProtoModuleNames.cooperate;
            return _this;
        }
        /**
         *  寻求合作
         * @param entityId   合作者ID 为0时，为公开邀请
         */
        cooperateSender.prototype.Apply = function (entityId) {
            var req = new Proto.API.cooperate.ApplyRequest();
            req.entityId = entityId;
            this.send(req);
        };
        /**
         *  解除合作
         */
        cooperateSender.prototype.Relieve = function () {
            var req = new Proto.API.cooperate.RelieveRequest();
            this.send(req);
        };
        /**
         *  审批
         * @param type   审批类型 0同意 1拒绝
         * @param entityId   审批的哪个玩家
         */
        cooperateSender.prototype.Approve = function (type, entityId) {
            var req = new Proto.API.cooperate.ApproveRequest();
            req.type = type;
            req.entityId = entityId;
            this.send(req);
        };
        /**
         *  获取合作任务信息
         */
        cooperateSender.prototype.GetInfo = function () {
            var req = new Proto.API.cooperate.GetInfoRequest();
            this.send(req);
        };
        /**
         *
         * @param type   任务操作 0接取 1协作
         * @param taskId   哪个任务
         * @param star   星级
         */
        cooperateSender.prototype.TaskOperate = function (type, taskId, star) {
            var req = new Proto.API.cooperate.TaskOperateRequest();
            req.type = type;
            req.taskId = taskId;
            req.star = star;
            this.send(req);
        };
        /**
         *
         * @param taskId   哪个任务
         * @param star   星级
         */
        cooperateSender.prototype.GetTaskReward = function (taskId, star) {
            var req = new Proto.API.cooperate.GetTaskRewardRequest();
            req.taskId = taskId;
            req.star = star;
            this.send(req);
        };
        /**
         *  赠送物品
         * @param itemId   赠送物品ID
         */
        cooperateSender.prototype.GiveReward = function (itemId) {
            var req = new Proto.API.cooperate.GiveRewardRequest();
            req.itemId = itemId;
            this.send(req);
        };
        /**
         *  领取进度奖励
         * @param index   领取哪一个
         */
        cooperateSender.prototype.GetProgressTask = function (index) {
            var req = new Proto.API.cooperate.GetProgressTaskRequest();
            req.index = index;
            this.send(req);
        };
        /**
         *
         */
        cooperateSender.prototype.CancelCooperate = function () {
            var req = new Proto.API.cooperate.CancelCooperateRequest();
            this.send(req);
        };
        /**
         *  查看合作信息
         */
        cooperateSender.prototype.ReadCooperate = function () {
            var req = new Proto.API.cooperate.ReadCooperateRequest();
            this.send(req);
        };
        /**
         *  合作建立界面 1秒一次
         */
        // GetSetUpInfo()
        // {
        // 	let req = new Proto.API.cooperate.GetSetUpInfoRequest();
        // 	this.send(req);
        // }
        /**
         *  合作任务界面 2秒一次
         */
        cooperateSender.prototype.GetTaskInfo = function () {
            var req = new Proto.API.cooperate.GetTaskInfoRequest();
            this.send(req);
        };
        /**
         *  合作订单界面 2秒一次
         * @param oldOrderUuids
         */
        cooperateSender.prototype.GetOrderInfo = function (oldOrderUuids) {
            var req = new Proto.API.cooperate.GetOrderInfoRequest();
            req.oldOrderUuids = oldOrderUuids;
            this.send(req);
        };
        return cooperateSender;
    }(Games.ProtoSender));
    Games.cooperateSender = cooperateSender;
})(Games || (Games = {}));
//# sourceMappingURL=cooperateSender.js.map