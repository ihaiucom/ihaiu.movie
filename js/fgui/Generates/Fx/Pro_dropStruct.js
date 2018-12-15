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
        var Pro_dropStruct = /** @class */ (function (_super) {
            __extends(Pro_dropStruct, _super);
            function Pro_dropStruct() {
                return _super.call(this) || this;
            }
            Pro_dropStruct.createInstance = function () {
                return (fairygui.UIPackage.createObject("Fx", "pro_drop"));
            };
            Pro_dropStruct.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_t1 = this.getTransition("t1");
            };
            Pro_dropStruct.URL = "ui://9l36y1kin57rgy";
            Pro_dropStruct.DependPackages = ["Fx"];
            return Pro_dropStruct;
        }(fairygui.GComponent));
        Fx.Pro_dropStruct = Pro_dropStruct;
    })(Fx = fgui.Fx || (fgui.Fx = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=Pro_dropStruct.js.map