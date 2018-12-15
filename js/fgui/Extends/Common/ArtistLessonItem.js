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
    var Common;
    (function (Common) {
        var ArtistLessonItem = /** @class */ (function (_super) {
            __extends(ArtistLessonItem, _super);
            function ArtistLessonItem() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.showLv = true;
                _this.showUp = false;
                return _this;
            }
            ArtistLessonItem.prototype.updateView = function (lessonData) {
                var url = lessonData.iconUrl;
                var levelTxt = lessonData.levelTxt;
                this.m_title.text = levelTxt;
                this.m_icon.url = url;
                if (this.showLv && lessonData.level > 0) {
                    this.m_c_visible_level.selectedIndex = 1;
                }
                else {
                    this.m_c_visible_level.selectedIndex = 0;
                }
                this.lessonData = lessonData;
                if (this.showUp) {
                    this.m_c_visible_up.selectedIndex = lessonData.canUp ? 1 : 0;
                }
                else {
                    this.m_c_visible_up.selectedIndex = 0;
                }
            };
            return ArtistLessonItem;
        }(Common.ArtistLessonItemStruct));
        Common.ArtistLessonItem = ArtistLessonItem;
    })(Common = fgui.Common || (fgui.Common = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=ArtistLessonItem.js.map