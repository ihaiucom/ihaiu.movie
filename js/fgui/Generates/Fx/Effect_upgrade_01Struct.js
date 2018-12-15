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
        var Effect_upgrade_01Struct = /** @class */ (function (_super) {
            __extends(Effect_upgrade_01Struct, _super);
            function Effect_upgrade_01Struct() {
                return _super.call(this) || this;
            }
            Effect_upgrade_01Struct.createInstance = function () {
                return (fairygui.UIPackage.createObject("Fx", "Effect_upgrade_01"));
            };
            Effect_upgrade_01Struct.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_n7_dddd = (this.getChild("n7_dddd"));
                this.m_n8_dddd = (this.getChild("n8_dddd"));
                this.m_n9_dddd = (this.getChild("n9_dddd"));
                this.m_n10_dddd = (this.getChild("n10_dddd"));
                this.m_n11_dddd = (this.getChild("n11_dddd"));
                this.m_n26_dsdwd = (this.getChild("n26_dsdwd"));
                this.m_t501 = this.getTransition("t501");
            };
            Effect_upgrade_01Struct.URL = "ui://9l36y1ki85lbf3";
            Effect_upgrade_01Struct.DependPackages = ["Fx"];
            return Effect_upgrade_01Struct;
        }(fairygui.GComponent));
        Fx.Effect_upgrade_01Struct = Effect_upgrade_01Struct;
    })(Fx = fgui.Fx || (fgui.Fx = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=Effect_upgrade_01Struct.js.map