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
        var Btn_buyStruct = /** @class */ (function (_super) {
            __extends(Btn_buyStruct, _super);
            function Btn_buyStruct() {
                return _super.call(this) || this;
            }
            Btn_buyStruct.createInstance = function () {
                return (fairygui.UIPackage.createObject("PlayerInfo", "btn_buy"));
            };
            Btn_buyStruct.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_button = this.getController("button");
                this.m_btnName = (this.getChild("btnName"));
            };
            Btn_buyStruct.URL = "ui://tderqmz5o11z1j";
            Btn_buyStruct.DependPackages = ["PlayerInfo", "System"];
            return Btn_buyStruct;
        }(fairygui.GButton));
        PlayerInfo.Btn_buyStruct = Btn_buyStruct;
    })(PlayerInfo = fgui.PlayerInfo || (fgui.PlayerInfo = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=Btn_buyStruct.js.map