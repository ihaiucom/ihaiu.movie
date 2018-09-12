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
    var PfSkin;
    (function (PfSkin) {
        var Star = /** @class */ (function (_super) {
            __extends(Star, _super);
            function Star() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            Object.defineProperty(Star.prototype, "starNum", {
                set: function (num) {
                    if (num == null) {
                        console.log("Error Star Num == null");
                        return;
                    }
                    if (num < 0) {
                        num = 0;
                    }
                    if (num > 6) {
                        num = 6;
                    }
                    this.m_starNum.setSelectedIndex(num);
                },
                enumerable: true,
                configurable: true
            });
            return Star;
        }(PfSkin.StarStruct));
        PfSkin.Star = Star;
    })(PfSkin = fgui.PfSkin || (fgui.PfSkin = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=Star.js.map