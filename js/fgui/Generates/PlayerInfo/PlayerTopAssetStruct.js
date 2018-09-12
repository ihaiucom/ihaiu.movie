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
        var PlayerTopAssetStruct = /** @class */ (function (_super) {
            __extends(PlayerTopAssetStruct, _super);
            function PlayerTopAssetStruct() {
                return _super.call(this) || this;
            }
            PlayerTopAssetStruct.createInstance = function () {
                return (fairygui.UIPackage.createObject("PlayerInfo", "PlayerTopAsset"));
            };
            PlayerTopAssetStruct.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_assetList = (this.getChild("assetList"));
                this.m_btn_topClose = (this.getChild("btn_topClose"));
            };
            PlayerTopAssetStruct.URL = "ui://tderqmz5dyfek";
            PlayerTopAssetStruct.DependPackages = ["PlayerInfo", "Common"];
            return PlayerTopAssetStruct;
        }(fairygui.GComponent));
        PlayerInfo.PlayerTopAssetStruct = PlayerTopAssetStruct;
    })(PlayerInfo = fgui.PlayerInfo || (fgui.PlayerInfo = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=PlayerTopAssetStruct.js.map