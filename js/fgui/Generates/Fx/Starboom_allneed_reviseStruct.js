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
        var Starboom_allneed_reviseStruct = /** @class */ (function (_super) {
            __extends(Starboom_allneed_reviseStruct, _super);
            function Starboom_allneed_reviseStruct() {
                return _super.call(this) || this;
            }
            Starboom_allneed_reviseStruct.createInstance = function () {
                return (fairygui.UIPackage.createObject("Fx", "starboom_allneed_revise"));
            };
            Starboom_allneed_reviseStruct.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_fireworks_266 = (this.getChild("fireworks_266"));
                this.m_fireworks_n22 = (this.getChild("fireworks_n22"));
                this.m_fireworks_n200 = (this.getChild("fireworks_n200"));
                this.m_Effect_fireworks_n16 = (this.getChild("Effect_fireworks_n16"));
                this.m_Effect_fireworks_n2 = (this.getChild("Effect_fireworks_n2"));
                this.m_Effect_fireworks_n17 = (this.getChild("Effect_fireworks_n17"));
                this.m_Effect_fireworks_n15 = (this.getChild("Effect_fireworks_n15"));
                this.m_Effect_fireworks_n3 = (this.getChild("Effect_fireworks_n3"));
                this.m_Effect_fireworks_n4 = (this.getChild("Effect_fireworks_n4"));
                this.m_Effect_fireworks_n5 = (this.getChild("Effect_fireworks_n5"));
                this.m_Effect_fireworks_n6 = (this.getChild("Effect_fireworks_n6"));
                this.m_Effect_fireworks_n7 = (this.getChild("Effect_fireworks_n7"));
                this.m_Effect_fireworks_n8 = (this.getChild("Effect_fireworks_n8"));
                this.m_Effect_fireworks_n10 = (this.getChild("Effect_fireworks_n10"));
                this.m_Effect_fireworks_n11 = (this.getChild("Effect_fireworks_n11"));
                this.m_Effect_fireworks_n12 = (this.getChild("Effect_fireworks_n12"));
                this.m_Effect_fireworks_n13 = (this.getChild("Effect_fireworks_n13"));
                this.m_fireworks_233 = (this.getChild("fireworks_233"));
                this.m_fireworks_n211 = (this.getChild("fireworks_n211"));
                this.m_fireworks_n199 = (this.getChild("fireworks_n199"));
                this.m_fireworks_n188 = (this.getChild("fireworks_n188"));
                this.m_boom_allneed = this.getTransition("boom_allneed");
            };
            Starboom_allneed_reviseStruct.URL = "ui://9l36y1kituvytd";
            Starboom_allneed_reviseStruct.DependPackages = ["Fx"];
            return Starboom_allneed_reviseStruct;
        }(fairygui.GComponent));
        Fx.Starboom_allneed_reviseStruct = Starboom_allneed_reviseStruct;
    })(Fx = fgui.Fx || (fgui.Fx = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=Starboom_allneed_reviseStruct.js.map