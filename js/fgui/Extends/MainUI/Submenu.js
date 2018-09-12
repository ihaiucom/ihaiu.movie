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
/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////
var Point = laya.maths.Point;
var fgui;
(function (fgui) {
    var MainUI;
    (function (MainUI) {
        var SubmenuType;
        (function (SubmenuType) {
            SubmenuType[SubmenuType["bottom"] = 0] = "bottom";
            SubmenuType[SubmenuType["top"] = 1] = "top";
            SubmenuType[SubmenuType["left"] = 2] = "left";
            SubmenuType[SubmenuType["right"] = 3] = "right";
        })(SubmenuType = MainUI.SubmenuType || (MainUI.SubmenuType = {}));
        /**
         * 子菜单栏
         */
        var Submenu = /** @class */ (function (_super) {
            __extends(Submenu, _super);
            function Submenu() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.menuButtons = [];
                return _this;
            }
            Submenu.prototype.setButton = function (mainUi, subbarId, button, type) {
                this.mainUi = mainUi;
                this.button = button;
                this.type = type;
                this.barId = subbarId;
                this.m_arrow.selectedIndex = type;
                var list = Game.config.menu.getBarMenus(button.menuId);
                for (var i = 0; i < list.length; i++) {
                    var config = list[i];
                    if (!Games.MenuWindows.get(config.menuId)) {
                        continue;
                    }
                    var button_1 = MainUI.MenuSubButton.createInstance();
                    this.addChild(button_1);
                    var ctl = new MainUI.MenuButtonCtl(button_1, mainUi);
                    ctl.setMenuConfig(config);
                    this.menuButtons.push(ctl);
                }
                switch (type) {
                    case SubmenuType.bottom:
                        this.arrow = this.m_arrowBottom;
                        // this.mainUi.m_mainMenuBar.addChild(this);
                        break;
                }
                this.refreshLayout();
                this.button.button.onClick(this, this.onClickButton);
                // this.visible = false;
            };
            Submenu.prototype.onClickButton = function () {
                fairygui.GRoot.inst.togglePopup(this, this.button.button);
                // this.mainUi.closeSubmenus(this.barId);
                // this.visible = !this.visible;
                if (this.parent)
                    this.refreshLayout();
            };
            // 刷新布局		
            Submenu.prototype.refreshLayout = function () {
                switch (this.type) {
                    case SubmenuType.bottom:
                        this.layoutBottom();
                        break;
                }
            };
            Submenu.prototype.layoutBottom = function () {
                var stageWidth = fairygui.GRoot.inst.width;
                var widthMax = 750;
                var paddingH = 45;
                var paddingV = 45;
                var columnMax = 6;
                var buttonWidth = 90;
                var buttonHeight = 90;
                var width = widthMax - paddingH * 2;
                var gapH = (width - columnMax * buttonWidth) / (columnMax - 2);
                var gapV = 20;
                var index = 0;
                var c = 0;
                var r = 0;
                var cmax = 1;
                var rmax = 1;
                for (var i = 0; i < this.menuButtons.length; i++) {
                    var button = this.menuButtons[i].button;
                    if (!button.visible)
                        continue;
                    c = index % columnMax;
                    r = Math.floor(index / columnMax);
                    cmax = Math.max(c, cmax);
                    rmax = Math.max(r, rmax);
                    button.x = paddingH + c * (buttonWidth + gapH);
                    button.y = paddingV + r * (buttonHeight + gapV);
                    index++;
                }
                c = index % columnMax;
                r = Math.floor(index / columnMax);
                cmax = Math.max(c, cmax);
                rmax = Math.max(r, rmax);
                this.width = paddingH * 2 + cmax * (buttonWidth + gapH) - gapH;
                this.height = paddingV * 2 + rmax * buttonHeight + (rmax - 1) * gapV;
                // this.y = -125 - (rmax - 1) * (buttonHeight + gapV);
                var buttonCenterX = this.button.button.x + this.button.button.width * 0.5;
                var x = buttonCenterX - this.width * 0.5;
                x = Math.max(x, -15);
                x = Math.min(x, stageWidth - this.width - 15);
                this.x = x;
                this.arrow.x = buttonCenterX - this.x - 15;
            };
            Submenu.prototype.onRefreshUnlock = function () {
                for (var _i = 0, _a = this.menuButtons; _i < _a.length; _i++) {
                    var item = _a[_i];
                    item.refreshUnlock();
                }
            };
            return Submenu;
        }(MainUI.SubmenuStruct));
        MainUI.Submenu = Submenu;
    })(MainUI = fgui.MainUI || (fgui.MainUI = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=Submenu.js.map