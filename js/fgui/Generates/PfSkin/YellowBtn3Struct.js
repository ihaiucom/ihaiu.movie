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
        var YellowBtn3Struct = /** @class */ (function (_super) {
            __extends(YellowBtn3Struct, _super);
            function YellowBtn3Struct() {
                return _super.call(this) || this;
            }
            YellowBtn3Struct.createInstance = function () {
                return (fairygui.UIPackage.createObject("PfSkin", "YellowBtn3"));
            };
            YellowBtn3Struct.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_button = this.getController("button");
                this.m_name = (this.getChild("name"));
                this.m_icon = (this.getChild("icon"));
                this.m_title = (this.getChild("title"));
            };
            YellowBtn3Struct.URL = "ui://s33x8418jazc1mz";
            YellowBtn3Struct.DependPackages = ["PfSkin", "Common"];
            return YellowBtn3Struct;
        }(fairygui.GButton));
        PfSkin.YellowBtn3Struct = YellowBtn3Struct;
    })(PfSkin = fgui.PfSkin || (fgui.PfSkin = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=YellowBtn3Struct.js.map