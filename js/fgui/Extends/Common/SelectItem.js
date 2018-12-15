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
        var SelectItem = /** @class */ (function (_super) {
            __extends(SelectItem, _super);
            function SelectItem() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            SelectItem.prototype.Render = function (data) {
                if (data == null) {
                    this.m_icon.url = "";
                    this.m_title.text = "";
                    this.m_star.starNum = 0;
                    return;
                }
                this.m_icon.url = data.itemIconUrl;
                this.m_title.text = data.itemNumTxt;
                this.m_star.starNum = data.itemStar;
            };
            return SelectItem;
        }(Common.SelectItemStruct));
        Common.SelectItem = SelectItem;
    })(Common = fgui.Common || (fgui.Common = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=SelectItem.js.map