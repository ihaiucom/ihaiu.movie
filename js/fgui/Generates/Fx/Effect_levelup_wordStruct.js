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
        var Effect_levelup_wordStruct = /** @class */ (function (_super) {
            __extends(Effect_levelup_wordStruct, _super);
            function Effect_levelup_wordStruct() {
                return _super.call(this) || this;
            }
            Effect_levelup_wordStruct.createInstance = function () {
                return (fairygui.UIPackage.createObject("Fx", "Effect_levelup_word"));
            };
            Effect_levelup_wordStruct.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_Effect_fireworks_n0 = (this.getChild("Effect_fireworks_n0"));
                this.m_t1 = this.getTransition("t1");
            };
            Effect_levelup_wordStruct.URL = "ui://9l36y1kio0r868";
            Effect_levelup_wordStruct.DependPackages = ["Fx"];
            return Effect_levelup_wordStruct;
        }(fairygui.GComponent));
        Fx.Effect_levelup_wordStruct = Effect_levelup_wordStruct;
    })(Fx = fgui.Fx || (fgui.Fx = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=Effect_levelup_wordStruct.js.map