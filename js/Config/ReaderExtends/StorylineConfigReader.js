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
    var StorylineConfigReader = /** @class */ (function (_super) {
        __extends(StorylineConfigReader, _super);
        function StorylineConfigReader() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.groups = [];
            return _this;
        }
        StorylineConfigReader.prototype.addConfig = function (config) {
            _super.prototype.addConfig.call(this, config);
            if (this.configDict == null) {
                this.configDict = new Dictionary();
            }
            if (this.configOrderDict == null) {
                this.configOrderDict = new Dictionary();
            }
            if (this.configTriggerDict == null) {
                this.configTriggerDict = new Dictionary();
            }
            var list = this.configDict.getValue(config.group);
            if (list == null) {
                list = new Array();
                this.configDict.add(config.group, list);
                this.groups.push(config.group);
            }
            list.push(config);
            //触发
            list = this.configTriggerDict.getValue(config.trigger);
            if (list == null) {
                list = new Array();
                this.configTriggerDict.add(config.trigger, list);
            }
            list.push(config);
            var dict = this.configOrderDict.getValue(config.group);
            if (dict == null) {
                dict = new Dictionary();
                this.configOrderDict.add(config.group, dict);
            }
            dict.add(config.order, config);
        };
        /** 游戏所有配置加载完成 */
        StorylineConfigReader.prototype.onGameLoadedAll = function () {
            for (var index = 0; index < this.groups.length; index++) {
                var element = this.groups[index];
                var list = this.configDict.getValue(element);
                list.sort(function (a, b) { return a.order - b.order; });
            }
        };
        //下一个
        StorylineConfigReader.prototype.getNextStoryline = function (id) {
            var config = this.getConfig(id);
            var nextConfig;
            if (config) {
                var dict = this.configOrderDict.getValue(config.group);
                if (dict) {
                    nextConfig = dict.getValue(config.order + 1);
                }
            }
            return nextConfig;
        };
        /**
         * 根据触发类型获取
         * @param type 触发类型
         */
        StorylineConfigReader.prototype.getConfigByTrigger = function (type) {
            var configs = this.configTriggerDict.getValue(type);
            return configs;
        };
        //
        StorylineConfigReader.prototype.getConfigsByTriggers = function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            var configs = [];
            for (var index = 0; index < args.length; index++) {
                var element = args[index];
                configs = configs.concat(this.configTriggerDict.getValue(element));
            }
            return configs;
        };
        /**
         * 根据组获取
         * @param group
         */
        StorylineConfigReader.prototype.getConfigListByGroup = function (group) {
            var configs = this.configDict.getValue(group);
            return configs;
        };
        return StorylineConfigReader;
    }(configs_1.StorylineConfigReaderStruct));
    configs_1.StorylineConfigReader = StorylineConfigReader;
})(configs || (configs = {}));
//# sourceMappingURL=StorylineConfigReader.js.map