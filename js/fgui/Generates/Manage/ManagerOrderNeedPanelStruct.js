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
        var ManagerOrderNeedPanelStruct = /** @class */ (function (_super) {
            __extends(ManagerOrderNeedPanelStruct, _super);
            function ManagerOrderNeedPanelStruct() {
                return _super.call(this) || this;
            }
            ManagerOrderNeedPanelStruct.createInstance = function () {
                return (fairygui.UIPackage.createObject("Manage", "ManagerOrderNeedPanel"));
            };
            ManagerOrderNeedPanelStruct.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_c_cooperation = this.getController("c_cooperation");
                this.m_title = (this.getChild("title"));
                this.m_orderLabel = (this.getChild("orderLabel"));
                this.m_needlist = (this.getChild("needlist"));
                this.m_completeLabel = (this.getChild("completeLabel"));
                this.m_rewardList = (this.getChild("rewardList"));
                this.m_deleteBtn = (this.getChild("deleteBtn"));
                this.m_okBtn = (this.getChild("okBtn"));
            };
            ManagerOrderNeedPanelStruct.URL = "ui://y3jchkngtpm8o";
            ManagerOrderNeedPanelStruct.DependPackages = ["Manage", "Common"];
            return ManagerOrderNeedPanelStruct;
        }(fairygui.GComponent));
        Manage.ManagerOrderNeedPanelStruct = ManagerOrderNeedPanelStruct;
    })(Manage = fgui.Manage || (fgui.Manage = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=ManagerOrderNeedPanelStruct.js.map