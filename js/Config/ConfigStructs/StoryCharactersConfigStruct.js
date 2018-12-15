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
    var StoryCharactersConfigStruct = /** @class */ (function (_super) {
        __extends(StoryCharactersConfigStruct, _super);
        function StoryCharactersConfigStruct() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        Object.defineProperty(StoryCharactersConfigStruct.prototype, "name", {
            get: function () {
                var value = LangManager.Instance.getValue("storyCharacters", this.id, "name");
                if (!isNullOrEmpty(value)) {
                    return value;
                }
                return this.zh_cn_name;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(StoryCharactersConfigStruct.prototype, "introduction", {
            get: function () {
                var value = LangManager.Instance.getValue("storyCharacters", this.id, "introduction");
                if (!isNullOrEmpty(value)) {
                    return value;
                }
                return this.zh_cn_introduction;
            },
            enumerable: true,
            configurable: true
        });
        return StoryCharactersConfigStruct;
    }(configs.BaseConfig));
    configs.StoryCharactersConfigStruct = StoryCharactersConfigStruct;
})(configs || (configs = {}));
//# sourceMappingURL=StoryCharactersConfigStruct.js.map