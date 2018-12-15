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
    var SystemSettings;
    (function (SystemSettings) {
        var LanguageItem = /** @class */ (function (_super) {
            __extends(LanguageItem, _super);
            function LanguageItem() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            LanguageItem.prototype.setData = function (data) {
                this.m_title.text = data.type;
            };
            return LanguageItem;
        }(SystemSettings.LanguageItemStruct));
        SystemSettings.LanguageItem = LanguageItem;
    })(SystemSettings = fgui.SystemSettings || (fgui.SystemSettings = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=LanguageItem.js.map