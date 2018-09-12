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
        var ManagerOrderUIStruct = /** @class */ (function (_super) {
            __extends(ManagerOrderUIStruct, _super);
            function ManagerOrderUIStruct() {
                return _super.call(this) || this;
            }
            ManagerOrderUIStruct.createInstance = function () {
                return (fairygui.UIPackage.createObject("PfSkin", "ManagerOrderUI"));
            };
            ManagerOrderUIStruct.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_c1 = this.getController("c1");
                this.m_c2 = this.getController("c2");
                this.m_sortOrder = (this.getChild("sortOrder"));
                this.m_num = (this.getChild("num"));
                this.m_noneOrder = (this.getChild("noneOrder"));
                this.m_newOrderWay = (this.getChild("newOrderWay"));
                this.m_noneGroup = (this.getChild("noneGroup"));
                this.m_orderGroup = (this.getChild("orderGroup"));
                this.m_icon = (this.getChild("icon"));
                this.m_progressNum = (this.getChild("progressNum"));
                this.m_closeBtn = (this.getChild("closeBtn"));
                this.m_needPanel = (this.getChild("needPanel"));
                this.m_order8 = (this.getChild("order8"));
                this.m_order9 = (this.getChild("order9"));
                this.m_order1 = (this.getChild("order1"));
                this.m_order3 = (this.getChild("order3"));
                this.m_order5 = (this.getChild("order5"));
                this.m_order4 = (this.getChild("order4"));
                this.m_order6 = (this.getChild("order6"));
                this.m_order7 = (this.getChild("order7"));
                this.m_order2 = (this.getChild("order2"));
                this.m_bar = (this.getChild("bar"));
                this.m_box1 = (this.getChild("box1"));
                this.m_box2 = (this.getChild("box2"));
                this.m_box3 = (this.getChild("box3"));
                this.m_box4 = (this.getChild("box4"));
                this.m_box5 = (this.getChild("box5"));
                this.m_dialog = (this.getChild("dialog"));
                this.m_t0 = this.getTransition("t0");
                this.m_t1 = this.getTransition("t1");
            };
            ManagerOrderUIStruct.URL = "ui://s33x8418lq441uq";
            ManagerOrderUIStruct.DependPackages = ["PfSkin", "Common"];
            return ManagerOrderUIStruct;
        }(fairygui.GComponent));
        PfSkin.ManagerOrderUIStruct = ManagerOrderUIStruct;
    })(PfSkin = fgui.PfSkin || (fgui.PfSkin = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=ManagerOrderUIStruct.js.map