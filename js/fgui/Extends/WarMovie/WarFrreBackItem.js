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
        var WarFrreBackItem = /** @class */ (function (_super) {
            __extends(WarFrreBackItem, _super);
            function WarFrreBackItem() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            WarFrreBackItem.prototype.setData = function (val, dianzhan, index) {
                var values = val * 0.1;
                this.m_fen.text = values.toFixed(1);
                this.m_starProgress.value = val;
                this.m_dianzanValue.text = dianzhan.toFixed(0);
                var config = Game.config.movieMidiaEvaluation.getMovieMidiaEva(values, index + 1);
                if (config.pic && config.pic > 0) {
                    this.m_noticeIcon.icon = Game.config.avatar.getConfig(config.pic).iconUrl;
                }
                this.m_noticeName.text = config.name;
                this.m_des.setData(config.content);
                this.m_t0.play(laya.utils.Handler.create(this, function () { Game.moduleModel.warData.sFeedBackUpdate.dispatch(); }), 1);
            };
            return WarFrreBackItem;
        }(WarMovie.WarFrreBackItemStruct));
        WarMovie.WarFrreBackItem = WarFrreBackItem;
    })(WarMovie = fgui.WarMovie || (fgui.WarMovie = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=WarFrreBackItem.js.map