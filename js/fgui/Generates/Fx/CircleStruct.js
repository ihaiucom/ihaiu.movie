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
        var CircleStruct = /** @class */ (function (_super) {
            __extends(CircleStruct, _super);
            function CircleStruct() {
                return _super.call(this) || this;
            }
            CircleStruct.createInstance = function () {
                return (fairygui.UIPackage.createObject("Fx", "Circle"));
            };
            CircleStruct.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
            };
            CircleStruct.URL = "ui://9l36y1kilwwdcp";
            CircleStruct.DependPackages = ["Fx"];
            return CircleStruct;
        }(fairygui.GComponent));
        Fx.CircleStruct = CircleStruct;
    })(Fx = fgui.Fx || (fgui.Fx = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=CircleStruct.js.map