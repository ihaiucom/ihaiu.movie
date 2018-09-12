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
        var TextInputStruct = /** @class */ (function (_super) {
            __extends(TextInputStruct, _super);
            function TextInputStruct() {
                return _super.call(this) || this;
            }
            TextInputStruct.createInstance = function () {
                return (fairygui.UIPackage.createObject("PfSkin", "TextInput"));
            };
            TextInputStruct.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_grayed = this.getController("grayed");
                this.m_title = (this.getChild("title"));
            };
            TextInputStruct.URL = "ui://s33x8418rjg3t1w5";
            TextInputStruct.DependPackages = ["PfSkin"];
            return TextInputStruct;
        }(fairygui.GLabel));
        PfSkin.TextInputStruct = TextInputStruct;
    })(PfSkin = fgui.PfSkin || (fgui.PfSkin = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=TextInputStruct.js.map