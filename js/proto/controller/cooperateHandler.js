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
    var cooperateHandler = /** @class */ (function (_super) {
        __extends(cooperateHandler, _super);
        function cooperateHandler() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.moduleName = Games.ProtoModuleNames.cooperate;
            return _this;
        }
        /**
         *  寻求合作
         */
        cooperateHandler.prototype.Apply = function (msg) {
            Game.moduleModel.cooperation.Apply(msg);
        };
        /**
         *  解除合作
         */
        cooperateHandler.prototype.Relieve = function (msg) {
            Game.moduleModel.cooperation.Relieve(msg);
        };
        /**
         *  审批
         */
        cooperateHandler.prototype.Approve = function (msg) {
            Game.moduleModel.cooperation.Approve(msg);
        };
        /**
         *  获取合作任务信息
         */
        cooperateHandler.prototype.GetInfo = function (msg) {
            Game.moduleModel.cooperation.GetInfo(msg);
        };
        /**
         *
         */
        cooperateHandler.prototype.TaskOperate = function (msg) {
            Game.moduleModel.cooperation.TaskOperate(msg);
        };
        /**
         *
         */
        cooperateHandler.prototype.GetTaskReward = function (msg) {
            Game.moduleModel.cooperation.GetTaskReward(msg);
        };
        /**
         *  赠送物品
         */
        cooperateHandler.prototype.GiveReward = function (msg) {
            Game.moduleModel.cooperation.GiveReward(msg);
        };
        /**
         *  领取进度奖励
         */
        cooperateHandler.prototype.GetProgressTask = function (msg) {
            Game.moduleModel.cooperation.GetProgressTask(msg);
        };
        /**
         *
         */
        cooperateHandler.prototype.CancelCooperate = function (msg) {
            Game.moduleModel.cooperation.CancelCooperate(msg);
        };
        /**
         *  查看合作信息
         */
        cooperateHandler.prototype.ReadCooperate = function (msg) {
        };
        return cooperateHandler;
    }(Games.ProtoHandler));
    Games.cooperateHandler = cooperateHandler;
})(Games || (Games = {}));
//# sourceMappingURL=cooperateHandler.js.map