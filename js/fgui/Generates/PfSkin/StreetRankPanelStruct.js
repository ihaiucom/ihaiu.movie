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
    var PfSkin;
    (function (PfSkin) {
        var StreetRankPanelStruct = /** @class */ (function (_super) {
            __extends(StreetRankPanelStruct, _super);
            function StreetRankPanelStruct() {
                return _super.call(this) || this;
            }
            StreetRankPanelStruct.createInstance = function () {
                return (fairygui.UIPackage.createObject("PfSkin", "StreetRankPanel"));
            };
            StreetRankPanelStruct.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_rankType = this.getController("rankType");
                this.m_listTab = (this.getChild("listTab"));
                this.m_topPanel = (this.getChild("topPanel"));
                this.m_groupRank = (this.getChild("groupRank"));
                this.m_movieRank = (this.getChild("movieRank"));
                this.m_marquee = (this.getChild("marquee"));
                this.m_streetIcon = (this.getChild("streetIcon"));
            };
            StreetRankPanelStruct.URL = "ui://s33x8418oebq1vt";
            StreetRankPanelStruct.DependPackages = ["PfSkin", "Common"];
            return StreetRankPanelStruct;
        }(fairygui.GComponent));
        PfSkin.StreetRankPanelStruct = StreetRankPanelStruct;
    })(PfSkin = fgui.PfSkin || (fgui.PfSkin = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=StreetRankPanelStruct.js.map