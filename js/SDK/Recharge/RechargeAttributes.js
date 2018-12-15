var Games;
(function (Games) {
    var RechargeAttributes = /** @class */ (function () {
        function RechargeAttributes() {
            // 订单列表
            this.orderDic = new Dictionary();
        }
        Object.defineProperty(RechargeAttributes, "Instance", {
            get: function () {
                if (!RechargeAttributes._Instance) {
                    RechargeAttributes._Instance = new RechargeAttributes();
                }
                return RechargeAttributes._Instance;
            },
            enumerable: true,
            configurable: true
        });
        return RechargeAttributes;
    }());
    Games.RechargeAttributes = RechargeAttributes;
})(Games || (Games = {}));
//# sourceMappingURL=RechargeAttributes.js.map