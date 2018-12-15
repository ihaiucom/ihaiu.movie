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
        var MailItem = /** @class */ (function (_super) {
            __extends(MailItem, _super);
            function MailItem() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            MailItem.prototype.RenderItem = function (data) {
                this.mailData = data;
                this.m_read.setSelectedIndex(this.mailData.IsNew ? 0 : 1);
                this.title = this.mailData.title;
                this.m_time.text = Games.TimeHelper.DateTimeFormat2(this.mailData.createTime);
                if (this.mailData.itemList.length > 0 && !this.mailData.IsRewardGot) {
                    this.m_reward.visible = true;
                    var item = Game.moduleModel.item.CreateItem(this.mailData.itemList[0].itemId, this.mailData.itemList[0].amount);
                    this.m_reward.icon = item.itemIconUrl;
                    this.m_reward.title = item.itemNumTxt;
                    this.m_reward.m_star.starNum = item.itemStar;
                }
                else {
                    this.m_reward.visible = false;
                }
            };
            MailItem.prototype.OnSelect = function () {
                if (this.mailData.isNew) {
                    Game.moduleModel.mail.ReadMail(this.mailData.uuid);
                }
            };
            return MailItem;
        }(PfSkin.MailItemStruct));
        PfSkin.MailItem = MailItem;
    })(PfSkin = fgui.PfSkin || (fgui.PfSkin = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=MailItem.js.map