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
    var taskSender = /** @class */ (function (_super) {
        __extends(taskSender, _super);
        function taskSender() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.moduleName = Games.ProtoModuleNames.task;
            return _this;
        }
        /**
         *
         * @param tId  id
         */
        taskSender.prototype.reward = function (tId) {
            var req = new Proto.API.task.rewardRequest();
            req.tId = tId;
            this.send(req);
        };
        return taskSender;
    }(Games.ProtoSender));
    Games.taskSender = taskSender;
})(Games || (Games = {}));
//# sourceMappingURL=taskSender.js.map