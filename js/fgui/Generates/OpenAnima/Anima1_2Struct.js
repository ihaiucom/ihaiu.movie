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
        var Anima1_2Struct = /** @class */ (function (_super) {
            __extends(Anima1_2Struct, _super);
            function Anima1_2Struct() {
                return _super.call(this) || this;
            }
            Anima1_2Struct.createInstance = function () {
                return (fairygui.UIPackage.createObject("OpenAnima", "Anima1_2"));
            };
            Anima1_2Struct.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_player = (this.getChild("player"));
                this.m_dialog = (this.getChild("dialog"));
                this.m_t0 = this.getTransition("t0");
            };
            Anima1_2Struct.URL = "ui://oyge7e0tbochp";
            Anima1_2Struct.DependPackages = ["OpenAnima"];
            return Anima1_2Struct;
        }(fairygui.GComponent));
        OpenAnima.Anima1_2Struct = Anima1_2Struct;
    })(OpenAnima = fgui.OpenAnima || (fgui.OpenAnima = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=Anima1_2Struct.js.map