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
        var GuideTalkItem = /** @class */ (function (_super) {
            __extends(GuideTalkItem, _super);
            function GuideTalkItem() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            GuideTalkItem.prototype.updateView = function (config) {
                switch (config.anchor) {
                    case Games.GuideAnchor.Left:
                        this.m_dir.selectedIndex = 0;
                        this.m_headl.m_icon.icon = config.bodyIconUrl;
                        this.m_dialogr.text = config.content;
                        this.m_dialogl.text = config.content;
                        break;
                    case Games.GuideAnchor.Right:
                        this.m_dir.selectedIndex = 1;
                        this.m_headr.m_icon.icon = config.bodyIconUrl;
                        this.m_dialogr.text = config.content;
                        this.m_dialogl.text = config.content;
                        break;
                    default:
                        break;
                }
                this.m_testlabel.visible = false;
                this.m_testlabel.text = config.content;
            };
            return GuideTalkItem;
        }(Guide.GuideTalkItemStruct));
        Guide.GuideTalkItem = GuideTalkItem;
    })(Guide = fgui.Guide || (fgui.Guide = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=GuideTalkItem.js.map