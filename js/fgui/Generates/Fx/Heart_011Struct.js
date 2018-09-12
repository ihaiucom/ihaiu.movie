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
        var Heart_011Struct = /** @class */ (function (_super) {
            __extends(Heart_011Struct, _super);
            function Heart_011Struct() {
                return _super.call(this) || this;
            }
            Heart_011Struct.createInstance = function () {
                return (fairygui.UIPackage.createObject("Fx", "heart_011"));
            };
            Heart_011Struct.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_t01344 = this.getTransition("t01344");
            };
            Heart_011Struct.URL = "ui://9l36y1kiif6akn";
            Heart_011Struct.DependPackages = ["Fx"];
            return Heart_011Struct;
        }(fairygui.GComponent));
        Fx.Heart_011Struct = Heart_011Struct;
    })(Fx = fgui.Fx || (fgui.Fx = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=Heart_011Struct.js.map