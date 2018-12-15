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
    var UnlockConfig = /** @class */ (function (_super) {
        __extends(UnlockConfig, _super);
        function UnlockConfig() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        Object.defineProperty(UnlockConfig.prototype, "menuConfig", {
            get: function () {
                return Game.config.menu.getConfig(this.menu_id);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(UnlockConfig.prototype, "lockvisible", {
            get: function () {
                return this.show_type == 1;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(UnlockConfig.prototype, "isUnlock", {
            get: function () {
                var menuConfig = this.menuConfig;
                if (menuConfig) {
                    return menuConfig.isUnlock;
                }
                return false;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(UnlockConfig.prototype, "isNew", {
            get: function () {
                var menuConfig = this.menuConfig;
                if (menuConfig) {
                    return menuConfig.isNew;
                }
                return false;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(UnlockConfig.prototype, "menuId", {
            get: function () {
                return this.menu_id;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(UnlockConfig.prototype, "isOpenShow", {
            //是否展示
            get: function () {
                for (var index = 0; index < this.open_show.length; index++) {
                    var element = this.open_show[index];
                    if (element == 1) {
                        return true;
                    }
                }
                return false;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(UnlockConfig.prototype, "isOpenShowMenu", {
            get: function () {
                for (var index = 0; index < this.open_show.length; index++) {
                    var element = this.open_show[index];
                    if (element == 2) {
                        return true;
                    }
                }
                return false;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(UnlockConfig.prototype, "progressGoal", {
            get: function () {
                return Games.MenuValidateProgress.getInstance().progress(this.menuId);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(UnlockConfig.prototype, "iconUrl", {
            // 	菜单图片	
            get: function () {
                var url = "";
                if (this.item_id > 0) {
                    url = Game.config.item.getItemIcon(this.item_id);
                }
                else if (this.menuConfig) {
                    url = this.menuConfig.iconUrl;
                }
                return url;
            },
            enumerable: true,
            configurable: true
        });
        return UnlockConfig;
    }(configs.UnlockConfigStruct));
    configs.UnlockConfig = UnlockConfig;
})(configs || (configs = {}));
//# sourceMappingURL=UnlockConfig.js.map