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
        var WarCloseBtnStruct = /** @class */ (function (_super) {
            __extends(WarCloseBtnStruct, _super);
            function WarCloseBtnStruct() {
                return _super.call(this) || this;
            }
            WarCloseBtnStruct.createInstance = function () {
                return (fairygui.UIPackage.createObject("PfSkin", "WarCloseBtn"));
            };
            WarCloseBtnStruct.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_button = this.getController("button");
                this.m_icon = (this.getChild("icon"));
                this.m_icon2 = (this.getChild("icon2"));
            };
            WarCloseBtnStruct.URL = "ui://s33x8418znuj1ez";
            WarCloseBtnStruct.DependPackages = ["PfSkin", "Common"];
            return WarCloseBtnStruct;
        }(fairygui.GButton));
        PfSkin.WarCloseBtnStruct = WarCloseBtnStruct;
    })(PfSkin = fgui.PfSkin || (fgui.PfSkin = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=WarCloseBtnStruct.js.map