/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////
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
var fgui;
(function (fgui) {
    var WarMovie;
    (function (WarMovie) {
        var WarFilmShangYing = /** @class */ (function (_super) {
            __extends(WarFilmShangYing, _super);
            function WarFilmShangYing() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.buildIndex = -1;
                _this.light1TimeId = 0;
                _this.light2TimeId = 0;
                // private moveData: Proto.SS.MovieData;
                // 观众情况是否初始化
                _this.haveGuanzhong = false;
                _this.liuxingTimeoutNum = -1;
                return _this;
            }
            WarFilmShangYing.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                // 初始化柱状图列表
                this.m_progressList.itemRenderer = Laya.Handler.create(this, this.initProgressItem, null, false);
                // 初始化观众类别
                this.m_guanzhongList.itemRenderer = Laya.Handler.create(this, this.initGuanzhongItem, null, false);
                // 关闭按钮
                this.m_closeBtn.onClick(this, this.onClickCloseBtn);
                this.clearData();
            };
            WarFilmShangYing.prototype.onClickCloseBtn = function () {
                this.moduleWindow.closeSelf();
                this.moduleMain.menuClose();
                // 打开电影小窗口
                Game.menu.getMenuCtl(MenuId.Home).moduleWindow.conent.onCreateFilmSmall();
            };
            WarFilmShangYing.prototype.onWindowShow = function () {
                this.setData();
                this.showBuildRoom();
                if (this.isFilmStart) {
                    this.showFilmStartAnim();
                }
                this.onShowProgress();
                Game.event.add(GameEventKey.GameEventKey_UpdateFilmingStatus, this.onShowProgress, this);
            };
            WarFilmShangYing.prototype.onWindowHide = function () {
                clearTimeout(this.liuxingTimeoutNum);
                this.liuxingTimeoutNum = -1;
                if (this.mindDialog && this.mindDialog !== null) {
                    this.mindDialog.close();
                }
                Game.event.remove(GameEventKey.GameEventKey_UpdateFilmingStatus, this.onShowProgress, this);
                if (this.curTween && this.curTween !== null) {
                    this.curTween.complete();
                }
                this.hideBuildRoom();
                if (this.isFilmStart) {
                    this.hideFilmStartAnim();
                }
            };
            WarFilmShangYing.prototype.showBuildRoom = function () {
                this.buildRoom = Games.AvatarManager.context.getRoomByType(Games.RoomType.Cinema);
                if (this.buildRoom != null) {
                    this.buildRoom.onRoomInScreen();
                    this.buildRoom.setRoomFrameVisible(false);
                    this.buildIndex = Games.AvatarManager.context.getRoomIndexByType(Games.RoomType.Cinema);
                    this.buildRoom.setXY(-20, -4);
                    this.buildRoom.setScale(1.1, 1.1);
                    this.m_roomContainer.addChild(this.buildRoom);
                }
            };
            WarFilmShangYing.prototype.hideBuildRoom = function () {
                if (this.buildRoom) {
                    this.buildRoom.setXY(0, 0);
                    this.buildRoom.setScale(1, 1);
                    this.buildRoom.setRoomFrameVisible(true);
                    Games.AvatarManager.context.addRoomAt(this.buildRoom, this.buildIndex);
                }
            };
            WarFilmShangYing.prototype.showFilmStartAnim = function () {
                if (this.buildRoom) {
                    this.buildRoom.visible = false;
                }
                if (!this.filmEnterScene) {
                    this.filmEnterScene = fgui.Building.BuildSceneFilmEnter.createInstance();
                }
                var stroyId = Game.moduleModel.warData.moveData.movieId;
                var stroyCfg = Game.config.story.getConfig(stroyId);
                if (stroyCfg) {
                    var avatarCfg = Game.config.avatar.getConfig(stroyCfg.poster_name);
                    this.filmEnterScene.m_stoyIcon.url = avatarCfg.iconUrl;
                }
                this.filmEnterScene.m_title.text = Game.moduleModel.warData.moveData.name;
                this.m_roomContainer.addChild(this.filmEnterScene);
                this.loadFilmAnim();
            };
            /** 隐藏电影开场动画 */
            WarFilmShangYing.prototype.hideFilmStartAnim = function () {
                if (this.buildRoom) {
                    this.buildRoom.visible = true;
                }
                if (this.filmAcotrs) {
                    this.filmAcotrs.animator.sPlayEnd.add(this.onAnimPlayEnd, this);
                    this.filmAcotrs.dispose();
                    this.filmAcotrs = null;
                }
                if (this.filmDoor) {
                    this.filmDoor.dispose();
                    this.filmDoor = null;
                }
                if (this.filmEnterScene) {
                    this.filmEnterScene.removeFromParent();
                    this.filmEnterScene.dispose();
                    this.filmEnterScene = null;
                }
                if (this.light1TimeId > 0) {
                    clearTimeout(this.light1TimeId);
                    this.light1TimeId = 0;
                }
                if (this.light2TimeId > 0) {
                    clearTimeout(this.light2TimeId);
                    this.light2TimeId = 0;
                }
            };
            WarFilmShangYing.prototype.loadFilmAnim = function () {
                var _this = this;
                var aInfo = new Games.AvatarInfo();
                aInfo.type = Games.AvatarType.Npc;
                aInfo.texturePath = Res.cinemaHallActorSkin;
                aInfo.skeletonPath = Res.cinemaHallActorSK;
                this.filmAcotrs = Games.Avatar.Creat(aInfo, function (AvatarInfo) {
                    var bounds = _this.filmAcotrs.getBounds();
                    _this.filmAcotrs.pos(0, 50);
                    _this.filmEnterScene.m_canvasContainer.displayObject.addChild(_this.filmAcotrs);
                    _this.loadFilmDoorAnim();
                }, this.filmEnterScene.width, this.filmEnterScene.height, 1);
            };
            WarFilmShangYing.prototype.loadFilmDoorAnim = function () {
                var _this = this;
                var aInfo = new Games.AvatarInfo();
                aInfo.type = Games.AvatarType.Npc;
                aInfo.texturePath = Res.cinemaHallDoorSkin;
                aInfo.skeletonPath = Res.cinemaHallDoorSK;
                this.filmDoor = Games.Avatar.Creat(aInfo, function (AvatarInfo) {
                    var bounds = _this.filmDoor.getBounds();
                    _this.filmDoor.pos(0, 50);
                    _this.filmEnterScene.m_doorContainer.displayObject.addChild(_this.filmDoor);
                    //play anim
                    _this.playFilmEnterAnim();
                }, this.filmEnterScene.width, this.filmEnterScene.height, 1);
            };
            WarFilmShangYing.prototype.playFilmEnterAnim = function () {
                var _this = this;
                if (this.filmAcotrs) {
                    this.filmAcotrs.animator.sPlayEnd.add(this.onAnimPlayEnd, this);
                    this.filmAcotrs.play("animation", false);
                }
                if (this.filmDoor) {
                    this.filmDoor.play("animation", false);
                }
                //light
                this.filmEnterScene.m_screenlight.visible = false;
                this.filmEnterScene.m_filmlight.visible = false;
                this.light1TimeId = setTimeout(function () {
                    if (_this.filmEnterScene)
                        _this.filmEnterScene.m_screenlight.visible = true;
                }, 1500);
                this.light2TimeId = setTimeout(function () {
                    if (_this.filmEnterScene)
                        _this.filmEnterScene.m_filmlight.visible = true;
                }, 2500);
            };
            WarFilmShangYing.prototype.onAnimPlayEnd = function () {
                this.filmAcotrs.animator.sPlayEnd.remove(this.onAnimPlayEnd, this);
                this.hideFilmStartAnim();
            };
            Object.defineProperty(WarFilmShangYing.prototype, "isFilmStart", {
                get: function () {
                    return Game.moduleModel.warData.filmingCurDay <= 3;
                },
                enumerable: true,
                configurable: true
            });
            WarFilmShangYing.prototype.setData = function () {
                var _this = this;
                Game.sound.playSound(SoundKey.MM27_TicketStatistics);
                this.dayLeftTip = Game.config.msg.getConfig(MsgKey.movie_remaining_days).notice;
                this.dayCurTip = Game.config.msg.getConfig(MsgKey.movie_day).notice;
                this.moduleMain = this.moduleWindow.mainWindow;
                if (Game.moduleModel.warData.filmingCurDay <= 3) {
                    this.clearData();
                    //开始上映
                    Game.event.dispatch(GameEventKey.GameEventKey_FilmStart, Game.moduleModel.warData.moveData.mExpected);
                    Game.moduleModel.warData.guanzhongList = new Array();
                    this.haveGuanzhong = false;
                }
                else {
                    Game.event.dispatch(GameEventKey.GameEventKey_FilmOn, Game.moduleModel.warData.moveData.mExpected);
                }
                this.m_filmName.text = Game.moduleModel.warData.moveData.name;
                if (!this.haveGuanzhong) {
                    this.haveGuanzhong = true;
                    this.curGZindex = 0;
                    this.setGuanzhong();
                    if (this.guanzhongList.length > 0) {
                        this.onShowGuanzhongList();
                    }
                    clearTimeout(this.liuxingTimeoutNum);
                    // 2秒后显示流行趋势
                    this.liuxingTimeoutNum = setTimeout(function () { _this.showLiuxing(); }, 2000);
                }
            };
            WarFilmShangYing.prototype.clearData = function () {
                this.m_progressList.numItems = 0;
                this.m_filmTime.text = "";
                this.m_filmTotal.text = "";
                this.m_filmcurrent.text = "";
                this.m_guanzhongList.numItems = 0;
            };
            // 刷新柱状图
            WarFilmShangYing.prototype.onShowProgress = function () {
                var _this = this;
                if (Game.moduleModel.warData.moveData.evaluationCon > 0 && Math.floor(Game.moduleModel.warData.filmingMaxDay / 4) === Game.moduleModel.warData.filmingCurDay) {
                    if (!this.mindDialog || this.mindDialog === null) {
                        this.mindDialog = fgui.WarMovie.ShwoMinDialog.createInstance();
                        this.addChild(this.mindDialog);
                        this.mindDialog.setXY(0, 0);
                    }
                    this.mindDialog.setData(Game.config.msg.getConfig(Game.moduleModel.warData.moveData.evaluationCon).notice);
                }
                this.curTween = null;
                if (Game.moduleModel.warData.filmingCurDay > 0 && Game.moduleModel.warData.filmingCurDay <= Game.moduleModel.warData.filmingMaxDay) {
                    this.m_filmcurrent.text =
                        format(this.dayCurTip, Game.moduleModel.warData.filmingCurDay, formatNumberUnit(Game.moduleModel.warData.moveData.runDays[Game.moduleModel.warData.filmingCurDay - 1]));
                    var lastDay = Game.moduleModel.warData.filmingMaxDay - Game.moduleModel.warData.filmingCurDay;
                    this.m_filmTime.text = format(this.dayLeftTip, lastDay);
                    this.m_filmTotal.text = format(TEXT.TotalFilm, formatNumberUnit(Game.moduleModel.warData.filmingTotal));
                    this.m_progressList.numItems = Game.moduleModel.warData.filmingCurDay;
                    this.m_progressList.scrollToView(Game.moduleModel.warData.filmingCurDay - 1);
                }
                else if (Game.moduleModel.warData.filmingCurDay === Game.moduleModel.warData.filmingMaxDay + 1) {
                    this.moduleWindow.closeSelf();
                    Game.moduleModel.warData.setBattleOver(function () {
                        _this.moduleMain.conent.checkStatus();
                    });
                }
            };
            // 单个柱状图赋值
            WarFilmShangYing.prototype.initProgressItem = function (index, obj) {
                var item = obj;
                item.max = Game.moduleModel.warData.filmingMaxCur;
                if (index + 1 === Game.moduleModel.warData.filmingCurDay) {
                    item.value = 0;
                    if (this.curTween && this.curTween !== null) {
                        this.curTween.complete();
                    }
                    this.curTween = laya.utils.Tween.to(item, { value: Game.moduleModel.warData.moveData.runDays[index] }, Game.moduleModel.warData.movieHistogramTime);
                }
                else {
                    item.value = Game.moduleModel.warData.moveData.runDays[index];
                }
            };
            // 设置观众
            WarFilmShangYing.prototype.setGuanzhong = function () {
                this.guanzhongList = new Array();
                var expected = new Array();
                var isNullExpected = true;
                for (var i = 0; i < 3; i++) {
                    if (Game.moduleModel.warData.moveData.expected[i] > 0) {
                        isNullExpected = false;
                    }
                }
                var haveGetExpect = 0;
                for (var i = 0; i < 3; i++) {
                    if (isNullExpected) {
                        if (i < 2) {
                            haveGetExpect = Random.rangeBoth(haveGetExpect, 10);
                        }
                        else {
                            haveGetExpect = 10 - haveGetExpect;
                        }
                    }
                    else {
                        haveGetExpect = Game.moduleModel.warData.moveData.expected[i];
                    }
                    expected.push(haveGetExpect);
                }
                for (var i = 0; i < 10; i++) {
                    if (expected[0] > 0) {
                        this.guanzhongList.push(0);
                        expected[0] -= 10;
                    }
                    else if (expected[1] > 0) {
                        this.guanzhongList.push(1);
                        expected[1] -= 10;
                    }
                    else if (expected[2] > 0) {
                        this.guanzhongList.push(2);
                    }
                }
                if (this.guanzhongList.length > 0) {
                    Game.moduleModel.warData.guanzhongMax = [0, 0, 0];
                    for (var i = 0; i < this.guanzhongList.length; i++) {
                        if (this.guanzhongList[i] === 0) {
                            Game.moduleModel.warData.guanzhongMax[0]++;
                        }
                        else if (this.guanzhongList[i] === 0) {
                            Game.moduleModel.warData.guanzhongMax[1]++;
                        }
                        else {
                            Game.moduleModel.warData.guanzhongMax[2]++;
                        }
                    }
                    this.guanzhongList = this.sortRandomArr(this.guanzhongList);
                }
            };
            // 随机排序
            WarFilmShangYing.prototype.sortRandomArr = function (arr) {
                var i = arr.length;
                while (i) {
                    var j = Math.floor(Math.random() * i--);
                    _a = [arr[i], arr[j]], arr[j] = _a[0], arr[i] = _a[1];
                }
                return arr;
                var _a;
            };
            // 期待值不同，显示不同的流行推广情况
            WarFilmShangYing.prototype.showLiuxing = function () {
                var _this = this;
                var configs = Game.config.movieExpect.getConfigWithExpect(Game.moduleModel.warData.moveData.mExpected);
                var indexOf = configs.pic;
                if (indexOf >= 0) {
                    switch (indexOf) {
                        case 0:
                            Game.sound.playSound(SoundKey.MM24_NiceScore1);
                            break;
                        case 1:
                            Game.sound.playSound(SoundKey.MM25_NiceScore2);
                            break;
                        case 2:
                            Game.sound.playSound(SoundKey.MM26_NiceScore3);
                            break;
                        case 3:
                            Game.sound.playSound(SoundKey.MM33_NiceScore4);
                            break;
                        default:
                            Game.sound.playSound(SoundKey.MM33_NiceScore4);
                            break;
                    }
                    if (!this.liuxing || this.liuxing === null) {
                        this.liuxing = fgui.WarMovie.WarFilmLiuxing.createInstance();
                        this.liuxing.setSize(fairygui.GRoot.inst.width, fairygui.GRoot.inst.height);
                        fairygui.GRoot.inst.addChild(this.liuxing);
                    }
                    this.liuxing.m_tip.text = format(configs.pic_word, Game.moduleModel.warData.moveData.name);
                    this.liuxing.m_title.text = format(configs.pic_word, Game.moduleModel.warData.moveData.name);
                    this.liuxing.m_title2.text = format(configs.pic_word, Game.moduleModel.warData.moveData.name);
                    this.liuxing.m_icon.icon = Game.config.avatar.getConfig(Game.moduleModel.warData.moveStory.poster_name).iconUrl;
                    this.liuxing.m_c1.setSelectedIndex(indexOf);
                    this.liuxingTimeOutNum = setTimeout(function () { _this.liuxing.visible = false; }, 3000);
                    this.liuxing.onClick(this, function () {
                        _this.liuxing.visible = false;
                        clearTimeout(_this.liuxingTimeOutNum);
                    });
                }
                else {
                    if (!this.mindDialog || this.mindDialog === null) {
                        this.mindDialog = fgui.WarMovie.ShwoMinDialog.createInstance();
                        this.addChild(this.mindDialog);
                        this.mindDialog.setXY(0, 0);
                    }
                    this.mindDialog.setData(format(configs.pic_word, Game.moduleModel.warData.moveData.name));
                }
            };
            // 刷新观众列表
            WarFilmShangYing.prototype.onShowGuanzhongList = function () {
                this.curGZindex++;
                if (this.curGZindex < 11) {
                    this.m_guanzhongList.numItems = this.curGZindex;
                }
            };
            // 观众item
            WarFilmShangYing.prototype.initGuanzhongItem = function (index, obj) {
                if (index + 1 === this.curGZindex) {
                    var item = obj;
                    item.m_face0.alpha = 0;
                    item.m_face1.alpha = 0;
                    item.m_face2.alpha = 0;
                    item.m_face3.alpha = 0;
                    item.m_face4.alpha = 0;
                    var conf = Game.config.dialogue.getConfig(Random.rangeBoth(1, 25));
                    item.m_sex.setSelectedIndex(this.guanzhongList[index]);
                    item.m_phiz.setSelectedIndex(conf.face - 1);
                    item.m_tip.text = conf.content;
                    item.m_tip2.text = conf.content;
                    if (index < 5) {
                        item.m_c1.setSelectedIndex(0);
                    }
                    else {
                        item.m_c1.setSelectedIndex(1);
                    }
                    item.m_t0.play(laya.utils.Handler.create(this, this.onShowGuanzhongList), 1);
                    Game.moduleModel.warData.guanzhongList.push(conf.face);
                }
            };
            return WarFilmShangYing;
        }(WarMovie.WarFilmShangYingStruct));
        WarMovie.WarFilmShangYing = WarFilmShangYing;
    })(WarMovie = fgui.WarMovie || (fgui.WarMovie = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=WarFilmShangYing.js.map