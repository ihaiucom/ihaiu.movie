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
        var WarEndIncomeItem = /** @class */ (function (_super) {
            __extends(WarEndIncomeItem, _super);
            function WarEndIncomeItem() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.curShowBtnIndexOf = 0;
                return _this;
            }
            WarEndIncomeItem.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.mainModels = Game.menu.getMenuCtl(MenuId.Home).moduleWindow;
                this.m_timeLeftTip.text = TEXT.TimeLeftTip;
                // 关闭
                this.m_okBtn.onClick(this, this.onClickClose);
                this.m_endBtn.onClick(this, this.onClickClose);
            };
            WarEndIncomeItem.prototype.onClickClose = function () {
                var _this = this;
                if (this.curShowBtnIndexOf === 1) {
                    Game.moduleModel.warData.reqDeleteMovie(this.curData.uuid, function (arg) {
                        Game.menu.getMenuCtl(MenuId.Home).moduleWindow.conent.onCreateFilmContinue();
                        _this.callBackToDel();
                    });
                }
                else {
                    Game.system.confirmMsg(MsgKey.movie_stop_tips, [Game.config.global.getConfig(GlobalKey.Movie_Stop_Tips).value], "", this, function () {
                        Game.moduleModel.warData.reqDeleteMovie(_this.curData.uuid, function (arg) {
                            Game.menu.getMenuCtl(MenuId.Home).moduleWindow.conent.onCreateFilmContinue();
                            _this.callBackToDel();
                        });
                    }, //ok
                    function () { }, //no
                    TEXT.ButtonOk, TEXT.ButtonCannel, false);
                }
            };
            WarEndIncomeItem.prototype.setData = function (data, index, callBackToDel) {
                var _this = this;
                this.curShowBtnIndexOf = 0;
                this.callBackToDel = callBackToDel;
                this.curData = data;
                this.m_filmName.text = data.name;
                var moveStory = Game.config.story.getConfig(data.movieId);
                this.m_icon.icon = Game.config.avatar.getConfig(moveStory.poster_name).iconUrl;
                this.timeTip = data.totalBoxOffice / 30 * (data.attentionValue * 0.1 + 1);
                this.m_shouyipingjia.text = format(Game.config.msg.getConfig(MsgKey.movie_off_line_gain_evaluation).notice, this.timeTip.toFixed(0));
                this.mainModels.conent.filmContinueBtnList[index].onGetCallBack(function (arg) { _this.updateTime(arg); });
            };
            WarEndIncomeItem.prototype.updateTime = function (val) {
                this.m_timeLeft.text = Games.TimeHelper.TimeFormat3(val);
                if (val > 0) {
                    if (this.curShowBtnIndexOf === 1) {
                        this.curShowBtnIndexOf = 0;
                        this.m_c1.setSelectedIndex(this.curShowBtnIndexOf);
                        this.m_shouyipingjia.text = format(TEXT.gainEvaluation, this.timeTip.toFixed(0));
                    }
                }
                else {
                    if (this.curShowBtnIndexOf === 0) {
                        this.curShowBtnIndexOf = 1;
                        this.m_c1.setSelectedIndex(this.curShowBtnIndexOf);
                        var lastVal = 0;
                        var lastToNow = Math.floor(Game.time.getSubSecondsPre(this.curData.lastTime) / 60);
                        var startToNow = Math.floor(Game.time.getSubSecondsPre(this.curData.startTime) / 60);
                        var last2 = 120 - (startToNow - lastToNow);
                        var attentionval = this.curData.totalBoxOffice / 30 * (this.curData.attentionValue * 0.1 + 1);
                        lastVal = attentionval * last2 + this.curData.contineTransceiver;
                        if (lastVal < 0)
                            lastVal = 0;
                        lastVal = toInt(lastVal.toString());
                        this.m_shouyipingjia.text = format(TEXT.gainEvaluationOver, formatNumberUnit(lastVal, 1));
                    }
                }
            };
            return WarEndIncomeItem;
        }(WarMovie.WarEndIncomeItemStruct));
        WarMovie.WarEndIncomeItem = WarEndIncomeItem;
    })(WarMovie = fgui.WarMovie || (fgui.WarMovie = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=WarEndIncomeItem.js.map