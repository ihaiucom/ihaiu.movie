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
            return _this;
        }
        //执行处理器逻辑		
        BuildingProcess2.prototype.onProcess = function () {
            console.log("RoomProcesser -> " + getClassName(this));
            Game.event.add(GameEventKey.GameEventKey_ShootStart, this.onShootStart, this);
            Game.event.add(GameEventKey.GameEventKey_ShootEnd, this.onShootEnd, this);
            this.initShootCanvas();
            this.refRoom.executeLeaveRoomForEach(true);
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
        Object.defineProperty(BuildingProcess2.prototype, "isOnShoot", {
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
        BuildingProcess2.prototype.initShootCanvas = function () {
            var _this = this;
            var aInfo = new Games.AvatarInfo();
            aInfo.type = Games.AvatarType.Npc;
            aInfo.texturePath = Res.getCinemaCanvasSkin();
            aInfo.skeletonPath = Res.getCinemaCanvasSK();
            this.shootCanvas = Games.Avatar.Creat(aInfo, function (AvatarInfo) {
                _this.onShootEnd();
                if (_this.isOnShoot) {
                    _this.onShootStart(false);
                }
                var bounds = _this.shootCanvas.getBounds();
                // this.shootCanvas.pos(bounds.width / 2, bounds.height + 50);
                _this.shootCanvas.pos(0, 50);
                _this.shootCanvas.setRoomInfo(_this.refRoom.roomInfo);
                // this.refRoom.addAvatar(this.shootCanvas, this.refRoom.m_buildScene.m_canvasContainer);
                _this.refRoom.m_buildScene.m_canvasContainer.displayObject.addChild(_this.shootCanvas);
            }, this.refRoom.roomWidth, this.refRoom.roomHeight, 1);
        };
        //拍摄开始
        BuildingProcess2.prototype.onShootStart = function (onShooting) {
            if (!this.isShooting) {
                this.isShooting = true;
                this.shootCanvas.playAction(2002); //bihe
                Games.AvatarManager.sBehaviorFinish.add(this.onAvatarBehaviorFinish, this);
                var actorDataList = Game.moduleModel.warData.getRealYRList.getValues(); //电影演员列表
                Game.event.dispatch(GameEventKey.GameEventKey_ShootStartAddActor, actorDataList);
                console.log("start add ActorToShootRoom....");
                this.addActorToShootRoom(actorDataList); //添加艺人到摄影棚
            }
        };
        //拍摄结束
        BuildingProcess2.prototype.onShootEnd = function () {
            var _this = this;
            this.isShooting = false;
            this.shootCanvas.animator.play("dakai", false);
            Games.AvatarManager.sBehaviorFinish.remove(this.onAvatarBehaviorFinish, this);
            this.refRoom.forEachAvatar(function (avatar) {
                avatar.executeActionEvents(_this.getEndEvent(), Games.PerformType.Shoot);
            });
            setTimeout(function () {
                _this.refRoom.executeLeaveRoomForEach(true);
            }, 2000);
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
                var avatar = Games.Avatar.Creat(info, function (AvatarInfo) {
                    var bounds = avatar.getBounds();
                    avatar.pos(bounds.width, bounds.height);
                    avatar.y = _this.refRoom.roomHeight - _this.refRoom.routeYList[0];
                    _this.refRoom.addAvatar(avatar, _this.refRoom.m_buildScene.m_avatarContainer0);
                    var randomX = Random.rangeBetween(Games.Avatar.STAGE_OFFSET_ENTER, Laya.stage.width - Games.Avatar.STAGE_OFFSET_ENTER);
                    avatar.moveTo(randomX, false, Handler.create(_this, function () {
                        avatar.executeActionEvents(_this.getRDEvent(), Games.PerformType.Shoot);
                    }, null, true));
                });
            };
            for (var _a = 0, avatarIdList_1 = avatarIdList; _a < avatarIdList_1.length; _a++) {
                var avatarId = avatarIdList_1[_a];
                _loop_1(avatarId);
            }
        };
        BuildingProcess2.prototype.onAvatarBehaviorFinish = function (data) {
            if (data.performType == Games.PerformType.Shoot) {
                var avatar = this.refRoom.getAvatar(data.avatarUid);
                avatar.executeActionEvents(this.getRDEvent(), Games.PerformType.Shoot);
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