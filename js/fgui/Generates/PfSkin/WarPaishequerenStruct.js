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
        var WarPaishequerenStruct = /** @class */ (function (_super) {
            __extends(WarPaishequerenStruct, _super);
            function WarPaishequerenStruct() {
                return _super.call(this) || this;
            }
            WarPaishequerenStruct.createInstance = function () {
                return (fairygui.UIPackage.createObject("PfSkin", "WarPaishequeren"));
            };
            WarPaishequerenStruct.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_bg = (this.getChild("bg"));
                this.m_bg2 = (this.getChild("bg2"));
                this.m_bg3 = (this.getChild("bg3"));
                this.m_bg4 = (this.getChild("bg4"));
                this.m_tipIcon = (this.getChild("tipIcon"));
                this.m_tip = (this.getChild("tip"));
                this.m_reqTip = (this.getChild("reqTip"));
                this.m_costIcon = (this.getChild("costIcon"));
                this.m_curTip = (this.getChild("curTip"));
                this.m_okCom = (this.getChild("okCom"));
                this.m_closeBtn = (this.getChild("closeBtn"));
                this.m_okBtn = (this.getChild("okBtn"));
            };
            WarPaishequerenStruct.URL = "ui://s33x84186ve81gd";
            WarPaishequerenStruct.DependPackages = ["PfSkin"];
            return WarPaishequerenStruct;
        }(fairygui.GComponent));
        PfSkin.WarPaishequerenStruct = WarPaishequerenStruct;
    })(PfSkin = fgui.PfSkin || (fgui.PfSkin = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=WarPaishequerenStruct.js.map