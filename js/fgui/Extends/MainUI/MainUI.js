/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
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
var fgui;
(function (fgui) {
    var MainUI;
    (function (MainUI_1) {
        var MainUI = /** @class */ (function (_super) {
            __extends(MainUI, _super);
            function MainUI() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                // 子菜单栏
                _this.submenuBarDict = new Dictionary();
                _this.submenus = [];
                // 菜单按钮字典
                _this.menuDict = new Dictionary();
                _this.menuList = [];
                // 菜单红点字典
                _this.menuRedDict = new Dictionary();
                // 电影持续收益列表
                _this.filmContinueBtnList = null;
                return _this;
            }
            // 添加按钮列表		
            MainUI.prototype.addMenuList = function (list) {
                for (var i = 0; i < list.length; i++) {
                    this.menuDict.add(list[i].menuId, list[i]);
                    this.menuList.push(list[i]);
                }
            };
            // 获取按钮		
            MainUI.prototype.getMenu = function (menuId) {
                return this.menuDict.getValue(menuId);
            };
            // 获取子菜单栏
            MainUI.prototype.getSubmenu = function (subbarId) {
                return this.submenuBarDict.getValue(subbarId);
            };
            // 获取子菜单栏是否打开
            MainUI.prototype.getSubmenuIsOpened = function (subbarId) {
                var subbar = this.getSubmenu(subbarId);
                if (subbar) {
                    return subbar.parent ? true : false;
                }
                return false;
            };
            // 创建子菜单		
            MainUI.prototype.createSubmenu = function (subbarId, type) {
                var menu = this.getMenu(subbarId);
                if (menu) {
                    var submenu = MainUI_1.Submenu.createInstance();
                    submenu.setButton(this, subbarId, menu, type);
                    this.submenus.push(submenu);
                    this.submenuBarDict.add(subbarId, submenu);
                    this.addMenuList(submenu.menuButtons);
                }
            };
            // 关闭其他子菜单
            MainUI.prototype.closeSubmenus = function (subbarId) {
                if (subbarId === void 0) { subbarId = -1; }
                for (var i = 0; i < this.submenus.length; i++) {
                    if (this.submenus[i].barId != subbarId) {
                        fairygui.GRoot.inst.hidePopup(this.submenus[i]);
                    }
                }
            };
            // 窗口初始化完毕
            MainUI.prototype.onWindowInited = function () {
                var _this = this;
                this.m_taskPanel.visible = false; //隐藏引导
                setTimeout(function () {
                    _this.addMenuList(_this.m_mainMenuBar.menuButtons);
                    _this.addMenuList(_this.m_rightBottomMenuBar.menuButtons);
                    _this.addMenuList(_this.m_rightTopMenuBar.menuButtons);
                    _this.addMenuList(_this.m_rightMiddleMenuBar.menuButtons);
                    // 子菜单--经营				
                    _this.createSubmenu(Games.MenuBarType.SumBar_Run, MainUI_1.SubmenuType.bottom);
                    // 子菜单--管理				
                    _this.createSubmenu(Games.MenuBarType.SumBar_Manage, MainUI_1.SubmenuType.bottom);
                    // 子菜单--社交
                    _this.createSubmenu(Games.MenuBarType.SumBar_Social, MainUI_1.SubmenuType.bottom);
                    // 子菜单--合作				
                    // this.createSubmenu(Games.MenuBarType.SumBar_Cooperation, SubmenuType.left);
                }, 10);
            };
            // 设置红点		
            MainUI.prototype.setRed = function (menuId, val) {
                this.menuRedDict.set(menuId, val);
                var menuCtl = this.getMenu(menuId);
                if (menuCtl) {
                    menuCtl.setRed(val);
                }
            };
            Object.defineProperty(MainUI.prototype, "visitTopUI", {
                get: function () {
                    if (this._visitTopUI == null) {
                        this._visitTopUI = fgui.MainUI.VisitMainTopUI.createInstance();
                        this.addChild(this._visitTopUI);
                        this._visitTopUI.setXY(505, 85);
                    }
                    return this._visitTopUI;
                },
                enumerable: true,
                configurable: true
            });
            //显示探访
            MainUI.prototype.showVisitUI = function (data) {
                this.visitTopUI.show(data);
            };
            //隐藏		
            MainUI.prototype.hideVisitUI = function () {
                this.visitTopUI.hide();
            };
            /**
             * 更新红点
             */
            MainUI.prototype.refreshRed = function () {
                for (var i = 0; i < this.menuList.length; i++) {
                    var item = this.menuList[i];
                    this.setRed(item.menuId, Games.MenuValidateRed.getInstance().validate(item.menuId));
                }
                //
                if (this.cooperationForMainUI) {
                    this.cooperationForMainUI.refreshRed();
                }
            };
            /**
             * 刷新解锁
             */
            MainUI.prototype.refreshUnlock = function () {
                this.m_mainMenuBar.onRefreshUnlock();
                this.m_rightTopMenuBar.onRefreshUnlock();
                this.m_rightBottomMenuBar.onRefreshUnlock();
                this.m_rightMiddleMenuBar.onRefreshUnlock();
                for (var _i = 0, _a = this.submenus; _i < _a.length; _i++) {
                    var submenu = _a[_i];
                    submenu.onRefreshUnlock();
                }
            };
            // 窗口显示
            MainUI.prototype.onWindowShow = function () {
                var _this = this;
                setTimeout(function () {
                    _this.refreshUnlock();
                    _this.refreshRed();
                }, 100);
                this.onCreateFilmSmall();
                this.onCreateFilmContinue();
                this.updateVisitView();
                this.updateTaskView(); //更新任务
                Game.protoOkEvent.add(ProtoEventKey.ManageVisitData, this.updateVisitView, this);
                Game.protoOkEvent.add(ProtoEventKey.TaskData, this.updateTaskView, this);
                Game.event.add(GameEventKey.GameEventKey_UpdateVisitActor, this.updateVisitView, this);
                Game.event.add(GameEventKey.PopupPanel, this.onPopupPanel, this);
                Game.event.add(GameEventKey.GameEventKey_ClientUpdateMainTask, this.updateTaskView, this);
                Game.event.add(GameEventKey.GameEventKey_TimeLimitRemind50, this.warTimeTip, this);
                this.m_taskPanel.m_role.onClick(this, this.onClickTaskRole);
                this.m_taskPanel.m_roleGetReward.onClick(this, this.onClickTaskReward);
                Game.guide.checkPlayStoryByType(Games.StoryTriggerType.MainUI);
            };
            // 窗口隐藏
            MainUI.prototype.onWindowHide = function () {
                Game.protoOkEvent.remove(ProtoEventKey.ManageVisitData, this.updateVisitView, this);
                Game.event.remove(GameEventKey.GameEventKey_UpdateVisitActor, this.updateVisitView, this);
                Game.protoOkEvent.remove(ProtoEventKey.ManageVisitData, this.updateVisitView, this);
                Game.event.remove(GameEventKey.PopupPanel, this.onPopupPanel, this);
                Game.event.remove(GameEventKey.GameEventKey_ClientUpdateMainTask, this.updateTaskView, this);
                Game.event.remove(GameEventKey.GameEventKey_TimeLimitRemind50, this.warTimeTip, this);
                this.m_taskPanel.m_role.offClick(this, this.onClickTaskRole);
                this.m_taskPanel.m_roleGetReward.offClick(this, this.onClickTaskReward);
            };
            //更新
            MainUI.prototype.updateTaskView = function () {
                var mainTask = Game.moduleModel.task.getCurrentMainTask();
                if (mainTask && Game.moduleModel.guide.isGuideFinished(100101)) {
                    if (mainTask.isFinished) {
                        //
                        this.m_taskPanel.m_c1.selectedIndex = 0;
                        //点击领取奖励
                        this.m_taskPanel.m_roleGetReward.text = Games.TEXT.TaskGetReward;
                    }
                    else {
                        //
                        this.m_taskPanel.m_c1.selectedIndex = 1;
                        //
                        this.m_taskPanel.m_dialog.text = mainTask.mainConfig.name;
                    }
                    this.m_taskPanel.visible = true;
                }
                else {
                    this.m_taskPanel.visible = false;
                }
            };
            //
            MainUI.prototype.onClickTaskRole = function () {
                Game.menu.open(MenuId.MainTask);
            };
            MainUI.prototype.onClickTaskReward = function () {
                Game.menu.open(MenuId.MainTask);
            };
            // 有弹窗
            MainUI.prototype.onPopupPanel = function () {
                this.closeSubmenus();
            };
            // 9点50的提醒
            MainUI.prototype.warTimeTip = function () {
                if (User.isNineToFifty) {
                    Game.system.toastText(TEXT.NineToFiftyTip);
                }
            };
            //更新
            MainUI.prototype.updateVisitView = function () {
                var visitData = Game.moduleModel.visit.getVisitData();
                if (visitData && visitData.isWaiting) {
                    Game.event.dispatch(GameEventKey.GameEventKey_StartReception);
                    this.showVisitUI(visitData);
                }
                else {
                    this.hideVisitUI();
                }
            };
            // 创建电影小窗口
            MainUI.prototype.onCreateFilmSmall = function () {
                if (Game.moduleModel.warData.moveData && Game.moduleModel.warData.moveData !== null && Game.moduleModel.warData.moveData.state === EMovieState.result) {
                    // 开始数据统计
                    Game.moduleModel.warData.refrushFilmingStatus();
                    if (!Game.moduleModel.warData.clientHideFilmOverResult) {
                        if (!this.filmSmalBtn || this.filmSmalBtn === null) {
                            this.filmSmalBtn = fgui.MainUI.WarFilmSmalls.createInstance();
                            this.addChild(this.filmSmalBtn);
                            this.filmSmalBtn.setXY(0, 288);
                        }
                        this.filmSmalBtn.onWindowShow();
                    }
                    else {
                        if (this.filmSmalBtn && this.filmSmalBtn !== null) {
                            this.filmSmalBtn.onCloseSelf();
                        }
                    }
                }
                else {
                    if (this.filmSmalBtn && this.filmSmalBtn !== null) {
                        this.filmSmalBtn.onCloseSelf();
                    }
                }
            };
            // 创建电影持续收益按钮
            MainUI.prototype.onCreateFilmContinue = function () {
                if (this.filmContinueBtnList === null) {
                    this.filmContinueBtnList = new Array();
                }
                for (var i = 0; i < this.filmContinueBtnList.length; i++) {
                    this.filmContinueBtnList[i].onWindowHide();
                }
                if (Game.moduleModel.warData.movieDataList.length > 0) {
                    // 游戏启动 满足此条件，调用此函数
                    for (var i = 0; i < Game.moduleModel.warData.movieDataList.length; i++) {
                        if (this.filmContinueBtnList.length < i + 1) {
                            var item = fgui.MainUI.WarFilmContinue.createInstance();
                            this.addChild(item);
                            var yy = 452 + 108 * i;
                            item.setXY(4, yy);
                            item.visible = false;
                            this.filmContinueBtnList.push(item);
                        }
                        if (Game.moduleModel.warData.movieDataList[i] && Game.moduleModel.warData.movieDataList[i] !== null) {
                            this.filmContinueBtnList[i].setData(i);
                        }
                    }
                }
            };
            // 显示电影拍摄的期待值
            MainUI.prototype.onCreateExpect = function () {
                if (!this.warExpect || this.warExpect === null) {
                    this.warExpect = fgui.MainUI.WarExpect.createInstance();
                    this.addChild(this.warExpect);
                    this.warExpect.setXY(10, 100);
                    this.warExpect.showHidePanel(true);
                }
                this.warExpect.setData();
            };
            // 显示合作信息		
            MainUI.prototype.onCreateCooperation = function () {
                if (Games.MenuValidateUnlock.getInstance().validate(MenuId.Cooperation)) {
                    if (!this.cooperationForMainUI || this.cooperationForMainUI === null) {
                        this.cooperationForMainUI = fgui.Cooperation.CooperationForMainUI.createInstance();
                        this.addChild(this.cooperationForMainUI);
                        this.cooperationForMainUI.setXY(10, 180);
                    }
                    this.cooperationForMainUI.setData();
                }
            };
            MainUI.prototype.cooperationBtn = function (index) {
                if (this.cooperationForMainUI) {
                    return this.cooperationForMainUI.getChild("m_iconBtn" + (index + 1));
                }
                return null;
            };
            return MainUI;
        }(MainUI_1.MainUIStruct));
        MainUI_1.MainUI = MainUI;
        /**
         * 菜单按钮控制器
         */
        var MenuButtonCtl = /** @class */ (function () {
            function MenuButtonCtl(button, mainUI) {
                this.mainUI = mainUI;
                this.button = button;
                if (!isNullOrEmpty(button.data)) {
                    this.menuButtonData = JSON.parse(button.data);
                }
                else {
                    this.menuButtonData = { menuId: 0 };
                }
                if (this.button.m_red)
                    this.button.m_red.visible = false;
                if (this.button.m_lock)
                    this.button.m_lock.visible = false;
                this.button.onClick(this, this.onClickButton);
            }
            Object.defineProperty(MenuButtonCtl.prototype, "menuId", {
                get: function () {
                    if (this.menuConfig) {
                        return this.menuConfig.menuId;
                    }
                    else {
                        return this.menuButtonData.menuId;
                    }
                },
                enumerable: true,
                configurable: true
            });
            MenuButtonCtl.prototype.setMenuConfig = function (config) {
                this.menuConfig = config;
                this.button.m_title.text = config.name;
                if (!isNullOrEmpty(config.iconUrl))
                    this.button.m_icon.url = config.iconUrl;
            };
            /**
             * 点击按钮事件
             */
            MenuButtonCtl.prototype.onClickButton = function () {
                if (this.menuConfig.openMenu()) {
                    this.mainUI.closeSubmenus();
                }
            };
            /**
             * 设置红点
             */
            MenuButtonCtl.prototype.setRed = function (val) {
                if (!this.button.m_red)
                    return;
                if (isNumber(val)) {
                    this.button.m_red.m_num.text = val.toString();
                    this.button.m_red.visible = val > 0;
                }
                else {
                    this.button.m_red.m_num.text = "";
                    this.button.m_red.visible = val;
                }
            };
            Object.defineProperty(MenuButtonCtl.prototype, "isUnlock", {
                /**
                 * 是否解锁
                 */
                get: function () {
                    return this.menuConfig.isUnlock;
                },
                enumerable: true,
                configurable: true
            });
            /**
             * 刷新解锁
             */
            MenuButtonCtl.prototype.refreshUnlock = function (lockIsHide) {
                if (lockIsHide && !this.menuConfig.lockVisiable) {
                    this.button.visible = this.isUnlock;
                }
                if (!this.button.visible || !this.button.parent) {
                    return;
                }
                if (this.button.m_lock) {
                    this.button.m_lock.visible = !this.isUnlock;
                }
                if (this.isUnlock) {
                    FguiHelper.clearFilters(this.button.m_icon);
                    FguiHelper.clearFilters(this.button.m_title);
                }
                else {
                    FguiHelper.halfStaturation(this.button.m_icon);
                    FguiHelper.halfStaturation(this.button.m_title);
                }
            };
            return MenuButtonCtl;
        }());
        MainUI_1.MenuButtonCtl = MenuButtonCtl;
    })(MainUI = fgui.MainUI || (fgui.MainUI = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=MainUI.js.map