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
    var Notice;
    (function (Notice) {
        var PublicNoticePanelStruct = /** @class */ (function (_super) {
            __extends(PublicNoticePanelStruct, _super);
            function PublicNoticePanelStruct() {
                return _super.call(this) || this;
            }
            PublicNoticePanelStruct.createInstance = function () {
                return (fairygui.UIPackage.createObject("Notice", "PublicNoticePanel"));
            };
            PublicNoticePanelStruct.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_labContent = (this.getChild("labContent"));
                this.m_checkBox = (this.getChild("checkBox"));
                this.m_btnClose = (this.getChild("btnClose"));
            };
            PublicNoticePanelStruct.URL = "ui://jh3pqd7de77b0";
            PublicNoticePanelStruct.DependPackages = ["Notice", "Common", "PfSkin"];
            return PublicNoticePanelStruct;
        }(fairygui.GComponent));
        Notice.PublicNoticePanelStruct = PublicNoticePanelStruct;
    })(Notice = fgui.Notice || (fgui.Notice = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=PublicNoticePanelStruct.js.map