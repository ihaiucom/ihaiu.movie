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
    var ActionConfigReader = /** @class */ (function (_super) {
        __extends(ActionConfigReader, _super);
        function ActionConfigReader() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        //根据动作名获取动作Id
        ActionConfigReader.prototype.getActionId = function (actionName) {
            var actionList = this.getConfigList();
            var finder = actionList.findOne(function (item) {
                return item.action == actionName;
            });
            return (finder && finder.id) || 1002;
        };
        return ActionConfigReader;
    }(configs.ActionConfigReaderStruct));
    configs.ActionConfigReader = ActionConfigReader;
})(configs || (configs = {}));
//# sourceMappingURL=ActionConfigReader.js.map