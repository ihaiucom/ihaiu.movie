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
        var WarAttributeUpStruct = /** @class */ (function (_super) {
            __extends(WarAttributeUpStruct, _super);
            function WarAttributeUpStruct() {
                return _super.call(this) || this;
            }
            WarAttributeUpStruct.createInstance = function () {
                return (fairygui.UIPackage.createObject("PfSkin", "WarAttributeUp"));
            };
            WarAttributeUpStruct.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_icon = (this.getChild("icon"));
                this.m_up = (this.getChild("up"));
            };
            WarAttributeUpStruct.URL = "ui://s33x8418r8ay1fn";
            WarAttributeUpStruct.DependPackages = ["PfSkin"];
            return WarAttributeUpStruct;
        }(fairygui.GLabel));
        PfSkin.WarAttributeUpStruct = WarAttributeUpStruct;
    })(PfSkin = fgui.PfSkin || (fgui.PfSkin = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=WarAttributeUpStruct.js.map