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
        var BtnShopTabStruct = /** @class */ (function (_super) {
            __extends(BtnShopTabStruct, _super);
            function BtnShopTabStruct() {
                return _super.call(this) || this;
            }
            BtnShopTabStruct.createInstance = function () {
                return (fairygui.UIPackage.createObject("PfSkin", "btnShopTab"));
            };
            BtnShopTabStruct.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_button = this.getController("button");
                this.m_grayed = this.getController("grayed");
                this.m_title = (this.getChild("title"));
                this.m_red = (this.getChild("red"));
            };
            BtnShopTabStruct.URL = "ui://s33x8418ap5a1uw";
            BtnShopTabStruct.DependPackages = ["PfSkin", "MainUI"];
            return BtnShopTabStruct;
        }(fairygui.GButton));
        PfSkin.BtnShopTabStruct = BtnShopTabStruct;
    })(PfSkin = fgui.PfSkin || (fgui.PfSkin = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=BtnShopTabStruct.js.map