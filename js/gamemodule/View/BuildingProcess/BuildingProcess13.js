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
    //-----------------------------
    // 训练室
    //-----------------------------
    var Event = laya.events.Event;
    var BuildingProcess13 = /** @class */ (function (_super) {
        __extends(BuildingProcess13, _super);
        function BuildingProcess13() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.SeatCount = 5;
            _this.tranSitList = [];
            return _this;
        }
        BuildingProcess13.prototype.onInit = function () {
            this.roomPart = fgui.Building.BuildScene13.createInstance();
            this.refRoom.m_buildScene.m_scenePart.addChild(this.roomPart);
            this.roomPart.setXY(170, 162);
            for (var i = 0; i < this.SeatCount; i++) {
                this.tranSitList[i] = this.roomPart.getChild("trainSit" + (i + 1)).asCom;
                this.tranSitList[i].getChild("sample").asCom.visible = false;
            }
        };
        BuildingProcess13.prototype.onProcess = function () {
            console.log("RoomProcesser -> " + getClassName(this));
            this.creatNpc();
            this.initActorToTrainingRoom();
            Game.event.add(GameEventKey.GameEventKey_ActorExperciseStart, this.onActorExperciseStart, this);
            Game.event.add(GameEventKey.GameEventKey_ActorExperciseEnd, this.onActorExperciseEnd, this);
            Game.event.add(GameEventKey.GameEventKey_ActorBackToExperciseRoom, this.onActorBackToExperciseRoom, this);
            Games.AvatarManager.sBehaviorFinish.add(this.onAvatarBehaviorFinish, this);
        };
        BuildingProcess13.prototype.onActorExperciseStart = function (actorUuid) {
            var _this = this;
            var actorData = Game.moduleModel.actor.getActorByUUid(actorUuid);
            var actorExperciseData = Game.moduleModel.actor.getActorExerciseDataByActorUuid(actorUuid);
            var seatIndex = -1;
            if (actorExperciseData) {
                seatIndex = actorExperciseData.seatIndex;
            }
            if (actorData) {
                var experciseAvatarId = Games.AvatarManager.removeRoomActorList([actorData.id])[0];
                var aInfo = Games.AvatarInfo.creatByAvatarId(experciseAvatarId);
                var avatar_1 = Games.Avatar.Creat(aInfo, function (AvatarInfo) {
                    var bounds = avatar_1.getBounds();
                    avatar_1.pos(bounds.width, bounds.height);
                    avatar_1.openShadow();
                    avatar_1.y = _this.refRoom.roomHeight - _this.refRoom.routeYList[0];
                    _this.refRoom.addAvatar(avatar_1, _this.refRoom.m_buildScene.m_avatarContainer0);
                    if (seatIndex != -1) {
                        var seatCom_1 = _this.tranSitList[seatIndex];
                        avatar_1.moveTo(seatCom_1.x + _this.roomPart.x, false, Handler.create(_this, function () {
                            seatCom_1.displayObject.addChild(avatar_1);
                            avatar_1.pos(0, bounds.height - _this.refRoom.routeYList[0]);
                            avatar_1.executeActionEvents(_this.getRDEvent(), Games.PerformType.Training);
                        }));
                    }
                });
            }
        };
        BuildingProcess13.prototype.onActorExperciseEnd = function (actorUuid, lineUuid) {
            var actorData = Game.moduleModel.actor.getActorByUUid(actorUuid);
            if (actorData) {
                var actorExperciseData = Game.moduleModel.actor.getActorExerciseDataByUuid(lineUuid);
                var seatIndex = actorExperciseData.seatIndex;
                //leave
                var avatar = this.refRoom.getAvatarById(actorData.id);
                if (avatar) {
                    var seatCom = this.tranSitList[seatIndex];
                    this.refRoom.m_buildScene.m_avatarContainer0.displayObject.addChild(avatar);
                    avatar.pos(seatCom.x + this.roomPart.x, this.refRoom.roomHeight - this.refRoom.routeYList[0]);
                    var expVal = Game.config.global.getConfig(GlobalKey.Actor_Train_Exp).value;
                    var totalExpVal = MathDesign.calcActorExperciseExp();
                    avatar.endEvent(false);
                    avatar.setTalk(Game.config.msg.getTxtFormat(MsgKey.train_actor_tips, totalExpVal));
                    Game.system.toastText(Game.config.msg.getTxtFormat(MsgKey.train_exp, totalExpVal));
                    avatar.leave(true);
                }
            }
        };
        //训练室艺人从其他状态返回训练室
        BuildingProcess13.prototype.onActorBackToExperciseRoom = function (actorId) {
            var _this = this;
            var actorData = Game.moduleModel.actor.getActor(actorId);
            var actorExperciseData = Game.moduleModel.actor.getActorExerciseDataByActorUuid(actorData.uuid);
            var seatIndex = -1;
            if (actorExperciseData) {
                seatIndex = actorExperciseData.seatIndex;
            }
            if (actorData) {
                var aInfo = Games.AvatarInfo.creatByAvatarId(actorId);
                var avatar_2 = Games.Avatar.Creat(aInfo, function (AvatarInfo) {
                    var bounds = avatar_2.getBounds();
                    avatar_2.pos(bounds.width, bounds.height);
                    avatar_2.openShadow();
                    avatar_2.y = _this.refRoom.roomHeight - _this.refRoom.routeYList[0];
                    _this.refRoom.addAvatar(avatar_2, _this.refRoom.m_buildScene.m_avatarContainer0);
                    if (seatIndex != -1) {
                        var seatCom_2 = _this.tranSitList[seatIndex];
                        avatar_2.moveTo(seatCom_2.x + _this.roomPart.x, false, Handler.create(_this, function () {
                            seatCom_2.displayObject.addChild(avatar_2);
                            avatar_2.pos(0, bounds.height - _this.refRoom.routeYList[0]);
                            avatar_2.executeActionEvents(_this.getRDEvent(), Games.PerformType.Training);
                        }));
                    }
                });
            }
        };
        //添加艺人到训练室
        BuildingProcess13.prototype.initActorToTrainingRoom = function () {
            var _this = this;
            var experciseActors = Game.moduleModel.actor.getExperciseDataList();
            var actorids = [];
            for (var _i = 0, experciseActors_1 = experciseActors; _i < experciseActors_1.length; _i++) {
                var experciseActor = experciseActors_1[_i];
                var actorData = Game.moduleModel.actor.getActorByUUid(experciseActor.uuid);
                if (actorData) {
                    actorids.push(actorData.id);
                }
            }
            var _loop_1 = function (avatarId) {
                var info = Games.AvatarInfo.creatByAvatarId(avatarId);
                var avatar = Games.Avatar.Creat(info, function (AvatarInfo) {
                    var bounds = avatar.getBounds();
                    avatar.openShadow();
                    avatar.pos(bounds.width, bounds.height);
                    avatar.y = _this.refRoom.roomHeight - _this.refRoom.routeYList[0];
                    _this.refRoom.addAvatar(avatar, _this.refRoom.m_buildScene.m_avatarContainer0);
                    var actorData = Game.moduleModel.actor.getActor(avatarId);
                    var actorExperciseData = Game.moduleModel.actor.getActorExerciseDataByActorUuid(actorData.uuid);
                    var seatIndex = actorExperciseData.seatIndex;
                    var seatCom = _this.tranSitList[seatIndex];
                    avatar.moveTo(seatCom.x + _this.roomPart.x, false, Handler.create(_this, function () {
                        seatCom.displayObject.addChild(avatar);
                        avatar.pos(0, bounds.height - _this.refRoom.routeYList[0]);
                        avatar.executeActionEvents(_this.getRDEvent(), Games.PerformType.Training);
                    }));
                });
            };
            for (var _a = 0, actorids_1 = actorids; _a < actorids_1.length; _a++) {
                var avatarId = actorids_1[_a];
                _loop_1(avatarId);
            }
        };
        BuildingProcess13.prototype.onAvatarBehaviorFinish = function (data) {
            if (data.performType == Games.PerformType.Training) {
                var avatar = this.refRoom.getAvatar(data.avatarUid);
                avatar.executeActionEvents(this.getRDEvent(), Games.PerformType.Training);
            }
        };
        //获取训练艺人随机事件
        BuildingProcess13.prototype.getRDEvent = function () {
            var playActList = Game.config.playAct.getConfigList();
            playActList = playActList.filter(function (value, index, array) {
                return value.type == Games.PerformType.Training && (value.data % (value.type * 10)) == 1;
            });
            if (playActList.length > 0)
                return playActList[0].eventList;
            return [];
        };
        //创建NPC
        BuildingProcess13.prototype.creatNpc = function (npcId) {
            var _this = this;
            if (npcId === void 0) { npcId = 101; }
            var aInfo = Games.AvatarInfo.creatByNpcId(npcId);
            var avatar = Games.Avatar.Creat(aInfo, function (AvatarInfo) {
                var bounds = avatar.getBounds();
                avatar.pos(bounds.width, _this.refRoom.roomHeight - _this.refRoom.routeYList[1]);
                _this.refRoom.addAvatar(avatar, _this.refRoom.m_buildScene.m_avatarContainer1);
                avatar.enterTo(Laya.stage.width - 150, avatar.y + 15, Games.DirtionType.Left);
                avatar.on(Event.CLICK, _this, _this.onNpcClick);
                // avatar.setTalk(TEXT.ActorExperciser, true);
                var headIcon = fgui.Building.BtnNpcTips.createInstance();
                headIcon.setInfo(5042, Games.TEXT.ActorExperciser);
                avatar.setTopHeadIcon(headIcon);
                avatar.openShadow();
                avatar.setHitArea(avatar.width * 2, avatar.height * 1.2);
                setTimeout(function () {
                    avatar.playAction(1026);
                }, 3000);
            });
        };
        BuildingProcess13.prototype.onNpcClick = function () {
            Game.menu.open(Games.MenuId.ArtListExercise);
        };
        return BuildingProcess13;
    }(Games.BaseBuildingProcess));
    Games.BuildingProcess13 = BuildingProcess13;
})(Games || (Games = {}));
//# sourceMappingURL=BuildingProcess13.js.map