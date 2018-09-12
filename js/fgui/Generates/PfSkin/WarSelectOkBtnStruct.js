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
        var WarSelectOkBtnStruct = /** @class */ (function (_super) {
            __extends(WarSelectOkBtnStruct, _super);
            function WarSelectOkBtnStruct() {
                return _super.call(this) || this;
            }
            WarSelectOkBtnStruct.createInstance = function () {
                return (fairygui.UIPackage.createObject("PfSkin", "WarSelectOkBtn"));
            };
            WarSelectOkBtnStruct.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_button = this.getController("button");
                this.m_icon = (this.getChild("icon"));
                this.m_title = (this.getChild("title"));
                this.m_ani1 = (this.getChild("ani1"));
                this.m_ani2 = (this.getChild("ani2"));
                this.m_t0 = this.getTransition("t0");
            };
            WarSelectOkBtnStruct.URL = "ui://s33x84186ve81g7";
            WarSelectOkBtnStruct.DependPackages = ["PfSkin"];
            return WarSelectOkBtnStruct;
        }(fairygui.GButton));
        PfSkin.WarSelectOkBtnStruct = WarSelectOkBtnStruct;
    })(PfSkin = fgui.PfSkin || (fgui.PfSkin = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=WarSelectOkBtnStruct.js.map