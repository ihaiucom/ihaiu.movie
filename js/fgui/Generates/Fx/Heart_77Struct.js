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
        var Heart_77Struct = /** @class */ (function (_super) {
            __extends(Heart_77Struct, _super);
            function Heart_77Struct() {
                return _super.call(this) || this;
            }
            Heart_77Struct.createInstance = function () {
                return (fairygui.UIPackage.createObject("Fx", "heart_77"));
            };
            Heart_77Struct.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_n_6 = (this.getChild("n_6"));
                this.m_n_5 = (this.getChild("n_5"));
                this.m_t0665 = this.getTransition("t0665");
            };
            Heart_77Struct.URL = "ui://9l36y1kiss4bl0";
            Heart_77Struct.DependPackages = ["Fx"];
            return Heart_77Struct;
        }(fairygui.GComponent));
        Fx.Heart_77Struct = Heart_77Struct;
    })(Fx = fgui.Fx || (fgui.Fx = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=Heart_77Struct.js.map