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
    /** 主界面场景列表 */
    var HomeStage = /** @class */ (function (_super) {
        __extends(HomeStage, _super);
        function HomeStage() {
            var _this = _super.call(this) || this;
            /** 场景列表 */
            _this.sceneList = [];
            //楼层单位显示系统
            _this.unitViewSystem = new Games.UnitViewSystem();
            //楼层单位移动系统
            _this.unitMoveSystem = new Games.UnitMoveSystem();
            //楼层单位说话系统
            _this.unitTalkSystem = new Games.UnitTalkSystem();
            /** 是否已初始化 */
            _this.isInited = false;
            //缓存使用点
            _this.point = new Point();
            //-------------------------------------------------
            // 主场景房间列表滚动事件
            //-------------------------------------------------
            _this.isBuildListMouseDown = false;
            //---------------------------------------
            // 接口
            //---------------------------------------
            _this.isUpdateTick = true;
            _this.isRenderTick = true;
            return _this;
        }
        /** 添加场景 */
        HomeStage.prototype.addScene = function (scene) {
            this.sceneList.push(scene);
        };
        HomeStage.prototype.init = function (mainView) {
            this.mainView = mainView;
            Games.AvatarManager.init();
            Games.BuildingProcessMgr.install();
            this.isInited = true;
            //listener
            Game.protoOkEvent.add(ProtoEventKey.CinemaBuild_ExtendFloor, this.onServerBuildFloor, this);
            Game.protoOkEvent.add(ProtoEventKey.CinemaBuild_BuildRoom, this.onServerBuildRoom, this);
            Game.protoOkEvent.add(ProtoEventKey.CinemaBuild_UpgradeRoom, this.onServerRoomUpgrade, this);
            Game.event.add(GameEventKey.GameEventKey_ScrollMainRoom, this.onScrollToRoom, this);
            Game.event.add(GameEventKey.GameEventKey_EnabledScrollMain, this.onEnabledScrollMain, this);
            Game.event.add(GameEventKey.GameEventKey_StartReception, this.onStartReception, this);
            Game.protoOkEvent.add(ProtoEventKey.city_HoldCity, this.setBuildFloorStatus, this);
            Game.event.add(GameEventKey.GameEventKey_PlayerLevelUp, this.setBuildFloorStatus, this);
            //弱网情况重连刷新数据
            Game.event.add(GameEventKey.GameEventKey_SyncRoomInfo, this.reSyncRoomInfo, this);
            //艺人移动结束
            Games.AvatarManager.sAvatarMoveEnd.add(this.onAvatarMoveEnd, this);
            //setUI
            this.mainView.m_BuildList.touchable = true;
            this.mainView.m_BuildList.lineGap = -5;
            this.mainView.m_BuildList.ensureBoundsCorrect();
            this.mainView.m_BuildList.scrollItemToViewOnClick = false;
            this.mainView.m_main_bottom.visible = true;
            this.mainView.m_BuildList.addChild(this.mainView.m_main_bottom);
            this.mainView.m_main_top.visible = true;
            this.mainView.m_BuildList.addChildAt(this.mainView.m_main_top, 0);
            //更新房间信息
            this.syncServerBuildRoomInfo();
            //房间滚动事件
            this.mainView.m_BuildList.on(laya.events.Event.MOUSE_DOWN, this, this.onBuildListMouseDown);
            this.mainView.m_BuildList.on(fairygui.Events.SCROLL, this, this.onBuildListScroll);
            this.mainView.m_BuildList.on(fairygui.Events.SCROLL_END, this, this.onBuildListScrollEnd);
            Laya.stage.on(laya.events.Event.MOUSE_UP, this, this.stageMouseUp);
        };
        HomeStage.prototype.onWindowResize = function () {
            console.log("HomeStage -- onWindowResize()");
            var _loop_1 = function (i) {
                var item = this_1.mainView.m_BuildList.getChildAt(i);
                if (item["m_buildScene"]) {
                    var buildRoom_1 = item;
                    var buildScene = this_1.sceneList.findOne(function (value) {
                        return value.mainView == buildRoom_1;
                    });
                    if (buildScene) {
                        buildScene.setSceneSizeForState();
                    }
                }
                else {
                    item.width = ScreenSetting.screenWidth;
                    var scale = item.width / item.sourceWidth;
                    item.height = item.sourceHeight * scale;
                }
            };
            var this_1 = this;
            for (var i = 0; i < this.mainView.m_BuildList.numChildren; i++) {
                _loop_1(i);
            }
        };
        HomeStage.prototype.onBuildListMouseDown = function () {
            this.isBuildListMouseDown = true;
        };
        HomeStage.prototype.stageMouseUp = function () {
            var _this = this;
            if (this.isBuildListMouseDown && Game.moduleModel.building.isBuildListScrolling) {
                Game.moduleModel.building.isBuildListScrolling = false;
                setTimeout(function () {
                    if (!Game.moduleModel.building.isBuildListScrolling) {
                        _this.onScrollEnd();
                    }
                }, 100);
            }
            this.isBuildListMouseDown = false;
        };
        HomeStage.prototype.onBuildListScroll = function () {
            if (!Game.moduleModel.building.isBuildListScrolling && this.isBuildListMouseDown) {
                this.onScroll();
            }
            Game.moduleModel.building.isBuildListScrolling = true;
        };
        HomeStage.prototype.onBuildListScrollEnd = function () {
            var _this = this;
            setTimeout(function () {
                Game.moduleModel.building.isBuildListScrolling = false;
                _this.onScrollEnd();
            }, 500);
        };
        /** 房间列表滚动中 只执行一次*/
        HomeStage.prototype.onScroll = function () {
            Game.moduleModel.building.sScrollStart.dispatch();
        };
        /** 房间列表滚动结束 */
        HomeStage.prototype.onScrollEnd = function () {
            Game.moduleModel.building.sScrollEnd.dispatch();
        };
        /** 重新刷新最新房间视图 */
        HomeStage.prototype.reSyncRoomInfo = function (delta) {
            console.log("reSyncRoomInfo -- delta roomInfo:" + delta.length);
            delta.length && this.mainView.m_BuildList.numChildren > 2 && this.mainView.m_BuildList.removeChildToPoolAt(1);
            for (var i = 0; i < delta.length; i++) {
                var room = this.creatBuildRoom();
                room.onBuildComplete(delta[i]);
            }
            if (User.info.buildRoomInfo.length < Game.moduleModel.building.floorIndex) {
                // 已扩建还没建造房间
                this.creatBuildFloor(Game.moduleModel.building.floorIndex, true);
            }
            else {
                this.showNextFloor();
            }
        };
        /** 同步服务器建造房屋信息 */
        HomeStage.prototype.syncServerBuildRoomInfo = function () {
            if (User.info.buildRoomInfo)
                this.setBuildRoomInfo();
            else
                User.sGameInfoUpdate.addOnce(this.setBuildRoomInfo, this);
        };
        HomeStage.prototype.setBuildRoomInfo = function () {
            var roomInfoList = Game.moduleModel.building.getInfoList();
            for (var i = 0; i < roomInfoList.length; i++) {
                var room = this.creatBuildRoom();
                room.onBuildComplete(roomInfoList[i]);
            }
            if (User.info.buildRoomInfo.length < Game.moduleModel.building.floorIndex) {
                // 已扩建还没建造房间
                this.creatBuildFloor(Game.moduleModel.building.floorIndex, true);
            }
            else {
                this.showNextFloor();
            }
            //分配艺人,Npc
            Games.AvatarManager.allocAvatarListToRoom();
        };
        /**
         * 创建楼层
         * @param floor 等待扩建楼层
         * @param isBuildFloor  是否已扩建楼层
         */
        HomeStage.prototype.creatBuildFloor = function (floor, isBuildFloor) {
            if (isBuildFloor === void 0) { isBuildFloor = false; }
            var roomMainView = this.mainView.m_BuildList.addItemFromPool();
            var room = Games.BuildScene.creat(roomMainView);
            room.floorInfo.index = floor;
            room.init();
            if (isBuildFloor) {
                room.waitBuindRoom();
                room.mainView.m_buildSceneUI.m_btn_buildRoom.onClick(this, this.onBuildRoomClick);
            }
            else {
                room.buildFloor();
                room.mainView.m_buildSceneUI.m_btn_buildFloor.onClick(this, this.onBuildFloorClick, [room]);
            }
            this.mainView.m_BuildList.setChildIndex(room.mainView, 1);
            this.mainView.m_BuildList.scrollToView(1, true, true);
            this.currentFloorRoom = room;
            this.addScene(room);
            return room;
        };
        /**
         * 建造建筑
         */
        HomeStage.prototype.creatBuildRoom = function () {
            var roomMainView = this.mainView.m_BuildList.addItemFromPool();
            var room = Games.BuildScene.creat(roomMainView);
            room.mainView.m_buildSceneUI.m_btn_roomName.onClick(this, this.onRoomTitleClick, [room]);
            this.mainView.m_BuildList.setChildIndex(room.mainView, 1);
            this.mainView.m_BuildList.scrollToView(1, true, true);
            this.addScene(room);
            return room;
        };
        //扩建
        HomeStage.prototype.showNextFloor = function () {
            if (Game.moduleModel.building.isTopFloor) {
                return null;
            }
            var room = this.creatBuildFloor(Game.moduleModel.building.floorIndex + 1, false);
            this.setBuildFloorStatus();
            return room;
        };
        //更新扩建状态
        HomeStage.prototype.setBuildFloorStatus = function () {
            if (Game.moduleModel.building.isTopFloor) {
                return;
            }
            if (Game.moduleModel.building.hasBuildFloorWithoutRoom(Game.moduleModel.building.floorIndex)) //已扩建还未建造房间
             {
                return;
            }
            var result = Game.moduleModel.building.checkBuildFloorCityCondition();
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
        HomeStage.prototype.onBuildFloorClick = function (room) {
            if (Game.moduleModel.building.checkBuildFloorCondition(true).result) {
                var self_1 = {
                    expandFloorCallBack: function () {
                        //请求扩建楼层
                        Game.protosender.CinemaBuild.ExtendFloor(room.floorInfo.index);
                    }
                };
                if (Game.moduleModel.building.isFreeFloor) {
                    //请求扩建楼层
                    Game.protosender.CinemaBuild.ExtendFloor(room.floorInfo.index);
                }
                else {
                    var floorCfg = Game.config.floor.getConfig(room.floorInfo.index);
                    Game.system.confirmTextIcon([floorCfg.cost], Games.TEXT.BuildTitle, format(Games.TEXT.BuildFloorAlert, room.floorInfo.index), self_1.expandFloorCallBack, self_1);
                }
            }
        };
        /**
         * @消息返回--扩建楼层
         * @param msg
         */
        HomeStage.prototype.onServerBuildFloor = function (msg) {
            var _this = this;
            this.currentFloorRoom.showBuildEffect();
            this.setRoomTouchable(false);
            Game.sound.playSound(SoundKey.MM06_Building);
            setTimeout(function () {
                _this.currentFloorRoom.clearBuildEffect();
                _this.setRoomTouchable(true);
                User.info.extendFloor = Game.moduleModel.building.floorIndex;
                _this.currentFloorRoom.waitBuindRoom();
                _this.currentFloorRoom.updateLoaderTexture();
                _this.currentFloorRoom.mainView.m_buildSceneUI.m_btn_buildRoom.onClick(_this, _this.onBuildRoomClick);
                Game.guide.finishFristStep(Game.moduleModel.building.floorIndex);
            }, 3000);
        };
        /**
         * @消息返回--建造房间完成
         * @param msg
         */
        HomeStage.prototype.onServerBuildRoom = function (msg) {
            var _this = this;
            this.setRoomTouchable(false);
            this.currentFloorRoom.showBuildEffect();
            Games.Static.Instance.onUserorbit("building", msg.floor + "&" + msg.roomId, "unlock");
            setTimeout(function () {
                _this.setRoomTouchable(true);
                _this.currentFloorRoom.clearBuildEffect();
                //
                var roomInfo = Game.moduleModel.building.getRoomInfo(msg.roomId);
                _this.currentFloorRoom.onBuildComplete(roomInfo);
                _this.currentFloorRoom.updateLoaderTexture();
                _this.currentFloorRoom.mainView.m_buildSceneUI.m_btn_roomName.onClick(_this, _this.onRoomTitleClick, [_this.currentFloorRoom]);
                _this.showNextFloor();
                Games.AvatarManager.startTimeAlloc();
                //主线任务更新
                Game.moduleModel.task.clientUpdateMainTaskProgress(Games.MainTaskRequireType.RequireType_1_MakeBuild);
                //触发剧情
                Game.story.triggerPlayStoryByType(Games.StoryTriggerType.FinishBuild, roomInfo.type, Handler.create(null, function () {
                    Game.guide.dealyCheckGuide();
                }), true);
                //建筑解锁
                Game.moduleModel.func.checkBuildLevel();
            }, 3000);
        };
        /**
         * @消息返回--房间升级
         * @param msg
         */
        HomeStage.prototype.onServerRoomUpgrade = function (msg) {
            var room = this.getRoomById(msg.roomId);
            if (room) {
                var roomInfo = Game.moduleModel.building.getRoomInfo(msg.roomId);
                room.setInfo(roomInfo);
                Game.moduleModel.task.clientUpdateMainTaskProgress(Games.MainTaskRequireType.RequireType_2_UpgradeBuild);
                if (roomInfo.type == Games.RoomType.Depot) {
                    Games.Static.Instance.onUserorbit("warehouse", "warehouseUpgrade", "upgrade");
                }
            }
        };
        /**
         * 建造楼层
         */
        HomeStage.prototype.onBuildRoomClick = function () {
            Game.menu.open(Games.MenuId.BuildRoomList, Game.moduleModel.building.floorIndex);
        };
        /**
         * 显示房间信息
         * @param room
         */
        HomeStage.prototype.onRoomTitleClick = function (room) {
            if (room.isBuilded) {
                Game.moduleModel.building.selectRoomType = room.roomInfo.type;
                Game.menu.open(Games.MenuId.BuildRoomUpgrade, room.roomInfo);
            }
        };
        //-----------------------------
        // 艺人探班
        //-----------------------------
        /**
         * 初始化探班
         */
        HomeStage.prototype.onStartReception = function () {
            var roomType = Games.RoomType.Reception;
            var room = this.getRoomByType(roomType);
            room.processer.startReception();
        };
        /**
         * 艺人探班
         * @param roomType
         */
        HomeStage.prototype.onScrollToRoom = function (roomType, anim) {
            this.scrollRoomTypeTop(roomType, anim);
        };
        /**
        * @param enable 是否可以滚动
        */
        HomeStage.prototype.onEnabledScrollMain = function (enable) {
            this.setRoomTouchable(enable);
        };
        /**
         * 把指定index的房间置顶
         * @param index
         */
        HomeStage.prototype.scrollRoomTypeTop = function (roomType, anim) {
            var index = this.getRoomIndexByType(roomType);
            if (index < 0 || index > this.mainView.m_BuildList.numChildren - 1)
                return;
            this.mainView.m_BuildList.scrollToView(index, anim, true);
        };
        /**
         * 设置房间列表是否可触摸
         * @param val
         */
        HomeStage.prototype.setRoomTouchable = function (val) {
            this.mainView.m_BuildList.touchable = val;
        };
        //---------------------------------------
        // 房间调用
        //---------------------------------------
        /**
         * 房间内执行行为事件
         * @param roomType
         * @param avatarId
         * @param eventList
         */
        HomeStage.prototype.executeActionEvents = function (roomType, avatarUid, eventList) {
            var room = this.getRoomByType(roomType);
            if (room) {
                room.executeActionEvents(avatarUid, eventList);
            }
        };
        //avatar开始进入房间
        HomeStage.prototype.startEnterRoom = function (roomType, info, direction, onEvent) {
            var room = this.getRoomByType(roomType);
            if (room) {
                room.avatarEnter(info, direction, onEvent);
            }
        };
        //avatar进入房间
        HomeStage.prototype.onEnterRoom = function (roomType, avatarUid) {
            var room = this.getRoomByType(roomType);
            if (room) {
                room.onAvatarEnter(avatarUid);
            }
        };
        //avatar开始离开房间
        HomeStage.prototype.startLeaveRoom = function (roomType, avatarUid, onEvent, isRun) {
            var room = this.getRoomByType(roomType);
            if (room) {
                room.avatarLeave(avatarUid, onEvent, isRun);
            }
        };
        //avatar离开房间
        HomeStage.prototype.onLeaveRoom = function (roomType, avatarUid) {
            var room = this.getRoomByType(roomType);
            if (room) {
                room.onAvatarLeave(avatarUid);
            }
        };
        /**
         * 获取房间
         * @param roomType
         */
        HomeStage.prototype.getRoomByType = function (roomType) {
            return this.sceneList.findOne(function (room) {
                return room.roomInfo.type == roomType;
            });
        };
        /**
         * 获取房间
         * @param roomType
         */
        HomeStage.prototype.getRoomIndexByType = function (roomType) {
            var room = this.sceneList.findOne(function (value) {
                return value.roomInfo &&
                    value.roomInfo.isBuilded &&
                    value.roomInfo.type == roomType;
            });
            var num = this.mainView.m_BuildList.numChildren;
            for (var i = 0; i < num; i++) {
                var mainView = this.mainView.m_BuildList.getChildAt(i);
                if (room.mainView === mainView) {
                    return i;
                }
            }
            return -1;
        };
        HomeStage.prototype.getRoomById = function (roomId) {
            return this.sceneList.findOne(function (room) {
                return room.roomInfo.id == roomId;
            });
        };
        HomeStage.prototype.addRoomAt = function (room, index) {
            if (index < 0)
                index = 0;
            if (index > this.mainView.m_BuildList.numChildren - 1)
                index = this.mainView.m_BuildList.numChildren - 1;
            this.mainView.m_BuildList.addChildAt(room.mainView, index);
        };
        //获取房间内avatar
        HomeStage.prototype.getAvatar = function (roomType, avatarUid) {
            var room = this.getRoomByType(roomType);
            if (room) {
                return room.getAvatar(avatarUid);
            }
            return null;
        };
        HomeStage.prototype.getAvatarById = function (roomType, avatarId) {
            var room = this.getRoomByType(roomType);
            if (room) {
                return room.getAvatarById(avatarId);
            }
            return null;
        };
        //---------------------------------------
        // 房间内艺人距离限制
        //---------------------------------------
        HomeStage.prototype.onAvatarMoveEnd = function (eventData) {
            var unitModel = Game.moduleModel.building.getAvatar(eventData.roomType, eventData.avatarUid);
            if (unitModel) {
                this.fitAvatarGap(unitModel, eventData);
            }
        };
        /** Avatar移动结束检测距离 */
        HomeStage.prototype.fitAvatarGap = function (target, eventData) {
            var _this = this;
            var safeLoopCount = 70; //达到最大循环次数跳出检测
            var loopCount = 0;
            var stepPointX = 0;
            var step = 10;
            var stepDir = (target.info.direction == Games.DirtionType.Right) ? 1 : -1;
            var cUnit = this.getAvatar(target.roomInfo.type, target.info.uid);
            if (cUnit == null || cUnit.isDisposed)
                return;
            while (true) {
                var isOnlimit = this.checkAvatarOnLimitDistance(target, stepPointX);
                if (!isOnlimit) {
                    if (stepPointX != 0) {
                        // console.log(target.info.id + " --安全距离--type=1");
                        cUnit.moveTo(target.x + stepPointX, false, Handler.create(this, function () {
                            //重新检测距离限制
                            stepPointX = 0;
                            var reCheckOnLimit = _this.checkAvatarOnLimitDistance(target, stepPointX);
                            if (reCheckOnLimit) {
                                // console.log(target.info.id + "--重新检测");
                                Math.random() > 0.5 && cUnit.reverseDirection();
                                _this.fitAvatarGap(target, eventData);
                            }
                            else {
                                //开始进入房间合适距离内派发事件
                                if (eventData.isEnterRoom) {
                                    Games.AvatarManager.sAvatarEnter.dispatch(eventData);
                                }
                                //合适距离内开始执行事件
                                else {
                                    cUnit.nextEvent();
                                }
                            }
                        }, null, true));
                    }
                    else {
                        if (eventData.isEnterRoom) {
                            Games.AvatarManager.sAvatarEnter.dispatch(eventData);
                        }
                        else {
                            cUnit.nextEvent();
                        }
                        // console.log(target.info.id + "--安全距离--type=2");
                    }
                    break;
                }
                else {
                    var distance = target.x + stepPointX;
                    var sceneWidth = target.roomInfo.sceneWidth;
                    if (distance >= sceneWidth - target.STAGE_OFFSET_ENTER) {
                        if (stepDir == 1)
                            stepDir *= -1;
                    }
                    if (distance <= target.STAGE_OFFSET_ENTER) {
                        if (stepDir == -1)
                            stepDir *= -1;
                    }
                    stepPointX += stepDir * step;
                    loopCount++;
                    if (loopCount > safeLoopCount) {
                        // console.log(target.info.id + "--距离检测达到最大次数:" + safeLoopCount);
                        if (eventData.isEnterRoom) {
                            Games.AvatarManager.sAvatarEnter.dispatch(eventData);
                        }
                        else {
                            cUnit.nextEvent();
                        }
                        loopCount = 0;
                        break;
                    }
                    // console.log(target.info.id + "--不在安全距离:" + stepPointX);
                }
            }
        };
        HomeStage.prototype.checkAvatarOnLimitDistance = function (target, stepPointX) {
            var isOnlimit = false;
            var unitList = Game.moduleModel.building.getRoomAvatarList(target.roomInfo.type);
            unitList.forEach(function (value, index, array) {
                if (value.info.uid != target.info.uid) // && value.info.type == Games.AvatarType.Actor)
                 {
                    var dx = Math.abs(target.x + stepPointX - value.x);
                    if (dx <= Games.AvatarManager.MIN_AVATAR_GAP) {
                        isOnlimit = true;
                    }
                }
            });
            return isOnlimit;
        };
        HomeStage.prototype.start = function () {
            Game.driverSystem.addComponent(this);
            Game.driverSystem.addComponent(this.unitViewSystem);
            Game.driverSystem.addComponent(this.unitMoveSystem);
            Game.driverSystem.addComponent(this.unitTalkSystem);
        };
        HomeStage.prototype.stop = function () {
            Game.driverSystem.removeComponet(this);
            Game.driverSystem.removeComponet(this.unitViewSystem);
            Game.driverSystem.removeComponet(this.unitMoveSystem);
            Game.driverSystem.removeComponet(this.unitTalkSystem);
        };
        HomeStage.prototype.onUpdate = function () {
            if (!this.isInited)
                return;
            var count = this.sceneList.length;
            for (var i = 0; i < count; i++) {
                this.sceneList[i].onUpdate();
            }
            // 显示屏幕中房间
            var isOpenHomeWindow = Game.menu.isOpened(Games.MenuId.Home);
            var isScolling = Game.moduleModel.building.isBuildListScrolling;
            var sceneNum = this.sceneList.length;
            for (var i = 0; i < sceneNum; i++) {
                var scene = this.sceneList[i];
                //主界面关闭时暂停房间事件
                if (isOpenHomeWindow) //&& !isScolling)
                 {
                    scene.onRoomResumeEvent();
                }
                else {
                    scene.onRoomPauseEvent();
                }
                //房间显示隐藏
                this.point.x = 0;
                this.point.y = 0;
                var globalPos = scene.mainView.displayObject.localToGlobal(this.point);
                if (globalPos.y + scene.mainView.height <= 0 || globalPos.y >= Laya.stage.height) {
                    scene.mainView.visible = false;
                    scene.onRoomOutScreen();
                }
                else {
                    scene.mainView.visible = true;
                    scene.onRoomInScreen();
                }
            }
        };
        HomeStage.prototype.onRender = function () {
            var count = this.sceneList.length;
            for (var i = 0; i < count; i++) {
                this.sceneList[i].onRender();
            }
        };
        HomeStage.prototype.onSeconds = function () {
            var count = this.sceneList.length;
            for (var i = 0; i < count; i++) {
                this.sceneList[i].onSeconds();
            }
        };
        //-------------------------------
        //房间引导
        //-------------------------------
        //获取房间触摸区同时滚动房间到顶部
        HomeStage.prototype.getRoomAndScrollTop = function (roomType, scrollIndexOffset) {
            if (scrollIndexOffset === void 0) { scrollIndexOffset = 0; }
            var index = this.getRoomIndexByType(roomType);
            if (index < 0 || index > this.mainView.m_BuildList.numChildren - 1)
                return;
            var finalIndex = Math.max(0, index - scrollIndexOffset);
            this.mainView.m_BuildList.scrollToView(finalIndex, false, true);
            return this.sceneList.findOne(function (value) {
                return value.roomInfo &&
                    value.roomInfo.isBuilded &&
                    value.roomInfo.type == roomType;
            });
        };
        return HomeStage;
    }(Games.ESystem));
    Games.HomeStage = HomeStage;
})(Games || (Games = {}));
//# sourceMappingURL=HomeStage.js.map