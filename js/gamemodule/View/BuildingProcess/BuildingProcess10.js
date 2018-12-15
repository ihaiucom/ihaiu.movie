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
    var PerformType = Games.PerformType;
    var Event = laya.events.Event;
    //-----------------------------
    // 接待室
    //-----------------------------
    var BuildingProcess10 = /** @class */ (function (_super) {
        __extends(BuildingProcess10, _super);
        function BuildingProcess10() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.moveWithFlowerId = 1014; //捧花动作Id
            _this.npcList = [101, 102, 103, 104];
            _this.receptionActorId = 0; //探班艺人id
            _this.isOnReception = false; //是否有艺人正在探班
            _this.isFansReadyDialog = false;
            _this.isActorReadyDialog = false;
            _this.isStartDialog = false; // 是否开始对话
            return _this;
        }
        //初始化   
        BuildingProcess10.prototype.onInit = function () {
            console.log("RoomProcesser -> " + getClassName(this));
            // setTimeout(() =>
            // {
            //     this.startReception();
            // }, 5000);
            // setTimeout(() =>
            // {
            //     let avatarId = Game.moduleModel.actor.getActors()[0].id;
            //     AvatarManager.autoActorToReception(avatarId);
            // }, 5500);
        };
        BuildingProcess10.prototype.addEventListener = function () {
            Games.AvatarManager.sAvatarEnter.add(this.onAvatarEnterRoom, this);
            Games.AvatarManager.sAvatarLeave.add(this.onAvatarLeaveRoom, this);
            Games.DialogManager.sDialogFinish.add(this.onDialogFinish, this);
            Game.event.add(GameEventKey.GameEventKey_UpdateVisitActor, this.onVisitActorUpdate, this);
            Game.event.add(GameEventKey.GameEventKey_UpdateActorHideInfo, this.onActorHideInfoUpdate, this);
            Game.event.add(GameEventKey.GameEventKey_ShootStartAddActor, this.onShootAddActorToRoom, this);
            Game.event.add(GameEventKey.GameEventKey_ActorExperciseStart, this.onActorExperciseStart, this);
            Game.protoOkEvent.add(ProtoEventKey.manageVisit_GetReward, this.onServerManagerVisitGetReward, this);
        };
        BuildingProcess10.prototype.removeEventListener = function () {
            Games.AvatarManager.sAvatarEnter.remove(this.onAvatarEnterRoom, this);
            Games.AvatarManager.sAvatarLeave.remove(this.onAvatarLeaveRoom, this);
            Games.DialogManager.sDialogFinish.remove(this.onDialogFinish, this);
            Game.event.remove(GameEventKey.GameEventKey_UpdateVisitActor, this.onVisitActorUpdate, this);
            Game.event.remove(GameEventKey.GameEventKey_UpdateActorHideInfo, this.onActorHideInfoUpdate, this);
            Game.event.remove(GameEventKey.GameEventKey_ShootStartAddActor, this.onShootAddActorToRoom, this);
            Game.event.remove(GameEventKey.GameEventKey_ActorExperciseStart, this.onActorExperciseStart, this);
            Game.protoOkEvent.remove(ProtoEventKey.manageVisit_GetReward, this.onServerManagerVisitGetReward, this);
        };
        //开始探班
        BuildingProcess10.prototype.startReception = function () {
            if (!this.isOnReception) {
                Game.moduleModel.visit.setRDTalkGroupId();
                this.addEventListener();
                this.creatReceptionNpc();
                this.isOnReception = true;
                this.receptionActorId = Game.moduleModel.visit.getVisitData().actorId;
                this.receptionActor = this.refRoom.getAvatarById(this.receptionActorId);
                this.refRoom.executeLeaveRoomForEach(true, this.receptionActorId);
                //分配接待艺人到房间
                Games.AvatarManager.allocTargetActorToRoom(this.receptionActorId);
            }
        };
        //结束探班
        BuildingProcess10.prototype.endReception = function () {
            // 发协议，数据更新
            Game.moduleModel.visit.saveVisitId();
            Game.protosender.manageVisit.GetReward();
            var data = Game.moduleModel.visit.getVisitData();
            if (data) {
                Games.Static.Instance.onUserorbit("fan", data.actorId.toString(), "visit");
            }
        };
        BuildingProcess10.prototype.onVisitTimeEnd = function (isFansLeave) {
            Game.moduleModel.visit.waitVisitActorId = 0;
            if (isFansLeave) {
                this.removeEventListener();
                this.isOnReception = false;
                this.isFansReadyDialog = false;
                this.isActorReadyDialog = false;
                this.isStartDialog = false;
                this.receptionActorId = 0;
                if (this.currentDialog) {
                    this.currentDialog.dispose();
                    this.currentDialog = null;
                }
                if (this.receptionFans) {
                    this.receptionFans.endEvent(false);
                    this.receptionFans.leave(false);
                    this.receptionFans.off(Event.CLICK, this, this.onFansClick);
                }
            }
            if (this.receptionActor) {
                this.receptionActor.endEvent(false);
                this.receptionActor.leave(true, false, this.moveWithFlowerId);
                this.receptionActor.off(Event.CLICK, this, this.onActorClick);
            }
        };
        /** 立即清除艺人 */
        BuildingProcess10.prototype.clearReceptionActor = function () {
            if (this.receptionActor) {
                this.receptionActor.dispose();
                this.receptionActor = null;
            }
        };
        /** 领取探班奖励 */
        BuildingProcess10.prototype.onServerManagerVisitGetReward = function (proto) {
            this.onVisitTimeEnd(true);
        };
        //探班倒计时结束
        BuildingProcess10.prototype.onVisitActorUpdate = function () {
            var visitData = Game.moduleModel.visit.getVisitData();
            if (visitData.isLeave) //时间到离开
             {
                if (visitData.isReceptior == false && !visitData.isActorHidden) {
                    if (this.isStartDialog) {
                        this.endReception();
                    }
                    else {
                        this.onVisitTimeEnd(true);
                    }
                }
                else {
                    this.onVisitTimeEnd(true);
                }
                //时间结束停止正在去探班艺人任务
                // let waitVisitActorId = Game.moduleModel.visit.waitVisitActorId;
                // if (waitVisitActorId != 0)
                // {
                //     let waitVisitActor = AvatarManager.getRoomActor(waitVisitActorId);
                //     if (waitVisitActor)
                //     {
                //         waitVisitActor.enter(false);
                //     }
                // }
            }
        };
        //雪藏艺人结束探班
        BuildingProcess10.prototype.onActorHideInfoUpdate = function (actor) {
            if (actor.hide) {
                if (Games.AvatarManager.isActorOnVisit(actor.id)) {
                    if (this.isStartDialog) {
                        this.endReception();
                    }
                    else {
                        this.onVisitTimeEnd(false);
                    }
                    Games.AvatarManager.removeRoomActor(actor.id);
                    this.clearReceptionActor();
                }
            }
        };
        //艺人去拍摄结束探班
        BuildingProcess10.prototype.onShootAddActorToRoom = function (actors) {
            console.log("onShootAddActorToRoom()");
            for (var _i = 0, actors_1 = actors; _i < actors_1.length; _i++) {
                var actor = actors_1[_i];
                this.triggerVisitEnd(actor);
            }
        };
        //艺人去训练结束探班
        BuildingProcess10.prototype.onActorExperciseStart = function (actorUuid) {
            var actorData = Game.moduleModel.actor.getActorByUUid(actorUuid);
            if (actorData) {
                this.triggerVisitEnd(actorData);
            }
        };
        //触发结束探班
        BuildingProcess10.prototype.triggerVisitEnd = function (actor) {
            if (actor) {
                if (Games.AvatarManager.isActorOnVisit(actor.id)) {
                    if (this.isStartDialog) {
                        this.endReception();
                    }
                    else {
                        this.onVisitTimeEnd(false);
                    }
                    this.clearReceptionActor();
                }
            }
        };
        //如果在房间内点击移动到
        BuildingProcess10.prototype.actorMoveRoute = function () {
            var _this = this;
            if (!this.isStartDialog) {
                this.receptionActorId = Game.moduleModel.visit.getVisitData().actorId;
                this.receptionActor = this.refRoom.getAvatarById(this.receptionActorId);
                if (this.receptionActor) {
                    this.receptionActor.endEvent(false);
                    this.receptionActor.moveTo(this.refRoom.roomWidth / 2 - 50, false, Handler.create(this, function () {
                        _this.receptionActor.direction = Games.DirtionType.Right;
                        // this.receptionFans.endEvent(false);
                        _this.isActorReadyDialog = true;
                        if (_this.isFansReadyDialog) {
                            if (!_this.isStartDialog) {
                                //开始对话
                                _this.isStartDialog = true;
                                _this.currentDialog = Games.DialogManager.startDialog(_this.receptionFans, _this.receptionActor, _this.receptionDialog, PerformType.Reception);
                            }
                        }
                    }));
                }
            }
        };
        BuildingProcess10.prototype.onAvatarEnterRoom = function (data) {
            var _this = this;
            if (this.isSelfRoom(data.roomType)) {
                if (Games.AvatarManager.isActorOnVisit(data.avatarId)) {
                    Game.event.dispatch(GameEventKey.GameEventKey_ScrollMainRoom, Games.RoomType.Reception, true);
                    this.receptionActor = this.refRoom.getAvatar(data.avatarUid);
                    if (this.receptionActor) {
                        this.receptionActor.endEvent(false);
                        this.receptionActor.on(Event.CLICK, this, this.onActorClick);
                        this.receptionActor.moveTo(this.refRoom.roomWidth / 2 - 50, true, Handler.create(this, function () {
                            // if (this.receptionFans)
                            // {
                            //     this.receptionFans.endEvent(false);
                            // }
                            _this.receptionActor.direction = Games.DirtionType.Right;
                            _this.isActorReadyDialog = true;
                            if (_this.isFansReadyDialog) {
                                if (!_this.isStartDialog) {
                                    //开始对话
                                    _this.isStartDialog = true;
                                    _this.currentDialog = Games.DialogManager.startDialog(_this.receptionFans, _this.receptionActor, _this.receptionDialog, PerformType.Reception);
                                }
                            }
                        }));
                    }
                }
            }
        };
        BuildingProcess10.prototype.onAvatarLeaveRoom = function (data) {
            if (!this.isSelfRoom(data.roomType)) {
                if (!data.onEvent) {
                    var actor = Game.moduleModel.actor.getActor(data.avatarId);
                    if (Games.AvatarManager.isActorOnVisit(data.avatarId)) {
                        console.log(data.avatarId + " -- 艺人离开房间 -- " + data.roomType);
                        var avatarInfo = Games.AvatarInfo.creatByActor(actor);
                        this.refRoom.avatarEnter(avatarInfo, Games.DirtionType.Right, false, Games.DirtionType.Up);
                    }
                    else {
                        if (actor) //npc除外
                         {
                            Games.AvatarManager.allocActorToRoom(actor);
                        }
                    }
                }
            }
        };
        BuildingProcess10.prototype.onDialogFinish = function (performType) {
            if (performType == PerformType.Reception) {
                this.endReception();
            }
        };
        BuildingProcess10.prototype.onFansClick = function () {
            if (!this.isStartDialog) {
                var events = Game.moduleModel.visit.getFansStartTalk();
                this.receptionFans.executeActionEvents(events, PerformType.ReceptionFansTalk);
            }
        };
        BuildingProcess10.prototype.onActorClick = function () {
            if (!this.isStartDialog) {
                var events = Game.moduleModel.visit.getActorStartTalk();
                this.receptionActor.executeActionEvents(events, PerformType.ReceptionFansTalk);
            }
        };
        //创建探班NPC
        BuildingProcess10.prototype.creatReceptionNpc = function (npcId, direction) {
            var _this = this;
            if (npcId === void 0) { npcId = 101; }
            if (direction === void 0) { direction = Games.DirtionType.Left; }
            var rd = Random.range(0, this.npcList.length);
            npcId = this.npcList[rd];
            var moveCompleteCaller = function () {
                var events = Game.moduleModel.visit.getFansStartTalk();
                _this.receptionFans.executeActionEvents(events, PerformType.ReceptionFansTalk);
                _this.isFansReadyDialog = true;
                if (_this.isActorReadyDialog) {
                    if (!_this.isStartDialog) {
                        //开始对话
                        _this.isStartDialog = true;
                        _this.currentDialog = Games.DialogManager.startDialog(_this.receptionFans, _this.receptionActor, _this.receptionDialog, PerformType.Reception);
                    }
                }
            };
            var aInfo = Games.AvatarInfo.creatByNpcId(npcId);
            var actionName = Game.config.action.getConfig(1013).action;
            aInfo.idleName = actionName;
            this.receptionFans = Game.creator.creatEUnit(aInfo);
            var bounds = this.receptionFans.getBounds();
            this.receptionFans.pos(bounds.width, this.refRoom.roomHeight - this.refRoom.routeYList[0]);
            this.refRoom.addAvatar(this.receptionFans, this.refRoom.mainView.m_buildScene.m_avatarContainer1);
            this.receptionFans.enterTo(this.refRoom.roomWidth - 50, this.receptionFans.y, Games.DirtionType.Left);
            this.receptionFans.openShadow();
            this.receptionFans.on(Event.CLICK, this, this.onFansClick);
            this.receptionFans.moveTo(this.refRoom.roomWidth / 2 + 50, false, Handler.create(this, moveCompleteCaller), null, true, this.moveWithFlowerId);
        };
        Object.defineProperty(BuildingProcess10.prototype, "receptionDialog", {
            //获取对话列表
            get: function () {
                var events = Game.moduleModel.visit.getReceptionDialog();
                this.setTalkParams(events);
                return events;
            },
            enumerable: true,
            configurable: true
        });
        BuildingProcess10.prototype.setTalkParams = function (events) {
            var actorCfg = Game.config.actor.getConfig(this.receptionActorId);
            if (actorCfg) {
                var argName = actorCfg.name;
                for (var _i = 0, events_1 = events; _i < events_1.length; _i++) {
                    var event_1 = events_1[_i];
                    event_1.setTalkParams(argName);
                }
            }
        };
        BuildingProcess10.prototype.isNpc = function (avatarUid) {
            var avatar = this.refRoom.getAvatar(avatarUid);
            if (avatar) {
                return avatar.unitModel.info.type == Games.AvatarType.Npc;
            }
            return false;
        };
        return BuildingProcess10;
    }(Games.BaseBuildingProcess));
    Games.BuildingProcess10 = BuildingProcess10;
})(Games || (Games = {}));
//# sourceMappingURL=BuildingProcess10.js.map