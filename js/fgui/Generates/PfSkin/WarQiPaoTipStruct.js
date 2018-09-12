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
        var WarQiPaoTipStruct = /** @class */ (function (_super) {
            __extends(WarQiPaoTipStruct, _super);
            function WarQiPaoTipStruct() {
                return _super.call(this) || this;
            }
            WarQiPaoTipStruct.createInstance = function () {
                return (fairygui.UIPackage.createObject("PfSkin", "WarQiPaoTip"));
            };
            WarQiPaoTipStruct.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_arrow = (this.getChild("arrow"));
                this.m_icon = (this.getChild("icon"));
                this.m_title = (this.getChild("title"));
            };
            WarQiPaoTipStruct.URL = "ui://s33x84186ve81fy";
            WarQiPaoTipStruct.DependPackages = ["PfSkin"];
            return WarQiPaoTipStruct;
        }(fairygui.GLabel));
        PfSkin.WarQiPaoTipStruct = WarQiPaoTipStruct;
    })(PfSkin = fgui.PfSkin || (fgui.PfSkin = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=WarQiPaoTipStruct.js.map