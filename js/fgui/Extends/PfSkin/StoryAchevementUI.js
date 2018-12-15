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
        var StoryAchevementUI = /** @class */ (function (_super) {
            __extends(StoryAchevementUI, _super);
            function StoryAchevementUI() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            StoryAchevementUI.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_list.itemRenderer = Handler.create(this, this.onUpdateItemRender, null, false);
                this.m_list.setVirtual();
            };
            /**
             * 更新界面
             */
            StoryAchevementUI.prototype.updateView = function () {
                setScreenSize(this);
                this.storyTaskList = Game.moduleModel.task.getCurrentStoryTask();
                this.m_list.numItems = this.storyTaskList.length;
            };
            /**
             *
             * @param index
             * @param item
             */
            StoryAchevementUI.prototype.onUpdateItemRender = function (index, item) {
                var item1 = item;
                item1.updateView(this.storyTaskList[index]);
            };
            return StoryAchevementUI;
        }(PfSkin.StoryAchevementUIStruct));
        PfSkin.StoryAchevementUI = StoryAchevementUI;
    })(PfSkin = fgui.PfSkin || (fgui.PfSkin = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=StoryAchevementUI.js.map