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
        var SignPanel = /** @class */ (function (_super) {
            __extends(SignPanel, _super);
            function SignPanel() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            SignPanel.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_signList.setVirtual();
                // 列表
                this.m_signList.itemRenderer = Laya.Handler.create(this, this.initItem, null, false);
                this.m_signList.on(fairygui.Events.CLICK_ITEM, this, this.onClickItem);
                this.m_signList.itemProvider = Handler.create(this, this.providerItem, null, false);
                // 领取按钮
                this.m_okBtn.onClick(this, this.onClickOkBtn, [-1]);
            };
            SignPanel.prototype.onClickItem = function (obj) {
                var index = this.m_signList.getChildIndex(obj);
                var realIndex = this.m_signList.childIndexToItemIndex(index);
                this.onClickOkBtn(realIndex, obj);
            };
            // 选择签到领取
            SignPanel.prototype.onClickOkBtn = function (index, obj) {
                if (!Game.moduleModel.activity.curIsSign && (index === -1 || index === Game.moduleModel.activity.curSignDay - 1)) {
                    GlobalModalWaiting.show();
                    Game.moduleModel.activity.sendSign();
                }
                else {
                    if (Game.moduleModel.activity.curIsSign && index < Game.moduleModel.activity.curSignDay) {
                        Game.system.toastText(Game.config.msg.getConfig(MsgKey.daily_sign).notice);
                    }
                    else {
                        Game.system.showItemInfo(obj, this.signList[index].reward.itemId);
                    }
                }
            };
            SignPanel.prototype.signRewardTip = function () {
                var sevDrop = Game.moduleModel.activity.signDrop;
                if (sevDrop !== null) {
                    var drop = new DTItemNum();
                    drop.itemId = sevDrop.itemId;
                    drop.itemNum = sevDrop.amount;
                    Game.system.getRewardText([drop], TEXT.StoryGetReward, 0);
                    // 签到完成，刷新状态
                    this.setData();
                }
                else {
                    this.setData();
                }
            };
            SignPanel.prototype.setData = function () {
                // 当前第几周
                var curCycle = Game.moduleModel.activity.curCycle;
                // 配置信息
                this.signList = Game.config.dailySign.getSingList(curCycle);
                this.m_signList.numItems = this.signList.length;
                // 以下判断提示信息
                this.onShowNextTip();
                this.m_okBtn.visible = !Game.moduleModel.activity.curIsSign;
                this.visible = true;
            };
            // 单个item赋值
            SignPanel.prototype.initItem = function (index, obj) {
                var data = this.signList[index];
                if (data == null) {
                    return null;
                }
                if (data.reward.itemType == 7) {
                    var item = obj;
                    item.setData(data);
                    // item.onClick(this, this.onClickOkBtn, [index]);
                }
                else {
                    var item = obj;
                    item.setData(data);
                    // item.onClick(this, this.onClickOkBtn, [index]);
                }
            };
            SignPanel.prototype.providerItem = function (index, obj) {
                var data = this.signList[index];
                if (data.reward.itemType == 7) {
                    return fgui.Activity.SignItem2.URL;
                }
                else {
                    return fgui.Activity.SignItem.URL;
                }
            };
            // 提示最新预告
            SignPanel.prototype.onShowNextTip = function () {
                var list = Game.config.dailySignTrailer.getConfigList();
                var curList = new Array();
                for (var i = list.length - 1; i >= 0; i--) {
                    if (list[i].day > Game.moduleModel.activity.curCycle) {
                        curList.push(list[i]);
                    }
                }
                if (curList.length > 0) {
                    this.m_noNext.setSelectedIndex(0);
                    curList = curList.sort(function (a, b) { return b.day - a.day; });
                    var conf = curList[0];
                    this.m_nextIcon.icon = Games.WarLoadPic.getItemIcon(conf.reward.itemId);
                    this.m_nextIcon.visible = true;
                    this.m_nextNum.text = conf.reward.itemNum.toString();
                    this.m_nextTip.text = conf.info;
                    var itemConf = Game.config.item.getConfig(conf.reward.itemId);
                    this.m_starList.numItems = itemConf.itemStarNum;
                }
                else {
                    this.m_noNext.setSelectedIndex(1);
                }
            };
            return SignPanel;
        }(Activity.SignPanelStruct));
        Activity.SignPanel = SignPanel;
    })(Activity = fgui.Activity || (fgui.Activity = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=SignPanel.js.map