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
    var Common;
    (function (Common) {
        var ItemInfo = /** @class */ (function (_super) {
            __extends(ItemInfo, _super);
            function ItemInfo() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            ItemInfo.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_btnInfo.onClick(this, this.OnBtnInfoClick);
                Game.event.add(GameEventKey.PopupPanel, this.OnEventHide, this);
            };
            ItemInfo.prototype.UpdateData = function (data) {
                this.itemData = data;
                this.m_itemIcon.ItemId = this.itemData.itemId;
                this.m_name.text = data.itemName;
                this.m_num.text = Games.TEXT.ItemHave + data.itemNumTxt;
                this.m_desc.text = data.itemDes;
                if (data.itemType == 7) {
                    this.m_isType7.setSelectedIndex(1);
                }
                else {
                    this.m_isType7.setSelectedIndex(0);
                    this.m_way.text = data.itemConfig.get_way_explain;
                    if (data.itemType == 11 || data.itemType == 13 || data.itemType == 14) {
                        this.m_num.text = "";
                    }
                    else if (data.itemType == 10) {
                        this.m_num.text = Games.TEXT.ItemHave + Game.moduleModel.warData.licenceNumInFilming;
                    }
                }
            };
            ItemInfo.prototype.OnEventHide = function () {
                fairygui.GRoot.inst.hidePopup(this);
            };
            ItemInfo.prototype.OnBtnInfoClick = function () {
                this.OnEventHide();
                Game.menu.open(MenuId.ActorDetail, this.itemData.compoundActor.itemId);
            };
            ItemInfo.prototype.showPopup = function (button) {
                fairygui.GRoot.inst.showPopup(this, button);
            };
            ItemInfo.prototype.Show = function (button, itemId) {
                var data = Game.moduleModel.item.getItem(itemId);
                this.UpdateData(data);
                this.showPopup(button);
            };
            return ItemInfo;
        }(Common.ItemInfoStruct));
        Common.ItemInfo = ItemInfo;
    })(Common = fgui.Common || (fgui.Common = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=ItemInfo.js.map