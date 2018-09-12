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
        var TrainResultItem = /** @class */ (function (_super) {
            __extends(TrainResultItem, _super);
            function TrainResultItem() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            /**
             *
             * @param data 艺人数据
             * @param attr
             */
            TrainResultItem.prototype.updateView = function (data, attr) {
                var config = Game.config.property.getConfig(attr.attrId);
                var next = data[config.field];
                var curr = next - attr.value;
                this.m_add.text = "(" + "+" + attr.value + ")";
                this.m_cur.text = curr + "";
                this.m_next.text = next + "";
                this.icon = Game.config.avatar.getConfig(config.icon).iconUrl;
            };
            return TrainResultItem;
        }(PfSkin.TrainResultItemStruct));
        PfSkin.TrainResultItem = TrainResultItem;
    })(PfSkin = fgui.PfSkin || (fgui.PfSkin = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=TrainResultItem.js.map