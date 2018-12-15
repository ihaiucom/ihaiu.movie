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
        var LabCost2Struct = /** @class */ (function (_super) {
            __extends(LabCost2Struct, _super);
            function LabCost2Struct() {
                return _super.call(this) || this;
            }
            LabCost2Struct.createInstance = function () {
                return (fairygui.UIPackage.createObject("PfSkin", "LabCost2"));
            };
            LabCost2Struct.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_icon = (this.getChild("icon"));
                this.m_number = (this.getChild("number"));
            };
            LabCost2Struct.URL = "ui://s33x8418kl6dt21o";
            LabCost2Struct.DependPackages = ["PfSkin", "Common"];
            return LabCost2Struct;
        }(fairygui.GLabel));
        PfSkin.LabCost2Struct = LabCost2Struct;
    })(PfSkin = fgui.PfSkin || (fgui.PfSkin = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=LabCost2Struct.js.map