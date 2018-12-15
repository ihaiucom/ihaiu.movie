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
    var StorylineConfig = /** @class */ (function (_super) {
        __extends(StorylineConfig, _super);
        function StorylineConfig() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        Object.defineProperty(StorylineConfig.prototype, "contentFormatCustom", {
            /**
             * 格式化
             */
            get: function () {
                if (isNullOrEmpty(this.fcontent)) {
                    this.fcontent = contentFormatCustom(this.content);
                }
                return this.fcontent;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(StorylineConfig.prototype, "bodyIconUrl", {
            //半身像路径
            get: function () {
                if (this.name == "{repeatactor}") {
                    return Game.config.actor.getConfig(toInt(this.type_id)).bodyIconUrl;
                }
                else {
                    var actorId = contentFormatCustomId(this.type_id);
                    if (actorId > 0) {
                        return Game.config.avatar.getConfig(actorId).bodyIconUrl;
                    }
                }
                return "";
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(StorylineConfig.prototype, "nName", {
            //
            get: function () {
                var n = "";
                if (this.name == "{repeatactor}") {
                    return Game.config.actor.getConfig(toInt(this.type_id)).name;
                }
                else {
                    n = contentFormatCustom(this.name);
                }
                return n;
            },
            enumerable: true,
            configurable: true
        });
        return StorylineConfig;
    }(configs.StorylineConfigStruct));
    configs.StorylineConfig = StorylineConfig;
})(configs || (configs = {}));
//# sourceMappingURL=StorylineConfig.js.map