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
        var WarYRProficiencyStruct = /** @class */ (function (_super) {
            __extends(WarYRProficiencyStruct, _super);
            function WarYRProficiencyStruct() {
                return _super.call(this) || this;
            }
            WarYRProficiencyStruct.createInstance = function () {
                return (fairygui.UIPackage.createObject("PfSkin", "WarYRProficiency"));
            };
            WarYRProficiencyStruct.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_bg = (this.getChild("bg"));
                this.m_bg1 = (this.getChild("bg1"));
                this.m_bgTop = (this.getChild("bgTop"));
                this.m_bgBai = (this.getChild("bgBai"));
                this.m_title = (this.getChild("title"));
                this.m_icon = (this.getChild("icon"));
                this.m_yrList = (this.getChild("yrList"));
                this.m_okBtn = (this.getChild("okBtn"));
            };
            WarYRProficiencyStruct.URL = "ui://s33x8418k8js1hg";
            WarYRProficiencyStruct.DependPackages = ["PfSkin"];
            return WarYRProficiencyStruct;
        }(fairygui.GComponent));
        PfSkin.WarYRProficiencyStruct = WarYRProficiencyStruct;
    })(PfSkin = fgui.PfSkin || (fgui.PfSkin = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=WarYRProficiencyStruct.js.map