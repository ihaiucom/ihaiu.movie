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
        var Player_ManStruct = /** @class */ (function (_super) {
            __extends(Player_ManStruct, _super);
            function Player_ManStruct() {
                return _super.call(this) || this;
            }
            Player_ManStruct.createInstance = function () {
                return (fairygui.UIPackage.createObject("OpenAnima", "Player_Man"));
            };
            Player_ManStruct.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_t0 = this.getTransition("t0");
            };
            Player_ManStruct.URL = "ui://oyge7e0tbochs";
            Player_ManStruct.DependPackages = ["OpenAnima"];
            return Player_ManStruct;
        }(fairygui.GComponent));
        OpenAnima.Player_ManStruct = Player_ManStruct;
    })(OpenAnima = fgui.OpenAnima || (fgui.OpenAnima = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=Player_ManStruct.js.map