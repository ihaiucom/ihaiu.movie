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
     *
     */
    var manageOrderHandler = /** @class */ (function (_super) {
        __extends(manageOrderHandler, _super);
        function manageOrderHandler() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.moduleName = Games.ProtoModuleNames.manageOrder;
            return _this;
        }
        /**
         * 放入物品
         */
        manageOrderHandler.prototype.PutItem = function (msg) {
            if (msg.type == 1) {
                Game.system.getItemText([msg.itemInfo]);
            }
        };
        /**
         * 销毁订单
         */
        manageOrderHandler.prototype.DelOrder = function (msg) {
        };
        /**
         * 完成订单
         */
        manageOrderHandler.prototype.FinishOrder = function (msg) {
            if (isNullOrEmpty(msg.uuid) == false) {
                var data = Game.moduleModel.order.getDeleteDataByUUid(msg.uuid);
                if (data) {
                    Game.system.playEffects(data.rewardItems);
                    Game.sound.playSound(SoundKey.MM09_GoldReward);
                    Game.system.getItemText(data.rewardItems);
                    // 埋点 订单完成产出
                    Games.Static.Instance.onResourceoutput(data.rewardItems, "order&End", User.info.stall + "&" + data.id);
                }
            }
        };
        /**
         *  订单过期处理
         */
        manageOrderHandler.prototype.DealOrder = function (msg) {
        };
        return manageOrderHandler;
    }(Games.ProtoHandler));
    Games.manageOrderHandler = manageOrderHandler;
})(Games || (Games = {}));
//# sourceMappingURL=manageOrderHandler.js.map