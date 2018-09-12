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
        var TextStruct = /** @class */ (function (_super) {
            __extends(TextStruct, _super);
            function TextStruct() {
                return _super.call(this) || this;
            }
            TextStruct.createInstance = function () {
                return (fairygui.UIPackage.createObject("Guide", "Text"));
            };
            TextStruct.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_title = (this.getChild("title"));
            };
            TextStruct.URL = "ui://toebkrsrfcz71r";
            TextStruct.DependPackages = ["Guide"];
            return TextStruct;
        }(fairygui.GLabel));
        Guide.TextStruct = TextStruct;
    })(Guide = fgui.Guide || (fgui.Guide = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=TextStruct.js.map