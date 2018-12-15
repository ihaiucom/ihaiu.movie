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
    var Guide;
    (function (Guide) {
        var CarStruct = /** @class */ (function (_super) {
            __extends(CarStruct, _super);
            function CarStruct() {
                return _super.call(this) || this;
            }
            CarStruct.createInstance = function () {
                return (fairygui.UIPackage.createObject("Guide", "car"));
            };
            CarStruct.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_t0 = this.getTransition("t0");
                this.m_t1 = this.getTransition("t1");
                this.m_t2 = this.getTransition("t2");
            };
            CarStruct.URL = "ui://toebkrsrilee24";
            CarStruct.DependPackages = ["Guide"];
            return CarStruct;
        }(fairygui.GComponent));
        Guide.CarStruct = CarStruct;
    })(Guide = fgui.Guide || (fgui.Guide = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=CarStruct.js.map