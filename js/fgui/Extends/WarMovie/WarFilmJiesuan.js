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
        var WarFilmJiesuan = /** @class */ (function (_super) {
            __extends(WarFilmJiesuan, _super);
            function WarFilmJiesuan() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.canClose = false;
                _this.totalNum = 9932;
                _this.curTotalNum = 0;
                return _this;
            }
            WarFilmJiesuan.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                // 参演艺人列表初始化
                this.m_zhuyanList.itemRenderer = Laya.Handler.create(this, this.initYRListItem, null, false);
                // 掉落
                this.m_rewardList.itemRenderer = Laya.Handler.create(this, this.initRewardListItem, null, false);
                // 分数
                this.m_totalList.itemRenderer = Laya.Handler.create(this, this.initTotalListItem, null, false);
                // 关闭按钮
                this.onClick(this, this.onClickOkBtn);
            };
            WarFilmJiesuan.prototype.onClickOkBtn = function () {
                if (this.canClose) {
                    this.moduleWindow.closeSelf();
                    this.moduleMain.conent.filmOverTip(EMovieState.rewardTip);
                }
            };
            WarFilmJiesuan.prototype.onWindowShow = function () {
                this.setData();
            };
            WarFilmJiesuan.prototype.onWindowHide = function () {
                this.m_fx.m_t0.stop();
                this.m_fx.visible = false;
            };
            WarFilmJiesuan.prototype.setData = function () {
                this.curVal = "0";
                this.m_totalList.numItems = this.curVal.length;
                this.canClose = false;
                this.moduleMain = this.moduleWindow.mainWindow;
                this.isPutPanel = true;
                // 服务器数据
                var data = Game.moduleModel.warData.moveJieSuanData;
                if (!data) {
                    data = Game.moduleModel.warData.moveData;
                }
                this.curData = data;
                // 剧本数据（配置表）
                var confData = Game.moduleModel.warData.moveStory;
                this.m_totalProgress.value = 0;
                this.m_costProgress.value = 0;
                this.m_icon.alpha = 0;
                this.m_filmIcon.setData(confData);
                if (data.boxOfficeEvaluation > 0) {
                    var sellIcon = Game.config.movieDrop.getSellIcon(data.boxOfficeEvaluation);
                    this.m_icon.icon = Game.config.avatar.getConfig(sellIcon).iconUrl;
                    this.m_tip5.text = format(Game.config.msg.getConfig(MsgKey.movie_drop_tips).notice, Game.config.movieDrop.getSellTip(sellIcon).gain_name);
                }
                this.m_filmName.text = data.name;
                var types = Game.config.movieShootType.getConfigList();
                for (var i = 0; i < types.length; i++) {
                    if (types[i].id == data.type) {
                        this.m_filmType.text = Game.moduleModel.warData.moveStory.filmType + "/" + types[i].getName;
                        break;
                    }
                }
                this.m_rewardValue.text = "";
                this.m_filmTime.text = format(TEXT.FilmLongTime, confData.length);
                this.m_koubei.text = format(TEXT.FilmKouBei, data.publicPraise.toFixed(0));
                this.m_starProgress.value = data.mediaCommend * 0.1;
                this.m_auther.text = User.info.name;
                this.m_filmTip.text = "";
                this.m_tip5.text = "";
                this.m_rewardList.numItems = 0;
                this.m_zhuyanList.numItems = Game.moduleModel.warData.getRealYRList.count;
                this.curTotalNum = 0;
                this.totalNum = data.totalBoxOffice;
                Laya.timer.loop(10, this, this.showTotalNum);
                switch (this.curData.boxOfficeEvaluation) {
                    case Proto.SE.EBoxOfficeEvaluation.normal:
                        {
                            Game.sound.playSound(SoundKey.MM27_TicketsOrdinary);
                        }
                        break;
                    case Proto.SE.EBoxOfficeEvaluation.good:
                        {
                            Game.sound.playSound(SoundKey.MM28_TicketsGood);
                        }
                        break;
                    case Proto.SE.EBoxOfficeEvaluation.big_sell:
                    case Proto.SE.EBoxOfficeEvaluation.great_sell:
                    case Proto.SE.EBoxOfficeEvaluation.myth_sell:
                    case Proto.SE.EBoxOfficeEvaluation.marvel_sell:
                        {
                            Game.sound.playSound(SoundKey.MM29_TicketsGreat);
                        }
                        break;
                }
            };
            // 单个艺人item赋值
            WarFilmJiesuan.prototype.initYRListItem = function (index, obj) {
                var item = obj;
                item.setIcon(Game.config.avatar.getConfig(Game.moduleModel.warData.getRealYRList.getValue(index).config.avatar).bodyIconUrl);
            };
            WarFilmJiesuan.prototype.initRewardListItem = function (index, obj) {
                var item = obj;
                item.setData(index);
            };
            WarFilmJiesuan.prototype.showTotalNum = function () {
                if (this.curTotalNum < this.totalNum) {
                    this.curTotalNum += this.totalNum / 50;
                    if (this.curTotalNum >= this.totalNum) {
                        this.curTotalNum = this.totalNum;
                        var costVal = 0;
                        var totVal = 0;
                        if (this.curData.totalMovieCost < this.curData.totalBoxOffice) {
                            if (this.curData.totalBoxOffice === 0) {
                                costVal = this.curData.totalMovieCost / 100 * 100;
                            }
                            else {
                                costVal = this.curData.totalMovieCost / this.curData.totalBoxOffice * 100;
                            }
                            totVal = 100;
                        }
                        else {
                            costVal = 100;
                            if (this.curData.totalMovieCost === 0) {
                                totVal = this.curData.totalBoxOffice / 100 * 100;
                            }
                            else {
                                totVal = this.curData.totalBoxOffice / this.curData.totalMovieCost * 100;
                            }
                        }
                        this.m_totalProgress.value = 0;
                        laya.utils.Tween.to(this.m_totalProgress, { value: totVal }, 1000, Laya.Ease.linearIn, null);
                        this.m_costProgress.value = 0;
                        laya.utils.Tween.to(this.m_costProgress, { value: costVal }, 1000, Laya.Ease.linearIn, Handler.create(this, this.porgressOver));
                    }
                    this.curVal = formatNumberUnit(this.curTotalNum, 1).toString();
                    this.m_totalList.numItems = this.curVal.length;
                }
            };
            WarFilmJiesuan.prototype.porgressOver = function () {
                var _this = this;
                this.m_t0.play(laya.utils.Handler.create(this, function () {
                    var mainTask = Game.moduleModel.task.getCurrentMainTask();
                    if (mainTask && mainTask.isFinished) {
                        Game.guide.checkPlayStoryByType(Games.StoryTriggerType.FristMovieUp, mainTask.id);
                    }
                    _this.m_fx.m_t0.play(null, 1);
                    _this.canClose = true;
                }), 1);
                if (this.curData.totalBoxOffice > this.curData.totalMovieCost) {
                    var result = (this.curData.totalBoxOffice / this.curData.totalMovieCost) * 100;
                    this.m_rewardValue.text = format(TEXT.filmJiesuanWin, result.toFixed(1));
                    this.m_colorCon.setSelectedIndex(0);
                }
                else {
                    var result = (this.curData.totalMovieCost / this.curData.totalBoxOffice) * 100;
                    this.m_rewardValue.text = format(TEXT.filmJiesuanFail, result.toFixed(1));
                    this.m_colorCon.setSelectedIndex(1);
                }
                var dropCount = Game.moduleModel.warData.dropList.length;
                this.m_rewardList.numItems = dropCount;
                if (dropCount > 0) {
                    this.m_tip5.text = TEXT.filmJiesuanRewardTip;
                }
                else {
                    this.m_tip5.text = "";
                }
            };
            // 总分数
            WarFilmJiesuan.prototype.initTotalListItem = function (index, obj) {
                var item = obj;
                item.setData(this.curVal[index]);
            };
            return WarFilmJiesuan;
        }(WarMovie.WarFilmJiesuanStruct));
        WarMovie.WarFilmJiesuan = WarFilmJiesuan;
    })(WarMovie = fgui.WarMovie || (fgui.WarMovie = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=WarFilmJiesuan.js.map