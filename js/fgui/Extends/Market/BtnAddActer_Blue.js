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
    var Market;
    (function (Market) {
        var BtnAddActer_Blue = /** @class */ (function (_super) {
            __extends(BtnAddActer_Blue, _super);
            function BtnAddActer_Blue() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            Object.defineProperty(BtnAddActer_Blue.prototype, "State", {
                set: function (value) {
                    this.m_state.setSelectedIndex(value);
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(BtnAddActer_Blue.prototype, "Icon", {
                set: function (url) {
                    this.m_icon.m_icon.url = url;
                },
                enumerable: true,
                configurable: true
            });
            return BtnAddActer_Blue;
        }(Market.BtnAddActer_BlueStruct));
        Market.BtnAddActer_Blue = BtnAddActer_Blue;
    })(Market = fgui.Market || (fgui.Market = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=BtnAddActer_Blue.js.map