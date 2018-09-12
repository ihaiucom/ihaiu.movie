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
        var Btn_renameStruct = /** @class */ (function (_super) {
            __extends(Btn_renameStruct, _super);
            function Btn_renameStruct() {
                return _super.call(this) || this;
            }
            Btn_renameStruct.createInstance = function () {
                return (fairygui.UIPackage.createObject("PfSkin", "btn_rename"));
            };
            Btn_renameStruct.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_button = this.getController("button");
                this.m_btnName = (this.getChild("btnName"));
            };
            Btn_renameStruct.URL = "ui://s33x8418l8141vc";
            Btn_renameStruct.DependPackages = ["PfSkin", "Common"];
            return Btn_renameStruct;
        }(fairygui.GButton));
        PfSkin.Btn_renameStruct = Btn_renameStruct;
    })(PfSkin = fgui.PfSkin || (fgui.PfSkin = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=Btn_renameStruct.js.map