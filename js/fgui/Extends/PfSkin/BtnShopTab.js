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
        var BtnShopTab = /** @class */ (function (_super) {
            __extends(BtnShopTab, _super);
            function BtnShopTab() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            Object.defineProperty(BtnShopTab.prototype, "Red", {
                set: function (num) {
                    this.m_red.m_num.text = num.toString();
                    this.m_red.visible = num > 0;
                },
                enumerable: true,
                configurable: true
            });
            return BtnShopTab;
        }(PfSkin.BtnShopTabStruct));
        PfSkin.BtnShopTab = BtnShopTab;
    })(PfSkin = fgui.PfSkin || (fgui.PfSkin = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=BtnShopTab.js.map