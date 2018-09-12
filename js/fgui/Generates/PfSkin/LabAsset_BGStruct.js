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
        var LabAsset_BGStruct = /** @class */ (function (_super) {
            __extends(LabAsset_BGStruct, _super);
            function LabAsset_BGStruct() {
                return _super.call(this) || this;
            }
            LabAsset_BGStruct.createInstance = function () {
                return (fairygui.UIPackage.createObject("PfSkin", "LabAsset_BG"));
            };
            LabAsset_BGStruct.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_trColor = this.getController("trColor");
                this.m_title = (this.getChild("title"));
                this.m_icon = (this.getChild("icon"));
            };
            LabAsset_BGStruct.URL = "ui://s33x8418mywn1ki";
            LabAsset_BGStruct.DependPackages = ["PfSkin", "Common"];
            return LabAsset_BGStruct;
        }(fairygui.GLabel));
        PfSkin.LabAsset_BGStruct = LabAsset_BGStruct;
    })(PfSkin = fgui.PfSkin || (fgui.PfSkin = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=LabAsset_BGStruct.js.map