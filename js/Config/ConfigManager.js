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
    var ConfigManager = /** @class */ (function (_super) {
        __extends(ConfigManager, _super);
        function ConfigManager() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            // 消息--加载进度
            _this.sLoadProgress = new TypedSignal();
            // 消息--加载完成
            _this.sLoaded = new Signal();
            // 加载进度
            _this.loadProgress = 0;
            return _this;
        }
        // 加载所有
        ConfigManager.prototype.loadAll = function () {
            var _this = this;
            this.loadProgress = 0;
            var count = this.renders.length;
            var loadedNum = 0;
            var onItemLoaded = function () {
                loadedNum++;
                _this.loadProgress = loadedNum / count;
                _this.sLoadProgress.dispatch(_this.loadProgress);
                gameLaunchLoding.onLoadedConfig(loadedNum, count);
                if (loadedNum >= count) {
                    _this.onGameLoadedAll();
                }
            };
            for (var i = 0; i < this.renders.length; i++) {
                this.renders[i].load(this.configLoader, onItemLoaded);
            }
        };
        // 重新加载所有
        ConfigManager.prototype.reloadAll = function () {
            var _this = this;
            this.loadProgress = 0;
            var count = this.renders.length;
            var loadedNum = 0;
            var onItemLoaded = function () {
                loadedNum++;
                _this.loadProgress = loadedNum / count;
                _this.sLoadProgress.dispatch(_this.loadProgress);
                gameLaunchLoding.onLoadedConfig(loadedNum, count);
                if (loadedNum >= count) {
                    _this.onGameLoadedAll();
                }
            };
            for (var i = 0; i < this.renders.length; i++) {
                this.renders[i].reload(this.configLoader, onItemLoaded);
            }
        };
        // 加载完成所有
        ConfigManager.prototype.onGameLoadedAll = function () {
            for (var i = 0; i < this.renders.length; i++) {
                this.renders[i].onGameLoadedAll();
            }
            this.sLoaded.dispatch();
        };
        return ConfigManager;
    }(configs.ConfigManagerList));
    configs.ConfigManager = ConfigManager;
})(configs || (configs = {}));
//# sourceMappingURL=ConfigManager.js.map