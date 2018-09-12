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
        var YellowBtn4Struct = /** @class */ (function (_super) {
            __extends(YellowBtn4Struct, _super);
            function YellowBtn4Struct() {
                return _super.call(this) || this;
            }
            YellowBtn4Struct.createInstance = function () {
                return (fairygui.UIPackage.createObject("PfSkin", "YellowBtn4"));
            };
            YellowBtn4Struct.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_button = this.getController("button");
                this.m_icon = (this.getChild("icon"));
            };
            YellowBtn4Struct.URL = "ui://s33x8418jazc1n0";
            YellowBtn4Struct.DependPackages = ["PfSkin"];
            return YellowBtn4Struct;
        }(fairygui.GButton));
        PfSkin.YellowBtn4Struct = YellowBtn4Struct;
    })(PfSkin = fgui.PfSkin || (fgui.PfSkin = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=YellowBtn4Struct.js.map