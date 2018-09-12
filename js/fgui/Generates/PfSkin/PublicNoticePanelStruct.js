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
        var PublicNoticePanelStruct = /** @class */ (function (_super) {
            __extends(PublicNoticePanelStruct, _super);
            function PublicNoticePanelStruct() {
                return _super.call(this) || this;
            }
            PublicNoticePanelStruct.createInstance = function () {
                return (fairygui.UIPackage.createObject("PfSkin", "PublicNoticePanel"));
            };
            PublicNoticePanelStruct.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_viewPanel = (this.getChild("viewPanel"));
                this.m_labContent = (this.getChild("labContent"));
                this.m_checkBox = (this.getChild("checkBox"));
            };
            PublicNoticePanelStruct.URL = "ui://s33x8418l8141v9";
            PublicNoticePanelStruct.DependPackages = ["PfSkin"];
            return PublicNoticePanelStruct;
        }(fairygui.GComponent));
        PfSkin.PublicNoticePanelStruct = PublicNoticePanelStruct;
    })(PfSkin = fgui.PfSkin || (fgui.PfSkin = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=PublicNoticePanelStruct.js.map