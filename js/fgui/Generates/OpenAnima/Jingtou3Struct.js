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
    var OpenAnima;
    (function (OpenAnima) {
        var Jingtou3Struct = /** @class */ (function (_super) {
            __extends(Jingtou3Struct, _super);
            function Jingtou3Struct() {
                return _super.call(this) || this;
            }
            Jingtou3Struct.createInstance = function () {
                return (fairygui.UIPackage.createObject("OpenAnima", "jingtou3"));
            };
            Jingtou3Struct.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_player = (this.getChild("player"));
            };
            Jingtou3Struct.URL = "ui://oyge7e0tboch16";
            Jingtou3Struct.DependPackages = ["OpenAnima"];
            return Jingtou3Struct;
        }(fairygui.GComponent));
        OpenAnima.Jingtou3Struct = Jingtou3Struct;
    })(OpenAnima = fgui.OpenAnima || (fgui.OpenAnima = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=Jingtou3Struct.js.map