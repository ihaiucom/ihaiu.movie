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
    // 摄影棚
    //-----------------------------
    var BuildingProcess2 = /** @class */ (function (_super) {
        __extends(BuildingProcess2, _super);
        function BuildingProcess2() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.isShooting = false;
            _this.timeId = 0;
            return _this;
        }
        BuildingProcess2.prototype.dispose = function () {
            this.timeId && clearTimeout(this.timeId);
            this.timeId = 0;
            this.shootCanvas && this.shootCanvas.dispose();
            Game.event.remove(GameEventKey.GameEventKey_ShootStart, this.onShootStart, this);
            Game.event.remove(GameEventKey.GameEventKey_ShootEnd, this.onShootEnd, this);
        };
        //执行处理器逻辑		
        BuildingProcess2.prototype.onProcess = function () {
            console.log("RoomProcesser -> " + getClassName(this));
            Game.event.add(GameEventKey.GameEventKey_ShootStart, this.onShootStart, this);
            Game.event.add(GameEventKey.GameEventKey_ShootEnd, this.onShootEnd, this);
            this.initShootCanvas();
            // setTimeout(() =>
            // {
            // 	this.shootCanvas.playAction(2002);
            // 	let actorList: ActorData = Game.moduleModel.actor.getActors()[0];
            // 	// this.addActorToShootRoom([actorList]);
            // }, 5000);
            // setTimeout(() =>
            // {
            // 	this.onShootEnd();
            // }, 15000);
        };
        BuildingProcess2.prototype.initShootCanvas = function () {
            var aInfo = new Games.AvatarInfo();
            aInfo.type = Games.AvatarType.Npc;
            aInfo.texturePath = Res.getCinemaCanvasSkin();
            aInfo.skeletonPath = Res.getCinemaCanvasSK();
            this.shootCanvas = Game.creator.creatEUnit(aInfo, this.refRoom.roomWidth, this.refRoom.roomHeight, 1);
            this.onShootEnd();
            if (Games.AvatarManager.isOnShoot) {
                this.onShootStart(false);
            }
            var scale = this.refRoom.width / this.refRoom.mainView.sourceWidth;
            this.shootCanvas.pos(this.refRoom.mainView.sourceWidth / 2, this.refRoom.mainView.sourceHeight + 50);
            // this.shootCanvas.pos(0, 50);
            this.shootCanvas.setRoomInfo(this.refRoom.roomInfo);
            this.shootCanvas.showOn(this.refRoom.mainView.m_buildScene.m_canvasContainer);
        };
        //拍摄开始
        BuildingProcess2.prototype.onShootStart = function (onShooting) {
            var _this = this;
            if (!this.isShooting) {
                this.isShooting = true;
                this.shootCanvas.playAction(2002); //bihe
                Games.AvatarManager.sBehaviorFinish.add(this.onAvatarBehaviorFinish, this);
                var actorDataList_1 = Game.moduleModel.warData.getRealYRList.getValues(); //电影演员列表
                Game.event.dispatch(GameEventKey.GameEventKey_ShootStartAddActor, actorDataList_1);
                console.log("start add ActorToShootRoom....");
                this.refRoom.executeLeaveRoomForEach(true);
                setTimeout(function () {
                    _this.addActorToShootRoom(actorDataList_1); //添加艺人到摄影棚
                }, 100);
            }
        };
        //拍摄结束
        BuildingProcess2.prototype.onShootEnd = function () {
            var _this = this;
            if (this.isShooting) {
                this.isShooting = false;
                this.shootCanvas.playAction(2004);
                Games.AvatarManager.sBehaviorFinish.remove(this.onAvatarBehaviorFinish, this);
                this.refRoom.forEachAvatar(function (avatar) {
                    avatar.executeActionEvents(_this.getEndEvent(), Games.PerformType.Shoot);
                });
                this.timeId = setTimeout(function () {
                    _this.refRoom.executeLeaveRoomForEach(true);
                }, 2000);
            }
        };
        //添加艺人到摄影棚
        BuildingProcess2.prototype.addActorToShootRoom = function (actors) {
            var _this = this;
            var actorids = [];
            for (var _i = 0, actors_1 = actors; _i < actors_1.length; _i++) {
                var actor = actors_1[_i];
                actorids.push(actor.id);
            }
            var avatarIdList = Games.AvatarManager.removeRoomActorList(actorids);
            var _loop_1 = function (avatarId) {
                var info = Games.AvatarInfo.creatByAvatarId(avatarId);
                var cUnit = Game.creator.requestUnit(info);
                var bounds = cUnit.getBounds();
                cUnit.pos(bounds.width, bounds.height);
                cUnit.y = this_1.refRoom.roomHeight - this_1.refRoom.routeYList[0];
                this_1.refRoom.addAvatar(cUnit, this_1.refRoom.mainView.m_buildScene.m_avatarContainer0);
                var randomX = Random.rangeBetween(0, Laya.stage.width);
                cUnit.moveTo(randomX, false, Handler.create(this_1, function () {
                    cUnit.executeActionEvents(_this.getRDEvent(), Games.PerformType.Shoot);
                }, null, true));
            };
            var this_1 = this;
            for (var _a = 0, avatarIdList_1 = avatarIdList; _a < avatarIdList_1.length; _a++) {
                var avatarId = avatarIdList_1[_a];
                _loop_1(avatarId);
            }
        };
        BuildingProcess2.prototype.onAvatarBehaviorFinish = function (data) {
            if (data.performType == Games.PerformType.Shoot) {
                var avatar = this.refRoom.getAvatar(data.avatarUid);
                if (avatar) {
                    avatar.executeActionEvents(this.getRDEvent(), Games.PerformType.Shoot);
                }
            }
        };
        //根据电影热度获取事件
        BuildingProcess2.prototype.getRDEvent = function () {
            var playActList = Game.config.playAct.getConfigList();
            playActList = playActList.filter(function (value, index, array) {
                return value.type == Games.PerformType.Shoot && (value.data % (value.type * 10)) == 1;
            });
            if (playActList.length > 0)
                return playActList[0].eventList;
            return [];
        };
        BuildingProcess2.prototype.getEndEvent = function () {
            var playActList = Game.config.playAct.getConfigList();
            playActList = playActList.filter(function (value, index, array) {
                return value.type == Games.PerformType.Shoot && (value.data % (value.type * 10)) == 2;
            });
            if (playActList.length > 0)
                return playActList[0].eventList;
            return [];
        };
        return BuildingProcess2;
    }(Games.BaseBuildingProcess));
    Games.BuildingProcess2 = BuildingProcess2;
})(Games || (Games = {}));
//# sourceMappingURL=BuildingProcess2.js.map