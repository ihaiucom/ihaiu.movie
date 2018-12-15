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
        var PlayerInfoAwardItemStruct = /** @class */ (function (_super) {
            __extends(PlayerInfoAwardItemStruct, _super);
            function PlayerInfoAwardItemStruct() {
                return _super.call(this) || this;
            }
            PlayerInfoAwardItemStruct.createInstance = function () {
                return (fairygui.UIPackage.createObject("PlayerInfo", "PlayerInfoAwardItem"));
            };
            PlayerInfoAwardItemStruct.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_frame = (this.getChild("frame"));
                this.m_icon = (this.getChild("icon"));
                this.m_num = (this.getChild("num"));
            };
            PlayerInfoAwardItemStruct.URL = "ui://tderqmz5mk9y1t";
            PlayerInfoAwardItemStruct.DependPackages = ["PlayerInfo", "Common"];
            return PlayerInfoAwardItemStruct;
        }(fairygui.GComponent));
        PlayerInfo.PlayerInfoAwardItemStruct = PlayerInfoAwardItemStruct;
    })(PlayerInfo = fgui.PlayerInfo || (fgui.PlayerInfo = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=PlayerInfoAwardItemStruct.js.map