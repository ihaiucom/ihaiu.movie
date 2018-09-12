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
        var RankMovieInfoStruct = /** @class */ (function (_super) {
            __extends(RankMovieInfoStruct, _super);
            function RankMovieInfoStruct() {
                return _super.call(this) || this;
            }
            RankMovieInfoStruct.createInstance = function () {
                return (fairygui.UIPackage.createObject("PfSkin", "RankMovieInfo"));
            };
            RankMovieInfoStruct.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_bg = (this.getChild("bg"));
                this.m_upDaban = (this.getChild("upDaban"));
                this.m_diban = (this.getChild("diban"));
                this.m_dibian = (this.getChild("dibian"));
                this.m_daban = (this.getChild("daban"));
                this.m_daojiao = (this.getChild("daojiao"));
                this.m_name = (this.getChild("name"));
                this.m_time = (this.getChild("time"));
                this.m_filmLabelList = (this.getChild("filmLabelList"));
                this.m_mdiaEaluation = (this.getChild("mdiaEaluation"));
                this.m_praise = (this.getChild("praise"));
                this.m_txtDesc = (this.getChild("txtDesc"));
                this.m_listActor = (this.getChild("listActor"));
                this.m_listCup = (this.getChild("listCup"));
                this.m_btnClose = (this.getChild("btnClose"));
                this.m_movieIcon = (this.getChild("movieIcon"));
                this.m_filmType = (this.getChild("filmType"));
                this.m_star = (this.getChild("star"));
                this.m_t1 = this.getTransition("t1");
            };
            RankMovieInfoStruct.URL = "ui://s33x8418l8141v6";
            RankMovieInfoStruct.DependPackages = ["PfSkin", "Common"];
            return RankMovieInfoStruct;
        }(fairygui.GComponent));
        PfSkin.RankMovieInfoStruct = RankMovieInfoStruct;
    })(PfSkin = fgui.PfSkin || (fgui.PfSkin = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=RankMovieInfoStruct.js.map