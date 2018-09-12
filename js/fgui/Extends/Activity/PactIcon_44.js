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
    var Activity;
    (function (Activity) {
        var PactIcon_44 = /** @class */ (function (_super) {
            __extends(PactIcon_44, _super);
            function PactIcon_44() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            PactIcon_44.prototype.Render = function (itemData) {
                this.itemData = itemData;
                this.title = formatNumberUnit(itemData.itemNum);
                this.m_icon.m_icon.url = itemData.itemBodyIconUrl;
            };
            return PactIcon_44;
        }(Activity.PactIcon_44Struct));
        Activity.PactIcon_44 = PactIcon_44;
    })(Activity = fgui.Activity || (fgui.Activity = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=PactIcon_44.js.map