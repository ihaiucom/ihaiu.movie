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
        var Touxiang160Struct = /** @class */ (function (_super) {
            __extends(Touxiang160Struct, _super);
            function Touxiang160Struct() {
                return _super.call(this) || this;
            }
            Touxiang160Struct.createInstance = function () {
                return (fairygui.UIPackage.createObject("WarMovie", "touxiang160"));
            };
            Touxiang160Struct.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_icon = (this.getChild("icon"));
            };
            Touxiang160Struct.URL = "ui://y6ozucp1xfnlci";
            Touxiang160Struct.DependPackages = ["WarMovie", "Common"];
            return Touxiang160Struct;
        }(fairygui.GLabel));
        WarMovie.Touxiang160Struct = Touxiang160Struct;
    })(WarMovie = fgui.WarMovie || (fgui.WarMovie = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=Touxiang160Struct.js.map