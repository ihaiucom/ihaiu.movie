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
        var WarMain = /** @class */ (function (_super) {
            __extends(WarMain, _super);
            function WarMain() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                // 拍摄窗口是否已经打开
                _this.filmingRun = false;
                return _this;
            }
            WarMain.prototype.onWindowShow = function () {
                if (User.isNineToFiftyFive && !User.isTenTime) {
                    Game.system.toastText(TEXT.NineToFiftyFiveTip);
                    this.moduleWindow.menuBack();
                }
                else {
                    this.checkStatus();
                    Game.protoFailEvent.add(ProtoEventKey.movie_MakeFilm, this.onProtoFail, this);
                    Game.event.add(GameEventKey.GameEventKey_TimeLimitRemind, this.GameEventKey_TimeLimitRemind, this);
                    Game.event.dispatch(GameEventKey.PopupPanel);
                }
            };
            WarMain.prototype.onWindowHide = function () {
                Game.protoFailEvent.remove(ProtoEventKey.movie_MakeFilm, this.onProtoFail, this);
                Game.event.remove(GameEventKey.GameEventKey_TimeLimitRemind, this.GameEventKey_TimeLimitRemind, this);
            };
            WarMain.prototype.onProtoFail = function (protoKey) {
                this.moduleWindow.menuBack();
            };
            WarMain.prototype.GameEventKey_TimeLimitRemind = function (timeLimit) {
                switch (timeLimit) {
                    case Games.TimeLimitType.NineToFiftyFive:
                        {
                            if (User.isNineToFiftyFive) {
                                Game.system.toastText(TEXT.NineToFiftyFiveTip);
                                this.moduleWindow.menuBack();
                            }
                        }
                        break;
                }
            };
            // 游戏状态检查
            WarMain.prototype.checkStatus = function () {
                if (Game.moduleModel.warData.moveJieSuanData && Game.moduleModel.warData.moveJieSuanData !== null) {
                    // 显示持续收益按钮
                    Game.menu.getMenuCtl(MenuId.Home).moduleWindow.conent.onCreateFilmContinue();
                    this.filmOverTip(EMovieState.overMarket);
                }
                else if (Game.moduleModel.warData.moveData && Game.moduleModel.warData.moveData !== null) {
                    this.subWindowToMain();
                }
                else if (Game.moduleModel.warData.movieDataList.length >= 5) {
                    this.moduleWindow.openSubwindowByIndex(Games.WarSubwindowType.EndIncome, true);
                }
                else {
                    // 不存在状态信息，请求拍摄
                    this.shootingConfirmation();
                }
            };
            // 判断是否请求拍摄
            WarMain.prototype.shootingConfirmation = function () {
                if (!Game.moduleModel.street.canSign) {
                    if (Game.moduleModel.warData.realLicenceNum > 0) {
                        // 正常拍摄确认界面
                        this.moduleWindow.openSubwindowByIndex(Games.WarSubwindowType.ShootingConfirmation, true);
                    }
                    else {
                        if (Game.moduleModel.warData.licenceData.dailyCount >= Game.config.global.getConfig(GlobalKey.Licence_Restore_Max).value) {
                            // 许可证领完
                            this.moduleWindow.openSubwindowByIndex(Games.WarSubwindowType.XukeOver, true);
                        }
                        else {
                            // 许可证回复
                            this.moduleWindow.openSubwindowByIndex(Games.WarSubwindowType.XukeHuifu, true);
                        }
                    }
                }
                else {
                    Game.system.toastText(TEXT.CinemaSignTip);
                    this.moduleWindow.menuBack();
                }
            };
            // 电影结算后的后续界面提示信息
            WarMain.prototype.filmOverTip = function (status) {
                var _this = this;
                switch (status) {
                    case EMovieState.overMarket:
                        {
                            //下映提示
                            this.moduleWindow.openSubwindowByIndex(Games.WarSubwindowType.overMarket, true);
                        }
                        break;
                    case EMovieState.Jiesuan:
                        {
                            //结算分享界面
                            this.moduleWindow.openSubwindowByIndex(Games.WarSubwindowType.Jiesuan, true);
                        }
                        break;
                    case EMovieState.rewardTip:
                        {
                            //奖励物品提示
                            Game.sound.playSound(SoundKey.MM30_Settlements);
                            var dropList = Game.moduleModel.warData.dropList;
                            var dtList = new Array();
                            var fansVal_1 = 0;
                            for (var ll = 0; ll < dropList.length; ll++) {
                                var dtItem = new DTItemNum();
                                dtItem.itemId = dropList[ll].itemId;
                                dtItem.itemNum = dropList[ll].amount;
                                if (dropList[ll].itemId === EItemId.fans) {
                                    fansVal_1 += dropList[ll].amount;
                                }
                                dtList.push(dtItem);
                            }
                            this.jiesuanFilmName = Game.moduleModel.warData.moveJieSuanData.name;
                            Game.system.getItemText(dtList, function () {
                                if (fansVal_1 > 0) {
                                    Game.system.addFansText(fansVal_1, Handler.create(_this, _this.showTextFullTip));
                                }
                                else {
                                    _this.showTextFullTip();
                                }
                            }, false);
                            Game.moduleModel.warData.moveJieSuanData = null;
                            this.moduleWindow.menuClose();
                        }
                        break;
                }
            };
            WarMain.prototype.showTextFullTip = function () {
                Game.system.alrtTextFull(format(Game.config.msg.getConfig(MsgKey.movie_off_line_tips).notice, Game.config.global.getConfig(GlobalKey.Popularize_Duration).value), this.jiesuanFilmName);
            };
            // 关闭子窗口 依据状态，判断打开那个窗口
            WarMain.prototype.subWindowToMain = function () {
                // console.log('\x1b[36m%s\x1b[0m', "Game.moduleModel.warData.moveData.state    " + EMovieState[Game.moduleModel.warData.moveData.state] + "  " + Game.moduleModel.warData.moveData.state);
                switch (Game.moduleModel.warData.moveData.state) {
                    case EMovieState.chooseScript:
                        {
                            //选择剧本
                            this.moduleWindow.openSubwindowByIndex(Games.WarSubwindowType.FilmSelect, true);
                        }
                        break;
                    case EMovieState.renameFilm:
                        {
                            //修改剧本名称
                        }
                        break;
                    case EMovieState.currentMarketInf:
                        {
                            //当前市场反馈
                            this.moduleWindow.openSubwindowByIndex(Games.WarSubwindowType.CurrentMarketInf, true);
                        }
                        break;
                    case EMovieState.chooseActor:
                        {
                            //选择艺人
                            this.moduleWindow.openSubwindowByIndex(Games.WarSubwindowType.SelectYiren, true);
                        }
                        break;
                    case EMovieState.costView:
                        {
                            //薪酬计算
                            this.moduleWindow.openSubwindowByIndex(Games.WarSubwindowType.CostView, true);
                        }
                        break;
                    case EMovieState.yRShowView:
                        {
                            //艺人展示
                            this.moduleWindow.openSubwindowByIndex(Games.WarSubwindowType.YRShowView, true);
                        }
                        break;
                    case EMovieState.compatibility:
                        {
                            Game.moduleModel.warData.filmingProgress.value = 0;
                            //艺人对影片的契合度
                            this.moduleWindow.openSubwindowByIndex(Games.WarSubwindowType.Compatibility, true);
                        }
                        break;
                    case EMovieState.filming:
                        {
                            //正在拍摄中
                            if (!this.filmingRun) {
                                Game.moduleModel.warData.filmingProgress.value = 0;
                                this.filmingRun = true;
                                this.moduleWindow.openSubwindowByIndex(Games.WarSubwindowType.Filming, true);
                            }
                            else {
                                this.moduleWindow.warFilmingSubwindow.windowShow();
                            }
                        }
                        break;
                    case EMovieState.chooseType:
                        {
                            //选择类型
                            if (!this.filmingRun) {
                                Game.moduleModel.warData.filmingProgress.value = 0;
                                this.filmingRun = true;
                                this.moduleWindow.openSubwindowByIndex(Games.WarSubwindowType.Filming, true);
                            }
                            else {
                                this.moduleWindow.warFilmingSubwindow.windowShow();
                            }
                        }
                        break;
                    case EMovieState.chooseTip:
                        {
                            //选择后的提示
                            console.error("----不会进入这里---");
                        }
                        break;
                    case EMovieState.propaganda:
                        {
                            //宣传
                            if (!this.filmingRun) {
                                Game.moduleModel.warData.filmingProgress.value = 0;
                                this.filmingRun = true;
                                this.moduleWindow.openSubwindowByIndex(Games.WarSubwindowType.Filming, true);
                            }
                            else {
                                this.moduleWindow.warFilmingSubwindow.windowShow();
                            }
                        }
                        break;
                    case EMovieState.complete:
                        {
                            //杀青
                            if (!this.filmingRun) {
                                Game.moduleModel.warData.filmingProgress.value = 0;
                                this.filmingRun = true;
                                this.moduleWindow.openSubwindowByIndex(Games.WarSubwindowType.Filming, true);
                            }
                            else {
                                this.moduleWindow.warFilmingSubwindow.windowShow();
                            }
                        }
                        break;
                    case EMovieState.actorUpdate:
                        {
                            //艺人熟练度
                            this.moduleWindow.openSubwindowByIndex(Games.WarSubwindowType.proficiency, true);
                        }
                        break;
                    case EMovieState.proficiency:
                        {
                            //杀青对比情况
                            this.moduleWindow.openSubwindowByIndex(Games.WarSubwindowType.FilmSQView, true);
                        }
                        break;
                    case EMovieState.chooseTheater:
                        {
                            //选择院线
                            this.moduleWindow.openSubwindowByIndex(Games.WarSubwindowType.CinemaSelection, true);
                        }
                        break;
                    case EMovieState.noticeFeedBack:
                        {
                            //媒体评价
                            this.moduleWindow.openSubwindowByIndex(Games.WarSubwindowType.NoticeFeedBack, true);
                        }
                        break;
                    case EMovieState.SYPF:
                        {
                            //首映票房
                            this.moduleWindow.openSubwindowByIndex(Games.WarSubwindowType.SYPF, true);
                        }
                        break;
                    case EMovieState.audienceReputation:
                        {
                            //观众口碑
                            this.moduleWindow.openSubwindowByIndex(Games.WarSubwindowType.AudienceReputation, true);
                        }
                        break;
                    case EMovieState.result:
                        {
                            // 开始数据统计
                            // Game.moduleModel.warData.refrushFilmingData();
                            Game.moduleModel.warData.refrushFilmingStatus();
                            //上映结果
                            this.moduleWindow.openSubwindowByIndex(Games.WarSubwindowType.Shangying, true);
                        }
                        break;
                }
            };
            return WarMain;
        }(WarMovie.WarMainStruct));
        WarMovie.WarMain = WarMain;
    })(WarMovie = fgui.WarMovie || (fgui.WarMovie = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=WarMain.js.map