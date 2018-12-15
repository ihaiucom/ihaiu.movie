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
    var Activity;
    (function (Activity) {
        var SecretaryPanel = /** @class */ (function (_super) {
            __extends(SecretaryPanel, _super);
            function SecretaryPanel() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            SecretaryPanel.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_dailyBtn.onClick(this, this.onClickDailyBtn);
                this.m_welfareBtn.onClick(this, this.onClickWelfareBtn);
                this.m_moneyBtn.onClick(this, this.onClickMoneyBtn);
                var rechangeTxt = Game.config.recharge.getConfig(1008).rechangeDesc;
                if (BrowserDetect.isDebugRecharge) {
                    rechangeTxt = "Free";
                }
                this.m_moneyBtn.text = rechangeTxt;
                this.m_welfareBtn.text = TEXT.Secretary_GetWelfare;
            };
            //花费钱购买
            SecretaryPanel.prototype.onClickMoneyBtn = function () {
                // Game.protosender.test.SetSecretaryStatus(ESecretaryType.had);
                if (BrowserDetect.isDebugRecharge) {
                    Game.protosender.test.SetSecretaryStatus(ESecretaryType.had);
                }
                else {
                    Game.protosender.pay.StartOrder(Game.config.recharge.getConfig(1008).id, 1);
                }
            };
            SecretaryPanel.prototype.onClickDailyBtn = function () {
                var dailyConfig = Game.moduleModel.secretary.dailyGiftCfg;
                if (this.secretaryData.secretaryType == ESecretaryType.had) {
                    //购买前
                    Game.moduleModel.secretary.preMoneyReward = true;
                    //每日
                    if (Game.moduleModel.secretary.isMoneyGetReward) {
                        //已经领取
                        Game.system.openAwardsGift(dailyConfig.rechangeGifts, TEXT.Secretary_DailyGiftTitle, Game.config.msg.getTxt(MsgKey.secretary_bought), TEXT.Buyed, false);
                    }
                    else {
                        //可以领取
                        //需要购买
                        var rechangeTxt = dailyConfig.rechangeDesc;
                        Game.system.openAwardsGift(dailyConfig.rechangeGifts, TEXT.Secretary_DailyGiftTitle, TEXT.Secretary_GetRewardDailySecretary, rechangeTxt, true, function () {
                            //需要购买
                            // Game.protosender.test.GetRechargeGift();
                            Game.protosender.pay.StartOrder(Game.config.recharge.getConfig(1009).id, 1);
                        });
                    }
                }
                else {
                    //没有拥有需要购买
                    Game.system.openAwardsGift(dailyConfig.rechangeGifts, TEXT.Secretary_DailyGiftTitle, TEXT.Secretary_NeedBuySecretary, dailyConfig.rechangeDesc, true, function () {
                        //需要购买
                        Game.system.toastMsg(MsgKey.sectrary_cannot_buy);
                    });
                }
            };
            //福利
            SecretaryPanel.prototype.onClickWelfareBtn = function () {
                if (Game.moduleModel.secretary.isFreeGetReward == false) {
                    Game.protosender.secretary.GetDailyReward();
                }
            };
            //
            SecretaryPanel.prototype.setData = function () {
                var secretaryData = Game.moduleModel.secretary.secretaryData;
                this.giftConfig = Game.config.secretaryGift.getConfig(1001);
                if (secretaryData) {
                    // secretaryData.secretaryType = ESecretaryType.had.valueOf();
                    //
                    if (secretaryData.secretaryType == ESecretaryType.had) {
                        //拥有 临时拥有
                        this.m_msgTitle.text = Game.config.msg.getTxt(MsgKey.secretary_title2);
                        this.m_ownedGroup.visible = true;
                        this.m_welfareBtn.visible = true;
                        this.m_moneyBtn.visible = false;
                        //每日礼包
                        var dailyItem = this.giftConfig.items[0];
                        //花费
                        this.m_welfareBtn.m_text.text = dailyItem.itemNum + "";
                        this.m_welfareBtn.m_icon.icon = dailyItem.itemIconUrl;
                        //今日是否已经领取福利
                        if (Game.moduleModel.secretary.isFreeGetReward) {
                            this.m_welfareBtn.grayed = true;
                            this.m_welfareBtn.enabled = false;
                        }
                        else {
                            this.m_welfareBtn.grayed = false;
                            this.m_welfareBtn.enabled = true;
                        }
                        if (Game.moduleModel.secretary.isMoneyGetReward) {
                            //已经领取
                            this.m_dailyBtn.grayed = true;
                        }
                        else {
                            //可以领取
                            this.m_dailyBtn.grayed = false;
                        }
                    }
                    else {
                        //没有拥有
                        this.m_msgTitle.text = Game.config.msg.getTxt(MsgKey.secretary_title1);
                        this.m_ownedGroup.visible = false;
                        this.m_welfareBtn.visible = false;
                        this.m_moneyBtn.visible = true;
                    }
                    //对话
                    this.m_tipmsg.text = Game.config.msg.getTxt(MsgKey.secretary_owned);
                    //说明：
                    var msg = "";
                    for (var id = 2145; id < 2155; id++) {
                        var config = Game.config.msg.getConfig(id);
                        var info = config.notice;
                        msg = msg + info + (id != 2154 ? "\n" : "");
                    }
                    this.m_msgPanel.text = msg;
                    //随机对话
                    this.m_dialog.text = Game.config.msg.getTxt(Math.random() > 0.5 ? MsgKey.secretary_talk1 : MsgKey.secretary_talk2);
                    //
                    this.m_t0.play();
                    //小秘书
                    var secretaryTypeConfig = void 0;
                    //判断性别
                    if (User.info.sex == EUserSex.boy)
                        secretaryTypeConfig = Game.config.secretaryType.getConfig(1002);
                    else
                        secretaryTypeConfig = Game.config.secretaryType.getConfig(1001);
                    //小秘书半身图
                    this.m_bodyIcon.icon = secretaryTypeConfig.bodyIconUrl;
                }
                this.secretaryData = secretaryData;
                this.visible = true;
            };
            return SecretaryPanel;
        }(Activity.SecretaryPanelStruct));
        Activity.SecretaryPanel = SecretaryPanel;
    })(Activity = fgui.Activity || (fgui.Activity = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=SecretaryPanel.js.map