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
        var BusinessLoadingPanelStruct = /** @class */ (function (_super) {
            __extends(BusinessLoadingPanelStruct, _super);
            function BusinessLoadingPanelStruct() {
                return _super.call(this) || this;
            }
            BusinessLoadingPanelStruct.createInstance = function () {
                return (fairygui.UIPackage.createObject("Manage", "BusinessLoadingPanel"));
            };
            BusinessLoadingPanelStruct.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_title = (this.getChild("title"));
                this.m_progress = (this.getChild("progress"));
            };
            BusinessLoadingPanelStruct.URL = "ui://y3jchkngtpm80";
            BusinessLoadingPanelStruct.DependPackages = ["Manage", "WarMovie"];
            return BusinessLoadingPanelStruct;
        }(fairygui.GComponent));
        Manage.BusinessLoadingPanelStruct = BusinessLoadingPanelStruct;
    })(Manage = fgui.Manage || (fgui.Manage = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=BusinessLoadingPanelStruct.js.map