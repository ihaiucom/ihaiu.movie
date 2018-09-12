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
        var Beat01Struct = /** @class */ (function (_super) {
            __extends(Beat01Struct, _super);
            function Beat01Struct() {
                return _super.call(this) || this;
            }
            Beat01Struct.createInstance = function () {
                return (fairygui.UIPackage.createObject("Fx", "beat01"));
            };
            Beat01Struct.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_smoke_n9 = (this.getChild("smoke_n9"));
                this.m_smoke_n8 = (this.getChild("smoke_n8"));
                this.m_smoke_n3 = (this.getChild("smoke_n3"));
                this.m_smoke_n2 = (this.getChild("smoke_n2"));
                this.m_smoke_n5 = (this.getChild("smoke_n5"));
                this.m_smoke_n6 = (this.getChild("smoke_n6"));
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
                this.m_n2323133d = (this.getChild("n2323133d"));
                this.m_smoke_a001 = this.getTransition("smoke_a001");
            };
            Beat01Struct.URL = "ui://9l36y1kiweh5co";
            Beat01Struct.DependPackages = ["Fx"];
            return Beat01Struct;
        }(fairygui.GComponent));
        Fx.Beat01Struct = Beat01Struct;
    })(Fx = fgui.Fx || (fgui.Fx = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=Beat01Struct.js.map