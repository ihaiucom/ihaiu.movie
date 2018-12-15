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
    var OpenAnima;
    (function (OpenAnima) {
        var OpenAnimaStruct = /** @class */ (function (_super) {
            __extends(OpenAnimaStruct, _super);
            function OpenAnimaStruct() {
                return _super.call(this) || this;
            }
            OpenAnimaStruct.createInstance = function () {
                return (fairygui.UIPackage.createObject("OpenAnima", "OpenAnima"));
            };
            OpenAnimaStruct.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_c_anima = this.getController("c_anima");
                this.m_anima1 = (this.getChild("anima1"));
                this.m_anima2 = (this.getChild("anima2"));
                this.m_anima3 = (this.getChild("anima3"));
                this.m_anima3_1 = (this.getChild("anima3_1"));
                this.m_anima4 = (this.getChild("anima4"));
                this.m_anima5 = (this.getChild("anima5"));
                this.m_anima6 = (this.getChild("anima6"));
                this.m_anima6_1 = (this.getChild("anima6_1"));
                this.m_anima7 = (this.getChild("anima7"));
                this.m_anima8 = (this.getChild("anima8"));
                this.m_anima8_1 = (this.getChild("anima8_1"));
                this.m_anima9 = (this.getChild("anima9"));
            };
            OpenAnimaStruct.URL = "ui://oyge7e0tboch0";
            OpenAnimaStruct.DependPackages = ["OpenAnima", "Fx"];
            return OpenAnimaStruct;
        }(fairygui.GComponent));
        OpenAnima.OpenAnimaStruct = OpenAnimaStruct;
    })(OpenAnima = fgui.OpenAnima || (fgui.OpenAnima = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=OpenAnimaStruct.js.map