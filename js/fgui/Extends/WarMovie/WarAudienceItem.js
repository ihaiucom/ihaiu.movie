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
        var WarAudienceItem = /** @class */ (function (_super) {
            __extends(WarAudienceItem, _super);
            function WarAudienceItem() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            WarAudienceItem.prototype.setData = function (val, index) {
                var conf = Game.config.movieAudienceEvaluation.getMovieAudience(val);
                while (!conf) {
                    conf = Game.config.movieAudienceEvaluation.getMovieAudience(50);
                }
                this.m_name.text = conf.name;
                this.m_des.text = conf.content;
                this.m_score.text = val.toFixed(0);
                if (index < 4) {
                    this.m_t0.play(laya.utils.Handler.create(this, function () { Game.moduleModel.warData.sAudienceUpdate.dispatch(); }), 1);
                }
                else {
                    this.m_t0.stop();
                    Game.moduleModel.warData.sAudienceUpdate.dispatch();
                }
                this.m_actor.setIcon(Games.WarLoadPic.getAvatarIcon(conf.pic));
            };
            return WarAudienceItem;
        }(WarMovie.WarAudienceItemStruct));
        WarMovie.WarAudienceItem = WarAudienceItem;
    })(WarMovie = fgui.WarMovie || (fgui.WarMovie = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=WarAudienceItem.js.map