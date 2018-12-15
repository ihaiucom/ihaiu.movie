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
    /// 配置读取器列表
    var LangConfigLoader = /** @class */ (function (_super) {
        __extends(LangConfigLoader, _super);
        function LangConfigLoader() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            // 消息--加载进度
            _this.sLoadProgress = new TypedSignal();
            // 消息--加载完成
            _this.sLoaded = new Signal();
            // 加载进度
            _this.loadProgress = 0;
            // 是否已经加载完成
            _this.isLoadCompleted = false;
            _this.textRenders = [];
            // 消息--加载完成
            _this.sTextLoaded = new Signal();
            return _this;
        }
        // 加载所有
        LangConfigLoader.prototype.loadAll = function () {
            // if (this.renders.indexOf(this.textCode) != -1)
            // {
            // 	this.renders.slice(this.renders.indexOf(this.textCode), 1);
            // 	this.renders.slice(this.renders.indexOf(this.textFgui), 1);
            // }
            var _this = this;
            this.loadProgress = 0;
            var count = this.renders.length;
            var loadedNum = 0;
            var onItemLoaded = function () {
                loadedNum++;
                _this.loadProgress = loadedNum / count;
                _this.sLoadProgress.dispatch(_this.loadProgress);
                gameLaunchLoding.onLoadedLangConfig(loadedNum, count);
                if (loadedNum >= count) {
                    _this.onGameLoadedAll();
                }
            };
            for (var i = 0; i < this.renders.length; i++) {
                this.renders[i].lang = this.lang;
                this.renders[i].load(this.configLoader, onItemLoaded);
            }
        };
        // 加载完成所有
        LangConfigLoader.prototype.onGameLoadedAll = function () {
            for (var i = 0; i < this.renders.length; i++) {
                this.renders[i].onGameLoadedAll();
            }
            // 设置代码文本	
            this.setCodeTEXT();
            // 设置fgui文本
            FguiHelper.setStringsSource(this.textFgui);
            this.isLoadCompleted = true;
            this.sLoaded.dispatch();
        };
        LangConfigLoader.prototype.loadText = function () {
            var _this = this;
            var renders = this.textRenders;
            if (renders.length == 0) {
                renders.push(this.textCode);
                renders.push(this.textFgui);
            }
            this.loadProgress = 0;
            var count = renders.length;
            var loadedNum = 0;
            var onItemLoaded = function () {
                loadedNum++;
                if (loadedNum >= count) {
                    _this.onLoadTextComplte();
                }
            };
            for (var i = 0; i < renders.length; i++) {
                renders[i].lang = this.lang;
                renders[i].load(this.configLoader, onItemLoaded);
            }
        };
        // 加载完成TEXT
        LangConfigLoader.prototype.onLoadTextComplte = function () {
            var renders = this.textRenders;
            for (var i = 0; i < renders.length; i++) {
                renders[i].onGameLoadedAll();
            }
            // 设置代码文本	
            this.setCodeTEXT();
            // 设置fgui文本
            FguiHelper.setStringsSource(this.textFgui);
            this.sTextLoaded.dispatch();
        };
        // 设置代码文本		
        LangConfigLoader.prototype.setCodeTEXT = function () {
            if (!this._srcTEXT && TEXT) {
                this._srcTEXT = new Dictionary();
                for (var key in TEXT) {
                    this._srcTEXT.add(key, TEXT[key]);
                }
            }
            var list = this.textCode.getConfigList();
            for (var i = 0; i < list.length; i++) {
                var item = list[i];
                var key = item.dict.getValue("key");
                var value = item.dict.getValue("value");
                if (!isNullOrEmpty(value)) {
                    TEXT[key] = value;
                }
            }
        };
        return LangConfigLoader;
    }(configs.LangConfigLoaderList));
    configs.LangConfigLoader = LangConfigLoader;
})(configs || (configs = {}));
//# sourceMappingURL=LangConfigLoader.js.map