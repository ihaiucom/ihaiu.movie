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
    var WriterAdaptEffectConfigStruct = /** @class */ (function (_super) {
        __extends(WriterAdaptEffectConfigStruct, _super);
        function WriterAdaptEffectConfigStruct() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        Object.defineProperty(WriterAdaptEffectConfigStruct.prototype, "adapt", {
            get: function () {
                var value = LangManager.Instance.getValue("writerAdaptEffect", this.id, "adapt");
                if (!isNullOrEmpty(value)) {
                    return value;
                }
                return this.zh_cn_adapt;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(WriterAdaptEffectConfigStruct.prototype, "adapt_des", {
            get: function () {
                var value = LangManager.Instance.getValue("writerAdaptEffect", this.id, "adapt_des");
                if (!isNullOrEmpty(value)) {
                    return value;
                }
                return this.zh_cn_adapt_des;
            },
            enumerable: true,
            configurable: true
        });
        return WriterAdaptEffectConfigStruct;
    }(configs.BaseConfig));
    configs.WriterAdaptEffectConfigStruct = WriterAdaptEffectConfigStruct;
})(configs || (configs = {}));
//# sourceMappingURL=WriterAdaptEffectConfigStruct.js.map