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
        var MailViewPanelStruct = /** @class */ (function (_super) {
            __extends(MailViewPanelStruct, _super);
            function MailViewPanelStruct() {
                return _super.call(this) || this;
            }
            MailViewPanelStruct.createInstance = function () {
                return (fairygui.UIPackage.createObject("PfSkin", "MailViewPanel"));
            };
            MailViewPanelStruct.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_title = (this.getChild("title"));
                this.m_btnClose = (this.getChild("btnClose"));
            };
            MailViewPanelStruct.URL = "ui://s33x8418pmz6t25r";
            MailViewPanelStruct.DependPackages = ["PfSkin", "Common"];
            return MailViewPanelStruct;
        }(fairygui.GLabel));
        PfSkin.MailViewPanelStruct = MailViewPanelStruct;
    })(PfSkin = fgui.PfSkin || (fgui.PfSkin = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=MailViewPanelStruct.js.map