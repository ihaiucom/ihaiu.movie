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
        var Player2Struct = /** @class */ (function (_super) {
            __extends(Player2Struct, _super);
            function Player2Struct() {
                return _super.call(this) || this;
            }
            Player2Struct.createInstance = function () {
                return (fairygui.UIPackage.createObject("OpenAnima", "player2"));
            };
            Player2Struct.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_sex = this.getController("sex");
            };
            Player2Struct.URL = "ui://oyge7e0tboch18";
            Player2Struct.DependPackages = ["OpenAnima"];
            return Player2Struct;
        }(fairygui.GComponent));
        OpenAnima.Player2Struct = Player2Struct;
    })(OpenAnima = fgui.OpenAnima || (fgui.OpenAnima = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=Player2Struct.js.map