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
        var MettingStartPanelStruct = /** @class */ (function (_super) {
            __extends(MettingStartPanelStruct, _super);
            function MettingStartPanelStruct() {
                return _super.call(this) || this;
            }
            MettingStartPanelStruct.createInstance = function () {
                return (fairygui.UIPackage.createObject("Manage", "MettingStartPanel"));
            };
            MettingStartPanelStruct.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_icon = (this.getChild("icon"));
                this.m_next = (this.getChild("next"));
                this.m_okBtn = (this.getChild("okBtn"));
                this.m_cancleBtn = (this.getChild("cancleBtn"));
                this.m_dialog = (this.getChild("dialog"));
            };
            MettingStartPanelStruct.URL = "ui://y3jchkngtpm826";
            MettingStartPanelStruct.DependPackages = ["Manage", "Common"];
            return MettingStartPanelStruct;
        }(fairygui.GComponent));
        Manage.MettingStartPanelStruct = MettingStartPanelStruct;
    })(Manage = fgui.Manage || (fgui.Manage = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=MettingStartPanelStruct.js.map