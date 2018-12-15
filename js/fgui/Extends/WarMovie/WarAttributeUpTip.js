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
        var WarAttributeUpTip = /** @class */ (function (_super) {
            __extends(WarAttributeUpTip, _super);
            function WarAttributeUpTip() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            WarAttributeUpTip.prototype.setData = function (data) {
                Games.WarLoadPic.setIcon(this.m_icon, data.icon);
                this.m_title.text = data.str;
            };
            return WarAttributeUpTip;
        }(WarMovie.WarAttributeUpTipStruct));
        WarMovie.WarAttributeUpTip = WarAttributeUpTip;
    })(WarMovie = fgui.WarMovie || (fgui.WarMovie = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=WarAttributeUpTip.js.map