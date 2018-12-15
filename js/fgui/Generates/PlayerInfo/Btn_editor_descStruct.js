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
    var PlayerInfo;
    (function (PlayerInfo) {
        var Btn_editor_descStruct = /** @class */ (function (_super) {
            __extends(Btn_editor_descStruct, _super);
            function Btn_editor_descStruct() {
                return _super.call(this) || this;
            }
            Btn_editor_descStruct.createInstance = function () {
                return (fairygui.UIPackage.createObject("PlayerInfo", "btn_editor_desc"));
            };
            Btn_editor_descStruct.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_button = this.getController("button");
            };
            Btn_editor_descStruct.URL = "ui://tderqmz5dyfef";
            Btn_editor_descStruct.DependPackages = ["PlayerInfo", "Common"];
            return Btn_editor_descStruct;
        }(fairygui.GButton));
        PlayerInfo.Btn_editor_descStruct = Btn_editor_descStruct;
    })(PlayerInfo = fgui.PlayerInfo || (fgui.PlayerInfo = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=Btn_editor_descStruct.js.map