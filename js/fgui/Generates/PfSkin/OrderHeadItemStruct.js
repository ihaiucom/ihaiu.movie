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
        var OrderHeadItemStruct = /** @class */ (function (_super) {
            __extends(OrderHeadItemStruct, _super);
            function OrderHeadItemStruct() {
                return _super.call(this) || this;
            }
            OrderHeadItemStruct.createInstance = function () {
                return (fairygui.UIPackage.createObject("PfSkin", "OrderHeadItem"));
            };
            OrderHeadItemStruct.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
            };
            OrderHeadItemStruct.URL = "ui://s33x8418lq441us";
            OrderHeadItemStruct.DependPackages = ["PfSkin"];
            return OrderHeadItemStruct;
        }(fairygui.GComponent));
        PfSkin.OrderHeadItemStruct = OrderHeadItemStruct;
    })(PfSkin = fgui.PfSkin || (fgui.PfSkin = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=OrderHeadItemStruct.js.map