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
    var StorylineConfigStruct = /** @class */ (function (_super) {
        __extends(StorylineConfigStruct, _super);
        function StorylineConfigStruct() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        Object.defineProperty(StorylineConfigStruct.prototype, "ui_content", {
            get: function () {
                var value = LangManager.Instance.getValue("storyline", this.id, "ui_content");
                if (!isNullOrEmpty(value)) {
                    return value;
                }
                return this.cn_ui_content;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(StorylineConfigStruct.prototype, "content", {
            get: function () {
                var value = LangManager.Instance.getValue("storyline", this.id, "content");
                if (!isNullOrEmpty(value)) {
                    return value;
                }
                return this.cn_content;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(StorylineConfigStruct.prototype, "name", {
            get: function () {
                var value = LangManager.Instance.getValue("storyline", this.id, "name");
                if (!isNullOrEmpty(value)) {
                    return value;
                }
                return this.cn_name;
            },
            enumerable: true,
            configurable: true
        });
        return StorylineConfigStruct;
    }(configs.BaseConfig));
    configs.StorylineConfigStruct = StorylineConfigStruct;
})(configs || (configs = {}));
//# sourceMappingURL=StorylineConfigStruct.js.map