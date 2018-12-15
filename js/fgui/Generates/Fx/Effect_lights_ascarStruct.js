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
        var Effect_lights_ascarStruct = /** @class */ (function (_super) {
            __extends(Effect_lights_ascarStruct, _super);
            function Effect_lights_ascarStruct() {
                return _super.call(this) || this;
            }
            Effect_lights_ascarStruct.createInstance = function () {
                return (fairygui.UIPackage.createObject("Fx", "Effect_lights_ascar"));
            };
            Effect_lights_ascarStruct.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_t0 = this.getTransition("t0");
            };
            Effect_lights_ascarStruct.URL = "ui://9l36y1kipldw55us";
            Effect_lights_ascarStruct.DependPackages = ["Fx"];
            return Effect_lights_ascarStruct;
        }(fairygui.GComponent));
        Fx.Effect_lights_ascarStruct = Effect_lights_ascarStruct;
    })(Fx = fgui.Fx || (fgui.Fx = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=Effect_lights_ascarStruct.js.map