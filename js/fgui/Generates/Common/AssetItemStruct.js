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
        var AssetItemStruct = /** @class */ (function (_super) {
            __extends(AssetItemStruct, _super);
            function AssetItemStruct() {
                return _super.call(this) || this;
            }
            AssetItemStruct.createInstance = function () {
                return (fairygui.UIPackage.createObject("Common", "AssetItem"));
            };
            AssetItemStruct.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_showBg = this.getController("showBg");
                this.m_assetLoader = (this.getChild("assetLoader"));
                this.m_title = (this.getChild("title"));
            };
            AssetItemStruct.URL = "ui://txcuvopddtlg2n";
            AssetItemStruct.DependPackages = ["Common", "PfSkin"];
            return AssetItemStruct;
        }(fairygui.GLabel));
        Common.AssetItemStruct = AssetItemStruct;
    })(Common = fgui.Common || (fgui.Common = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=AssetItemStruct.js.map