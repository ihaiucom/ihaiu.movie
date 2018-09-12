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
        var CooperationRewardBox = /** @class */ (function (_super) {
            __extends(CooperationRewardBox, _super);
            function CooperationRewardBox() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.hideIndex = 0;
                _this.indexOf = 0;
                _this.status = 0;
                _this.canGetReward = false;
                return _this;
            }
            CooperationRewardBox.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_rewardList.itemRenderer = Laya.Handler.create(this, this.progressItem, null, false);
                // 显示奖励提示
                this.onClick(this, this.onClicShwoRewardBtn);
            };
            // 奖励宝箱		
            CooperationRewardBox.prototype.progressItem = function (index, obj) {
                var item = obj;
                item.setData(this.rewardList[index]);
            };
            CooperationRewardBox.prototype.onClicShwoRewardBtn = function () {
                if (this.status !== 1 && Game.moduleModel.cooperation.cooperTaskData.progree > this.indexOf) {
                    Game.moduleModel.cooperation.sRewardGetCall.add(this.getReward, this);
                    //领奖
                    Game.moduleModel.cooperation.sendGetProgressTask(this.indexOf + 1);
                }
                else {
                    // 奖励提示
                    if (!this.m_rewardCom.visible) {
                        this.m_rewardCom.visible = true;
                    }
                    this.hideIndex = 1;
                }
            };
            CooperationRewardBox.prototype.getReward = function (msg) {
                if (msg.index === this.indexOf + 1) {
                    Game.system.getRewardText(this.rewardList, TEXT.StoryGetReward, 0);
                    Game.moduleModel.cooperation.sRewardGetCall.remove(this.getReward, this);
                }
            };
            CooperationRewardBox.prototype.hideReward = function () {
                this.hideIndex--;
                if (this.hideIndex < 0) {
                    if (this.m_rewardCom.visible) {
                        this.m_rewardCom.visible = false;
                    }
                }
            };
            CooperationRewardBox.prototype.setData = function (msg, index) {
                this.hideIndex = 0;
                Game.moduleModel.cooperation.sRewardHideCall.add(this.hideReward, this);
                this.rewardList = msg.reward;
                if (this.rewardList.length > 1) {
                    this.m_listBg.width = (this.rewardList.length - 1) * 70 + 10;
                }
                else {
                    this.m_listBg.width = 100;
                }
                this.m_rewardList.numItems = this.rewardList.length;
                this.indexOf = index;
                this.m_numVal.text = (index + 1).toString();
                this.m_level1.setSelectedIndex(0);
                this.m_level2.setSelectedIndex(0);
                this.m_level3.setSelectedIndex(0);
                this.m_level4.setSelectedIndex(0);
                this.m_level5.setSelectedIndex(0);
                this.m_levle6.setSelectedIndex(0);
                this.status = 0;
                if (Game.moduleModel.cooperation.cooperData.isCaptain) {
                    this.status = (Game.moduleModel.cooperation.cooperTaskData.captainRewardStatus >> index) & 1;
                }
                else {
                    this.status = (Game.moduleModel.cooperation.cooperTaskData.rewardStatus >> index) & 1;
                }
                this.canGetReward = Game.moduleModel.cooperation.cooperTaskData.progree > this.indexOf;
                switch (index) {
                    case 0:
                        {
                            if (this.status === 1) {
                                this.canGetReward = false;
                                this.m_level1.setSelectedIndex(3);
                            }
                            else {
                                if (this.canGetReward) {
                                    this.m_level1.setSelectedIndex(2);
                                }
                                else {
                                    this.m_level1.setSelectedIndex(1);
                                }
                            }
                        }
                        break;
                    case 1:
                        {
                            if (this.status === 1) {
                                this.canGetReward = false;
                                this.m_level2.setSelectedIndex(3);
                            }
                            else {
                                if (this.canGetReward) {
                                    this.m_level2.setSelectedIndex(2);
                                }
                                else {
                                    this.m_level2.setSelectedIndex(1);
                                }
                            }
                        }
                        break;
                    case 2:
                        {
                            if (this.status === 1) {
                                this.canGetReward = false;
                                this.m_level3.setSelectedIndex(3);
                            }
                            else {
                                if (this.canGetReward) {
                                    this.m_level3.setSelectedIndex(2);
                                }
                                else {
                                    this.m_level3.setSelectedIndex(1);
                                }
                            }
                        }
                        break;
                    case 3:
                        {
                            if (this.status === 1) {
                                this.canGetReward = false;
                                this.m_level4.setSelectedIndex(3);
                            }
                            else {
                                if (this.canGetReward) {
                                    this.m_level4.setSelectedIndex(2);
                                }
                                else {
                                    this.m_level4.setSelectedIndex(1);
                                }
                            }
                        }
                        break;
                    case 4:
                        {
                            if (this.status === 1) {
                                this.canGetReward = false;
                                this.m_level5.setSelectedIndex(3);
                            }
                            else {
                                if (this.canGetReward) {
                                    this.m_level5.setSelectedIndex(2);
                                }
                                else {
                                    this.m_level5.setSelectedIndex(1);
                                }
                            }
                        }
                        break;
                    case 5:
                        {
                            if (this.status === 1) {
                                this.canGetReward = false;
                                this.m_levle6.setSelectedIndex(3);
                            }
                            else {
                                if (this.canGetReward) {
                                    this.m_levle6.setSelectedIndex(2);
                                }
                                else {
                                    this.m_levle6.setSelectedIndex(1);
                                }
                            }
                        }
                        break;
                }
            };
            return CooperationRewardBox;
        }(Cooperation.CooperationRewardBoxStruct));
        Cooperation.CooperationRewardBox = CooperationRewardBox;
    })(Cooperation = fgui.Cooperation || (fgui.Cooperation = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=CooperationRewardBox.js.map