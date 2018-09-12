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
        var WarAttributeUpTipStruct = /** @class */ (function (_super) {
            __extends(WarAttributeUpTipStruct, _super);
            function WarAttributeUpTipStruct() {
                return _super.call(this) || this;
            }
            WarAttributeUpTipStruct.createInstance = function () {
                return (fairygui.UIPackage.createObject("PfSkin", "WarAttributeUpTip"));
            };
            WarAttributeUpTipStruct.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_icon = (this.getChild("icon"));
                this.m_bgTip = (this.getChild("bgTip"));
                this.m_title = (this.getChild("title"));
                this.m_upTip = (this.getChild("upTip"));
                this.m_t0 = this.getTransition("t0");
            };
            WarAttributeUpTipStruct.URL = "ui://s33x84186ve81gn";
            WarAttributeUpTipStruct.DependPackages = ["PfSkin"];
            return WarAttributeUpTipStruct;
        }(fairygui.GLabel));
        PfSkin.WarAttributeUpTipStruct = WarAttributeUpTipStruct;
    })(PfSkin = fgui.PfSkin || (fgui.PfSkin = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=WarAttributeUpTipStruct.js.map