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
    var Produce;
    (function (Produce) {
        var Main = /** @class */ (function (_super) {
            __extends(Main, _super);
            function Main() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.PAPER_ID = 7; //图纸id
                _this.gradeLevelList = [];
                _this.buildIndex = -1;
                //一键领取
                _this.quickGetRewardsList = [];
                return _this;
            }
            // 窗口初始化完毕
            Main.prototype.onWindowInited = function () {
                this.m_produceList.scrollItemToViewOnClick = false;
                this.m_btn_close.onClick(this, this.onCloseWindow);
                this.m_btn_quickProduce.m_title.text = TEXT.ProduceQuickBtnName;
                this.m_btn_quickGetaward.m_title.text = TEXT.ProduceQuickAwardBtnName;
                this.m_btn_quickProduce.onClick(this, this.onQuickProduce);
                this.m_btn_quickGetaward.onClick(this, this.onQuickGetAwards);
                this.m_produceList.itemRenderer = new Handler(this, this.renderProducetem, null, false);
                this.initTabUI();
            };
            Main.prototype.onWindowShow = function () {
                this.showBuildRoom();
                this.setAssets();
                this.tabIndex = 0;
                this.onTabProduceList();
                Game.protoOkEvent.add(ProtoEventKey.ItemData, this.updateAssets, this);
                Game.protoOkEvent.add(ProtoEventKey.GameInfo, this.updateAssets, this);
                Game.protoOkEvent.add(ProtoEventKey.manageProduce_Produce, this.callBackProduce, this);
                Game.protoOkEvent.add(ProtoEventKey.manageProduce_Deblocking, this.callBackProduceLock, this);
                Game.protoOkEvent.add(ProtoEventKey.manageProduce_GetReward, this.callBackGetReward, this);
                Game.protoOkEvent.add(ProtoEventKey.manageProduce_Uplevel, this.callBackUplevel, this);
                Game.protoOkEvent.add(ProtoEventKey.manageProduce_SendActor, this.callBackSendActor, this);
                Game.protoOkEvent.add(ProtoEventKey.manageProduce_cleanTime, this.callBackCleanTime, this);
                Game.protoOkEvent.add(ProtoEventKey.manageProduce_QuickProduce, this.callBackQuickProduce, this);
                Game.protoOkEvent.add(ProtoEventKey.manageProduce_QuickGetReward, this.callBackQuickGetReward, this);
                // Game.event.dispatch(GameEventKey.GameEventKey_ScrollMainRoom, Games.RoomType.Depot);
                // Game.event.dispatch(GameEventKey.GameEventKey_EnabledScrollMain, false);
            };
            Main.prototype.onWindowHide = function () {
                this.hideBuildRoom();
                this.clearCurrentProduceList();
                Game.protoOkEvent.remove(ProtoEventKey.ItemData, this.updateAssets, this);
                Game.protoOkEvent.remove(ProtoEventKey.GameInfo, this.updateAssets, this);
                Game.protoOkEvent.remove(ProtoEventKey.manageProduce_Produce, this.callBackProduce, this);
                Game.protoOkEvent.remove(ProtoEventKey.manageProduce_Deblocking, this.callBackProduceLock, this);
                Game.protoOkEvent.remove(ProtoEventKey.manageProduce_GetReward, this.callBackGetReward, this);
                Game.protoOkEvent.remove(ProtoEventKey.manageProduce_Uplevel, this.callBackUplevel, this);
                Game.protoOkEvent.remove(ProtoEventKey.manageProduce_SendActor, this.callBackSendActor, this);
                Game.protoOkEvent.remove(ProtoEventKey.manageProduce_cleanTime, this.callBackCleanTime, this);
                Game.protoOkEvent.remove(ProtoEventKey.manageProduce_QuickProduce, this.callBackQuickProduce, this);
                Game.protoOkEvent.remove(ProtoEventKey.manageProduce_QuickGetReward, this.callBackQuickGetReward, this);
                // Game.event.dispatch(GameEventKey.GameEventKey_EnabledScrollMain, true);
            };
            Main.prototype.showBuildRoom = function () {
                this.buildRoom = Games.AvatarManager.context.getRoomByType(Games.RoomType.Depot);
                if (this.buildRoom != null) {
                    this.buildRoom.onRoomInScreen();
                    this.buildRoom.setRoomFrameVisible(false);
                    this.buildIndex = Games.AvatarManager.context.getRoomIndexByType(Games.RoomType.Depot);
                    this.buildRoom.setXY(-20, -4);
                    this.buildRoom.setScale(1.05, 1.05);
                    this.m_roomContainer.addChild(this.buildRoom.mainView);
                    //center
                    // let centerX = (this.m_roomContainer.width - this.buildRoom.width) * 0.5;
                    // this.buildRoom.setXY(centerX - 20, -4);
                    //scaleX
                    var scale = ScreenSetting.screenWidth / this.buildRoom.mainView.sourceWidth;
                    this.buildRoom.setScale(scale * 1.05, 1.05);
                }
            };
            Main.prototype.hideBuildRoom = function () {
                if (this.buildRoom) {
                    this.buildRoom.setXY(0, 0);
                    this.buildRoom.setScale(1, 1);
                    this.buildRoom.setRoomFrameVisible(true);
                    Games.AvatarManager.context.addRoomAt(this.buildRoom, this.buildIndex);
                }
            };
            //---------------------------
            // Response
            //---------------------------
            Main.prototype.callBackProduce = function (proto) {
                console.log("[Response] callBackProduce " + proto.uuid);
                var produceId = Game.moduleModel.produce.getProduceByUuid(proto.uuid).produceId;
                Games.Static.Instance.onUserorbit("product", produceId.toString(), "start");
                var renderItem = this.getRenderItem(produceId);
                if (renderItem) {
                    renderItem.updateSingleProduce();
                    this.eachRenderItem(function (value) {
                        if (!value.isOpen) {
                            value.updateProduce();
                        }
                    });
                    if (!renderItem.activeItem.isFirstLine) {
                        //showEffect
                        var startPos = this.m_assetListTitle.getAssetGloblePos(0);
                        var endPos = renderItem.ProduceLinePos;
                        // FguiHelper.tweenTarget(renderItem.activeItem.PAPER_ID, startPos, endPos, 300, Laya.stage);
                        FguiHelper.startTrailSingle(renderItem.activeItem.PAPER_ID, startPos, endPos, 300, Laya.stage);
                    }
                }
            };
            Main.prototype.callBackProduceLock = function (proto) {
                // console.log(`[Response] callBackProduceLock ${proto.produceId}`);
                var stall = Game.moduleModel.produce.getStall(proto.produceId);
                Games.Static.Instance.onUserorbit("product", stall + "&" + proto.produceId, "unlock");
                var index = this.getRenderItemIndex(proto.produceId);
                this.renderProducetem(index, this.m_produceList.getChildAt(index));
                this.eachRenderItem(function (value) {
                    if (!value.isOpen) {
                        value.updateProduce();
                    }
                });
                this.initQuickProcess();
            };
            Main.prototype.callBackGetReward = function (proto) {
                console.log("[Response] callBackGetReward " + proto.uuid);
                var produceId = Game.moduleModel.produce.getProduceByUuid(proto.uuid).produceId;
                var renderItem = this.getRenderItem(produceId);
                if (renderItem) {
                    renderItem.updateGetRewardView();
                    //showEffect
                    var startPos = renderItem.produceItemIconPos;
                    var endPos = void 0;
                    if (renderItem.activeItem.isFirstLine) {
                        endPos = this.m_assetListTitle.getAssetGloblePos(1);
                        FguiHelper.startTrail(renderItem.activeItem.itemId, startPos, endPos, 500, Laya.stage);
                    }
                    else {
                        endPos = new Point(Laya.stage.width, Laya.stage.height);
                        FguiHelper.startTrail(renderItem.activeItem.itemId, startPos, endPos, 500, Laya.stage);
                    }
                    //单个领取
                    Game.sound.playSound(SoundKey.MM09_GoldReward);
                }
            };
            Main.prototype.callBackUplevel = function (proto) {
                console.log("[Response] callBackUplevel " + proto.uuid);
                var produceId = Game.moduleModel.produce.getProduceByUuid(proto.uuid).produceId;
                var stall = Game.moduleModel.produce.getStall(produceId);
                Games.Static.Instance.onUserorbit("product", stall + "&" + produceId, "upgrade");
                var renderItem = this.getRenderItem(produceId);
                if (renderItem) {
                    renderItem.updateLevelupView(proto.skillId);
                }
            };
            Main.prototype.callBackSendActor = function (proto) {
                console.log("[Response] callBackSendActor " + proto.uuid + " " + proto.actBaseId);
                var produceId = Game.moduleModel.produce.getProduceByUuid(proto.uuid).produceId;
                var renderItem = this.getRenderItem(produceId);
                if (renderItem) {
                    renderItem.updateActorView(proto.actBaseId);
                    this.eachRenderItem(function (value) {
                        value.updateProduce();
                    });
                    //生产触发
                    if (proto.actBaseId > 0) {
                        Game.system.playSkillEffect(proto.actBaseId, Games.SkillTriggerType.production_earnings);
                    }
                }
            };
            Main.prototype.callBackCleanTime = function (proto) {
                console.log("[Response] callBackCleanTime " + proto.uuid);
                var produceId = Game.moduleModel.produce.getProduceByUuid(proto.uuid).produceId;
                var renderItem = this.getRenderItem(produceId);
                if (renderItem) {
                    renderItem.updateImmediateProduce();
                }
            };
            Main.prototype.callBackQuickProduce = function (proto) {
                this.eachRenderItem(function (value) {
                    value.updateSingleProduce();
                });
                var produceNum = proto.num;
                if (produceNum > 0) {
                    Game.system.toastText(Game.config.msg.getTxtFormat(MsgKey.produce_one_click, produceNum));
                }
            };
            Main.prototype.callBackQuickGetReward = function (proto) {
                if (this.quickGetRewardsList.length > 0) {
                    Game.system.getItemText(this.quickGetRewardsList, null, true);
                    this.quickGetRewardsList.length = 0;
                }
                this.eachRenderItem(function (value) {
                    value.updateGetRewardView();
                });
            };
            //初始assets列表
            Main.prototype.setAssets = function () {
                var assets = [7, 3, 1, 2];
                this.m_assetListTitle.setAssets(assets);
            };
            //更新assets列表
            Main.prototype.updateAssets = function () {
                this.m_assetListTitle.updateAssets();
                var children = this.m_produceList.numChildren;
                for (var i = 0; i < children; i++) {
                    var item = this.m_produceList.getChildAt(i);
                    item.updateAssets();
                }
            };
            Main.prototype.initTabUI = function () {
                var list = Game.config.produce.getConfigList();
                var currentGrade = 0;
                for (var i = 0; i < list.length; i++) {
                    if (currentGrade != list[i].grade) {
                        currentGrade = list[i].grade;
                        this.gradeLevelList.push(list[i].grade);
                    }
                }
                for (var i_1 = 0; i_1 < this.gradeLevelList.length; i_1++) {
                    var tab = this.m_tabList.getChild("tab" + i_1);
                    var txtTitle = tab.getChild("nomalTitle");
                    var txtSelectTitle = tab.getChild("selectTitle");
                    txtTitle.text = format(TEXT.ProduceGrade, (i_1 + 1));
                    txtSelectTitle.text = format(TEXT.ProduceGrade, (i_1 + 1));
                    ;
                    tab.onClick(this, this.onTabGradeChange);
                }
            };
            Object.defineProperty(Main.prototype, "tabIndex", {
                get: function () {
                    return this.m_tabList.m_cTab.selectedIndex;
                },
                set: function (value) {
                    this.m_tabList.m_cTab.setSelectedIndex(value);
                    //OpenTab
                    this.moduleWindow.openTab(this.tabIndex);
                },
                enumerable: true,
                configurable: true
            });
            Main.prototype.onTabGradeChange = function (e) {
                this.tabIndex = this.m_tabList.m_cTab.selectedIndex;
                this.onTabProduceList();
            };
            //显示档位生产列表
            Main.prototype.onTabProduceList = function () {
                this.clearCurrentProduceList();
                this.curTabProduceList = this.getProduceListGrade(this.gradeLevelList[this.tabIndex]);
                this.m_produceList.numItems = this.curTabProduceList.length;
                this.m_produceList.scrollToView(0, false);
                this.initQuickProcess();
            };
            Main.prototype.clearCurrentProduceList = function () {
                var childNum = this.m_produceList.numChildren;
                for (var i = 0; i < childNum; i++) {
                    var renderItem = this.m_produceList.getChildAt(i);
                    if (renderItem.isOpen) {
                        renderItem.activeItem.dispose();
                    }
                }
                this.m_produceList.numItems = 0;
            };
            //渲染单项
            Main.prototype.renderProducetem = function (index, item) {
                var data = this.curTabProduceList[index];
                item.setData(data, this.tabIndex);
            };
            Main.prototype.getRenderItemIndex = function (produceId) {
                var children = this.m_produceList.numChildren;
                for (var i = 0; i < children; i++) {
                    var item = this.m_produceList.getChildAt(i);
                    if (item.produceId == produceId) {
                        return i;
                    }
                }
                return -1;
            };
            Main.prototype.getRenderItem = function (produceId) {
                var index = this.getRenderItemIndex(produceId);
                if (index != -1) {
                    return this.m_produceList.getChildAt(index);
                }
                return null;
            };
            //获取解锁生产列表
            Main.prototype.getUnlockItemList = function () {
                var result = [];
                var children = this.m_produceList.numChildren;
                for (var i = 0; i < children; i++) {
                    var item = this.m_produceList.getChildAt(i);
                    if (item.isOpen) {
                        result.push(item);
                    }
                }
                return result;
            };
            Main.prototype.eachRenderItem = function (handler) {
                var children = this.m_produceList.numChildren;
                for (var i = 0; i < children; i++) {
                    var item = this.m_produceList.getChildAt(i);
                    handler(item);
                }
            };
            /**
             * 获取档位生产列表
             * @param grade
             */
            Main.prototype.getProduceListGrade = function (grade) {
                var produceList = Game.config.produce.getConfigList();
                return produceList.filter(function (value, index, array) {
                    return value.grade == grade;
                });
            };
            //一键生产，领取
            Main.prototype.initQuickProcess = function () {
                var isQuickProduceOpen = this.checkQuickProduceBlockStreetLevel();
                if (isQuickProduceOpen) {
                    FguiHelper.clearFilters(this.m_btn_quickProduce);
                }
                else {
                    FguiHelper.setGray(this.m_btn_quickProduce);
                }
                var isQuickRewardOpen = this.checkQuickAwardBlockStreetLevel();
                if (isQuickRewardOpen) {
                    FguiHelper.clearFilters(this.m_btn_quickGetaward);
                }
                else {
                    FguiHelper.setGray(this.m_btn_quickGetaward);
                }
                this.m_btn_quickProduce.visible = true;
                this.m_btn_quickGetaward.visible = true;
                var unlockList = this.getUnlockItemList();
                if (unlockList.length == 0) {
                    this.m_btn_quickProduce.visible = false;
                    this.m_btn_quickGetaward.visible = false;
                }
            };
            // 一键生产
            Main.prototype.onQuickProduce = function () {
                if (!this.checkQuickProduceBlockStreetLevel()) {
                    var blockStreetId = Game.config.global.getConfig(GlobalKey.produce_production_less).value;
                    var blockStreetCfg = Game.config.blockLevel.getConfig(blockStreetId);
                    var blockStreetName = "";
                    blockStreetCfg && (blockStreetName = blockStreetCfg.name);
                    Game.system.toastText(Game.config.msg.getTxtFormat(MsgKey.produce_provip_less, blockStreetName));
                    return;
                }
                var unlockList = this.getUnlockItemList();
                var matchs = unlockList.filter(function (value, index, array) {
                    return value.activeItem.checkAll();
                });
                if (matchs.length == 0) {
                    if (this.checkPaperZero()) { }
                    else if (this.checkProduceLineFull(unlockList)) { }
                    else if (this.checkOutputFull(unlockList)) { }
                    return;
                }
                else {
                    //检查生产图纸是否够总生产
                    // if (ItemHelper.getItemNum(this.PAPER_ID) < matchs.length)
                    // {
                    // 	Game.system.toastText(Game.config.msg.getTxt(MsgKey.produce_paper_less));
                    // 	return;
                    // }
                    //优先生产库存量少的，生成线id小的
                    // matchs = matchs.sort((a, b) =>
                    // {
                    // 	let num = a.activeItem.currentItemNum - b.activeItem.currentItemNum;
                    // 	if (num == 0)
                    // 	{
                    // 		return a.produceId - b.produceId;
                    // 	}
                    // 	return num;
                    // });
                    // //Quick Produce
                    // matchs.forEach((value, index, array) =>
                    // {
                    // 	if (value.activeItem.checkAll())
                    // 	{
                    // 		value.activeItem.onProduceClick();
                    // 	}
                    // });
                    //Request
                    Game.protosender.manageProduce.QuickProduce(this.gradeLevelList[this.tabIndex]);
                }
            };
            Main.prototype.checkPaperZero = function () {
                if (ItemHelper.getItemNum(this.PAPER_ID) == 0) {
                    Game.system.openItemWay(this.PAPER_ID, 1);
                    // Game.system.toastText(Game.config.msg.getTxt(MsgKey.produce_paper_less));
                    return true;
                }
                return false;
            };
            Main.prototype.checkProduceLineFull = function (activeItemList) {
                var isMatch = false;
                activeItemList.forEach(function (vaule, index, array) {
                    if (vaule.activeItem.checkProcessLineFull()) {
                        Game.system.toastText(Game.config.msg.getTxt(MsgKey.produce_lines_max));
                        isMatch = true;
                        return;
                    }
                });
                return isMatch;
            };
            Main.prototype.checkOutputFull = function (activeItemList) {
                var isMatch = false;
                activeItemList.forEach(function (vaule, index, array) {
                    if (vaule.activeItem.checkOutputFull()) {
                        Game.system.toastText(Game.config.msg.getTxt(MsgKey.produce_item_max));
                        isMatch = true;
                        return;
                    }
                });
                return isMatch;
            };
            Main.prototype.checkQuickProduceBlockStreetLevel = function () {
                var blockStreetLevel = Game.config.global.getConfig(GlobalKey.produce_production_less).value;
                return User.info.stall >= blockStreetLevel;
            };
            Main.prototype.onQuickGetAwards = function () {
                var _this = this;
                if (this.checkQuickGetAwards()) {
                    var unlockList = this.getUnlockItemList();
                    var matchs = unlockList.filter(function (value, index, array) {
                        return value.activeItem.isCanGetItem();
                    });
                    //仓库不足时优先领取id小的
                    // matchs = matchs.sort((a, b) =>
                    // {
                    // 	return a.produceId - b.produceId;
                    // });
                    //Quick GetAward
                    this.quickGetRewardsList.length = 0;
                    matchs.forEach(function (value, index, array) {
                        if (value.activeItem.isCanGetItem()) {
                            var dtItem = new DTItemNum();
                            dtItem.itemId = value.activeItem.itemId;
                            dtItem.itemNum = value.activeItem.getOutItemNum();
                            _this.quickGetRewardsList.push(dtItem);
                            // value.activeItem.onGetItemClick();
                        }
                    });
                    if (!this.checkDepotCapacityEnough()) {
                        Game.system.toastText(Game.config.msg.getTxt(MsgKey.produce_warehouse_max));
                        return false;
                    }
                    if (Game.moduleModel.bag.IsBagFull(this.quickGetRewardsList.length)) {
                        Game.system.toastText(Game.config.msg.getTxt(MsgKey.produce_warehouse_max));
                        return false;
                    }
                    //Request
                    Game.protosender.manageProduce.QuickGetReward(this.gradeLevelList[this.tabIndex]);
                }
            };
            //检查一键领取
            Main.prototype.checkQuickGetAwards = function (useAlert) {
                if (useAlert === void 0) { useAlert = true; }
                if (!this.checkQuickAwardBlockStreetLevel()) {
                    if (useAlert) {
                        var blockStreetId = Game.config.global.getConfig(GlobalKey.produce_collection_less).value;
                        var blockStreetCfg = Game.config.blockLevel.getConfig(blockStreetId);
                        var blockStreetName = "";
                        blockStreetCfg && (blockStreetName = blockStreetCfg.name);
                        Game.system.toastText(Game.config.msg.getTxtFormat(MsgKey.produce_recvip_less, blockStreetName));
                    }
                    return false;
                }
                if (!this.checkhasOutItem()) {
                    if (useAlert)
                        Game.system.toastText(Game.config.msg.getTxt(MsgKey.produce_item_less));
                    return false;
                }
                return true;
            };
            Main.prototype.checkQuickAwardBlockStreetLevel = function () {
                var blockStreetLevel = Game.config.global.getConfig(GlobalKey.produce_collection_less).value;
                return User.info.stall >= blockStreetLevel;
            };
            Main.prototype.checkDepotCapacityEnough = function () {
                if (!Game.moduleModel.building.hasBuildByType(Games.RoomType.Depot)) {
                    return false;
                }
                if (Game.moduleModel.bag.IsBagFull()) {
                    return false;
                }
                return true;
            };
            Main.prototype.checkhasOutItem = function () {
                var unlockList = this.getUnlockItemList();
                var matchs = unlockList.filter(function (value, index, array) {
                    return value.activeItem.isCanGetItem();
                });
                if (matchs.length == 0) {
                    return false;
                }
                return true;
            };
            //关闭界面
            Main.prototype.onCloseWindow = function () {
                Game.menu.close(MenuId.Produce);
            };
            return Main;
        }(Produce.MainStruct));
        Produce.Main = Main;
    })(Produce = fgui.Produce || (fgui.Produce = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=Main.js.map