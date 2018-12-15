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
        var Starboom_blueStruct = /** @class */ (function (_super) {
            __extends(Starboom_blueStruct, _super);
            function Starboom_blueStruct() {
                return _super.call(this) || this;
            }
            Starboom_blueStruct.createInstance = function () {
                return (fairygui.UIPackage.createObject("Fx", "starboom_blue"));
            };
            Starboom_blueStruct.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_t0755 = this.getTransition("t0755");
            };
            Starboom_blueStruct.URL = "ui://9l36y1kic49im0";
            Starboom_blueStruct.DependPackages = ["Fx"];
            return Starboom_blueStruct;
        }(fairygui.GComponent));
        Fx.Starboom_blueStruct = Starboom_blueStruct;
    })(Fx = fgui.Fx || (fgui.Fx = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=Starboom_blueStruct.js.map