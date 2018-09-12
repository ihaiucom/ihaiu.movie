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
        var MailMainPanel = /** @class */ (function (_super) {
            __extends(MailMainPanel, _super);
            function MailMainPanel() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.doAllDelect = false;
                _this.doAllReward = false;
                return _this;
            }
            MailMainPanel.prototype.onWindowInited = function () {
                this.m_viewPanel.InitView(this, this.OnCloseClick);
                this.m_closeBtn.onClick(this, this.OnCloseClick);
                this.m_btnDelect.onClick(this, this.OnBtnDelectClick);
                this.m_btnReward.onClick(this, this.OnBtnRewardClick);
                this.m_list.itemRenderer = new Handler(this, this.RenderMailItem, null, false);
                this.m_list.on(fairygui.Events.CLICK_ITEM, this, this.OnMailItemSelect);
            };
            MailMainPanel.prototype.onWindowOpen = function () {
                var arg = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    arg[_i] = arguments[_i];
                }
                this.UpdateView();
            };
            MailMainPanel.prototype.UpdateView = function () {
                this.m_viewPanel.m_title.text = Games.TEXT.MailTitle;
                this.m_btnDelect.m_title.text = Games.TEXT.DeleteRead;
                this.mailList = Game.moduleModel.mail.GetMailList();
                this.m_list.numItems = this.mailList.length;
                // this.m_tip.visible = this.mailList.length == 0;
                this.m_NoMail.visible = this.mailList.length == 0;
            };
            MailMainPanel.prototype.RenderMailItem = function (index, item) {
                var data = this.mailList[index];
                item.RenderItem(data);
            };
            MailMainPanel.prototype.OnMailItemSelect = function (item) {
                item.OnSelect();
                this.moduleWindow.openSubwindowByIndex("mailContent", true, item.mailData.uuid);
            };
            MailMainPanel.prototype.onWindowShow = function () {
                Game.protoOkEvent.add(ProtoEventKey.MailData, this.OnMailDataResponse, this);
                this.UpdateView();
            };
            MailMainPanel.prototype.onWindowHide = function () {
                Game.protoOkEvent.remove(ProtoEventKey.MailData, this.OnMailDataResponse, this);
            };
            MailMainPanel.prototype.OnMailDataResponse = function () { this.UpdateView(); };
            MailMainPanel.prototype.OnCloseClick = function () {
                this.moduleWindow.menuClose();
            };
            MailMainPanel.prototype.OnBtnDelectClick = function () {
                Game.moduleModel.mail.DeleteAll();
            };
            MailMainPanel.prototype.OnBtnRewardClick = function () {
                Game.moduleModel.mail.RewardAll();
            };
            return MailMainPanel;
        }(PfSkin.MailMainPanelStruct));
        PfSkin.MailMainPanel = MailMainPanel;
    })(PfSkin = fgui.PfSkin || (fgui.PfSkin = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=MailMainPanel.js.map