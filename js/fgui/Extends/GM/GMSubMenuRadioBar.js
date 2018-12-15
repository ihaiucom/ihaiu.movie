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
    var GM;
    (function (GM) {
        var GMSubMenuRadioBar = /** @class */ (function (_super) {
            __extends(GMSubMenuRadioBar, _super);
            function GMSubMenuRadioBar() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.sOnSelect = new TypedSignal();
                return _this;
            }
            GMSubMenuRadioBar.prototype.setListData = function (listData) {
                this.listData = listData;
                var list = this.m_subMenu;
                list.setVirtual();
                list.setVirtualAndLoop();
                list.on(fairygui.Events.CLICK_ITEM, this, this.onClickItem);
                list.itemRenderer = Handler.create(this, this.renderListItem, null, false);
                list.numItems = listData.length;
            };
            Object.defineProperty(GMSubMenuRadioBar.prototype, "select", {
                get: function () {
                    if (this.m_subMenu.selectedIndex >= 0) {
                        return this.listData[this.m_subMenu.selectedIndex];
                    }
                    return null;
                },
                set: function (menu) {
                    this.m_subMenu.selectedIndex = this.listData.indexOf(menu);
                    this.sOnSelect.dispatch(menu);
                },
                enumerable: true,
                configurable: true
            });
            GMSubMenuRadioBar.prototype.renderListItem = function (index, item) {
                item.title = this.listData[index];
            };
            GMSubMenuRadioBar.prototype.onClickItem = function (item) {
                var args = [];
                for (var _i = 1; _i < arguments.length; _i++) {
                    args[_i - 1] = arguments[_i];
                }
                this.sOnSelect.dispatch(item.title);
            };
            return GMSubMenuRadioBar;
        }(GM.GMSubMenuRadioBarStruct));
        GM.GMSubMenuRadioBar = GMSubMenuRadioBar;
    })(GM = fgui.GM || (fgui.GM = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=GMSubMenuRadioBar.js.map