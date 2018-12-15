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
        var UpgradeSuccessGroupStruct = /** @class */ (function (_super) {
            __extends(UpgradeSuccessGroupStruct, _super);
            function UpgradeSuccessGroupStruct() {
                return _super.call(this) || this;
            }
            UpgradeSuccessGroupStruct.createInstance = function () {
                return (fairygui.UIPackage.createObject("Building", "UpgradeSuccessGroup"));
            };
            UpgradeSuccessGroupStruct.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_roomName = (this.getChild("roomName"));
                this.m_roomFrame = (this.getChild("roomFrame"));
            };
            UpgradeSuccessGroupStruct.URL = "ui://d062jvkgui5j13w";
            UpgradeSuccessGroupStruct.DependPackages = ["Building"];
            return UpgradeSuccessGroupStruct;
        }(fairygui.GComponent));
        Building.UpgradeSuccessGroupStruct = UpgradeSuccessGroupStruct;
    })(Building = fgui.Building || (fgui.Building = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=UpgradeSuccessGroupStruct.js.map