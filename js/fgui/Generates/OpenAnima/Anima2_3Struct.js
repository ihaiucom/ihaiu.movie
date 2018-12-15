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
        var Anima2_3Struct = /** @class */ (function (_super) {
            __extends(Anima2_3Struct, _super);
            function Anima2_3Struct() {
                return _super.call(this) || this;
            }
            Anima2_3Struct.createInstance = function () {
                return (fairygui.UIPackage.createObject("OpenAnima", "Anima2_3"));
            };
            Anima2_3Struct.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_label1 = (this.getChild("label1"));
                this.m_label2 = (this.getChild("label2"));
                this.m_label3 = (this.getChild("label3"));
                this.m_player = (this.getChild("player"));
                this.m_t0 = this.getTransition("t0");
            };
            Anima2_3Struct.URL = "ui://oyge7e0tboch20";
            Anima2_3Struct.DependPackages = ["OpenAnima"];
            return Anima2_3Struct;
        }(fairygui.GComponent));
        OpenAnima.Anima2_3Struct = Anima2_3Struct;
    })(OpenAnima = fgui.OpenAnima || (fgui.OpenAnima = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=Anima2_3Struct.js.map