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
        var BtnNextStruct = /** @class */ (function (_super) {
            __extends(BtnNextStruct, _super);
            function BtnNextStruct() {
                return _super.call(this) || this;
            }
            BtnNextStruct.createInstance = function () {
                return (fairygui.UIPackage.createObject("PfSkin", "BtnNext"));
            };
            BtnNextStruct.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_icon = (this.getChild("icon"));
            };
            BtnNextStruct.URL = "ui://s33x8418ifoct1wl";
            BtnNextStruct.DependPackages = ["PfSkin", "Common"];
            return BtnNextStruct;
        }(fairygui.GButton));
        PfSkin.BtnNextStruct = BtnNextStruct;
    })(PfSkin = fgui.PfSkin || (fgui.PfSkin = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=BtnNextStruct.js.map