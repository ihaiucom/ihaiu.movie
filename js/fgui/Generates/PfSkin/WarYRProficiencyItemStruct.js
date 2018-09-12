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
        var WarYRProficiencyItemStruct = /** @class */ (function (_super) {
            __extends(WarYRProficiencyItemStruct, _super);
            function WarYRProficiencyItemStruct() {
                return _super.call(this) || this;
            }
            WarYRProficiencyItemStruct.createInstance = function () {
                return (fairygui.UIPackage.createObject("PfSkin", "WarYRProficiencyItem"));
            };
            WarYRProficiencyItemStruct.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_icon = (this.getChild("icon"));
                this.m_name = (this.getChild("name"));
                this.m_shuliandu = (this.getChild("shuliandu"));
                this.m_level = (this.getChild("level"));
                this.m_progress = (this.getChild("progress"));
            };
            WarYRProficiencyItemStruct.URL = "ui://s33x8418k8js1hh";
            WarYRProficiencyItemStruct.DependPackages = ["PfSkin"];
            return WarYRProficiencyItemStruct;
        }(fairygui.GComponent));
        PfSkin.WarYRProficiencyItemStruct = WarYRProficiencyItemStruct;
    })(PfSkin = fgui.PfSkin || (fgui.PfSkin = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=WarYRProficiencyItemStruct.js.map