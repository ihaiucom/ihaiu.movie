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
            _this.npcList = [];
            _this.avatarposList = [];
            _this.sitOffsetX = 30;
            _this.sitOffsetY = 30;
            _this.sitIndex = 0;
            _this.isInitOnFilm = false;
            _this.screenAnimDict = new Dictionary();
            _this.animPackName = "";
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
            this.refRoom.mainView.m_buildScene.m_scenePart.addChild(this.roomPart);
            //aspect
            this.roomPart.setSize(this.refRoom.mainView.m_buildScene.m_scenePart.width, this.refRoom.mainView.m_buildScene.m_scenePart.height);
            this.roomPart.addRelation(this.refRoom.mainView.m_buildScene.m_scenePart, fairygui.RelationType.Size);
            var scale = this.refRoom.width / this.refRoom.mainView.sourceWidth;
            // this.roomPart.setScale(scale, scale);
            this.cinemaScreenPart = fgui.Building.BuildCinemaScreen.createInstance();
            this.refRoom.mainView.m_buildScene.m_scenePartBottom.addChild(this.cinemaScreenPart);
            //aspect
            this.cinemaScreenPart.setSize(this.refRoom.mainView.m_buildScene.m_scenePart.width, this.refRoom.mainView.m_buildScene.m_scenePart.height);
            this.cinemaScreenPart.addRelation(this.refRoom.mainView.m_buildScene.m_scenePart, fairygui.RelationType.Size);
            // this.cinemaScreenPart.setScale(scale, scale);
            this.sitIndex = this.SEAT_COUNT;
            this.initNpcList();
            this.initConfigSitPosList();
            this.initScreenAnimConfig();
        };
        BuildingProcess1.prototype.dispose = function () {
            this.roomPart && this.roomPart.dispose();
            Game.event.remove(GameEventKey.GameEventKey_FilmStart, this.onFilmStart, this);
            Game.event.remove(GameEventKey.GameEventKey_FilmEnd, this.onFilmEnd, this);
            this.endFilm();
        };
        //执行处理器逻辑		
        BuildingProcess1.prototype.onProcess = function () {
            console.log("RoomProcesser -> " + getClassName(this));
            Game.event.add(GameEventKey.GameEventKey_FilmStart, this.onFilmStart, this);
            Game.event.add(GameEventKey.GameEventKey_FilmEnd, this.onFilmEnd, this);
            if (this.isOnFilming) {
                this.startFilm();
            }
        };
        /** 初始Npc列表 */
        BuildingProcess1.prototype.initNpcList = function () {
            this.npcList.length = 0;
            this.npcList.push(Game.config.global.getConfig(GlobalKey.KEY_1051).value);
            this.npcList.push(Game.config.global.getConfig(GlobalKey.KEY_1052).value);
            this.npcList.push(Game.config.global.getConfig(GlobalKey.KEY_1053).value);
            this.npcList.push(Game.config.global.getConfig(GlobalKey.KEY_1054).value);
        };
        /** 初始屏观众位置配置 */
        BuildingProcess1.prototype.initConfigSitPosList = function () {
            this.avatarposList.length = 0;
            for (var i = 0; i < this.SEAT_COUNT; i++) {
                var posObject = this.roomPart.m_chairPart.getChild("sit" + (i)).asCom;
                posObject.getChild("sample").visible = false;
                this.avatarposList.push(posObject);
            }
        };
        /** 初始屏幕动画配置 */
        BuildingProcess1.prototype.initScreenAnimConfig = function () {
            this.screenAnimDict.clear();
            this.screenAnimDict.add(1, fgui.FilmScreenAnim1.FilmScreenAnim1);
            this.screenAnimDict.add(2, fgui.FilmScreenAnim2.FilmScreenAnim2);
            this.screenAnimDict.add(3, fgui.FilmScreenAnim3.FilmScreenAnim3);
            this.screenAnimDict.add(4, fgui.FilmScreenAnim4.FilmScreenAnim4);
            this.screenAnimDict.add(5, fgui.FilmScreenAnim5.FilmScreenAnim5);
            this.screenAnimDict.add(6, fgui.FilmScreenAnim6.FilmScreenAnim6);
            this.screenAnimDict.add(7, fgui.FilmScreenAnim7.FilmScreenAnim7);
            this.screenAnimDict.add(8, fgui.FilmScreenAnim8.FilmScreenAnim8);
            this.screenAnimDict.add(9, fgui.FilmScreenAnim9.FilmScreenAnim9);
            this.screenAnimDict.add(10, fgui.FilmScreenAnim10.FilmScreenAnim10);
        };
        BuildingProcess1.prototype.start = function () {
            var _this = this;
            setTimeout(function () {
                _this.startFilm();
            }, 5000);
            // setTimeout(() =>
            // {
            // 	this.endFilm();
            // }, 10000);
            // setTimeout(() =>
            // {
            // 	this.startFilm();
            // }, 15000);
        };
        //期待值
        BuildingProcess1.prototype.onFilmStart = function (value) {
            this.startFilm();
        };
        BuildingProcess1.prototype.onFilmEnd = function () {
            this.endFilm();
        };
        Object.defineProperty(BuildingProcess1.prototype, "isFilmStart", {
            get: function () {
                return Game.moduleModel.warData.filmingCurDay <= 3;
            },
            enumerable: true,
            configurable: true
        });
        // 开始观影
        BuildingProcess1.prototype.startFilm = function () {
            if (!this.isInitOnFilm) {
                this.isInitOnFilm = true;
                this.sitIndex = this.SEAT_COUNT;
                Games.AvatarManager.sBehaviorFinish.add(this.onAvatarBehaviorFinish, this);
                this.cinemaPerformList = this.getPerformList();
                this.creatNpc();
                var stroyId = Game.moduleModel.warData.moveData.movieId;
                var stroyCfg = Game.config.story.getConfig(stroyId);
                var filmType = stroyCfg.type % 50;
                if (this.screenAnimDict.hasKey(filmType)) {
                    //替换scene图，添加screen动画
                    var url = Res.getRoom("1_screen");
                    this.refRoom.reLoadBuildTexture(url);
                    this.loadScreenAnimRes(filmType);
                }
            }
        };
        //结束观影
        BuildingProcess1.prototype.endFilm = function () {
            this.isInitOnFilm = false;
            Games.AvatarManager.sBehaviorFinish.remove(this.onAvatarBehaviorFinish, this);
            this.refRoom.clearAllAvatar();
            //替换scene图，移除screen动画
            var url = Res.getRoom(Games.RoomType.Cinema);
            this.refRoom.reLoadBuildTexture(url);
            this.unloadScreenAnimRes();
        };
        /** 加载上映屏幕动画 */
        BuildingProcess1.prototype.loadScreenAnimRes = function (animType) {
            var _this = this;
            var animClass = this.screenAnimDict.getValue(animType);
            if (!animClass)
                return;
            this.animPackName = animClass["name"];
            Game.asset.loadFguiByPackagename(this.animPackName, this, function (packageConfig) {
                _this.screenAnim = animClass["createInstance"]();
                _this.cinemaScreenPart.m_screenPart.addChild(_this.screenAnim);
                var scale = _this.refRoom.width / _this.refRoom.mainView.sourceWidth;
                _this.screenAnim.setPivot(0.5, 0.5);
                _this.screenAnim.setScale(scale, scale);
                var animTrans = _this.screenAnim.getTransition("t0");
                // window["__aa"] = animTrans;
            });
        };
        /** 卸载上映屏幕动画 */
        BuildingProcess1.prototype.unloadScreenAnimRes = function () {
            if (this.screenAnim) {
                this.screenAnim.dispose();
                this.screenAnim = null;
                Game.asset.unloadFgui(this.animPackName);
            }
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
        //创建NPC
        BuildingProcess1.prototype.creatNpc = function (npcId) {
            if (npcId === void 0) { npcId = 101; }
            var rd = Random.range(0, this.npcList.length);
            npcId = this.npcList[rd];
            var aInfo = Games.AvatarInfo.creatByNpcId(npcId);
            aInfo.idleName = "zuoxia1";
            //creat
            var cUnit = Game.creator.creatEUnit(aInfo);
            var bounds = cUnit.getBounds();
            cUnit.pos(bounds.width, bounds.height);
            var posCom = this.getPosCom();
            this.refRoom.addAvatar(cUnit, posCom);
            cUnit.sitDown(cUnit.x + this.sitOffsetX, cUnit.y - this.sitOffsetY);
            cUnit.scaleTalkBox(1 / posCom.scaleX, -10, 30 * posCom.scaleX);
            if (this.sitIndex > 0) {
                cUnit.executeActionEvents(this.getCinemaEventByStar(), Games.PerformType.Cinema);
                this.creatNpc();
            }
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