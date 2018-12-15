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
            // this.addAssetForFguiComponent(fgui.WarMovie.WarMain);
            _this.addAssetForFguiComponent(fgui.PlayerInfo.Main);
            // this.addAssetForFguiComponent(fgui.Cooperation.CooperationForMainUI);
            // this.addAssetForFguiComponent(fgui.WarMovie.WarContinuousIncome);
            _this.addAssetForFguiComponent(fgui.PopUp.PopUpMain);
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
            //初始化楼层
            Game.stageManager.homeSceneSet.init(this.conent.m_builder);
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
                _this.conent.refreshRed();
            }, 500);
        };
        HomeWindow.prototype.refreshContinue = function () {
            this.conent.onCreateFilmContinue();
        };
        Object.defineProperty(HomeWindow.prototype, "filmContinueFirst", {
            get: function () {
                for (var i = 0; i < this.conent.filmContinueList.length; i++) {
                    if (this.conent.filmContinueList[i].visible && this.conent.filmContinueList[i].incomeData.remainingTime > 0) {
                        return this.conent.filmContinueList[i];
                    }
                }
                return null;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(HomeWindow.prototype, "filmContinue", {
            get: function () {
                for (var i = 0; i < this.conent.filmContinueList.length; i++) {
                    if (this.conent.filmContinueList[i].visible) {
                        return this.conent.filmContinueList[i];
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
            var room = Game.stageManager.homeSceneSet.getRoomAndScrollTop(roomType, 1);
            if (room) {
                return room.mainView.m_buildSceneUI.m_btn_roomName;
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
        //金币兑换按钮
        HomeWindow.prototype.goldExchangeBtn = function () {
            var room = Game.stageManager.homeSceneSet.getRoomAndScrollTop(Games.RoomType.Finance, 1);
            if (room) {
                var financeRoomProcesser = room.processer;
                if (financeRoomProcesser) {
                    return financeRoomProcesser.npcBtn;
                }
            }
            return null;
        };
        //训练按钮
        HomeWindow.prototype.trainBtn = function () {
            var room = Game.stageManager.homeSceneSet.getRoomAndScrollTop(Games.RoomType.Training, 1);
            if (room) {
                var trainRoomProcesser = room.processer;
                if (trainRoomProcesser) {
                    return trainRoomProcesser.npcBtn;
                }
            }
            return null;
        };
        // 设置主界面显示
        HomeWindow.prototype.setHomeShow = function () {
            if (this.contentPane && !this.contentPane.visible) {
                this.contentPane.visible = true;
                this.onShown();
            }
        };
        // 设置主界面隐藏
        HomeWindow.prototype.setHomeHide = function () {
            if (this.contentPane && this.contentPane.visible) {
                this.contentPane.visible = false;
                this.onHide();
            }
        };
        //获取房间艺人
        HomeWindow.prototype.getBuildSceneActor = function () {
            var visitData = Game.moduleModel.visit.getVisitData();
            if (visitData == null) {
                return null;
            }
            var actorId = visitData.actorId;
            var actorRoomType = Game.moduleModel.building.getAvatarRoomType(actorId);
            var cUnit = Games.AvatarManager.context.getAvatarById(actorRoomType, actorId);
            return cUnit;
        };
        HomeWindow.prototype.getMainTaskBtn = function () {
            var arg = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                arg[_i] = arguments[_i];
            }
            return this.conent.getMainTaskBtn(arg[0]);
            ;
        };
        return HomeWindow;
    }(Games.MWindow));
    Games.HomeWindow = HomeWindow;
})(Games || (Games = {}));
//# sourceMappingURL=HomeWindow.js.map