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
    var Common;
    (function (Common) {
        var CommonItem_70Struct = /** @class */ (function (_super) {
            __extends(CommonItem_70Struct, _super);
            function CommonItem_70Struct() {
                return _super.call(this) || this;
            }
            CommonItem_70Struct.createInstance = function () {
                return (fairygui.UIPackage.createObject("Common", "CommonItem_70"));
            };
            CommonItem_70Struct.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_c_show_bg = this.getController("c_show_bg");
                this.m_icon = (this.getChild("icon"));
                this.m_title = (this.getChild("title"));
                this.m_star = (this.getChild("star"));
            };
            CommonItem_70Struct.URL = "ui://txcuvopdui5jt23o";
            CommonItem_70Struct.DependPackages = ["Common"];
            return CommonItem_70Struct;
        }(fairygui.GButton));
        Common.CommonItem_70Struct = CommonItem_70Struct;
    })(Common = fgui.Common || (fgui.Common = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=CommonItem_70Struct.js.map