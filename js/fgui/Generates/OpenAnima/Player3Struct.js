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
        var Player3Struct = /** @class */ (function (_super) {
            __extends(Player3Struct, _super);
            function Player3Struct() {
                return _super.call(this) || this;
            }
            Player3Struct.createInstance = function () {
                return (fairygui.UIPackage.createObject("OpenAnima", "player3"));
            };
            Player3Struct.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_sex = this.getController("sex");
                this.m_t0 = this.getTransition("t0");
            };
            Player3Struct.URL = "ui://oyge7e0tboch2d";
            Player3Struct.DependPackages = ["OpenAnima"];
            return Player3Struct;
        }(fairygui.GComponent));
        OpenAnima.Player3Struct = Player3Struct;
    })(OpenAnima = fgui.OpenAnima || (fgui.OpenAnima = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=Player3Struct.js.map