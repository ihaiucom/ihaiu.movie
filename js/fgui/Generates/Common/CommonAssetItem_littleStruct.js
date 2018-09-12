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
        var CommonAssetItem_littleStruct = /** @class */ (function (_super) {
            __extends(CommonAssetItem_littleStruct, _super);
            function CommonAssetItem_littleStruct() {
                return _super.call(this) || this;
            }
            CommonAssetItem_littleStruct.createInstance = function () {
                return (fairygui.UIPackage.createObject("Common", "CommonAssetItem_little"));
            };
            CommonAssetItem_littleStruct.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_frame = (this.getChild("frame"));
                this.m_icon = (this.getChild("icon"));
                this.m_title = (this.getChild("title"));
                this.m_star = (this.getChild("star"));
            };
            CommonAssetItem_littleStruct.URL = "ui://txcuvopdpqkqcd";
            CommonAssetItem_littleStruct.DependPackages = ["Common"];
            return CommonAssetItem_littleStruct;
        }(fairygui.GButton));
        Common.CommonAssetItem_littleStruct = CommonAssetItem_littleStruct;
    })(Common = fgui.Common || (fgui.Common = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=CommonAssetItem_littleStruct.js.map