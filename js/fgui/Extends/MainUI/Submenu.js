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
        var Submenu = /** @class */ (function (_super) {
            __extends(Submenu, _super);
            function Submenu() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.menuButtons = [];
                return _this;
            }
            Submenu.prototype.setButton = function (ctrl, type) {
                this.buttonCtrl = ctrl;
                this.type = type;
                this.m_arrow.selectedIndex = type;
                var list = Game.config.unlock.getBarMenus(ctrl.subGroupId);
                for (var i = 0; i < list.length; i++) {
                    var unlockConfig = list[i];
                    if (unlockConfig) {
                        var button = MainUI.MenuSubButton.createInstance();
                        var id = unlockConfig.id;
                        var ctrl_1 = new MainUI.MenuButtonCtl(id, this);
                        this.menuButtons.push(ctrl_1);
                        //添加
                        Game.moduleModel.func.addMenu(id, ctrl_1);
                    }
                }
                switch (type) {
                    case SubmenuType.bottom:
                        this.arrow = this.m_arrowBottom;
                        break;
                }
                this.refreshLayout();
                this.buttonCtrl.button.onClick(this, this.onClickButton);
            };
            Submenu.prototype.onClickButton = function () {
                Games.MenuLayer.home.showPopup(this, this.buttonCtrl.button);
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
                    var ctrl = this.menuButtons[i];
                    ctrl.refreshUnlock();
                    var button = ctrl.button;
                    if (!ctrl.isLockVisible)
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
                var buttonCenterX = this.buttonCtrl.getGlobalPos().x + this.buttonCtrl.button.width * 0.5;
                var x = buttonCenterX - this.width * 0.5;
                x = Math.max(x, -15);
                x = Math.min(x, stageWidth - this.width - 15);
                this.x = x;
                this.arrow.x = buttonCenterX - this.x - 15;
            };
            Submenu.prototype.onRefreshUnlock = function () {
                this.refreshLayout();
            };
            return Submenu;
        }(MainUI.SubmenuStruct));
        MainUI.Submenu = Submenu;
    })(MainUI = fgui.MainUI || (fgui.MainUI = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=Submenu.js.map