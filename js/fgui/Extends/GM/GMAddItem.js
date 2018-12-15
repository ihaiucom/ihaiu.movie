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
        var GMAddItem = /** @class */ (function (_super) {
            __extends(GMAddItem, _super);
            function GMAddItem() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            GMAddItem.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_button.onClick(this, this.onClickAddButton);
                this.m_num.onClick(this, this.onClickNum);
                this.m_numberInput.value = 10000;
            };
            GMAddItem.prototype.onClickNum = function () {
                this.m_numberInput.value = this.itemData.itemNum * -1;
            };
            GMAddItem.prototype.onClickAddButton = function () {
                var _this = this;
                switch (this.itemData.itemId) {
                    case Proto.SE.EItemId.fans:
                        Game.protosender.test.AddFans(this.m_numberInput.value);
                        break;
                    case 8:
                        Game.protosender.test.AddExpect(this.m_numberInput.value);
                        break;
                    default:
                        Game.protosender.test.AddItem(this.itemData.itemId, this.m_numberInput.value);
                        break;
                }
                setTimeout(function () {
                    _this.refreshItemNum();
                }, 100);
            };
            GMAddItem.prototype.setItemData = function (itemData) {
                this.itemData = itemData;
                this.m_id.text = itemData.itemId + "";
                this.m_title.text = itemData.itemName;
                this.m_describe.text = itemData.itemDes;
                this.m_num.text = itemData.itemNum + "";
                this.m_icon.url = itemData.itemIconUrl;
            };
            GMAddItem.prototype.refreshItemNum = function () {
                if (this.itemData) {
                    this.m_num.text = this.itemData.itemNum + "";
                }
            };
            // 该组件所在Tab 显示
            GMAddItem.prototype.onTabShow = function () {
                this.refreshItemNum();
            };
            // 窗口显示
            GMAddItem.prototype.onWindowShow = function () {
                this.refreshItemNum();
            };
            return GMAddItem;
        }(GM.GMAddItemStruct));
        GM.GMAddItem = GMAddItem;
    })(GM = fgui.GM || (fgui.GM = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=GMAddItem.js.map