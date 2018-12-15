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
        var Text003Struct = /** @class */ (function (_super) {
            __extends(Text003Struct, _super);
            function Text003Struct() {
                return _super.call(this) || this;
            }
            Text003Struct.createInstance = function () {
                return (fairygui.UIPackage.createObject("Fx", "text003"));
            };
            Text003Struct.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
            };
            Text003Struct.URL = "ui://9l36y1ki8r1v5tv";
            Text003Struct.DependPackages = ["Fx"];
            return Text003Struct;
        }(fairygui.GComponent));
        Fx.Text003Struct = Text003Struct;
    })(Fx = fgui.Fx || (fgui.Fx = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=Text003Struct.js.map