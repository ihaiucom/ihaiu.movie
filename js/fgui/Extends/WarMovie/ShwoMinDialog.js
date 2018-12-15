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
        var ShwoMinDialog = /** @class */ (function (_super) {
            __extends(ShwoMinDialog, _super);
            function ShwoMinDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.setTimeountNum = -1;
                return _this;
            }
            ShwoMinDialog.prototype.clickCloseBtn = function () {
                this.m_t1.play(Handler.create(this, this.close), 1);
            };
            ShwoMinDialog.prototype.close = function () {
                this.visible = false;
                if (this.setTimeountNum >= 0) {
                    clearTimeout(this.setTimeountNum);
                }
                this.setTimeountNum = -1;
            };
            ShwoMinDialog.prototype.setData = function (content) {
                var _this = this;
                this.visible = true;
                this.m_dialog.m_title.text = content;
                this.m_dialog.x = -450;
                if (this.setTimeountNum >= 0) {
                    clearTimeout(this.setTimeountNum);
                }
                this.m_t0.play(Handler.create(this, function () { _this.setTimeountNum = setTimeout(function () { _this.clickCloseBtn(); }, 3000); }), 1);
            };
            return ShwoMinDialog;
        }(WarMovie.ShwoMinDialogStruct));
        WarMovie.ShwoMinDialog = ShwoMinDialog;
    })(WarMovie = fgui.WarMovie || (fgui.WarMovie = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=ShwoMinDialog.js.map