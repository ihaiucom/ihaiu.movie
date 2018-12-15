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
        var TopMoneyMainBar = /** @class */ (function (_super) {
            __extends(TopMoneyMainBar, _super);
            function TopMoneyMainBar() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.itemList = [];
                return _this;
            }
            TopMoneyMainBar.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                for (var i = 0; i < this.numChildren; i++) {
                    var item = (this.getChildAt(i));
                    if (item instanceof MainUI.TopMoneyItem)
                        this.itemList.push(item);
                }
            };
            // 窗口显示
            TopMoneyMainBar.prototype.onWindowShow = function () {
                // 刷新数据
                this.refreshData();
                Game.protoOkEvent.add(ProtoEventKey.ItemData, this.refreshData, this);
            };
            // 窗口隐藏
            TopMoneyMainBar.prototype.onWindowHide = function () {
                Game.protoOkEvent.remove(ProtoEventKey.ItemData, this.refreshData, this);
            };
            // 刷新数据
            TopMoneyMainBar.prototype.refreshData = function () {
                for (var i = 0; i < this.itemList.length; i++) {
                    this.itemList[i].refreshData();
                }
            };
            return TopMoneyMainBar;
        }(MainUI.TopMoneyMainBarStruct));
        MainUI.TopMoneyMainBar = TopMoneyMainBar;
    })(MainUI = fgui.MainUI || (fgui.MainUI = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=TopMoneyMainBar.js.map