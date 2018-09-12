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
    var Street;
    (function (Street) {
        var CinemaIcon = /** @class */ (function (_super) {
            __extends(CinemaIcon, _super);
            function CinemaIcon() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            Object.defineProperty(CinemaIcon.prototype, "Level", {
                set: function (lv) {
                    if (lv > 5) {
                        lv = 4;
                        console.log("Cinema signLevel: :", lv);
                    }
                    if (lv < 1) {
                        lv = 1;
                        console.log("Cinema signLevel: :", lv);
                    }
                    this.m_level.setSelectedIndex(5 - lv);
                },
                enumerable: true,
                configurable: true
            });
            return CinemaIcon;
        }(Street.CinemaIconStruct));
        Street.CinemaIcon = CinemaIcon;
    })(Street = fgui.Street || (fgui.Street = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=CinemaIcon.js.map