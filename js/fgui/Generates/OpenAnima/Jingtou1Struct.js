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
    var OpenAnima;
    (function (OpenAnima) {
        var Jingtou1Struct = /** @class */ (function (_super) {
            __extends(Jingtou1Struct, _super);
            function Jingtou1Struct() {
                return _super.call(this) || this;
            }
            Jingtou1Struct.createInstance = function () {
                return (fairygui.UIPackage.createObject("OpenAnima", "jingtou1"));
            };
            Jingtou1Struct.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_t0 = this.getTransition("t0");
            };
            Jingtou1Struct.URL = "ui://oyge7e0tboch2";
            Jingtou1Struct.DependPackages = ["OpenAnima"];
            return Jingtou1Struct;
        }(fairygui.GComponent));
        OpenAnima.Jingtou1Struct = Jingtou1Struct;
    })(OpenAnima = fgui.OpenAnima || (fgui.OpenAnima = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=Jingtou1Struct.js.map