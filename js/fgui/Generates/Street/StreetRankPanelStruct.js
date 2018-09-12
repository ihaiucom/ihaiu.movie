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
        var StreetRankPanelStruct = /** @class */ (function (_super) {
            __extends(StreetRankPanelStruct, _super);
            function StreetRankPanelStruct() {
                return _super.call(this) || this;
            }
            StreetRankPanelStruct.createInstance = function () {
                return (fairygui.UIPackage.createObject("Street", "StreetRankPanel"));
            };
            StreetRankPanelStruct.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_rankType = this.getController("rankType");
                this.m_list = (this.getChild("list"));
                this.m_title = (this.getChild("title"));
                this.m_listTab = (this.getChild("listTab"));
                this.m_txtGroupMovieRank = (this.getChild("txtGroupMovieRank"));
                this.m_txtGroupMovie = (this.getChild("txtGroupMovie"));
                this.m_txtMovieTime = (this.getChild("txtMovieTime"));
                this.m_tip = (this.getChild("tip"));
                this.m_txtMovie = (this.getChild("txtMovie"));
                this.m_txtMovieRank = (this.getChild("txtMovieRank"));
                this.m_txtMovieName = (this.getChild("txtMovieName"));
                this.m_btnClose = (this.getChild("btnClose"));
                this.m_marquee = (this.getChild("marquee"));
                this.m_streetIcon = (this.getChild("streetIcon"));
            };
            StreetRankPanelStruct.URL = "ui://mu4e45moky79k";
            StreetRankPanelStruct.DependPackages = ["Street", "Common", "PfSkin"];
            return StreetRankPanelStruct;
        }(fairygui.GComponent));
        Street.StreetRankPanelStruct = StreetRankPanelStruct;
    })(Street = fgui.Street || (fgui.Street = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=StreetRankPanelStruct.js.map