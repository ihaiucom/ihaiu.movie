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
        var Anima1_1Struct = /** @class */ (function (_super) {
            __extends(Anima1_1Struct, _super);
            function Anima1_1Struct() {
                return _super.call(this) || this;
            }
            Anima1_1Struct.createInstance = function () {
                return (fairygui.UIPackage.createObject("OpenAnima", "Anima1_1"));
            };
            Anima1_1Struct.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_dialog = (this.getChild("dialog"));
                this.m_t0 = this.getTransition("t0");
            };
            Anima1_1Struct.URL = "ui://oyge7e0tboch1";
            Anima1_1Struct.DependPackages = ["OpenAnima"];
            return Anima1_1Struct;
        }(fairygui.GComponent));
        OpenAnima.Anima1_1Struct = Anima1_1Struct;
    })(OpenAnima = fgui.OpenAnima || (fgui.OpenAnima = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=Anima1_1Struct.js.map