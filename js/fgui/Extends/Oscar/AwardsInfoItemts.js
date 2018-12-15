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
    var Oscar;
    (function (Oscar) {
        var AwardsInfoItemts = /** @class */ (function (_super) {
            __extends(AwardsInfoItemts, _super);
            function AwardsInfoItemts() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            AwardsInfoItemts.prototype.Render = function (dailyEvent) {
                this.dailyEvent = dailyEvent;
                this.m_title.text = this.dailyEvent.Name;
                this.m_time.text = this.dailyEvent.Time;
                this.m_isSpecial.setSelectedIndex(0);
            };
            return AwardsInfoItemts;
        }(Oscar.AwardsInfoItemtsStruct));
        Oscar.AwardsInfoItemts = AwardsInfoItemts;
    })(Oscar = fgui.Oscar || (fgui.Oscar = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=AwardsInfoItemts.js.map