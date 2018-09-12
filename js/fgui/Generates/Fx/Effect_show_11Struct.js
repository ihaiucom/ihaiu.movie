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
        var Effect_show_11Struct = /** @class */ (function (_super) {
            __extends(Effect_show_11Struct, _super);
            function Effect_show_11Struct() {
                return _super.call(this) || this;
            }
            Effect_show_11Struct.createInstance = function () {
                return (fairygui.UIPackage.createObject("Fx", "Effect_show_11"));
            };
            Effect_show_11Struct.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_llll_006 = (this.getChild("llll_006"));
                this.m_llll_005 = (this.getChild("llll_005"));
                this.m_llll_004 = (this.getChild("llll_004"));
                this.m_llll_003 = (this.getChild("llll_003"));
                this.m_llll_002 = (this.getChild("llll_002"));
                this.m_llll_001 = (this.getChild("llll_001"));
                this.m_llll_008 = (this.getChild("llll_008"));
                this.m_llll_009 = (this.getChild("llll_009"));
                this.m_llll_003 = (this.getChild("llll_003"));
                this.m_llll_0111 = (this.getChild("llll_0111"));
                this.m_llll_0112 = (this.getChild("llll_0112"));
                this.m_llll_0113 = (this.getChild("llll_0113"));
                this.m_llll_0114 = (this.getChild("llll_0114"));
                this.m_llll_0115 = (this.getChild("llll_0115"));
                this.m_llll_007 = (this.getChild("llll_007"));
                this.m_llll_0222 = (this.getChild("llll_0222"));
                this.m_llll_0333 = (this.getChild("llll_0333"));
                this.m_llll_0444 = (this.getChild("llll_0444"));
                this.m_llll_0446 = (this.getChild("llll_0446"));
                this.m_llll_0666 = (this.getChild("llll_0666"));
                this.m_llll_0667 = (this.getChild("llll_0667"));
                this.m_llll_0668 = (this.getChild("llll_0668"));
                this.m_llll_0669 = (this.getChild("llll_0669"));
                this.m_llll_0700 = (this.getChild("llll_0700"));
                this.m_llll_0701 = (this.getChild("llll_0701"));
                this.m_t199 = this.getTransition("t199");
            };
            Effect_show_11Struct.URL = "ui://9l36y1kisl89e6";
            Effect_show_11Struct.DependPackages = ["Fx"];
            return Effect_show_11Struct;
        }(fairygui.GComponent));
        Fx.Effect_show_11Struct = Effect_show_11Struct;
    })(Fx = fgui.Fx || (fgui.Fx = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=Effect_show_11Struct.js.map