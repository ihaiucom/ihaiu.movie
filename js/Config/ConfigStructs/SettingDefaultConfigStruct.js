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
    var SettingDefaultConfigStruct = /** @class */ (function (_super) {
        __extends(SettingDefaultConfigStruct, _super);
        function SettingDefaultConfigStruct() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        Object.defineProperty(SettingDefaultConfigStruct.prototype, "name", {
            get: function () {
                var value = LangManager.Instance.getValue("settingDefault", this.id, "name");
                if (!isNullOrEmpty(value)) {
                    return value;
                }
                return this.zh_cn_name;
            },
            enumerable: true,
            configurable: true
        });
        return SettingDefaultConfigStruct;
    }(configs.BaseConfig));
    configs.SettingDefaultConfigStruct = SettingDefaultConfigStruct;
})(configs || (configs = {}));
//# sourceMappingURL=SettingDefaultConfigStruct.js.map