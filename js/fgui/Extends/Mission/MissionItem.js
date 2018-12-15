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
                this.refreshReward();
                // 设置按钮状态
                this.m_gotImg.visible = false;
                this.m_barFinishBg.visible = false;
                switch (data.protoData.state) {
                    case EAchievementState.rewarded:
                        this.m_state_controler.selectedIndex = 2;
                        break;
                    case EAchievementState.finished:
                        this.m_state_controler.selectedIndex = 1;
                        break;
                    default:
                        this.m_state_controler.selectedIndex = 0;
                        break;
                }
            };
            // 刷新奖励列表		
            MissionItem.prototype.refreshReward = function () {
                if (this.data.config.reward && this.data.config.reward.length > 0) {
                    var data = this.data.config.reward[0];
                    this.m_reward.setItemNumData(data);
                }
            };
            return MissionItem;
        }(Mission.MissionItemStruct));
        Mission.MissionItem = MissionItem;
    })(Mission = fgui.Mission || (fgui.Mission = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=MissionItem.js.map