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
    var RechargeModel = /** @class */ (function (_super) {
        __extends(RechargeModel, _super);
        function RechargeModel() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        Object.defineProperty(RechargeModel.prototype, "rechargeList", {
            get: function () {
                var list = Game.config.recharge.getConfigList();
                var retList = [];
                for (var index = 0; index < list.length; index++) {
                    var cfg = list[index];
                    if (cfg.is_show) {
                        retList.push(cfg);
                    }
                }
                return retList;
            },
            enumerable: true,
            configurable: true
        });
        return RechargeModel;
    }(Games.MModel));
    Games.RechargeModel = RechargeModel;
})(Games || (Games = {}));
//# sourceMappingURL=RechargeModel.js.map