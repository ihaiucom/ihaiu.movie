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
        var MailItemStruct = /** @class */ (function (_super) {
            __extends(MailItemStruct, _super);
            function MailItemStruct() {
                return _super.call(this) || this;
            }
            MailItemStruct.createInstance = function () {
                return (fairygui.UIPackage.createObject("PfSkin", "MailItem"));
            };
            MailItemStruct.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_read = this.getController("read");
                this.m_title = (this.getChild("title"));
                this.m_time = (this.getChild("time"));
                this.m_reward = (this.getChild("reward"));
            };
            MailItemStruct.URL = "ui://s33x8418klss1uf";
            MailItemStruct.DependPackages = ["PfSkin", "Common"];
            return MailItemStruct;
        }(fairygui.GButton));
        PfSkin.MailItemStruct = MailItemStruct;
    })(PfSkin = fgui.PfSkin || (fgui.PfSkin = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=MailItemStruct.js.map