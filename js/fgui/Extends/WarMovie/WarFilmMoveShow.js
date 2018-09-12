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
        var WarFilmMoveShow = /** @class */ (function (_super) {
            __extends(WarFilmMoveShow, _super);
            function WarFilmMoveShow() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            WarFilmMoveShow.prototype.setRandomIcon = function () {
                var list = Game.config.story.getConfigList();
                this.m_1.icon = Game.config.avatar.getConfig(list[Random.range(1, list.length)].poster_name).iconUrl;
                this.m_2.icon = Game.config.avatar.getConfig(list[Random.range(1, list.length)].poster_name).iconUrl;
                this.m_3.icon = Game.config.avatar.getConfig(list[Random.range(1, list.length)].poster_name).iconUrl;
                this.m_4.icon = Game.config.avatar.getConfig(list[Random.range(1, list.length)].poster_name).iconUrl;
                this.m_5.icon = Game.config.avatar.getConfig(list[Random.range(1, list.length)].poster_name).iconUrl;
            };
            return WarFilmMoveShow;
        }(WarMovie.WarFilmMoveShowStruct));
        WarMovie.WarFilmMoveShow = WarFilmMoveShow;
    })(WarMovie = fgui.WarMovie || (fgui.WarMovie = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=WarFilmMoveShow.js.map