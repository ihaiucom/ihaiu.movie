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
    var ActionConfig = /** @class */ (function (_super) {
        __extends(ActionConfig, _super);
        function ActionConfig() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        Object.defineProperty(ActionConfig.prototype, "actionSequence", {
            get: function () {
                this.sequenceIds = [];
                this.sequenceIds.push(this.id);
                var connectActionId = this.getNextAction(this.id);
                if (connectActionId > 0) {
                    this.getNextAction(connectActionId);
                }
                return this.sequenceIds;
            },
            enumerable: true,
            configurable: true
        });
        ActionConfig.prototype.getNextAction = function (id) {
            var cfg = Game.config.action.getConfig(id);
            if (cfg) {
                if (cfg.Connect > 0) {
                    this.sequenceIds.push(cfg.Connect);
                }
                return cfg.Connect;
            }
        };
        return ActionConfig;
    }(configs.ActionConfigStruct));
    configs.ActionConfig = ActionConfig;
})(configs || (configs = {}));
//# sourceMappingURL=ActionConfig.js.map