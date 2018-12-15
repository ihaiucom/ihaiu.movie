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
        var FilmProgress = /** @class */ (function (_super) {
            __extends(FilmProgress, _super);
            function FilmProgress() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            Object.defineProperty(FilmProgress.prototype, "valu", {
                set: function (val) {
                    if (!val || val === NaN)
                        val = 0.001;
                    if (val <= 0)
                        val = 0.001;
                    if (val > 100)
                        val = 100;
                    this.value = val;
                },
                enumerable: true,
                configurable: true
            });
            return FilmProgress;
        }(WarMovie.FilmProgressStruct));
        WarMovie.FilmProgress = FilmProgress;
    })(WarMovie = fgui.WarMovie || (fgui.WarMovie = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=FilmProgress.js.map