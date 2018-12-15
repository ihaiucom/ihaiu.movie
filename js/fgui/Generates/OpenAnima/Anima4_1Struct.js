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
        var Anima4_1Struct = /** @class */ (function (_super) {
            __extends(Anima4_1Struct, _super);
            function Anima4_1Struct() {
                return _super.call(this) || this;
            }
            Anima4_1Struct.createInstance = function () {
                return (fairygui.UIPackage.createObject("OpenAnima", "Anima4_1"));
            };
            Anima4_1Struct.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_dialog1 = (this.getChild("dialog1"));
                this.m_dialog2 = (this.getChild("dialog2"));
                this.m_dialog3 = (this.getChild("dialog3"));
                this.m_dialog4 = (this.getChild("dialog4"));
                this.m_player = (this.getChild("player"));
                this.m_t0 = this.getTransition("t0");
            };
            Anima4_1Struct.URL = "ui://oyge7e0tboch2c";
            Anima4_1Struct.DependPackages = ["OpenAnima"];
            return Anima4_1Struct;
        }(fairygui.GComponent));
        OpenAnima.Anima4_1Struct = Anima4_1Struct;
    })(OpenAnima = fgui.OpenAnima || (fgui.OpenAnima = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=Anima4_1Struct.js.map