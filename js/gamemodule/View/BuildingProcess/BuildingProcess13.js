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
            this.refRoom.mainView.m_buildScene.m_scenePart.addChild(this.roomPart);
            //aspect
            this.roomPart.setSize(this.refRoom.mainView.m_buildScene.m_scenePart.width, this.refRoom.mainView.m_buildScene.m_scenePart.height);
            this.roomPart.addRelation(this.refRoom.mainView.m_buildScene.m_scenePart, fairygui.RelationType.Size);
            // let scale = this.refRoom.width / this.refRoom.sourceWidth;
            // this.roomPart.setScale(scale, scale);
            for (var i = 0; i < this.SeatCount; i++) {
                this.tranSitList[i] = this.roomPart.m_seat.getChild("trainSit" + (i + 1)).asCom;
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
                if (experciseAvatarId == undefined) {
                    experciseAvatarId = actorData.id;
                }
                var aInfo = Games.AvatarInfo.creatByAvatarId(experciseAvatarId);
                //创建单位
                var cUnit_1 = Game.creator.requestUnit(aInfo);
                var bounds_1 = cUnit_1.getBounds();
                cUnit_1.pos(bounds_1.width, bounds_1.height);
                cUnit_1.openShadow();
                cUnit_1.y = this.refRoom.roomHeight - this.refRoom.routeYList[0];
                this.refRoom.addAvatar(cUnit_1, this.refRoom.mainView.m_buildScene.m_avatarContainer0);
                if (seatIndex != -1) {
                    var seatCom_1 = this.tranSitList[seatIndex];
                    cUnit_1.moveTo(seatCom_1.x + this.roomPart.m_seat.x, false, Handler.create(this, function () {
                        cUnit_1.showOn(seatCom_1);
                        cUnit_1.pos(0, bounds_1.height - _this.refRoom.routeYList[0]);
                        cUnit_1.executeActionEvents(_this.getRDEvent(), Games.PerformType.Training);
                    }));
                }
            }
        };
        BuildingProcess13.prototype.onActorExperciseEnd = function (actorUuid, lineUuid) {
            var actorData = Game.moduleModel.actor.getActorByUUid(actorUuid);
            if (actorData) {
                var actorExperciseData = Game.moduleModel.actor.getActorExerciseDataByUuid(lineUuid);
                var seatIndex = actorExperciseData.seatIndex;
                //leave
                var cUnit = this.refRoom.getAvatarById(actorData.id);
                if (cUnit) {
                    var seatCom = this.tranSitList[seatIndex];
                    cUnit.showOn(this.refRoom.mainView.m_buildScene.m_avatarContainer0);
                    cUnit.pos(seatCom.x + this.roomPart.m_seat.x, this.refRoom.roomHeight - this.refRoom.routeYList[0]);
                    var expVal = Game.config.global.getConfig(GlobalKey.Actor_Train_Exp).value;
                    var totalExpVal = MathDesign.calcActorExperciseExp();
                    cUnit.endEvent(false);
                    cUnit.setTalk(Game.config.msg.getTxtFormat(MsgKey.train_actor_tips, totalExpVal));
                    Game.system.toastText(Game.config.msg.getTxtFormat(MsgKey.train_exp, totalExpVal));
                    cUnit.leave(true);
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
                var cUnit_2 = Game.creator.requestUnit(aInfo);
                var bounds_2 = cUnit_2.getBounds();
                cUnit_2.pos(bounds_2.width, bounds_2.height);
                cUnit_2.openShadow();
                cUnit_2.y = this.refRoom.roomHeight - this.refRoom.routeYList[0];
                this.refRoom.addAvatar(cUnit_2, this.refRoom.mainView.m_buildScene.m_avatarContainer0);
                if (seatIndex != -1) {
                    var seatCom_2 = this.tranSitList[seatIndex];
                    cUnit_2.moveTo(seatCom_2.x + this.roomPart.m_seat.x, false, Handler.create(this, function () {
                        cUnit_2.showOn(seatCom_2);
                        cUnit_2.pos(0, bounds_2.height - _this.refRoom.routeYList[0]);
                        cUnit_2.executeActionEvents(_this.getRDEvent(), Games.PerformType.Training);
                    }));
                }
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
                    if (!Game.moduleModel.actor.isHide(actorData.id)) //雪藏艺人除外
                     {
                        actorids.push(actorData.id);
                    }
                }
            }
            var _loop_1 = function (avatarId) {
                var info = Games.AvatarInfo.creatByAvatarId(avatarId);
                var cUnit = Game.creator.requestUnit(info);
                var bounds = cUnit.getBounds();
                cUnit.openShadow();
                cUnit.pos(bounds.width, bounds.height);
                cUnit.y = this_1.refRoom.roomHeight - this_1.refRoom.routeYList[0];
                this_1.refRoom.addAvatar(cUnit, this_1.refRoom.mainView.m_buildScene.m_avatarContainer0);
                var actorData = Game.moduleModel.actor.getActor(avatarId);
                var actorExperciseData = Game.moduleModel.actor.getActorExerciseDataByActorUuid(actorData.uuid);
                var seatIndex = actorExperciseData.seatIndex;
                var seatCom = this_1.tranSitList[seatIndex];
                cUnit.moveTo(seatCom.x + this_1.roomPart.m_seat.x, false, Handler.create(this_1, function () {
                    cUnit.showOn(seatCom);
                    cUnit.pos(0, bounds.height - _this.refRoom.routeYList[0]);
                    cUnit.executeActionEvents(_this.getRDEvent(), Games.PerformType.Training);
                }));
            };
            var this_1 = this;
            for (var _a = 0, actorids_1 = actorids; _a < actorids_1.length; _a++) {
                var avatarId = actorids_1[_a];
                _loop_1(avatarId);
            }
        };
        BuildingProcess13.prototype.onAvatarBehaviorFinish = function (data) {
            if (data.performType == Games.PerformType.Training) {
                var avatar = this.refRoom.getAvatar(data.avatarUid);
                // if (avatar)
                {
                    avatar.executeActionEvents(this.getRDEvent(), Games.PerformType.Training);
                }
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
        BuildingProcess13.prototype.creatNpc = function () {
            var npcId = Game.config.global.getConfig(GlobalKey.KEY_1048).value;
            var aInfo = Games.AvatarInfo.creatByNpcId(npcId);
            var cUnit = Game.creator.requestUnit(aInfo);
            var bounds = cUnit.getBounds();
            cUnit.pos(bounds.width, this.refRoom.roomHeight - this.refRoom.routeYList[1]);
            this.refRoom.addAvatar(cUnit, this.refRoom.mainView.m_buildScene.m_avatarContainer1);
            var headIcon = fgui.Building.BtnNpcTips.createInstance();
            headIcon.setInfo(5042, Games.TEXT.ActorExperciser);
            cUnit.enterTo(this.refRoom.roomWidth - 150, cUnit.y + 15, Games.DirtionType.Left);
            cUnit.on(Event.CLICK, this, this.onNpcClick);
            this.npcBtn = headIcon;
            cUnit.setTopHeadIcon(headIcon);
            cUnit.openShadow();
            cUnit.setHitArea(cUnit.unitModel.width * 2, cUnit.unitModel.height * 1.2);
            cUnit.playAction(1027);
        };
        BuildingProcess13.prototype.onNpcClick = function () {
            Game.menu.open(Games.MenuId.ArtListExercise);
        };
        return BuildingProcess13;
    }(Games.BaseBuildingProcess));
    Games.BuildingProcess13 = BuildingProcess13;
})(Games || (Games = {}));
//# sourceMappingURL=BuildingProcess13.js.map