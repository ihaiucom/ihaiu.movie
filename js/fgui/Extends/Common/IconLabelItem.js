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
        var IconLabelItem = /** @class */ (function (_super) {
            __extends(IconLabelItem, _super);
            function IconLabelItem() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            /**
             *
             * @param data 艺人数据
             * @param id 属性id
             */
            IconLabelItem.prototype.updateView = function (data, id) {
                var config = Game.config.property.getConfig(id);
                var field = config.field;
                var value = data[field];
                this.icon = Game.config.avatar.getConfig(config.icon).iconUrl;
                this.text = formatNumberUnit(value);
            };
            return IconLabelItem;
        }(Common.IconLabelItemStruct));
        Common.IconLabelItem = IconLabelItem;
    })(Common = fgui.Common || (fgui.Common = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=IconLabelItem.js.map