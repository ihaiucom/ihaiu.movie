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
    var BlockWordsConfigReader = /** @class */ (function (_super) {
        __extends(BlockWordsConfigReader, _super);
        function BlockWordsConfigReader() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        /**
         * 判断是否包含表中的字段
         * @param target 目标字符串
         */
        BlockWordsConfigReader.prototype.hasWord = function (target) {
            var words = this.getConfigList();
            for (var _i = 0, words_1 = words; _i < words_1.length; _i++) {
                var word = words_1[_i];
                if (target.indexOf(word.text) != -1) {
                    return true;
                }
            }
            return false;
        };
        return BlockWordsConfigReader;
    }(configs.BlockWordsConfigReaderStruct));
    configs.BlockWordsConfigReader = BlockWordsConfigReader;
})(configs || (configs = {}));
//# sourceMappingURL=BlockWordsConfigReader.js.map