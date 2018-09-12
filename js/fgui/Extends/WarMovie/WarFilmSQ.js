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
        var WarFilmSQ = /** @class */ (function (_super) {
            __extends(WarFilmSQ, _super);
            function WarFilmSQ() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            WarFilmSQ.prototype.onWindowShow = function () {
                var _this = this;
                Game.sound.playSound(SoundKey.MM22_ScreenOver);
                this.m_t0.play(null, 1);
                setTimeout(function () { _this.delayRun(); }, 1000);
            };
            WarFilmSQ.prototype.onWindowHide = function () {
            };
            WarFilmSQ.prototype.delayRun = function () {
                var _this = this;
                this.moduleMain = this.moduleWindow.mainWindow;
                this.moduleWindow.closeSelf();
                // 保存当前状态到服务器
                Game.moduleModel.warData.sendUpdateMovieState(function () {
                    Game.event.dispatch(GameEventKey.GameEventKey_ShootEnd);
                    _this.moduleMain.conent.subWindowToMain();
                });
            };
            return WarFilmSQ;
        }(WarMovie.WarFilmSQStruct));
        WarMovie.WarFilmSQ = WarFilmSQ;
    })(WarMovie = fgui.WarMovie || (fgui.WarMovie = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=WarFilmSQ.js.map