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
        var MainStruct = /** @class */ (function (_super) {
            __extends(MainStruct, _super);
            function MainStruct() {
                return _super.call(this) || this;
            }
            MainStruct.createInstance = function () {
                return (fairygui.UIPackage.createObject("PlayerInfo", "Main"));
            };
            MainStruct.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_rankList = (this.getChild("rankList"));
                this.m_underLine = (this.getChild("underLine"));
                this.m_PersonInfo = (this.getChild("PersonInfo"));
                this.m_topAssetList = (this.getChild("topAssetList"));
                this.m_tabPanel = (this.getChild("tabPanel"));
                this.m_homeRankTop = (this.getChild("homeRankTop"));
            };
            MainStruct.URL = "ui://tderqmz5dyfe6";
            MainStruct.DependPackages = ["PlayerInfo", "Common"];
            return MainStruct;
        }(fairygui.GComponent));
        PlayerInfo.MainStruct = MainStruct;
    })(PlayerInfo = fgui.PlayerInfo || (fgui.PlayerInfo = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=MainStruct.js.map