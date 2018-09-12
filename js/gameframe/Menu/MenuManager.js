var Games;
(function (Games) {
    //=================
    // 模块管理器
    //------------------
    var MenuManager = /** @class */ (function () {
        function MenuManager() {
            this.dict = new Dictionary();
            this.list = [];
            this.stack = [];
        }
        // 初始化
        MenuManager.prototype.install = function () {
        };
        // 获取模块控制器
        MenuManager.prototype.getMenuCtl = function (menuId) {
            return this.dict.getValue(menuId);
        };
        // 销毁
        MenuManager.prototype.destory = function (menuId) {
            var ctl = this.getMenuCtl(menuId);
            if (ctl) {
                if (ctl.state == Games.MenuCtlStateType.Opened) {
                    ctl.close();
                    setTimeout(function () {
                        ctl.destory();
                    }, 100);
                }
                else {
                    ctl.destory();
                }
            }
        };
        // 打开模块的tab面板
        MenuManager.prototype.openTab = function (menuId, tabIndex) {
            var args = [];
            for (var _i = 2; _i < arguments.length; _i++) {
                args[_i - 2] = arguments[_i];
            }
            return this._open(menuId, { openType: Games.MenuOpenType.Tab, openIndex: tabIndex, args: args });
        };
        // 打开模块的子窗口
        MenuManager.prototype.openSubWindow = function (menuId, subwindowIndex) {
            var args = [];
            for (var _i = 2; _i < arguments.length; _i++) {
                args[_i - 2] = arguments[_i];
            }
            return this._open(menuId, { openType: Games.MenuOpenType.Subwindow, openIndex: subwindowIndex, args: args });
        };
        // 打开模块
        MenuManager.prototype.open = function (menuId) {
            var args = [];
            for (var _i = 1; _i < arguments.length; _i++) {
                args[_i - 1] = arguments[_i];
            }
            return this._open(menuId, { openType: Games.MenuOpenType.None, openIndex: 0, args: args });
        };
        // 打开模块使用menuIndexId
        MenuManager.prototype.openByMenuIndexId = function (menuIndexId) {
            var args = [];
            for (var _i = 1; _i < arguments.length; _i++) {
                args[_i - 1] = arguments[_i];
            }
            var indexConfig = Game.config.menuIndex.getConfig(menuIndexId);
            if (indexConfig) {
                switch (indexConfig.openType) {
                    case Games.MenuOpenType.Subwindow:
                        this.openSubWindow.apply(this, [indexConfig.menuId, indexConfig.menuIndex].concat(args));
                        break;
                    case Games.MenuOpenType.Tab:
                        this.openTab.apply(this, [indexConfig.menuId, indexConfig.menuIndex].concat(args));
                        break;
                    default:
                        this.open.apply(this, [indexConfig.menuId].concat(args));
                        break;
                }
            }
            else {
                var menuConfig = Game.config.menu.getConfig(menuIndexId);
                if (menuConfig) {
                    this.open.apply(this, [menuIndexId].concat(args));
                }
            }
        };
        //打开主界面
        MenuManager.prototype.openHome = function () {
            var home = this.getMenuCtl(Games.MenuId.Home);
            // if (!home || home.state != MenuCtlStateType.Opened)
            // {
            //     this.open(MenuId.Home);
            // }
            if (!home || home.state != Games.MenuCtlStateType.Opened) {
                home = this.open(Games.MenuId.Home);
            }
            if (home.moduleWindow.contentPane && !home.moduleWindow.contentPane.visible) {
                home.moduleWindow.contentPane.visible = true;
            }
        };
        //关闭主界面
        MenuManager.prototype.closeHome = function () {
            var home = this.getMenuCtl(Games.MenuId.Home);
            if (home && home.moduleWindow && home.moduleWindow.contentPane) {
                home.moduleWindow.contentPane.visible = false;
            }
        };
        // 打开模块
        MenuManager.prototype._open = function (menuId, parametar) {
            var ctl = this.getMenuCtl(menuId);
            if (!ctl) {
                var menuConfig = Game.config.menu.getConfig(menuId);
                if (!menuConfig) {
                    error("MenuManager.open \u6CA1\u6709\u627E\u5230menuConfig, menuId=" + menuId);
                    return null;
                }
                var menuWindowConfig = Games.MenuWindows.get(menuId);
                if (!menuWindowConfig) {
                    error("MenuManager.open \u6CA1\u6709\u627E\u5230menuWindowConfig, menuId=" + menuId);
                    return null;
                }
                if (!menuWindowConfig.windowClass) {
                    error("MenuManager.open menuWindowConfig.windowClass=" + menuWindowConfig.windowClass + ", menuId=" + menuId);
                    return null;
                }
                ctl = new Games.MenuCtl();
                ctl.__menuManager = this;
                ctl.menuId = menuId;
                ctl.menuConfig = menuConfig;
                ctl.menuWindowConfig = menuWindowConfig;
                this.dict.add(menuId, ctl);
                if (ctl.menuId != Games.MenuId.Home)
                    this.list.push(ctl);
            }
            ctl.open(parametar);
            var index = this.stack.indexOf(ctl);
            if (index != -1)
                this.stack.splice(index, 1);
            this.stack.push(ctl);
            //
            return ctl;
        };
        // 返回
        MenuManager.prototype.back = function (menuId) {
            var _this = this;
            var ctl = this.getMenuCtl(menuId);
            if (ctl) {
                var backMenuId = ctl.backMenuId;
                if (backMenuId > 0) {
                    var backMenuCtl = this.getMenuCtl(backMenuId);
                    if (backMenuCtl) {
                        backMenuCtl.backExcludeMenuIdMenuId = menuId;
                        var openParametar = backMenuCtl.moduleWindow ? backMenuCtl.moduleWindow.getLastMenuParameter() : null;
                        if (!openParametar) {
                            openParametar = backMenuCtl.openParametar;
                        }
                        this._open(backMenuId, openParametar);
                    }
                }
                setTimeout(function () {
                    _this.close(menuId);
                }, 100);
            }
        };
        // 关闭模块
        MenuManager.prototype.close = function (menuId) {
            var ctl = this.getMenuCtl(menuId);
            if (ctl) {
                ctl.closeIsDestory = true;
                ctl.close();
            }
        };
        MenuManager.prototype.__onMenuClose = function (ctl) {
            for (var i = this.stack.length - 1; i >= 0; i--) {
                if (this.stack[i] == ctl)
                    this.stack.splice(i, 1);
            }
            var openedNum = 0;
            var sameLayoutOpenedNum = 0;
            var moduleOpenedNum = 0;
            for (var _i = 0, _a = this.list; _i < _a.length; _i++) {
                var item = _a[_i];
                if (item.menuId == ctl.menuId)
                    continue;
                switch (item.state) {
                    case Games.MenuCtlStateType.Opened:
                        openedNum++;
                        if (item.menuConfig.menuLayer == ctl.menuConfig.menuLayer) {
                            sameLayoutOpenedNum++;
                        }
                        if (item.menuConfig.menuLayer == Games.MenuLayerType.Module) {
                            moduleOpenedNum++;
                        }
                        break;
                }
            }
            console.log("\u5173\u95ED\u9762\u677F " + ctl.menuConfig.zh_cn_name + " ( " + ctl.menuConfig.moduleName + ")  :\" + openedNum=" + openedNum + ", sameLayoutOpenedNum=" + sameLayoutOpenedNum + ", moduleOpenedNum=" + moduleOpenedNum);
            if (moduleOpenedNum == 0 && ctl.menuConfig.isAutoOpenHomeWindow) {
                var home = this.getMenuCtl(Games.MenuId.Home);
                // if (!home || home.state != MenuCtlStateType.Opened)
                // {
                //     this.open(MenuId.Home);
                // }
                if (!home || home.state != Games.MenuCtlStateType.Opened) {
                    home = this.open(Games.MenuId.Home);
                }
                if (home.moduleWindow.contentPane && !home.moduleWindow.contentPane.visible) {
                    home.moduleWindow.contentPane.visible = true;
                }
            }
            ctl.__delayClose();
        };
        // 获取最后打开的面板
        MenuManager.prototype.getLastOpenMenuId = function () {
            if (this.stack.length > 0) {
                return this.stack[this.stack.length - 1].menuId;
            }
            return -1;
        };
        // 获取最后打开的模块面板ID
        MenuManager.prototype.getLastModuleOpenMenuId = function (excludeMenuId) {
            for (var i = this.stack.length - 1; i >= 0; i--) {
                var ctl = this.stack[i];
                if (ctl.menuConfig.menuLayer == Games.MenuLayerType.Module) {
                    if (excludeMenuId && excludeMenuId.indexOf(ctl.menuId) != -1) {
                        continue;
                    }
                    return ctl.menuId;
                }
            }
            return -1;
        };
        // 获取模块是否打开        
        MenuManager.prototype.isOpened = function (menuId) {
            var result = false;
            var ctl = this.getMenuCtl(menuId);
            if (ctl && ctl.state == Games.MenuCtlStateType.Opened) {
                if (ctl.menuId == Games.MenuId.Home) {
                    result = ctl.moduleWindow.contentPane.visible;
                }
                else {
                    result = true;
                }
            }
            return result;
        };
        // 是否打开子面板或者Tab
        MenuManager.prototype.isOpenedSubOrTab = function (menuId, index) {
            if (!this.isOpened(menuId)) {
                return false;
            }
            var ctl = this.getMenuCtl(menuId);
            if (ctl) {
                return ctl.moduleWindow.isOpenSubOrTab(index);
            }
            return false;
        };
        /** 获取模块子窗口 */
        MenuManager.prototype.getSubWindow = function (menuId, index) {
            if (!this.isOpened(menuId)) {
                return null;
            }
            var ctl = this.getMenuCtl(menuId);
            if (ctl) {
                return ctl.moduleWindow.getSubwindow(index);
            }
            return null;
        };
        /** 检测销毁模块 */
        MenuManager.prototype.onTick = function () {
            for (var i = 0; i < this.list.length; i++) {
                var ctl = this.list[i];
                if (ctl.state == Games.MenuCtlStateType.Closed) {
                    if (ctl.menuConfig.cacheTime != -1) {
                        var subtime = Game.time.localTime - ctl.closeTime;
                        if (subtime >= ctl.menuConfig.cacheTime && ctl.closeIsDestory) {
                            ctl.destory();
                        }
                    }
                }
            }
        };
        return MenuManager;
    }());
    Games.MenuManager = MenuManager;
})(Games || (Games = {}));
//# sourceMappingURL=MenuManager.js.map