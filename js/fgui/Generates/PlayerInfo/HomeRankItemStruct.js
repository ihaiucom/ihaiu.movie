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
        var HomeRankItemStruct = /** @class */ (function (_super) {
            __extends(HomeRankItemStruct, _super);
            function HomeRankItemStruct() {
                return _super.call(this) || this;
            }
            HomeRankItemStruct.createInstance = function () {
                return (fairygui.UIPackage.createObject("PlayerInfo", "HomeRankItem"));
            };
            HomeRankItemStruct.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_iconLoader = (this.getChild("iconLoader"));
                this.m_title = (this.getChild("title"));
                this.m_nameTitle = (this.getChild("nameTitle"));
                this.m_value = (this.getChild("value"));
            };
            HomeRankItemStruct.URL = "ui://tderqmz5xw64u";
            HomeRankItemStruct.DependPackages = ["PlayerInfo", "Common"];
            return HomeRankItemStruct;
        }(fairygui.GComponent));
        PlayerInfo.HomeRankItemStruct = HomeRankItemStruct;
    })(PlayerInfo = fgui.PlayerInfo || (fgui.PlayerInfo = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=HomeRankItemStruct.js.map