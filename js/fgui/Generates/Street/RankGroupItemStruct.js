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
    var Street;
    (function (Street) {
        var RankGroupItemStruct = /** @class */ (function (_super) {
            __extends(RankGroupItemStruct, _super);
            function RankGroupItemStruct() {
                return _super.call(this) || this;
            }
            RankGroupItemStruct.createInstance = function () {
                return (fairygui.UIPackage.createObject("Street", "RankGroupItem"));
            };
            RankGroupItemStruct.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_BG = this.getController("BG");
                this.m_Rank = this.getController("Rank");
                this.m_isMine = this.getController("isMine");
                this.m_hasReward = this.getController("hasReward");
                this.m_txtRank = (this.getChild("txtRank"));
                this.m_txtMovie = (this.getChild("txtMovie"));
                this.m_txtName = (this.getChild("txtName"));
                this.m_icon = (this.getChild("icon"));
                this.m_btnPlayer = (this.getChild("btnPlayer"));
                this.m_labReward = (this.getChild("labReward"));
                this.m_btnCongratulate = (this.getChild("btnCongratulate"));
                this.m_aniBling = this.getTransition("aniBling");
            };
            RankGroupItemStruct.URL = "ui://mu4e45moh9ou1i";
            RankGroupItemStruct.DependPackages = ["Street", "Common", "WarMovie", "Cooperation"];
            return RankGroupItemStruct;
        }(fairygui.GLabel));
        Street.RankGroupItemStruct = RankGroupItemStruct;
    })(Street = fgui.Street || (fgui.Street = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=RankGroupItemStruct.js.map