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
        var LabItem_bigStruct = /** @class */ (function (_super) {
            __extends(LabItem_bigStruct, _super);
            function LabItem_bigStruct() {
                return _super.call(this) || this;
            }
            LabItem_bigStruct.createInstance = function () {
                return (fairygui.UIPackage.createObject("PfSkin", "LabItem_big"));
            };
            LabItem_bigStruct.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_trColor = this.getController("trColor");
                this.m_icon = (this.getChild("icon"));
                this.m_title = (this.getChild("title"));
                this.m_star = (this.getChild("star"));
            };
            LabItem_bigStruct.URL = "ui://s33x8418ap5a1v0";
            LabItem_bigStruct.DependPackages = ["PfSkin", "Common"];
            return LabItem_bigStruct;
        }(fairygui.GButton));
        PfSkin.LabItem_bigStruct = LabItem_bigStruct;
    })(PfSkin = fgui.PfSkin || (fgui.PfSkin = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=LabItem_bigStruct.js.map