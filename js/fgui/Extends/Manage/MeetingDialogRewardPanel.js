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
        var MeetingDialogRewardPanel = /** @class */ (function (_super) {
            __extends(MeetingDialogRewardPanel, _super);
            function MeetingDialogRewardPanel() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            MeetingDialogRewardPanel.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_list.itemRenderer = Handler.create(this, this.updateItemRender, null, false);
            };
            /**
             * 更新奖励
             * @param index 奖励索引
             * @param item 道具icon
             */
            MeetingDialogRewardPanel.prototype.updateItemRender = function (index, item) {
                item.updateViewByDTNum(this.meetingData.rewards[index]);
            };
            MeetingDialogRewardPanel.prototype.updateView = function (meetingData) {
                this.meetingData = meetingData;
                //目的
                this.m_title.text = Game.moduleModel.meeting.companyGoal;
                //标题
                this.m_name.text = Games.TEXT.MeetingRewardTitle;
                //
                if (meetingData.id > 0) {
                    this.m_list.numItems = meetingData.rewards.length;
                }
            };
            return MeetingDialogRewardPanel;
        }(Manage.MeetingDialogRewardPanelStruct));
        Manage.MeetingDialogRewardPanel = MeetingDialogRewardPanel;
    })(Manage = fgui.Manage || (fgui.Manage = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=MeetingDialogRewardPanel.js.map