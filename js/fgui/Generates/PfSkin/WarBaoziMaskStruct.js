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
        var WarBaoziMaskStruct = /** @class */ (function (_super) {
            __extends(WarBaoziMaskStruct, _super);
            function WarBaoziMaskStruct() {
                return _super.call(this) || this;
            }
            WarBaoziMaskStruct.createInstance = function () {
                return (fairygui.UIPackage.createObject("PfSkin", "WarBaoziMask"));
            };
            WarBaoziMaskStruct.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_icon3Mask = (this.getChild("icon3Mask"));
                this.m_icon2 = (this.getChild("icon2"));
            };
            WarBaoziMaskStruct.URL = "ui://s33x8418k8js1i2";
            WarBaoziMaskStruct.DependPackages = ["PfSkin"];
            return WarBaoziMaskStruct;
        }(fairygui.GComponent));
        PfSkin.WarBaoziMaskStruct = WarBaoziMaskStruct;
    })(PfSkin = fgui.PfSkin || (fgui.PfSkin = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=WarBaoziMaskStruct.js.map