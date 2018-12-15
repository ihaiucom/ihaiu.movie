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
    var payHandler = /** @class */ (function (_super) {
        __extends(payHandler, _super);
        function payHandler() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.moduleName = Games.ProtoModuleNames.pay;
            return _this;
        }
        /**
         *
         */
        payHandler.prototype.StartOrder = function (msg) {
            var conList = Game.config.recharge.getConfigList();
            for (var i = 0; i < conList.length; i++) {
                if (conList[i].id === msg.id) {
                    var conchMarketJson = new Games.ConchMarketJson();
                    conchMarketJson.amount = msg.amount;
                    conchMarketJson.order_id = msg.orderId;
                    conchMarketJson.product_id = conList[i].product_id;
                    if (!Games.RechargeAttributes.Instance.orderDic.hasKey(msg.orderId)) {
                        Games.RechargeAttributes.Instance.orderDic.add(msg.orderId, conList[i]);
                    }
                    Games.Recharge.Instance.onRecharge(conchMarketJson);
                    break;
                }
            }
        };
        /**
         *  完成订单
         */
        payHandler.prototype.FinishOrder = function (msg) {
            fairygui.GRoot.inst.closeModalWait();
            // console.log("=====================FinishOrder is " + (msg.result === 0 ? "ok" : "failed") + " :orderId=" + msg.orderId);
            if (msg.result === 0) {
                // 订单成功完成
                if (Games.RechargeAttributes.Instance.orderDic.hasKey(msg.orderId)) {
                    var rechargeConf = Games.RechargeAttributes.Instance.orderDic.getValue(msg.orderId);
                    // 充值数据埋点
                    Games.Static.Instance.onPurchase(rechargeConf.cost_dollar, msg.orderId, rechargeConf.name, rechargeConf.id);
                    switch (rechargeConf.id) {
                        case 1001:
                        case 1002:
                        case 1003:
                        case 1004:
                        case 1005:
                        case 1006:
                        case 1007:
                        case 1009:
                            {
                                // 购买钻石
                                Game.system.getItemText(rechargeConf.rechangeGifts);
                            }
                            break;
                        case 1008:
                            {
                                // 购买终身小秘书
                            }
                            break;
                    }
                }
            }
            else {
                // 订单失败
                // Game.system.toastMsg(MsgKey.order_fail);
                Game.system.alrtTextFull(Games.TEXT.rechargeError, Games.TEXT.systemTip);
            }
        };
        return payHandler;
    }(Games.ProtoHandler));
    Games.payHandler = payHandler;
})(Games || (Games = {}));
//# sourceMappingURL=payHandler.js.map