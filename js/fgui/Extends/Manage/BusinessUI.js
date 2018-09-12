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
    var Manage;
    (function (Manage) {
        var BusinessUI = /** @class */ (function (_super) {
            __extends(BusinessUI, _super);
            function BusinessUI() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.LevelChatReplace = "{level}";
                _this.FansChatReplace = "{fans}";
                return _this;
            }
            BusinessUI.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.chats = [this.LevelChatReplace, this.FansChatReplace];
                this.m_nextBtn.text = Games.TEXT.BusinessNextPage;
                this.m_nextBtn.visible = false;
                this.m_tip.text = Games.TEXT.HaveAgentCanAutoRead;
                this.m_auto.text = Games.TEXT.AutoRead;
            };
            //更新界面显示
            BusinessUI.prototype.updateView = function () {
                this.clearTimerLoop();
                this.businessData = Game.moduleModel.business.getBusinessData();
                this.m_contentPanel.m_read.selectedIndex = 0;
                this.m_c1.selectedIndex = 0;
                if (this.businessData) {
                    //待批阅
                    this.m_remain.text = format(Games.TEXT.BusinessRemainRead, this.businessData.nextBusinessNum, this.businessData.lineLimit);
                    if (this.businessData.nextBusinessNum > 0) {
                        //临时秘书 不属于永久
                        if (Game.moduleModel.secretary.isTempSecretary) {
                            var remainTimes = Game.moduleModel.secretary.autoBusinessReadNum;
                            if (remainTimes <= 0) {
                                this.m_tip.text = Games.TEXT.HaveAgentCanAutoRead;
                            }
                            else {
                                this.m_tip.text = format(TEXT.SecretaryRemainAutoReadNum, remainTimes);
                            }
                        }
                        else {
                            this.m_tip.text = Games.TEXT.HaveAgentCanAutoRead;
                        }
                        //自动批阅
                        this.m_checkbox.selected = Game.moduleModel.secretary.isAutoRead;
                        //配置
                        var config = this.businessData.config;
                        if (config) {
                            //头像
                            this.m_head.m_icon.icon = Game.config.avatar.getConfig(config.icon).iconUrl;
                            //更新
                            this.m_contentPanel.updateView(this.businessData);
                            //发件人
                            this.m_name.text = format(Games.TEXT.BusinessSendName, config.from);
                            ;
                            //名称
                            this.m_title.text = config.name;
                            //公司名字
                            this.m_contentPanel.m_company.text = User.info.name;
                            this.charIndex = 0;
                            var desc = config.description;
                            var value = 0;
                            var num = 0;
                            for (var index = 0; index < this.chats.length; index++) {
                                var element = this.chats[index];
                                switch (element) {
                                    case this.FansChatReplace:
                                        num = this.userCurExp;
                                        break;
                                    case this.LevelChatReplace:
                                        num = User.info.level;
                                        break;
                                    default:
                                        break;
                                }
                                value = num - Math.floor(num * Random.range(0, 0.2));
                                value = Math.max(1, value);
                                desc = desc.replace(element, value + "");
                            }
                            //
                            this.content = desc;
                            this.curContent = "";
                            this.m_contentPanel.m_content.text = "";
                            this.startTypeWrite();
                            // this.m_contentPanel.m_t0.play(Handler.create(this, this.startTypeWrite));
                        }
                    }
                    else {
                        this.onClickCloseBtn();
                    }
                }
            };
            Object.defineProperty(BusinessUI.prototype, "userCurExp", {
                //		
                get: function () {
                    var prevExp = 0;
                    for (var i = 0; i < User.info.level; i++) {
                        var cfg = Game.config.playerLevel.getConfig(i);
                        if (cfg != null) {
                            prevExp += cfg.fans;
                        }
                    }
                    return prevExp + User.info.fans;
                },
                enumerable: true,
                configurable: true
            });
            //打字机效果
            BusinessUI.prototype.startTypeWrite = function () {
                var speed = Game.moduleModel.secretary.isAutoRead ? 20 : 100;
                this.isTyping = true;
                //
                Laya.timer.loop(speed, this, this.showChatByTime);
                this.showChatByTime();
            };
            BusinessUI.prototype.clearTimerLoop = function () {
                Laya.timer.clear(this, this.showChatByTime);
            };
            BusinessUI.prototype.charByTimeComplete = function () {
                var _this = this;
                this.clearTimerLoop();
                this.isTyping = false;
                this.m_contentPanel.m_content.text = this.content;
                this.m_contentPanel.m_read.selectedIndex = 1;
                this.m_nextBtn.visible = Game.moduleModel.secretary.isAutoRead == false;
                this.m_contentPanel.m_t0.play(Handler.create(null, function () {
                    if (Game.moduleModel.secretary.isAutoRead) {
                        _this.onClickNextBtn();
                    }
                    else {
                        _this.m_nextBtn.visible = true;
                    }
                }));
            };
            BusinessUI.prototype.showChatByTime = function () {
                if (this.charIndex >= this.content.length) {
                    this.charByTimeComplete();
                }
                else {
                    this.curContent += this.content.charAt(this.charIndex);
                    this.m_contentPanel.m_content.text = this.curContent;
                    this.charIndex++;
                }
            };
            //关闭界面
            BusinessUI.prototype.onClickCloseBtn = function () {
                this.moduleWindow.menuClose();
            };
            BusinessUI.prototype.onClickNextBtn = function () {
                this.m_nextBtn.visible = false;
                Game.moduleModel.business.rewardId = this.businessData.id;
                Game.protosender.manageBusiness.GetReward();
            };
            BusinessUI.prototype.onGetRewardBack = function () {
                var _this = this;
                if (Game.moduleModel.business.rewardId > 0) {
                    var config = Game.config.business.getConfig(Game.moduleModel.business.rewardId);
                    if (config) {
                        var otherItem = new DTItemNum();
                        otherItem.itemId = EItemId.expect;
                        otherItem.itemNum = config.expect;
                        var items_1 = config.reward.concat();
                        items_1.push(otherItem);
                        var isAuto_1 = Game.moduleModel.secretary.isAutoRead;
                        Game.system.getItemText(items_1, function () {
                            Game.system.playEffects(items_1);
                            if (Game.moduleModel.business.getBusinessData().isMaxDaily) {
                                Game.system.toastMsg(MsgKey.business_down);
                            }
                            else {
                                if (Game.moduleModel.business.getBusinessData().nextBusinessNum > 0) {
                                    if (_this.m_checkbox.selected && Game.moduleModel.secretary.isTempSecretary && Game.moduleModel.secretary.autoBusinessReadNum <= 0) {
                                        Game.moduleModel.secretary.isAutoRead = false;
                                        //免费次数已经用完
                                        Game.system.confirmText(Game.config.msg.getTxtFormat(MsgKey.secretary_experience, Game.config.msg.getTxt(MsgKey.secretary_auto3)), TEXT.SecretaryForeverAgent, null, function () {
                                            Game.menu.open(MenuId.Weal, 1);
                                        }, null, Game.config.msg.getTxt(MsgKey.go_to_hire), TEXT.ButtonCannel, false);
                                    }
                                    _this.m_c1.selectedIndex = 1;
                                    _this.m_bar.m_progress.value = 0;
                                    var speed = isAuto_1 ? 200 : 3000;
                                    Laya.Tween.to(_this.m_bar.m_progress, { value: 100 }, speed, Laya.Ease.linearIn, Handler.create(null, function () {
                                        _this.updateView();
                                    }));
                                }
                                else {
                                    _this.onClickCloseBtn();
                                }
                            }
                        }, isAuto_1);
                    }
                    Game.moduleModel.business.rewardId = 0;
                }
            };
            BusinessUI.prototype.onWindowShow = function () {
                this.m_commonDialog.m_closeBtn.onClick(this, this.onClickCloseBtn);
                this.m_nextBtn.onClick(this, this.onClickNextBtn);
                this.m_checkbox.onClick(this, this.onClickCheckBoxBtn);
                fairygui.GRoot.inst.onClick(this, this.onClickStage);
                Game.protoOkEvent.add(ProtoEventKey.manageBusiness_GetReward, this.onGetRewardBack, this);
                this.updateView();
            };
            BusinessUI.prototype.onClickStage = function () {
                if (Game.moduleModel.secretary.isAutoRead && this.isTyping) {
                    this.charByTimeComplete();
                }
            };
            BusinessUI.prototype.onWindowHide = function () {
                this.m_commonDialog.m_closeBtn.offClick(this, this.onClickCloseBtn);
                this.m_nextBtn.offClick(this, this.onClickNextBtn);
                this.m_checkbox.offClick(this, this.onClickCheckBoxBtn);
                fairygui.GRoot.inst.offClick(this, this.onClickStage);
                this.clearTimerLoop();
                Laya.Tween.clearAll(this.m_bar.m_progress);
                this.m_nextBtn.visible = false;
                Game.protoOkEvent.remove(ProtoEventKey.manageBusiness_GetReward, this.onGetRewardBack, this);
            };
            //
            BusinessUI.prototype.onClickCheckBoxBtn = function () {
                if (this.m_checkbox.selected) {
                    this.setAutoRead();
                }
                else {
                    Game.moduleModel.secretary.isAutoRead = this.m_checkbox.selected;
                }
            };
            //自动阅读
            BusinessUI.prototype.setAutoRead = function () {
                if (Game.moduleModel.secretary.autoBusinessReadNum > 0) {
                    Game.moduleModel.secretary.isAutoRead = this.m_checkbox.selected;
                }
                else {
                    if (Game.moduleModel.secretary.isTempSecretary) {
                        //免费次数已经用完
                        Game.system.confirmText(Game.config.msg.getTxtFormat(MsgKey.secretary_experience, Game.config.msg.getTxt(MsgKey.secretary_auto3)), TEXT.SecretaryForeverAgent, null, function () {
                            Game.menu.open(MenuId.Weal, 1);
                        }, null, Game.config.msg.getTxt(MsgKey.go_to_hire), TEXT.ButtonCannel, false);
                    }
                    else {
                        //没有秘书购买
                        Game.system.confirmText(Game.config.msg.getTxtFormat(MsgKey.secretary_not_owned, Game.config.msg.getTxt(MsgKey.secretary_auto3)), TEXT.SecretaryForeverAgent, null, function () {
                            Game.menu.open(MenuId.Weal, 1);
                        }, null, Game.config.msg.getTxt(MsgKey.go_to_hire), TEXT.ButtonCannel, false);
                    }
                    this.m_checkbox.selected = false;
                }
            };
            return BusinessUI;
        }(Manage.BusinessUIStruct));
        Manage.BusinessUI = BusinessUI;
    })(Manage = fgui.Manage || (fgui.Manage = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=BusinessUI.js.map