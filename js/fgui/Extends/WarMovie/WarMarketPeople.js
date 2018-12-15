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
        var WarMarketPeople = /** @class */ (function (_super) {
            __extends(WarMarketPeople, _super);
            function WarMarketPeople() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            WarMarketPeople.prototype.setData = function (req, cur, sex) {
                var isOk = true;
                this.m_curMarket.text = cur + "%";
                this.m_req.text = req + "%";
                this.m_req2.text = req + "%";
                if (req <= cur) {
                    this.m_colorControl.setSelectedIndex(0);
                }
                else {
                    this.m_colorControl.setSelectedIndex(1);
                    isOk = false;
                }
                this.m_sex.setSelectedIndex(sex);
                return isOk;
            };
            return WarMarketPeople;
        }(WarMovie.WarMarketPeopleStruct));
        WarMovie.WarMarketPeople = WarMarketPeople;
    })(WarMovie = fgui.WarMovie || (fgui.WarMovie = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=WarMarketPeople.js.map