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
        var MailViewPanel = /** @class */ (function (_super) {
            __extends(MailViewPanel, _super);
            function MailViewPanel() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            MailViewPanel.prototype.InitView = function (thisObj, closeHandler, assetList) {
                if (assetList == null) {
                    assetList = [];
                }
                this.m_btnClose.onClick(thisObj, closeHandler);
                this.assetList = assetList;
            };
            return MailViewPanel;
        }(PfSkin.MailViewPanelStruct));
        PfSkin.MailViewPanel = MailViewPanel;
    })(PfSkin = fgui.PfSkin || (fgui.PfSkin = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=MailViewPanel.js.map