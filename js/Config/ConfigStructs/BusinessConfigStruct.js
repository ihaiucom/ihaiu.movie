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
    var BusinessConfigStruct = /** @class */ (function (_super) {
        __extends(BusinessConfigStruct, _super);
        function BusinessConfigStruct() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        Object.defineProperty(BusinessConfigStruct.prototype, "from", {
            get: function () {
                var value = LangManager.Instance.getValue("business", this.id, "from");
                if (!isNullOrEmpty(value)) {
                    return value;
                }
                return this.zh_cn_from;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(BusinessConfigStruct.prototype, "name", {
            get: function () {
                var value = LangManager.Instance.getValue("business", this.id, "name");
                if (!isNullOrEmpty(value)) {
                    return value;
                }
                return this.zh_cn_name;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(BusinessConfigStruct.prototype, "description", {
            get: function () {
                var value = LangManager.Instance.getValue("business", this.id, "description");
                if (!isNullOrEmpty(value)) {
                    return value;
                }
                return this.zh_cn_description;
            },
            enumerable: true,
            configurable: true
        });
        return BusinessConfigStruct;
    }(configs.BaseConfig));
    configs.BusinessConfigStruct = BusinessConfigStruct;
})(configs || (configs = {}));
//# sourceMappingURL=BusinessConfigStruct.js.map