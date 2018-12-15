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
    var BlockWordsIIConfigReader = /** @class */ (function (_super) {
        __extends(BlockWordsIIConfigReader, _super);
        function BlockWordsIIConfigReader() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            /** 解析屏蔽字为字符串列表 */
            _this._blockList = [];
            return _this;
        }
        Object.defineProperty(BlockWordsIIConfigReader.prototype, "wordList", {
            get: function () {
                if (this._blockList.length == 0) {
                    this.parseWords();
                }
                return this._blockList;
            },
            enumerable: true,
            configurable: true
        });
        BlockWordsIIConfigReader.prototype.parseWords = function () {
            var wordsRule = this.getConfigList();
            var len = wordsRule.length;
            for (var i = 0; i < len; i++) {
                var group = wordsRule[i].text.split("|");
                if (group.length == 1) {
                    this._blockList.push(group[0]);
                }
                else {
                    for (var n = 1; n < group.length; n++) {
                        this._blockList.push(group[0] + group[n]);
                    }
                }
            }
        };
        return BlockWordsIIConfigReader;
    }(configs.BlockWordsIIConfigReaderStruct));
    configs.BlockWordsIIConfigReader = BlockWordsIIConfigReader;
})(configs || (configs = {}));
//# sourceMappingURL=BlockWordsIIConfigReader.js.map