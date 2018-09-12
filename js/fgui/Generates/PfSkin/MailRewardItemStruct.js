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
        var MailRewardItemStruct = /** @class */ (function (_super) {
            __extends(MailRewardItemStruct, _super);
            function MailRewardItemStruct() {
                return _super.call(this) || this;
            }
            MailRewardItemStruct.createInstance = function () {
                return (fairygui.UIPackage.createObject("PfSkin", "MailRewardItem"));
            };
            MailRewardItemStruct.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_icon = (this.getChild("icon"));
                this.m_title = (this.getChild("title"));
                this.m_star = (this.getChild("star"));
            };
            MailRewardItemStruct.URL = "ui://s33x8418pmz6t25s";
            MailRewardItemStruct.DependPackages = ["PfSkin", "Common"];
            return MailRewardItemStruct;
        }(fairygui.GButton));
        PfSkin.MailRewardItemStruct = MailRewardItemStruct;
    })(PfSkin = fgui.PfSkin || (fgui.PfSkin = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=MailRewardItemStruct.js.map