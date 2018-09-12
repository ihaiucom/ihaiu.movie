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
    var PfSkin;
    (function (PfSkin) {
        var StoryAchevementItem = /** @class */ (function (_super) {
            __extends(StoryAchevementItem, _super);
            function StoryAchevementItem() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            StoryAchevementItem.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_okBtn.onClick(this, this.onClickOkBtn);
                this.m_okBtn.text = TEXT.StoryGetReward;
                this.m_list.itemRenderer = Handler.create(this, this.updateRewardItem, null, false);
            };
            /**
             *
             * @param index
             * @param item
             */
            StoryAchevementItem.prototype.updateRewardItem = function (index, item) {
                var dtItem = this.config.reward[index];
                var itemConfig = Game.config.item.getConfig(dtItem.itemId);
                item.icon = itemConfig.iconUrl;
                item.text = dtItem.itemNum + "";
            };
            StoryAchevementItem.prototype.onClickOkBtn = function () {
                Game.protosender.task.reward(this.taskData.uuid);
            };
            /**
             *
             * @param data 任务数据
             */
            StoryAchevementItem.prototype.updateView = function (data) {
                //
                this.taskData = data;
                //配值
                this.config = data.config;
                //完成xx个
                this.m_desc.text = format(this.config.name, this.config.goal);
                //10/100
                this.m_progress.text = format("({0}/{1})", data.progress, this.config.goal);
                //进度条
                // this.m_bar.max = this.config.goal;
                // this.m_bar.value = data.progress;
                // //奖励
                this.m_list.numItems = this.config.reward.length;
                //完成
                if (data.isFinished) {
                    this.m_okBtn.touchable = true;
                    this.m_okBtn.grayed = false;
                    this.m_c_color.selectedIndex = 1;
                }
                else {
                    this.m_okBtn.touchable = false;
                    this.m_okBtn.grayed = true;
                    this.m_c_color.selectedIndex = 0;
                }
            };
            return StoryAchevementItem;
        }(PfSkin.StoryAchevementItemStruct));
        PfSkin.StoryAchevementItem = StoryAchevementItem;
    })(PfSkin = fgui.PfSkin || (fgui.PfSkin = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=StoryAchevementItem.js.map