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
    var ItemConfigStruct = /** @class */ (function (_super) {
        __extends(ItemConfigStruct, _super);
        function ItemConfigStruct() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        Object.defineProperty(ItemConfigStruct.prototype, "name", {
            get: function () {
                var value = LangManager.Instance.getValue("item", this.id, "name");
                if (!isNullOrEmpty(value)) {
                    return value;
                }
                return this.zh_cn_name;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ItemConfigStruct.prototype, "item_des", {
            get: function () {
                var value = LangManager.Instance.getValue("item", this.id, "item_des");
                if (!isNullOrEmpty(value)) {
                    return value;
                }
                return this.zh_cn_item_des;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ItemConfigStruct.prototype, "get_way_explain", {
            get: function () {
                var value = LangManager.Instance.getValue("item", this.id, "get_way_explain");
                if (!isNullOrEmpty(value)) {
                    return value;
                }
                return this.zh_cn_get_way_explain;
            },
            enumerable: true,
            configurable: true
        });
        return ItemConfigStruct;
    }(configs.BaseConfig));
    configs.ItemConfigStruct = ItemConfigStruct;
})(configs || (configs = {}));
//# sourceMappingURL=ItemConfigStruct.js.map