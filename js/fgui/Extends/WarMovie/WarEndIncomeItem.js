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
            WarEndIncomeItem.prototype.onWindowHide = function () {
                Game.moduleModel.warData.sUpdateEndIncomeTime.remove(this.updateEndIncomeTime, this);
            };
            WarEndIncomeItem.prototype.onWindowShow = function () {
                Game.moduleModel.warData.sUpdateEndIncomeTime.add(this.updateEndIncomeTime, this);
            };
            WarEndIncomeItem.prototype.updateEndIncomeTime = function () {
                this.updateTime(this.curData.remainingTime);
            };
            WarEndIncomeItem.prototype.onClickClose = function () {
                var _this = this;
                if (this.curShowBtnIndexOf === 1) {
                    Game.moduleModel.warData.reqDeleteMovie(this.curData.uuid);
                }
                else {
                    Game.system.confirmMsg(MsgKey.movie_stop_tips, [Game.config.global.getConfig(GlobalKey.Movie_Stop_Tips).value], "", this, function () {
                        Game.moduleModel.warData.reqDeleteMovie(_this.curData.uuid);
                    }, //ok
                    function () { }, //no
                    TEXT.ButtonOk, TEXT.ButtonCannel, false);
                }
            };
            WarEndIncomeItem.prototype.setData = function (data, index) {
                this.indexOf = index;
                this.curShowBtnIndexOf = 0;
                this.curData = data;
                this.m_filmName.text = this.curData.moveData.name;
                var moveStory = Game.config.story.getConfig(this.curData.moveData.movieId);
                this.m_icon.icon = Game.config.avatar.getConfig(moveStory.poster_name).iconUrl;
                this.timeTip = this.curData.moveData.totalBoxOffice / (Game.config.global.getConfig(GlobalKey.Extension_box_office_con).value / 100) * (this.curData.moveData.attentionValue * Game.config.global.getConfig(GlobalKey.Extension_con).value / 100 + 1) * 60;
                this.updateTime(this.curData.remainingTime);
            };
            WarEndIncomeItem.prototype.updateTime = function (val) {
                this.m_timeLeft.text = Games.TimeHelper.TimeFormat3(val);
                if (val > 0) {
                    if (this.curShowBtnIndexOf === 1) {
                        this.curShowBtnIndexOf = 0;
                    }
                    this.m_shouyipingjia.text = format(TEXT.gainEvaluation, formatNumberUnit(this.timeTip));
                    this.m_c1.setSelectedIndex(this.curShowBtnIndexOf);
                }
                else {
                    if (this.curShowBtnIndexOf === 0) {
                        this.curShowBtnIndexOf = 1;
                    }
                    // let lastVal = 0;
                    // let lastToNow = Math.floor(Game.time.getSubSecondsPre(this.curData.lastTime) / 60);
                    // let startToNow = Math.floor(Game.time.getSubSecondsPre(this.curData.startTime) / 60);
                    // let last2 = 120 - (startToNow - lastToNow) + this.curData.runDays.length * Game.moduleModel.warData.movieHistogramTime * 0.001;
                    // lastVal = this.timeTip * last2 + this.curData.contineTransceiver;
                    // if (lastVal < 0) lastVal = 0;
                    // lastVal = toInt(lastVal.toString());
                    this.m_shouyipingjia.text = format(TEXT.gainEvaluationOver, formatNumberUnit(this.curData.incomeValue, 1));
                    this.m_c1.setSelectedIndex(this.curShowBtnIndexOf);
                }
            };
            return WarEndIncomeItem;
        }(WarMovie.WarEndIncomeItemStruct));
        WarMovie.WarEndIncomeItem = WarEndIncomeItem;
    })(WarMovie = fgui.WarMovie || (fgui.WarMovie = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=WarEndIncomeItem.js.map