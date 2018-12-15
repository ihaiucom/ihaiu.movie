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
        var Heart_005Struct = /** @class */ (function (_super) {
            __extends(Heart_005Struct, _super);
            function Heart_005Struct() {
                return _super.call(this) || this;
            }
            Heart_005Struct.createInstance = function () {
                return (fairygui.UIPackage.createObject("Fx", "heart_005"));
            };
            Heart_005Struct.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_t0 = this.getTransition("t0");
            };
            Heart_005Struct.URL = "ui://9l36y1kiss4bkx";
            Heart_005Struct.DependPackages = ["Fx"];
            return Heart_005Struct;
        }(fairygui.GComponent));
        Fx.Heart_005Struct = Heart_005Struct;
    })(Fx = fgui.Fx || (fgui.Fx = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=Heart_005Struct.js.map