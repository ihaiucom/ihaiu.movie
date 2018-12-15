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
        var BuildRoomUpgradeSuccessStruct = /** @class */ (function (_super) {
            __extends(BuildRoomUpgradeSuccessStruct, _super);
            function BuildRoomUpgradeSuccessStruct() {
                return _super.call(this) || this;
            }
            BuildRoomUpgradeSuccessStruct.createInstance = function () {
                return (fairygui.UIPackage.createObject("Building", "BuildRoomUpgradeSuccess"));
            };
            BuildRoomUpgradeSuccessStruct.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_porpList = (this.getChild("porpList"));
                this.m_n18_fireworks02 = (this.getChild("n18_fireworks02"));
                this.m_n17_fireworks01 = (this.getChild("n17_fireworks01"));
                this.m_effectGroup = (this.getChild("effectGroup"));
                this.m_btn_confirm = (this.getChild("btn_confirm"));
                this.m_n16_levelup002 = (this.getChild("n16_levelup002"));
                this.m_t0 = this.getTransition("t0");
            };
            BuildRoomUpgradeSuccessStruct.URL = "ui://d062jvkgcpc911n";
            BuildRoomUpgradeSuccessStruct.DependPackages = ["Building", "Fx", "Common"];
            return BuildRoomUpgradeSuccessStruct;
        }(fairygui.GComponent));
        Building.BuildRoomUpgradeSuccessStruct = BuildRoomUpgradeSuccessStruct;
    })(Building = fgui.Building || (fgui.Building = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=BuildRoomUpgradeSuccessStruct.js.map