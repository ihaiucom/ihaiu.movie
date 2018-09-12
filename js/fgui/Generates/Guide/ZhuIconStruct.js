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
        var ZhuIconStruct = /** @class */ (function (_super) {
            __extends(ZhuIconStruct, _super);
            function ZhuIconStruct() {
                return _super.call(this) || this;
            }
            ZhuIconStruct.createInstance = function () {
                return (fairygui.UIPackage.createObject("Guide", "ZhuIcon"));
            };
            ZhuIconStruct.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_icon = (this.getChild("icon"));
            };
            ZhuIconStruct.URL = "ui://toebkrsrji9k1q";
            ZhuIconStruct.DependPackages = ["Guide", "Common"];
            return ZhuIconStruct;
        }(fairygui.GLabel));
        Guide.ZhuIconStruct = ZhuIconStruct;
    })(Guide = fgui.Guide || (fgui.Guide = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=ZhuIconStruct.js.map