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
        var Button_yellow_001Struct = /** @class */ (function (_super) {
            __extends(Button_yellow_001Struct, _super);
            function Button_yellow_001Struct() {
                return _super.call(this) || this;
            }
            Button_yellow_001Struct.createInstance = function () {
                return (fairygui.UIPackage.createObject("Fx", "button_yellow_001"));
            };
            Button_yellow_001Struct.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_t02522 = this.getTransition("t02522");
            };
            Button_yellow_001Struct.URL = "ui://9l36y1kip3cziw";
            Button_yellow_001Struct.DependPackages = ["Fx"];
            return Button_yellow_001Struct;
        }(fairygui.GComponent));
        Fx.Button_yellow_001Struct = Button_yellow_001Struct;
    })(Fx = fgui.Fx || (fgui.Fx = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=Button_yellow_001Struct.js.map