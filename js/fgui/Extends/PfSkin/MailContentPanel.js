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
        var MailContentPanel = /** @class */ (function (_super) {
            __extends(MailContentPanel, _super);
            function MailContentPanel() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            MailContentPanel.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_btnClose.onClick(this, this.OnCloseClick);
                this.m_btnDelect.onClick(this, this.OnBtnDelectClick);
                this.m_btnReward.onClick(this, this.OnBtnRewardClick);
                this.m_listReward.itemRenderer = new Handler(this, this.RenderRewardItem, null, false);
            };
            MailContentPanel.prototype.onWindowInited = function () {
            };
            MailContentPanel.prototype.OnWindowOpen = function (uuid) {
                this.moduleMain = this.moduleWindow.mainWindow;
                this.uuid = uuid;
                if (this.uuid) {
                    this.UpdateView();
                }
            };
            MailContentPanel.prototype.UpdateView = function () {
                this.m_Msg1.text = Games.TEXT.ToReader;
                this.m_Msg2.text = Games.TEXT.ReawrdMsg;
                if (this.uuid) {
                    this.mailData = Game.moduleModel.mail.GetMail(this.uuid);
                    if (this.mailData) {
                        this.m_title.text = this.mailData.title;
                        this.m_content.title = this.mailData.content;
                        this.m_time.text = Games.TimeHelper.DateTimeFormat2(this.mailData.createTime);
                        var rewardList = this.mailData.itemList;
                        this.m_listReward.numItems = rewardList.length;
                        if (rewardList.length == 0) {
                            this.m_reward.setSelectedIndex(0);
                        }
                        else if (this.mailData.IsRewardGot) {
                            this.m_reward.setSelectedIndex(1);
                        }
                        else {
                            this.m_reward.setSelectedIndex(2);
                        }
                    }
                }
            };
            MailContentPanel.prototype.RenderRewardItem = function (index, item) {
                var data = this.mailData.itemList[index];
                var reward = Game.moduleModel.item.CreateItem(data.itemId, data.amount);
                item.icon = reward.itemIconUrl;
                item.title = reward.itemNumTxt;
                item.m_star.starNum = reward.itemStar;
                item.PopupInfo = reward.itemId;
            };
            MailContentPanel.prototype.onWindowShow = function () {
                Game.protoOkEvent.add(ProtoEventKey.Mail_MailDelete, this.OnMailDeleteResponse, this);
                Game.protoOkEvent.add(ProtoEventKey.Mail_MailGetReward, this.OnMailGetRewardResponse, this);
                Game.protoOkEvent.add(ProtoEventKey.Mail_MailRead, this.OnMailReadResponse, this);
                this.UpdateView();
            };
            MailContentPanel.prototype.onWindowHide = function () {
                Game.protoOkEvent.remove(ProtoEventKey.Mail_MailDelete, this.OnMailDeleteResponse, this);
                Game.protoOkEvent.remove(ProtoEventKey.Mail_MailGetReward, this.OnMailGetRewardResponse, this);
                Game.protoOkEvent.remove(ProtoEventKey.Mail_MailRead, this.OnMailReadResponse, this);
            };
            MailContentPanel.prototype.OnMailDeleteResponse = function () {
                this.moduleWindow.closeSelf();
            };
            MailContentPanel.prototype.OnMailGetRewardResponse = function () {
                // if (this.rewardList && this.rewardList.length > 0)
                // {
                // 	Game.system.getItemText(this.rewardList, null, false);
                // }
                this.UpdateView();
            };
            MailContentPanel.prototype.OnMailReadResponse = function () { };
            MailContentPanel.prototype.OnCloseClick = function () {
                this.moduleWindow.closeSelf();
            };
            MailContentPanel.prototype.OnBtnDelectClick = function () {
                Game.moduleModel.mail.DeleteMail(this.uuid);
            };
            MailContentPanel.prototype.OnBtnRewardClick = function () {
                if (Game.moduleModel.mail.RewardMail(this.uuid)) {
                    this.rewardList = [];
                    for (var _i = 0, _a = this.mailData.itemList; _i < _a.length; _i++) {
                        var item = _a[_i];
                        var reward = new DTItemNum();
                        reward.itemId = item.itemId;
                        reward.itemNum = item.amount;
                        this.rewardList.push(reward);
                    }
                }
            };
            return MailContentPanel;
        }(PfSkin.MailContentPanelStruct));
        PfSkin.MailContentPanel = MailContentPanel;
    })(PfSkin = fgui.PfSkin || (fgui.PfSkin = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=MailContentPanel.js.map