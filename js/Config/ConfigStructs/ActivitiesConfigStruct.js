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
    var ActivitiesConfigStruct = /** @class */ (function (_super) {
        __extends(ActivitiesConfigStruct, _super);
        function ActivitiesConfigStruct() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        Object.defineProperty(ActivitiesConfigStruct.prototype, "activities_name", {
            get: function () {
                var value = LangManager.Instance.getValue("activities", this.id, "activities_name");
                if (!isNullOrEmpty(value)) {
                    return value;
                }
                return this.zh_cn_activities_name;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ActivitiesConfigStruct.prototype, "activities_info", {
            get: function () {
                var value = LangManager.Instance.getValue("activities", this.id, "activities_info");
                if (!isNullOrEmpty(value)) {
                    return value;
                }
                return this.zh_cn_activities_info;
            },
            enumerable: true,
            configurable: true
        });
        return ActivitiesConfigStruct;
    }(configs.BaseConfig));
    configs.ActivitiesConfigStruct = ActivitiesConfigStruct;
})(configs || (configs = {}));
//# sourceMappingURL=ActivitiesConfigStruct.js.map