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
        var WarFilmContinue = /** @class */ (function (_super) {
            __extends(WarFilmContinue, _super);
            function WarFilmContinue() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            WarFilmContinue.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                // 关闭按钮
                this.onClick(this, this.onClickBtn);
            };
            // 点击，弹出持续收益详情界面
            WarFilmContinue.prototype.onClickBtn = function () {
                Game.moduleModel.task.seeMovieRewardNum = 1;
                Game.menu.open(MenuId.WarContinue, [this.incomeData]);
                // if (!this.homeWin || this.homeWin === null)
                // {
                // 	this.homeWin = Game.menu.getMenuCtl(MenuId.Home).moduleWindow as Games.HomeWindow;
                // }
                // if (this.warContinueUI == null)
                // {
                // 	this.warContinueUI = fgui.WarMovie.WarContinuousIncome.createInstance();
                // 	this.homeWin.conent.addChild(this.warContinueUI);
                // 	this.warContinueUI.setSize(Games.MenuLayer.root.width, Games.MenuLayer.root.height);
                // }
                // this.warContinueUI.m_fxEffectMovieEarnings.m_FILMING.play(null, -1);
                // this.homeWin.conent.setChildIndex(this.warContinueUI, this.homeWin.conent.numChildren - 1);
                // this.warContinueUI.setData(this.indexOf, this.subTime);
                // if (this.subTime > 0)
                // {
                // 	this.warContinueUI.onUpdateTime(this.subTime);
                // }
                // else
                // {
                // 	this.warContinueUI.onIncomeOver();
                // }
                // this.warContinueUI.visible = true;
            };
            WarFilmContinue.prototype.setData = function (indexOf) {
                this.incomeData = Game.moduleModel.warData.endIncomeList[indexOf];
                var moveStory = Game.config.story.getConfig(this.incomeData.moveData.movieId);
                this.m_filmIcon.icon = Game.config.avatar.getConfig(moveStory.poster_name).iconUrl;
                if (this.incomeData.remainingTime <= 0) {
                    this.m_t0.stop();
                }
                else {
                    this.m_t0.play(null, -1);
                }
            };
            return WarFilmContinue;
        }(MainUI.WarFilmContinueStruct));
        MainUI.WarFilmContinue = WarFilmContinue;
    })(MainUI = fgui.MainUI || (fgui.MainUI = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=WarFilmContinue.js.map