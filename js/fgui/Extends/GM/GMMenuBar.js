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
        var GMMenuBar = /** @class */ (function (_super) {
            __extends(GMMenuBar, _super);
            function GMMenuBar() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            // 窗口初始化完毕
            GMMenuBar.prototype.onWindowInited = function () {
                this.m_menuList.setVirtual();
                this.m_menuList.setVirtualAndLoop();
                this.m_menuList.itemRenderer = Handler.create(this, this.renderListItem, null, false);
                this.m_menuList.numItems = Games.GMMenuType.list.length;
                this.m_menuList.on(fairygui.Events.CLICK_ITEM, this, this.onClickItem);
            };
            GMMenuBar.prototype.renderListItem = function (index, obj) {
                obj.title = Games.GMMenuType.list[index];
            };
            GMMenuBar.prototype.onClickItem = function (item) {
                var args = [];
                for (var _i = 1; _i < arguments.length; _i++) {
                    args[_i - 1] = arguments[_i];
                }
                this.moduleWindow.openTab(item.title);
            };
            GMMenuBar.prototype.setSelect = function (menu) {
                var index = Games.GMMenuType.list.indexOf(menu);
                this.m_menuList.addSelection(index, true);
            };
            return GMMenuBar;
        }(GM.GMMenuBarStruct));
        GM.GMMenuBar = GMMenuBar;
    })(GM = fgui.GM || (fgui.GM = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=GMMenuBar.js.map