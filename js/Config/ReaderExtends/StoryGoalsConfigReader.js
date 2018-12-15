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
    var StoryGoalsConfigReader = /** @class */ (function (_super) {
        __extends(StoryGoalsConfigReader, _super);
        function StoryGoalsConfigReader() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        StoryGoalsConfigReader.prototype.getGoalTarget = function (storyId, rank) {
            var list = this.getConfigList();
            for (var i = 0; i < list.length; i++) {
                if (list[i].storyid === storyId && list[i].rank === rank) {
                    return list[i];
                }
            }
            return null;
        };
        return StoryGoalsConfigReader;
    }(configs.StoryGoalsConfigReaderStruct));
    configs.StoryGoalsConfigReader = StoryGoalsConfigReader;
})(configs || (configs = {}));
//# sourceMappingURL=StoryGoalsConfigReader.js.map