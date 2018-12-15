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
        var Effect_num1Struct = /** @class */ (function (_super) {
            __extends(Effect_num1Struct, _super);
            function Effect_num1Struct() {
                return _super.call(this) || this;
            }
            Effect_num1Struct.createInstance = function () {
                return (fairygui.UIPackage.createObject("Fx", "Effect_num1"));
            };
            Effect_num1Struct.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_title = (this.getChild("title"));
                this.m_t5555555 = this.getTransition("t5555555");
            };
            Effect_num1Struct.URL = "ui://9l36y1kis1hsj1";
            Effect_num1Struct.DependPackages = ["Fx"];
            return Effect_num1Struct;
        }(fairygui.GComponent));
        Fx.Effect_num1Struct = Effect_num1Struct;
    })(Fx = fgui.Fx || (fgui.Fx = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=Effect_num1Struct.js.map