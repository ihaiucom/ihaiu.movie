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
    var Manage;
    (function (Manage) {
        var OrderHeadItemStruct = /** @class */ (function (_super) {
            __extends(OrderHeadItemStruct, _super);
            function OrderHeadItemStruct() {
                return _super.call(this) || this;
            }
            OrderHeadItemStruct.createInstance = function () {
                return (fairygui.UIPackage.createObject("Manage", "OrderHeadItem"));
            };
            OrderHeadItemStruct.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_icon = (this.getChild("icon"));
            };
            OrderHeadItemStruct.URL = "ui://y3jchkngtpm818";
            OrderHeadItemStruct.DependPackages = ["Manage", "Common"];
            return OrderHeadItemStruct;
        }(fairygui.GComponent));
        Manage.OrderHeadItemStruct = OrderHeadItemStruct;
    })(Manage = fgui.Manage || (fgui.Manage = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=OrderHeadItemStruct.js.map