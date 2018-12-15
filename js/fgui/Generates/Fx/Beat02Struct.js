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
        var Beat02Struct = /** @class */ (function (_super) {
            __extends(Beat02Struct, _super);
            function Beat02Struct() {
                return _super.call(this) || this;
            }
            Beat02Struct.createInstance = function () {
                return (fairygui.UIPackage.createObject("Fx", "beat02"));
            };
            Beat02Struct.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_smoke_n3 = (this.getChild("smoke_n3"));
                this.m_smoke_n2 = (this.getChild("smoke_n2"));
                this.m_smoke_n10 = (this.getChild("smoke_n10"));
                this.m_smoke_n11 = (this.getChild("smoke_n11"));
                this.m_smoke_n12 = (this.getChild("smoke_n12"));
                this.m_smoke_n16 = (this.getChild("smoke_n16"));
                this.m_smoke_n13 = (this.getChild("smoke_n13"));
                this.m_smoke_n4 = (this.getChild("smoke_n4"));
                this.m_smoke_n14 = (this.getChild("smoke_n14"));
                this.m_smoke_n15 = (this.getChild("smoke_n15"));
                this.m_smoke_n17 = (this.getChild("smoke_n17"));
                this.m_smoke_n18 = (this.getChild("smoke_n18"));
                this.m_smoke_n19 = (this.getChild("smoke_n19"));
                this.m_smoke_n20 = (this.getChild("smoke_n20"));
                this.m_smoke_n21 = (this.getChild("smoke_n21"));
                this.m_smoke_a0012dsd = this.getTransition("smoke_a0012dsd ");
            };
            Beat02Struct.URL = "ui://9l36y1kixk6ycs";
            Beat02Struct.DependPackages = ["Fx"];
            return Beat02Struct;
        }(fairygui.GComponent));
        Fx.Beat02Struct = Beat02Struct;
    })(Fx = fgui.Fx || (fgui.Fx = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=Beat02Struct.js.map