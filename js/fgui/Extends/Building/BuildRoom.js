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
        var BuildRoom = /** @class */ (function (_super) {
            __extends(BuildRoom, _super);
            function BuildRoom() {
                var _this = _super.call(this) || this;
                //y轴线路（距离房间底部）
                _this.routeYList = [40, 50];
                //房间图片Url
                _this.roomTextureUrl = "";
                //是否加载过房间图片
                _this.isInitLoadRoomTexture = false;
                //
                _this.point = new Point();
                //特效容器
                _this.buildFxSprite = new Sprite();
                //是否还未扩建楼层
                _this.isUnBuildFloor = false;
                _this.avatarList = [];
                _this.floorInfo = new Games.FloorInfo();
                _this.roomInfo = new Games.RoomInfo();
                //选择在屏幕内开始加载图片纹理
                Laya.timer.loop(50, _this, _this.onTimeLoadTextureOnScreen, null, true, true);
                return _this;
            }
            BuildRoom.createInstance = function () {
                return (fairygui.UIPackage.createObject("Building", "BuildRoom"));
            };
            BuildRoom.prototype.onTimeLoadTextureOnScreen = function () {
                this.point.x = 0;
                this.point.y = 0;
                var globalPos = this.displayObject.localToGlobal(this.point);
                if (globalPos.y + this.height >= 0 && globalPos.y <= Laya.stage.height) {
                    this.tryLoadBuildTexture();
                }
            };
            BuildRoom.prototype.tryLoadBuildTexture = function () {
                if (this.roomTextureUrl != "") {
                    if (!this.isInitLoadRoomTexture) {
                        console.log("load floor " + this.floorInfo.index + " texture");
                        this.isInitLoadRoomTexture = true;
                        this.m_buildScene.m_loader.url = this.roomTextureUrl;
                        Laya.timer.clear(this, this.onTimeLoadTextureOnScreen);
                    }
                }
            };
            Object.defineProperty(BuildRoom.prototype, "isBuilded", {
                get: function () {
                    return this.roomInfo.id != 0;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(BuildRoom.prototype, "roomWidth", {
                get: function () {
                    return this.m_buildScene.m_avatarContainer0.width;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(BuildRoom.prototype, "roomHeight", {
                get: function () {
                    return this.m_buildScene.m_avatarContainer0.height;
                },
                enumerable: true,
                configurable: true
            });
            //房间初始化
            BuildRoom.prototype.init = function () {
                this.m_btn_roomName.getChild("title").text = format(Games.TEXT.Floor, this.floorInfo.index);
                this.m_btn_buildFloor.getChild("Title").text = format(Games.TEXT.BuildFloor, this.floorInfo.index);
                this.m_failReason.visible = false;
                this.m_btn_buildRoom.visible = false;
                //特效容器
                this.displayObject.addChild(this.buildFxSprite);
            };
            BuildRoom.prototype.buildFloor = function () {
                this.roomTextureUrl = Res.getRoom("expansion");
                // this.m_buildScene.m_loader.url = Res.getRoom("expansion");
                this.isUnBuildFloor = true;
            };
            BuildRoom.prototype.waitBuindRoom = function () {
                this.m_btn_buildFloor.visible = false;
                this.m_btn_buildRoom.visible = true;
                this.isUnBuildFloor = false;
                // this.m_buildScene.m_loader.url = Res.getRoom("construct");
                this.roomTextureUrl = Res.getRoom("construct");
            };
            BuildRoom.prototype.onBuildComplete = function (info) {
                this.m_btn_buildRoom.visible = false;
                this.m_failReason.visible = false;
                this.setInfo(info);
                this.installRoomProcesser();
            };
            BuildRoom.prototype.setInfo = function (info) {
                this.roomInfo = info;
                this.floorInfo.index = info.floor;
                this.name = info.name;
                var cfg = Game.config.buildingLevel.getConfig(info.id);
                this.m_btn_roomName.getChild("title").text = this.name + " " + format(Games.TEXT.Lv, cfg.level);
                // this.m_buildScene.m_loader.url = Res.getRoom(info.type);
                this.roomTextureUrl = Res.getRoom(info.type);
                this.m_btn_buildFloor.visible = false;
                this.m_btn_buildRoom.visible = false;
                this.m_buildScene.m_loader.touchable = false;
                this.m_buildScene.m_canvasContainer.touchable = false;
                this.isUnBuildFloor = false;
            };
            BuildRoom.prototype.updateLoaderTexture = function () {
                this.m_buildScene.m_loader.url = this.roomTextureUrl;
            };
            BuildRoom.prototype.installRoomProcesser = function () {
                var processerData = Games.BuildingProcessMgr.get(this.roomInfo.type);
                if (processerData) {
                    this.processer = new processerData.newClass();
                    this.processer.init(this);
                }
            };
            BuildRoom.prototype.setRoomFrameVisible = function (val) {
                this.m_frame.visible = val;
                this.m_btn_roomName.visible = val;
                this.m_buildScene.m_bg.visible = val;
                if (!val) {
                    this.tryLoadBuildTexture();
                    this.setSceneSizeForSource();
                    this.visible = true;
                }
                else {
                    this.setSceneSizeForState();
                }
            };
            BuildRoom.prototype.showFailBuildFloorReason = function (reason) {
                this.m_failReason.visible = true;
                this.m_btn_buildFloor.visible = false;
                this.m_buildFloorInfo.text = reason;
            };
            BuildRoom.prototype.hideFailBuildFloorReason = function () {
                this.m_failReason.visible = false;
                this.m_btn_buildFloor.visible = this.isUnBuildFloor;
            };
            BuildRoom.prototype.showBuildEffect = function () {
                // let onFogFxLoadComplete = () =>
                // {
                // 	this.hammerFx = Game.Fx.create(FxKey.BuildHammer, this.buildFxSprite, this.buildFxSprite.numChildren, this.width / 2, this.height / 2, true);
                // };
                // if (this.fogFx == null)
                // {
                // 	this.fogFx = Game.Fx.create(FxKey.BuildFog, this.buildFxSprite, 0, this.width / 2, this.height / 2, true, Handler.create(null, onFogFxLoadComplete));
                // }
                // this.fogFx.visible = true;
                // this.fogFx.play();
                // if (this.hammerFx)
                // {
                // 	this.hammerFx.visible = true;
                // 	this.hammerFx.play();
                // }
                if (!this.buildEffect) {
                    this.buildEffect = fgui.Fx.Effect_build02.createInstance();
                }
                this.m_effectContainer.addChild(this.buildEffect);
                var animTrans = this.buildEffect.getTransition("t000"); //"smoke_beat_qq");
                if (animTrans) {
                    animTrans.play();
                    this.buildEffect.visible = true;
                }
            };
            BuildRoom.prototype.clearBuildEffect = function () {
                // if (this.fogFx)
                // {
                // 	this.fogFx.stop();
                // 	this.fogFx.visible = false;
                // }
                // if (this.hammerFx)
                // {
                // 	this.hammerFx.stop();
                // 	this.hammerFx.visible = false;
                // }
                if (this.buildEffect) {
                    var animTrans = this.buildEffect.getTransition("t000"); //"smoke_beat_qq");
                    if (animTrans) {
                        animTrans.stop();
                        this.buildEffect.visible = false;
                        this.buildEffect.removeFromParent();
                    }
                }
            };
            //---------------------------------------------
            // avatar 交互
            //---------------------------------------------
            /**
             * 添加avatar到场景容器
             * 场景物件有层级关系
             */
            BuildRoom.prototype.addAvatar = function (avatar, container) {
                this.avatarList.push(avatar);
                avatar.setRoomInfo(this.roomInfo);
                container.displayObject.addChild(avatar);
                Game.moduleModel.building.addAvatar(this.roomInfo.type, avatar.info);
            };
            BuildRoom.prototype.removeAvatar = function (avatar) {
                var index = this.avatarList.findIndex(function (value) {
                    return value.uid == avatar.uid;
                });
                var ainfo = avatar.info;
                if (index != -1) {
                    Game.moduleModel.building.removeAvatar(this.roomInfo.type, avatar.uid);
                    this.avatarList.splice(index, 1)[0].dispose();
                }
            };
            BuildRoom.prototype.clearAllAvatar = function () {
                for (var i = this.avatarList.length - 1; i >= 0; i--) {
                    this.removeAvatar(this.avatarList[i]);
                }
                this.avatarList.length = 0;
            };
            BuildRoom.prototype.forEachAvatar = function (func) {
                this.avatarList.forEach(function (value, index, array) {
                    if (func) {
                        func(value);
                    }
                });
            };
            /**
             * avatar进入房间
             */
            BuildRoom.prototype.avatarEnter = function (avatarInfo, direction, onEvent, route, isBornFixedPos) {
                var _this = this;
                var enterFunc = function () {
                    Game.moduleModel.building.addAvatar(_this.roomInfo.type, avatar.info);
                    avatar.direction = direction;
                    var routeY = _this.routeYList[Random.range(0, _this.routeYList.length)];
                    var container;
                    if (routeY == _this.routeYList[0]) {
                        container = _this.m_buildScene.m_avatarContainer1;
                    }
                    else {
                        container = _this.m_buildScene.m_avatarContainer0;
                    }
                    if (route) {
                        if (route == Games.DirtionType.Down) {
                            routeY = _this.routeYList[0];
                            container = _this.m_buildScene.m_avatarContainer1;
                        }
                        else {
                            routeY = _this.routeYList[1];
                            container = _this.m_buildScene.m_avatarContainer0;
                        }
                    }
                    container.displayObject.addChild(avatar);
                    avatar.y = _this.roomHeight - routeY;
                    if (direction == Games.DirtionType.Left) {
                        avatar.pos(Laya.stage.width + 100, avatar.y);
                    }
                    else {
                        avatar.pos(-100, avatar.y);
                    }
                    avatar.setRoomInfo(_this.roomInfo);
                    avatar.openShadow();
                    avatar.enter(onEvent, isBornFixedPos);
                    _this.avatarList.push(avatar);
                };
                var avatar = AvatarManager.getRoomAvatar(avatarInfo.uid);
                if (avatar != null) {
                    avatar.visible = true;
                    enterFunc();
                }
                else {
                    avatar = Games.Avatar.RoomCreate(avatarInfo, function (info) {
                        enterFunc();
                        AvatarManager.addRoomAvatar(avatar);
                    });
                }
            };
            BuildRoom.prototype.onAvatarEnter = function (avatarUid) {
                // let avatar = this.getAvatar(avatarUid);
                // if (avatar)
                // {
                // 	avatar.setRoomInfo(this.roomInfo);
                // 	Game.moduleModel.building.addAvatar(this.roomInfo.id, avatar.info);
                // }
            };
            /**
             * avatar 离开房间
             * @param avatarUid
             */
            BuildRoom.prototype.avatarLeave = function (avatarUid, onEvent, isRun) {
                var avatar = this.getAvatar(avatarUid);
                if (avatar) {
                    avatar.leave(onEvent, isRun);
                }
            };
            BuildRoom.prototype.onAvatarLeave = function (avatarUid) {
                Game.moduleModel.building.removeAvatar(this.roomInfo.type, avatarUid);
                for (var i = 0; i < this.avatarList.length; i++) {
                    var avatar = this.avatarList[i];
                    if (avatar.uid == avatarUid) {
                        if (AvatarManager.hasRoomAvatar(avatarUid)) {
                            avatar.visible = false;
                        }
                        else {
                            avatar.dispose();
                        }
                        this.avatarList.splice(i, 1);
                        break;
                    }
                }
            };
            /**
             * 获取房间Avatar
             * @param avatarUid
             */
            BuildRoom.prototype.getAvatar = function (avatarUid) {
                return this.avatarList.findOne(function (value) {
                    return value.uid == avatarUid;
                });
            };
            BuildRoom.prototype.getAvatarById = function (id) {
                return this.avatarList.findOne(function (value) {
                    return value.info.id == id;
                });
            };
            /**
             * 执行avatar行为事件
             * @param avatarUid
             * @param eventList
             */
            BuildRoom.prototype.executeActionEvents = function (avatarUid, eventList) {
                var avatar = this.avatarList.findOne(function (value) {
                    return value.uid == avatarUid;
                });
                if (avatar) {
                    avatar.executeActionEvents(eventList);
                }
            };
            /**
             * 所有avatar离开房间
             * @param onEvent
             */
            BuildRoom.prototype.executeLeaveRoomForEach = function (onEvent, exceptAvatarId) {
                if (onEvent) {
                    this.avatarList.forEach(function (value, index, array) {
                        if (value.info.type == Games.AvatarType.Actor) {
                            if (value.info.id != exceptAvatarId) {
                                value.endEvent(false);
                                value.leave(onEvent);
                            }
                        }
                    });
                }
            };
            /** 进入屏幕范围 */
            BuildRoom.prototype.onRoomInScreen = function () {
                this.avatarList.forEach(function (value, index, array) {
                    value.inScreen();
                });
            };
            /** 离开屏幕范围 */
            BuildRoom.prototype.onRoomOutScreen = function () {
                this.avatarList.forEach(function (value, index, array) {
                    value.outScreen();
                });
            };
            /** 暂停房间事件 */
            BuildRoom.prototype.onRoomPauseEvent = function () {
                this.avatarList.forEach(function (value, index, array) {
                    value.isPause = true;
                });
            };
            /** 运行房间事件 */
            BuildRoom.prototype.onRoomResumeEvent = function () {
                this.avatarList.forEach(function (value, index, array) {
                    value.isPause = false;
                });
            };
            // 设置场景大小, 为屏幕大小
            BuildRoom.prototype.setSceneSizeForState = function () {
                this.width = ScreenSetting.screenWidth;
                var scale = this.width / this.sourceWidth;
                this.height = this.sourceHeight * scale;
                this.m_buildScene.setScale(scale, scale);
                // console.log("setSceneSizeForState " + this.name);
            };
            //设置场景大小，为开发大小
            BuildRoom.prototype.setSceneSizeForSource = function () {
                this.width = this.sourceWidth;
                this.height = this.sourceHeight;
                var scale = this.width / this.m_buildScene.sourceWidth;
                this.m_buildScene.setScale(scale, scale);
                // console.log("setSceneSizeForSource " + this.name);
            };
            BuildRoom.prototype.setSceenSize = function (width, height) {
                this.width = width;
                var scale = this.width / this.sourceWidth;
                this.height = this.sourceHeight * scale;
                scale = this.width / this.m_buildScene.sourceWidth;
                this.m_buildScene.setScale(scale, scale);
                console.log("setSceenSize " + this.name);
            };
            BuildRoom.URL = "ui://d062jvkgor9t1";
            return BuildRoom;
        }(Building.BuildRoomStruct));
        Building.BuildRoom = BuildRoom;
    })(Building = fgui.Building || (fgui.Building = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=BuildRoom.js.map