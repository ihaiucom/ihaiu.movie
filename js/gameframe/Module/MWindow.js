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
var Games;
(function (Games) {
    //======================
    // 模块窗口
    //----------------------
    var MWindow = /** @class */ (function (_super) {
        __extends(MWindow, _super);
        function MWindow() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            // 消息--显示完成
            _this.sShowComplete = new Signal();
            // 消息--隐藏完成
            _this.sHideComplete = new Signal();
            // 是否初始化视图
            _this.menuIsCreated = false;
            // 是否已经销毁
            _this.isDestoryed = false;
            // 是否可以出现显示过度动画
            _this.enableShowAnimation = true;
            // 是否显示需要发消息
            _this.enableShowSignal = true;
            // 是否隐藏需要发消息
            _this.enableHideSignal = true;
            /*------------------------------- 我是漂亮的分割线 ----------------------------------------- */
            // 依赖资源列表
            _this._loadAssets = [];
            /*------------------------------- 我是漂亮的分割线 ----------------------------------------- */
            // 动态资源列表
            _this._dynamicAssetsList = [];
            _this.toPoint = new Point();
            _this.srcPoint = new Point();
            /*------------------------------- 我是漂亮的分割线 ----------------------------------------- */
            // 消息--显示完成
            _this.sShowSubwindowComplete = new Signal();
            // 消息--隐藏完成
            _this.sHideSubwindowComplete = new Signal();
            // 子窗口字典
            _this.subwindowDict = new Dictionary();
            // 打开子窗口栈
            _this.subwindowStack = [];
            /*------------------------------- 我是漂亮的分割线 ----------------------------------------- */
            // Tab字典
            _this.tabDict = new Dictionary();
            // Tab历史记录
            _this.tabHistorys = [];
            return _this;
        }
        // 是否打开子面板或者Tab
        MWindow.prototype.isOpenSubOrTab = function (index) {
            return this.menuParameter.openIndex == index;
        };
        // 添加依赖资源--fgui 包名
        MWindow.prototype.addAssetForFguiPackagename = function (packagename) {
            this._loadAssets.push({ url: packagename, type: Games.AssetItemType.FguiPackage });
        };
        // 添加依赖资源--组件
        MWindow.prototype.addAssetForFguiComponent = function (fguiCom) {
            var names = fguiCom["DependPackages"];
            for (var i = 0; i < names.length; i++) {
                this.addAssetForFguiPackagename(names[i]);
            }
        };
        // 获取资源加载列表
        MWindow.prototype.getLoadAssets = function (list, dict) {
            var assets = this._loadAssets;
            for (var i = 0; i < assets.length; i++) {
                var key = getAssetItemKey(assets[i]);
                if (!dict.hasKey(key)) {
                    list.push(assets[i]);
                    dict.add(key, assets[i]);
                }
            }
            return list;
        };
        /*------------------------------- 我是漂亮的分割线 ----------------------------------------- */
        MWindow.prototype.unloadAssetForFguiPackagename = function (packagename) {
            switch (packagename) {
                case Games.GuiPackageNames.Common:
                case Games.GuiPackageNames.Fx:
                case Games.GuiPackageNames.LangEn:
                case Games.GuiPackageNames.LangZhCn:
                case Games.GuiPackageNames.Sound:
                case Games.GuiPackageNames.System:
                case Games.GuiPackageNames.PfSkin:
                case Games.GuiPackageNames.PlayerInfo:
                case Games.GuiPackageNames.Guide:
                case Games.GuiPackageNames.MainUI:
                case Games.GuiPackageNames.WarMovie:
                    return;
            }
            Game.asset.unloadFgui(packagename);
        };
        // 卸载依赖资源--组件
        MWindow.prototype.unloadAssetForFguiComponent = function (fguiCom) {
            var names = fguiCom["DependPackages"];
            for (var i = 0; i < names.length; i++) {
                this.unloadAssetForFguiPackagename(names[i]);
            }
        };
        // 下周依赖资源--初始化时加载的
        MWindow.prototype.unloadAssetFroAssetList = function () {
            for (var i = 0; i < this._loadAssets.length; i++) {
                this.unloadAssetForFguiPackagename(this._loadAssets[i].url);
            }
        };
        // 添加动态资源
        MWindow.prototype.addDynamicAsset = function (assetItem) {
            if (assetItem)
                this._dynamicAssetsList.push(assetItem);
        };
        // 添加动态资源--AvatarConfig里的所有
        MWindow.prototype.addDynmicAssetForAvatarAll = function (avatarConfig) {
            avatarConfig.getAllAssset(this._dynamicAssetsList);
        };
        // 生成动态预加载资源
        MWindow.prototype.generateAssetsForDynmic = function () {
            this._dynamicAssetsList = [];
        };
        // 获取动态资源加载列表
        MWindow.prototype.getLoadAssetsForDynamic = function (list, dict) {
            var assets = this._dynamicAssetsList;
            for (var i = 0; i < assets.length; i++) {
                var key = getAssetItemKey(assets[i]);
                if (!dict.hasKey(key)) {
                    list.push(assets[i]);
                    dict.add(key, assets[i]);
                }
            }
            var subwindows = this.subwindowDict.getValues();
            for (var i = 0; i < subwindows.length; i++) {
                subwindows[i].getLoadAssetsForDynamic(list, dict);
            }
            return list;
        };
        /*------------------------------- 我是漂亮的分割线 ----------------------------------------- */
        // fgui 初始化视图
        MWindow.prototype.onInit = function () {
            this.onMenuCreate();
            _super.prototype.onInit.call(this);
        };
        // 菜单创建
        MWindow.prototype.onMenuCreate = function () {
            // 在该位置实例化显示对象
            // 如果需要创建Tab, 可以在该位置设置
            this.setChildWindow(this.contentPane);
            this.callChildOnWindowInited(this.contentPane);
            this.menuIsCreated = true;
            this.onMenuOpen(this.menuParameter);
        };
        // 菜单打开事件，传递参数
        MWindow.prototype.onMenuOpen = function (parameter) {
            this.enableShowSignal = true;
            this.enableShowAnimation = true;
            this.menuParameter = parameter;
            switch (parameter.openType) {
                // 打开子窗口
                case Games.MenuOpenType.Subwindow:
                    this.enableShowSignal = false;
                    this.enableShowAnimation = false;
                    this.openSubwindowByIndex.apply(this, [parameter.openIndex, false].concat(parameter.args));
                    break;
                // 打开Tab
                case Games.MenuOpenType.Tab:
                    this.openTab(parameter.openIndex);
                    break;
                default:
                    Game.event.dispatch(GameEventKey.GameFrame_OpenMenu, this.menuId, parameter.openType);
                    break;
            }
        };
        // 窗口显示        
        MWindow.prototype.windowShow = function () {
            if (this.windowContainer)
                this.showOn(this.windowContainer);
            else
                this.show();
        };
        // 菜单显示
        MWindow.prototype.menuShow = function (root) {
            switch (this.menuParameter.openType) {
                // 打开子窗口
                case Games.MenuOpenType.Subwindow:
                    if (!this.contentPane)
                        this.onInit();
                    break;
                default:
                    this.showOn(root);
                    break;
            }
        };
        // 关闭
        MWindow.prototype.menuClose = function () {
            Game.menu.close(this.menuId);
        };
        // 返回, 到之前打开该模块的面板
        MWindow.prototype.menuBack = function () {
            Game.menu.back(this.menuId);
        };
        // 销毁
        MWindow.prototype.destory = function () {
            this.callChildOnWindowDestory(this.contentPane);
            this.onMenuDestory();
            this.sShowComplete.removeAll();
            this.sHideComplete.removeAll();
            this.sShowSubwindowComplete.removeAll();
            this.sHideSubwindowComplete.removeAll();
            this.tabDict.clear();
            var list = this.subwindowDict.getValues();
            for (var i = 0; i < list.length; i++) {
                var item = list[i];
                item.destory();
            }
            this.subwindowDict.clear();
            if (this.contentPane) {
                this.contentPane.dispose();
                this.contentPane = null;
            }
            this.unloadAssetFroAssetList();
            _super.prototype.dispose.call(this);
            this.isDestoryed = true;
        };
        // 菜单管理调的销毁
        MWindow.prototype.onMenuDestory = function () {
        };
        MWindow.prototype.doShowAnimation = function () {
            var _this = this;
            this.onWindowWillShow();
            if (this.openAnimation == 1) {
                this.srcPoint.x = this.panel.x;
                this.srcPoint.y = this.panel.y;
                this.panel.setScale(0.1, 0.1);
                this.calBuutonPos();
                this.panel.setXY(this.toPoint.x, this.toPoint.y);
                laya.utils.Tween.to(this.panel, { scaleX: 1, scaleY: 1, x: this.srcPoint.x, y: this.srcPoint.y }, 300, laya.utils.Ease.quadOut, Handler.create(this, function () {
                    _this.onShown();
                }));
            }
            else {
                _super.prototype.doShowAnimation.call(this);
            }
        };
        Object.defineProperty(MWindow.prototype, "panel", {
            get: function () {
                if (this.contentPane["m_panel"]) {
                    return this.contentPane["m_panel"];
                }
                return this.contentPane;
            },
            enumerable: true,
            configurable: true
        });
        MWindow.prototype.doHideAnimation = function () {
            var _this = this;
            this.onWindowWillHide();
            if (this.closeAnimation == 1) {
                this.panel.setScale(1, 1);
                this.calBuutonPos();
                laya.utils.Tween.to(this.panel, { scaleX: 0.1, scaleY: 0.1, x: this.toPoint.x, y: this.toPoint.y }, 300, laya.utils.Ease.quadOut, Handler.create(this, function () {
                    _this.panel.x = _this.srcPoint.x;
                    _this.panel.y = _this.srcPoint.y;
                    _this.hideImmediately();
                }));
            }
            else {
                _super.prototype.doHideAnimation.call(this);
            }
        };
        Object.defineProperty(MWindow.prototype, "openAnimation", {
            get: function () {
                if (this.menuConfig == null) {
                    return 0;
                }
                return this.menuConfig.openAnimation;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(MWindow.prototype, "closeAnimation", {
            get: function () {
                if (this.menuConfig == null) {
                    return 0;
                }
                return this.menuConfig.closeAnimation;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(MWindow.prototype, "menuConfig", {
            get: function () {
                if (this.menuId > 0) {
                    return Game.config.menu.getConfig(this.menuId);
                }
                return null;
            },
            enumerable: true,
            configurable: true
        });
        MWindow.prototype.calBuutonPos = function () {
            var btn = Game.moduleModel.func.getMenuCtrlByMenuId(this.menuId);
            if (btn) {
                var p = btn.getGlobalPos();
                this.toPoint.x = p.x;
                this.toPoint.y = p.y;
            }
            else {
                this.toPoint.x = ScreenSetting.screenWidth >> 1;
                this.toPoint.y = ScreenSetting.screenHeight >> 1;
            }
        };
        // protected doShowAnimation()
        // {
        //     this.onWindowWillShow();
        //     super.doShowAnimation();
        // }
        // protected doHideAnimation()
        // {
        //     this.onWindowWillHide();
        //     super.doHideAnimation();
        // }
        MWindow.prototype.onShown = function () {
            this.panel.setScale(1, 1);
            this.enableHideSignal = true;
            this.onShowComplete();
            if (this.contentPane) {
                this.callChildOnWindowShow(this.contentPane);
            }
        };
        // 菜单管理器调的关闭
        MWindow.prototype.onMenuClose = function () {
            this.hide();
            var list = this.subwindowDict.getValues();
            for (var i = 0; i < list.length; i++) {
                var item = list[i];
                item.hide();
            }
        };
        MWindow.prototype.onHide = function () {
            this.enableShowSignal = true;
            this.onHideComplete();
            this.clearTabHistorys();
            if (this.contentPane) {
                this.callChildOnWindowHide(this.contentPane);
            }
        };
        //=========================
        // 显示完成
        // 可以在这里添加协议消息监听
        //-------------------------
        MWindow.prototype.onShowComplete = function () {
            if (this.enableShowSignal) {
                this.sShowComplete.dispatch();
            }
        };
        //=========================
        // 隐藏完成
        // 可以在这里移除协议消息监听
        //-------------------------
        MWindow.prototype.onHideComplete = function () {
            if (this.enableHideSignal) {
                this.sHideComplete.dispatch();
            }
        };
        // 获取子窗口
        MWindow.prototype.getSubwindow = function (subwindowIndex) {
            return this.subwindowDict.getValue(subwindowIndex);
        };
        // 注册子窗口
        MWindow.prototype.registerSubwindow = function (subwindow) {
            this.subwindowDict.add(subwindow.subwindowIndex, subwindow);
        };
        // 关闭子窗口消息        
        MWindow.prototype.__onSubWindowClose = function (subwindow) {
            for (var i = this.subwindowStack.length - 1; i >= 0; i--) {
                if (this.subwindowStack[i] == subwindow)
                    this.subwindowStack.splice(i, 1);
            }
        };
        // 获取最后打开的子面板
        MWindow.prototype.__getLastOpenSubWindow = function (excludeSubwindow) {
            for (var i = this.subwindowStack.length - 1; i >= 0; i--) {
                var ctl = this.subwindowStack[i];
                if (excludeSubwindow && excludeSubwindow.indexOf(ctl) != -1) {
                    continue;
                }
                return ctl;
            }
            return null;
        };
        // 关闭所有子窗口
        MWindow.prototype.closeAllSubwindowSelf = function (excludeSubwindow) {
            var list = [];
            for (var i = this.subwindowStack.length - 1; i >= 0; i--) {
                list.push(this.subwindowStack[i]);
            }
            for (var i = 0; i < list.length; i++) {
                var ctl = list[i];
                if (excludeSubwindow && excludeSubwindow.indexOf(ctl) != -1) {
                    continue;
                }
                ctl.closeSelf();
            }
        };
        // 关闭最后的子窗口
        MWindow.prototype.closeLastSubwindowSelf = function () {
            var subWindow = this.__getLastOpenSubWindow();
            if (subWindow) {
                subWindow.closeSelf();
            }
        };
        // 获取最后的menuParameter
        MWindow.prototype.getLastMenuParameter = function () {
            var subWindow = this.__getLastOpenSubWindow();
            if (subWindow) {
                return subWindow.menuParameter;
            }
            else {
                return this.menuParameter;
            }
        };
        // 打开子窗口
        MWindow.prototype.openSubwindow = function (subwindow, dontCloseOther) {
            var _this = this;
            if (dontCloseOther === void 0) { dontCloseOther = false; }
            var args = [];
            for (var _i = 2; _i < arguments.length; _i++) {
                args[_i - 2] = arguments[_i];
            }
            subwindow.__backSubWindow = this.__getLastOpenSubWindow([subwindow]);
            this.menuParameter.openType = Games.MenuOpenType.Subwindow;
            this.menuParameter.openIndex = subwindow.subwindowIndex;
            this.menuParameter.args = args;
            var menuParmeter = {
                openType: this.menuParameter.openType,
                openIndex: this.menuParameter.openIndex,
                args: args,
                dontCloseOther: dontCloseOther
            };
            if (!dontCloseOther) {
                var caller = {
                    on: function () {
                        if (subwindow.whenOpenCloseMainwindow) {
                            _this.enableHideSignal = false;
                            _this.hideImmediately();
                        }
                        if (subwindow.whenOpenCloseOthersubwindow) {
                            var list = _this.subwindowDict.getValues;
                            for (var i = 0; i < list.length; i++) {
                                var item = list[i];
                                if (item != subwindow) {
                                    item.hideImmediately();
                                    _this.__onSubWindowClose(item);
                                }
                            }
                        }
                        _this.sShowSubwindowComplete.dispatch();
                    }
                };
                subwindow.sShowComplete.addOnce(caller.on, caller);
            }
            var index = this.subwindowStack.indexOf(subwindow);
            if (index != -1)
                this.subwindowStack.splice(index, 1);
            this.subwindowStack.push(subwindow);
            if (subwindow.menuIsCreated) {
                subwindow.onMenuOpen(menuParmeter);
            }
            else {
                subwindow.menuParameter = menuParmeter;
            }
            subwindow.showOn(this.windowContainer);
            Game.event.dispatch(GameEventKey.GameFrame_OpenMenu, this.menuId, menuParmeter.openType, menuParmeter.openIndex);
        };
        // 打开子窗口, 使用索引
        MWindow.prototype.openSubwindowByIndex = function (subwindowIndex, dontCloseOther) {
            if (dontCloseOther === void 0) { dontCloseOther = false; }
            var args = [];
            for (var _i = 2; _i < arguments.length; _i++) {
                args[_i - 2] = arguments[_i];
            }
            var subwindow = this.getSubwindow(subwindowIndex);
            this.openSubwindow.apply(this, [subwindow, dontCloseOther].concat(args));
        };
        // 子窗口返回到主窗口
        MWindow.prototype.onSubwindowBack = function (subwindow) {
            this.menuParameter.openType = Games.MenuOpenType.None;
            this.menuParameter.openIndex = 0;
            this.sShowComplete.addOnce(function () {
                subwindow.hide();
            }, subwindow);
            if (this.windowContainer.parent) {
                subwindow.hide();
            }
            this.showOn(this.windowContainer);
            this.subwindowStack = [];
        };
        // 获取Tab的显示对象列表
        MWindow.prototype.getTabDispyaObjects = function (tabIndex) {
            if (this.tabDict.hasKey(tabIndex)) {
                return this.tabDict.getValue(tabIndex);
            }
            var list = [];
            this.tabDict.add(tabIndex, list);
            return list;
        };
        // 注册Tab内容
        MWindow.prototype.registerTab = function (tabIndex, displayObject) {
            var list = this.getTabDispyaObjects(tabIndex);
            list.push(displayObject);
        };
        // 设置Tab，显示或者隐藏
        MWindow.prototype.setTabVisiable = function (tabIndex, visiable) {
            var list = this.getTabDispyaObjects(tabIndex);
            for (var i = 0; i < list.length; i++) {
                if (visiable) {
                    this.callChildOnTabShow(list[i]);
                }
                else if (list[i].visible) {
                    this.callChildOnTabHide(list[i]);
                }
                list[i].visible = visiable;
            }
        };
        MWindow.prototype.setOpenTab = function (tabIndex) {
            this.menuParameter.openIndex = tabIndex;
            var keys = this.tabDict.getKeys();
            for (var i = 0; i < keys.length; i++) {
                if (keys[i] != tabIndex) {
                    this.setTabVisiable(keys[i], false);
                }
            }
            this.setTabVisiable(tabIndex, true);
            this.onOpenTab(tabIndex);
        };
        // 打开Tab
        MWindow.prototype.openTab = function (tabIndex) {
            this.tabHistorys.push(tabIndex);
            this.setOpenTab(tabIndex);
            Game.event.dispatch(GameEventKey.GameFrame_OpenMenu, this.menuId, Games.MenuOpenType.Tab, tabIndex);
        };
        // 如果需要处理额外的业务，可以重新该方法
        MWindow.prototype.onOpenTab = function (tabIndex) {
        };
        // 返回上一次Tab
        MWindow.prototype.backTab = function () {
            if (this.tabHistorys.length > 0) {
                // this.tabHistorys = this.tabHistorys.filter((id)=>{return id != this.menuParameter.openIndex});
                // if(this.tabHistorys.length > 0)
                // {
                //     let index = this.tabHistorys[0];
                //     this.tabHistorys = this.tabHistorys.filter((id)=>{return id != index});
                //     this.menuParameter.openIndex = index;
                //     this.setOpenTab(index);
                // }
                var lastIndex = void 0;
                for (var i = this.tabHistorys.length - 1; i >= 0; i--) {
                    if (this.tabHistorys[i] == this.menuParameter.openIndex) {
                        if (i > 0) {
                            if (this.tabHistorys[i - 1] != this.menuParameter.openIndex) {
                                lastIndex = this.tabHistorys[i - 1];
                            }
                        }
                    }
                }
                if (lastIndex === undefined) {
                    this.menuBack();
                }
                else {
                    this.openTab(lastIndex);
                }
            }
        };
        // 清除Tab历史记录
        MWindow.prototype.clearTabHistorys = function () {
            this.tabHistorys = [];
        };
        /*------------------------------- 我是漂亮的分割线 ----------------------------------------- */
        //=========================
        // 设置child.moduleWindow
        //-------------------------
        MWindow.prototype.setChildWindow = function (com) {
            if (com) {
                com["moduleWindow"] = this;
                if (com._children) {
                    for (var i = 0; i < com._children.length; i++) {
                        this.setChildWindow(com._children[i]);
                    }
                }
            }
        };
        //=========================
        // 设置child.onWindowInited
        //-------------------------
        MWindow.prototype.callChildOnWindowInited = function (com) {
            if (com) {
                var fun = com["onWindowInited"];
                if (fun) {
                    fun.apply(com);
                }
                if (com._children) {
                    for (var i = 0; i < com._children.length; i++) {
                        this.callChildOnWindowInited(com._children[i]);
                    }
                }
            }
        };
        //=========================
        // 设置child.onWindowDestory
        //-------------------------
        MWindow.prototype.callChildOnWindowDestory = function (com) {
            var container;
            if (com instanceof fairygui.GObject) {
                container = com.displayObject;
            }
            if (com) {
                // if (getClassName(com) == "GuideClickHand")
                //     console.log(com);
                var fun = com["onWindowDestory"];
                if (fun) {
                    if (fun.apply(com)) {
                        return;
                    }
                }
                for (var i = container.numChildren - 1; i >= 0; i--) {
                    var display = container.getChildAt(i);
                    if (display["$owner"])
                        this.callChildOnWindowDestory(display["$owner"]);
                }
            }
        };
        //=========================
        // 调用child GComponent的 onWindowShow
        //-------------------------
        MWindow.prototype.callChildOnWindowShow = function (com) {
            if (com) {
                var enbaleCall = true;
                var fun = com["onWindowShow"];
                if (fun) {
                    if (com["whenSelfVisiableCallWindowShowAndHide"] !== undefined) {
                        var whenSelfVisiableCallWindowShowAndHide = com["whenSelfVisiableCallWindowShowAndHide"];
                        if (whenSelfVisiableCallWindowShowAndHide) {
                            if (com.visible == false) {
                                enbaleCall = false;
                            }
                        }
                    }
                    if (enbaleCall) {
                        fun.apply(com);
                    }
                }
                if (enbaleCall && com._children) {
                    for (var i = 0; i < com._children.length; i++) {
                        this.callChildOnWindowShow(com._children[i]);
                    }
                }
            }
        };
        //=========================
        // 调用child GComponent的 onWindowHide
        //-------------------------
        MWindow.prototype.callChildOnWindowHide = function (com) {
            if (com) {
                var enbaleCall = true;
                var fun = com["onWindowHide"];
                if (fun) {
                    if (com["whenSelfVisiableCallWindowShowAndHide"] !== undefined) {
                        var whenSelfVisiableCallWindowShowAndHide = com["whenSelfVisiableCallWindowShowAndHide"];
                        if (whenSelfVisiableCallWindowShowAndHide) {
                            if (com.visible == false) {
                                enbaleCall = false;
                            }
                        }
                    }
                    if (enbaleCall) {
                        fun.apply(com);
                    }
                }
                if (enbaleCall && com._children) {
                    for (var i = 0; i < com._children.length; i++) {
                        this.callChildOnWindowHide(com._children[i]);
                    }
                }
            }
        };
        //=========================
        // 调用child GComponent的 onTabShow
        //-------------------------
        MWindow.prototype.callChildOnTabShow = function (com) {
            if (com) {
                var fun = com["onTabShow"];
                if (fun) {
                    fun.apply(com);
                }
                if (com["_children"]) {
                    for (var i = 0; i < com["_children"]["length"]; i++) {
                        this.callChildOnTabShow(com["_children"][i]);
                    }
                }
            }
        };
        //=========================
        // 调用child GComponent的 onTabHide
        //-------------------------
        MWindow.prototype.callChildOnTabHide = function (com) {
            if (com) {
                var fun = com["onTabHide"];
                if (fun) {
                    fun.apply(com);
                }
                if (com["_children"]) {
                    for (var i = 0; i < com["_children"]["length"]; i++) {
                        this.callChildOnTabHide(com["_children"][i]);
                    }
                }
            }
        };
        return MWindow;
    }(Games.FWindow));
    Games.MWindow = MWindow;
})(Games || (Games = {}));
//# sourceMappingURL=MWindow.js.map