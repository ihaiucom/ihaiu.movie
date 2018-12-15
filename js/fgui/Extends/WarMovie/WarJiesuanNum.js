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
        var WarJiesuanNum = /** @class */ (function (_super) {
            __extends(WarJiesuanNum, _super);
            function WarJiesuanNum() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            /**
             * 数字，0~9 .(10) k(11) w(12)
             * @param num
             */
            WarJiesuanNum.prototype.setData = function (num) {
                var curNum = 0;
                if (num === ".") {
                    curNum = 10;
                }
                else if (num === "K") {
                    curNum = 11;
                }
                else if (num === "M") {
                    curNum = 12;
                }
                else if (num === "B") {
                    curNum = 13;
                }
                else if (num === ",") {
                    curNum = 14;
                }
                else {
                    curNum = toInt(num);
                }
                this.m_num.setSelectedIndex(curNum);
            };
            return WarJiesuanNum;
        }(WarMovie.WarJiesuanNumStruct));
        WarMovie.WarJiesuanNum = WarJiesuanNum;
    })(WarMovie = fgui.WarMovie || (fgui.WarMovie = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=WarJiesuanNum.js.map