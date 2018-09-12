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
        var TopMoneyItem = /** @class */ (function (_super) {
            __extends(TopMoneyItem, _super);
            function TopMoneyItem() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this._itemId = -1;
                return _this;
            }
            Object.defineProperty(TopMoneyItem.prototype, "itemId", {
                get: function () {
                    if (this._itemId == -1) {
                        if (!isNullOrEmpty(this.data)) {
                            var info = JSON.parse(this.data);
                            this._itemId = info["itemId"];
                        }
                    }
                    return this._itemId;
                },
                set: function (val) {
                    this._itemId = val;
                },
                enumerable: true,
                configurable: true
            });
            TopMoneyItem.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_addButton.onClick(this, this.onClickAdd);
            };
            TopMoneyItem.prototype.onClickAdd = function () {
                // Game.menu.open(MenuId.Recharge);
            };
            // 刷新数据
            TopMoneyItem.prototype.refreshData = function () {
                if (this.itemId != -1)
                    this.m_title.text = Game.moduleModel.item.getItemNumTxt(this.itemId);
            };
            return TopMoneyItem;
        }(MainUI.TopMoneyItemStruct));
        MainUI.TopMoneyItem = TopMoneyItem;
    })(MainUI = fgui.MainUI || (fgui.MainUI = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=TopMoneyItem.js.map