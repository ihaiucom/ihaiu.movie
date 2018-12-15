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
            var _this = _super !== null && _super.apply(this, arguments) || this;
            /** 解析屏蔽字为字符串列表 */
            _this._blockList = [];
            return _this;
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
        Object.defineProperty(BlockWordsConfigReader.prototype, "wordList", {
            get: function () {
                if (this._blockList.length == 0) {
                    this.parseWords();
                }
                return this._blockList;
            },
            enumerable: true,
            configurable: true
        });
        BlockWordsConfigReader.prototype.parseWords = function () {
            var wordsRule = this.getConfigList();
            var n = wordsRule.length;
            for (var i = 0; i < n; i++) {
                this._blockList.push(wordsRule[i].text);
            }
        };
        return BlockWordsConfigReader;
    }(configs.BlockWordsConfigReaderStruct));
    configs.BlockWordsConfigReader = BlockWordsConfigReader;
})(configs || (configs = {}));
//# sourceMappingURL=BlockWordsConfigReader.js.map