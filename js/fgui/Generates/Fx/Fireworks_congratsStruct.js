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
    var Fx;
    (function (Fx) {
        var Fireworks_congratsStruct = /** @class */ (function (_super) {
            __extends(Fireworks_congratsStruct, _super);
            function Fireworks_congratsStruct() {
                return _super.call(this) || this;
            }
            Fireworks_congratsStruct.createInstance = function () {
                return (fairygui.UIPackage.createObject("Fx", "fireworks_congrats"));
            };
            Fireworks_congratsStruct.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_n3_fw = (this.getChild("n3_fw"));
                this.m_n2_fw = (this.getChild("n2_fw"));
                this.m_t0 = this.getTransition("t0");
            };
            Fireworks_congratsStruct.URL = "ui://9l36y1kiru9k8z";
            Fireworks_congratsStruct.DependPackages = ["Fx"];
            return Fireworks_congratsStruct;
        }(fairygui.GComponent));
        Fx.Fireworks_congratsStruct = Fireworks_congratsStruct;
    })(Fx = fgui.Fx || (fgui.Fx = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=Fireworks_congratsStruct.js.map