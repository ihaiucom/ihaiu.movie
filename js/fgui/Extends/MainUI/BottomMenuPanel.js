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
        var BottomMenuPanel = /** @class */ (function (_super) {
            __extends(BottomMenuPanel, _super);
            function BottomMenuPanel() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                //所有按钮数组
                _this._menuButtons = [];
                //所有按钮字典
                _this._menuButtonDict = new Dictionary();
                _this.buttonWidth = 77;
                _this.buttonHeight = 77;
                _this.grapX = 20;
                _this.grapY = 10;
                _this.offsetX = 10;
                _this.offsetY = 10;
                _this.columnMax = 6; //列数
                return _this;
            }
            BottomMenuPanel.prototype.onWindowShow = function () {
                // console.log("show", this.name);
            };
            BottomMenuPanel.prototype.onWindowHide = function () {
                // console.log("hide", this.name);
            };
            /**
             * 初始化调用
             */
            BottomMenuPanel.prototype.init = function (barType) {
                this._barType = barType;
                this.initMenuButton();
                this.refreshMenuButton();
                Game.event.add(GameEventKey.GameEventKey_UnlockChange, this.unlockMenuHanlder, this);
            };
            /**
             *
             * @param id unlockid
             * @param button 按钮
             */
            BottomMenuPanel.prototype.addMenuCtrl = function (id) {
                var ctrl = new MainUI.MenuButtonCtl(id, this);
                this._menuButtons.push(ctrl);
                this._menuButtonDict.add(id, ctrl);
                //添加
                Game.moduleModel.func.addMenu(id, ctrl);
                return ctrl;
            };
            /**
             * 解锁某个功能
             * @param id
             */
            BottomMenuPanel.prototype.unlockMenuHanlder = function (id) {
                var unlockConfig = Game.config.unlock.getConfig(id);
                if (unlockConfig.group == this._barType) {
                    this.refreshMenuButton(id);
                }
            };
            /**
             * 获取按钮控制器
             * @param id
             */
            BottomMenuPanel.prototype.getButtonCtrl = function (id) {
                return this._menuButtonDict.getValue(id);
            };
            //获取当前组所有的解锁配置
            BottomMenuPanel.prototype.getUnlockConfigs = function () {
                return Game.config.unlock.getBarMenus(this._barType);
            };
            //刷新按钮
            BottomMenuPanel.prototype.initMenuButton = function () {
                var list = this.getUnlockConfigs();
                if (list) {
                    for (var i = 0; i < list.length; i++) {
                        var unlockConfig = list[i];
                        if (unlockConfig) {
                            this.addMenuCtrl(unlockConfig.id);
                        }
                    }
                }
            };
            /**
             * 刷新解锁
             */
            BottomMenuPanel.prototype.refreshMenuButton = function (unlockId) {
                if (unlockId === void 0) { unlockId = 0; }
                var list = this._menuButtons;
                var pos = 0;
                var _loop_1 = function (i) {
                    var ctrl = list[i];
                    if (ctrl.isUnlock) {
                        //显示按钮
                        var button = ctrl.button;
                        this_1.calButtonPos(ctrl, pos);
                        if (unlockId > 0) {
                            Laya.Tween.to(button, { x: ctrl.x, y: ctrl.y }, ctrl.moveDuration, Laya.Ease.linearIn, Handler.create(null, function () {
                                ctrl.refreshUnlock();
                            }));
                        }
                        else {
                            ctrl.refreshUnlock();
                            button.x = ctrl.x;
                            button.y = ctrl.y;
                        }
                        //
                        if (ctrl.isUnlock && ctrl.menuId > MenuId.SubMenuButtonBegin && ctrl.subMenu == null) {
                            var submenu = MainUI.Submenu.createInstance();
                            submenu.setButton(ctrl, MainUI.SubmenuType.bottom);
                            ctrl.subMenu = submenu;
                            Game.moduleModel.func.addSubMenu(ctrl.menuId, submenu);
                        }
                        pos++;
                    }
                    else {
                        ctrl.refreshUnlock();
                    }
                };
                var this_1 = this;
                for (var i = 0; i < list.length; i++) {
                    _loop_1(i);
                }
            };
            //计算按钮位置
            BottomMenuPanel.prototype.calButtonPos = function (ctrl, index) {
                var endX = 0;
                var endY = 0;
                switch (this._barType) {
                    case Games.MenuPositionType.Bottom_Left:
                        endX = this.width - this.offsetX - this.buttonWidth - (this.offsetX * 2 + this.buttonWidth) * index;
                        endY = 0;
                        break;
                    case Games.MenuPositionType.Bottom_Right:
                        endX = index * (this.grapX + this.buttonWidth) + this.offsetX;
                        endY = 0;
                        break;
                    case Games.MenuPositionType.Bottom_Middle:
                        endX = 0;
                        endY = 0;
                        break;
                    case Games.MenuPositionType.Right_Top_Group:
                        endX = -20;
                        endY = index * (this.grapX + this.buttonHeight + 40) + this.offsetY;
                        break;
                    default:
                        endX = this.width - this.offsetX - this.buttonWidth - (this.offsetX * 2 + this.buttonWidth) * index;
                        endY = 0;
                        break;
                }
                ctrl.setPos(endX, endY);
            };
            return BottomMenuPanel;
        }(MainUI.BottomMenuPanelStruct));
        MainUI.BottomMenuPanel = BottomMenuPanel;
    })(MainUI = fgui.MainUI || (fgui.MainUI = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=BottomMenuPanel.js.map