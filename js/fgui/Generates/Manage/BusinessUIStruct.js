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
        var BusinessUIStruct = /** @class */ (function (_super) {
            __extends(BusinessUIStruct, _super);
            function BusinessUIStruct() {
                return _super.call(this) || this;
            }
            BusinessUIStruct.createInstance = function () {
                return (fairygui.UIPackage.createObject("Manage", "BusinessUI"));
            };
            BusinessUIStruct.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_c1 = this.getController("c1");
                this.m_name = (this.getChild("name"));
                this.m_title = (this.getChild("title"));
                this.m_remain = (this.getChild("remain"));
                this.m_tip = (this.getChild("tip"));
                this.m_auto = (this.getChild("auto"));
                this.m_commonDialog = (this.getChild("commonDialog"));
                this.m_checkbox = (this.getChild("checkbox"));
                this.m_nextBtn = (this.getChild("nextBtn"));
                this.m_contentPanel = (this.getChild("contentPanel"));
                this.m_bar = (this.getChild("bar"));
                this.m_head = (this.getChild("head"));
            };
            BusinessUIStruct.URL = "ui://y3jchkngtpm82";
            BusinessUIStruct.DependPackages = ["Manage", "PfSkin", "Common", "WarMovie"];
            return BusinessUIStruct;
        }(fairygui.GComponent));
        Manage.BusinessUIStruct = BusinessUIStruct;
    })(Manage = fgui.Manage || (fgui.Manage = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=BusinessUIStruct.js.map