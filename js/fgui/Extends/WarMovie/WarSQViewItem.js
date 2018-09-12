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
        var WarSQViewItem = /** @class */ (function (_super) {
            __extends(WarSQViewItem, _super);
            function WarSQViewItem() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            WarSQViewItem.prototype.setData = function (index, maxVal) {
                var getPropertyList = Game.config.property.getPropertyList();
                var moveData = Game.moduleModel.warData.moveData;
                this.m_progress.max = maxVal;
                this.m_progress.value = 0;
                var curVal = moveData.attribute[index];
                if (curVal > maxVal)
                    this.m_progress.max = curVal;
                laya.utils.Tween.to(this.m_progress, { value: curVal }, 2000, Laya.Ease.linearIn, null);
                this.m_average.max = maxVal;
                this.m_average.value = moveData.avrAttribute[index];
                this.m_average.m_tip.text = format(TEXT.FilmAverage, moveData.avrAttribute[index]);
            };
            return WarSQViewItem;
        }(WarMovie.WarSQViewItemStruct));
        WarMovie.WarSQViewItem = WarSQViewItem;
    })(WarMovie = fgui.WarMovie || (fgui.WarMovie = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=WarSQViewItem.js.map