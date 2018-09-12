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
        var GMSubMenuBar = /** @class */ (function (_super) {
            __extends(GMSubMenuBar, _super);
            function GMSubMenuBar() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.sOnSelect = new TypedSignal();
                return _this;
            }
            GMSubMenuBar.prototype.setListData = function (listData) {
                this.listData = listData;
                var list = this.m_subMenu;
                list.setVirtual();
                list.setVirtualAndLoop();
                list.on(fairygui.Events.CLICK_ITEM, this, this.onClickItem);
                list.itemRenderer = Handler.create(this, this.renderListItem, null, false);
                list.numItems = listData.length;
            };
            Object.defineProperty(GMSubMenuBar.prototype, "select", {
                get: function () {
                    var list = this.m_subMenu.getSelection();
                    var menus = [];
                    for (var i = 0; i < list.length; i++) {
                        menus.push(this.listData[list[i]]);
                    }
                    return menus;
                },
                set: function (menus) {
                    this.m_subMenu.clearSelection();
                    for (var i = 0; i < this.listData.length; i++) {
                        if (menus.indexOf(this.listData[i]) != -1) {
                            this.m_subMenu.addSelection(i);
                        }
                    }
                    this.sOnSelect.dispatch(menus);
                },
                enumerable: true,
                configurable: true
            });
            GMSubMenuBar.prototype.renderListItem = function (index, item) {
                item.title = this.listData[index];
            };
            GMSubMenuBar.prototype.onClickItem = function (item) {
                var args = [];
                for (var _i = 1; _i < arguments.length; _i++) {
                    args[_i - 1] = arguments[_i];
                }
                this.sOnSelect.dispatch(this.select);
            };
            return GMSubMenuBar;
        }(GM.GMSubMenuBarStruct));
        GM.GMSubMenuBar = GMSubMenuBar;
    })(GM = fgui.GM || (fgui.GM = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=GMSubMenuBar.js.map