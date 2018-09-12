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
        var BtnAddActer_BlueStruct = /** @class */ (function (_super) {
            __extends(BtnAddActer_BlueStruct, _super);
            function BtnAddActer_BlueStruct() {
                return _super.call(this) || this;
            }
            BtnAddActer_BlueStruct.createInstance = function () {
                return (fairygui.UIPackage.createObject("PfSkin", "BtnAddActer_Blue"));
            };
            BtnAddActer_BlueStruct.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_button = this.getController("button");
                this.m_state = this.getController("state");
                this.m_icon = (this.getChild("icon"));
            };
            BtnAddActer_BlueStruct.URL = "ui://s33x8418mywn1kc";
            BtnAddActer_BlueStruct.DependPackages = ["PfSkin", "Common"];
            return BtnAddActer_BlueStruct;
        }(fairygui.GButton));
        PfSkin.BtnAddActer_BlueStruct = BtnAddActer_BlueStruct;
    })(PfSkin = fgui.PfSkin || (fgui.PfSkin = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=BtnAddActer_BlueStruct.js.map