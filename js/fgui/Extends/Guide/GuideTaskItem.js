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
    var Guide;
    (function (Guide) {
        var GuideTaskItem = /** @class */ (function (_super) {
            __extends(GuideTaskItem, _super);
            function GuideTaskItem() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            GuideTaskItem.prototype.updateView = function (task) {
                this.m_finished.selectedIndex = task.isFinished ? 0 : 1;
                this.m_title.text = task.mainTaskDesc;
            };
            return GuideTaskItem;
        }(Guide.GuideTaskItemStruct));
        Guide.GuideTaskItem = GuideTaskItem;
    })(Guide = fgui.Guide || (fgui.Guide = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=GuideTaskItem.js.map