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
        var Car_smokeStruct = /** @class */ (function (_super) {
            __extends(Car_smokeStruct, _super);
            function Car_smokeStruct() {
                return _super.call(this) || this;
            }
            Car_smokeStruct.createInstance = function () {
                return (fairygui.UIPackage.createObject("Fx", "Car_smoke"));
            };
            Car_smokeStruct.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_car_smoke999 = this.getTransition("car_smoke999");
            };
            Car_smokeStruct.URL = "ui://9l36y1kiesvsm9";
            Car_smokeStruct.DependPackages = ["Fx"];
            return Car_smokeStruct;
        }(fairygui.GComponent));
        Fx.Car_smokeStruct = Car_smokeStruct;
    })(Fx = fgui.Fx || (fgui.Fx = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=Car_smokeStruct.js.map