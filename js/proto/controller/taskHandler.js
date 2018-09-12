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
     * 任务模块

     */
    var taskHandler = /** @class */ (function (_super) {
        __extends(taskHandler, _super);
        function taskHandler() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.moduleName = Games.ProtoModuleNames.task;
            return _this;
        }
        /**
         *
         */
        taskHandler.prototype.reward = function (msg) {
            if (msg && msg.dropout) {
                Game.system.alertTextIconByProtoItems(msg.dropout, Games.TEXT.OrderRewardTitle, null, function () {
                    var addFans = 0;
                    for (var index = 0; index < msg.dropout.length; index++) {
                        var reward = msg.dropout[index];
                        if (reward.itemId == 5) {
                            addFans = reward.amount;
                        }
                    }
                    if (addFans > 0) {
                        Game.system.addFansText(addFans, null, Games.TEXT.MainTaskAddFansTip, 3);
                    }
                });
            }
        };
        return taskHandler;
    }(Games.ProtoHandler));
    Games.taskHandler = taskHandler;
})(Games || (Games = {}));
//# sourceMappingURL=taskHandler.js.map