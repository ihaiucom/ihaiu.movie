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
    var Cooperation;
    (function (Cooperation) {
        var Coopitem3Struct = /** @class */ (function (_super) {
            __extends(Coopitem3Struct, _super);
            function Coopitem3Struct() {
                return _super.call(this) || this;
            }
            Coopitem3Struct.createInstance = function () {
                return (fairygui.UIPackage.createObject("Cooperation", "coopitem3"));
            };
            Coopitem3Struct.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_c1 = this.getController("c1");
            };
            Coopitem3Struct.URL = "ui://k9ycebr5hhe82l";
            Coopitem3Struct.DependPackages = ["Cooperation"];
            return Coopitem3Struct;
        }(fairygui.GComponent));
        Cooperation.Coopitem3Struct = Coopitem3Struct;
    })(Cooperation = fgui.Cooperation || (fgui.Cooperation = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=Coopitem3Struct.js.map