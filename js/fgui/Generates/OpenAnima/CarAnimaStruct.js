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
        var CarAnimaStruct = /** @class */ (function (_super) {
            __extends(CarAnimaStruct, _super);
            function CarAnimaStruct() {
                return _super.call(this) || this;
            }
            CarAnimaStruct.createInstance = function () {
                return (fairygui.UIPackage.createObject("OpenAnima", "CarAnima"));
            };
            CarAnimaStruct.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_c_visible_bg = this.getController("c_visible_bg");
                this.m_bg = (this.getChild("bg"));
                this.m_car = (this.getChild("car"));
                this.m_t0 = this.getTransition("t0");
            };
            CarAnimaStruct.URL = "ui://oyge7e0tboch2o";
            CarAnimaStruct.DependPackages = ["OpenAnima", "Fx", "Guide"];
            return CarAnimaStruct;
        }(fairygui.GComponent));
        OpenAnima.CarAnimaStruct = CarAnimaStruct;
    })(OpenAnima = fgui.OpenAnima || (fgui.OpenAnima = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=CarAnimaStruct.js.map