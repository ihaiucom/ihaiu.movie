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
        var CinemaItem = /** @class */ (function (_super) {
            __extends(CinemaItem, _super);
            function CinemaItem() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            Object.defineProperty(CinemaItem.prototype, "Level", {
                set: function (lv) {
                    if (lv > 5) {
                        lv = 4;
                        console.log("Cinema signLevel: :", lv);
                    }
                    if (lv < 1) {
                        lv = 1;
                        console.log("Cinema signLevel: :", lv);
                    }
                    this.m_icon.Level = lv;
                },
                enumerable: true,
                configurable: true
            });
            return CinemaItem;
        }(Street.CinemaItemStruct));
        Street.CinemaItem = CinemaItem;
    })(Street = fgui.Street || (fgui.Street = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=CinemaItem.js.map