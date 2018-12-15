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
    var PfSkin;
    (function (PfSkin) {
        var GroupItemRewardDialog = /** @class */ (function (_super) {
            __extends(GroupItemRewardDialog, _super);
            function GroupItemRewardDialog() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            GroupItemRewardDialog.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_list.itemRenderer = Handler.create(this, this.updateItemRender, null, false);
            };
            GroupItemRewardDialog.prototype.updateItemRender = function (index, item) {
                item.icon = Game.config.item.getConfig(this.items[index].itemId).iconUrl;
                item.text = this.items[index].itemNum + "";
            };
            GroupItemRewardDialog.prototype.updateView = function (items) {
                this.items = items;
                this.m_list.numItems = items.length;
                var line = items.length;
                // //重新设置宽度
                this.m_list.viewWidth = (this.m_list.columnGap + 75) * line;
            };
            return GroupItemRewardDialog;
        }(PfSkin.GroupItemRewardDialogStruct));
        PfSkin.GroupItemRewardDialog = GroupItemRewardDialog;
    })(PfSkin = fgui.PfSkin || (fgui.PfSkin = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=GroupItemRewardDialog.js.map