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
        var GuideTalkItemStruct = /** @class */ (function (_super) {
            __extends(GuideTalkItemStruct, _super);
            function GuideTalkItemStruct() {
                return _super.call(this) || this;
            }
            GuideTalkItemStruct.createInstance = function () {
                return (fairygui.UIPackage.createObject("Guide", "GuideTalkItem"));
            };
            GuideTalkItemStruct.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_dir = this.getController("dir");
                this.m_testlabel = (this.getChild("testlabel"));
                this.m_headl = (this.getChild("headl"));
                this.m_dialogl = (this.getChild("dialogl"));
                this.m_headr = (this.getChild("headr"));
                this.m_dialogr = (this.getChild("dialogr"));
            };
            GuideTalkItemStruct.URL = "ui://toebkrsr9q7z1j";
            GuideTalkItemStruct.DependPackages = ["Guide", "WarMovie", "Common"];
            return GuideTalkItemStruct;
        }(fairygui.GComponent));
        Guide.GuideTalkItemStruct = GuideTalkItemStruct;
    })(Guide = fgui.Guide || (fgui.Guide = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=GuideTalkItemStruct.js.map