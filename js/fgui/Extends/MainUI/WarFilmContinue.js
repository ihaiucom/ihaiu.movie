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
                this.warContinueUI = null;
                // 关闭按钮
                this.onClick(this, this.onClickBtn);
            };
            WarFilmContinue.prototype.onWindowHide = function () {
                Laya.timer.clear(this, this.onUpdateTime);
                this.visible = false;
            };
            // 点击，弹出持续收益详情界面
            WarFilmContinue.prototype.onClickBtn = function () {
                Game.moduleModel.task.seeMovieRewardNum = 1;
                if (!this.homeWin || this.homeWin === null) {
                    this.homeWin = Game.menu.getMenuCtl(MenuId.Home).moduleWindow;
                }
                if (this.warContinueUI == null) {
                    this.warContinueUI = fgui.WarMovie.WarContinuousIncome.createInstance();
                    this.homeWin.conent.addChild(this.warContinueUI);
                    this.warContinueUI.setXY(0, 0);
                }
                this.homeWin.conent.setChildIndex(this.warContinueUI, this.homeWin.conent.numChildren - 1);
                this.warContinueUI.setData(this.indexOf, this.subTime);
                if (this.subTime > 0) {
                    this.warContinueUI.onUpdateTime(this.subTime);
                }
                else {
                    this.warContinueUI.onIncomeOver();
                }
                this.warContinueUI.visible = true;
            };
            WarFilmContinue.prototype.setData = function (indexOf) {
                this.indexOf = indexOf;
                this.m_t0.play(null, -1);
                this.visible = true;
                var curData = Game.moduleModel.warData.movieDataList[indexOf];
                var moveStory = Game.config.story.getConfig(curData.movieId);
                this.m_filmIcon.icon = Game.config.avatar.getConfig(moveStory.poster_name).iconUrl;
                this.onUpdateTime(curData.startTime);
                Laya.timer.loop(1000, this, this.onUpdateTime, [curData.startTime], true, true);
            };
            WarFilmContinue.prototype.onUpdateTime = function (val) {
                this.subTime = 7200 - Game.time.getSubSecondsPre(val);
                if (this.subTime > 0) {
                    if (!this.m_t0.playing) {
                        this.m_t0.play(null, -1);
                    }
                    if (this.warContinueUI !== null && this.warContinueUI.visible) {
                        this.warContinueUI.onUpdateTime(this.subTime);
                    }
                    if (this.showUpdateCallBack && this.showUpdateCallBack !== null) {
                        this.showUpdateCallBack(this.subTime);
                    }
                }
                else {
                    if (this.subTime < 0) {
                        this.subTime = 0;
                    }
                    Laya.timer.clear(this, this.onUpdateTime);
                    if (this.warContinueUI !== null && this.warContinueUI.visible) {
                        this.warContinueUI.onIncomeOver();
                    }
                    if (this.showUpdateCallBack && this.showUpdateCallBack !== null) {
                        this.showUpdateCallBack(0);
                    }
                    this.m_t0.stop();
                }
            };
            WarFilmContinue.prototype.onGetCallBack = function (showUpdateCallBack) {
                this.showUpdateCallBack = showUpdateCallBack;
                showUpdateCallBack(this.subTime);
            };
            return WarFilmContinue;
        }(MainUI.WarFilmContinueStruct));
        MainUI.WarFilmContinue = WarFilmContinue;
    })(MainUI = fgui.MainUI || (fgui.MainUI = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=WarFilmContinue.js.map