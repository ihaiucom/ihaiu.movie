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
        var GuideClickHandStruct = /** @class */ (function (_super) {
            __extends(GuideClickHandStruct, _super);
            function GuideClickHandStruct() {
                return _super.call(this) || this;
            }
            GuideClickHandStruct.createInstance = function () {
                return (fairygui.UIPackage.createObject("Guide", "GuideClickHand"));
            };
            GuideClickHandStruct.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_c_hand_dir = this.getController("c_hand_dir");
                this.m_c_circle_visible = this.getController("c_circle_visible");
                this.m_circle = (this.getChild("circle"));
                this.m_hand = (this.getChild("hand"));
                this.m_tcircle = this.getTransition("tcircle");
            };
            GuideClickHandStruct.URL = "ui://toebkrsrhz3mp";
            GuideClickHandStruct.DependPackages = ["Guide"];
            return GuideClickHandStruct;
        }(fairygui.GComponent));
        Guide.GuideClickHandStruct = GuideClickHandStruct;
    })(Guide = fgui.Guide || (fgui.Guide = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=GuideClickHandStruct.js.map