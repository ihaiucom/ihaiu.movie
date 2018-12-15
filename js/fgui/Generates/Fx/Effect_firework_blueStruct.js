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
        var Effect_firework_blueStruct = /** @class */ (function (_super) {
            __extends(Effect_firework_blueStruct, _super);
            function Effect_firework_blueStruct() {
                return _super.call(this) || this;
            }
            Effect_firework_blueStruct.createInstance = function () {
                return (fairygui.UIPackage.createObject("Fx", "Effect_firework_blue"));
            };
            Effect_firework_blueStruct.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
            };
            Effect_firework_blueStruct.URL = "ui://9l36y1kia44ak8";
            Effect_firework_blueStruct.DependPackages = ["Fx"];
            return Effect_firework_blueStruct;
        }(fairygui.GComponent));
        Fx.Effect_firework_blueStruct = Effect_firework_blueStruct;
    })(Fx = fgui.Fx || (fgui.Fx = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=Effect_firework_blueStruct.js.map