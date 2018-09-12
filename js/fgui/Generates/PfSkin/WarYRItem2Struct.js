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
        var WarYRItem2Struct = /** @class */ (function (_super) {
            __extends(WarYRItem2Struct, _super);
            function WarYRItem2Struct() {
                return _super.call(this) || this;
            }
            WarYRItem2Struct.createInstance = function () {
                return (fairygui.UIPackage.createObject("PfSkin", "WarYRItem2"));
            };
            WarYRItem2Struct.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_icon = (this.getChild("icon"));
                this.m_bg = (this.getChild("bg"));
                this.m_starList = (this.getChild("starList"));
                this.m_t0 = this.getTransition("t0");
            };
            WarYRItem2Struct.URL = "ui://s33x8418k8js1hq";
            WarYRItem2Struct.DependPackages = ["PfSkin"];
            return WarYRItem2Struct;
        }(fairygui.GButton));
        PfSkin.WarYRItem2Struct = WarYRItem2Struct;
    })(PfSkin = fgui.PfSkin || (fgui.PfSkin = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=WarYRItem2Struct.js.map