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
        var CommonAssetItemStruct = /** @class */ (function (_super) {
            __extends(CommonAssetItemStruct, _super);
            function CommonAssetItemStruct() {
                return _super.call(this) || this;
            }
            CommonAssetItemStruct.createInstance = function () {
                return (fairygui.UIPackage.createObject("Common", "CommonAssetItem"));
            };
            CommonAssetItemStruct.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_isLock = this.getController("isLock");
                this.m_frame = (this.getChild("frame"));
                this.m_icon = (this.getChild("icon"));
                this.m_num = (this.getChild("num"));
                this.m_star = (this.getChild("star"));
            };
            CommonAssetItemStruct.URL = "ui://txcuvopdib9zb5";
            CommonAssetItemStruct.DependPackages = ["Common"];
            return CommonAssetItemStruct;
        }(fairygui.GButton));
        Common.CommonAssetItemStruct = CommonAssetItemStruct;
    })(Common = fgui.Common || (fgui.Common = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=CommonAssetItemStruct.js.map