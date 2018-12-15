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
(function (configs_1) {
    var CompleteConfigReader = /** @class */ (function (_super) {
        __extends(CompleteConfigReader, _super);
        function CompleteConfigReader() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.completeDict = new Dictionary();
            return _this;
        }
        CompleteConfigReader.prototype.getCompleteList = function (progressId) {
            if (!this.completeDict.hasKey(progressId)) {
                this.completeDict.add(progressId, []);
            }
            return this.completeDict.getValue(progressId);
        };
        /** 游戏所有配置加载完成 */
        CompleteConfigReader.prototype.onGameLoadedAll = function () {
            var configs = this.getConfigList();
            configs = configs.sort(function (a, b) { return a.id - b.id; });
            for (var i = 0; i < configs.length; i++) {
                var config = configs[i];
                var progressId = Math.floor(config.id / 1000);
                var list = this.getCompleteList(progressId);
                list.push(config);
            }
        };
        return CompleteConfigReader;
    }(configs_1.CompleteConfigReaderStruct));
    configs_1.CompleteConfigReader = CompleteConfigReader;
})(configs || (configs = {}));
//# sourceMappingURL=CompleteConfigReader.js.map