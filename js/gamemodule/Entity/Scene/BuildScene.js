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
    /** 楼层场景 */
    var BuildScene = /** @class */ (function (_super) {
        __extends(BuildScene, _super);
        function BuildScene() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            //楼层信息
            _this.floorInfo = new Games.FloorInfo();
            //房间信息
            _this.roomInfo = new Games.RoomInfo();
            //y轴线路（距离房间底部）
            _this.routeYList = [40, 50];
            //是否加载过房间图片
            _this.isInitLoadRoomTexture = false;
            //cache Point
            _this.point = new Point();
            //是否还未扩建楼层
            _this.isUnBuildFloor = false;
            /** 房间是否在屏幕范围 */
            _this.isRoomInScreen = false;
            /**
             * @ 设置楼层房间缩略图URL
             */
            _this._roomTextureUrl = "";
            return _this;
        }
        /** 创建场景 */
        BuildScene.creat = function (mainView) {
            var buildScene = new BuildScene();
            (mainView === undefined) && (mainView = fgui.Building.BuildRoom.createInstance());
            buildScene.setMainView(mainView);
            return buildScene;
        };
        /** 销毁 */
        BuildScene.prototype.dispose = function () {
            _super.prototype.dispose.call(this);
            if (this.mainView) {
                this.mainView.displayObject.removeSelf();
                this.mainView = null;
            }
            if (this.processer) {
                this.processer.dispose();
                this.processer = null;
            }
        };
        /** 设置场景显示对象 */
        BuildScene.prototype.setMainView = function (mainView) {
            this.mainView = mainView;
        };
        BuildScene.prototype.init = function () {
            this.mainView.m_buildSceneUI.m_btn_roomName.getChild("title").text = format(Games.TEXT.Floor, this.floorInfo.index);
            this.mainView.m_buildSceneUI.m_btn_buildFloor.getChild("Title").text = format(Games.TEXT.BuildFloor, this.floorInfo.index);
            this.mainView.m_buildSceneUI.m_failReason.visible = false;
            this.mainView.m_buildSceneUI.m_btn_buildRoom.visible = false;
            //set Layer
            this.contentBackLayer = this.mainView.m_buildScene.m_avatarContainer0.displayObject;
            this.contentFrontLayer = this.mainView.m_buildScene.m_avatarContainer1.displayObject;
        };
        Object.defineProperty(BuildScene.prototype, "roomTextureUrl", {
            get: function () {
                return this._roomTextureUrl;
            },
            set: function (url) {
                if (this._roomTextureUrl != url) {
                    this._roomTextureUrl = url;
                    if (this.isRoomInScreen) {
                        this.isInitLoadRoomTexture = false;
                        this.tryLoadBuildTexture();
                    }
                }
            },
            enumerable: true,
            configurable: true
        });
        BuildScene.prototype.tryLoadBuildTexture = function () {
            if (this.roomTextureUrl != "") {
                if (!this.isInitLoadRoomTexture) {
                    console.log("load floor " + this.floorInfo.index + " texture= " + this.roomTextureUrl);
                    this.isInitLoadRoomTexture = true;
                    this.mainView.m_buildScene.m_loader.url = this.roomTextureUrl;
                }
            }
        };
        BuildScene.prototype.reLoadBuildTexture = function (url) {
            this.isInitLoadRoomTexture = false;
            this.roomTextureUrl = url;
            this.tryLoadBuildTexture();
        };
        Object.defineProperty(BuildScene.prototype, "isBuilded", {
            get: function () {
                return this.roomInfo.id != 0;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(BuildScene.prototype, "roomWidth", {
            get: function () {
                return this.mainView.m_buildScene.width;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(BuildScene.prototype, "roomHeight", {
            get: function () {
                return this.mainView.m_buildScene.height;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(BuildScene.prototype, "width", {
            get: function () {
                return this._width;
            },
            set: function (val) {
                this._width = val;
                this.mainView.width = val;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(BuildScene.prototype, "height", {
            get: function () {
                return this._height;
            },
            set: function (val) {
                this._height = val;
                this.mainView.height = val;
            },
            enumerable: true,
            configurable: true
        });
        BuildScene.prototype.setXY = function (xv, yv) {
            this.mainView && this.mainView.setXY(xv, yv);
        };
        BuildScene.prototype.setScale = function (sx, sy) {
            this.mainView && this.mainView.setScale(sx, sy);
        };
        /** 扩建楼层 */
        BuildScene.prototype.buildFloor = function () {
            this.roomTextureUrl = Res.getRoom("expansion");
            this.isUnBuildFloor = true;
            this.setSceneSizeForState();
        };
        /** 楼层已扩建等待建造房间 */
        BuildScene.prototype.waitBuindRoom = function () {
            this.mainView.m_buildSceneUI.m_btn_buildFloor.visible = false;
            this.mainView.m_buildSceneUI.m_btn_buildRoom.visible = true;
            this.isUnBuildFloor = false;
            this.roomTextureUrl = Res.getRoom("construct");
        };
        /** 建造楼层完成 */
        BuildScene.prototype.onBuildComplete = function (info) {
            this.setInfo(info);
            this.mainView.m_buildSceneUI.m_btn_buildRoom.visible = false;
            this.mainView.m_buildSceneUI.m_failReason.visible = false;
            this.installRoomProcesser();
        };
        BuildScene.prototype.setInfo = function (info) {
            this.roomInfo = info;
            this.floorInfo.index = info.floor;
            this.roomInfo.sceneWidth = this.mainView.m_buildScene.width;
            this.roomInfo.sceneHeight = this.mainView.m_buildScene.height;
            var cfg = Game.config.buildingLevel.getConfig(info.id);
            this.mainView.m_buildSceneUI.m_btn_roomName.getChild("title").text = info.name + " " + format(Games.TEXT.Lv, cfg.level);
            this.roomTextureUrl = Res.getRoom(info.type);
            this.mainView.m_buildSceneUI.m_btn_buildFloor.visible = false;
            this.mainView.m_buildSceneUI.m_btn_buildRoom.visible = false;
            this.mainView.m_buildScene.m_loader.touchable = false;
            this.mainView.m_buildScene.m_canvasContainer.touchable = false;
            this.isUnBuildFloor = false;
        };
        BuildScene.prototype.updateLoaderTexture = function () {
            this.mainView.m_buildScene.m_loader.url = this.roomTextureUrl;
        };
        BuildScene.prototype.installRoomProcesser = function () {
            var processerData = Games.BuildingProcessMgr.get(this.roomInfo.type);
            if (processerData) {
                this.processer = new processerData.newClass();
                this.processer.init(this);
            }
        };
        BuildScene.prototype.setRoomFrameVisible = function (val) {
            this.mainView.m_buildSceneUI.m_frame.visible = val;
            this.mainView.m_buildSceneUI.m_frameTitleBg.visible = val;
            this.mainView.m_buildSceneUI.m_btn_roomName.visible = val;
            this.mainView.m_buildScene.m_bg.visible = val;
            Game.event.dispatch(GameEventKey.GameEventKey_SwitchUIRoom, this.roomInfo.type);
            if (!val) {
                this.mainView.visible = true;
                this.tryLoadBuildTexture();
                this.setSceneSizeForSource();
            }
            else {
                this.setSceneSizeForState();
            }
        };
        BuildScene.prototype.showFailBuildFloorReason = function (reason) {
            this.mainView.m_buildSceneUI.m_failReason.visible = true;
            this.mainView.m_buildSceneUI.m_btn_buildFloor.visible = false;
            this.mainView.m_buildSceneUI.m_buildFloorInfo.text = reason;
        };
        BuildScene.prototype.hideFailBuildFloorReason = function () {
            this.mainView.m_buildSceneUI.m_failReason.visible = false;
            this.mainView.m_buildSceneUI.m_btn_buildFloor.visible = this.isUnBuildFloor;
        };
        BuildScene.prototype.showBuildEffect = function () {
            if (!this.buildEffect) {
                this.buildEffect = fgui.Fx.Effect_build02.createInstance();
            }
            this.mainView.m_buildSceneUI.m_effectContainer.addChild(this.buildEffect);
            //aspect
            this.buildEffect.setPivot(0, 0);
            var scale = this.width / this.mainView.sourceWidth;
            this.buildEffect.setScale(scale, scale);
            var animTrans = this.buildEffect.getTransition("t000"); //"smoke_beat_qq");
            if (animTrans) {
                animTrans.play();
                this.buildEffect.visible = true;
            }
            this.mouseDisableBg = fgui.System.BGModel.createInstance();
            this.mouseDisableBg.opaque = true;
            this.mouseDisableBg.setSize(ScreenSetting.screenWidth, ScreenSetting.screenHeight);
            this.mouseDisableBg.alpha = 0.1;
            Laya.stage.addChild(this.mouseDisableBg.displayObject);
        };
        BuildScene.prototype.clearBuildEffect = function () {
            if (this.buildEffect) {
                var animTrans = this.buildEffect.getTransition("t000");
                if (animTrans) {
                    animTrans.stop();
                    this.buildEffect.visible = false;
                    this.buildEffect.removeFromParent();
                }
            }
            if (this.mouseDisableBg) {
                this.mouseDisableBg.displayObject.removeSelf();
                this.mouseDisableBg = null;
            }
        };
        //---------------------------------------------
        // avatar 交互
        //---------------------------------------------
        /**
         * 设置房间艺人状态
         * @param unitData
         */
        BuildScene.prototype.setRoomAvatar = function (unitData) {
            var unit = Game.creator.creatEUnit(unitData.info);
            var routeY = this.routeYList[Random.range(0, this.routeYList.length)];
            var container;
            if (routeY == this.routeYList[0]) {
                container = this.mainView.m_buildScene.m_avatarContainer1;
            }
            else {
                container = this.mainView.m_buildScene.m_avatarContainer0;
            }
            unit.pos(unitData.x, unitData.y);
            unit.openShadow();
            this.addUnit(unit);
            unit.setRoomInfo(this.roomInfo);
            unit.showOn(container);
        };
        /**
         * 艺人进入房间
         * @param avatarInfo
         * @param direction
         * @param onEvent
         * @param route
         */
        BuildScene.prototype.avatarEnter = function (avatarInfo, direction, onEvent, route) {
            var unitCtrl = Game.creator.requestUnit(avatarInfo);
            Game.moduleModel.building.addAvatar(this.roomInfo.type, unitCtrl.unitModel);
            unitCtrl.direction = direction;
            var routeY = this.routeYList[Random.range(0, this.routeYList.length)];
            var container;
            if (routeY == this.routeYList[0]) {
                container = this.mainView.m_buildScene.m_avatarContainer1;
            }
            else {
                container = this.mainView.m_buildScene.m_avatarContainer0;
            }
            if (route) {
                if (route == Games.DirtionType.Down) {
                    routeY = this.routeYList[0];
                    container = this.mainView.m_buildScene.m_avatarContainer1;
                }
                else {
                    routeY = this.routeYList[1];
                    container = this.mainView.m_buildScene.m_avatarContainer0;
                }
            }
            this.addAvatar(unitCtrl, container);
            unitCtrl.y = this.roomHeight - routeY;
            if (direction == Games.DirtionType.Left) {
                unitCtrl.pos(this.roomWidth + 100, unitCtrl.y);
            }
            else {
                unitCtrl.pos(-100, unitCtrl.y);
            }
            // console.log(avatarInfo.id + " -- 艺人进房间 -- " + this.roomInfo.type);
            unitCtrl.openShadow();
            unitCtrl.enter(onEvent);
        };
        BuildScene.prototype.onAvatarEnter = function (avatarUid) {
        };
        /**
         * 艺人离开房间
         * @param avatarUid
         * @param onEvent
         * @param isRun
         */
        BuildScene.prototype.avatarLeave = function (avatarUid, onEvent, isRun) {
            var avatar = this.getAvatar(avatarUid);
            if (avatar) {
                avatar.leave(onEvent, isRun);
            }
        };
        BuildScene.prototype.onAvatarLeave = function (avatarUid) {
            Game.moduleModel.building.removeAvatar(this.roomInfo.type, avatarUid);
            for (var i = 0; i < this.unitList.length; i++) {
                var cUnit = this.unitList[i];
                if (cUnit.unitModel.info.uid == avatarUid) {
                    if (Games.AvatarManager.hasRoomCUnit(avatarUid)) {
                        cUnit.endEvent(false);
                        cUnit.visible = false;
                    }
                    else {
                        console.error("艺人销毁---id=" + cUnit.unitModel.info.id + " roomType=" + this.roomInfo.type);
                        cUnit.dispose();
                    }
                    this.unitList.splice(i, 1);
                    break;
                }
            }
        };
        BuildScene.prototype.addAvatar = function (cUnit, container) {
            _super.prototype.addUnit.call(this, cUnit);
            cUnit.setRoomInfo(this.roomInfo);
            cUnit.showOn(container);
            Game.moduleModel.building.addAvatar(this.roomInfo.type, cUnit.unitModel);
            //组件添加到系统管理
            Game.stageManager.homeSceneSet.unitViewSystem.addComponent(cUnit.unit.getComponent(Games.UnitSkeletonViewCompoent));
            Game.stageManager.homeSceneSet.unitMoveSystem.addComponent(cUnit.unit.getComponent(Games.UnitMoveComponent));
            Game.stageManager.homeSceneSet.unitTalkSystem.addComponent(cUnit.unit.getComponent(Games.UnitTalkComponent));
        };
        /**
         * 获取房间Avatar
         * @param avatarUid
         */
        BuildScene.prototype.getAvatar = function (avatarUid) {
            return this.unitList.findOne(function (value) {
                return value.unitModel.info.uid == avatarUid;
            });
        };
        BuildScene.prototype.getAvatarById = function (id) {
            return this.unitList.findOne(function (value) {
                return value.unitModel.info.id == id;
            });
        };
        BuildScene.prototype.removeAvatar = function (cUnit) {
            var index = this.unitList.findIndex(function (value) {
                return value.unitModel.info.uid == cUnit.unitModel.info.uid;
            });
            if (index != -1) {
                Game.moduleModel.building.removeAvatar(this.roomInfo.type, cUnit.unitModel.info.uid);
                this.unitList.splice(index, 1)[0].dispose();
            }
        };
        BuildScene.prototype.clearAllAvatar = function () {
            for (var i = this.unitList.length - 1; i >= 0; i--) {
                this.removeAvatar(this.unitList[i]);
            }
            this.unitList.length = 0;
        };
        BuildScene.prototype.forEachAvatar = function (func) {
            this.unitList.forEach(function (value, index, array) {
                if (func) {
                    func(value);
                }
            });
        };
        /**
         * 所有avatar离开房间
         * @param onEvent
         * @param exceptAvatarId
         */
        BuildScene.prototype.executeLeaveRoomForEach = function (onEvent, exceptAvatarId) {
            if (onEvent) {
                this.unitList.forEach(function (value, index, array) {
                    if (value.unitModel.info.type == Games.AvatarType.Actor) {
                        if (value.unitModel.info.id != exceptAvatarId) {
                            value.endEvent(false);
                            value.leave(onEvent);
                        }
                    }
                });
            }
        };
        //============================================
        // 艺人行为事件
        //============================================
        BuildScene.prototype.executeActionEvents = function (avatarUid, eventList) {
            var avatar = this.unitList.findOne(function (value) {
                return value.unitModel.info.uid == avatarUid;
            });
            if (avatar) {
                avatar.executeActionEvents(eventList);
            }
        };
        /** 暂停房间事件 */
        BuildScene.prototype.onRoomPauseEvent = function () {
            this.unitList.forEach(function (value, index, array) {
                if (value.unitModel.info.type == Games.AvatarType.Actor) {
                    if (!Games.AvatarManager.isActorOnVisit(value.unitModel.info.id)) //不处理艺人探班情况
                     {
                        value.isPause = true;
                    }
                }
            });
        };
        /** 运行房间事件 */
        BuildScene.prototype.onRoomResumeEvent = function () {
            this.unitList.forEach(function (value, index, array) {
                if (value.unitModel.info.type == Games.AvatarType.Actor) {
                    if (!Games.AvatarManager.isActorOnVisit(value.unitModel.info.id)) //不处理艺人探班情况
                     {
                        value.isPause = false;
                    }
                }
            });
        };
        //============================================
        // 屏幕范围
        //============================================
        /** 进入屏幕范围 */
        BuildScene.prototype.onRoomInScreen = function () {
            this.isRoomInScreen = true;
            //选择在屏幕内开始加载图片纹理
            this.tryLoadBuildTexture();
            this.unitList.forEach(function (value, index, array) {
                value.inScreen();
            });
        };
        /** 离开屏幕范围 */
        BuildScene.prototype.onRoomOutScreen = function () {
            this.isRoomInScreen = false;
            this.unitList.forEach(function (value, index, array) {
                value.outScreen();
            });
        };
        //============================================
        // 屏幕适配
        //============================================
        // 设置场景大小, 为屏幕大小
        BuildScene.prototype.setSceneSizeForState = function () {
            var scale = ScreenSetting.screenWidth / this.mainView.sourceWidth;
            this.mainView.m_buildSceneUI.width = ScreenSetting.screenWidth;
            this.mainView.m_buildSceneUI.height = this.mainView.sourceHeight * scale;
            this.mainView.m_buildScene.setScale(scale, scale);
            this.width = this.mainView.m_buildSceneUI.width;
            this.height = this.mainView.m_buildSceneUI.height;
            /** 场景宽高 */
            this.roomInfo.sceneWidth = this.mainView.m_buildScene.width;
            this.roomInfo.sceneHeight = this.mainView.m_buildScene.height;
        };
        //设置场景大小，为开发大小
        BuildScene.prototype.setSceneSizeForSource = function () {
            this.mainView.m_buildSceneUI.width = this.mainView.sourceWidth;
            this.mainView.m_buildSceneUI.height = this.mainView.sourceHeight;
            var scale = this.mainView.sourceWidth / this.mainView.m_buildScene.sourceWidth;
            this.mainView.m_buildScene.setScale(scale, scale);
            this.width = this.mainView.sourceWidth;
            this.height = this.mainView.sourceHeight;
            /** 场景宽高 */
            this.roomInfo.sceneWidth = this.mainView.m_buildScene.width;
            this.roomInfo.sceneHeight = this.mainView.m_buildScene.height;
        };
        return BuildScene;
    }(Games.Scene));
    Games.BuildScene = BuildScene;
})(Games || (Games = {}));
//# sourceMappingURL=BuildScene.js.map