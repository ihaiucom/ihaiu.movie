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
    var ActorLevelConfigReader = /** @class */ (function (_super) {
        __extends(ActorLevelConfigReader, _super);
        function ActorLevelConfigReader() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        /**
         *获取等级配置
         * @param id 艺人id
         * @param lv 等级
         */
        ActorLevelConfigReader.prototype.getConfigByIdLv = function (id, lv) {
            var actorConfig = Game.config.actor.getConfig(id);
            if (actorConfig) {
            }
            return this.getConfig(id);
        };
        return ActorLevelConfigReader;
    }(configs.ActorLevelConfigReaderStruct));
    configs.ActorLevelConfigReader = ActorLevelConfigReader;
})(configs || (configs = {}));
//# sourceMappingURL=ActorLevelConfigReader.js.map