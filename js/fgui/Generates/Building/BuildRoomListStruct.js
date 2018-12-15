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
        var BuildRoomListStruct = /** @class */ (function (_super) {
            __extends(BuildRoomListStruct, _super);
            function BuildRoomListStruct() {
                return _super.call(this) || this;
            }
            BuildRoomListStruct.createInstance = function () {
                return (fairygui.UIPackage.createObject("Building", "BuildRoomList"));
            };
            BuildRoomListStruct.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_bg = (this.getChild("bg"));
                this.m_roomList = (this.getChild("roomList"));
                this.m_topAsset = (this.getChild("topAsset"));
            };
            BuildRoomListStruct.URL = "ui://d062jvkgcpc911f";
            BuildRoomListStruct.DependPackages = ["Building", "Common"];
            return BuildRoomListStruct;
        }(fairygui.GComponent));
        Building.BuildRoomListStruct = BuildRoomListStruct;
    })(Building = fgui.Building || (fgui.Building = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=BuildRoomListStruct.js.map