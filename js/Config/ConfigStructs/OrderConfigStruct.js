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
    var OrderConfigStruct = /** @class */ (function (_super) {
        __extends(OrderConfigStruct, _super);
        function OrderConfigStruct() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        Object.defineProperty(OrderConfigStruct.prototype, "name1", {
            get: function () {
                var value = LangManager.Instance.getValue("order", this.id, "name1");
                if (!isNullOrEmpty(value)) {
                    return value;
                }
                return this.zh_cn_name1;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(OrderConfigStruct.prototype, "name2", {
            get: function () {
                var value = LangManager.Instance.getValue("order", this.id, "name2");
                if (!isNullOrEmpty(value)) {
                    return value;
                }
                return this.zh_cn_name2;
            },
            enumerable: true,
            configurable: true
        });
        return OrderConfigStruct;
    }(configs.BaseConfig));
    configs.OrderConfigStruct = OrderConfigStruct;
})(configs || (configs = {}));
//# sourceMappingURL=OrderConfigStruct.js.map