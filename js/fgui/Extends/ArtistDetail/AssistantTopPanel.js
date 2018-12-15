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
    var ArtistDetail;
    (function (ArtistDetail) {
        var AssistantTopPanel = /** @class */ (function (_super) {
            __extends(AssistantTopPanel, _super);
            function AssistantTopPanel() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            AssistantTopPanel.prototype.updateView = function (lessonData) {
                //助理icon
                this.m_icon.url = Game.moduleModel.actor.assistantNpcUrl;
                //助理课程数据
                this.m_lessonItem.updateView(lessonData);
                //课程名称
                this.m_selfId.text = lessonData.config.name;
            };
            return AssistantTopPanel;
        }(ArtistDetail.AssistantTopPanelStruct));
        ArtistDetail.AssistantTopPanel = AssistantTopPanel;
    })(ArtistDetail = fgui.ArtistDetail || (fgui.ArtistDetail = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=AssistantTopPanel.js.map