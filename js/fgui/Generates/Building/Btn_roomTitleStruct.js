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
        var Btn_roomTitleStruct = /** @class */ (function (_super) {
            __extends(Btn_roomTitleStruct, _super);
            function Btn_roomTitleStruct() {
                return _super.call(this) || this;
            }
            Btn_roomTitleStruct.createInstance = function () {
                return (fairygui.UIPackage.createObject("Building", "btn_roomTitle"));
            };
            Btn_roomTitleStruct.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_button = this.getController("button");
                this.m_title = (this.getChild("title"));
            };
            Btn_roomTitleStruct.URL = "ui://d062jvkg8zgr3m";
            Btn_roomTitleStruct.DependPackages = ["Building"];
            return Btn_roomTitleStruct;
        }(fairygui.GButton));
        Building.Btn_roomTitleStruct = Btn_roomTitleStruct;
    })(Building = fgui.Building || (fgui.Building = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=Btn_roomTitleStruct.js.map