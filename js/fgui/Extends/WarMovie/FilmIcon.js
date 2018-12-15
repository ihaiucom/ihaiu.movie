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
    var WarMovie;
    (function (WarMovie) {
        var FilmIcon = /** @class */ (function (_super) {
            __extends(FilmIcon, _super);
            function FilmIcon() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            FilmIcon.prototype.setData = function (data, randomIcon) {
                if (randomIcon === void 0) { randomIcon = false; }
                if (Game.moduleModel.story.getStoryData(data.id).isGold) {
                    this.m_gold.setSelectedIndex(1);
                }
                else {
                    this.m_gold.setSelectedIndex(0);
                }
                this.m_icon.icon = Game.config.avatar.getConfig(data.poster_name).iconUrl;
                if (randomIcon) {
                    this.m_icon.setRandomIcon();
                }
                this.m_filmStar.m_starList.numItems = data.starNumber;
            };
            return FilmIcon;
        }(WarMovie.FilmIconStruct));
        WarMovie.FilmIcon = FilmIcon;
    })(WarMovie = fgui.WarMovie || (fgui.WarMovie = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=FilmIcon.js.map