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
    var Mission;
    (function (Mission) {
        var MissionItem = /** @class */ (function (_super) {
            __extends(MissionItem, _super);
            function MissionItem() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            MissionItem.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_buttonGet.onClick(this, this.onClickGetButton);
                this.m_buttonGo.onClick(this, this.onClickGoButton);
            };
            MissionItem.prototype.onClickGetButton = function () {
                Game.protosender.task.reward(this.data.protoData.uuid);
            };
            MissionItem.prototype.onClickGoButton = function () {
                Game.menu.close(MenuId.Mission);
                if (this.data.config.guide > 0) {
                    Game.guide.readyPlayGuide(this.data.config.guide, true);
                }
                // Game.menu.open(MenuId.Home);
            };
            MissionItem.prototype.setData = function (data) {
                this.data = data;
                this.m_name.text = data.config.name;
                this.m_progressBar.max = data.config.goal;
                this.m_progressBar.value = data.protoData.progress;
                this.m_stateText.text = Games.TEXT.StateText;
                this.m_state.text = data.config.Complete.toString();
                // 刷新奖励列表
                this.refreshRewardList();
                // 设置按钮状态
                this.m_gotImg.visible = false;
                this.m_barFinishBg.visible = false;
                switch (data.protoData.state) {
                    case EAchievementState.rewarded:
                        this.m_buttonGet.visible = false;
                        this.m_buttonGo.visible = false;
                        this.m_barFinishBg.visible = false;
                        this.m_gotImg.visible = true;
                        break;
                    case EAchievementState.finished:
                        this.m_buttonGet.visible = true;
                        this.m_buttonGo.visible = false;
                        this.m_barFinishBg.visible = true;
                        this.m_gotImg.visible = false;
                        break;
                    default:
                        this.m_buttonGet.visible = false;
                        this.m_buttonGo.visible = true;
                        this.m_barFinishBg.visible = false;
                        this.m_gotImg.visible = false;
                        break;
                }
            };
            // 刷新奖励列表		
            MissionItem.prototype.refreshRewardList = function () {
                var list = this.m_rewardList;
                list.setVirtual();
                list.setVirtualAndLoop();
                if (!list.itemRenderer)
                    list.itemRenderer = Handler.create(this, this.renderListItem, null, false);
                list.numItems = this.data.config.reward.length;
            };
            MissionItem.prototype.renderListItem = function (index, item) {
                var data = this.data.config.reward[index];
                item.setItemNumData(data);
            };
            return MissionItem;
        }(Mission.MissionItemStruct));
        Mission.MissionItem = MissionItem;
    })(Mission = fgui.Mission || (fgui.Mission = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=MissionItem.js.map