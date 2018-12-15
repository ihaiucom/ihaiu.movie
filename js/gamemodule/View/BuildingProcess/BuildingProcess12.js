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
    // 财务室
    //-----------------------------
    var BuildingProcess12 = /** @class */ (function (_super) {
        __extends(BuildingProcess12, _super);
        function BuildingProcess12() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        BuildingProcess12.prototype.onInit = function () {
            this.roomPart = fgui.Building.BuildScene12.createInstance();
            this.refRoom.mainView.m_buildScene.m_scenePart.addChild(this.roomPart);
            //aspect
            this.roomPart.setSize(this.refRoom.mainView.m_buildScene.m_scenePart.width, this.refRoom.mainView.m_buildScene.m_scenePart.height);
            this.roomPart.addRelation(this.refRoom.mainView.m_buildScene.m_scenePart, fairygui.RelationType.Size);
            var scale = this.refRoom.width / this.refRoom.mainView.sourceWidth;
            // this.roomPart.setScale(scale, scale);
            this.initNpc();
        };
        //执行处理器逻辑		
        BuildingProcess12.prototype.onProcess = function () {
            console.log("RoomProcesser -> " + getClassName(this));
        };
        BuildingProcess12.prototype.initNpc = function () {
            var npcId = Game.config.global.getConfig(GlobalKey.KEY_1050).value;
            var aInfo = Games.AvatarInfo.creatByNpcId(npcId);
            var cUnit = Game.creator.creatEUnit(aInfo);
            var bounds = cUnit.getBounds();
            cUnit.showOn(this.roomPart.m_pos);
            cUnit.direction = Games.DirtionType.Right;
            var headIcon = fgui.Building.BtnNpcTips.createInstance();
            if (!headIcon) {
                console.log("##### 财务室 NpcHeadIcon null" + headIcon);
            }
            headIcon.setItemInfo(EItemId.dollar, Games.TEXT.GoldExchangeBuildingTitle);
            cUnit.setTopHeadIcon(headIcon);
            cUnit.setHitArea(cUnit.unitModel.width * 2, cUnit.unitModel.height * 1.2);
            this.npcBtn = headIcon;
            cUnit.openShadow();
            cUnit.playAction(1027);
            headIcon.onClick(this, this.onNpcClick);
            cUnit.on(laya.events.Event.CLICK, this, this.onNpcClick);
            // let avatar: Avatar = Games.Avatar.Creat(aInfo, (AvatarInfo) =>
            // {
            // 	let bounds = avatar.getBounds();
            // 	// avatar.pos(bounds.width, bounds.height);
            // 	this.roomPart.m_pos.displayObject.addChild(avatar);
            // 	avatar.direction = DirtionType.Right;
            // 	avatar.openShadow();
            // 	avatar.playAction(1027);
            // 	let headIcon = fgui.Building.BtnNpcTips.createInstance();
            // 	if (!headIcon)
            // 	{
            // 		console.log("##### 财务室 NpcHeadIcon null" + headIcon);
            // 	}
            // 	headIcon.setItemInfo(EItemId.dollar, TEXT.GoldExchangeBuildingTitle);
            // 	avatar.setTopHeadIcon(headIcon, true);
            // 	avatar.setHitArea(avatar.width * 2, avatar.height * 1.2);
            // 	this.npcBtn = headIcon;
            // 	headIcon.onClick(this, this.onNpcClick);
            // 	avatar.on(laya.events.Event.CLICK, this, this.onNpcClick);
            // });
        };
        BuildingProcess12.prototype.onNpcClick = function () {
            Game.menu.open(Games.MenuId.GoldExchange);
        };
        return BuildingProcess12;
    }(Games.BaseBuildingProcess));
    Games.BuildingProcess12 = BuildingProcess12;
})(Games || (Games = {}));
//# sourceMappingURL=BuildingProcess12.js.map