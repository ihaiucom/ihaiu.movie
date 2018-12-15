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
        var Pro_drop33Struct = /** @class */ (function (_super) {
            __extends(Pro_drop33Struct, _super);
            function Pro_drop33Struct() {
                return _super.call(this) || this;
            }
            Pro_drop33Struct.createInstance = function () {
                return (fairygui.UIPackage.createObject("Fx", "pro_drop33"));
            };
            Pro_drop33Struct.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_t1 = this.getTransition("t1");
            };
            Pro_drop33Struct.URL = "ui://9l36y1ki7jnc5tr";
            Pro_drop33Struct.DependPackages = ["Fx"];
            return Pro_drop33Struct;
        }(fairygui.GComponent));
        Fx.Pro_drop33Struct = Pro_drop33Struct;
    })(Fx = fgui.Fx || (fgui.Fx = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=Pro_drop33Struct.js.map