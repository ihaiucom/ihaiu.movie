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
                // 列表
                this.m_signList.itemRenderer = Laya.Handler.create(this, this.initItem, null, false);
                this.m_signList.itemProvider = Handler.create(this, this.providerItem, null, false);
                // 领取按钮
                this.m_okBtn.onClick(this, this.onClickOkBtn, [-1]);
            };
            // 选择签到领取
            SignPanel.prototype.onClickOkBtn = function (index) {
                if (!Game.moduleModel.activity.curIsSign && (index === -1 || index === Game.moduleModel.activity.curSignDay - 1)) {
                    Game.moduleModel.activity.sendSign();
                }
                else {
                    if (Game.moduleModel.activity.curIsSign && index === Game.moduleModel.activity.curSignDay - 1) {
                        Game.system.toastText(Game.config.msg.getConfig(MsgKey.daily_sign).notice);
                    }
                    else {
                        console.log("提示物品详情弹窗");
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
                }
                else {
                    var item = obj;
                    item.setData(data);
                    item.onClick(this, this.onClickOkBtn, [index]);
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
                var curDay = 0;
                for (var i = list.length - 1; i >= 0; i--) {
                    if (list[i].day <= curDay) {
                        list.slice(i, 1);
                    }
                }
                if (list.length > 0) {
                    list = list.sort(function (a, b) { return b.day - a.day; });
                    var conf = list[0];
                    this.m_nextIcon.icon = Games.WarLoadPic.getItemIcon(conf.reward.itemId);
                    this.m_nextIcon.visible = true;
                    this.m_nextNum.text = conf.reward.itemNum.toString();
                    this.m_nextTip.text = conf.info;
                    var itemConf = Game.config.item.getConfig(conf.reward.itemId);
                    this.m_star.m_Star.setSelectedIndex(itemConf.itemStarNum - 1);
                }
                else {
                    this.m_nextIcon.visible = false;
                    this.m_nextNum.text = "";
                    this.m_nextTip.text = "";
                    this.m_star.m_Star.setSelectedIndex(-1);
                }
            };
            return SignPanel;
        }(Activity.SignPanelStruct));
        Activity.SignPanel = SignPanel;
    })(Activity = fgui.Activity || (fgui.Activity = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=SignPanel.js.map