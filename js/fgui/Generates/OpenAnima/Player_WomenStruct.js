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
        var Player_WomenStruct = /** @class */ (function (_super) {
            __extends(Player_WomenStruct, _super);
            function Player_WomenStruct() {
                return _super.call(this) || this;
            }
            Player_WomenStruct.createInstance = function () {
                return (fairygui.UIPackage.createObject("OpenAnima", "Player_Women"));
            };
            Player_WomenStruct.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_t2 = this.getTransition("t2");
            };
            Player_WomenStruct.URL = "ui://oyge7e0tbochx";
            Player_WomenStruct.DependPackages = ["OpenAnima"];
            return Player_WomenStruct;
        }(fairygui.GComponent));
        OpenAnima.Player_WomenStruct = Player_WomenStruct;
    })(OpenAnima = fgui.OpenAnima || (fgui.OpenAnima = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=Player_WomenStruct.js.map