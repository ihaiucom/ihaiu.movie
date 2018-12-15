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
        var GMDebugPage = /** @class */ (function (_super) {
            __extends(GMDebugPage, _super);
            function GMDebugPage() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                // 数量列表
                _this.dataList = [];
                return _this;
            }
            // 窗口初始化完毕
            GMDebugPage.prototype.onWindowInited = function () {
                this.m_subMenuBar.setListData(Games.GMDeubgMenuType.list);
                this.m_subMenuBar.sOnSelect.add(this.onClickSubMenu, this);
                this.m_subMenuBar.select = Games.GMDeubgMenuType.list;
                this.m_clearButton.onClick(this, this.onClickClear);
                this.m_refreshButton.onClick(this, this.refreshList);
            };
            Object.defineProperty(GMDebugPage.prototype, "selectSubMenu", {
                get: function () {
                    return this.m_subMenuBar.select;
                },
                enumerable: true,
                configurable: true
            });
            GMDebugPage.prototype.onClickSubMenu = function (menu) {
                var _this = this;
                setTimeout(function () {
                    _this.refreshList();
                }, 10);
            };
            GMDebugPage.prototype.onClickClear = function () {
                GameDebug.clear();
                this.refreshList();
            };
            GMDebugPage.prototype.refreshList = function () {
                var menus = this.selectSubMenu;
                var items = GameDebug.getListByTypes(Games.GMDeubgMenuType.getLogTypes(menus));
                this.setList(items);
            };
            GMDebugPage.prototype.setList = function (items) {
                this.dataList = items;
                var list = this.m_list;
                list.setVirtual();
                list.setVirtualAndLoop();
                if (!list.itemRenderer)
                    list.itemRenderer = Handler.create(this, this.renderListItem, null, false);
                list.numItems = items.length;
                if (list.numItems > 0)
                    list.scrollToView(list.numItems - 1);
            };
            GMDebugPage.prototype.renderListItem = function (index, item) {
                var data = this.dataList[index];
                item.setData(data);
            };
            return GMDebugPage;
        }(GM.GMDebugPageStruct));
        GM.GMDebugPage = GMDebugPage;
    })(GM = fgui.GM || (fgui.GM = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=GMDebugPage.js.map