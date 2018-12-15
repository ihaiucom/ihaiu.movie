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
        var Fireworks_successfulStruct = /** @class */ (function (_super) {
            __extends(Fireworks_successfulStruct, _super);
            function Fireworks_successfulStruct() {
                return _super.call(this) || this;
            }
            Fireworks_successfulStruct.createInstance = function () {
                return (fairygui.UIPackage.createObject("Fx", "fireworks_successful"));
            };
            Fireworks_successfulStruct.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_t0 = this.getTransition("t0");
            };
            Fireworks_successfulStruct.URL = "ui://9l36y1kilrr48v";
            Fireworks_successfulStruct.DependPackages = ["Fx"];
            return Fireworks_successfulStruct;
        }(fairygui.GComponent));
        Fx.Fireworks_successfulStruct = Fireworks_successfulStruct;
    })(Fx = fgui.Fx || (fgui.Fx = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=Fireworks_successfulStruct.js.map