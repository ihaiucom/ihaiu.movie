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
    var SettingTextConfigStruct = /** @class */ (function (_super) {
        __extends(SettingTextConfigStruct, _super);
        function SettingTextConfigStruct() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        Object.defineProperty(SettingTextConfigStruct.prototype, "text", {
            get: function () {
                return this.zh_cn_text;
            },
            enumerable: true,
            configurable: true
        });
        return SettingTextConfigStruct;
    }(configs.BaseConfig));
    configs.SettingTextConfigStruct = SettingTextConfigStruct;
})(configs || (configs = {}));
//# sourceMappingURL=SettingTextConfigStruct.js.map