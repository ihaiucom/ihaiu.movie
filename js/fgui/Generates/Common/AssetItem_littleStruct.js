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
        var AssetItem_littleStruct = /** @class */ (function (_super) {
            __extends(AssetItem_littleStruct, _super);
            function AssetItem_littleStruct() {
                return _super.call(this) || this;
            }
            AssetItem_littleStruct.createInstance = function () {
                return (fairygui.UIPackage.createObject("Common", "AssetItem_little"));
            };
            AssetItem_littleStruct.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_showBg = this.getController("showBg");
                this.m_icon = (this.getChild("icon"));
                this.m_title = (this.getChild("title"));
            };
            AssetItem_littleStruct.URL = "ui://txcuvopdmdyxt22y";
            AssetItem_littleStruct.DependPackages = ["Common", "PfSkin"];
            return AssetItem_littleStruct;
        }(fairygui.GLabel));
        Common.AssetItem_littleStruct = AssetItem_littleStruct;
    })(Common = fgui.Common || (fgui.Common = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=AssetItem_littleStruct.js.map