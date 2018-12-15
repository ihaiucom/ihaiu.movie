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
    var Common;
    (function (Common) {
        var MovieEvaluationIcon = /** @class */ (function (_super) {
            __extends(MovieEvaluationIcon, _super);
            function MovieEvaluationIcon() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            Object.defineProperty(MovieEvaluationIcon.prototype, "ColorIndex", {
                // 0,1,2,3,4,5
                set: function (value) {
                    if (value >= 5) {
                        this.m_trColor.setSelectedIndex(3);
                    }
                    else if (value == 4) {
                        this.m_trColor.setSelectedIndex(2);
                    }
                    else if (value == 3) {
                        this.m_trColor.setSelectedIndex(1);
                    }
                    else {
                        this.m_trColor.setSelectedIndex(0);
                    }
                },
                enumerable: true,
                configurable: true
            });
            return MovieEvaluationIcon;
        }(Common.MovieEvaluationIconStruct));
        Common.MovieEvaluationIcon = MovieEvaluationIcon;
    })(Common = fgui.Common || (fgui.Common = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=MovieEvaluationIcon.js.map