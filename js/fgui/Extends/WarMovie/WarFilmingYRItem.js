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
        var WarFilmingYRItem = /** @class */ (function (_super) {
            __extends(WarFilmingYRItem, _super);
            function WarFilmingYRItem() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            WarFilmingYRItem.prototype.setData = function (dat, index) {
                this.m_mingzi.text = dat.name;
                // this.m_shiyan.text = format(TEXT.FilmActor, Game.moduleModel.warData.moveStory.characterProperty[index].name);
                this.m_icon.icon = Games.WarLoadPic.getActorIcon(dat.config.avatar);
            };
            return WarFilmingYRItem;
        }(WarMovie.WarFilmingYRItemStruct));
        WarMovie.WarFilmingYRItem = WarFilmingYRItem;
    })(WarMovie = fgui.WarMovie || (fgui.WarMovie = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=WarFilmingYRItem.js.map