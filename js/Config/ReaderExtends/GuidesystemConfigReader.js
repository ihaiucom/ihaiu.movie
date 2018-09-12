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
    var GuidesystemConfigReader = /** @class */ (function (_super) {
        __extends(GuidesystemConfigReader, _super);
        function GuidesystemConfigReader() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.groups = [];
            return _this;
        }
        GuidesystemConfigReader.prototype.addConfig = function (config) {
            _super.prototype.addConfig.call(this, config);
            if (this.configDict == null) {
                this.configDict = new Dictionary();
            }
            if (this.configOrderDict == null) {
                this.configOrderDict = new Dictionary();
            }
            var list = this.configDict.getValue(config.group);
            if (list == null) {
                list = new Array();
                this.configDict.add(config.group, list);
                this.groups.push(config.group);
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
        GuidesystemConfigReader.prototype.onGameLoadedAll = function () {
            for (var index = 0; index < this.groups.length; index++) {
                var element = this.groups[index];
                var list = this.configDict.getValue(element);
                list.sort(function (a, b) { return a.order - b.order; });
            }
        };
        /**
         * 获取下一步引导id
         * @param id
         */
        GuidesystemConfigReader.prototype.getNextGuide = function (id) {
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
         * 获取上一步引导id
         * @param id
         */
        GuidesystemConfigReader.prototype.getPreGuide = function (id) {
            var config = this.getConfig(id);
            var preConfig;
            if (config) {
                var dict = this.configOrderDict.getValue(config.group);
                if (dict) {
                    preConfig = dict.getValue(config.order - 1);
                }
            }
            return preConfig;
        };
        /**
         * 获取组所有引导id
         * @param group 组id
         */
        GuidesystemConfigReader.prototype.getConfigsByGroup = function (group) {
            return this.configDict.getValue(group);
        };
        return GuidesystemConfigReader;
    }(configs.GuidesystemConfigReaderStruct));
    configs.GuidesystemConfigReader = GuidesystemConfigReader;
})(configs || (configs = {}));
//# sourceMappingURL=GuidesystemConfigReader.js.map