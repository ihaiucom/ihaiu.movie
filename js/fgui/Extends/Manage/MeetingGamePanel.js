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
        var MeetingGamePanel = /** @class */ (function (_super) {
            __extends(MeetingGamePanel, _super);
            function MeetingGamePanel() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            MeetingGamePanel.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_minelist.setVirtualAndLoop();
                this.m_stopBtn.text = Games.TEXT.MeetingGameStop;
                this.m_stopBtn.onClick(this, this.onClickStopBtn);
                this.m_title.text = TEXT.MeetingInMeeting;
                this.m_minelist.itemRenderer = Handler.create(this, this.updateItemRender, null, false);
            };
            MeetingGamePanel.prototype.updateItemRender = function (index, item) {
                var item1 = item;
                item1.m_dice.selectedIndex = this.random[index];
            };
            MeetingGamePanel.prototype.onClickStopBtn = function () {
                var _this = this;
                if (this.isResult == false) {
                    this.isResult = true;
                    this.clearScroll();
                    var preIndex = this.mineResult - 1;
                    var lastIndex = this.mineResult + 1;
                    if (preIndex < 0) {
                        preIndex = preIndex + 6;
                    }
                    if (lastIndex > 5) {
                        lastIndex = 0;
                    }
                    this.random = [preIndex, this.mineResult, lastIndex];
                    this.m_minelist.scrollPane.setPosY(20);
                    this.m_minelist.numItems = this.random.length;
                    setTimeout(function () {
                        _this.moduleView.m_c_result_effect.selectedIndex = 1;
                        _this.moduleView.m_resultEffectPanel.m_c_result.selectedIndex = _this.resultIndex;
                        if (_this.effect) {
                            Game.sound.playSound(SoundKey.MM09_GoldReward);
                            _this.effect.play(Handler.create(null, function () {
                                _this.moduleView.m_c_result_effect.selectedIndex = 0;
                                _this.moduleView.showResultPanel();
                            }), 1);
                        }
                    }, 1500);
                    // setTimeout(() =>
                    // {
                    // 	this.moduleView.showResultPanel();
                    // }, 2000);
                }
            };
            MeetingGamePanel.prototype.updateView = function () {
                //头像
                var avatarConfig = Game.config.avatar.getConfig(Game.moduleModel.meeting.companyDelegateAvatarId);
                if (avatarConfig) {
                    this.m_head.m_icon.icon = avatarConfig.iconUrl;
                }
                this.isResult = false;
                this.m_target.visible = false;
            };
            //开始随机
            MeetingGamePanel.prototype.startRandom = function () {
                this.m_minelist.scrollPane.scrollTop();
                this.random = [0, 1, 2, 3, 4, 5];
                this.speed = 8;
                if (Game.moduleModel.meeting.isDouble) {
                    this.speed = 10;
                }
                this.m_minelist.numItems = this.random.length;
                Laya.timer.loop(1, this, this.updateScroll);
            };
            MeetingGamePanel.prototype.updateScroll = function () {
                this.m_minelist.scrollPane.setPosY(this.m_minelist.scrollPane.posY + this.speed);
            };
            //结果
            MeetingGamePanel.prototype.updateResult = function (result) {
                this.moduleView.m_c_result_effect.selectedIndex = 0;
                this.m_target.visible = true;
                var gameConfig = Game.config.meetingGame.getConfig(result);
                if (gameConfig) {
                    switch (gameConfig.result) {
                        case MeetingResultType.Win:
                            this.otherResult = Random.rangeBoth(0, 4); //0 - 4
                            this.mineResult = this.otherResult + 1; //1 - 5
                            this.resultIndex = 0;
                            this.effect = this.moduleView.m_resultEffectPanel.m_winEffect.m_t2;
                            break;
                        case MeetingResultType.Draw:
                            this.otherResult = Random.rangeBoth(0, 5); //0 - 5
                            this.mineResult = this.otherResult;
                            this.resultIndex = 2;
                            this.effect = this.moduleView.m_resultEffectPanel.m_deuceEffect.m_t0;
                            break;
                        case MeetingResultType.FailHalf:
                            this.otherResult = Random.rangeBoth(1, 5); //1 - 5
                            this.mineResult = this.otherResult - 1; //0 - 4
                            this.resultIndex = 3;
                            this.effect = this.moduleView.m_resultEffectPanel.m_loseEffect.m_t222;
                            break;
                        case MeetingResultType.FailAll:
                            this.otherResult = Random.rangeBoth(1, 5); //1 - 5
                            this.mineResult = this.otherResult - 1; //0 - 4
                            this.resultIndex = 1;
                            this.effect = this.moduleView.m_resultEffectPanel.m_loseEffect.m_t222;
                            break;
                        default:
                            break;
                    }
                    this.rollTimes = 0;
                    Laya.timer.loop(50, this, this.updataOtherRoll);
                }
                this.startRandom();
            };
            MeetingGamePanel.prototype.updataOtherRoll = function () {
                if (this.rollTimes > 5) {
                    Laya.timer.clear(this, this.updataOtherRoll);
                    this.m_target.m_dice.selectedIndex = this.otherResult;
                }
                else {
                    this.rollTimes++;
                    this.m_target.m_dice.selectedIndex = Random.rangeBoth(0, 5);
                }
            };
            MeetingGamePanel.prototype.onRandom = function () {
            };
            MeetingGamePanel.prototype.clearScroll = function () {
                Laya.timer.clear(this, this.updateScroll);
            };
            return MeetingGamePanel;
        }(Manage.MeetingGamePanelStruct));
        Manage.MeetingGamePanel = MeetingGamePanel;
    })(Manage = fgui.Manage || (fgui.Manage = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=MeetingGamePanel.js.map