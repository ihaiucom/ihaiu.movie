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
        var BtnSelectStruct = /** @class */ (function (_super) {
            __extends(BtnSelectStruct, _super);
            function BtnSelectStruct() {
                return _super.call(this) || this;
            }
            BtnSelectStruct.createInstance = function () {
                return (fairygui.UIPackage.createObject("PfSkin", "btnSelect"));
            };
            BtnSelectStruct.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_button = this.getController("button");
                this.m_Title = (this.getChild("Title"));
            };
            BtnSelectStruct.URL = "ui://s33x8418rn1rt1w2";
            BtnSelectStruct.DependPackages = ["PfSkin"];
            return BtnSelectStruct;
        }(fairygui.GButton));
        PfSkin.BtnSelectStruct = BtnSelectStruct;
    })(PfSkin = fgui.PfSkin || (fgui.PfSkin = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=BtnSelectStruct.js.map