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
    var UnlockConfigReader = /** @class */ (function (_super) {
        __extends(UnlockConfigReader, _super);
        function UnlockConfigReader() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            //
            _this.menuConfigs = new Dictionary();
            //
            _this.menuGroups = new Dictionary();
            //
            _this.unlockGroups = new Dictionary();
            //
            _this.sortMenus = new Dictionary();
            return _this;
        }
        UnlockConfigReader.prototype.addConfig = function (config) {
            _super.prototype.addConfig.call(this, config);
            this.menuConfigs.add(config.menu_id, config);
            var list, group;
            group = config.group;
            if (this.menuGroups.hasKey(group)) {
                list = this.menuGroups.getValue(group);
            }
            else {
                list = [];
                this.menuGroups.add(group, list);
            }
            list.push(config);
            //
            var openList, type;
            type = config.open_type;
            if (this.unlockGroups.hasKey(type)) {
                openList = this.unlockGroups.getValue(type);
            }
            else {
                openList = [];
                this.unlockGroups.add(type, openList);
            }
            openList.push(config);
        };
        /**
         * 获取解锁数据
         * @param menuId
         */
        UnlockConfigReader.prototype.getUnlockConfig = function (menuId) {
            return this.menuConfigs.getValue(menuId);
        };
        /**
         *
         * @param barType
         */
        UnlockConfigReader.prototype.getBarMenus = function (barType) {
            var list = this.menuGroups.getValue(barType);
            if (this.sortMenus.hasKey(barType) == false) {
                list.sort(function (a, b) { return a.group_id - b.group_id; });
                this.sortMenus.add(barType, true);
            }
            return list;
        };
        //获取解锁
        UnlockConfigReader.prototype.getUnlocks = function (openType) {
            var list = this.unlockGroups.getValue(openType);
            return list;
        };
        /** 游戏所有配置加载完成 */
        UnlockConfigReader.prototype.onGameLoadedAll = function () {
        };
        return UnlockConfigReader;
    }(configs.UnlockConfigReaderStruct));
    configs.UnlockConfigReader = UnlockConfigReader;
})(configs || (configs = {}));
//# sourceMappingURL=UnlockConfigReader.js.map