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
        var LicenseReq = /** @class */ (function (_super) {
            __extends(LicenseReq, _super);
            function LicenseReq() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.updateNum = 0;
                return _this;
            }
            LicenseReq.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                // 关闭
                this.m_okBtn.onClick(this, this.onClickBtn);
            };
            // 点击申请或领取按钮
            LicenseReq.prototype.onClickBtn = function () {
                var _this = this;
                switch (this.state) {
                    case 0:
                        {
                            // 申请
                            if (Game.moduleModel.secretary.isForever) {
                                Game.moduleModel.secretary.isNewDayForLicense = false;
                                Game.protosender.secretary.ApplyMovieLicence();
                            }
                            else {
                                // 未拥有小秘书
                                //没有秘书购买
                                Game.system.confirmText(Game.config.msg.getConfig(MsgKey.license_apply_secretary_not_owned).notice, TEXT.SecretaryForeverAgent, null, function () {
                                    _this.activityMain.setData(1);
                                }, null, Game.config.msg.getTxt(MsgKey.go_to_hire), TEXT.ButtonCannel, false);
                            }
                        }
                        break;
                    case 2:
                        {
                            if (Game.moduleModel.warData.licenceNumInFilming < Game.config.global.getConfig(GlobalKey.Licence_Store_Max).value) {
                                // 获得
                                Game.protosender.secretary.RewardMovieLicence();
                                this.m_fxCt.setSelectedIndex(1);
                                this.m_fxBase.m_t0.play(null, 1);
                                this.m_fx.m_t5555555.play(Handler.create(this, function () { _this.m_fxCt.setSelectedIndex(0); }), 1);
                            }
                            else {
                                // 许可证已满，提示
                                Game.system.toastText(Game.config.msg.getConfig(MsgKey.license_limit).notice);
                            }
                        }
                        break;
                    case 3:
                        {
                            // 用完
                            Game.system.toastText(Game.config.msg.getConfig(MsgKey.license_apply_limit).notice);
                        }
                        break;
                }
            };
            LicenseReq.prototype.setData = function (activityMain) {
                var _this = this;
                if (this.updateNum > 0) {
                    clearInterval(this.updateNum);
                    this.updateNum = 0;
                }
                var maxNum = Game.config.secretary.getConfig(1).par + Game.config.blockLevel.getConfig(User.info.stall).certificate;
                this.activityMain = activityMain;
                this.secreData = Game.moduleModel.secretary.secretaryData;
                var curHaveGet = this.secreData.applyFrequency;
                if (Game.moduleModel.secretary.isNewDayForLicense) {
                    curHaveGet = 0;
                }
                if (this.secreData.isApply) {
                    // 已申请
                    this.state = 1;
                }
                else {
                    // 未申请
                    if (curHaveGet < maxNum) {
                        this.state = 0;
                    }
                    else {
                        this.state = 3;
                    }
                }
                this.m_c1.setSelectedIndex(this.state);
                switch (this.state) {
                    case 0:
                        {
                            // 申请
                            this.m_tip3.text = Game.config.msg.getConfig(MsgKey.license_apply_table1).notice;
                            this.m_okBtn.m_title.text = Game.config.msg.getConfig(MsgKey.license_apply_button1).notice;
                            this.m_dialog.text = Game.config.msg.getConfig(MsgKey.license_apply_dialog1).notice;
                            this.m_timeTip.text = format(Game.config.msg.getConfig(MsgKey.license_apply_limit_num).notice, maxNum - curHaveGet, maxNum);
                        }
                        break;
                    case 1:
                        {
                            // 等待领取
                            this.m_tip3.text = Game.config.msg.getConfig(MsgKey.license_apply_table2).notice;
                            this.updateTime();
                            this.updateNum = setInterval(function () {
                                _this.updateTime();
                            }, 1000);
                        }
                        break;
                    case 2:
                        {
                            // 可领取
                            this.m_tip1.text = Game.config.msg.getConfig(MsgKey.license_apply_table3).notice;
                            this.m_dialog.text = Game.config.msg.getConfig(MsgKey.license_apply_dialog3).notice;
                            this.m_okBtn.m_title.text = Game.config.msg.getConfig(MsgKey.license_apply_button2).notice;
                            this.m_timeTip.text = Game.config.msg.getConfig(MsgKey.license_apply_info).notice;
                            this.m_timeTip.text = format(Game.config.msg.getConfig(MsgKey.license_apply_limit_num).notice, maxNum - curHaveGet, maxNum);
                        }
                        break;
                    case 3:
                        {
                            // 申请次数用光
                            this.m_tip2.text = Game.config.msg.getConfig(MsgKey.license_apply_table4).notice;
                            this.m_okBtn.m_title.text = Game.config.msg.getConfig(MsgKey.license_apply_button1).notice;
                        }
                        break;
                }
                this.visible = true;
            };
            LicenseReq.prototype.updateTime = function () {
                var overTime = Game.config.secretary.getConfig(11).par - Game.time.getSubSecondsPre(this.secreData.applyLastTime);
                if (overTime > 0) {
                    var timeShow = TimeHelper.TimeFormat(overTime);
                    this.m_dialog.text = format(Game.config.msg.getConfig(MsgKey.license_apply_dialog2).notice, overTime);
                    this.m_bottomTip1.text = format(Game.config.msg.getConfig(MsgKey.license_apply_info).notice, timeShow);
                    this.m_BottomTip2.text = timeShow;
                }
                else {
                    this.state = 2;
                    this.m_c1.setSelectedIndex(this.state);
                    // 可领取
                    this.m_tip1.text = Game.config.msg.getConfig(MsgKey.license_apply_table3).notice;
                    this.m_dialog.text = Game.config.msg.getConfig(MsgKey.license_apply_dialog3).notice;
                    this.m_okBtn.m_title.text = Game.config.msg.getConfig(MsgKey.license_apply_button2).notice;
                    this.m_timeTip.text = Game.config.msg.getConfig(MsgKey.license_apply_info).notice;
                    var maxNum = Game.config.secretary.getConfig(1).par + Game.config.blockLevel.getConfig(User.info.stall).certificate;
                    var curHaveGet = this.secreData.applyFrequency;
                    if (Game.moduleModel.secretary.isNewDayForLicense) {
                        curHaveGet = maxNum;
                    }
                    this.m_timeTip.text = format(Game.config.msg.getConfig(MsgKey.license_apply_limit_num).notice, curHaveGet, maxNum);
                }
            };
            return LicenseReq;
        }(Activity.LicenseReqStruct));
        Activity.LicenseReq = LicenseReq;
    })(Activity = fgui.Activity || (fgui.Activity = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=LicenseReq.js.map