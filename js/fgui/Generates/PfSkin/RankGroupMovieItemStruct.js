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
        var RankGroupMovieItemStruct = /** @class */ (function (_super) {
            __extends(RankGroupMovieItemStruct, _super);
            function RankGroupMovieItemStruct() {
                return _super.call(this) || this;
            }
            RankGroupMovieItemStruct.createInstance = function () {
                return (fairygui.UIPackage.createObject("PfSkin", "RankGroupMovieItem"));
            };
            RankGroupMovieItemStruct.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_BG = this.getController("BG");
                this.m_Rank = this.getController("Rank");
                this.m_isMine = this.getController("isMine");
                this.m_txtRank = (this.getChild("txtRank"));
                this.m_txtMovie = (this.getChild("txtMovie"));
                this.m_txtMovieName = (this.getChild("txtMovieName"));
                this.m_txtName = (this.getChild("txtName"));
                this.m_btnMovie = (this.getChild("btnMovie"));
                this.m_btnSelect = (this.getChild("btnSelect"));
                this.m_btnCongratulate = (this.getChild("btnCongratulate"));
                this.m_aniBling = this.getTransition("aniBling");
            };
            RankGroupMovieItemStruct.URL = "ui://s33x8418oebq1vp";
            RankGroupMovieItemStruct.DependPackages = ["PfSkin", "Common"];
            return RankGroupMovieItemStruct;
        }(fairygui.GLabel));
        PfSkin.RankGroupMovieItemStruct = RankGroupMovieItemStruct;
    })(PfSkin = fgui.PfSkin || (fgui.PfSkin = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=RankGroupMovieItemStruct.js.map