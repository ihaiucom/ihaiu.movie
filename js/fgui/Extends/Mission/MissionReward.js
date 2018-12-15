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
        var MissionReward = /** @class */ (function (_super) {
            __extends(MissionReward, _super);
            function MissionReward() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            MissionReward.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.onClick(this, this.onClickBoxItem);
                this.tip = fgui.Common.TipReward.createInstance();
            };
            MissionReward.prototype.setData = function (index, config, progressData) {
                this.index = index;
                this.config = config;
                this.progressData = progressData;
                this.needOrderNum = config.completion - progressData.progress;
                this.enableGet = progressData.progress >= config.completion;
                this.isGet = progressData.isGet(index - 1);
                this.title = config.completion.toString();
                this.m_twinkle.stop();
                // this.m_default.stop();
                var url = "";
                var iconIndex = index >= 2 ? index - 1 : 1;
                if (!this.isGet) {
                    if (this.enableGet) {
                        url = format("icon_reward_lv{0}_2", iconIndex);
                        this.m_twinkle.play(null, -1);
                    }
                    else {
                        url = format("icon_reward_lv{0}_1", iconIndex);
                        // this.m_default.play(null);
                    }
                }
                else {
                    url = format("icon_reward_lv{0}_3", iconIndex);
                }
                this.m_icon.icon = fairygui.UIPackage.getItemURL(Games.GuiPackageNames.Common, url);
            };
            MissionReward.prototype.onClickBoxItem = function () {
                if (this.enableGet) {
                    Game.protosender.progressBox.GetReward(this.progressData.uuid, this.index);
                }
                if (!this.isGet && !this.enableGet) {
                    if (this.config) {
                        this.showRewardUI(this.config.reward);
                    }
                }
            };
            MissionReward.prototype.showRewardUI = function (items) {
                this.tip.setItems(items);
                this.tip.showPopup(this);
            };
            return MissionReward;
        }(Mission.MissionRewardStruct));
        Mission.MissionReward = MissionReward;
    })(Mission = fgui.Mission || (fgui.Mission = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=MissionReward.js.map