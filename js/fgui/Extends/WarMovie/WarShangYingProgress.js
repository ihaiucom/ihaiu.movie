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
        var WarShangYingProgress = /** @class */ (function (_super) {
            __extends(WarShangYingProgress, _super);
            function WarShangYingProgress() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.isHide = false;
                return _this;
            }
            WarShangYingProgress.prototype.onWindowShow = function () {
                this.isHide = false;
            };
            WarShangYingProgress.prototype.onWindowHide = function () {
                this.isHide = true;
            };
            Object.defineProperty(WarShangYingProgress.prototype, "myvalue", {
                get: function () {
                    return this.value;
                },
                set: function (v) {
                    this.value = v;
                },
                enumerable: true,
                configurable: true
            });
            return WarShangYingProgress;
        }(WarMovie.WarShangYingProgressStruct));
        WarMovie.WarShangYingProgress = WarShangYingProgress;
    })(WarMovie = fgui.WarMovie || (fgui.WarMovie = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=WarShangYingProgress.js.map