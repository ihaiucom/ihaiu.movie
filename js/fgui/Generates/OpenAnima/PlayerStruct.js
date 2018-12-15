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
        var PlayerStruct = /** @class */ (function (_super) {
            __extends(PlayerStruct, _super);
            function PlayerStruct() {
                return _super.call(this) || this;
            }
            PlayerStruct.createInstance = function () {
                return (fairygui.UIPackage.createObject("OpenAnima", "Player"));
            };
            PlayerStruct.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_sex = this.getController("sex");
            };
            PlayerStruct.URL = "ui://oyge7e0tbochr";
            PlayerStruct.DependPackages = ["OpenAnima"];
            return PlayerStruct;
        }(fairygui.GComponent));
        OpenAnima.PlayerStruct = PlayerStruct;
    })(OpenAnima = fgui.OpenAnima || (fgui.OpenAnima = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=PlayerStruct.js.map