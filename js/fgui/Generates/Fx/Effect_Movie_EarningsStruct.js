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
        var Effect_Movie_EarningsStruct = /** @class */ (function (_super) {
            __extends(Effect_Movie_EarningsStruct, _super);
            function Effect_Movie_EarningsStruct() {
                return _super.call(this) || this;
            }
            Effect_Movie_EarningsStruct.createInstance = function () {
                return (fairygui.UIPackage.createObject("Fx", "Effect_Movie_Earnings"));
            };
            Effect_Movie_EarningsStruct.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_1_A_E = (this.getChild("1_A_E"));
                this.m_2_B_A = (this.getChild("2_B_A"));
                this.m_3_C_R = (this.getChild("3_C_R"));
                this.m_4_D_N = (this.getChild("4_D_N"));
                this.m_5_E_I = (this.getChild("5_E_I"));
                this.m_6_F_N = (this.getChild("6_F_N"));
                this.m_7_G_G = (this.getChild("7_G_G"));
                this.m_8_G_S = (this.getChild("8_G_S"));
                this.m_FILMING = this.getTransition("FILMING");
            };
            Effect_Movie_EarningsStruct.URL = "ui://9l36y1kil22x4e";
            Effect_Movie_EarningsStruct.DependPackages = ["Fx", "Common"];
            return Effect_Movie_EarningsStruct;
        }(fairygui.GComponent));
        Fx.Effect_Movie_EarningsStruct = Effect_Movie_EarningsStruct;
    })(Fx = fgui.Fx || (fgui.Fx = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=Effect_Movie_EarningsStruct.js.map