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
        var Smoke003Struct = /** @class */ (function (_super) {
            __extends(Smoke003Struct, _super);
            function Smoke003Struct() {
                return _super.call(this) || this;
            }
            Smoke003Struct.createInstance = function () {
                return (fairygui.UIPackage.createObject("Fx", "smoke003"));
            };
            Smoke003Struct.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_t0 = this.getTransition("t0");
            };
            Smoke003Struct.URL = "ui://9l36y1kiweh5cg";
            Smoke003Struct.DependPackages = ["Fx"];
            return Smoke003Struct;
        }(fairygui.GComponent));
        Fx.Smoke003Struct = Smoke003Struct;
    })(Fx = fgui.Fx || (fgui.Fx = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=Smoke003Struct.js.map