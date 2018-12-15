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
        var Btn_topCloseStruct = /** @class */ (function (_super) {
            __extends(Btn_topCloseStruct, _super);
            function Btn_topCloseStruct() {
                return _super.call(this) || this;
            }
            Btn_topCloseStruct.createInstance = function () {
                return (fairygui.UIPackage.createObject("PlayerInfo", "btn_topClose"));
            };
            Btn_topCloseStruct.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_button = this.getController("button");
            };
            Btn_topCloseStruct.URL = "ui://tderqmz5dyfej";
            Btn_topCloseStruct.DependPackages = ["PlayerInfo", "Common"];
            return Btn_topCloseStruct;
        }(fairygui.GButton));
        PlayerInfo.Btn_topCloseStruct = Btn_topCloseStruct;
    })(PlayerInfo = fgui.PlayerInfo || (fgui.PlayerInfo = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=Btn_topCloseStruct.js.map