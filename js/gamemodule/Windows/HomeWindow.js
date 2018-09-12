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
    // 游戏主界面
    //----------------------
    var HomeWindow = /** @class */ (function (_super) {
        __extends(HomeWindow, _super);
        function HomeWindow() {
            var _this = _super.call(this) || this;
            _this.refreshRedTimeOutHandler = 0;
            // 添加依赖资源
            _this.addAssetForFguiComponent(fgui.MainUI.MainUI);
            _this.addAssetForFguiComponent(fgui.Building.Main);
            _this.addAssetForFguiComponent(fgui.WarMovie.WarMain);
            _this.addAssetForFguiComponent(fgui.PlayerInfo.Main);
            _this.addAssetForFguiComponent(fgui.Cooperation.CooperationForMainUI);
            _this.addAssetForFguiComponent(fgui.WarMovie.WarContinuousIncome);
            return _this;
        }
        // 生成动态预加载资源
        HomeWindow.prototype.generateAssetsForDynmic = function () {
            _super.prototype.generateAssetsForDynmic.call(this);
            this.addDynmicAssetForAvatarAll(Game.config.avatar.getConfig(1501));
            this.addDynmicAssetForAvatarAll(Game.config.avatar.getConfig(2001));
            this.addDynmicAssetForAvatarAll(Game.config.avatar.getConfig(2201));
            this.addDynmicAssetForAvatarAll(Game.config.avatar.getConfig(7101));
            this.addDynmicAssetForAvatarAll(Game.config.avatar.getConfig(7301));
            this.addDynmicAssetForAvatarAll(Game.config.avatar.getConfig(5001));
            this.addDynmicAssetForAvatarAll(Game.config.avatar.getConfig(6001));
            this.addDynmicAssetForAvatarAll(Game.config.avatar.getConfig(8001));
            this.addDynmicAssetForAvatarAll(Game.config.avatar.getConfig(1001));
            this.addDynmicAssetForAvatarAll(Game.config.avatar.getConfig(3001));
            this.addDynmicAssetForAvatarAll(Game.config.avatar.getConfig(9999));
        };
        // 菜单创建
        HomeWindow.prototype.onMenuCreate = function () {
            this.conent = fgui.MainUI.MainUI.createInstance();
            this.contentPane = this.conent;
            // this.center();
            // //弹出窗口的动效已中心为轴心
            this.setPivot(0.5, 0.5);
            _super.prototype.onMenuCreate.call(this);
        };
        // 菜单打开事件，传递参数
        HomeWindow.prototype.onMenuOpen = function (parameter) {
            _super.prototype.onMenuOpen.call(this, parameter);
        };
        //=========================
        // 显示完成
        // 可以在这里添加协议消息监听
        //-------------------------
        HomeWindow.prototype.onShowComplete = function () {
            _super.prototype.onShowComplete.call(this);
            User.sGameInfoUpdate.add(this.onUpdateGameInfo, this);
            Game.moduleModel.actor.sUpdateActorInfo.add(this.refreshRed, this);
            Game.moduleModel.actor.sAddActorList.add(this.refreshRed, this);
            Game.moduleModel.warData.sUpdateLicence.add(this.refreshRed, this);
            Game.moduleModel.warData.sUpdateContinue.add(this.refreshContinue, this);
            Game.protoOkEvent.add(ProtoEventKey.TaskData, this.refreshRed, this);
            Game.event.add(GameEventKey.GameEventKey_ResetFindStoryTime, this.refreshRed, this);
            Game.event.add(GameEventKey.GameEventKey_UpdateMainUIRed, this.refreshRed, this);
            Game.event.add(GameEventKey.GameEventKey_UpdateCoopreationOrderView, this.refreshRed, this);
            Game.event.add(GameEventKey.GameEventKey_UpdateOrderView, this.refreshRed, this);
            Game.protoOkEvent.add(ProtoEventKey.ItemData, this.refreshRed, this);
            Game.protoOkEvent.add(ProtoEventKey.AccountCooperateData, this.refreshRed, this);
            Game.moduleModel.cooperation.sCallHavePartner.add(this.onUpdateGameInfo, this);
            this.conent.onCreateExpect();
            this.conent.onCreateCooperation();
        };
        //=========================
        // 隐藏完成
        // 可以在这里移除协议消息监听
        //-------------------------
        HomeWindow.prototype.onHideComplete = function () {
            Game.moduleModel.actor.sUpdateActorInfo.remove(this.refreshRed, this);
            Game.moduleModel.actor.sAddActorList.remove(this.refreshRed, this);
            Game.moduleModel.warData.sUpdateLicence.remove(this.refreshRed, this);
            Game.moduleModel.warData.sUpdateContinue.remove(this.refreshContinue, this);
            Game.protoOkEvent.remove(ProtoEventKey.TaskData, this.refreshRed, this);
            Game.event.remove(GameEventKey.GameEventKey_ResetFindStoryTime, this.refreshRed, this);
            Game.event.remove(GameEventKey.GameEventKey_UpdateMainUIRed, this.refreshRed, this);
            Game.event.remove(GameEventKey.GameEventKey_UpdateCoopreationOrderView, this.refreshRed, this);
            Game.event.remove(GameEventKey.GameEventKey_UpdateOrderView, this.refreshRed, this);
            Game.protoOkEvent.remove(ProtoEventKey.ItemData, this.refreshRed, this);
            Game.protoOkEvent.remove(ProtoEventKey.AccountCooperateData, this.refreshRed, this);
            User.sGameInfoUpdate.remove(this.onUpdateGameInfo, this);
            Game.moduleModel.cooperation.sCallHavePartner.remove(this.onUpdateGameInfo, this);
            _super.prototype.onHideComplete.call(this);
        };
        /**
         * 更新info信息
         */
        HomeWindow.prototype.onUpdateGameInfo = function () {
            this.refreshRed();
            this.conent.onCreateExpect();
            this.conent.onCreateCooperation();
        };
        /**
         * 刷新红点
         */
        HomeWindow.prototype.refreshRed = function () {
            var _this = this;
            if (this.refreshRedTimeOutHandler > 0) {
                clearTimeout(this.refreshRedTimeOutHandler);
                this.refreshRedTimeOutHandler = 0;
            }
            this.refreshRedTimeOutHandler = setTimeout(function () {
                _this.conent.refreshUnlock();
                _this.conent.refreshRed();
            }, 500);
        };
        HomeWindow.prototype.refreshContinue = function () {
            this.conent.onCreateFilmContinue();
        };
        Object.defineProperty(HomeWindow.prototype, "filmContinueFirst", {
            get: function () {
                if (this.conent.filmContinueBtnList.length > 0) {
                    var datas = Game.moduleModel.warData.movieDataList;
                    for (var index = 0; index < datas.length; index++) {
                        var curData = datas[index];
                        var remainTime = 7200 - Game.time.getSubSecondsPre(curData.startTime);
                        if (remainTime > 0) {
                            return this.conent.filmContinueBtnList[index];
                        }
                    }
                }
                else {
                    return null;
                }
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(HomeWindow.prototype, "filmContinue", {
            get: function () {
                if (this.conent.filmContinueBtnList.length > 0) {
                    var datas = Game.moduleModel.warData.movieDataList;
                    for (var index = 0; index < datas.length; index++) {
                        var curData = datas[index];
                        var btn = this.conent.filmContinueBtnList[index];
                        if (btn && btn.visible) {
                            return btn;
                        }
                        else {
                            return null;
                        }
                    }
                }
                else {
                    return null;
                }
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(HomeWindow.prototype, "filmContinueFirstRewardBtn", {
            get: function () {
                if (this.conent.filmContinueBtnList.length > 0) {
                    var datas = Game.moduleModel.warData.movieDataList;
                    for (var index = 0; index < datas.length; index++) {
                        var btn = this.conent.filmContinueBtnList[index];
                        if (btn.warContinueUI && btn.warContinueUI.visible) {
                            return btn.warContinueUI.m_okBtn;
                            ;
                        }
                        else {
                            return null;
                        }
                    }
                }
                else {
                    return null;
                }
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(HomeWindow.prototype, "filmContinueFirstpromotionBtn", {
            get: function () {
                var btn = this.filmContinueFirst;
                if (btn && btn.warContinueUI && btn.warContinueUI.visible) {
                    return btn.warContinueUI.m_promotionBtn;
                }
                else {
                    return null;
                }
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(HomeWindow.prototype, "cityBtn", {
            // 
            get: function () {
                if (this.conent.filmContinueBtnList.length > 0 && this.conent.filmContinueBtnList[0].warContinueUI && this.conent.filmContinueBtnList[0].warContinueUI.visible) {
                    this.conent.filmContinueBtnList[0].warContinueUI.cityList;
                    for (var i = 0; i < this.conent.filmContinueBtnList[0].warContinueUI.cityList.length; i++) {
                        if (this.conent.filmContinueBtnList[0].warContinueUI.curCity === null || this.conent.filmContinueBtnList[0].warContinueUI.cityList[i].id !== this.conent.filmContinueBtnList[0].warContinueUI.curCity.id) {
                            if (this.conent.filmContinueBtnList[0].warContinueUI.cityList[i].state === Games.CityStateEnum.hasOccupy) {
                                this.conent.filmContinueBtnList[0].warContinueUI.m_cityList.scrollToView(i);
                                return this.conent.filmContinueBtnList[0].warContinueUI.m_cityList.getChildAt(this.conent.filmContinueBtnList[0].warContinueUI.m_cityList.itemIndexToChildIndex(i));
                            }
                        }
                    }
                }
                return null;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(HomeWindow.prototype, "citySwitch", {
            get: function () {
                if (this.conent.filmContinueBtnList.length > 0 && this.conent.filmContinueBtnList[0].warContinueUI && this.conent.filmContinueBtnList[0].warContinueUI.visible) {
                    if (this.conent.filmContinueBtnList[0].warContinueUI.m_ChangeCity.selectedIndex === 1) {
                        if (this.conent.filmContinueBtnList[0].warContinueUI.m_okBtn2.visible) {
                            return this.conent.filmContinueBtnList[0].warContinueUI.m_okBtn2;
                        }
                    }
                }
                return null;
            },
            enumerable: true,
            configurable: true
        });
        //-----------------------------------
        // 建筑引导
        //-----------------------------------
        //房间标题按钮
        HomeWindow.prototype.getRoomTitleBtn = function (roomType) {
            var room = this.conent.m_builder.getRoomAndScrollTop(roomType, 1);
            if (room) {
                return room.m_btn_roomName;
            }
            return null;
        };
        //
        HomeWindow.prototype.getCooperationBtn = function () {
            var arg = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                arg[_i] = arguments[_i];
            }
            return this.conent.cooperationBtn(arg[0]);
        };
        return HomeWindow;
    }(Games.MWindow));
    Games.HomeWindow = HomeWindow;
})(Games || (Games = {}));
//# sourceMappingURL=HomeWindow.js.map