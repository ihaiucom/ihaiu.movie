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
        var YellowBtn5Struct = /** @class */ (function (_super) {
            __extends(YellowBtn5Struct, _super);
            function YellowBtn5Struct() {
                return _super.call(this) || this;
            }
            YellowBtn5Struct.createInstance = function () {
                return (fairygui.UIPackage.createObject("PfSkin", "YellowBtn5"));
            };
            YellowBtn5Struct.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_button = this.getController("button");
                this.m_title = (this.getChild("title"));
                this.m_icon = (this.getChild("icon"));
                this.m_number = (this.getChild("number"));
                this.m_red = (this.getChild("red"));
            };
            YellowBtn5Struct.URL = "ui://s33x8418jazc1n1";
            YellowBtn5Struct.DependPackages = ["PfSkin", "Common"];
            return YellowBtn5Struct;
        }(fairygui.GButton));
        PfSkin.YellowBtn5Struct = YellowBtn5Struct;
    })(PfSkin = fgui.PfSkin || (fgui.PfSkin = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=YellowBtn5Struct.js.map