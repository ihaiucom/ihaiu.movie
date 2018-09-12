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
        var GMPopupMenu = /** @class */ (function (_super) {
            __extends(GMPopupMenu, _super);
            function GMPopupMenu() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.listData = [];
                _this.sOnSelect = new TypedSignal();
                return _this;
            }
            GMPopupMenu.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_list.on(fairygui.Events.CLICK_ITEM, this, this.onClickItem);
            };
            GMPopupMenu.prototype.setListData = function (listData) {
                this.listData = listData;
                var list = this.m_list;
                list.removeChildrenToPool();
                for (var i = 0; i < listData.length; i++) {
                    var item = list.addItemFromPool();
                    item.title = listData[i];
                }
                list.resizeToFit();
            };
            GMPopupMenu.prototype.onClickItem = function (item) {
                var args = [];
                for (var _i = 1; _i < arguments.length; _i++) {
                    args[_i - 1] = arguments[_i];
                }
                this.onselect(item.title);
                this.removeFromParent();
            };
            GMPopupMenu.prototype.onselect = function (value) {
                this.sOnSelect.dispatch(value);
                if (this.mainButton) {
                    this.mainButton.title = value;
                }
            };
            GMPopupMenu.prototype.setSelect = function (value) {
                var index = this.listData.indexOf(value);
                this.m_list.addSelection(index, true);
                this.onselect(value);
            };
            return GMPopupMenu;
        }(GM.GMPopupMenuStruct));
        GM.GMPopupMenu = GMPopupMenu;
    })(GM = fgui.GM || (fgui.GM = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=GMPopupMenu.js.map