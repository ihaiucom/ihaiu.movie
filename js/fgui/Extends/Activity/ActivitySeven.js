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
        var ActivitySeven = /** @class */ (function (_super) {
            __extends(ActivitySeven, _super);
            function ActivitySeven() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            ActivitySeven.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_rewardList.itemRenderer = Laya.Handler.create(this, this.initItem, null, false);
            };
            ActivitySeven.prototype.setData = function (data) {
                this.sevenConfig = Game.moduleModel.activity.sevenConfig;
                // 注册时间
                var regTime = Game.time.timestampToTime(Game.time.registerSeconds);
                var nextTime = Game.time.timestampToTime(Game.time.registerSeconds + data.duration * 24 * 3600);
                if (LangManager.Instance.lang == LangType.zh_cn) {
                    this.m_tip1Val.text = format(Game.config.msg.getConfig(MsgKey.day_duration).notice, regTime[1], regTime[2], nextTime[1], nextTime[2]);
                }
                else {
                    this.m_tip1Val.text = format(Game.config.msg.getConfig(MsgKey.day_duration).notice, TimeHelper.MonthText[regTime[1] - 1], regTime[2], TimeHelper.MonthText[nextTime[1] - 1], nextTime[2]);
                }
                this.m_tip2Val.text = data.activities_info;
                this.m_rewardList.numItems = 0;
                this.m_rewardList.numItems = this.sevenConfig.length;
                this.visible = true;
            };
            ActivitySeven.prototype.onRefrush = function () {
                Game.system.getRewardText(this.sevenConfig[Game.moduleModel.activity.curGear].reward, TEXT.StoryGetReward, 0);
                // 签到完成，刷新状态
                this.m_rewardList.numItems = this.sevenConfig.length;
            };
            ActivitySeven.prototype.initItem = function (index, obj) {
                var item = obj;
                item.setData(this.sevenConfig[index], index);
            };
            return ActivitySeven;
        }(Activity.ActivitySevenStruct));
        Activity.ActivitySeven = ActivitySeven;
    })(Activity = fgui.Activity || (fgui.Activity = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=ActivitySeven.js.map