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
    var Building;
    (function (Building) {
        var TopAssetStruct = /** @class */ (function (_super) {
            __extends(TopAssetStruct, _super);
            function TopAssetStruct() {
                return _super.call(this) || this;
            }
            TopAssetStruct.createInstance = function () {
                return (fairygui.UIPackage.createObject("Building", "topAsset"));
            };
            TopAssetStruct.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_assetList = (this.getChild("assetList"));
                this.m_btn_close = (this.getChild("btn_close"));
            };
            TopAssetStruct.URL = "ui://d062jvkgcpc911g";
            TopAssetStruct.DependPackages = ["Building"];
            return TopAssetStruct;
        }(fairygui.GComponent));
        Building.TopAssetStruct = TopAssetStruct;
    })(Building = fgui.Building || (fgui.Building = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=TopAssetStruct.js.map