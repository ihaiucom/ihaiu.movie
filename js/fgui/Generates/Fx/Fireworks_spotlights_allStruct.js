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
        var Fireworks_spotlights_allStruct = /** @class */ (function (_super) {
            __extends(Fireworks_spotlights_allStruct, _super);
            function Fireworks_spotlights_allStruct() {
                return _super.call(this) || this;
            }
            Fireworks_spotlights_allStruct.createInstance = function () {
                return (fairygui.UIPackage.createObject("Fx", "fireworks_spotlights_all"));
            };
            Fireworks_spotlights_allStruct.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_fireworks_spotlights_all = this.getTransition("fireworks_spotlights_all");
            };
            Fireworks_spotlights_allStruct.URL = "ui://9l36y1kiflbk6g";
            Fireworks_spotlights_allStruct.DependPackages = ["Fx"];
            return Fireworks_spotlights_allStruct;
        }(fairygui.GComponent));
        Fx.Fireworks_spotlights_allStruct = Fireworks_spotlights_allStruct;
    })(Fx = fgui.Fx || (fgui.Fx = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=Fireworks_spotlights_allStruct.js.map