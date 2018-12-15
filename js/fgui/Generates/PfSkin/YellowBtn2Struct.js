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
        var YellowBtn2Struct = /** @class */ (function (_super) {
            __extends(YellowBtn2Struct, _super);
            function YellowBtn2Struct() {
                return _super.call(this) || this;
            }
            YellowBtn2Struct.createInstance = function () {
                return (fairygui.UIPackage.createObject("PfSkin", "YellowBtn2"));
            };
            YellowBtn2Struct.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_button = this.getController("button");
                this.m_goldIcon = (this.getChild("goldIcon"));
                this.m_gold = (this.getChild("gold"));
                this.m_cardIcon = (this.getChild("cardIcon"));
                this.m_page = (this.getChild("page"));
            };
            YellowBtn2Struct.URL = "ui://s33x8418jazc1my";
            YellowBtn2Struct.DependPackages = ["PfSkin", "ArtistDetail", "Common"];
            return YellowBtn2Struct;
        }(fairygui.GButton));
        PfSkin.YellowBtn2Struct = YellowBtn2Struct;
    })(PfSkin = fgui.PfSkin || (fgui.PfSkin = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=YellowBtn2Struct.js.map