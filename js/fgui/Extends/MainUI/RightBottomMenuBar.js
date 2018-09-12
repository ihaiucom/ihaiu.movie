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
        var RightBottomMenuBar = /** @class */ (function (_super) {
            __extends(RightBottomMenuBar, _super);
            function RightBottomMenuBar() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.menuButtons = [];
                return _this;
            }
            // 窗口初始化完毕
            RightBottomMenuBar.prototype.onWindowInited = function () {
                for (var i = this.numChildren - 1; i >= 0; i--) {
                    this.removeChildAt(i);
                }
                var list = Game.config.menu.getBarMenus(Games.MenuBarType.Right_Bottom);
                list.sort(function (a, b) { return a.barIndex - b.barIndex; });
                var y = 0;
                for (var i = 0; i < list.length; i++) {
                    var config = list[i];
                    if (!Games.MenuWindows.get(config.menuId)) {
                        continue;
                    }
                    var button = MainUI.MenuRButton.createInstance();
                    button.y = y;
                    y += button.height;
                    this.addChild(button);
                    var ctl = new MainUI.MenuButtonCtl(button, this.moduleWindow.conent);
                    ctl.setMenuConfig(config);
                    this.menuButtons.push(ctl);
                }
                this.height = y;
            };
            RightBottomMenuBar.prototype.layoutButtom = function () {
                var y = 0;
                for (var i = 0; i < this.menuButtons.length; i++) {
                    var ctl = this.menuButtons[i];
                    if (!ctl.button.visible)
                        continue;
                    ctl.button.y = y;
                    y += ctl.button.height;
                }
            };
            RightBottomMenuBar.prototype.onRefreshUnlock = function () {
                for (var _i = 0, _a = this.menuButtons; _i < _a.length; _i++) {
                    var item = _a[_i];
                    item.refreshUnlock(true);
                }
                this.layoutButtom();
            };
            return RightBottomMenuBar;
        }(MainUI.RightBottomMenuBarStruct));
        MainUI.RightBottomMenuBar = RightBottomMenuBar;
    })(MainUI = fgui.MainUI || (fgui.MainUI = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=RightBottomMenuBar.js.map