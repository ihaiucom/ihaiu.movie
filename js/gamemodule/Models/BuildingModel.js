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
            /** 房间场景宽高 */
            this.sceneWidth = 0;
            this.sceneHeight = 0;
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
            //是否是开始进入房间
            this.isEnterRoom = false;
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
            //楼层index
            _this.floorIndex = 0;
            //所有房间信息
            _this.roomInfoList = [];
            _this.roomInfoCacheList = [];
            // 事件-开始滚动
            _this.sScrollStart = new Signal();
            // 事件-结束滚动
            _this.sScrollEnd = new Signal();
            //房间列表是否在滚动中
            _this.isBuildListScrolling = false;
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
            //服务器返回房间信息
            _this.isInit = false;
            return _this;
        }
        BuildingModel.prototype.install = function () {
            this.avatarDict = new Dictionary();
        };
        //----------------------------------
        // 房间Avatar信息
        //----------------------------------
        //房间内添加Avatar
        BuildingModel.prototype.addAvatar = function (roomType, unitData) {
            var avatarList = this.getRoomAvatarList(roomType);
            if (!this.hasAvatar(roomType, unitData.info.uid)) {
                avatarList.push(unitData);
            }
        };
        //房间内添加Avatar
        BuildingModel.prototype.removeAvatar = function (roomType, avatarUid) {
            var avatarList = this.getRoomAvatarList(roomType);
            for (var i = 0; i < avatarList.length; i++) {
                if (avatarList[i].info.uid == avatarUid) {
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
                return value.info.uid == avatarUid;
            });
        };
        /** 根据艺人配置id获取艺人所在房间 */
        BuildingModel.prototype.getAvatarRoomType = function (avatarId) {
            var roomList = this.avatarDict.getValues();
            for (var i = 0; i < roomList.length; i++) {
                var avatarList = roomList[i];
                for (var j = 0; j < avatarList.length; j++) {
                    var model = avatarList[j];
                    if (model.info.id == avatarId) {
                        return model.roomInfo.type;
                    }
                }
            }
            return -1;
        };
        Object.defineProperty(BuildingModel.prototype, "allRoomAvatarNum", {
            //获取房间艺人列表
            get: function () {
                var cnt = 0;
                var allAvatarList = this.avatarDict.getValues();
                {
                    for (var _i = 0, allAvatarList_1 = allAvatarList; _i < allAvatarList_1.length; _i++) {
                        var avatarList = allAvatarList_1[_i];
                        cnt += avatarList.length;
                    }
                }
                return cnt;
            },
            enumerable: true,
            configurable: true
        });
        //通过艺人Id找到艺人
        BuildingModel.prototype.findActorById = function (actorId) {
            var roomAvatar;
            var allAvatarList = this.avatarDict.getValues();
            for (var _i = 0, allAvatarList_2 = allAvatarList; _i < allAvatarList_2.length; _i++) {
                var avatarList = allAvatarList_2[_i];
                for (var _a = 0, avatarList_1 = avatarList; _a < avatarList_1.length; _a++) {
                    var unitData = avatarList_1[_a];
                    if (unitData.info.id == actorId) {
                        roomAvatar = new RoomAvatarData();
                        roomAvatar.avatarId = actorId;
                        roomAvatar.avatarUid = unitData.info.uid;
                        if (unitData.roomInfo) {
                            roomAvatar.roomType = unitData.roomInfo.type;
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
        BuildingModel.prototype.getAvatarEnterRoomType = function (isCheckRoomLimit) {
            if (isCheckRoomLimit === void 0) { isCheckRoomLimit = true; }
            var result = [];
            var roomTypes = this.avatarDict.getKeys();
            var maxActorCount = Games.AvatarManager.maxRoomActorCount;
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
                //是否正在拍摄中
                if (Games.AvatarManager.isOnShoot) {
                    continue;
                }
                if (isCheckRoomLimit) {
                    if (this.avatarDict.getValue(roomType).length < maxActorCount) {
                        result.push(roomType);
                    }
                }
                else {
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
        BuildingModel.prototype.initRoomInfo = function (msg) {
            this.roomInfoList.length = 0;
            this.avatarDict.clear();
            for (var _i = 0, _a = msg.buildRoomInfo; _i < _a.length; _i++) {
                var rInfo = _a[_i];
                var cInfo = Games.RoomInfo.creatInfo(rInfo);
                this.addRoomInfo(cInfo);
            }
            this.floorIndex = User.info.extendFloor;
            if (!this.isInit) {
                this.roomInfoCacheList = this.roomInfoList;
                this.isInit = true;
            }
            else {
                this.syncRoomInfoList();
            }
        };
        //重新获取数据后同步增量房间信息
        BuildingModel.prototype.syncRoomInfoList = function () {
            var deltaList = [];
            var _loop_1 = function () {
                var nInfo = this_1.roomInfoList[i];
                var index = this_1.roomInfoCacheList.findIndex(function (value) {
                    return value.type == nInfo.type;
                });
                if (index == -1) {
                    deltaList.push(nInfo);
                }
            };
            var this_1 = this;
            for (var i = 0; i < this.roomInfoList.length; i++) {
                _loop_1();
            }
            this.roomInfoCacheList = this.roomInfoList;
            if (deltaList.length > 0) {
                Game.event.dispatch(GameEventKey.GameEventKey_SyncRoomInfo, deltaList);
            }
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
            if (User.info.buildRoomInfo) {
                return User.info.extendFloor == floorIndex && User.info.buildRoomInfo.length < floorIndex;
            }
            return false;
        };
        //房间等级ID 转 房间ID
        BuildingModel.prototype.buildLevelId2BuildId = function (buildLevelId) {
            return Math.floor(buildLevelId / 1000);
        };
        Object.defineProperty(BuildingModel.prototype, "isTopFloor", {
            // 是否为顶层
            get: function () {
                return this.floorIndex >= Game.config.floor.getConfigList().length;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(BuildingModel.prototype, "isFreeFloor", {
            //是否为免费楼层
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
         * @条件检查 -- 扩建楼层
         * @param isShowAlert
         */
        BuildingModel.prototype.checkBuildFloorCondition = function (isShowAlert) {
            if (isShowAlert === void 0) { isShowAlert = false; }
            var checkResult = { result: true, reason: "" };
            if (this.isTopFloor) //顶层
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
            if (this.isFreeFloor) {
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
        /**
         * @条件检查 -- 扩建楼层城市需求
         */
        BuildingModel.prototype.checkBuildFloorCityCondition = function () {
            var checkResult = { result: true, reason: "" };
            if (this.isTopFloor) {
                return checkResult;
            }
            var floorConfig = Game.config.floor.getConfig(this.floorIndex + 1);
            if (User.info.level < floorConfig.level_req) {
                checkResult.result = false;
                var msg = format(Games.TEXT.BuildFloorFailLevel, floorConfig.level_req);
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
                        msg = format(Games.TEXT.BuildFloorFailCity, cityCfg.city_num, cityCfg.name);
                    }
                    checkResult.reason = msg;
                }
            }
            return checkResult;
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
        Object.defineProperty(BuildingModel.prototype, "goldExchangeTimes", {
            //
            get: function () {
                return 0;
            },
            enumerable: true,
            configurable: true
        });
        return BuildingModel;
    }(Games.MModel));
    Games.BuildingModel = BuildingModel;
})(Games || (Games = {}));
//# sourceMappingURL=BuildingModel.js.map