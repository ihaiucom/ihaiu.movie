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
    var TargetPackage;
    (function (TargetPackage) {
        var TargetPackageMainStruct = /** @class */ (function (_super) {
            __extends(TargetPackageMainStruct, _super);
            function TargetPackageMainStruct() {
                return _super.call(this) || this;
            }
            TargetPackageMainStruct.createInstance = function () {
                return (fairygui.UIPackage.createObject("TargetPackage", "TargetPackageMain"));
            };
            TargetPackageMainStruct.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_title = (this.getChild("title"));
                this.m_titleName = (this.getChild("titleName"));
                this.m_npcIcon = (this.getChild("npcIcon"));
                this.m_close = (this.getChild("close"));
                this.m_okBtn = (this.getChild("okBtn"));
            };
            TargetPackageMainStruct.URL = "ui://7w6h9vntor4b0";
            TargetPackageMainStruct.DependPackages = ["TargetPackage", "Common"];
            return TargetPackageMainStruct;
        }(fairygui.GComponent));
        TargetPackage.TargetPackageMainStruct = TargetPackageMainStruct;
    })(TargetPackage = fgui.TargetPackage || (fgui.TargetPackage = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=TargetPackageMainStruct.js.map