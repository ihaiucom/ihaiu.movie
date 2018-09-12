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
        var WarProficiencyItemStruct = /** @class */ (function (_super) {
            __extends(WarProficiencyItemStruct, _super);
            function WarProficiencyItemStruct() {
                return _super.call(this) || this;
            }
            WarProficiencyItemStruct.createInstance = function () {
                return (fairygui.UIPackage.createObject("PfSkin", "WarProficiencyItem"));
            };
            WarProficiencyItemStruct.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_icon = (this.getChild("icon"));
                this.m_title = (this.getChild("title"));
            };
            WarProficiencyItemStruct.URL = "ui://s33x8418q3y51gx";
            WarProficiencyItemStruct.DependPackages = ["PfSkin"];
            return WarProficiencyItemStruct;
        }(fairygui.GLabel));
        PfSkin.WarProficiencyItemStruct = WarProficiencyItemStruct;
    })(PfSkin = fgui.PfSkin || (fgui.PfSkin = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=WarProficiencyItemStruct.js.map