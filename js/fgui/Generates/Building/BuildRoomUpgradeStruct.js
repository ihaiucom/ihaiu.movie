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
        var BuildRoomUpgradeStruct = /** @class */ (function (_super) {
            __extends(BuildRoomUpgradeStruct, _super);
            function BuildRoomUpgradeStruct() {
                return _super.call(this) || this;
            }
            BuildRoomUpgradeStruct.createInstance = function () {
                return (fairygui.UIPackage.createObject("Building", "BuildRoomUpgrade"));
            };
            BuildRoomUpgradeStruct.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_minImage = (this.getChild("minImage"));
                this.m_bg = (this.getChild("bg"));
                this.m_txt_name = (this.getChild("txt_name"));
                this.m_needAssetList = (this.getChild("needAssetList"));
                this.m_maxLevelDesc = (this.getChild("maxLevelDesc"));
                this.m_maxLevelGroup = (this.getChild("maxLevelGroup"));
                this.m_topAsset = (this.getChild("topAsset"));
                this.m_curLevelProp = (this.getChild("curLevelProp"));
                this.m_nextLevelProp = (this.getChild("nextLevelProp"));
                this.m_btn_confirm = (this.getChild("btn_confirm"));
                this.m_btn_levelup = (this.getChild("btn_levelup"));
            };
            BuildRoomUpgradeStruct.URL = "ui://d062jvkg8zgr3o";
            BuildRoomUpgradeStruct.DependPackages = ["Building", "Common"];
            return BuildRoomUpgradeStruct;
        }(fairygui.GComponent));
        Building.BuildRoomUpgradeStruct = BuildRoomUpgradeStruct;
    })(Building = fgui.Building || (fgui.Building = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=BuildRoomUpgradeStruct.js.map