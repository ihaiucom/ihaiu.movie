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
                // for (let i = 0; i < this.numChildren; i++)
                // {
                // 	let item = this.getChildAt(i);
                // 	let ctl = new MenuButtonCtl(<MenuBButton>item);
                // 	if (ctl.menuButtonData)
                // 	{
                // 		let menuConfig: MenuConfig = Game.config.menu.getConfig(ctl.menuButtonData.menuId);
                // 		if (menuConfig)
                // 			ctl.setMenuConfig(menuConfig);
                // 	}
                // 	this.menuButtons.push(ctl);
                // }
                // for (let i = 0; i < this.menuButtons.length; i++)
                // {
                // 	if (!Games.MenuWindows.get(this.menuButtons[i].menuId))
                // 	{
                // 		this.menuButtons[i].button.removeFromParent();
                // 	}
                // }
                // this.tickOscar = Game.tick.AddTick(1, 0, Handler.create(this, this.UpdateOscarTime, null, false), null);
                // Game.protoOkEvent.add(ProtoEventKey.rank_GetOscarData, this.OnGetOscarDataUpdate, this);
                // this.UpdateTick();
            };
            RightMiddleMenuBar.prototype.onRefreshUnlock = function () {
                for (var _i = 0, _a = this.menuButtons; _i < _a.length; _i++) {
                    var item = _a[_i];
                }
            };
            RightMiddleMenuBar.prototype.onClickAwards = function () {
            };
            RightMiddleMenuBar.prototype.onClickGoal = function () {
            };
            RightMiddleMenuBar.prototype.OnGetOscarDataUpdate = function () {
                console.log("更新奥斯卡数据");
                this.UpdateTick();
            };
            RightMiddleMenuBar.prototype.UpdateTick = function () {
                console.log("刷新奥斯卡倒计时");
                // this.tickOscar.SetTargetTimes(Game.moduleModel.oscar.OscarCD);
                this.tickOscar.Restart();
                if (!Game.moduleModel.oscar.IsFinishOscar) {
                    this.m_awards.m_buttonTime.text = "";
                    if (Game.moduleModel.oscar.isUnLockOscar) {
                        Game.menu.open(MenuId.Awards, Games.OscarSubEnum.OscarShow);
                    }
                }
            };
            // Oscar倒计时刷新
            RightMiddleMenuBar.prototype.UpdateOscarTime = function (time) {
                if (Game.moduleModel.oscar.OscarCD <= 1) {
                    this.OnOscarFinish();
                    return;
                }
                if (Game.moduleModel.oscar.lastOscarDataTime < Game.moduleModel.oscar.LastOscarTime) {
                    Game.protosender.rank.GetOscarData();
                    return;
                }
                var strTime = TimeHelper.TimeFormat(Game.moduleModel.oscar.OscarCD);
                this.m_awards.m_buttonTime.m_time.text = strTime;
            };
            // Oscar 颁奖
            RightMiddleMenuBar.prototype.OnOscarFinish = function () {
                console.log("奥斯卡倒计时结束");
                this.tickOscar.Stop();
                this.m_awards.m_buttonTime.text = "";
                setTimeout(function () {
                    Game.protosender.rank.GetOscarData();
                }, 1000);
            };
            return RightMiddleMenuBar;
        }(MainUI.RightMiddleMenuBarStruct));
        MainUI.RightMiddleMenuBar = RightMiddleMenuBar;
    })(MainUI = fgui.MainUI || (fgui.MainUI = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=RightMiddleMenuBar.js.map