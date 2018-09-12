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
        var OrderTargetItemStruct = /** @class */ (function (_super) {
            __extends(OrderTargetItemStruct, _super);
            function OrderTargetItemStruct() {
                return _super.call(this) || this;
            }
            OrderTargetItemStruct.createInstance = function () {
                return (fairygui.UIPackage.createObject("Manage", "OrderTargetItem"));
            };
            OrderTargetItemStruct.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_c1 = this.getController("c1");
                this.m_c2 = this.getController("c2");
                this.m_c3 = this.getController("c3");
                this.m_c4 = this.getController("c4");
                this.m_time = (this.getChild("time"));
                this.m_gou = (this.getChild("gou"));
                this.m_headIcon = (this.getChild("headIcon"));
            };
            OrderTargetItemStruct.URL = "ui://y3jchkngtpm811";
            OrderTargetItemStruct.DependPackages = ["Manage", "Common"];
            return OrderTargetItemStruct;
        }(fairygui.GButton));
        Manage.OrderTargetItemStruct = OrderTargetItemStruct;
    })(Manage = fgui.Manage || (fgui.Manage = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=OrderTargetItemStruct.js.map