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
        var RightTopMenuBar = /** @class */ (function (_super) {
            __extends(RightTopMenuBar, _super);
            function RightTopMenuBar() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.menuButtons = [];
                return _this;
            }
            // 窗口初始化完毕
            RightTopMenuBar.prototype.onWindowInited = function () {
                // for (let i = this.numChildren - 1; i >= 0; i--)
                // {
                // 	this.removeChildAt(i);
                // }
                // let list = Game.config.menu.getBarMenus(Games.MenuBarType.Right_Top);
                // list.sort((a: MenuConfig, b: MenuConfig) => { return a.barIndex - b.barIndex; });
                // let y = 0;
                // let x = 110;
                // let c = 0;
                // let r = 0;
                // for (let i = 0; i < list.length; i++)
                // {
                // 	let config = list[i];
                // 	if (!Games.MenuWindows.get(config.menuId))
                // 	{
                // 		continue;
                // 	}
                // 	r = i % 4;
                // 	c = Math.floor(i / 4);
                // 	x = this.width - 90 * (c + 1);
                // 	if (r == 0)
                // 		y = 0;
                // 	let button = MenuRButton.createInstance();
                // 	button.y = y;
                // 	button.x = x;
                // 	y += button.height;
                // 	this.addChild(button);
                // 	let ctl = new MenuButtonCtl(<MenuBButton><any>button);
                // 	ctl.setMenuConfig(config);
                // 	this.menuButtons.push(ctl);
                // }
            };
            RightTopMenuBar.prototype.layoutButtom = function () {
                var y = 0;
                var x = 110;
                var c = 0;
                var r = 0;
                var index = 0;
                for (var i = 0; i < this.menuButtons.length; i++) {
                    var ctl = this.menuButtons[i];
                    if (!ctl.button.visible)
                        continue;
                    r = index % 4;
                    c = Math.floor(index / 4);
                    x = this.width - 90 * (c + 1);
                    if (r == 0)
                        y = 0;
                    ctl.button.x = x;
                    ctl.button.y = y;
                    y += ctl.button.height;
                    index++;
                }
            };
            RightTopMenuBar.prototype.onRefreshUnlock = function () {
                for (var _i = 0, _a = this.menuButtons; _i < _a.length; _i++) {
                    var item = _a[_i];
                }
                this.layoutButtom();
            };
            return RightTopMenuBar;
        }(MainUI.RightTopMenuBarStruct));
        MainUI.RightTopMenuBar = RightTopMenuBar;
    })(MainUI = fgui.MainUI || (fgui.MainUI = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=RightTopMenuBar.js.map