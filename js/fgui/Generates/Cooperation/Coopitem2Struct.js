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
        var Coopitem2Struct = /** @class */ (function (_super) {
            __extends(Coopitem2Struct, _super);
            function Coopitem2Struct() {
                return _super.call(this) || this;
            }
            Coopitem2Struct.createInstance = function () {
                return (fairygui.UIPackage.createObject("Cooperation", "coopitem2"));
            };
            Coopitem2Struct.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_c1 = this.getController("c1");
            };
            Coopitem2Struct.URL = "ui://k9ycebr5hhe82k";
            Coopitem2Struct.DependPackages = ["Cooperation"];
            return Coopitem2Struct;
        }(fairygui.GComponent));
        Cooperation.Coopitem2Struct = Coopitem2Struct;
    })(Cooperation = fgui.Cooperation || (fgui.Cooperation = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=Coopitem2Struct.js.map