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
        var TopAssetItemStruct = /** @class */ (function (_super) {
            __extends(TopAssetItemStruct, _super);
            function TopAssetItemStruct() {
                return _super.call(this) || this;
            }
            TopAssetItemStruct.createInstance = function () {
                return (fairygui.UIPackage.createObject("Common", "TopAssetItem"));
            };
            TopAssetItemStruct.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_title = (this.getChild("title"));
                this.m_assetIcon = (this.getChild("assetIcon"));
            };
            TopAssetItemStruct.URL = "ui://txcuvopdfv9ead";
            TopAssetItemStruct.DependPackages = ["Common"];
            return TopAssetItemStruct;
        }(fairygui.GComponent));
        Common.TopAssetItemStruct = TopAssetItemStruct;
    })(Common = fgui.Common || (fgui.Common = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=TopAssetItemStruct.js.map