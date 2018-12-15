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
    var MenuConfigReader = /** @class */ (function (_super) {
        __extends(MenuConfigReader, _super);
        function MenuConfigReader() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.barDict = new Dictionary();
            return _this;
        }
        MenuConfigReader.prototype.getBarMenus = function (barType) {
            if (this.barDict.hasKey(barType))
                return this.barDict.getValue(barType);
            return [];
        };
        /** 游戏所有配置加载完成 */
        MenuConfigReader.prototype.onGameLoadedAll = function () {
            var list = this.getConfigList();
            for (var i = 0; i < list.length; i++) {
                var config = list[i];
                var menuList = this.barDict.getValue(config.barType);
                if (!menuList) {
                    menuList = [];
                    this.barDict.add(config.barType, menuList);
                }
                menuList.push(config);
            }
        };
        return MenuConfigReader;
    }(configs.MenuConfigReaderStruct));
    configs.MenuConfigReader = MenuConfigReader;
})(configs || (configs = {}));
//# sourceMappingURL=MenuConfigReader.js.map