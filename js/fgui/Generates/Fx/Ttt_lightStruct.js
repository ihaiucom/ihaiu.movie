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
        var Ttt_lightStruct = /** @class */ (function (_super) {
            __extends(Ttt_lightStruct, _super);
            function Ttt_lightStruct() {
                return _super.call(this) || this;
            }
            Ttt_lightStruct.createInstance = function () {
                return (fairygui.UIPackage.createObject("Fx", "ttt_light"));
            };
            Ttt_lightStruct.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_t0 = this.getTransition("t0");
            };
            Ttt_lightStruct.URL = "ui://9l36y1kiguh1oh";
            Ttt_lightStruct.DependPackages = ["Fx"];
            return Ttt_lightStruct;
        }(fairygui.GComponent));
        Fx.Ttt_lightStruct = Ttt_lightStruct;
    })(Fx = fgui.Fx || (fgui.Fx = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=Ttt_lightStruct.js.map