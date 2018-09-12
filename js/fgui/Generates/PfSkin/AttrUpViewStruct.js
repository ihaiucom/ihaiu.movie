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
        var AttrUpViewStruct = /** @class */ (function (_super) {
            __extends(AttrUpViewStruct, _super);
            function AttrUpViewStruct() {
                return _super.call(this) || this;
            }
            AttrUpViewStruct.createInstance = function () {
                return (fairygui.UIPackage.createObject("PfSkin", "AttrUpView"));
            };
            AttrUpViewStruct.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_titleColor = this.getController("titleColor");
                this.m_icon = (this.getChild("icon"));
                this.m_title = (this.getChild("title"));
            };
            AttrUpViewStruct.URL = "ui://s33x8418l3ra1nm";
            AttrUpViewStruct.DependPackages = ["PfSkin", "Common"];
            return AttrUpViewStruct;
        }(fairygui.GLabel));
        PfSkin.AttrUpViewStruct = AttrUpViewStruct;
    })(PfSkin = fgui.PfSkin || (fgui.PfSkin = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=AttrUpViewStruct.js.map