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
        var CommonSmallItemStruct = /** @class */ (function (_super) {
            __extends(CommonSmallItemStruct, _super);
            function CommonSmallItemStruct() {
                return _super.call(this) || this;
            }
            CommonSmallItemStruct.createInstance = function () {
                return (fairygui.UIPackage.createObject("Common", "CommonSmallItem"));
            };
            CommonSmallItemStruct.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_c_show_bg = this.getController("c_show_bg");
                this.m_icon = (this.getChild("icon"));
                this.m_title = (this.getChild("title"));
                this.m_star = (this.getChild("star"));
            };
            CommonSmallItemStruct.URL = "ui://txcuvopdtpm8cz";
            CommonSmallItemStruct.DependPackages = ["Common"];
            return CommonSmallItemStruct;
        }(fairygui.GButton));
        Common.CommonSmallItemStruct = CommonSmallItemStruct;
    })(Common = fgui.Common || (fgui.Common = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=CommonSmallItemStruct.js.map