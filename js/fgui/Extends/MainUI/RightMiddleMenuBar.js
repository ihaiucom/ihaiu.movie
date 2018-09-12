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
        var RightMiddleMenuBar = /** @class */ (function (_super) {
            __extends(RightMiddleMenuBar, _super);
            function RightMiddleMenuBar() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.menuButtons = [];
                return _this;
            }
            // 窗口初始化完毕
            RightMiddleMenuBar.prototype.onWindowInited = function () {
                for (var i = 0; i < this.numChildren; i++) {
                    var item = this.getChildAt(i);
                    var ctl = new MainUI.MenuButtonCtl(item, this.moduleWindow.conent);
                    if (ctl.menuButtonData) {
                        var menuConfig = Game.config.menu.getConfig(ctl.menuButtonData.menuId);
                        if (menuConfig)
                            ctl.setMenuConfig(menuConfig);
                    }
                    this.menuButtons.push(ctl);
                }
                for (var i = 0; i < this.menuButtons.length; i++) {
                    if (!Games.MenuWindows.get(this.menuButtons[i].menuId)) {
                        this.menuButtons[i].button.removeFromParent();
                    }
                }
                this.tickOscar = Game.tick.AddTick(1, 0, Handler.create(this, this.UpdateOscarTime, null, false), Handler.create(this, this.OnOscarFinish, null, false));
            };
            RightMiddleMenuBar.prototype.onRefreshUnlock = function () {
                for (var _i = 0, _a = this.menuButtons; _i < _a.length; _i++) {
                    var item = _a[_i];
                    item.refreshUnlock(true);
                }
            };
            RightMiddleMenuBar.prototype.onWindowShow = function () {
                Game.protoOkEvent.add(ProtoEventKey.RankListData, this.UpdateTick, this);
                this.UpdateTick();
            };
            // 窗口隐藏
            RightMiddleMenuBar.prototype.onWindowHide = function () {
                // this.tickOscar.Stop();
                Game.protoOkEvent.remove(ProtoEventKey.RankListData, this.UpdateTick, this);
            };
            RightMiddleMenuBar.prototype.onClickAwards = function () {
            };
            RightMiddleMenuBar.prototype.onClickGoal = function () {
            };
            RightMiddleMenuBar.prototype.UpdateTick = function () {
                if (Game.moduleModel.oscar.IsFinishOscar) {
                    this.tickOscar.SetTargetTimes(Game.moduleModel.oscar.OscarCD);
                    this.tickOscar.Restart();
                }
                else {
                    this.m_awards.m_buttonTime.text = "";
                    if (!Game.menu.isOpened(MenuId.Awards) && Game.moduleModel.oscar.isUnLockOscar && !Game.moduleModel.oscar.IsFinishOscar) {
                        Game.menu.open(MenuId.Awards, Games.OscarSubEnum.OscarShow);
                    }
                }
            };
            // Oscar倒计时刷新
            RightMiddleMenuBar.prototype.UpdateOscarTime = function (time) {
                var strTime = TimeHelper.TimeFormat(time);
                this.m_awards.m_buttonTime.m_time.text = strTime;
            };
            // Oscar 颁奖
            RightMiddleMenuBar.prototype.OnOscarFinish = function () {
                this.tickOscar.Stop();
                this.m_awards.m_buttonTime.text = "";
                if (!Game.menu.isOpened(MenuId.Awards))
                    Game.protosender.rank.GetOscarData();
            };
            return RightMiddleMenuBar;
        }(MainUI.RightMiddleMenuBarStruct));
        MainUI.RightMiddleMenuBar = RightMiddleMenuBar;
    })(MainUI = fgui.MainUI || (fgui.MainUI = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=RightMiddleMenuBar.js.map