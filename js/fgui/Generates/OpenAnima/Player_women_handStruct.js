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
        var Player_women_handStruct = /** @class */ (function (_super) {
            __extends(Player_women_handStruct, _super);
            function Player_women_handStruct() {
                return _super.call(this) || this;
            }
            Player_women_handStruct.createInstance = function () {
                return (fairygui.UIPackage.createObject("OpenAnima", "player_women_hand"));
            };
            Player_women_handStruct.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_t0 = this.getTransition("t0");
            };
            Player_women_handStruct.URL = "ui://oyge7e0tbochz";
            Player_women_handStruct.DependPackages = ["OpenAnima"];
            return Player_women_handStruct;
        }(fairygui.GComponent));
        OpenAnima.Player_women_handStruct = Player_women_handStruct;
    })(OpenAnima = fgui.OpenAnima || (fgui.OpenAnima = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=Player_women_handStruct.js.map