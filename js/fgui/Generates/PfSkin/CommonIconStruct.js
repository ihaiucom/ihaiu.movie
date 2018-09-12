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
        var CommonIconStruct = /** @class */ (function (_super) {
            __extends(CommonIconStruct, _super);
            function CommonIconStruct() {
                return _super.call(this) || this;
            }
            CommonIconStruct.createInstance = function () {
                return (fairygui.UIPackage.createObject("PfSkin", "CommonIcon"));
            };
            CommonIconStruct.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_trColor = this.getController("trColor");
                this.m_icon = (this.getChild("icon"));
                this.m_title = (this.getChild("title"));
            };
            CommonIconStruct.URL = "ui://s33x8418pn361w4";
            CommonIconStruct.DependPackages = ["PfSkin"];
            return CommonIconStruct;
        }(fairygui.GButton));
        PfSkin.CommonIconStruct = CommonIconStruct;
    })(PfSkin = fgui.PfSkin || (fgui.PfSkin = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=CommonIconStruct.js.map