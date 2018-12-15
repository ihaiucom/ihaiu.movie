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
    /**
     *页签
     */
    var ArtistDetailTabType;
    (function (ArtistDetailTabType) {
        ArtistDetailTabType[ArtistDetailTabType["Base"] = 0] = "Base";
        ArtistDetailTabType[ArtistDetailTabType["Skill"] = 1] = "Skill";
        ArtistDetailTabType[ArtistDetailTabType["Asset"] = 2] = "Asset";
        ArtistDetailTabType[ArtistDetailTabType["Expert"] = 3] = "Expert";
        ArtistDetailTabType[ArtistDetailTabType["Assistant"] = 4] = "Assistant";
    })(ArtistDetailTabType = Games.ArtistDetailTabType || (Games.ArtistDetailTabType = {}));
    var ArtistDetailWindow = /** @class */ (function (_super) {
        __extends(ArtistDetailWindow, _super);
        function ArtistDetailWindow() {
            var _this = _super.call(this) || this;
            _this.tabstrs = [Games.TEXT.ActorTabBase, Games.TEXT.ActorTabSkill, Games.TEXT.ActorTabAsset, Games.TEXT.ActorTabExport, Games.TEXT.ActorTabAgent]; //, 
            // 添加依赖资源
            _this.addAssetForFguiComponent(fgui.ArtistDetail.ArtistDetailUI);
            return _this;
        }
        // 菜单创建
        ArtistDetailWindow.prototype.onMenuCreate = function () {
            this.conent = fgui.ArtistDetail.ArtistDetailUI.createInstance();
            this.contentPane = this.conent;
            // this.center();
            this.createTabPanel();
            // //弹出窗口的动效已中心为轴心
            // this.setPivot(0.5, 0.5);
            _super.prototype.onMenuCreate.call(this);
        };
        // 生成动态预加载资源
        ArtistDetailWindow.prototype.generateAssetsForDynmic = function () {
            _super.prototype.generateAssetsForDynmic.call(this);
            // this.addDynmicAssetForAvatarAll(Game.config.avatar.getConfig(1001));
        };
        //创建页签面板
        ArtistDetailWindow.prototype.createTabPanel = function () {
            this.basePanel = this.conent.m_basePanel;
            this.skillPanel = this.conent.m_skillPanel;
            this.assetPanel = this.conent.m_assetPanel;
            this.expertPanel = this.conent.m_expertPanel;
            this.assistantPanel = this.conent.m_assistantPanel;
            this.registerTab(ArtistDetailTabType.Base, this.basePanel);
            this.registerTab(ArtistDetailTabType.Skill, this.skillPanel);
            this.registerTab(ArtistDetailTabType.Asset, this.assetPanel);
            this.registerTab(ArtistDetailTabType.Expert, this.expertPanel);
            this.registerTab(ArtistDetailTabType.Assistant, this.assistantPanel);
        };
        // 菜单打开事件，传递参数
        ArtistDetailWindow.prototype.onMenuOpen = function (parameter) {
            _super.prototype.onMenuOpen.call(this, parameter);
        };
        /**
         * 刷新界面信息
         */
        ArtistDetailWindow.prototype.openUpdateView = function () {
            laya.events.MouseManager.multiTouchEnabled = false;
            this.startTouchPos = new laya.maths.Point();
            var args = this.menuParameter.args;
            var tabIndex = 0;
            if (args.length > 1) {
                tabIndex = args[1];
            }
            this.currentIndex = tabIndex;
            this.actors = Game.moduleModel.actor.getActors();
            this.currentActorIndex = 0;
            this.conent.m_frozenBtn.visible = true;
            if (args.length > 0) {
                var actorId = args[0];
                var isHide = Game.moduleModel.actor.isHide(actorId);
                var actorData = Game.moduleModel.actor.getActor(actorId);
                if (isHide) {
                    this.actors = [actorData];
                    this.conent.m_frozenBtn.visible = false;
                }
                else {
                    this.currentActorIndex = this.actors.indexOf(actorData);
                }
            }
            this.conent.m_tablist.selectedIndex = this.currentIndex;
            this.updateActor();
        };
        ArtistDetailWindow.prototype.onUpdateTabItem = function (index, itemObject) {
            var tItem = itemObject;
            itemObject.text = this.tabstrs[index];
            tItem.m_red.visible = false;
            var isOpen = this.isOpenTab(index);
            if (isOpen) {
                tItem.enabled = true;
            }
            else {
                tItem.enabled = false;
            }
            tItem.touchable = true;
        };
        ArtistDetailWindow.prototype.isOpenTab = function (index) {
            var isOpen = true;
            if (index == ArtistDetailTabType.Asset) {
                isOpen = Game.moduleModel.actor.isOpenAsset;
            }
            else if (index == ArtistDetailTabType.Skill) {
                isOpen = Game.moduleModel.actor.isOpenSkill;
            }
            else if (index == ArtistDetailTabType.Assistant && this.currentActor) {
                isOpen = this.currentActor.isOpenAssistant;
            }
            return isOpen;
        };
        ArtistDetailWindow.prototype.clickTabItem = function (itemObject) {
            var index = this.conent.m_tablist.getChildIndex(itemObject);
            var isOpen = this.isOpenTab(index);
            var tip = "";
            if (index == ArtistDetailTabType.Asset) {
                tip = Game.moduleModel.actor.openAssetTip;
            }
            else if (index == ArtistDetailTabType.Skill) {
                tip = Game.moduleModel.actor.openSkillTip;
            }
            else if (index == ArtistDetailTabType.Assistant) {
                tip = Game.moduleModel.actor.openAssistantTip;
            }
            if (isOpen) {
                if (this.currentIndex != index) {
                    this.currentIndex = index;
                    this.openTab(index);
                }
            }
            else {
                this.conent.m_tablist.selectedIndex = this.currentIndex;
                Game.system.toastText(tip);
            }
        };
        //=========================
        // 显示完成
        // 可以在这里添加协议消息监听
        //-------------------------
        ArtistDetailWindow.prototype.onShowComplete = function () {
            _super.prototype.onShowComplete.call(this);
            this.conent.m_closeBtn.onClick(this, this.onClickCloseBtn);
            this.conent.m_frozenBtn.onClick(this, this.onClickFrozenBtn);
            this.conent.m_renameBtn.onClick(this, this.onClickRenameBtn);
            this.conent.m_tablist.on(fairygui.Events.CLICK_ITEM, this, this.clickTabItem);
            this.conent.m_tablist.itemRenderer = Handler.create(this, this.onUpdateTabItem, null, false);
            Game.moduleModel.actor.sUpdateActorInfo.add(this.onUpdateActorInfo, this);
            Game.protoOkEvent.add(ProtoEventKey.ItemData, this.updateView, this);
            this.conent.on(laya.events.Event.MOUSE_DOWN, this, this.onMouseDown);
            this.conent.on(laya.events.Event.MOUSE_MOVE, this, this.onMouseMove);
            this.conent.on(laya.events.Event.MOUSE_UP, this, this.onMouseUp);
            Game.protoOkEvent.add(ProtoEventKey.Actor_HideActor, this.onHideActor, this);
        };
        //=========================
        // 隐藏完成
        // 可以在这里移除协议消息监听
        //-------------------------
        ArtistDetailWindow.prototype.onHideComplete = function () {
            _super.prototype.onHideComplete.call(this);
            this.conent.clearProps();
            this.conent.m_closeBtn.offClick(this, this.onClickCloseBtn);
            this.conent.m_frozenBtn.offClick(this, this.onClickFrozenBtn);
            this.conent.m_renameBtn.offClick(this, this.onClickRenameBtn);
            this.conent.m_tablist.off(fairygui.Events.CLICK_ITEM, this, this.clickTabItem);
            this.conent.m_tablist.itemRenderer.recover();
            Game.moduleModel.actor.sUpdateActorInfo.remove(this.onUpdateActorInfo, this);
            Game.protoOkEvent.remove(ProtoEventKey.ItemData, this.updateView, this);
            Game.protoOkEvent.remove(ProtoEventKey.Actor_HideActor, this.onHideActor, this);
            this.conent.off(laya.events.Event.MOUSE_DOWN, this, this.onMouseDown);
            this.conent.off(laya.events.Event.MOUSE_MOVE, this, this.onMouseMove);
            this.conent.off(laya.events.Event.MOUSE_UP, this, this.onMouseUp);
        };
        ArtistDetailWindow.prototype.updateView = function () {
            this.conent.updateView(this.currentActor);
            this.updateTabView(this.currentIndex);
        };
        ArtistDetailWindow.prototype.onHideActor = function (msg) {
            if (msg.result == 0 && this.currentActor && this.currentActor.hide) {
                this.onClickCloseBtn();
            }
        };
        /**
         * 更新信息
         */
        ArtistDetailWindow.prototype.onUpdateActorInfo = function (data) {
            if (data.hide) {
                return;
            }
            if (this.currentActor.id == data.id) {
                this.conent.updateView(data);
                this.currentActor = data;
            }
            // this.updateTabView(this.currentIndex);
            this.updateActor();
        };
        /**
         * 重命名
         */
        ArtistDetailWindow.prototype.onClickRenameBtn = function () {
            var _this = this;
            var url = Game.config.avatar.getConfig(this.currentActor.config.avatar).bodyIconUrl;
            Game.system.openRename(Games.TEXT.RenameTip, null, function (txt) {
                if (txt == _this.currentActor.name) {
                    Game.system.toastText(Games.TEXT.SameActorName);
                }
                else {
                    Game.protosender.Actor.actorChangeName(_this.currentActor.uuid, txt);
                    Game.system.hideRename();
                }
            }, null, Games.TEXT.Rename, "", Games.TEXT.Input4toNumChar, 18, url, GlobalConfig.getValue1(GlobalKey.KEY_1010_ZiDingYiYi__MingChenXiaoHao), false, Game.config.gameRandomName.getConfig(this.currentActor.config.random_name).names);
        };
        /**
         * 关闭按钮
         */
        ArtistDetailWindow.prototype.onClickCloseBtn = function () {
            this.menuBack();
        };
        /**
         * 雪藏
         */
        ArtistDetailWindow.prototype.onClickFrozenBtn = function () {
            if (Game.moduleModel.actor.getActorLen() == 1) {
                Game.system.toastText(Games.TEXT.DisHideAllActor);
            }
            else if (Game.moduleModel.actor.isUseInMovie(this.currentActor.id)) {
                Game.system.toastText(Games.TEXT.DisHideActorInUse);
            }
            else {
                if (Game.moduleModel.actor.actorHideIsMax) {
                    Game.system.toastText(Games.TEXT.HideActorMax);
                }
                else {
                    Game.system.confirmText(format(Games.TEXT.SureHideActor, this.currentActor.name), "", this, this.onClickComfirm);
                }
            }
        };
        ArtistDetailWindow.prototype.onClickComfirm = function () {
            Game.protosender.Actor.hideActor(this.currentActor.uuid, true);
        };
        ArtistDetailWindow.prototype.onOpenTab = function (tabIndex) {
            _super.prototype.onOpenTab.call(this, tabIndex);
            this.updateTabView(tabIndex);
        };
        ArtistDetailWindow.prototype.updateTabView = function (tabIndex) {
            if (this.currentActor == null) {
                return;
            }
            this.conent.m_c_visble_panel.selectedIndex = tabIndex;
            switch (tabIndex) {
                case ArtistDetailTabType.Base:
                    this.basePanel.updateView(this.currentActor);
                    break;
                case ArtistDetailTabType.Skill:
                    this.skillPanel.updateView(this.currentActor);
                    break;
                case ArtistDetailTabType.Asset:
                    this.assetPanel.updateView(this.currentActor);
                    break;
                case ArtistDetailTabType.Expert:
                    this.expertPanel.updateView(this.currentActor);
                    break;
                case ArtistDetailTabType.Assistant:
                    this.assistantPanel.updateView(this.currentActor);
                    break;
                default:
                    break;
            }
        };
        ArtistDetailWindow.prototype.onMouseDown = function (event) {
            var touches = event.touches;
            if (touches == null) {
                this.isMouseDown = true;
                this.startTouchPos.x = event.stageX;
                this.startTouchPos.y = event.stageY;
                this.snapDir = Games.DirtionType.None;
            }
            else if (touches.length == 1) {
                this.isMouseDown = true;
                this.startTouchPos.x = event.stageX;
                this.startTouchPos.y = event.stageY;
                this.snapDir = Games.DirtionType.None;
            }
            else {
                this.isMouseDown = false;
                this.snapDir = Games.DirtionType.None;
            }
        };
        ArtistDetailWindow.prototype.onMouseMove = function (event) {
            if (this.isMouseDown == true) {
                var stageX = event.stageX;
                var stageY = event.stageY;
                var distanceY = Math.abs(this.startTouchPos.y - stageY);
                var distanceX = Math.abs(this.startTouchPos.x - stageX);
                if (distanceX > fairygui.GRoot.inst.width * 0.3 && distanceY < fairygui.GRoot.inst.height * 0.1) {
                    var dir;
                    if (stageX > this.startTouchPos.x) {
                        dir = Games.DirtionType.Right;
                    }
                    else {
                        dir = Games.DirtionType.Left;
                    }
                    if (this.snapDir != dir) {
                        this.startTouchPos.x = stageX;
                        this.startTouchPos.y = stageY;
                    }
                    this.snapDir = dir;
                }
            }
        };
        ArtistDetailWindow.prototype.onMouseUp = function (event) {
            if (this.isMouseDown) {
                this.isMouseDown = false;
                if (this.snapDir == Games.DirtionType.Left) {
                    this.changeLastActor();
                }
                else if (this.snapDir == Games.DirtionType.Right) {
                    this.changePreActor();
                }
                this.snapDir = Games.DirtionType.None;
            }
        };
        /**
         * 更新演员
         */
        ArtistDetailWindow.prototype.updateActor = function () {
            this.currentActor = this.actors[this.currentActorIndex];
            if (this.currentActor) {
                this.conent.updateView(this.currentActor);
            }
            Game.moduleModel.actor.selectActor = this.currentActor;
            this.conent.m_tablist.numItems = this.tabstrs.length;
            if (this.isOpenTab(this.currentIndex) == false) {
                this.currentIndex = ArtistDetailTabType.Base;
                this.conent.m_tablist.selectedIndex = this.currentIndex;
            }
            this.openTab(this.currentIndex);
        };
        //前一个
        ArtistDetailWindow.prototype.changePreActor = function () {
            this.currentActorIndex--;
            if (this.currentActorIndex < 0) {
                this.currentActorIndex = this.actors.length - 1;
            }
            this.updateActor();
        };
        //后一个
        ArtistDetailWindow.prototype.changeLastActor = function () {
            this.currentActorIndex++;
            if (this.currentActorIndex >= this.actors.length) {
                this.currentActorIndex = 0;
            }
            this.updateActor();
        };
        //
        ArtistDetailWindow.prototype.effectAsset = function () {
            this.conent.m_tablist.selectedIndex = ArtistDetailTabType.Asset;
            this.currentIndex = ArtistDetailTabType.Asset;
            this.openTab(ArtistDetailTabType.Asset);
            this.assetPanel.playeffect();
        };
        ArtistDetailWindow.prototype.selectTab = function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            return this.conent.getSelectTab(args[0]);
        };
        ArtistDetailWindow.prototype.trainBtn = function () {
            return this.basePanel.m_upgradeBtn;
        };
        return ArtistDetailWindow;
    }(Games.MWindow));
    Games.ArtistDetailWindow = ArtistDetailWindow;
})(Games || (Games = {}));
//# sourceMappingURL=ArtistDetailWindow.js.map