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
    var WarMovie;
    (function (WarMovie) {
        var WarXukezhengOverStruct = /** @class */ (function (_super) {
            __extends(WarXukezhengOverStruct, _super);
            function WarXukezhengOverStruct() {
                return _super.call(this) || this;
            }
            WarXukezhengOverStruct.createInstance = function () {
                return (fairygui.UIPackage.createObject("WarMovie", "WarXukezhengOver"));
            };
            WarXukezhengOverStruct.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_icon = (this.getChild("icon"));
                this.m_getTip = (this.getChild("getTip"));
                this.m_title = (this.getChild("title"));
                this.m_okBtn = (this.getChild("okBtn"));
            };
            WarXukezhengOverStruct.URL = "ui://y6ozucp1qbxl97";
            WarXukezhengOverStruct.DependPackages = ["WarMovie", "Common", "System"];
            return WarXukezhengOverStruct;
        }(fairygui.GComponent));
        WarMovie.WarXukezhengOverStruct = WarXukezhengOverStruct;
    })(WarMovie = fgui.WarMovie || (fgui.WarMovie = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=WarXukezhengOverStruct.js.map