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
        var AssetItemBigStruct = /** @class */ (function (_super) {
            __extends(AssetItemBigStruct, _super);
            function AssetItemBigStruct() {
                return _super.call(this) || this;
            }
            AssetItemBigStruct.createInstance = function () {
                return (fairygui.UIPackage.createObject("Common", "AssetItemBig"));
            };
            AssetItemBigStruct.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_Title = (this.getChild("Title"));
                this.m_assetLoader = (this.getChild("assetLoader"));
            };
            AssetItemBigStruct.URL = "ui://txcuvopdu21kas";
            AssetItemBigStruct.DependPackages = ["Common"];
            return AssetItemBigStruct;
        }(fairygui.GComponent));
        Common.AssetItemBigStruct = AssetItemBigStruct;
    })(Common = fgui.Common || (fgui.Common = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=AssetItemBigStruct.js.map