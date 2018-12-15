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
        var TextScrollStruct = /** @class */ (function (_super) {
            __extends(TextScrollStruct, _super);
            function TextScrollStruct() {
                return _super.call(this) || this;
            }
            TextScrollStruct.createInstance = function () {
                return (fairygui.UIPackage.createObject("PfSkin", "TextScroll"));
            };
            TextScrollStruct.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_title = (this.getChild("title"));
            };
            TextScrollStruct.URL = "ui://s33x8418klss1ui";
            TextScrollStruct.DependPackages = ["PfSkin"];
            return TextScrollStruct;
        }(fairygui.GLabel));
        PfSkin.TextScrollStruct = TextScrollStruct;
    })(PfSkin = fgui.PfSkin || (fgui.PfSkin = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=TextScrollStruct.js.map