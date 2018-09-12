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
        var AwardsInfoItemtsStruct = /** @class */ (function (_super) {
            __extends(AwardsInfoItemtsStruct, _super);
            function AwardsInfoItemtsStruct() {
                return _super.call(this) || this;
            }
            AwardsInfoItemtsStruct.createInstance = function () {
                return (fairygui.UIPackage.createObject("PfSkin", "AwardsInfoItem.ts"));
            };
            AwardsInfoItemtsStruct.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_isSpecial = this.getController("isSpecial");
                this.m_title = (this.getChild("title"));
                this.m_time = (this.getChild("time"));
            };
            AwardsInfoItemtsStruct.URL = "ui://s33x8418rjg3t1w3";
            AwardsInfoItemtsStruct.DependPackages = ["PfSkin", "Common"];
            return AwardsInfoItemtsStruct;
        }(fairygui.GButton));
        PfSkin.AwardsInfoItemtsStruct = AwardsInfoItemtsStruct;
    })(PfSkin = fgui.PfSkin || (fgui.PfSkin = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=AwardsInfoItemtsStruct.js.map