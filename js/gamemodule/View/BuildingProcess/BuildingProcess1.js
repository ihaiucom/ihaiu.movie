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
    // 电影院
    //-----------------------------
    var BuildingProcess1 = /** @class */ (function (_super) {
        __extends(BuildingProcess1, _super);
        function BuildingProcess1() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.SEAT_COUNT = 6;
            _this.npcList = [101, 102];
            _this.avatarposList = [];
            _this.sitOffsetX = 30;
            _this.sitOffsetY = 30;
            _this.sitIndex = 0;
            _this.isInitOnFilm = false;
            return _this;
            // private sortZ()
            // {
            // 	this.refRoom.avatarList = this.refRoom.avatarList.sort((a, b) =>
            // 	{
            // 		if (b.y - a.y == 0)
            // 		{
            // 			return b.x - a.x;
            // 		}
            // 		return b.y - a.y;
            // 	});
            // 	for (var i = 0; i < this.refRoom.avatarList.length; i++)
            // 	{
            // 		this.refRoom.m_avatarContainer0.displayObject.setChildIndex(this.refRoom.avatarList[i], i);
            // 	}
            // }
        }
        BuildingProcess1.prototype.onInit = function () {
            this.roomPart = fgui.Building.BuildScene1.createInstance();
            this.refRoom.m_buildScene.m_scenePart.addChild(this.roomPart);
            this.roomPart.setXY(19, 150);
            this.initConfigSitPosList();
            this.sitIndex = this.SEAT_COUNT;
        };
        //执行处理器逻辑		
        BuildingProcess1.prototype.onProcess = function () {
            console.log("RoomProcesser -> " + getClassName(this));
            Game.event.add(GameEventKey.GameEventKey_FilmStart, this.onFilmStart, this);
            // Game.event.add(GameEventKey.GameEventKey_FilmOn, this.onFilmOn, this);
            Game.event.add(GameEventKey.GameEventKey_FilmEnd, this.onFilmEnd, this);
            if (this.isOnFilming) {
                this.startFilm();
            }
        };
        BuildingProcess1.prototype.start = function () {
            // setTimeout(() =>
            // {
            // 	this.startFilm();
            // }, 2000);
            // setTimeout(() =>
            // {
            // 	this.endFilm();
            // }, 10000);
        };
        //期待值
        BuildingProcess1.prototype.onFilmStart = function (value) {
            this.startFilm();
        };
        BuildingProcess1.prototype.onFilmEnd = function () {
            this.endFilm();
        };
        // 开始观影
        BuildingProcess1.prototype.startFilm = function () {
            if (!this.isInitOnFilm) {
                this.isInitOnFilm = true;
                this.sitIndex = this.SEAT_COUNT;
                Games.AvatarManager.sBehaviorFinish.add(this.onAvatarBehaviorFinish, this);
                this.cinemaPerformList = this.getPerformList();
                for (var i = 0; i < this.SEAT_COUNT; i++) {
                    this.creatNpc();
                }
            }
        };
        //结束观影
        BuildingProcess1.prototype.endFilm = function () {
            this.isInitOnFilm = false;
            Games.AvatarManager.sBehaviorFinish.remove(this.onAvatarBehaviorFinish, this);
            this.refRoom.clearAllAvatar();
        };
        Object.defineProperty(BuildingProcess1.prototype, "isOnFilming", {
            get: function () {
                return Game.moduleModel.warData.onCheckHaveDurDay;
            },
            enumerable: true,
            configurable: true
        });
        BuildingProcess1.prototype.onAvatarBehaviorFinish = function (data) {
            if (data.performType == Games.PerformType.Cinema) {
                var avatar = this.refRoom.getAvatar(data.avatarUid);
                avatar.executeActionEvents(this.getCinemaEventByStar(), Games.PerformType.Cinema);
            }
        };
        BuildingProcess1.prototype.initConfigSitPosList = function () {
            this.avatarposList.length = 0;
            for (var i = 0; i < this.SEAT_COUNT; i++) {
                var posObject = this.roomPart.getChild("sit" + (i)).asCom;
                posObject.getChild("sample").visible = false;
                this.avatarposList.push(posObject);
            }
        };
        //创建NPC
        BuildingProcess1.prototype.creatNpc = function (npcId) {
            var _this = this;
            if (npcId === void 0) { npcId = 101; }
            var rd = Random.range(0, this.npcList.length);
            npcId = this.npcList[rd];
            var aInfo = Games.AvatarInfo.creatByNpcId(npcId);
            aInfo.idleName = "zuoxia1";
            var avatar = Games.Avatar.Creat(aInfo, function (AvatarInfo) {
                var bounds = avatar.getBounds();
                avatar.pos(bounds.width, bounds.height);
                var posCom = _this.getPosCom();
                avatar.scaleTalkBox(1 / posCom.scaleX);
                _this.refRoom.addAvatar(avatar, posCom);
                avatar.sitDown(avatar.x + _this.sitOffsetX, avatar.y - _this.sitOffsetY);
                avatar.executeActionEvents(_this.getCinemaEventByStar(), Games.PerformType.Cinema);
            });
        };
        BuildingProcess1.prototype.getPosCom = function () {
            this.sitIndex--;
            var posCom = this.avatarposList[this.sitIndex];
            return posCom;
        };
        BuildingProcess1.prototype.getPerformList = function () {
            var playActList = Game.config.playAct.getConfigList();
            playActList = playActList.filter(function (value, index, array) {
                return value.type == Games.PerformType.Cinema;
            });
            return playActList;
        };
        //根据电影热度获取事件
        BuildingProcess1.prototype.getCinemaEventByStar = function () {
            var filmEval = Game.moduleModel.warData.moveData.boxOfficeEvaluation;
            var index = Math.min(filmEval - 1, this.cinemaPerformList.length - 1);
            return this.cinemaPerformList[index].eventList;
        };
        return BuildingProcess1;
    }(Games.BaseBuildingProcess));
    Games.BuildingProcess1 = BuildingProcess1;
})(Games || (Games = {}));
//# sourceMappingURL=BuildingProcess1.js.map