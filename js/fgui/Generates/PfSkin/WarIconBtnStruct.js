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
        var WarIconBtnStruct = /** @class */ (function (_super) {
            __extends(WarIconBtnStruct, _super);
            function WarIconBtnStruct() {
                return _super.call(this) || this;
            }
            WarIconBtnStruct.createInstance = function () {
                return (fairygui.UIPackage.createObject("PfSkin", "WarIconBtn"));
            };
            WarIconBtnStruct.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_button = this.getController("button");
                this.m_bg = (this.getChild("bg"));
                this.m_icon = (this.getChild("icon"));
            };
            WarIconBtnStruct.URL = "ui://s33x84186ve81gr";
            WarIconBtnStruct.DependPackages = ["PfSkin"];
            return WarIconBtnStruct;
        }(fairygui.GButton));
        PfSkin.WarIconBtnStruct = WarIconBtnStruct;
    })(PfSkin = fgui.PfSkin || (fgui.PfSkin = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=WarIconBtnStruct.js.map