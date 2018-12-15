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
    var PlayerInfo;
    (function (PlayerInfo) {
        var PlayerLevelNumberStruct = /** @class */ (function (_super) {
            __extends(PlayerLevelNumberStruct, _super);
            function PlayerLevelNumberStruct() {
                return _super.call(this) || this;
            }
            PlayerLevelNumberStruct.createInstance = function () {
                return (fairygui.UIPackage.createObject("PlayerInfo", "PlayerLevelNumber"));
            };
            PlayerLevelNumberStruct.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_c1 = this.getController("c1");
            };
            PlayerLevelNumberStruct.URL = "ui://tderqmz5mk9y1s";
            PlayerLevelNumberStruct.DependPackages = ["PlayerInfo"];
            return PlayerLevelNumberStruct;
        }(fairygui.GComponent));
        PlayerInfo.PlayerLevelNumberStruct = PlayerLevelNumberStruct;
    })(PlayerInfo = fgui.PlayerInfo || (fgui.PlayerInfo = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=PlayerLevelNumberStruct.js.map