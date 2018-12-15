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
    var Event = laya.events.Event;
    //-----------------------------
    // 艺人教室
    //-----------------------------
    var BuildingProcess3 = /** @class */ (function (_super) {
        __extends(BuildingProcess3, _super);
        function BuildingProcess3() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.sitOffsetX = 30;
            _this.sitOffsetY = 30;
            _this.avatarposList = [];
            return _this;
        }
        BuildingProcess3.prototype.onInit = function () {
            this.roomPart = fgui.Building.BuildScene3.createInstance();
            this.refRoom.mainView.m_buildScene.m_scenePart.addChild(this.roomPart);
            //aspect
            this.roomPart.setSize(this.refRoom.mainView.m_buildScene.m_scenePart.width, this.refRoom.mainView.m_buildScene.m_scenePart.height);
            this.roomPart.addRelation(this.refRoom.mainView.m_buildScene.m_scenePart, fairygui.RelationType.Size);
            var scale = this.refRoom.width / this.refRoom.mainView.sourceWidth;
            // this.roomPart.setScale(scale, scale);
            this.initConfigSitPosList();
            Game.protoOkEvent.add(ProtoEventKey.city_HoldCity, this.showTrainer, this);
        };
        BuildingProcess3.prototype.dispose = function () {
            this.roomPart && this.roomPart.dispose();
            this.starNpc && this.starNpc.dispose();
            this.trainerNpc && this.trainerNpc.dispose();
            Game.protoOkEvent.remove(ProtoEventKey.city_HoldCity, this.showTrainer, this);
        };
        //执行处理器逻辑		
        BuildingProcess3.prototype.onProcess = function () {
            console.log("RoomProcesser -> " + getClassName(this));
            this.starNpcId = Game.config.global.getConfig(GlobalKey.KEY_1046).value;
            this.trainerNpcId = Game.config.global.getConfig(GlobalKey.KEY_1047).value;
            this.starNpc = this.creatNpc(this.starNpcId, this.starCom);
            this.starNpc.setHitArea(this.starNpc.unitModel.width * 2, this.starNpc.unitModel.height * 1.2, -this.starNpc.unitModel.width * 0.8, this.starNpc.unitModel.height * 0.2);
            this.trainerNpc = this.creatNpc(this.trainerNpcId, this.trainerCom);
            this.trainerNpc.setHitArea(this.trainerNpc.unitModel.width * 2, this.trainerNpc.unitModel.height * 1.2, -this.trainerNpc.unitModel.width * 0.8, this.trainerNpc.unitModel.height * 0.2);
            var trainerNpcTip = this.roomPart.m_seat.m_btnNpcTip1;
            var starNpcTip = this.roomPart.m_seat.m_btnNpcTip2;
            starNpcTip.m_title.text = Games.TEXT.BuildActorRoomTalentNpc;
            starNpcTip.onClick(this, this.onNpcClick, [this.starNpcId]);
            trainerNpcTip.m_title.text = Games.TEXT.BuildActorRoomTrainerNpc;
            trainerNpcTip.onClick(this, this.onNpcClick, [this.trainerNpcId]);
            this.showTrainer();
        };
        BuildingProcess3.prototype.showTrainer = function () {
            var checkShowTrainer = Game.moduleModel.actor.isOpenTrain;
            if (!checkShowTrainer) {
                this.trainerNpc.visible = false;
                this.roomPart.m_seat.m_btnNpcTip1.visible = false;
            }
            else {
                this.trainerNpc.visible = true;
                this.roomPart.m_seat.m_btnNpcTip1.visible = true;
            }
        };
        //创建NPC
        BuildingProcess3.prototype.creatNpc = function (npcId, posCom) {
            var aInfo = Games.AvatarInfo.creatByNpcId(npcId);
            aInfo.idleName = "zuoxia1";
            var cUnit = Game.creator.creatEUnit(aInfo);
            var bounds = cUnit.getBounds();
            cUnit.pos(bounds.width, bounds.height);
            this.refRoom.addAvatar(cUnit, posCom);
            cUnit.sitDown(cUnit.x + this.sitOffsetX, cUnit.y - this.sitOffsetY);
            cUnit.on(Event.CLICK, this, this.onNpcClick, [aInfo.id]);
            // let avatar: Avatar = Games.Avatar.Creat(aInfo, (AvatarInfo) =>
            // {
            // 	let bounds = avatar.getBounds();
            // 	avatar.pos(bounds.width, bounds.height);
            // 	avatar.scaleTalkBox(1 / posCom.scaleX);
            // 	this.refRoom.addAvatar(avatar, posCom);
            // 	avatar.sitDown(avatar.x + this.sitOffsetX, avatar.y - this.sitOffsetY);
            // 	avatar.on(Event.CLICK, this, this.onNpcClick, [aInfo.id]);
            // });
            return cUnit;
        };
        BuildingProcess3.prototype.initConfigSitPosList = function () {
            this.trainerCom = this.roomPart.m_seat.getChild("pos1").asCom;
            this.trainerCom.getChild("sample").visible = false;
            this.starCom = this.roomPart.m_seat.getChild("pos2").asCom;
            this.starCom.getChild("sample").visible = false;
        };
        BuildingProcess3.prototype.onNpcClick = function (npcId) {
            if (npcId == this.starNpcId) {
                if (Game.moduleModel.actor.noseActorIsWaiting && User.info.noseIntoActorList.length > 0) {
                    //有探查艺人
                    Game.menu.open(Games.MenuId.ArtistScoutResult);
                }
                else {
                    Game.menu.openTab(Games.MenuId.ArtistList, Games.ArtistListSubType.FindPanel);
                }
            }
            else if (npcId == this.trainerNpcId) {
                Game.menu.open(Games.MenuId.ArtistTrain);
            }
        };
        return BuildingProcess3;
    }(Games.BaseBuildingProcess));
    Games.BuildingProcess3 = BuildingProcess3;
})(Games || (Games = {}));
//# sourceMappingURL=BuildingProcess3.js.map