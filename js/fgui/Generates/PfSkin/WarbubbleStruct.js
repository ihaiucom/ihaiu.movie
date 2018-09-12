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
        var WarbubbleStruct = /** @class */ (function (_super) {
            __extends(WarbubbleStruct, _super);
            function WarbubbleStruct() {
                return _super.call(this) || this;
            }
            WarbubbleStruct.createInstance = function () {
                return (fairygui.UIPackage.createObject("PfSkin", "Warbubble"));
            };
            WarbubbleStruct.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_c1 = this.getController("c1");
                this.m_bg = (this.getChild("bg"));
                this.m_0 = (this.getChild("0"));
                this.m_1 = (this.getChild("1"));
                this.m_2 = (this.getChild("2"));
                this.m_3 = (this.getChild("3"));
                this.m_4 = (this.getChild("4"));
                this.m_title = (this.getChild("title"));
            };
            WarbubbleStruct.URL = "ui://s33x84186ve81gk";
            WarbubbleStruct.DependPackages = ["PfSkin"];
            return WarbubbleStruct;
        }(fairygui.GLabel));
        PfSkin.WarbubbleStruct = WarbubbleStruct;
    })(PfSkin = fgui.PfSkin || (fgui.PfSkin = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=WarbubbleStruct.js.map