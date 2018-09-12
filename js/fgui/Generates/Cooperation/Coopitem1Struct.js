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
        var Coopitem1Struct = /** @class */ (function (_super) {
            __extends(Coopitem1Struct, _super);
            function Coopitem1Struct() {
                return _super.call(this) || this;
            }
            Coopitem1Struct.createInstance = function () {
                return (fairygui.UIPackage.createObject("Cooperation", "coopitem1"));
            };
            Coopitem1Struct.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_c1 = this.getController("c1");
            };
            Coopitem1Struct.URL = "ui://k9ycebr5hhe82j";
            Coopitem1Struct.DependPackages = ["Cooperation"];
            return Coopitem1Struct;
        }(fairygui.GComponent));
        Cooperation.Coopitem1Struct = Coopitem1Struct;
    })(Cooperation = fgui.Cooperation || (fgui.Cooperation = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=Coopitem1Struct.js.map