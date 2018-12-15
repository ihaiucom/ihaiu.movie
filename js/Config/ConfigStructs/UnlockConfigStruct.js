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
    var UnlockConfigStruct = /** @class */ (function (_super) {
        __extends(UnlockConfigStruct, _super);
        function UnlockConfigStruct() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        Object.defineProperty(UnlockConfigStruct.prototype, "name", {
            get: function () {
                var value = LangManager.Instance.getValue("unlock", this.id, "name");
                if (!isNullOrEmpty(value)) {
                    return value;
                }
                return this.zh_cn_name;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(UnlockConfigStruct.prototype, "touch_txt", {
            get: function () {
                var value = LangManager.Instance.getValue("unlock", this.id, "touch_txt");
                if (!isNullOrEmpty(value)) {
                    return value;
                }
                return this.zh_cn_touch_txt;
            },
            enumerable: true,
            configurable: true
        });
        return UnlockConfigStruct;
    }(configs.BaseConfig));
    configs.UnlockConfigStruct = UnlockConfigStruct;
})(configs || (configs = {}));
//# sourceMappingURL=UnlockConfigStruct.js.map