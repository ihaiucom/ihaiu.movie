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
        var YellowBtn8Struct = /** @class */ (function (_super) {
            __extends(YellowBtn8Struct, _super);
            function YellowBtn8Struct() {
                return _super.call(this) || this;
            }
            YellowBtn8Struct.createInstance = function () {
                return (fairygui.UIPackage.createObject("PfSkin", "YellowBtn8"));
            };
            YellowBtn8Struct.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_button = this.getController("button");
            };
            YellowBtn8Struct.URL = "ui://s33x8418rn1rt1vs";
            YellowBtn8Struct.DependPackages = ["PfSkin"];
            return YellowBtn8Struct;
        }(fairygui.GButton));
        PfSkin.YellowBtn8Struct = YellowBtn8Struct;
    })(PfSkin = fgui.PfSkin || (fgui.PfSkin = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=YellowBtn8Struct.js.map