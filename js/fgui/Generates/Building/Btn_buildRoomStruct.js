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
        var Btn_buildRoomStruct = /** @class */ (function (_super) {
            __extends(Btn_buildRoomStruct, _super);
            function Btn_buildRoomStruct() {
                return _super.call(this) || this;
            }
            Btn_buildRoomStruct.createInstance = function () {
                return (fairygui.UIPackage.createObject("Building", "btn_buildRoom"));
            };
            Btn_buildRoomStruct.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_button = this.getController("button");
                this.m_Title = (this.getChild("Title"));
            };
            Btn_buildRoomStruct.URL = "ui://d062jvkg8zgr3n";
            Btn_buildRoomStruct.DependPackages = ["Building", "Common"];
            return Btn_buildRoomStruct;
        }(fairygui.GButton));
        Building.Btn_buildRoomStruct = Btn_buildRoomStruct;
    })(Building = fgui.Building || (fgui.Building = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=Btn_buildRoomStruct.js.map