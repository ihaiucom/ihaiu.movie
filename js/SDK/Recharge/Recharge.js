var Games;
(function (Games) {
    var Recharge = /** @class */ (function () {
        function Recharge() {
            // 派发器列表
            this.rechargeIFList = [];
            // 派发器长度
            this.listLength = 0;
            this.addDispatch(new Games.appsFlyerAndNative());
        }
        Object.defineProperty(Recharge, "Instance", {
            get: function () {
                if (!Recharge._Instance) {
                    Recharge._Instance = new Recharge();
                }
                return Recharge._Instance;
            },
            enumerable: true,
            configurable: true
        });
        Recharge.prototype.addDispatch = function (staticDispatch) {
            this.rechargeIFList.push(staticDispatch);
            this.listLength = this.rechargeIFList.length;
        };
        // 调用充值方法
        Recharge.prototype.onRecharge = function (rechargeInf) {
            if (this.listLength > 0) {
                for (var i = 0; i < this.listLength; i++) {
                    this.rechargeIFList[i].onRecharge(rechargeInf);
                }
            }
        };
        return Recharge;
    }());
    Games.Recharge = Recharge;
})(Games || (Games = {}));
//# sourceMappingURL=Recharge.js.map