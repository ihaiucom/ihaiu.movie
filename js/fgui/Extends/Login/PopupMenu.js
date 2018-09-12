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
    var Login;
    (function (Login) {
        var PopupMenu = /** @class */ (function (_super) {
            __extends(PopupMenu, _super);
            function PopupMenu() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.listData = [];
                _this.sOnSelect = new TypedSignal();
                return _this;
            }
            PopupMenu.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_list.on(fairygui.Events.CLICK_ITEM, this, this.onClickItem);
            };
            PopupMenu.prototype.setListData = function (listData) {
                this.listData = listData;
                var list = this.m_list;
                list.removeChildrenToPool();
                for (var i = 0; i < listData.length; i++) {
                    var item = list.addItemFromPool();
                    item.data = listData[i];
                    item.title = listData[i].username;
                }
                // list.resizeToFit();
            };
            PopupMenu.prototype.onClickItem = function (item) {
                var args = [];
                for (var _i = 1; _i < arguments.length; _i++) {
                    args[_i - 1] = arguments[_i];
                }
                this.onselect(item.data);
                this.removeFromParent();
            };
            PopupMenu.prototype.onselect = function (value) {
                this.sOnSelect.dispatch(value);
                if (this.mainButton) {
                    this.mainButton.title = value.username;
                }
            };
            PopupMenu.prototype.setSelect = function (value) {
                var index = this.listData.indexOf(value);
                this.m_list.addSelection(index, true);
                this.onselect(value);
            };
            return PopupMenu;
        }(Login.PopupMenuStruct));
        Login.PopupMenu = PopupMenu;
    })(Login = fgui.Login || (fgui.Login = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=PopupMenu.js.map