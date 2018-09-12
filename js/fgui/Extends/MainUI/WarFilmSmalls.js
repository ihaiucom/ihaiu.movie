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
    var MainUI;
    (function (MainUI) {
        var WarFilmSmalls = /** @class */ (function (_super) {
            __extends(WarFilmSmalls, _super);
            function WarFilmSmalls() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            WarFilmSmalls.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_progressList.itemRenderer = Laya.Handler.create(this, this.initItem, null, false);
                // 关闭按钮
                this.onClick(this, this.onClickBtn);
            };
            WarFilmSmalls.prototype.onClickBtn = function () {
                if (this.curTween && this.curTween !== null) {
                    this.curTween.complete();
                }
                this.onCloseSelf();
                Game.menu.open(MenuId.War);
            };
            WarFilmSmalls.prototype.onCloseSelf = function () {
                if (this.visible) {
                    this.clearData();
                    Game.event.remove(GameEventKey.GameEventKey_UpdateFilmingStatus, this.updateData, this);
                    this.visible = false;
                }
            };
            WarFilmSmalls.prototype.onWindowShow = function () {
                this.setData();
                this.visible = true;
                this.updateData();
                Game.event.add(GameEventKey.GameEventKey_UpdateFilmingStatus, this.updateData, this);
            };
            WarFilmSmalls.prototype.onWindowHide = function () {
            };
            WarFilmSmalls.prototype.setData = function () {
                this.dayLeftTip = Game.config.msg.getConfig(MsgKey.movie_remaining_days).notice;
                var moveData = Game.moduleModel.warData.moveData;
                this.m_filmName.text = moveData.name;
            };
            WarFilmSmalls.prototype.clearData = function () {
                this.m_filmName.text = "";
                // 已经放映过的总票房
                this.m_total.text = "";
                // 当天增加量
                this.m_addVal.text = "";
                this.m_dayLeft.text = "";
                // 放映到第几天了
                this.m_progressList.numItems = 0;
            };
            // 单个柱状图赋值
            WarFilmSmalls.prototype.initItem = function (index, obj) {
                var item = obj;
                item.max = Game.moduleModel.warData.filmingMaxCur;
                if (index + 1 === Game.moduleModel.warData.filmingCurDay) {
                    item.value = 0;
                    if (this.curTween && this.curTween !== null) {
                        this.curTween.complete();
                    }
                    this.curTween = laya.utils.Tween.to(item, { value: Game.moduleModel.warData.moveData.runDays[index] }, Game.moduleModel.warData.movieHistogramTime, Laya.Ease.linearIn);
                }
                else {
                    item.value = Game.moduleModel.warData.moveData.runDays[index];
                }
            };
            WarFilmSmalls.prototype.updateData = function () {
                if (Game.moduleModel.warData.filmingCurDay > 0 && Game.moduleModel.warData.filmingCurDay <= Game.moduleModel.warData.filmingMaxDay) {
                    // 已经放映过的总票房
                    this.m_total.text = formatNumberUnit(Game.moduleModel.warData.filmingTotal);
                    // 当天增加量
                    this.m_addVal.text = format("+{0}", formatNumberUnit(Game.moduleModel.warData.moveData.runDays[Game.moduleModel.warData.filmingCurDay - 1]));
                    var lastDay = Game.moduleModel.warData.filmingMaxDay - Game.moduleModel.warData.filmingCurDay;
                    this.m_dayLeft.text = format(this.dayLeftTip, lastDay);
                    // 放映到第几天了
                    this.m_progressList.numItems = Game.moduleModel.warData.filmingCurDay;
                    this.m_progressList.scrollToView(Game.moduleModel.warData.filmingCurDay - 1);
                }
                else if (Game.moduleModel.warData.filmingCurDay === Game.moduleModel.warData.filmingMaxDay + 1) {
                    this.onCloseSelf();
                    Game.moduleModel.warData.setBattleOver(function () {
                        Game.menu.open(MenuId.War);
                    });
                }
            };
            return WarFilmSmalls;
        }(MainUI.WarFilmSmallsStruct));
        MainUI.WarFilmSmalls = WarFilmSmalls;
    })(MainUI = fgui.MainUI || (fgui.MainUI = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=WarFilmSmalls.js.map