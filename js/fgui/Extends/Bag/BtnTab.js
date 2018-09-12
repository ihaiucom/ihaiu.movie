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
    var Bag;
    (function (Bag) {
        var BtnTab = /** @class */ (function (_super) {
            __extends(BtnTab, _super);
            function BtnTab() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            Object.defineProperty(BtnTab.prototype, "Red", {
                set: function (num) {
                    this.m_red.m_num.text = num.toString();
                    this.m_red.visible = num > 0;
                },
                enumerable: true,
                configurable: true
            });
            return BtnTab;
        }(Bag.BtnTabStruct));
        Bag.BtnTab = BtnTab;
    })(Bag = fgui.Bag || (fgui.Bag = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=BtnTab.js.map