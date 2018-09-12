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
    var GM;
    (function (GM) {
        var GMMain = /** @class */ (function (_super) {
            __extends(GMMain, _super);
            function GMMain() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            // 窗口初始化完毕
            GMMain.prototype.onWindowInited = function () {
                this.m_closeButton.onClick(this.moduleWindow, this.moduleWindow.onMenuClose);
            };
            return GMMain;
        }(GM.GMMainStruct));
        GM.GMMain = GMMain;
    })(GM = fgui.GM || (fgui.GM = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=GMMain.js.map