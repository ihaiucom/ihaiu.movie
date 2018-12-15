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
        var Warbubble = /** @class */ (function (_super) {
            __extends(Warbubble, _super);
            function Warbubble() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            Warbubble.prototype.setData = function (data) {
                this.m_title.text = data.strTip;
                var lv = data.lv;
                if (lv < 1)
                    lv = 1;
                if (lv > 4)
                    lv = 4;
                this.m_lv.setSelectedIndex(lv - 1);
            };
            return Warbubble;
        }(WarMovie.WarbubbleStruct));
        WarMovie.Warbubble = Warbubble;
    })(WarMovie = fgui.WarMovie || (fgui.WarMovie = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=Warbubble.js.map