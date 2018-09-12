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
    var Common;
    (function (Common) {
        var RankMovieInfoPanelStruct = /** @class */ (function (_super) {
            __extends(RankMovieInfoPanelStruct, _super);
            function RankMovieInfoPanelStruct() {
                return _super.call(this) || this;
            }
            RankMovieInfoPanelStruct.createInstance = function () {
                return (fairygui.UIPackage.createObject("Common", "RankMovieInfoPanel"));
            };
            RankMovieInfoPanelStruct.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_bg = (this.getChild("bg"));
                this.m_dibian = (this.getChild("dibian"));
                this.m_name = (this.getChild("name"));
                this.m_time = (this.getChild("time"));
                this.m_mdiaEaluation = (this.getChild("mdiaEaluation"));
                this.m_praise = (this.getChild("praise"));
                this.m_listActor = (this.getChild("listActor"));
                this.m_Title = (this.getChild("Title"));
                this.m_filmtype2 = (this.getChild("filmtype2"));
                this.m_boxOffice = (this.getChild("boxOffice"));
                this.m_filmTypeIcon = (this.getChild("filmTypeIcon"));
                this.m_filmType = (this.getChild("filmType"));
                this.m_btnBGClose = (this.getChild("btnBGClose"));
                this.m_btnClose = (this.getChild("btnClose"));
                this.m_movieIcon = (this.getChild("movieIcon"));
                this.m_star = (this.getChild("star"));
                this.m_txtDesc = (this.getChild("txtDesc"));
                this.m_lv = (this.getChild("lv"));
                this.m_t1 = this.getTransition("t1");
            };
            RankMovieInfoPanelStruct.URL = "ui://txcuvopdcvs8cs";
            RankMovieInfoPanelStruct.DependPackages = ["Common"];
            return RankMovieInfoPanelStruct;
        }(fairygui.GComponent));
        Common.RankMovieInfoPanelStruct = RankMovieInfoPanelStruct;
    })(Common = fgui.Common || (fgui.Common = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=RankMovieInfoPanelStruct.js.map