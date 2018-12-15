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
        var Heart_004Struct = /** @class */ (function (_super) {
            __extends(Heart_004Struct, _super);
            function Heart_004Struct() {
                return _super.call(this) || this;
            }
            Heart_004Struct.createInstance = function () {
                return (fairygui.UIPackage.createObject("Fx", "heart_004"));
            };
            Heart_004Struct.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_t0 = this.getTransition("t0");
            };
            Heart_004Struct.URL = "ui://9l36y1kinu4kkq";
            Heart_004Struct.DependPackages = ["Fx"];
            return Heart_004Struct;
        }(fairygui.GComponent));
        Fx.Heart_004Struct = Heart_004Struct;
    })(Fx = fgui.Fx || (fgui.Fx = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=Heart_004Struct.js.map