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
        var RoomInfoItemStruct = /** @class */ (function (_super) {
            __extends(RoomInfoItemStruct, _super);
            function RoomInfoItemStruct() {
                return _super.call(this) || this;
            }
            RoomInfoItemStruct.createInstance = function () {
                return (fairygui.UIPackage.createObject("Building", "roomInfoItem"));
            };
            RoomInfoItemStruct.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_room_title = (this.getChild("room_title"));
                this.m_assetList = (this.getChild("assetList"));
                this.m_iconLoader = (this.getChild("iconLoader"));
                this.m_roomLock = (this.getChild("roomLock"));
                this.m_touch = (this.getChild("touch"));
                this.m_btn_roomTip = (this.getChild("btn_roomTip"));
                this.m_tips = (this.getChild("tips"));
            };
            RoomInfoItemStruct.URL = "ui://d062jvkgcpc911i";
            RoomInfoItemStruct.DependPackages = ["Building", "Common"];
            return RoomInfoItemStruct;
        }(fairygui.GComponent));
        Building.RoomInfoItemStruct = RoomInfoItemStruct;
    })(Building = fgui.Building || (fgui.Building = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=RoomInfoItemStruct.js.map