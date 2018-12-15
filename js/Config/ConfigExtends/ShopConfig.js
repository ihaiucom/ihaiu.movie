/////////////////////////////////////
// ExportXlsx生成
// http://blog.ihaiu.com/tool-ExportXlsx
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
var configs;
(function (configs) {
    var ShopConfig = /** @class */ (function (_super) {
        __extends(ShopConfig, _super);
        function ShopConfig() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        Object.defineProperty(ShopConfig.prototype, "name", {
            get: function () {
                if (this.type == 1 && this.item.length == 1) {
                    return this.item[0].itemName;
                }
                var value = LangManager.Instance.getValue("shop", this.id, "name");
                if (!isNullOrEmpty(value)) {
                    return value;
                }
                return this.zh_cn_name;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ShopConfig.prototype, "isPeriodTime", {
            // 是否是购买时间阶段		
            get: function () {
                var strTime = this.period.split('-');
                if (strTime.length >= 2) {
                    var timeBegin = TimeHelper.TimeReformat2(strTime[0]);
                    var timeEnd = TimeHelper.TimeReformat2(strTime[1]);
                    var time = Game.time.serverMilliseconds;
                    return timeBegin < time && time < timeEnd;
                }
                return true;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ShopConfig.prototype, "hasPeriodTime", {
            get: function () {
                return this.period != "0";
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ShopConfig.prototype, "hasAfterTime", {
            get: function () {
                return this.delay != 0;
            },
            enumerable: true,
            configurable: true
        });
        return ShopConfig;
    }(configs.ShopConfigStruct));
    configs.ShopConfig = ShopConfig;
})(configs || (configs = {}));
//# sourceMappingURL=ShopConfig.js.map