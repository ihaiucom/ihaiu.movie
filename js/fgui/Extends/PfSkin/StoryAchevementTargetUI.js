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
        var StoryAchevementTargetUI = /** @class */ (function (_super) {
            __extends(StoryAchevementTargetUI, _super);
            function StoryAchevementTargetUI() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            StoryAchevementTargetUI.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.targetTips = [Games.TEXT.StoryAchieveTarget1, Games.TEXT.StoryAchieveTarget2, Games.TEXT.StoryAchieveTarget3];
                this.m_desc.text = TEXT.StoryAchievementDesc;
                this.m_title.text = TEXT.StoryAchievementTitle;
                this.m_list.itemRenderer = Handler.create(this, this.onUpdateItemRender, null, false);
            };
            /**
             *
             * @param index
             * @param item
             */
            StoryAchevementTargetUI.prototype.onUpdateItemRender = function (index, item) {
                var item1 = item;
                item1.updateView(this.targetTips[index], this.storyProgress[index]);
            };
            /**
             *
             * @param data
             */
            StoryAchevementTargetUI.prototype.updateView = function (data) {
                this.storyProgress = data.storyProgressInfo;
                this.m_list.numItems = data.storyProgressInfo.length;
            };
            return StoryAchevementTargetUI;
        }(PfSkin.StoryAchevementTargetUIStruct));
        PfSkin.StoryAchevementTargetUI = StoryAchevementTargetUI;
    })(PfSkin = fgui.PfSkin || (fgui.PfSkin = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=StoryAchevementTargetUI.js.map