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
        var HomeRankTopStruct = /** @class */ (function (_super) {
            __extends(HomeRankTopStruct, _super);
            function HomeRankTopStruct() {
                return _super.call(this) || this;
            }
            HomeRankTopStruct.createInstance = function () {
                return (fairygui.UIPackage.createObject("PlayerInfo", "HomeRankTop"));
            };
            HomeRankTopStruct.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_stLevel = (this.getChild("stLevel"));
                this.m_stRankKey = (this.getChild("stRankKey"));
                this.m_stRankValue = (this.getChild("stRankValue"));
                this.m_companyKey = (this.getChild("companyKey"));
                this.m_companyValue = (this.getChild("companyValue"));
            };
            HomeRankTopStruct.URL = "ui://tderqmz5xw64t";
            HomeRankTopStruct.DependPackages = ["PlayerInfo", "Common"];
            return HomeRankTopStruct;
        }(fairygui.GComponent));
        PlayerInfo.HomeRankTopStruct = HomeRankTopStruct;
    })(PlayerInfo = fgui.PlayerInfo || (fgui.PlayerInfo = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=HomeRankTopStruct.js.map