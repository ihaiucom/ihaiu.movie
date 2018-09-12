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
        var BtnTabStruct = /** @class */ (function (_super) {
            __extends(BtnTabStruct, _super);
            function BtnTabStruct() {
                return _super.call(this) || this;
            }
            BtnTabStruct.createInstance = function () {
                return (fairygui.UIPackage.createObject("PfSkin", "btnTab"));
            };
            BtnTabStruct.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_button = this.getController("button");
                this.m_grayed = this.getController("grayed");
                this.m_title = (this.getChild("title"));
                this.m_red = (this.getChild("red"));
            };
            BtnTabStruct.URL = "ui://s33x8418mywn1kn";
            BtnTabStruct.DependPackages = ["PfSkin", "MainUI", "Common"];
            return BtnTabStruct;
        }(fairygui.GButton));
        PfSkin.BtnTabStruct = BtnTabStruct;
    })(PfSkin = fgui.PfSkin || (fgui.PfSkin = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=BtnTabStruct.js.map