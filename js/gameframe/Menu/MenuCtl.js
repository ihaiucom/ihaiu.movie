var Games;
(function (Games) {
    // 菜单控制器
    var MenuCtl = /** @class */ (function () {
        function MenuCtl() {
            // 返回菜单ID
            this.backMenuId = -1;
            // 返回菜单ID排除
            this.backExcludeMenuIdMenuId = -1;
            // 关闭时间
            this.closeTime = 0;
            // 此次关闭是否销毁
            this.closeIsDestory = true;
        }
        // 打开
        MenuCtl.prototype.open = function (parametar) {
            this.openParametar = parametar;
            if (!this.moduleWindow) {
                this.moduleWindow = new this.menuWindowConfig.windowClass();
                this.moduleWindow.menuId = this.menuId;
                this.moduleWindow.name = this.menuConfig.name;
                this.moduleWindow.windowContainer = Games.MenuLayer.getLayer(this.menuConfig.menuLayer);
            }
            this.load();
        };
        // 关闭
        MenuCtl.prototype.close = function () {
            if (this.state == Games.MenuCtlStateType.Closed || this.state == Games.MenuCtlStateType.Destoryed)
                return;
            this.__menuManager.__onMenuClose(this);
        };
        // 延时关闭，等把主界面打开再关闭
        MenuCtl.prototype.__delayClose = function () {
            this.backMenuId = -1;
            if (this.moduleWindow && this.moduleWindow.menuIsCreated) {
                Game.event.dispatch(GameEventKey.GameFrame_CloseMenu, this.moduleWindow.menuId);
                this.moduleWindow.onMenuClose();
                this.closeTime = Game.time.localTime;
            }
            this.state = Games.MenuCtlStateType.Closed;
            // this.destory();
        };
        // 销毁
        MenuCtl.prototype.destory = function () {
            if (this.moduleWindow) {
                this.moduleWindow.sShowComplete.remove(this.closeOther, this);
                this.moduleWindow.destory();
                this.moduleWindow = null;
            }
            this.state = Games.MenuCtlStateType.Destoryed;
        };
        // 加载资源
        MenuCtl.prototype.load = function () {
            this.state = Games.MenuCtlStateType.Loading;
            var list = this.getLoadAssets();
            if (!list || list.length == 0) {
                this.loadBeginTime = 0;
                this.onLoadComplete();
            }
            else {
                this.loadBeginTime = Game.time.localTime;
                // 打开加载面板
                var loaderCtl_1 = Game.loader.open(this.menuConfig.menuLoaderId);
                loaderCtl_1.setMax(list.length);
                loaderCtl_1.setProgress(0);
                var onProgress = function (rate, current, max, assetItemInfo) {
                    loaderCtl_1.setProgress(current);
                };
                Game.asset.loadList(list, this, this.onLoadComplete, onProgress);
            }
        };
        // 加载完成
        MenuCtl.prototype.onLoadComplete = function () {
            this.setShow();
            Game.loader.close(this.menuConfig.menuLoaderId);
            if (this.loadBeginTime > 0)
                console.log("加载界面花费时间 (" + this.menuConfig.moduleName + ") :" + (Game.time.localTime - this.loadBeginTime) + " 毫秒");
        };
        // 获取模块资源列表
        MenuCtl.prototype.getLoadAssets = function () {
            var list = [];
            var dict = new Dictionary();
            if (!this.moduleWindow.menuIsCreated) {
                this.moduleWindow.getLoadAssets(list, dict);
            }
            this.moduleWindow.generateAssetsForDynmic();
            this.moduleWindow.getLoadAssetsForDynamic(list, dict);
            return list;
        };
        // 设置显示
        MenuCtl.prototype.setShow = function () {
            if (!this.moduleWindow) {
                console.warn("\u8BBE\u7F6E\u663E\u793A \u4F46\u662F\u6A21\u5757\u5DF2\u9500\u6BC1 " + this.menuConfig.name + "(" + this.menuConfig.moduleName + "): " + this.menuId);
                return;
            }
            console.log("\u8BBE\u7F6E\u663E\u793A\u9762\u677F " + this.menuConfig.name + "(" + this.menuConfig.moduleName + "): " + this.menuId);
            this.moduleWindow.sShowComplete.addOnce(this.closeOther, this);
            this.moduleWindow.sShowSubwindowComplete.addOnce(this.closeOther, this);
            this.state = Games.MenuCtlStateType.Opened;
            if (this.moduleWindow.menuIsCreated) {
                this.moduleWindow.onMenuOpen(this.openParametar);
            }
            else {
                this.moduleWindow.menuParameter = this.openParametar;
            }
            this.moduleWindow.menuShow(this.moduleWindow.windowContainer);
            switch (this.menuId) {
                case Games.MenuId.Login:
                    Game.sound.playMusic(SoundKey.MM_BGM_Cinema);
                    break;
                case Games.MenuId.Home:
                    Game.sound.playMusic(SoundKey.MM_BGM_Cinema);
                    break;
            }
        };
        MenuCtl.prototype.setCloseDontDestory = function () {
        };
        // 关闭其他模块
        MenuCtl.prototype.closeOther = function () {
            var homeIsOpen = this.__menuManager.isOpened(Games.MenuId.Home);
            // 设置返回MenuID
            var backMenuId = this.__menuManager.getLastModuleOpenMenuId([this.backExcludeMenuIdMenuId, this.menuId]);
            var hasCloseOtherMenu = false;
            var list = Game.menu.dict.getValues();
            switch (this.menuConfig.menuCloseOtherType) {
                // 不关闭任何面板
                case Games.MenuCloseOtherType.None:
                    break;
                // 除自己外的所有
                case Games.MenuCloseOtherType.ExceptSelf_All:
                    for (var i = 0; i < list.length; i++) {
                        var ctl = list[i];
                        if (ctl.menuId == Games.MenuId.Home)
                            continue;
                        if (ctl != this) {
                            ctl.closeIsDestory = homeIsOpen;
                            ctl.close();
                            hasCloseOtherMenu = true;
                        }
                    }
                    break;
                // 除自己外的所有模块层级面板
                case Games.MenuCloseOtherType.ExceptSelf_Module:
                    for (var i = 0; i < list.length; i++) {
                        var ctl = list[i];
                        if (ctl != this && ctl.menuConfig.menuLayer == Games.MenuLayerType.Module) {
                            ctl.closeIsDestory = homeIsOpen;
                            ctl.close();
                            hasCloseOtherMenu = true;
                        }
                    }
                    break;
                // 相同层级的其他面板
                case Games.MenuCloseOtherType.ExceptSelf_SameLayer:
                    for (var i = 0; i < list.length; i++) {
                        var ctl = list[i];
                        if (ctl.menuId == Games.MenuId.Home)
                            continue;
                        if (ctl != this && ctl.menuConfig.menuLayer == this.menuConfig.menuLayer) {
                            ctl.closeIsDestory = homeIsOpen;
                            ctl.close();
                            hasCloseOtherMenu = true;
                        }
                    }
                    break;
            }
            if (this.menuConfig.closeHomeWindow) {
                // this.__menuManager.close(MenuId.Home);
                var home = this.__menuManager.getMenuCtl(Games.MenuId.Home);
                if (home && home.moduleWindow) {
                    var homeWindow = home.moduleWindow;
                    if (homeWindow) {
                        homeWindow.setHomeHide();
                    }
                }
            }
            this.backMenuId = hasCloseOtherMenu ? backMenuId : -1;
        };
        return MenuCtl;
    }());
    Games.MenuCtl = MenuCtl;
})(Games || (Games = {}));
//# sourceMappingURL=MenuCtl.js.map