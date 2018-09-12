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
    var StoryConfig = /** @class */ (function (_super) {
        __extends(StoryConfig, _super);
        function StoryConfig() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this._newStoryName = null;
            return _this;
        }
        Object.defineProperty(StoryConfig.prototype, "filmIndex", {
            get: function () {
                return this.id;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(StoryConfig.prototype, "filmName", {
            /**
             * 剧本名称
             */
            get: function () {
                if (!this._newStoryName) {
                    this._newStoryName = this.story_name;
                }
                return this._newStoryName;
            },
            set: function (value) {
                if (!value) {
                    console.error("剧本名字 有问题 StoryConfig.filmName value=" + value);
                }
                this._newStoryName = value;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(StoryConfig.prototype, "starNumber", {
            /**
             * 星级
             */
            get: function () {
                return parseInt(Game.config.property.getConfig(this.stars).name);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(StoryConfig.prototype, "filmType", {
            /**
             * 剧本风格
             */
            get: function () {
                return Game.config.property.getConfig(this.type).name;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(StoryConfig.prototype, "filmTags", {
            /**
             * 剧本元素
             */
            get: function () {
                var result = new Array(this.tags.length);
                for (var index = 0; index < this.tags.length; index++) {
                    result[index] = Game.config.property.getConfig(this.tags[index]).name;
                }
                return result;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(StoryConfig.prototype, "filmDes", {
            /**
             * 电影详情
             */
            get: function () {
                return this.introduction;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(StoryConfig.prototype, "filmCosts", {
            /**
             * 拍摄消耗
             */
            get: function () {
                return this.cost.toString();
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(StoryConfig.prototype, "characterProperty", {
            /**
             * 角色属性
             */
            get: function () {
                var result = new Array(this.property.length);
                for (var index = 0; index < this.property.length; index++) {
                    result[index] = Game.config.storyCharacters.getConfig(this.property[index]);
                }
                return result;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(StoryConfig.prototype, "getMale", {
            get: function () {
                return this.male_percent;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(StoryConfig.prototype, "getFemale", {
            get: function () {
                return this.female_percent;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(StoryConfig.prototype, "getChild", {
            get: function () {
                return this.child_percent;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(StoryConfig.prototype, "getReward", {
            get: function () {
                return this.reward;
            },
            enumerable: true,
            configurable: true
        });
        return StoryConfig;
    }(configs.StoryConfigStruct));
    configs.StoryConfig = StoryConfig;
})(configs || (configs = {}));
//# sourceMappingURL=StoryConfig.js.map