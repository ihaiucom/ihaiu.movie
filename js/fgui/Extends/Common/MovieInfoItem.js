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
        var MovieInfoItem = /** @class */ (function (_super) {
            __extends(MovieInfoItem, _super);
            function MovieInfoItem() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            MovieInfoItem.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
            };
            MovieInfoItem.prototype.Render = function (movieData, block) {
                this.movieData = movieData;
                this.m_boxOffice.text = formatNumberUnit(this.movieData.totalBoxOffice || 0, this.movieData.totalBoxOffice > 1000 ? 1 : 0);
                this.m_icon.icon = Game.config.story.GetPoster(this.movieData.movieId);
                this.m_icon.m_lv.icon = Game.config.blockLevel.GetSellIconUrl(block, this.movieData.totalBoxOffice);
                this.m_icon.m_lv.title = "";
            };
            return MovieInfoItem;
        }(Common.MovieInfoItemStruct));
        Common.MovieInfoItem = MovieInfoItem;
    })(Common = fgui.Common || (fgui.Common = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=MovieInfoItem.js.map