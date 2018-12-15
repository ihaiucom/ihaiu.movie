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
    var PlayerInfo;
    (function (PlayerInfo) {
        var AssetItemStruct = /** @class */ (function (_super) {
            __extends(AssetItemStruct, _super);
            function AssetItemStruct() {
                return _super.call(this) || this;
            }
            AssetItemStruct.createInstance = function () {
                return (fairygui.UIPackage.createObject("PlayerInfo", "AssetItem"));
            };
            AssetItemStruct.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_title = (this.getChild("title"));
                this.m_assetIcon = (this.getChild("assetIcon"));
            };
            AssetItemStruct.URL = "ui://tderqmz5dyfei";
            AssetItemStruct.DependPackages = ["PlayerInfo", "Common"];
            return AssetItemStruct;
        }(fairygui.GComponent));
        PlayerInfo.AssetItemStruct = AssetItemStruct;
    })(PlayerInfo = fgui.PlayerInfo || (fgui.PlayerInfo = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=AssetItemStruct.js.map