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
        /**
         * 主菜单
         */
        var MainMenuBar = /** @class */ (function (_super) {
            __extends(MainMenuBar, _super);
            function MainMenuBar() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.menuButtons = [];
                _this.posDict = new Dictionary();
                return _this;
            }
            // 窗口初始化完毕
            MainMenuBar.prototype.onWindowInited = function () {
                for (var i = 0; i < this.numChildren; i++) {
                    var item = this.getChildAt(i);
                    if (item.name.startsWith("btn_")) {
                        var ctl = new MainUI.MenuButtonCtl(item, this.moduleWindow.conent);
                        this.posDict.add(ctl.menuButtonData.pos, ctl);
                        this.menuButtons.push(ctl);
                    }
                }
                var list = Game.config.menu.getBarMenus(Games.MenuBarType.Bottom);
                for (var i = 0; i < list.length; i++) {
                    var config = list[i];
                    var ctl = this.posDict.getValue(config.barIndex);
                    if (ctl) {
                        ctl.setMenuConfig(config);
                    }
                }
                //cache bitmap
                // this.displayObject.cacheAs = "bitmap";
                // this.displayObject.staticCache = true;
            };
            MainMenuBar.prototype.onRefreshUnlock = function () {
                for (var _i = 0, _a = this.menuButtons; _i < _a.length; _i++) {
                    var item = _a[_i];
                    item.refreshUnlock();
                }
                //repaint
                // this.displayObject.reCache();
            };
            return MainMenuBar;
        }(MainUI.MainMenuBarStruct));
        MainUI.MainMenuBar = MainMenuBar;
    })(MainUI = fgui.MainUI || (fgui.MainUI = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=MainMenuBar.js.map