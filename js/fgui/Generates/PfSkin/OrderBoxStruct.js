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
        var OrderBoxStruct = /** @class */ (function (_super) {
            __extends(OrderBoxStruct, _super);
            function OrderBoxStruct() {
                return _super.call(this) || this;
            }
            OrderBoxStruct.createInstance = function () {
                return (fairygui.UIPackage.createObject("PfSkin", "OrderBox"));
            };
            OrderBoxStruct.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_c1 = this.getController("c1");
                this.m_title = (this.getChild("title"));
                this.m_t0 = this.getTransition("t0");
                this.m_t1 = this.getTransition("t1");
            };
            OrderBoxStruct.URL = "ui://s33x8418lq441ut";
            OrderBoxStruct.DependPackages = ["PfSkin"];
            return OrderBoxStruct;
        }(fairygui.GButton));
        PfSkin.OrderBoxStruct = OrderBoxStruct;
    })(PfSkin = fgui.PfSkin || (fgui.PfSkin = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=OrderBoxStruct.js.map