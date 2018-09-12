var Games;
(function (Games) {
    var AvatarManager = /** @class */ (function () {
        function AvatarManager() {
        }
        AvatarManager.init = function (context) {
            // this.MAX_EVENT_TIME = GlobalConfig.getValue(GlobalKey.KEY_1016_MoXingZaiLou__JianDeShuLiang); //艺人在场景最大事件数
            this.context = context;
            this.sBehaviorFinish.add(this.onAvatarBehaviorFinish, this);
            this.sAvatarEnter.add(this.onAvatarEnterRoom, this);
            this.sAvatarLeave.add(this.onAvatarLeaveRoom, this);
            this.sAvatarClick.add(this.onAvatarClick, this);
            Game.moduleModel.actor.sAddActorList.add(this.onGetActor, this);
            Game.event.add(GameEventKey.GameEventKey_UpdateActorHideInfo, this.onActorHideInfoUpdate, this);
        };
        AvatarManager.destroy = function () {
            this.sBehaviorFinish.remove(this.onAvatarBehaviorFinish, this);
            this.sAvatarEnter.remove(this.onAvatarEnterRoom, this);
            this.sAvatarLeave.remove(this.onAvatarLeaveRoom, this);
            this.sAvatarClick.remove(this.onAvatarClick, this);
            Game.moduleModel.actor.sAddActorList.remove(this.onGetActor, this);
            Game.event.remove(GameEventKey.GameEventKey_UpdateActorHideInfo, this.onActorHideInfoUpdate, this);
            var avatars = this.avatarMap.getValues();
            for (var _i = 0, avatars_1 = avatars; _i < avatars_1.length; _i++) {
                var avatar = avatars_1[_i];
                avatar.endEvent(false);
                avatar.dispose();
                avatar = null;
            }
            this.avatarMap.clear();
        };
        //-------------------------------------
        // 房间avatar模型缓存
        //-------------------------------------
        AvatarManager.addRoomAvatar = function (avatar) {
            if (this.avatarMap.count <= this.MAX_AVATAR_NUM) {
                this.avatarMap.add(avatar.info.uid, avatar);
            }
        };
        AvatarManager.getRoomAvatar = function (avatarUid) {
            if (this.hasRoomAvatar(avatarUid)) {
                var avatar = this.avatarMap.getValue(avatarUid);
                return avatar;
            }
            return null;
        };
        AvatarManager.hasRoomAvatar = function (avatarUid) {
            return this.avatarMap.hasKey(avatarUid);
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
                var avatar = this.context.getAvatar(data.roomType, data.avatarUid);
                if (this.isActorOnVisit(data.avatarId)) {
                    if (this.isActorReceptionOnLimit(data.avatarId, true)) //不能探状态中
                     {
                        return;
                    }
                    if (!this.isInRoomReception(data.roomType)) {
                        avatar.endEvent(false);
                        avatar.executeActionEvents(Game.moduleModel.visit.getActorStartTalk(), Games.PerformType.ReceptionActorTalk);
                        this.context.startLeaveRoom(data.roomType, data.avatarUid, false, true);
                    }
                    else {
                        var receptionRoomProcesser = this.context.getRoomByType(Games.RoomType.Reception).processer;
                        receptionRoomProcesser.actorMoveRoute();
                    }
                }
                else //不是要找的艺人
                 {
                    if (avatar.info.type == Games.AvatarType.Actor) {
                        var visitActorName = Game.moduleModel.visit.getVisitName();
                        avatar.setTalk(format(Game.moduleModel.visit.getWrongActorClickDialog(), visitActorName));
                    }
                }
            }
        };
        AvatarManager.allocAvatarListToRoom = function () {
            this.allocNpcToRoom();
            this.waitAllocActorList = this.getWaitAllocActors();
            Laya.timer.clear(this, this.onTimeAlloc);
            Laya.timer.loop(1500, this, this.onTimeAlloc, null, true, true);
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
        AvatarManager.onTimeAlloc = function () {
            if (this.waitAllocActorList.length > 0) {
                var waitAllocActor = this.waitAllocActorList.splice(0, 1)[0];
                this.allocActorToRoom(waitAllocActor);
            }
            else {
                Laya.timer.clear(this, this.onTimeAlloc);
            }
        };
        AvatarManager.allocNpcToRoom = function () {
        };
        AvatarManager.allocActorToRoom = function (actor, avatarUid) {
            if (avatarUid === void 0) { avatarUid = 0; }
            this.avatarEventTimeList.add(actor.id, 0);
            //艺人在训练状态返回训练室
            if (Game.moduleModel.actor.isActorOnExercise(actor.id)) {
                Game.event.dispatch(GameEventKey.GameEventKey_ActorBackToExperciseRoom, actor.id);
                return;
            }
            var enterRoomType = Game.moduleModel.building.getAvatarEnterRoomType(actor);
            if (enterRoomType != -1) {
                this.hasAllocedActorList.push(actor);
                var avatarInfo = Games.AvatarInfo.creatByActor(actor);
                avatarInfo.uid = avatarUid;
                var direction = Math.random() > 0.5 ? Games.DirtionType.Left : Games.DirtionType.Right;
                //接待室从左面进入房间
                if (enterRoomType == Games.RoomType.Reception) {
                    direction = Games.DirtionType.Right;
                }
                this.context.startEnterRoom(enterRoomType, avatarInfo, direction, true);
            }
        };
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
                var avatar = this.context.getAvatar(roomAvatar.roomType, roomAvatar.avatarUid);
                if (avatar) {
                    avatar.endEvent(false);
                    room.onAvatarLeave(avatar.uid);
                    return actorId;
                }
            }
            //从还未分配房间的艺人列表查找
            else {
                for (var i = this.waitAllocActorList.length - 1; i >= 0; i--) {
                    if (this.waitAllocActorList[i].id == actorId) {
                        var unAllocActor = this.waitAllocActorList.splice(i, 1)[0];
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
            this.allocActorToRoom(actor);
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
            var roomAvatar = Game.moduleModel.building.findActorById(actorId);
            if (roomAvatar != null) {
                if (this.isActorOnVisit(actorId)) {
                    if (this.isActorReceptionOnLimit(actorId)) //不能探状态中
                     {
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
                    receptionRoomProcesser.startReception();
                }
            }
        };
        Object.defineProperty(AvatarManager, "hasActorVisit", {
            //是否有探班
            get: function () {
                return Game.moduleModel.visit.getVisitData().isWaiting;
            },
            enumerable: true,
            configurable: true
        });
        //艺人是否处于可探班状态
        AvatarManager.isActorOnVisit = function (avatarId) {
            var data = Game.moduleModel.visit.getVisitData();
            if (data) {
                return data.actorId == avatarId;
            }
            return false;
        };
        //艺人是否在接待室
        AvatarManager.isInRoomReception = function (roomType) {
            return roomType == Games.RoomType.Reception;
        };
        //艺人接待-是否在不能接待状态中
        AvatarManager.isActorReceptionOnLimit = function (actorId, isAlert) {
            //训练室训练中除外
            if (Game.moduleModel.actor.isActorOnExercise(actorId)) {
                return true;
            }
            //拍摄中除外
            if (Game.moduleModel.warData.moveData) {
                var shootActorList = Game.moduleModel.warData.getRealYRList.getValues();
                var finder = shootActorList.findOne(function (value) {
                    return value.id == actorId;
                });
                if (finder)
                    return true;
            }
            //还未分配到房间
            if (Game.moduleModel.building.findActorById(actorId) == null) {
                return true;
            }
            //雪藏艺人
            if (Game.moduleModel.actor.isHide(actorId)) {
                return true;
            }
            if (isAlert) {
                Game.system.toastText(Game.config.msg.getTxt(MsgKey.visit_stop));
            }
            return false;
        };
        AvatarManager.sAvatarClick = new TypedSignal();
        AvatarManager.sEventFinish = new TypedSignal(); //单项事件结束
        AvatarManager.sBehaviorFinish = new TypedSignal(); //事件列表结束
        AvatarManager.sAvatarEnter = new TypedSignal();
        AvatarManager.sAvatarLeave = new TypedSignal();
        AvatarManager.avatarEventTimeList = new Dictionary();
        AvatarManager.hasAllocedActorList = new Array();
        AvatarManager.MAX_EVENT_TIME = 1;
        //avatar 模型缓存
        AvatarManager.avatarMap = new Dictionary();
        AvatarManager.MAX_AVATAR_NUM = 100;
        return AvatarManager;
    }());
    Games.AvatarManager = AvatarManager;
})(Games || (Games = {}));
//# sourceMappingURL=AvatarManager.js.map