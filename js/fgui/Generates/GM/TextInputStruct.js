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
    var GM;
    (function (GM) {
        var TextInputStruct = /** @class */ (function (_super) {
            __extends(TextInputStruct, _super);
            function TextInputStruct() {
                return _super.call(this) || this;
            }
            TextInputStruct.createInstance = function () {
                return (fairygui.UIPackage.createObject("GM", "TextInput"));
            };
            TextInputStruct.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_title = (this.getChild("title"));
            };
            TextInputStruct.URL = "ui://ujw583ypfv0tb";
            TextInputStruct.DependPackages = ["GM"];
            return TextInputStruct;
        }(fairygui.GButton));
        GM.TextInputStruct = TextInputStruct;
    })(GM = fgui.GM || (fgui.GM = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=TextInputStruct.js.map