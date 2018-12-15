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
                // 菜单按钮字典
                _this.menuDict = new Dictionary();
                _this.groupMenuPanelDict = new Dictionary();
                _this.groupMenuPanelList = [];
                _this.leftGroupsIDs = [101, 102];
                _this.smallBtnVisable = false;
                // 持续收益icon
                _this.filmContinueList = new Array();
                _this.cooperationVisable = false;
                return _this;
            }
            MainUI.prototype.constructFromXML = function (xml) {
                var _this = this;
                _super.prototype.constructFromXML.call(this, xml);
                this.m_warTip.onClick(this, function () { _this.m_warTip.visible = false; });
                //
                this.createMenuGroup();
                this.filmContinueList = [this.m_leftBottomMenuBar.m_continue0, this.m_leftBottomMenuBar.m_continue1, this.m_leftBottomMenuBar.m_continue2, this.m_leftBottomMenuBar.m_continue3, this.m_leftBottomMenuBar.m_continue4];
            };
            //创建右上角的组		
            MainUI.prototype.createMenuGroup = function () {
                var menuPanel;
                for (var index = 0; index < this.leftGroupsIDs.length; index++) {
                    var element = this.leftGroupsIDs[index];
                    menuPanel = MainUI_1.BottomMenuPanel.createInstance();
                    this.groupMenuPanelDict.add(element, menuPanel);
                    this.addChild(menuPanel);
                    menuPanel.x = this.width - menuPanel.width;
                    menuPanel.y = 190 + (menuPanel.height + 10) * index;
                    menuPanel.addRelation(this, fairygui.RelationType.Right_Right);
                    menuPanel.addRelation(this, fairygui.RelationType.Top_Top);
                    this.groupMenuPanelList.push(menuPanel);
                }
                if (menuPanel) {
                    this.m_visitUI.y = menuPanel.y + menuPanel.height + 30;
                }
            };
            // 获取按钮		
            MainUI.prototype.getMenu = function (menuId) {
                return Game.moduleModel.func.getMenuCtrlByMenuId(menuId);
            };
            // 获取子菜单栏
            MainUI.prototype.getSubmenu = function (subbarId) {
                return Game.moduleModel.func.getSubmenu(subbarId);
            };
            // 获取子菜单栏是否打开
            MainUI.prototype.getSubmenuIsOpened = function (subbarId) {
                return Game.moduleModel.func.getSubmenuIsOpened(subbarId);
            };
            // 窗口初始化完毕
            MainUI.prototype.onWindowInited = function () {
                this.m_taskPanel.visible = false; //隐藏引导
                for (var index = 0; index < this.groupMenuPanelList.length; index++) {
                    var element = this.groupMenuPanelList[index];
                    element.init(this.leftGroupsIDs[index]);
                }
                //
                Games.PopupManage.getInstance().checkPopupMenu();
                this.m_goalPanel.init(Games.MenuPositionType.Right_Top_Group);
            };
            MainUI.prototype.onWindowResize = function () {
                console.log("mainUI -- onWindowResize()");
                Game.stageManager.homeSceneSet.onWindowResize();
            };
            // 关闭其他子菜单
            MainUI.prototype.closeSubmenus = function () {
                Game.moduleModel.func.closeSubmenus();
            };
            // 设置红点		
            MainUI.prototype.setRed = function (menuId) {
                var menuCtl = this.getMenu(menuId);
                if (menuCtl) {
                    menuCtl.setRed();
                }
            };
            //显示探访
            MainUI.prototype.showVisitUI = function (data) {
                this.m_visitUI.show(data);
            };
            //隐藏		
            MainUI.prototype.hideVisitUI = function () {
                this.m_visitUI.hide();
            };
            /**
             * 更新红点
             */
            MainUI.prototype.refreshRed = function () {
                var list = Game.moduleModel.func.getMenuList();
                for (var i = 0; i < list.length; i++) {
                    var item = list[i];
                    this.setRed(item.menuId);
                }
                //
                if (this.cooperationVisable) {
                    this.m_cooperation.refreshRed();
                }
                this.m_topInfoBar.onRefreshRed();
            };
            /**
             * 初始化解锁
             */
            MainUI.prototype.initUnlock = function () {
                this.m_mainMenuBar.refreshMenuButton();
                for (var index = 0; index < this.groupMenuPanelList.length; index++) {
                    var element = this.groupMenuPanelList[index];
                    element.refreshMenuButton();
                }
                this.refreshRed();
                // this.m_mainMenuBar.initUnlock();
            };
            // 窗口显示
            MainUI.prototype.onWindowShow = function () {
                var _this = this;
                setTimeout(function () {
                    // 	this.refreshUnlock();
                    _this.refreshRed();
                }, 100);
                this.onCreateFilmSmall();
                this.onCreateFilmContinue();
                this.updateVisitView();
                this.updateTaskView(); //更新任务
                this.warTimeTip(); // 是否提示9点和9点五十
                Game.protoOkEvent.add(ProtoEventKey.ManageVisitData, this.updateVisitView, this);
                Game.protoOkEvent.add(ProtoEventKey.TaskData, this.updateTaskView, this);
                Game.event.add(GameEventKey.GameEventKey_UpdateVisitActor, this.updateVisitView, this);
                Game.event.add(GameEventKey.PopupPanel, this.onPopupPanel, this);
                Game.event.add(GameEventKey.GameEventKey_ClientUpdateMainTask, this.updateTaskView, this);
                Game.event.add(GameEventKey.GameEventKey_TimeLimitRemind, this.warTimeTip, this);
                Game.event.add(GameEventKey.GameEventKey_VisibleMainUI, this.showHideMainUI, this);
                Game.event.add(GameEventKey.GameEventKey_VisibleTaskArrowUI, this.showHideTaskArrow, this);
                Game.event.add(GameEventKey.GameEventKey_UnlockInit, this.unlockInitHandler, this);
                this.m_taskPanel.m_role.onClick(this, this.onClickTaskRole);
                this.m_taskPanel.m_roleGetReward.onClick(this, this.onClickTaskReward);
                if (Game.guide.isPlayCar) {
                    this.showHideMainUI(false);
                }
            };
            // 窗口隐藏
            MainUI.prototype.onWindowHide = function () {
                Game.protoOkEvent.remove(ProtoEventKey.ManageVisitData, this.updateVisitView, this);
                Game.protoOkEvent.remove(ProtoEventKey.TaskData, this.updateTaskView, this);
                Game.event.remove(GameEventKey.GameEventKey_UpdateVisitActor, this.updateVisitView, this);
                Game.event.remove(GameEventKey.PopupPanel, this.onPopupPanel, this);
                Game.event.remove(GameEventKey.GameEventKey_ClientUpdateMainTask, this.updateTaskView, this);
                Game.event.remove(GameEventKey.GameEventKey_TimeLimitRemind, this.warTimeTip, this);
                Game.event.remove(GameEventKey.GameEventKey_VisibleMainUI, this.showHideMainUI, this);
                Game.event.remove(GameEventKey.GameEventKey_VisibleTaskArrowUI, this.showHideTaskArrow, this);
                Game.event.remove(GameEventKey.GameEventKey_UnlockInit, this.unlockInitHandler, this);
                this.m_taskPanel.m_role.offClick(this, this.onClickTaskRole);
                this.m_taskPanel.m_roleGetReward.offClick(this, this.onClickTaskReward);
            };
            //解锁
            MainUI.prototype.unlockInitHandler = function () {
                this.initUnlock();
            };
            MainUI.prototype.showHideTaskArrow = function (isShow) {
                this.m_taskPanel.showHideTaskArrow(isShow);
            };
            //显示隐藏主界面
            MainUI.prototype.showHideMainUI = function (isShow) {
                this.m_mainMenuBar.visible = isShow;
                this.m_rightBottomMenuBar.visible = isShow;
                this.m_topInfoBar.visible = isShow;
                for (var index = 0; index < this.groupMenuPanelList.length; index++) {
                    var element = this.groupMenuPanelList[index];
                    element.visible = isShow;
                }
                if (isShow == false) {
                    this.m_builder.m_BuildList.scrollPane.scrollBottom();
                }
                this.m_expect.showHidePanel(isShow);
            };
            //更新
            MainUI.prototype.updateTaskView = function () {
                var mainTask = Game.moduleModel.task.getCurrentMainTask();
                if (mainTask && Game.moduleModel.guide.isFinishFirst) {
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
                        this.m_taskPanel.m_dialog.m_title.text = mainTask.mainConfig.name;
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
                var isShow = false;
                if (User.isNineToFifty) {
                    this.m_warTip.m_title.m_title.text = TEXT.NineToFiftyTip;
                    isShow = true;
                }
                if (User.isNineToFiftyFive) {
                    this.m_warTip.m_title.m_title.text = TEXT.NineToFiftyFiveTip;
                    isShow = true;
                }
                if (User.isTenTime) {
                    isShow = false;
                }
                // if (User.isZeroTime)
                // {
                // 	User.isZeroTime = false;
                // }
                if (this.m_warTip.visible !== isShow) {
                    this.m_warTip.visible = isShow;
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
                        this.smallBtnVisable = true;
                        this.m_filmSmallBtn.setShow();
                    }
                    else {
                        if (this.smallBtnVisable) {
                            this.smallBtnVisable = false;
                            this.m_filmSmallBtn.setHide();
                        }
                    }
                }
                else {
                    if (this.smallBtnVisable) {
                        this.smallBtnVisable = false;
                        this.m_filmSmallBtn.setHide();
                    }
                }
            };
            // 创建电影持续收益按钮
            MainUI.prototype.onCreateFilmContinue = function () {
                if (Game.moduleModel.warData.endIncomeList) {
                    for (var i = 0; i < this.filmContinueList.length; i++) {
                        if (Game.moduleModel.warData.endIncomeList.length > i) {
                            if (!this.filmContinueList[i].visible) {
                                this.filmContinueList[i].visible = true;
                            }
                            this.filmContinueList[i].setData(i);
                        }
                        else {
                            if (this.filmContinueList[i].visible) {
                                this.filmContinueList[i].visible = false;
                            }
                        }
                    }
                }
            };
            // 显示电影拍摄的期待值
            MainUI.prototype.onCreateExpect = function () {
                this.m_expect.showHidePanel(true);
                this.m_expect.setData();
            };
            // 显示合作信息		
            MainUI.prototype.onCreateCooperation = function () {
                if (Games.MenuValidateUnlock.getInstance().validate(MenuId.Cooperation)) {
                    this.m_cooperation.setData();
                    this.cooperationVisable = true;
                }
            };
            MainUI.prototype.cooperationBtn = function (index) {
                if (this.cooperationVisable) {
                    return this.m_cooperation.getChild("m_iconBtn" + (index + 1));
                }
                return null;
            };
            MainUI.prototype.getMainTaskBtn = function (index) {
                if (this.m_taskPanel.visible) {
                    if (index = 1) {
                        return this.m_taskPanel.m_role;
                    }
                    return this.m_taskPanel.m_roleGetReward;
                }
                return null;
            };
            return MainUI;
        }(MainUI_1.MainUIStruct));
        MainUI_1.MainUI = MainUI;
        /**
         * 红点类型， 对应页签
         */
        var MenuRedType;
        (function (MenuRedType) {
            MenuRedType[MenuRedType["None"] = 0] = "None";
            MenuRedType[MenuRedType["New"] = 1] = "New";
            MenuRedType[MenuRedType["Red"] = 2] = "Red";
        })(MenuRedType = MainUI_1.MenuRedType || (MainUI_1.MenuRedType = {}));
        /**
         * 菜单按钮控制器
         */
        var MenuButtonCtl = /** @class */ (function () {
            function MenuButtonCtl(unlockId, content, isClick) {
                if (isClick === void 0) { isClick = true; }
                this.globalPos = new Point();
                this._buttonDict = new Dictionary();
                this._buttonList = [];
                this.userStaticDic = new Dictionary();
                this.content = content;
                this.setUnlockConfig(unlockId);
                if (this.button.m_red)
                    this.button.m_c_visible_new.selectedIndex = MenuRedType.None;
                if (this.button.m_lock)
                    this.button.m_lock.visible = false;
                //按钮是否可以点击
                isClick && this.addClick();
            }
            Object.defineProperty(MenuButtonCtl.prototype, "subGroupId", {
                //子菜单组
                get: function () {
                    var id;
                    switch (this.menuId) {
                        case Games.MenuBarType.SumBar_Manage:
                            id = 11;
                            break;
                        case Games.MenuBarType.SumBar_Run:
                            id = 10;
                            break;
                        case Games.MenuBarType.SumBar_Social:
                            id = 12;
                            break;
                        case Games.MenuBarType.SumBar_Cooperation:
                            break;
                        default:
                            break;
                    }
                    return id;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(MenuButtonCtl.prototype, "moveDuration", {
                get: function () {
                    return 600;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(MenuButtonCtl.prototype, "menuId", {
                get: function () {
                    return this.unlockConfig.menuId;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(MenuButtonCtl.prototype, "isTimeButton", {
                //是时间按钮
                get: function () {
                    var iconType = this.unlockConfig.icon_type;
                    return iconType == Games.ButtonType.Button_Time || iconType == Games.ButtonType.Button_GoalTime;
                },
                enumerable: true,
                configurable: true
            });
            //设置位置
            MenuButtonCtl.prototype.setPos = function (x, y) {
                this.x = x;
                this.y = y;
            };
            //获取全局按钮位置
            MenuButtonCtl.prototype.getGlobalPos = function () {
                if (this.menuConfig.barType > MenuId.SubMenuButtonBegin) {
                    var ctrl = Game.moduleModel.func.getMenuCtrlByMenuId(this.menuConfig.barType);
                    return Game.moduleModel.func.getMenuCtrlByMenuId(this.menuConfig.barType).getGlobalPos();
                }
                else {
                    this.button.parent.localToGlobal(this.x, this.y, this.globalPos);
                }
                return this.globalPos;
            };
            Object.defineProperty(MenuButtonCtl.prototype, "unlockScale", {
                get: function () {
                    var scale = 1;
                    switch (this.unlockConfig.icon_type) {
                        case Games.ButtonType.Button_Main:
                            scale = 1.5;
                            break;
                        case Games.ButtonType.Button_Normal:
                            scale = 2;
                            break;
                        case Games.ButtonType.Button_Time:
                            scale = 2;
                            break;
                        case Games.ButtonType.Button_Goal:
                        case Games.ButtonType.Button_GoalTime:
                            scale = 2;
                            break;
                        default:
                            break;
                    }
                    return scale;
                },
                enumerable: true,
                configurable: true
            });
            MenuButtonCtl.prototype.getButton = function (iconType) {
                return this._buttonDict.getValue(iconType);
            };
            //获取按钮
            MenuButtonCtl.prototype.createButton = function () {
                this.hideButton();
                var iconType = this.unlockConfig.icon_type;
                var btn = this.getButton(iconType);
                switch (iconType) {
                    case Games.ButtonType.Button_Main:
                        if (btn == null) {
                            this.button = MainUI_1.MenuBMainButton.createInstance();
                            this._buttonDict.add(iconType, this.button);
                            this._buttonList.push(this.button);
                        }
                        else {
                            this.button = btn;
                        }
                        break;
                    case Games.ButtonType.Button_Normal:
                        if (btn == null) {
                            this.button = MainUI_1.MenuBButton.createInstance();
                            this._buttonDict.add(iconType, this.button);
                            this._buttonList.push(this.button);
                        }
                        else {
                            this.button = btn;
                        }
                        break;
                    case Games.ButtonType.Button_Time:
                        if (btn == null) {
                            this.button = MainUI_1.TimeMenuButton.createInstance();
                            this.button.m_visiableTitle.selectedIndex = 1;
                            this._buttonDict.add(iconType, this.button);
                            this._buttonList.push(this.button);
                        }
                        else {
                            this.button = btn;
                        }
                        break;
                    case Games.ButtonType.Button_Goal:
                    case Games.ButtonType.Button_GoalTime:
                        if (btn == null) {
                            this.button = MainUI_1.TimeMenuGoalButton.createInstance();
                            this._buttonDict.add(this.unlockConfig.icon_type, this.button);
                            this._buttonList.push(this.button);
                        }
                        else {
                            this.button = btn;
                        }
                        this.button.m_c_visible_time.selectedIndex = iconType == Games.ButtonType.Button_GoalTime ? 0 : 1; //隐藏倒计时
                        break;
                    default:
                        break;
                }
                this.content.addChild(this.button);
            };
            //开始计时
            MenuButtonCtl.prototype.startTick = function () {
                if (this.isTimeButton) {
                    Games.TickMenuManager.getInstance.addTick(this.menuId);
                    Games.TickMenuManager.getInstance.addButton(this.menuId, this.button);
                }
            };
            //停止计时
            MenuButtonCtl.prototype.stopTick = function () {
                Games.TickMenuManager.getInstance.stopTick(this.menuId);
            };
            MenuButtonCtl.prototype.stopTimeButton = function () {
                Games.TickMenuManager.getInstance.removeButton(this.menuId, this.button);
            };
            MenuButtonCtl.prototype.hideButton = function () {
                this.stopTimeButton();
                if (this.button) {
                    this.button.removeFromParent();
                }
            };
            MenuButtonCtl.prototype.addClick = function () {
                this.button.onClick(this, this.onClickButton);
            };
            MenuButtonCtl.prototype.removeClick = function () {
                this.button.offClick(this, this.onClickButton);
            };
            /**
             * 设置文本内容
             * @param config
             */
            MenuButtonCtl.prototype.setMenuConfig = function (config) {
                this.menuConfig = config;
            };
            /**
             * 设置解锁配置
             * @param config 解锁配置
             */
            MenuButtonCtl.prototype.setUnlockConfig = function (unlockId) {
                this.unlockConfig = Game.config.unlock.getConfig(unlockId);
                if (this.unlockConfig) {
                    this.createButton();
                    this.setMenuConfig(this.unlockConfig.menuConfig);
                    //标题
                    this.button.m_title.text = this.unlockConfig.name;
                    //
                    var itemId = this.unlockConfig.item_id;
                    //icon
                    if (itemId > 0) {
                        var itemConfig = Game.config.item.getConfig(itemId);
                        if (itemConfig) {
                            var star = itemConfig.star;
                            var btn = this.button;
                            btn.m_c_visible_star.selectedIndex = star > 0 ? 1 : 0;
                            btn.m_starlist.numItems = itemConfig.itemStarNum;
                            if (itemConfig.type == EItemCategory.contract) {
                                btn.m_touxiang.m_icon.icon = this.unlockConfig.iconUrl;
                            }
                            else {
                                btn.m_icon.url = this.unlockConfig.iconUrl;
                            }
                        }
                    }
                    else {
                        this.button.m_icon.url = this.unlockConfig.iconUrl;
                    }
                    this.refreshProgress();
                }
            };
            /**
             * 设置进度
             */
            MenuButtonCtl.prototype.refreshProgress = function () {
                if (this.isUnlock && this.unlockConfig.icon_type == Games.ButtonType.Button_Goal) {
                    var goalBtn = this.button;
                    var goalData = this.unlockConfig.progressGoal;
                    if (goalData) {
                        goalBtn.m_goal.text = goalData.progressString;
                        goalBtn.m_c_color.setSelectedIndex(goalData.status);
                    }
                    else {
                        goalBtn.m_goal.text = "";
                    }
                }
            };
            /**
             * 点击按钮事件
             */
            MenuButtonCtl.prototype.onClickButton = function () {
                if (this.menuConfig.openMenu()) {
                    Game.moduleModel.func.clearNewFlag(this.menuId);
                    this.setRed();
                    Game.moduleModel.func.closeSubmenus();
                }
            };
            /**
             * 设置红点
             */
            MenuButtonCtl.prototype.setRed = function () {
                if (!this.button.m_red)
                    return;
                var isNew = Games.MenuValidateNew.getInstance().validate(this.menuId);
                if (isNew) {
                    this.button.m_c_visible_new.selectedIndex = MenuRedType.New;
                }
                else {
                    var val = Games.MenuValidateRed.getInstance().validate(this.menuId);
                    if (isNumber(val)) {
                        this.button.m_red.m_num.text = val.toString();
                        this.button.m_c_visible_new.selectedIndex = val > 0 ? MenuRedType.Red : MenuRedType.None;
                    }
                    else {
                        this.button.m_red.m_num.text = "";
                        this.button.m_c_visible_new.selectedIndex = val ? MenuRedType.Red : MenuRedType.None;
                    }
                }
                //设置进度
                this.refreshProgress();
            };
            Object.defineProperty(MenuButtonCtl.prototype, "isUnlock", {
                /**
                 * 是否解锁
                 */
                get: function () {
                    if (this.unlockConfig == null) {
                        return false;
                    }
                    return this.unlockConfig.isUnlock;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(MenuButtonCtl.prototype, "isVisible", {
                /**
                 * 当前按钮 是否显示
                 */
                get: function () {
                    return this.button.visible;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(MenuButtonCtl.prototype, "isLockVisible", {
                /**
                 * 是否需要显示
                 */
                get: function () {
                    var visible = this.isUnlock || this.unlockConfig.lockvisible;
                    return visible;
                },
                enumerable: true,
                configurable: true
            });
            /**
             * 隐藏红点
             */
            MenuButtonCtl.prototype.hideRedPoint = function () {
                this.button.m_red.visible = false;
            };
            /**
             * 刷新解锁
             */
            MenuButtonCtl.prototype.refreshUnlock = function () {
                this.button.visible = this.isLockVisible;
                if (!this.button.visible || !this.button.parent) {
                    return;
                }
                if (this.button.m_lock) {
                    this.button.m_lock.visible = !this.isUnlock;
                }
                if (this.isUnlock) {
                    //开启计时
                    this.startTick();
                    //设置红点
                    this.setRed();
                    FguiHelper.clearFilters(this.button.m_icon);
                    FguiHelper.clearFilters(this.button.m_title);
                    // 系统解锁埋点
                    if (!this.userStaticDic.hasKey(this.menuId)) {
                        this.userStaticDic.add(this.menuId, this.menuId);
                        Games.Static.Instance.onUserorbit("sys", this.menuId.toString(), "unlock");
                    }
                }
                else {
                    this.stopTick();
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