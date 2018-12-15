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
    var BlockLevelConfigStruct = /** @class */ (function (_super) {
        __extends(BlockLevelConfigStruct, _super);
        function BlockLevelConfigStruct() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        Object.defineProperty(BlockLevelConfigStruct.prototype, "name", {
            get: function () {
                var value = LangManager.Instance.getValue("blockLevel", this.id, "name");
                if (!isNullOrEmpty(value)) {
                    return value;
                }
                return this.zh_cn_name;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(BlockLevelConfigStruct.prototype, "current_msg", {
            get: function () {
                var value = LangManager.Instance.getValue("blockLevel", this.id, "current_msg");
                if (!isNullOrEmpty(value)) {
                    return value;
                }
                return this.zh_cn_current_msg;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(BlockLevelConfigStruct.prototype, "next_msg", {
            get: function () {
                var value = LangManager.Instance.getValue("blockLevel", this.id, "next_msg");
                if (!isNullOrEmpty(value)) {
                    return value;
                }
                return this.zh_cn_next_msg;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(BlockLevelConfigStruct.prototype, "name_tips", {
            get: function () {
                var value = LangManager.Instance.getValue("blockLevel", this.id, "name_tips");
                if (!isNullOrEmpty(value)) {
                    return value;
                }
                return this.zh_cn_name_tips;
            },
            enumerable: true,
            configurable: true
        });
        return BlockLevelConfigStruct;
    }(configs.BaseConfig));
    configs.BlockLevelConfigStruct = BlockLevelConfigStruct;
})(configs || (configs = {}));
//# sourceMappingURL=BlockLevelConfigStruct.js.map