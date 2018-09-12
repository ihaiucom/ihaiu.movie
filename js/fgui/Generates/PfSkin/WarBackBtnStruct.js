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
        var WarBackBtnStruct = /** @class */ (function (_super) {
            __extends(WarBackBtnStruct, _super);
            function WarBackBtnStruct() {
                return _super.call(this) || this;
            }
            WarBackBtnStruct.createInstance = function () {
                return (fairygui.UIPackage.createObject("PfSkin", "WarBackBtn"));
            };
            WarBackBtnStruct.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_icon = (this.getChild("icon"));
            };
            WarBackBtnStruct.URL = "ui://s33x84186ve81g1";
            WarBackBtnStruct.DependPackages = ["PfSkin"];
            return WarBackBtnStruct;
        }(fairygui.GButton));
        PfSkin.WarBackBtnStruct = WarBackBtnStruct;
    })(PfSkin = fgui.PfSkin || (fgui.PfSkin = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=WarBackBtnStruct.js.map