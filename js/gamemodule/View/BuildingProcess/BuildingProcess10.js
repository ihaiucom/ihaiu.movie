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
            _this.npcList = [101, 102];
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
        };
        BuildingProcess10.prototype.removeEventListener = function () {
            Games.AvatarManager.sAvatarEnter.remove(this.onAvatarEnterRoom, this);
            Games.AvatarManager.sAvatarLeave.remove(this.onAvatarLeaveRoom, this);
            Games.DialogManager.sDialogFinish.remove(this.onDialogFinish, this);
            Game.event.remove(GameEventKey.GameEventKey_UpdateVisitActor, this.onVisitActorUpdate, this);
            Game.event.remove(GameEventKey.GameEventKey_UpdateActorHideInfo, this.onActorHideInfoUpdate, this);
            Game.event.remove(GameEventKey.GameEventKey_ShootStartAddActor, this.onShootAddActorToRoom, this);
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
            }
        };
        //结束探班
        BuildingProcess10.prototype.endReception = function () {
            this.onVisitTimeEnd(true);
            // 发协议，数据更新
            Game.moduleModel.visit.saveVisitId();
            Game.protosender.manageVisit.GetReward();
        };
        BuildingProcess10.prototype.onVisitTimeEnd = function (isFansLeave) {
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
                this.receptionActor.leave(true);
                this.receptionActor.off(Event.CLICK, this, this.onActorClick);
            }
        };
        //探班倒计时结束
        BuildingProcess10.prototype.onVisitActorUpdate = function () {
            if (Game.moduleModel.visit.getVisitData().id == 0) //时间到离开
             {
                if (this.isStartDialog) {
                    this.endReception();
                }
                else {
                    this.onVisitTimeEnd(true);
                }
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
                        Games.AvatarManager.removeRoomActor(actor.id);
                    }
                }
            }
        };
        //艺人去拍摄结束探班
        BuildingProcess10.prototype.onShootAddActorToRoom = function (actors) {
            console.log("onShootAddActorToRoom()");
            for (var _i = 0, actors_1 = actors; _i < actors_1.length; _i++) {
                var actor = actors_1[_i];
                if (Games.AvatarManager.isActorOnVisit(actor.id)) {
                    if (this.isStartDialog) {
                        this.endReception();
                    }
                    else {
                        this.onVisitTimeEnd(false);
                    }
                }
            }
        };
        //如果在房间内点击移动到
        BuildingProcess10.prototype.actorMoveRoute = function () {
            var _this = this;
            // if (!thiss.isOnReception)
            {
                if (this.receptionActor) {
                    this.receptionActor.endEvent(false);
                    this.receptionActor.moveTo(Laya.stage.width / 2 - 50, false, Handler.create(this, function () {
                        _this.receptionActor.direction = Games.DirtionType.Right;
                        _this.receptionFans.endEvent(false);
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
                if (this.isNpc(data.avatarUid)) {
                    this.receptionFans = this.refRoom.getAvatar(data.avatarUid);
                    this.receptionFans.on(Event.CLICK, this, this.onFansClick);
                    this.receptionFans.moveTo(Laya.stage.width / 2 + 50, false, Handler.create(this, function () {
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
                    }));
                }
                else if (Games.AvatarManager.isActorOnVisit(data.avatarId)) {
                    Game.event.dispatch(GameEventKey.GameEventKey_ScrollMainRoom, Games.RoomType.Reception, true);
                    this.receptionActor = this.refRoom.getAvatar(data.avatarUid);
                    if (this.receptionActor) {
                        this.receptionActor.endEvent(false);
                        this.receptionActor.on(Event.CLICK, this, this.onActorClick);
                        this.receptionActor.moveTo(Laya.stage.width / 2 - 50, true, Handler.create(this, function () {
                            _this.receptionFans.endEvent(false);
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
                    if (Games.AvatarManager.isActorOnVisit(data.avatarId)) {
                        var actor = Game.moduleModel.actor.getActor(data.avatarId);
                        var avatarInfo = Games.AvatarInfo.creatByActor(actor);
                        this.refRoom.avatarEnter(avatarInfo, Games.DirtionType.Right, false, Games.DirtionType.Up, true);
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
            if (npcId === void 0) { npcId = 101; }
            if (direction === void 0) { direction = Games.DirtionType.Left; }
            var rd = Random.range(0, this.npcList.length);
            npcId = this.npcList[rd];
            var aInfo = new Games.AvatarInfo();
            var npcCfg = Game.config.npc.getConfig(npcId);
            var actionName = Game.config.action.getConfig(1013).action;
            aInfo.idleName = actionName;
            aInfo.id = npcCfg.id;
            aInfo.name = npcCfg.name;
            aInfo.type = Games.AvatarType.Npc;
            aInfo.texturePath = npcCfg.modelSkinUrl;
            aInfo.skeletonPath = npcCfg.modelBoneUrl;
            this.refRoom.avatarEnter(aInfo, Games.DirtionType.Left, false, Games.DirtionType.Up, true);
        };
        Object.defineProperty(BuildingProcess10.prototype, "receptionDialog", {
            //获取对话列表
            get: function () {
                return Game.moduleModel.visit.getReceptionDialog();
            },
            enumerable: true,
            configurable: true
        });
        BuildingProcess10.prototype.isNpc = function (avatarUid) {
            var avatar = this.refRoom.getAvatar(avatarUid);
            if (avatar) {
                return avatar.info.type == Games.AvatarType.Npc;
            }
            return false;
        };
        return BuildingProcess10;
    }(Games.BaseBuildingProcess));
    Games.BuildingProcess10 = BuildingProcess10;
})(Games || (Games = {}));
//# sourceMappingURL=BuildingProcess10.js.map