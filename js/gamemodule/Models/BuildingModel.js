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
    //楼层信息
    var FloorInfo = /** @class */ (function () {
        function FloorInfo() {
            this.index = 0;
        }
        return FloorInfo;
    }());
    Games.FloorInfo = FloorInfo;
    //房间信息
    var RoomInfo = /** @class */ (function () {
        function RoomInfo() {
            this.id = 0;
            this.floor = 0;
            this.name = "room";
            this.type = 0;
            this.isBuilded = false; //是否已建造
        }
        Object.defineProperty(RoomInfo.prototype, "buildLevelConfig", {
            // 房间等级配置        
            get: function () {
                return Game.config.buildingLevel.getConfig(this.id);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(RoomInfo.prototype, "level", {
            // 房间等级        
            get: function () {
                return this.buildLevelConfig.level;
            },
            enumerable: true,
            configurable: true
        });
        RoomInfo.prototype.updateServer = function (info) {
            this.id = info.roomId;
            this.floor = info.floor;
            var config = Game.config.buildingLevel.getConfig(info.roomId);
            this.name = config.name;
            this.type = config.type;
            this.isBuilded = true;
        };
        RoomInfo.creatInfo = function (sinfo) {
            var info = new RoomInfo();
            info.updateServer(sinfo);
            return info;
        };
        return RoomInfo;
    }());
    Games.RoomInfo = RoomInfo;
    var RoomAvatarData = /** @class */ (function () {
        function RoomAvatarData() {
            this.performType = Games.PerformType.FreeWalk; //表演类型
            this.onEvent = true; // 是否正在执行随机事件
            this.eventId = 0;
            this.roomId = 0;
            this.roomType = 0;
            this.avatarId = 0;
            this.avatarUid = 0;
        }
        return RoomAvatarData;
    }());
    Games.RoomAvatarData = RoomAvatarData;
    //======================
    // 建造 数据模型
    //----------------------
    var BuildingModel = /** @class */ (function (_super) {
        __extends(BuildingModel, _super);
        function BuildingModel() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            //所有房间信息
            _this.roomInfoList = [];
            //艺人随机表演不能进入房间
            _this.avatarLimitRoomType = [
                Games.RoomType.Cinema,
                Games.RoomType.Training,
            ];
            //----------------------------------------------
            //  会议
            //----------------------------------------------
            //会议室是否正在会议
            _this._isOnMeeting = false;
            return _this;
        }
        BuildingModel.prototype.install = function () {
            this.avatarDict = new Dictionary();
        };
        //----------------------------------
        // 房间Avatar信息
        //----------------------------------
        //房间内添加Avatar
        BuildingModel.prototype.addAvatar = function (roomType, info) {
            var avatarList = this.getRoomAvatarList(roomType);
            if (!this.hasAvatar(roomType, info.uid)) {
                avatarList.push(info);
            }
        };
        //房间内添加Avatar
        BuildingModel.prototype.removeAvatar = function (roomType, avatarUid) {
            var avatarList = this.getRoomAvatarList(roomType);
            for (var i = 0; i < avatarList.length; i++) {
                if (avatarList[i].uid == avatarUid) {
                    avatarList.splice(i, 1);
                    break;
                }
            }
        };
        //获取某个房间内所有Avatar列表
        BuildingModel.prototype.getRoomAvatarList = function (roomType) {
            return this.avatarDict.getValue(roomType) || [];
        };
        //获取房间内某个avatar
        BuildingModel.prototype.getAvatar = function (roomType, avatarUid) {
            var avatarList = this.getRoomAvatarList(roomType);
            return avatarList.findOne(function (value) {
                return value.uid == avatarUid;
            });
        };
        //通过艺人Id找到艺人
        BuildingModel.prototype.findActorById = function (actorId) {
            var roomAvatar;
            var allAvatarList = this.avatarDict.getValues();
            for (var _i = 0, allAvatarList_1 = allAvatarList; _i < allAvatarList_1.length; _i++) {
                var avatarList = allAvatarList_1[_i];
                for (var _a = 0, avatarList_1 = avatarList; _a < avatarList_1.length; _a++) {
                    var avatarInfo = avatarList_1[_a];
                    if (avatarInfo.id == actorId) {
                        roomAvatar = new RoomAvatarData();
                        roomAvatar.avatarId = actorId;
                        roomAvatar.avatarUid = avatarInfo.uid;
                        if (avatarInfo.roomInfo) {
                            roomAvatar.roomType = avatarInfo.roomInfo.type;
                        }
                        return roomAvatar;
                    }
                }
            }
            return roomAvatar;
        };
        //房间内是否有Avatar
        BuildingModel.prototype.hasAvatar = function (roomType, avatarUid) {
            return this.getAvatar(roomType, avatarUid) != null;
        };
        //获得avatar进入的随机房间
        BuildingModel.prototype.getAvatarEnterRoomType = function (actor) {
            var result = [];
            var roomTypes = this.avatarDict.getKeys();
            var maxActorCount = GlobalConfig.getValue(GlobalKey.KEY_1015_YiRenZaiLou__ShuLiangShangXian);
            for (var _i = 0, roomTypes_1 = roomTypes; _i < roomTypes_1.length; _i++) {
                var roomType = roomTypes_1[_i];
                roomType = Number(roomType);
                //限制房间列表
                if (this.isAvatarLimitRoom(roomType)) {
                    continue;
                }
                //会议室是否正在开会
                if (roomType == Games.RoomType.Meeting && this.isOnMeeting) {
                    continue;
                }
                //是否正在探班
                if (roomType == Games.RoomType.Reception && Games.AvatarManager.hasActorVisit) {
                    continue;
                }
                if (this.avatarDict.getValue(roomType).length < maxActorCount) {
                    result.push(roomType);
                }
            }
            if (result.length > 0) {
                var rdIndex = Random.range(0, result.length);
                return result[rdIndex];
            }
            return -1;
        };
        BuildingModel.prototype.isAvatarLimitRoom = function (roomType) {
            return this.avatarLimitRoomType.indexOf(roomType) != -1;
        };
        Object.defineProperty(BuildingModel.prototype, "isOnMeeting", {
            get: function () {
                return this._isOnMeeting;
            },
            set: function (value) {
                this._isOnMeeting = value;
            },
            enumerable: true,
            configurable: true
        });
        //----------------------------------
        // 房间信息
        //----------------------------------
        //获取房间信息
        BuildingModel.prototype.getRoomInfo = function (id) {
            return this.roomInfoList.findOne(function (value) {
                return value.id == id;
            });
        };
        //房间类型获取房间号
        BuildingModel.prototype.getRoomByType = function (roomType) {
            return this.roomInfoList.findOne(function (value) {
                return value.type == roomType;
            });
        };
        //获取房间等级
        BuildingModel.prototype.getRoomLevel = function (roomType) {
            var roomInfo = this.getRoomByType(roomType);
            if (roomInfo) {
                return Game.config.buildingLevel.getConfig(roomInfo.id).level;
            }
            return 0;
        };
        //添加房间信息
        BuildingModel.prototype.addRoomInfo = function (info) {
            this.roomInfoList.push(info);
            this.avatarDict.add(info.type, []);
        };
        //房间升级
        BuildingModel.prototype.upgradeRoom = function (preRoomId, roomId) {
            var preRoomInfo = this.getRoomInfo(preRoomId);
            var cfg = Game.config.buildingLevel.getConfig(roomId);
            preRoomInfo.id = roomId;
            preRoomInfo.name = cfg.name;
        };
        //获取所有房间信息列表
        BuildingModel.prototype.getInfoList = function () {
            return this.roomInfoList;
        };
        // 获取建筑ID的等级是否满足
        BuildingModel.prototype.validataBuildLevel = function (buildLevelId) {
            var buildType = this.buildLevelId2BuildId(buildLevelId);
            var roomInfo = this.getRoomByType(buildType);
            if (roomInfo) {
                var buildLevelCfg = Game.config.buildingLevel.getConfig(buildLevelId);
                if (buildLevelCfg) {
                    return buildLevelCfg.level <= roomInfo.level;
                }
            }
            return false;
        };
        //房间是否建造
        BuildingModel.prototype.hasBuildById = function (buildId) {
            return this.getRoomInfo(buildId) != null;
        };
        //房间是否建造
        BuildingModel.prototype.hasBuildByType = function (buildType) {
            return this.getRoomByType(buildType) != null;
        };
        /**
         * 是否已经扩建楼层还没建造房间
         * @param floorIndex 从1开始
         */
        BuildingModel.prototype.hasBuildFloorWithoutRoom = function (floorIndex) {
            if (floorIndex === void 0) { floorIndex = 1; }
            return User.info.extendFloor == floorIndex && User.info.buildRoomInfo.length < floorIndex;
        };
        //房间等级ID 转 房间ID
        BuildingModel.prototype.buildLevelId2BuildId = function (buildLevelId) {
            return Math.floor(buildLevelId / 1000);
        };
        /**
         * 获取属性加成
         * @param buildType 房间类型
         * @param index
         */
        BuildingModel.prototype.getBuildEffectPar = function (buildType, effectType) {
            var buildInfo = this.getRoomByType(buildType);
            var par = 0;
            if (buildInfo) {
                var buildLvConfig = Game.config.buildingLevel.getConfig(buildInfo.id);
                if (buildLvConfig) {
                    var effects = buildLvConfig.effect_id;
                    for (var index = 0; index < effects.length; index++) {
                        var element = effects[index];
                        var buildEffectCfg = Game.config.buildingEffect.getConfig(element);
                        if (buildEffectCfg.effect == effectType) {
                            par = buildEffectCfg.par1;
                        }
                    }
                }
            }
            return par;
        };
        /**
         *
         * @param buildType
         * @param id
         */
        BuildingModel.prototype.getBuildEffectNum = function (buildType, itemId, itemNum) {
            var buildInfo = this.getRoomByType(buildType);
            var num = itemNum;
            if (buildInfo) {
                var buildLvConfig = Game.config.buildingLevel.getConfig(buildInfo.id);
                if (buildLvConfig) {
                    var effects = buildLvConfig.effect_id;
                    for (var index = 0; index < effects.length; index++) {
                        var element = effects[index];
                        var buildEffectCfg = Game.config.buildingEffect.getConfig(element);
                        switch (buildEffectCfg.effect) {
                            case Games.BuildingEffectType.effect_add_order_zan:
                                if (itemId == buildEffectCfg.par1) {
                                    num = Math.floor(itemNum * (buildEffectCfg.par2 / 100 + 1));
                                }
                                break;
                            case Games.BuildingEffectType.effect_add_order_xuanchuan:
                                if (itemId == buildEffectCfg.par1) {
                                    num = itemNum + buildEffectCfg.par2;
                                }
                                break;
                            case Games.BuildingEffectType.effect_add_business_reward:
                                num = Math.floor(itemNum * (buildEffectCfg.par1 / 100 + 1));
                                break;
                            case Games.BuildingEffectType.effect_add_fans_visit_reward:
                                num = Math.floor(itemNum * (buildEffectCfg.par1 / 100 + 1));
                                break;
                            case Games.BuildingEffectType.effect_add_meeting_reward:
                                num = Math.floor(itemNum * (buildEffectCfg.par1 / 100 + 1));
                                break;
                            default:
                                break;
                        }
                    }
                }
            }
            return num;
        };
        return BuildingModel;
    }(Games.MModel));
    Games.BuildingModel = BuildingModel;
})(Games || (Games = {}));
//# sourceMappingURL=BuildingModel.js.map