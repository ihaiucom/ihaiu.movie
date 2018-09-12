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
/////////////////////////////////////
// ExportXlsx生成
// http://blog.ihaiu.com/tool-ExportXlsx
/////////////////////////////////////
var MenuId = Games.MenuId;
var MenuLayerType = Games.MenuLayerType;
var MenuCloseOtherType = Games.MenuCloseOtherType;
var LoaderId = Games.LoaderId;
var configs;
(function (configs) {
    var MenuConfig = /** @class */ (function (_super) {
        __extends(MenuConfig, _super);
        function MenuConfig() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        Object.defineProperty(MenuConfig.prototype, "menuId", {
            // 模块ID
            get: function () {
                return this.id;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(MenuConfig.prototype, "menuLayer", {
            // 层级
            get: function () {
                return this.layer;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(MenuConfig.prototype, "menuCloseOtherType", {
            // 关闭其他类型
            get: function () {
                return this.closeOtherType;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(MenuConfig.prototype, "menuLoaderId", {
            // 加载界面ID
            get: function () {
                return this.loaderId;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(MenuConfig.prototype, "iconUrl", {
            // 	菜单图片	
            get: function () {
                var avatarConfig = Game.config.avatar.getConfig(this.icon);
                if (avatarConfig) {
                    return avatarConfig.iconUrl;
                }
                else {
                    return "";
                }
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(MenuConfig.prototype, "isUnlock", {
            /**
             * 获取是否解锁
             */
            get: function () {
                return Games.MenuValidateUnlock.getInstance().validate(this.menuId);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(MenuConfig.prototype, "lockText", {
            /**
             * 获取未解锁文本
             */
            get: function () {
                var unlockConfig = Game.config.unlock.getConfig(this.menuId);
                if (unlockConfig) {
                    return unlockConfig.touch_txt;
                }
                return Games.TEXT.Lock;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(MenuConfig.prototype, "lockVisiable", {
            /**
             * 锁住情况下是否显示
             */
            get: function () {
                var unlockConfig = Game.config.unlock.getConfig(this.menuId);
                if (unlockConfig) {
                    return unlockConfig.icon_type == 1;
                }
                return true;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(MenuConfig.prototype, "enableOpen", {
            /**
             * 是否可以打开
             */
            get: function () {
                return Games.MenuValidateEnableOpen.getInstance().validate(this.menuId);
            },
            enumerable: true,
            configurable: true
        });
        /**
         * 前往
         */
        MenuConfig.prototype.openMenu = function () {
            if (this.menuId < MenuId.SubMenuButtonBegin) {
                if (!this.isUnlock) {
                    Game.system.toastText(this.lockText);
                    return false;
                }
                if (!Games.MenuWindows.get(this.menuId)) {
                    Game.system.toastText(Games.TEXT.Disable);
                    return false;
                }
                if (this.enableOpen) {
                    Game.menu.open(this.menuId);
                    return true;
                }
            }
            return false;
        };
        return MenuConfig;
    }(configs.MenuConfigStruct));
    configs.MenuConfig = MenuConfig;
})(configs || (configs = {}));
//# sourceMappingURL=MenuConfig.js.map