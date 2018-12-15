var Games;
(function (Games) {
    // ios内购
    var appsFlyerAndNative = /** @class */ (function () {
        function appsFlyerAndNative() {
        }
        /**
         * 调用充值方法
         * @param conchMarketJson
         */
        appsFlyerAndNative.prototype.onRecharge = function (conchMarketJson) {
            Laya.conchMarket.recharge(conchMarketJson.toJson(), function (jsonString) {
                // 充值后的回调
                var pJson = JSON.parse(jsonString);
                if (parseInt(pJson.code) === 0) {
                    Game.protosender.pay.FinishOrder(pJson.order_id, parseInt(pJson.code));
                }
                else {
                    fairygui.GRoot.inst.closeModalWait();
                    // 订单失败
                    Game.system.alrtTextFull(Games.TEXT.rechargeError, Games.TEXT.systemTip);
                }
            });
        };
        return appsFlyerAndNative;
    }());
    Games.appsFlyerAndNative = appsFlyerAndNative;
})(Games || (Games = {}));
//# sourceMappingURL=appsFlyerAndNative.js.map