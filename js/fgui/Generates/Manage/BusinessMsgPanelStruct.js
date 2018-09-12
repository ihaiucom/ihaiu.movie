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
        var BusinessMsgPanelStruct = /** @class */ (function (_super) {
            __extends(BusinessMsgPanelStruct, _super);
            function BusinessMsgPanelStruct() {
                return _super.call(this) || this;
            }
            BusinessMsgPanelStruct.createInstance = function () {
                return (fairygui.UIPackage.createObject("Manage", "BusinessMsgPanel"));
            };
            BusinessMsgPanelStruct.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_read = this.getController("read");
                this.m_company = (this.getChild("company"));
                this.m_content = (this.getChild("content"));
                this.m_get = (this.getChild("get"));
                this.m_reward = (this.getChild("reward"));
                this.m_t0 = this.getTransition("t0");
            };
            BusinessMsgPanelStruct.URL = "ui://y3jchkngtpm81";
            BusinessMsgPanelStruct.DependPackages = ["Manage", "Common"];
            return BusinessMsgPanelStruct;
        }(fairygui.GComponent));
        Manage.BusinessMsgPanelStruct = BusinessMsgPanelStruct;
    })(Manage = fgui.Manage || (fgui.Manage = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=BusinessMsgPanelStruct.js.map