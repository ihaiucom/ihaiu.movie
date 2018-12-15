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
        var Jingtou7Struct = /** @class */ (function (_super) {
            __extends(Jingtou7Struct, _super);
            function Jingtou7Struct() {
                return _super.call(this) || this;
            }
            Jingtou7Struct.createInstance = function () {
                return (fairygui.UIPackage.createObject("OpenAnima", "jingtou7"));
            };
            Jingtou7Struct.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_player = (this.getChild("player"));
                this.m_t0 = this.getTransition("t0");
            };
            Jingtou7Struct.URL = "ui://oyge7e0tboch28";
            Jingtou7Struct.DependPackages = ["OpenAnima"];
            return Jingtou7Struct;
        }(fairygui.GComponent));
        OpenAnima.Jingtou7Struct = Jingtou7Struct;
    })(OpenAnima = fgui.OpenAnima || (fgui.OpenAnima = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=Jingtou7Struct.js.map