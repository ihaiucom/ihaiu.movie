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
                return _super !== null && _super.apply(this, arguments) || this;
            }
            // 窗口初始化完毕
            MainMenuBar.prototype.onWindowInited = function () {
                this.initCenterMenu();
                this.initLeftMenu();
                this.initRightMenu();
            };
            //初始化主界面
            MainMenuBar.prototype.initCenterMenu = function () {
                this.m_center.init(Games.MenuPositionType.Bottom_Middle);
            };
            //初始化左边
            MainMenuBar.prototype.initLeftMenu = function () {
                this.m_left.init(Games.MenuPositionType.Bottom_Left);
            };
            //初始化右边
            MainMenuBar.prototype.initRightMenu = function () {
                this.m_right.init(Games.MenuPositionType.Bottom_Right);
            };
            MainMenuBar.prototype.refreshMenuButton = function () {
                this.m_center.refreshMenuButton();
                this.m_left.refreshMenuButton();
                this.m_right.refreshMenuButton();
            };
            return MainMenuBar;
        }(MainUI.MainMenuBarStruct));
        MainUI.MainMenuBar = MainMenuBar;
    })(MainUI = fgui.MainUI || (fgui.MainUI = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=MainMenuBar.js.map