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
        var BuildRoomTipsStruct = /** @class */ (function (_super) {
            __extends(BuildRoomTipsStruct, _super);
            function BuildRoomTipsStruct() {
                return _super.call(this) || this;
            }
            BuildRoomTipsStruct.createInstance = function () {
                return (fairygui.UIPackage.createObject("Building", "BuildRoomTips"));
            };
            BuildRoomTipsStruct.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_effectText1 = (this.getChild("effectText1"));
                this.m_effectValue1 = (this.getChild("effectValue1"));
                this.m_effectText2 = (this.getChild("effectText2"));
                this.m_effectValue2 = (this.getChild("effectValue2"));
                this.m_t0 = this.getTransition("t0");
            };
            BuildRoomTipsStruct.URL = "ui://d062jvkgi24u12c";
            BuildRoomTipsStruct.DependPackages = ["Building", "Common"];
            return BuildRoomTipsStruct;
        }(fairygui.GComponent));
        Building.BuildRoomTipsStruct = BuildRoomTipsStruct;
    })(Building = fgui.Building || (fgui.Building = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=BuildRoomTipsStruct.js.map