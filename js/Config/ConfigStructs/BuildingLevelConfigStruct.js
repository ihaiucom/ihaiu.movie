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
    var BuildingLevelConfigStruct = /** @class */ (function (_super) {
        __extends(BuildingLevelConfigStruct, _super);
        function BuildingLevelConfigStruct() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        Object.defineProperty(BuildingLevelConfigStruct.prototype, "name", {
            get: function () {
                var value = LangManager.Instance.getValue("buildingLevel", this.id, "name");
                if (!isNullOrEmpty(value)) {
                    return value;
                }
                return this.zh_cn_name;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(BuildingLevelConfigStruct.prototype, "effect_tips", {
            get: function () {
                var value = LangManager.Instance.getValue("buildingLevel", this.id, "effect_tips");
                if (!isNullOrEmpty(value)) {
                    return value;
                }
                return this.zh_cn_effect_tips;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(BuildingLevelConfigStruct.prototype, "level_tips", {
            get: function () {
                var value = LangManager.Instance.getValue("buildingLevel", this.id, "level_tips");
                if (!isNullOrEmpty(value)) {
                    return value;
                }
                return this.zh_cn_level_tips;
            },
            enumerable: true,
            configurable: true
        });
        return BuildingLevelConfigStruct;
    }(configs.BaseConfig));
    configs.BuildingLevelConfigStruct = BuildingLevelConfigStruct;
})(configs || (configs = {}));
//# sourceMappingURL=BuildingLevelConfigStruct.js.map