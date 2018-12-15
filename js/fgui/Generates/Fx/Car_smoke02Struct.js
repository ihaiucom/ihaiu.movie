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
        var Car_smoke02Struct = /** @class */ (function (_super) {
            __extends(Car_smoke02Struct, _super);
            function Car_smoke02Struct() {
                return _super.call(this) || this;
            }
            Car_smoke02Struct.createInstance = function () {
                return (fairygui.UIPackage.createObject("Fx", "Car_smoke02"));
            };
            Car_smoke02Struct.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_t0975655 = this.getTransition("t0975655");
            };
            Car_smoke02Struct.URL = "ui://9l36y1kiesvsmb";
            Car_smoke02Struct.DependPackages = ["Fx"];
            return Car_smoke02Struct;
        }(fairygui.GComponent));
        Fx.Car_smoke02Struct = Car_smoke02Struct;
    })(Fx = fgui.Fx || (fgui.Fx = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=Car_smoke02Struct.js.map