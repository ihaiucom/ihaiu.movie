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
        var Heart_01233Struct = /** @class */ (function (_super) {
            __extends(Heart_01233Struct, _super);
            function Heart_01233Struct() {
                return _super.call(this) || this;
            }
            Heart_01233Struct.createInstance = function () {
                return (fairygui.UIPackage.createObject("Fx", "heart_01233"));
            };
            Heart_01233Struct.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_t02442333 = this.getTransition("t02442333");
            };
            Heart_01233Struct.URL = "ui://9l36y1kivps1kv";
            Heart_01233Struct.DependPackages = ["Fx"];
            return Heart_01233Struct;
        }(fairygui.GComponent));
        Fx.Heart_01233Struct = Heart_01233Struct;
    })(Fx = fgui.Fx || (fgui.Fx = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=Heart_01233Struct.js.map