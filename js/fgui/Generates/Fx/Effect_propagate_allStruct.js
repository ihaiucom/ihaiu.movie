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
        var Effect_propagate_allStruct = /** @class */ (function (_super) {
            __extends(Effect_propagate_allStruct, _super);
            function Effect_propagate_allStruct() {
                return _super.call(this) || this;
            }
            Effect_propagate_allStruct.createInstance = function () {
                return (fairygui.UIPackage.createObject("Fx", "Effect_propagate_all"));
            };
            Effect_propagate_allStruct.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
            };
            Effect_propagate_allStruct.URL = "ui://9l36y1kiny365tx";
            Effect_propagate_allStruct.DependPackages = ["Fx"];
            return Effect_propagate_allStruct;
        }(fairygui.GComponent));
        Fx.Effect_propagate_allStruct = Effect_propagate_allStruct;
    })(Fx = fgui.Fx || (fgui.Fx = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=Effect_propagate_allStruct.js.map