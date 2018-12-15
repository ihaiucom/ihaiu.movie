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
        var Effect_2333Struct = /** @class */ (function (_super) {
            __extends(Effect_2333Struct, _super);
            function Effect_2333Struct() {
                return _super.call(this) || this;
            }
            Effect_2333Struct.createInstance = function () {
                return (fairygui.UIPackage.createObject("Fx", "Effect_2333"));
            };
            Effect_2333Struct.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_t02 = this.getTransition("t02");
            };
            Effect_2333Struct.URL = "ui://9l36y1ki10sh5tn";
            Effect_2333Struct.DependPackages = ["Fx"];
            return Effect_2333Struct;
        }(fairygui.GComponent));
        Fx.Effect_2333Struct = Effect_2333Struct;
    })(Fx = fgui.Fx || (fgui.Fx = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=Effect_2333Struct.js.map