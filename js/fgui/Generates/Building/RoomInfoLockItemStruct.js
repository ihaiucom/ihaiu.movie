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
        var RoomInfoLockItemStruct = /** @class */ (function (_super) {
            __extends(RoomInfoLockItemStruct, _super);
            function RoomInfoLockItemStruct() {
                return _super.call(this) || this;
            }
            RoomInfoLockItemStruct.createInstance = function () {
                return (fairygui.UIPackage.createObject("Building", "roomInfoLockItem"));
            };
            RoomInfoLockItemStruct.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_room_title = (this.getChild("room_title"));
                this.m_reason = (this.getChild("reason"));
            };
            RoomInfoLockItemStruct.URL = "ui://d062jvkgcpc911j";
            RoomInfoLockItemStruct.DependPackages = ["Building"];
            return RoomInfoLockItemStruct;
        }(fairygui.GComponent));
        Building.RoomInfoLockItemStruct = RoomInfoLockItemStruct;
    })(Building = fgui.Building || (fgui.Building = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=RoomInfoLockItemStruct.js.map