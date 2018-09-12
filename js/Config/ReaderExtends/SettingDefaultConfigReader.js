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
    var SettingDefaultConfigReader = /** @class */ (function (_super) {
        __extends(SettingDefaultConfigReader, _super);
        function SettingDefaultConfigReader() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.keyDict = new Dictionary();
            _this.inListConfigs = [];
            return _this;
        }
        /** 游戏所有配置加载完成 */
        SettingDefaultConfigReader.prototype.onGameLoadedAll = function () {
            var list = this.getConfigList();
            for (var i = 0; i < list.length; i++) {
                this.keyDict.add(list[i].key, list[i]);
            }
        };
        SettingDefaultConfigReader.prototype.getConfig = function (key) {
            if (this.keyDict.hasKey(key)) {
                return this.keyDict.getValue(key);
            }
            return _super.prototype.getConfig.call(this, key);
        };
        SettingDefaultConfigReader.prototype.getConfigInList = function () {
            if (this.inListConfigs.length <= 0) {
                var list = this.getConfigList();
                for (var index = 0; index < list.length; index++) {
                    var element = list[index];
                    //临时只显示126 音乐音效 切换语言 
                    //	if (element.id != 5 && element.id != 7 && element.id != 1)
                    if (element.id != 3 && element.id != 4 && element.id != 5 && element.id != 7 && element.id != 8) {
                        this.inListConfigs.push(element);
                    }
                }
            }
            return this.inListConfigs;
        };
        return SettingDefaultConfigReader;
    }(configs.SettingDefaultConfigReaderStruct));
    configs.SettingDefaultConfigReader = SettingDefaultConfigReader;
})(configs || (configs = {}));
//# sourceMappingURL=SettingDefaultConfigReader.js.map