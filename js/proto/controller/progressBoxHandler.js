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
     * 进度宝箱

     */
    var progressBoxHandler = /** @class */ (function (_super) {
        __extends(progressBoxHandler, _super);
        function progressBoxHandler() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.moduleName = Games.ProtoModuleNames.progressBox;
            return _this;
        }
        /**
         * 领取收益
         */
        progressBoxHandler.prototype.GetReward = function (msg) {
            if (msg) {
                var data = Game.moduleModel.progressBox.getProgressBoxDataByUUid(msg.uuid);
                if (data) {
                    var config = Game.config.complete.getConfig(data.id * 1000 + msg.gear);
                    if (config) {
                        Game.system.openAwardsAlert(config.reward, Games.TEXT.OrderRewardTitle);
                    }
                    if (data.id == EProgressBoxId.manageOrder) {
                        // 埋点 订单完成阶段性奖励
                        Games.Static.Instance.onUserorbit("order", config.completion + "&" + config.id, "award");
                        Games.Static.Instance.onResourceoutput(config.reward, "orderAward", config.id.toString());
                    }
                }
            }
        };
        return progressBoxHandler;
    }(Games.ProtoHandler));
    Games.progressBoxHandler = progressBoxHandler;
})(Games || (Games = {}));
//# sourceMappingURL=progressBoxHandler.js.map