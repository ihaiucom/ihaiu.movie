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
        var CommonButtonStruct = /** @class */ (function (_super) {
            __extends(CommonButtonStruct, _super);
            function CommonButtonStruct() {
                return _super.call(this) || this;
            }
            CommonButtonStruct.createInstance = function () {
                return (fairygui.UIPackage.createObject("Common", "CommonButton"));
            };
            CommonButtonStruct.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_visible_title = this.getController("visible_title");
                this.m_icon = (this.getChild("icon"));
                this.m_title = (this.getChild("title"));
            };
            CommonButtonStruct.URL = "ui://txcuvopdoapb9z";
            CommonButtonStruct.DependPackages = ["Common"];
            return CommonButtonStruct;
        }(fairygui.GButton));
        Common.CommonButtonStruct = CommonButtonStruct;
    })(Common = fgui.Common || (fgui.Common = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=CommonButtonStruct.js.map