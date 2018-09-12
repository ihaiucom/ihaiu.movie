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
        var Heart_0000Struct = /** @class */ (function (_super) {
            __extends(Heart_0000Struct, _super);
            function Heart_0000Struct() {
                return _super.call(this) || this;
            }
            Heart_0000Struct.createInstance = function () {
                return (fairygui.UIPackage.createObject("Fx", "heart_0000"));
            };
            Heart_0000Struct.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_t065444 = this.getTransition("t065444");
            };
            Heart_0000Struct.URL = "ui://9l36y1kifjcvid";
            Heart_0000Struct.DependPackages = ["Fx"];
            return Heart_0000Struct;
        }(fairygui.GComponent));
        Fx.Heart_0000Struct = Heart_0000Struct;
    })(Fx = fgui.Fx || (fgui.Fx = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=Heart_0000Struct.js.map