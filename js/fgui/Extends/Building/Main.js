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
    var Building;
    (function (Building) {
        var AvatarManager = Games.AvatarManager;
        var Main = /** @class */ (function (_super) {
            __extends(Main, _super);
            function Main() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                //已扩建楼层列表
                _this.floorRoomList = [];
                //楼层索引
                _this.floorIndex = 0;
                //显示屏幕中房间
                _this.point = new Point();
                return _this;
            }
            Main.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                AvatarManager.init(this);
                Games.BuildingProcessMgr.install();
                this.init();
            };
            Main.prototype.init = function () {
                //监听事件
                Game.protoOkEvent.add(ProtoEventKey.CinemaBuild_ExtendFloor, this.onServerBuildFloor, this);
                Game.protoOkEvent.add(ProtoEventKey.CinemaBuild_BuildRoom, this.onServerBuildRoom, this);
                Game.protoOkEvent.add(ProtoEventKey.CinemaBuild_UpgradeRoom, this.onServerRoomUpgrade, this);
                Game.event.add(GameEventKey.GameEventKey_ScrollMainRoom, this.onScrollToRoom, this);
                Game.event.add(GameEventKey.GameEventKey_EnabledScrollMain, this.onEnabledScrollMain, this);
                Game.event.add(GameEventKey.GameEventKey_StartReception, this.onStartReception, this);
                Game.protoOkEvent.add(ProtoEventKey.city_HoldCity, this.setBuildFloorStatus, this);
                Game.event.add(GameEventKey.GameEventKey_PlayerLevelUp, this.setBuildFloorStatus, this);
                //setUI
                this.m_BuildList.touchable = true;
                this.m_BuildList.lineGap = -5;
                this.m_BuildList.ensureBoundsCorrect();
                this.m_BuildList.scrollItemToViewOnClick = false;
                this.m_main_bottom.visible = true;
                this.m_BuildList.addChild(this.m_main_bottom);
                this.m_main_top.visible = true;
                this.m_BuildList.addChildAt(this.m_main_top, 0);
                //更新房间信息
                this.setBuildRoomInfo();
                Laya.timer.loop(50, this, this.onTimeShowScreenRoom, null, true, true);
            };
            Main.prototype.onTimeShowScreenRoom = function () {
                var isOpenHomeWindow = Game.menu.isOpened(MenuId.Home);
                var childNum = this.m_BuildList.numChildren;
                for (var i = 0; i < childNum; i++) {
                    var buildItem = this.m_BuildList.getChildAt(i);
                    //主界面关闭时暂停房间事件
                    if (isOpenHomeWindow) {
                        if (buildItem instanceof Building.BuildRoom) {
                            buildItem.onRoomResumeEvent();
                        }
                    }
                    else {
                        if (buildItem instanceof Building.BuildRoom) {
                            buildItem.onRoomPauseEvent();
                        }
                    }
                    //房间显示隐藏
                    this.point.x = 0;
                    this.point.y = 0;
                    var globalPos = buildItem.displayObject.localToGlobal(this.point);
                    if (globalPos.y + buildItem.height <= 0 || globalPos.y >= Laya.stage.height) {
                        buildItem.visible = false;
                        if (buildItem instanceof Building.BuildRoom) {
                            buildItem.onRoomOutScreen();
                        }
                    }
                    else {
                        buildItem.visible = true;
                        if (buildItem instanceof Building.BuildRoom) {
                            buildItem.onRoomInScreen();
                        }
                    }
                }
            };
            Main.prototype.onWindowShow = function () {
                // Game.protoOkEvent.add(ProtoEventKey.CinemaBuild_ExtendFloor, this.onServerBuildFloor, this);
                // Game.protoOkEvent.add(ProtoEventKey.CinemaBuild_BuildRoom, this.onServerBuildRoom, this);
                // Game.protoOkEvent.add(ProtoEventKey.CinemaBuild_UpgradeRoom, this.onServerRoomUpgrade, this);
                // Game.event.add(GameEventKey.GameEventKey_ScrollMainRoom, this.onScrollToRoom, this);
                // Game.event.add(GameEventKey.GameEventKey_EnabledScrollMain, this.onEnabledScrollMain, this);
                // Game.event.add(GameEventKey.GameEventKey_StartReception, this.onStartReception, this);
            };
            Main.prototype.onWindowHide = function () {
                // Game.protoOkEvent.remove(ProtoEventKey.CinemaBuild_ExtendFloor, this.onServerBuildFloor, this);
                // Game.protoOkEvent.remove(ProtoEventKey.CinemaBuild_BuildRoom, this.onServerBuildRoom, this);
                // Game.protoOkEvent.remove(ProtoEventKey.CinemaBuild_UpgradeRoom, this.onServerRoomUpgrade, this);
                // Game.event.remove(GameEventKey.GameEventKey_ScrollMainRoom, this.onScrollToRoom, this);
                // Game.event.remove(GameEventKey.GameEventKey_EnabledScrollMain, this.onEnabledScrollMain, this);
                // Game.event.remove(GameEventKey.GameEventKey_StartReception, this.onStartReception, this);
            };
            Main.prototype.onWindowResize = function () {
                for (var i = 0; i < this.m_BuildList.numChildren; i++) {
                    var item = this.m_BuildList.getChildAt(i);
                    if (item["m_buildScene"]) {
                        var buildRoom = item;
                        buildRoom.setSceneSizeForState();
                    }
                    else {
                        item.width = ScreenSetting.screenWidth;
                        var scale = item.width / item.sourceWidth;
                        item.height = item.sourceHeight * scale;
                    }
                }
            };
            //更新已建造房屋信息
            Main.prototype.setBuildRoomInfo = function () {
                for (var _i = 0, _a = User.info.buildRoomInfo; _i < _a.length; _i++) {
                    var sRoomInfo = _a[_i];
                    var room = this.creatBuildRoom();
                    room.setInfo(Games.RoomInfo.creatInfo(sRoomInfo));
                    room.onBuildComplete(room.roomInfo);
                    Game.moduleModel.building.addRoomInfo(room.roomInfo);
                }
                this.floorIndex = User.info.extendFloor;
                Game.moduleModel.building.floorIndex = User.info.extendFloor;
                if (User.info.buildRoomInfo.length < this.floorIndex) {
                    // 已扩建还没建造房间
                    this.creatBuildFloor(this.floorIndex, true);
                }
                else {
                    this.showNextFloor();
                }
                //分配艺人,Npc
                AvatarManager.allocAvatarListToRoom();
            };
            /**
             * 创建楼层
             * @param floor 等待扩建楼层
             * @param isBuildFloor  是否已扩建楼层
             */
            Main.prototype.creatBuildFloor = function (floor, isBuildFloor, isScrollTop) {
                if (isBuildFloor === void 0) { isBuildFloor = false; }
                if (isScrollTop === void 0) { isScrollTop = true; }
                var room = this.m_BuildList.addItemFromPool();
                room.floorInfo.index = floor;
                room.init();
                if (isBuildFloor) {
                    room.waitBuindRoom();
                    room.m_btn_buildRoom.onClick(this, this.onBuildRoomClick);
                }
                else {
                    room.buildFloor();
                    room.m_btn_buildFloor.onClick(this, this.onBuildFloorClick, [room]);
                }
                this.m_BuildList.setChildIndex(room, 1);
                if (isScrollTop) {
                    this.m_BuildList.scrollToView(1, true, true);
                }
                else {
                    // this.m_BuildList.scrollToView(2, true, true);
                    this.m_BuildList.scrollToView(1, true, true);
                }
                this.currentFloorRoom = room;
                this.floorRoomList.push(room);
                return room;
            };
            /**
             * 建造建筑
             */
            Main.prototype.creatBuildRoom = function () {
                var room = this.m_BuildList.addItemFromPool();
                room.m_btn_roomName.onClick(this, this.onRoomTitleClick, [room]);
                this.m_BuildList.setChildIndex(room, 1);
                this.m_BuildList.scrollToView(1, true, true);
                this.floorRoomList.push(room);
                return room;
            };
            //扩建
            Main.prototype.showNextFloor = function (isScrollTop) {
                if (isScrollTop === void 0) { isScrollTop = true; }
                if (this.checkTopFloor()) {
                    return null;
                }
                var room = this.creatBuildFloor(this.floorIndex + 1, false, isScrollTop);
                this.setBuildFloorStatus();
                return room;
            };
            //更新扩建状态
            Main.prototype.setBuildFloorStatus = function () {
                var result = this.checkBuildFloorLevelCondition();
                if (!result.result) //build floor fail
                 {
                    this.currentFloorRoom.showFailBuildFloorReason(result.reason);
                }
                else {
                    this.currentFloorRoom.hideFailBuildFloorReason();
                }
            };
            /**
             * 扩建房间
             * @param room
             * @param url
             */
            Main.prototype.onBuildFloorClick = function (room) {
                if (this.checkBuildFloorCondition(true).result) {
                    var self_1 = {
                        expandFloorCallBack: function () {
                            //请求扩建楼层
                            Game.protosender.CinemaBuild.ExtendFloor(room.floorInfo.index);
                        }
                    };
                    if (this.isBuildFreeFloor) {
                        //请求扩建楼层
                        Game.protosender.CinemaBuild.ExtendFloor(room.floorInfo.index);
                    }
                    else {
                        var floorCfg = Game.config.floor.getConfig(room.floorInfo.index);
                        Game.system.confirmTextIcon([floorCfg.cost], TEXT.BuildTitle, format(TEXT.BuildFloorAlert, room.floorInfo.index), self_1.expandFloorCallBack, self_1);
                    }
                }
            };
            Main.prototype.onServerBuildFloor = function (msg) {
                var _this = this;
                this.currentFloorRoom.showBuildEffect();
                this.setRoomTouchable(false);
                Game.sound.playSound(SoundKey.MM06_Building);
                setTimeout(function () {
                    _this.currentFloorRoom.clearBuildEffect();
                    _this.setRoomTouchable(true);
                    User.info.extendFloor = Game.moduleModel.building.floorIndex;
                    _this.floorIndex = User.info.extendFloor;
                    _this.currentFloorRoom.waitBuindRoom();
                    _this.currentFloorRoom.updateLoaderTexture();
                    _this.currentFloorRoom.m_btn_buildRoom.onClick(_this, _this.onBuildRoomClick);
                    Game.guide.finishFirstStep();
                }, 3000);
            };
            /**
             * 建造楼层
             */
            Main.prototype.onBuildRoomClick = function () {
                Game.menu.open(MenuId.BuildRoomList, this.floorIndex);
            };
            /**
             * 建造房间完成
             * @param floor
             * @param roomId
             */
            Main.prototype.onServerBuildRoom = function (msg) {
                var _this = this;
                this.setRoomTouchable(false);
                this.currentFloorRoom.showBuildEffect();
                setTimeout(function () {
                    _this.setRoomTouchable(true);
                    _this.currentFloorRoom.clearBuildEffect();
                    //
                    var roomInfo = Game.moduleModel.building.getRoomInfo(msg.roomId);
                    _this.currentFloorRoom.onBuildComplete(roomInfo);
                    _this.currentFloorRoom.updateLoaderTexture();
                    _this.currentFloorRoom.m_btn_roomName.onClick(_this, _this.onRoomTitleClick, [_this.currentFloorRoom]);
                    var list = _this.floorRoomList;
                    _this.showNextFloor(false);
                    AvatarManager.allocAvatarListToRoom();
                    //主线任务更新
                    Game.moduleModel.task.clientUpdateMainTaskProgress(Games.MainTaskRequireType.RequireType_1_MakeBuild);
                    //触发剧情
                    Game.guide.checkPlayStoryByType(Games.StoryTriggerType.FinishBuild, roomInfo.id);
                    //
                    Game.guide.dealyCheckGuide();
                }, 3000);
            };
            /**
             * 房间升级
             * @param msg
             */
            Main.prototype.onServerRoomUpgrade = function (msg) {
                var room = this.getRoomById(msg.roomId);
                if (room) {
                    var roomInfo = Game.moduleModel.building.getRoomInfo(msg.roomId);
                    room.setInfo(roomInfo);
                    Game.moduleModel.task.clientUpdateMainTaskProgress(Games.MainTaskRequireType.RequireType_2_UpgradeBuild);
                }
            };
            /**
             * 检查是否可扩建楼层
             */
            Main.prototype.checkBuildFloorCondition = function (isShowAlert) {
                if (isShowAlert === void 0) { isShowAlert = false; }
                var checkResult = { result: true, reason: "" };
                if (this.checkTopFloor()) //顶层
                 {
                    return checkResult;
                }
                var floorConfig = Game.config.floor.getConfig(this.floorIndex + 1);
                if (User.info.level < floorConfig.level_req) {
                    checkResult.result = false;
                    var msg = Game.config.msg.getTxtFormat(MsgKey.build_non_level, floorConfig.level_req);
                    checkResult.reason = msg;
                    if (isShowAlert) {
                        Game.system.toastText(msg);
                        return checkResult;
                    }
                }
                //不消耗物品
                if (this.isBuildFreeFloor) {
                    checkResult.result = true;
                }
                else {
                    var itemcfg = Game.config.item.getConfig(floorConfig.cost.itemId);
                    var hasItemNum = Game.moduleModel.item.getItemNum(floorConfig.cost.itemId);
                    if (hasItemNum < floorConfig.cost.itemNum) {
                        checkResult.result = false;
                        var msg = Game.config.msg.getTxtFormat(MsgKey.build_non_material, itemcfg.name);
                        checkResult.reason = msg;
                        if (isShowAlert) {
                            Game.system.openItemWay(floorConfig.cost.itemId, floorConfig.cost.itemNum);
                        }
                    }
                }
                return checkResult;
            };
            Object.defineProperty(Main.prototype, "isBuildFreeFloor", {
                get: function () {
                    var floorConfig = Game.config.floor.getConfig(this.floorIndex + 1);
                    if (floorConfig.cost.itemId == 0 || floorConfig.cost.itemNum == 0) {
                        return true;
                    }
                    return false;
                },
                enumerable: true,
                configurable: true
            });
            /**
             * 检查是否可扩建楼层
             */
            Main.prototype.checkBuildFloorLevelCondition = function () {
                var checkResult = { result: true, reason: "" };
                if (this.checkTopFloor()) //顶层
                 {
                    return checkResult;
                }
                var floorConfig = Game.config.floor.getConfig(this.floorIndex + 1);
                if (User.info.level < floorConfig.level_req) {
                    checkResult.result = false;
                    var msg = format(TEXT.BuildFloorFailLevel, floorConfig.level_req);
                    checkResult.reason = msg;
                }
                //占领城市
                var cityData = Game.moduleModel.market.GetMaxCity();
                if (floorConfig.city_req > 0) {
                    if (cityData == null || cityData.id < floorConfig.city_req) {
                        checkResult.result = false;
                        var cityCfg = Game.config.city.getConfig(floorConfig.city_req);
                        var msg = "";
                        if (cityCfg) {
                            msg = format(TEXT.BuildFloorFailCity, cityCfg.city_num, cityCfg.name);
                        }
                        checkResult.reason = msg;
                    }
                }
                return checkResult;
            };
            Main.prototype.checkTopFloor = function () {
                return this.floorIndex >= Game.config.floor.getConfigList().length;
            };
            /**
             * 显示房间信息
             * @param room
             */
            Main.prototype.onRoomTitleClick = function (room) {
                if (room.isBuilded) {
                    Game.moduleModel.building.selectRoomType = room.roomInfo.type;
                    Game.menu.open(MenuId.BuildRoomUpgrade, room.roomInfo);
                }
            };
            /**
             *
             * @param enable 是否可以滚动
             */
            Main.prototype.onEnabledScrollMain = function (enable) {
                this.setRoomTouchable(enable);
            };
            /**
             * 把指定index的房间置顶
             * @param index
             */
            Main.prototype.scrollRoomTypeTop = function (roomType, anim) {
                var index = this.getRoomIndexByType(roomType);
                if (index < 0 || index > this.m_BuildList.numChildren - 1)
                    return;
                this.m_BuildList.scrollToView(index, anim, true);
            };
            /**
             * 设置房间列表是否可触摸
             * @param val
             */
            Main.prototype.setRoomTouchable = function (val) {
                this.m_BuildList.touchable = val;
            };
            /**
             * 房间内执行行为事件
             * @param roomType
             * @param avatarId
             * @param eventList
             */
            Main.prototype.executeActionEvents = function (roomType, avatarUid, eventList) {
                var room = this.getRoomByType(roomType);
                if (room) {
                    room.executeActionEvents(avatarUid, eventList);
                }
            };
            //avatar开始进入房间
            Main.prototype.startEnterRoom = function (roomType, info, direction, onEvent) {
                var room = this.getRoomByType(roomType);
                if (room) {
                    room.avatarEnter(info, direction, onEvent);
                }
            };
            //avatar进入房间
            Main.prototype.onEnterRoom = function (roomType, avatarUid) {
                var room = this.getRoomByType(roomType);
                if (room) {
                    room.onAvatarEnter(avatarUid);
                }
            };
            //avatar开始离开房间
            Main.prototype.startLeaveRoom = function (roomType, avatarUid, onEvent, isRun) {
                var room = this.getRoomByType(roomType);
                if (room) {
                    room.avatarLeave(avatarUid, onEvent, isRun);
                }
            };
            //avatar离开房间
            Main.prototype.onLeaveRoom = function (roomType, avatarUid) {
                var room = this.getRoomByType(roomType);
                if (room) {
                    room.onAvatarLeave(avatarUid);
                }
            };
            /**
             * 获取房间
             * @param roomType
             */
            Main.prototype.getRoomByType = function (roomType) {
                return this.floorRoomList.findOne(function (room) {
                    return room.roomInfo.type == roomType;
                });
            };
            /**
             * 获取房间
             * @param roomType
             */
            Main.prototype.getRoomIndexByType = function (roomType) {
                var num = this.m_BuildList.numChildren;
                for (var i = 0; i < num; i++) {
                    var room = this.m_BuildList.getChildAt(i);
                    if (!room.roomInfo)
                        continue;
                    if (room.roomInfo.isBuilded) {
                        if (room.roomInfo.type == roomType) {
                            return i;
                        }
                    }
                }
                return -1;
            };
            Main.prototype.getRoomById = function (roomId) {
                return this.floorRoomList.findOne(function (room) {
                    return room.roomInfo.id == roomId;
                });
            };
            Main.prototype.addRoomAt = function (room, index) {
                if (index < 0)
                    index = 0;
                if (index > this.m_BuildList.numChildren - 1)
                    index = this.m_BuildList.numChildren - 1;
                this.m_BuildList.addChildAt(room, index);
            };
            //获取房间内avatar
            Main.prototype.getAvatar = function (roomType, avatarUid) {
                var room = this.getRoomByType(roomType);
                if (room) {
                    return room.getAvatar(avatarUid);
                }
                return null;
            };
            //-----------------------------
            // 艺人探班
            //-----------------------------
            /**
             * 艺人探班
             * @param roomType
             */
            Main.prototype.onScrollToRoom = function (roomType, anim) {
                this.scrollRoomTypeTop(roomType, anim);
            };
            /**
             * 初始化探班
             */
            Main.prototype.onStartReception = function () {
                var roomType = Games.RoomType.Reception;
                var room = this.getRoomByType(roomType);
                room.processer.startReception();
            };
            //-------------------------------
            //房间引导
            //-------------------------------
            //获取房间触摸区同时滚动房间到顶部
            Main.prototype.getRoomAndScrollTop = function (roomType, scrollIndexOffset) {
                if (scrollIndexOffset === void 0) { scrollIndexOffset = 0; }
                var index = this.getRoomIndexByType(roomType);
                if (index < 0 || index > this.m_BuildList.numChildren - 1)
                    return;
                var finalIndex = Math.max(0, index - scrollIndexOffset);
                this.m_BuildList.scrollToView(finalIndex, false, true);
                return this.m_BuildList.getChildAt(index);
            };
            return Main;
        }(Building.MainStruct));
        Building.Main = Main;
    })(Building = fgui.Building || (fgui.Building = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=Main.js.map