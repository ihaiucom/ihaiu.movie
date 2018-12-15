var Games;
(function (Games) {
    var AvatarManager = /** @class */ (function () {
        function AvatarManager() {
        }
        AvatarManager.init = function (context) {
            this.context = Game.stageManager.homeSceneSet;
            this.MAX_EVENT_TIME = GlobalConfig.getValue(GlobalKey.KEY_1016_MoXingZaiLou__JianDeShuLiang); //艺人在场景最大事件数
            this.sBehaviorFinish.add(this.onAvatarBehaviorFinish, this);
            this.sAvatarEnter.add(this.onAvatarEnterRoom, this);
            this.sAvatarLeave.add(this.onAvatarLeaveRoom, this);
            this.sAvatarClick.add(this.onAvatarClick, this);
            Game.moduleModel.actor.sAddActorList.add(this.onGetActor, this);
            Game.event.add(GameEventKey.GameEventKey_UpdateActorHideInfo, this.onActorHideInfoUpdate, this);
            //初始艺人列表
            this.initSceneActorList();
        };
        AvatarManager.destroy = function () {
            this.sBehaviorFinish.remove(this.onAvatarBehaviorFinish, this);
            this.sAvatarEnter.remove(this.onAvatarEnterRoom, this);
            this.sAvatarLeave.remove(this.onAvatarLeaveRoom, this);
            this.sAvatarClick.remove(this.onAvatarClick, this);
            Game.moduleModel.actor.sAddActorList.remove(this.onGetActor, this);
            Game.event.remove(GameEventKey.GameEventKey_UpdateActorHideInfo, this.onActorHideInfoUpdate, this);
            var avatars = this.unitCtrlMap.getValues();
            for (var _i = 0, avatars_1 = avatars; _i < avatars_1.length; _i++) {
                var avatar = avatars_1[_i];
                avatar.endEvent(false);
                avatar.dispose();
            }
            this.unitCtrlMap.clear();
        };
        //-------------------------------------
        // 房间avatar模型缓存
        //-------------------------------------
        AvatarManager.addRoomCUnit = function (unitCtrl) {
            if (this.unitCtrlMap.count <= this.MAX_AVATAR_NUM) {
                this.unitCtrlMap.add(unitCtrl.unitModel.info.uid, unitCtrl);
            }
        };
        AvatarManager.getRoomCUnit = function (avatarUid) {
            if (this.hasRoomCUnit(avatarUid)) {
                var uCtrl = this.unitCtrlMap.getValue(avatarUid);
                return uCtrl;
            }
            return null;
        };
        AvatarManager.hasRoomCUnit = function (avatarUid) {
            return this.unitCtrlMap.hasKey(avatarUid);
        };
        //-------------------------------------
        // avatar 事件
        //-------------------------------------
        AvatarManager.onAvatarBehaviorFinish = function (data) {
            //自由行走
            if (data.performType == Games.PerformType.FreeWalk) {
                // console.log(`[AvatarManager Event]  avatarId= ${data.avatarId} roomId= ${data.roomId} roomName= ${Game.config.buildingLevel.getConfig(data.roomId).name} `);
                var time = this.avatarEventTimeList.getValue(data.avatarId);
                if (time <= this.MAX_EVENT_TIME) {
                    this.executeActionEvent(data.roomType, data.avatarUid);
                    this.avatarEventTimeList.add(data.avatarId, time + 1);
                }
                else {
                    this.context.startLeaveRoom(data.roomType, data.avatarUid, true);
                }
            }
        };
        AvatarManager.onAvatarEnterRoom = function (data) {
            // console.log(`[AvatarManager EnterRoom]  avatarId= ${data.avatarId} roomId= ${data.roomId} roomName= ${Game.config.buildingLevel.getConfig(data.roomId).name} `);
            this.context.onEnterRoom(data.roomType, data.avatarUid);
            if (data.onEvent) {
                this.executeActionEvent(data.roomType, data.avatarUid);
            }
        };
        AvatarManager.onAvatarLeaveRoom = function (data) {
            // console.log(`[AvatarManager LeaveRoom]  avatarId= ${data.avatarId} roomId= ${data.roomId} roomName= ${Game.config.buildingLevel.getConfig(data.roomId).name} `);
            this.avatarEventTimeList[data.avatarId] = 0;
            this.context.onLeaveRoom(data.roomType, data.avatarUid);
            if (data.onEvent) {
                var actor = Game.moduleModel.actor.getActor(data.avatarId);
                if (actor) {
                    this.allocActorToRoom(actor, data.avatarUid);
                }
            }
        };
        AvatarManager.onAvatarClick = function (data) {
            if (data.roomId == 0) {
                return;
            }
            console.log("[AvatarManager avatarClick]  avatarId= " + data.avatarId + " roomName= " + Game.config.buildingLevel.getConfig(data.roomId).name + " ");
            if (this.hasActorVisit) //有艺人探班
             {
                var cUnit = this.context.getAvatar(data.roomType, data.avatarUid);
                if (!cUnit)
                    return;
                if (this.isActorOnVisit(data.avatarId)) {
                    if (this.isActorReceptionOnLimit(data.avatarId)) //不能探状态中
                     {
                        Game.system.toastText(Game.config.msg.getTxt(MsgKey.visit_stop));
                        return;
                    }
                    if (!this.isInRoomReception(data.roomType)) {
                        cUnit.endEvent(false);
                        cUnit.executeActionEvents(Game.moduleModel.visit.getActorStartTalk(), Games.PerformType.ReceptionActorTalk);
                        this.context.startLeaveRoom(data.roomType, data.avatarUid, false, true);
                    }
                    else {
                        var receptionRoomProcesser = this.context.getRoomByType(Games.RoomType.Reception).processer;
                        receptionRoomProcesser.actorMoveRoute();
                    }
                    Game.moduleModel.visit.waitVisitActorId = data.avatarId;
                    this.startReceptior();
                }
                else //不是要找的艺人
                 {
                    if (cUnit.unitModel.info.type == Games.AvatarType.Actor) {
                        var visitActorName = Game.moduleModel.visit.getVisitName();
                        cUnit.setTalk(format(Game.moduleModel.visit.getWrongActorClickDialog(), visitActorName));
                    }
                }
            }
        };
        AvatarManager.initSceneActorList = function () {
            this.waitAllocActorList = this.getWaitAllocActors();
        };
        AvatarManager.allocAvatarListToRoom = function () {
            this.startTimeAlloc();
        };
        AvatarManager.startTimeAlloc = function () {
            // TODO 测试 不出现动画
            this.waitAllocActorList = this.getWaitAllocActors();
            Laya.timer.clear(this, this.onTimeAlloc);
            Laya.timer.loop(1500, this, this.onTimeAlloc, null, true, true);
        };
        AvatarManager.stopTimeAlloc = function () {
            Laya.timer.clear(this, this.onTimeAlloc);
        };
        //获取未分配actor列表
        AvatarManager.getWaitAllocActors = function () {
            var _this = this;
            //总艺人数
            var actorList = Game.moduleModel.actor.getActors();
            //训练艺人数
            var experciseActors = Game.moduleModel.actor.getExperciseDataList();
            var experciseActorDataList = [];
            for (var _i = 0, experciseActors_1 = experciseActors; _i < experciseActors_1.length; _i++) {
                var experciseActor = experciseActors_1[_i];
                var actorData = Game.moduleModel.actor.getActorByUUid(experciseActor.uuid);
                if (actorData) {
                    experciseActorDataList.push(actorData);
                }
            }
            //filter
            return actorList.filter(function (value, index, array) {
                var hasAlloced = _this.hasAllocedActorList.findOne(function (allocedValue) {
                    return value.id == allocedValue.id;
                });
                var hasExpercised = experciseActorDataList.findOne(function (expericesValue) {
                    return value.id == expericesValue.id;
                });
                return hasAlloced == null && hasExpercised == null;
            });
        };
        /** 定时分配艺人到房间 */
        AvatarManager.onTimeAlloc = function () {
            var isRoomScrolling = Game.moduleModel.building.isBuildListScrolling;
            //房间滚动状态不分配
            if (!isRoomScrolling) {
                if (this.waitAllocActorList.length > 0) {
                    var waitAllocActor = this.waitAllocActorList.splice(0, 1)[0];
                    this.allocActorToRoom(waitAllocActor);
                }
            }
        };
        /** 分配艺人到房间 */
        AvatarManager.allocActorToRoom = function (actor, avatarUid) {
            if (avatarUid === void 0) { avatarUid = 0; }
            this.avatarEventTimeList.add(actor.id, 0);
            //艺人在训练状态返回训练室
            if (Game.moduleModel.actor.isActorOnExercise(actor.id)) {
                var room = this.context.getRoomByType(Games.RoomType.Training);
                var avatar = room.getAvatarById(actor.id);
                if (!avatar) {
                    Game.event.dispatch(GameEventKey.GameEventKey_ActorBackToExperciseRoom, actor.id);
                }
                return;
            }
            var enterRoomType = Game.moduleModel.building.getAvatarEnterRoomType();
            //艺人在自动接待状态去接待室
            if (Game.moduleModel.visit.isActorOnAutoVisitStuts(actor.id)) {
                enterRoomType = Games.RoomType.Reception;
                this.startReceptior();
            }
            if (enterRoomType != -1 && !this.isOnUnitMaxCount) {
                this.addToAllocList(actor);
                var avatarInfo = Games.AvatarInfo.creatByActor(actor);
                avatarInfo.uid = avatarUid;
                var direction = Math.random() > 0.5 ? Games.DirtionType.Left : Games.DirtionType.Right;
                //接待室从左面进入房间
                if (enterRoomType == Games.RoomType.Reception) {
                    direction = Games.DirtionType.Right;
                }
                this.context.startEnterRoom(enterRoomType, avatarInfo, direction, true);
            }
            else {
                this.recoverToWaitAllocList(actor);
                if (this.isActorOnVisit(actor.id)) {
                    this.allocTargetActorToRoom(actor.id);
                }
                if (this.isOnUnitMaxCount) {
                    console.log("分配艺人达到上限值 " + this.unitMaxNum);
                }
            }
        };
        /** 分配 指定 艺人到房间 */
        AvatarManager.allocTargetActorToRoom = function (actorId) {
            var targetActor;
            for (var i = this.waitAllocActorList.length - 1; i >= 0; i--) {
                if (this.waitAllocActorList[i].id == actorId) {
                    targetActor = this.waitAllocActorList.splice(i, 1)[0];
                    break;
                }
            }
            if (targetActor) {
                var enterRoomType = Game.moduleModel.building.getAvatarEnterRoomType(false);
                //艺人在自动接待状态去接待室
                if (Game.moduleModel.visit.isActorOnAutoVisitStuts(targetActor.id)) {
                    enterRoomType = Games.RoomType.Reception;
                    this.startReceptior();
                }
                if (enterRoomType != -1) {
                    this.addToAllocList(targetActor);
                    var avatarInfo = Games.AvatarInfo.creatByActor(targetActor);
                    var direction = Math.random() > 0.5 ? Games.DirtionType.Left : Games.DirtionType.Right;
                    //接待室从左面进入房间
                    if (enterRoomType == Games.RoomType.Reception) {
                        direction = Games.DirtionType.Right;
                    }
                    this.context.startEnterRoom(enterRoomType, avatarInfo, direction, true);
                }
                else {
                    this.recoverToWaitAllocList(targetActor);
                }
            }
        };
        //添加艺人到已分配列表
        AvatarManager.addToAllocList = function (actor) {
            var findIndex = this.hasAllocedActorList.findIndex(function (value) {
                return value.id == actor.id;
            });
            if (findIndex == -1) {
                this.hasAllocedActorList.push(actor);
            }
        };
        //添加艺人到等待分配列表
        AvatarManager.recoverToWaitAllocList = function (actor) {
            var findIndex = this.waitAllocActorList.findIndex(function (value) {
                return value.id == actor.id;
            });
            if (findIndex == -1) {
                this.waitAllocActorList.push(actor);
            }
        };
        Object.defineProperty(AvatarManager, "isOnUnitMaxCount", {
            /** 是否达到设置艺人上限 */
            get: function () {
                return Game.moduleModel.building.allRoomAvatarNum >= this.unitMaxNum;
            },
            enumerable: true,
            configurable: true
        });
        //--------------------------------------
        //	移除房间内艺人
        //--------------------------------------
        AvatarManager.removeRoomActorList = function (actorIds) {
            var removeActorInfoList = [];
            for (var _i = 0, actorIds_1 = actorIds; _i < actorIds_1.length; _i++) {
                var actorId = actorIds_1[_i];
                var removeId = this.removeRoomActor(actorId);
                if (removeId != 0) {
                    removeActorInfoList.push(actorId);
                }
            }
            return removeActorInfoList;
        };
        AvatarManager.removeRoomActor = function (actorId) {
            var roomAvatar = Game.moduleModel.building.findActorById(actorId);
            if (roomAvatar != null) {
                var room = this.context.getRoomByType(roomAvatar.roomType);
                var cUnit = this.context.getAvatar(roomAvatar.roomType, roomAvatar.avatarUid);
                if (cUnit) {
                    cUnit.endEvent(false);
                    room.onAvatarLeave(cUnit.unitModel.info.uid);
                    return actorId;
                }
            }
            //从还未分配房间的艺人列表查找
            else {
                for (var i = this.waitAllocActorList.length - 1; i >= 0; i--) {
                    if (this.waitAllocActorList[i].id == actorId) {
                        var unAllocActor = this.waitAllocActorList.splice(i, 1)[0];
                        this.addToAllocList(unAllocActor);
                        return unAllocActor.id;
                    }
                }
            }
            return 0;
        };
        //更新艺人雪藏信息
        AvatarManager.onActorHideInfoUpdate = function (actor) {
            if (actor.hide) {
                if (!this.isActorOnVisit(actor.id)) //不在探班状态
                 {
                    this.removeRoomActor(actor.id);
                }
            }
            else {
                this.allocActorToRoom(actor);
            }
        };
        //获得艺人
        AvatarManager.onGetActor = function (actor) {
            this.waitAllocActorList = this.getWaitAllocActors();
        };
        //--------------------------------------
        //	房间内模型执行事件
        //--------------------------------------
        AvatarManager.executeActionEvent = function (roomType, avatarId) {
            var performId = this.getRDPerformId(roomType);
            if (performId != -1) {
                this.executeActionByPerformId(roomType, avatarId, performId);
            }
        };
        AvatarManager.executeActionByPerformId = function (roomType, avatarId, performId) {
            var performCfg = Game.config.perform.getConfig(performId);
            this.context.executeActionEvents(roomType, avatarId, performCfg.eventList);
        };
        //根据权重获得一个PerformId
        AvatarManager.getRDPerformId = function (roomType) {
            var performList = Game.config.perform.getConfigList();
            performList = performList.filter(function (value, index, array) {
                return value.building == roomType;
            });
            if (performList.length > 0) {
                var totalWeight_1 = 0;
                performList.forEach(function (value, index, array) {
                    totalWeight_1 += value.weight;
                });
                var randVal = Random.rangeBoth(0, totalWeight_1);
                var dr = 0;
                for (var i = 0; i < performList.length; i++) {
                    dr += performList[i].weight;
                    if (dr >= randVal) {
                        return performList[i].id;
                    }
                }
            }
            return -1;
        };
        //----------------------------------------------
        //  探班
        //----------------------------------------------
        AvatarManager.autoActorToReception = function (actorId) {
            console.log("autoActorToReception()");
            //分配接待艺人到房间
            AvatarManager.allocTargetActorToRoom(actorId);
            var roomAvatar = Game.moduleModel.building.findActorById(actorId);
            if (roomAvatar != null) {
                if (this.isActorOnVisit(actorId)) {
                    if (this.isActorReceptionOnLimit(actorId)) //不能探状态中
                     {
                        console.log("不能探状态中");
                        return;
                    }
                    var receptionRoomProcesser = this.context.getRoomByType(Games.RoomType.Reception).processer;
                    if (!this.isInRoomReception(roomAvatar.roomType)) {
                        var avatar = this.context.getAvatar(roomAvatar.roomType, roomAvatar.avatarUid);
                        if (avatar) {
                            avatar.endEvent(false);
                            this.context.startLeaveRoom(roomAvatar.roomType, roomAvatar.avatarUid, false, true);
                        }
                    }
                    else {
                        receptionRoomProcesser.actorMoveRoute();
                    }
                    Game.moduleModel.visit.waitVisitActorId = actorId;
                    receptionRoomProcesser.startReception();
                    this.startReceptior();
                }
            }
        };
        Object.defineProperty(AvatarManager, "hasActorVisit", {
            //是否有探班
            get: function () {
                var visitData = Game.moduleModel.visit.getVisitData();
                return visitData && visitData.isWaiting;
            },
            enumerable: true,
            configurable: true
        });
        //艺人是否处于可探班状态
        AvatarManager.isActorOnVisit = function (avatarId) {
            var data = Game.moduleModel.visit.getVisitData();
            if (data) {
                return data.isWaiting && data.actorId == avatarId;
            }
            return false;
        };
        //开始探班
        AvatarManager.startReceptior = function () {
            var visitData = Game.moduleModel.visit.getVisitData();
            if (visitData && visitData.isReceptior == false) {
                //发送开始探班
                Game.protosender.manageVisit.StartRece();
            }
        };
        //艺人是否在接待室
        AvatarManager.isInRoomReception = function (roomType) {
            return roomType == Games.RoomType.Reception;
        };
        //---------------------------
        // 艺人限制状态
        //---------------------------
        //艺人接待-是否在不能接待状态中
        AvatarManager.isActorReceptionOnLimit = function (actorId) {
            if (this.isActorOnExercise(actorId)) {
                return true;
            }
            if (this.isActorOnFilming(actorId)) {
                return true;
            }
            if (this.isActorOnHide(actorId)) {
                return true;
            }
            return false;
        };
        //艺人训练-是否在不能训练状态中
        AvatarManager.isActorExerciseOnLimit = function (actorId) {
            if (this.isActorOnFilming(actorId)) {
                Game.system.toastText(Game.config.msg.getTxt(MsgKey.training_tips));
                return true;
            }
            if (this.isActorOnVisit(actorId)) {
                Game.system.toastText(Game.config.msg.getTxt(MsgKey.training_tips2));
                return true;
            }
            return false;
        };
        /** 艺人在训练中 */
        AvatarManager.isActorOnExercise = function (actorId) {
            return Game.moduleModel.actor.isActorOnExercise(actorId);
        };
        /** 艺人在拍摄中 */
        AvatarManager.isActorOnFilming = function (actorId) {
            if (Game.moduleModel.warData.moveData) {
                var shootActorList = Game.moduleModel.warData.filmingYRList.getValues();
                var finder = shootActorList.findOne(function (value) {
                    return value.id == actorId;
                });
                if (finder)
                    return true;
            }
            return false;
        };
        Object.defineProperty(AvatarManager, "isOnShoot", {
            /** 是否正在拍摄状态 */
            get: function () {
                var moveData = Game.moduleModel.warData.moveData;
                if (moveData) {
                    if (moveData.state >= Proto.SE.EMovieState.filming && moveData.state < Proto.SE.EMovieState.complete) {
                        //拍摄中
                        return true;
                    }
                }
                return false;
            },
            enumerable: true,
            configurable: true
        });
        /** 艺人是否分配到房间中 */
        AvatarManager.isActorAllocToRoom = function (actorId) {
            return (Game.moduleModel.building.findActorById(actorId) != null);
        };
        /** 艺人被雪藏 */
        AvatarManager.isActorOnHide = function (actorId) {
            return Game.moduleModel.actor.isHide(actorId);
        };
        Object.defineProperty(AvatarManager, "unitMaxNum", {
            /** 总共单位最大数量 */
            get: function () {
                return gameDeviceConfig.unitMaxNum;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(AvatarManager, "maxRoomActorCount", {
            /** 单个房间最大艺人数量 */
            get: function () {
                return gameDeviceConfig.roomUnitMaxNum;
                // let maxActorCount: number = GlobalConfig.getValue(GlobalKey.KEY_1015_YiRenZaiLou__ShuLiangShangXian);
                // return maxActorCount;
            },
            enumerable: true,
            configurable: true
        });
        AvatarManager.sAvatarClick = new TypedSignal();
        AvatarManager.sEventFinish = new TypedSignal(); //单项事件结束
        AvatarManager.sBehaviorFinish = new TypedSignal(); //事件列表结束
        AvatarManager.sAvatarEnter = new TypedSignal();
        AvatarManager.sAvatarLeave = new TypedSignal();
        AvatarManager.sAvatarMoveEnd = new TypedSignal();
        AvatarManager.avatarEventTimeList = new Dictionary();
        AvatarManager.hasAllocedActorList = new Array();
        /** 房间内艺人最多执行事件次数 */
        AvatarManager.MAX_EVENT_TIME = 1;
        /** 房间内艺人距离限制 */
        AvatarManager.MIN_AVATAR_GAP = 70;
        //单位缓存
        AvatarManager.unitCtrlMap = new Dictionary();
        AvatarManager.MAX_AVATAR_NUM = 100;
        //--------------------------------------
        //	初始分配艺人到房间
        //--------------------------------------
        AvatarManager.waitAllocActorList = [];
        return AvatarManager;
    }());
    Games.AvatarManager = AvatarManager;
})(Games || (Games = {}));
//# sourceMappingURL=AvatarManager.js.map