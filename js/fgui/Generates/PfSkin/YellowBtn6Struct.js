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
        var YellowBtn6Struct = /** @class */ (function (_super) {
            __extends(YellowBtn6Struct, _super);
            function YellowBtn6Struct() {
                return _super.call(this) || this;
            }
            YellowBtn6Struct.createInstance = function () {
                return (fairygui.UIPackage.createObject("PfSkin", "YellowBtn6"));
            };
            YellowBtn6Struct.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_button = this.getController("button");
                this.m_icon = (this.getChild("icon"));
                this.m_title = (this.getChild("title"));
                this.m_number = (this.getChild("number"));
            };
            YellowBtn6Struct.URL = "ui://s33x8418jzhf1vk";
            YellowBtn6Struct.DependPackages = ["PfSkin"];
            return YellowBtn6Struct;
        }(fairygui.GButton));
        PfSkin.YellowBtn6Struct = YellowBtn6Struct;
    })(PfSkin = fgui.PfSkin || (fgui.PfSkin = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=YellowBtn6Struct.js.map