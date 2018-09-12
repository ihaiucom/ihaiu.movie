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
        var OscarCupItemStruct = /** @class */ (function (_super) {
            __extends(OscarCupItemStruct, _super);
            function OscarCupItemStruct() {
                return _super.call(this) || this;
            }
            OscarCupItemStruct.createInstance = function () {
                return (fairygui.UIPackage.createObject("PfSkin", "OscarCupItem"));
            };
            OscarCupItemStruct.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_state = this.getController("state");
                this.m_buttonState = this.getController("buttonState");
                this.m_title = (this.getChild("title"));
                this.m_name = (this.getChild("name"));
                this.m_btnCongra = (this.getChild("btnCongra"));
                this.m_btnReward = (this.getChild("btnReward"));
            };
            OscarCupItemStruct.URL = "ui://s33x8418iybct1vs";
            OscarCupItemStruct.DependPackages = ["PfSkin"];
            return OscarCupItemStruct;
        }(fairygui.GLabel));
        PfSkin.OscarCupItemStruct = OscarCupItemStruct;
    })(PfSkin = fgui.PfSkin || (fgui.PfSkin = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=OscarCupItemStruct.js.map