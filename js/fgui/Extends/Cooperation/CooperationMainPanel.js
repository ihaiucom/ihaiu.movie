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
    var Cooperation;
    (function (Cooperation) {
        var CooperationMainPanel = /** @class */ (function (_super) {
            __extends(CooperationMainPanel, _super);
            function CooperationMainPanel() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            CooperationMainPanel.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_title.text = TEXT.CooperationMainPanelTitle;
                this.m_text1.text = TEXT.Cooperationtext1;
                this.m_text2.text = TEXT.Cooperationtext2;
                this.m_remind.text = TEXT.Cooperationremind;
                this.m_intro.text = TEXT.Cooperationintro;
                this.m_inviteBtn1.m_title.text = TEXT.CooperationinviteBtn1;
                this.m_inviteBtn2.m_title.text = TEXT.CooperationinviteBtn2;
                this.m_disinviteBtn.m_title.text = TEXT.CooperationdisinviteBtn;
                this.m_text3.text = TEXT.Cooperationtext3;
                this.m_otherID.promptText = TEXT.Cooperationintro;
                this.m_introduce.text = "";
                this.m_otherID.input.maxChars = 10;
                // 关闭面板
                this.m_closeBtn.onClick(this, this.onClicClose);
                // 搜索指定id的合作者
                this.m_inviteBtn1.onClick(this, this.onClickSearchBtn);
                // 全局广播搜索合作者
                this.m_inviteBtn2.onClick(this, this.onClickPublicBtn);
                // 取消全局广播
                this.m_disinviteBtn.onClick(this, this.onClickDisBtn);
            };
            // 取消全局广播搜索合作者
            CooperationMainPanel.prototype.onClickDisBtn = function () {
                Game.moduleModel.cooperation.sendCancelCooperate();
            };
            // 全局广播搜索合作者
            CooperationMainPanel.prototype.onClickPublicBtn = function () {
                var _this = this;
                if (Game.moduleModel.cooperation.cooperData.weekTimes < Game.config.global.getConfig(GlobalKey.KEY_29_MeiZhouGeZuoCiShu).value) {
                    this.m_inviteBtn2.grayed = true;
                    Game.moduleModel.cooperation.setDealyCanUse(function () {
                        _this.m_inviteBtn2.grayed = false;
                    });
                    Game.moduleModel.cooperation.sendApply(0);
                }
                else {
                    Game.system.toastText(TEXT.CooperationEndTip2);
                }
            };
            // 搜索指定id的合作者
            CooperationMainPanel.prototype.onClickSearchBtn = function () {
                if (Game.moduleModel.cooperation.lastReqTimeNum <= 0) {
                    if (Game.moduleModel.cooperation.cooperData.weekTimes < Game.config.global.getConfig(GlobalKey.KEY_29_MeiZhouGeZuoCiShu).value) {
                        if (this.m_otherID.text.length > 0) {
                            Game.moduleModel.cooperation.sendApply(parseInt(this.m_otherID.text));
                        }
                        else {
                            Game.system.toastText(TEXT.CooperationMainPanelTip1);
                        }
                    }
                    else {
                        Game.system.toastText(TEXT.CooperationEndTip2);
                    }
                }
                else {
                    Game.system.toastText(TEXT.CooperationMainPanelTip2);
                }
            };
            // 关闭窗口
            CooperationMainPanel.prototype.onClicClose = function () {
                this.moduleWindow.menuBack();
            };
            CooperationMainPanel.prototype.onWindowShow = function () {
                Game.moduleModel.cooperation.sReqTimeUpdate.add(this.checkTime, this);
                Game.moduleModel.cooperation.sReqTimeAutoUpdate.add(this.checkTime, this);
                this.setData();
            };
            CooperationMainPanel.prototype.onWindowHide = function () {
                Game.moduleModel.cooperation.sReqTimeUpdate.remove(this.checkTime, this);
                Game.moduleModel.cooperation.sReqTimeAutoUpdate.remove(this.checkTime, this);
                this.m_otherID.text = "";
            };
            CooperationMainPanel.prototype.setData = function () {
                this.m_otherID.text = "";
                if (!Game.moduleModel.cooperation.cooperPlayerData || Game.moduleModel.cooperation.cooperPlayerData === null) {
                    Game.system.toastText("未收到服务器数据，请检查");
                    this.moduleWindow.menuBack();
                }
                else {
                    this.checkTime();
                    this.m_selfId.text = format(TEXT.CooperationMainPanelID, User.info.entityId);
                    if (Game.moduleModel.cooperation.cooperData && Game.moduleModel.cooperation.cooperData.firstACooperate) {
                        if (this.m_remind.visible) {
                            this.m_remind.visible = false;
                        }
                        if (this.m_icon2.visible) {
                            this.m_icon2.visible = false;
                        }
                        if (this.m_number2.visible) {
                            this.m_number2.visible = false;
                        }
                    }
                    else {
                        if (!this.m_remind.visible) {
                            this.m_remind.visible = true;
                        }
                        if (!this.m_icon2.visible) {
                            this.m_icon2.visible = true;
                        }
                        if (!this.m_number2.visible) {
                            this.m_number2.visible = true;
                        }
                        this.m_icon2.icon = Games.WarLoadPic.getItemIcon(Game.config.global.getConfig(GlobalKey.KEY_28_ShouCiZhangHao__GeZuoJiangLi).value1[0]);
                        this.m_number2.text = Game.config.global.getConfig(GlobalKey.KEY_28_ShouCiZhangHao__GeZuoJiangLi).value1[1].toString();
                    }
                    if (Game.moduleModel.cooperation.cooperData && Game.moduleModel.cooperation.cooperData.firstCooperate) {
                        if (this.m_text1.visible) {
                            this.m_text1.visible = false;
                        }
                        if (this.m_icon1.visible) {
                            this.m_icon1.visible = false;
                        }
                        if (this.m_number1.visible) {
                            this.m_number1.visible = false;
                        }
                    }
                    else {
                        if (!this.m_text1.visible) {
                            this.m_text1.visible = true;
                        }
                        if (!this.m_icon1.visible) {
                            this.m_icon1.visible = true;
                        }
                        if (!this.m_number1.visible) {
                            this.m_number1.visible = true;
                        }
                        this.m_icon1.icon = Games.WarLoadPic.getItemIcon(Game.config.global.getConfig(GlobalKey.KEY_27_ShouCiGeZuoJiangLi).value1[0]);
                        this.m_number1.text = Game.config.global.getConfig(GlobalKey.KEY_27_ShouCiGeZuoJiangLi).value1[1].toString();
                    }
                }
            };
            CooperationMainPanel.prototype.checkTime = function () {
                if (Game.moduleModel.cooperation.lastReqTimeNum > 0) {
                    if (this.m_havefirst.selectedIndex !== 1) {
                        this.m_havefirst.setSelectedIndex(1);
                        this.m_inviteBtn1.grayed = true;
                    }
                    this.m_time1.text = TimeHelper.TimeFormat(Game.moduleModel.cooperation.lastReqTimeNum);
                }
                else {
                    if (this.m_havefirst.selectedIndex !== 0) {
                        this.m_havefirst.setSelectedIndex(0);
                        this.m_inviteBtn1.grayed = false;
                    }
                }
                if (Game.moduleModel.cooperation.lastReqTimeAutoNum > 0) {
                    if (this.m_have.selectedIndex !== 1) {
                        this.m_have.setSelectedIndex(1);
                    }
                    this.m_time.text = TimeHelper.TimeFormat(Game.moduleModel.cooperation.lastReqTimeAutoNum);
                }
                else {
                    if (this.m_have.selectedIndex !== 0) {
                        this.m_have.setSelectedIndex(0);
                    }
                }
            };
            return CooperationMainPanel;
        }(Cooperation.CooperationMainPanelStruct));
        Cooperation.CooperationMainPanel = CooperationMainPanel;
    })(Cooperation = fgui.Cooperation || (fgui.Cooperation = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=CooperationMainPanel.js.map