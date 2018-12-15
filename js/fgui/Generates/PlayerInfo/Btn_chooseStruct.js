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
        var Btn_chooseStruct = /** @class */ (function (_super) {
            __extends(Btn_chooseStruct, _super);
            function Btn_chooseStruct() {
                return _super.call(this) || this;
            }
            Btn_chooseStruct.createInstance = function () {
                return (fairygui.UIPackage.createObject("PlayerInfo", "btn_choose"));
            };
            Btn_chooseStruct.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_button = this.getController("button");
                this.m_title = (this.getChild("title"));
            };
            Btn_chooseStruct.URL = "ui://tderqmz5o11z1n";
            Btn_chooseStruct.DependPackages = ["PlayerInfo", "Common"];
            return Btn_chooseStruct;
        }(fairygui.GButton));
        PlayerInfo.Btn_chooseStruct = Btn_chooseStruct;
    })(PlayerInfo = fgui.PlayerInfo || (fgui.PlayerInfo = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=Btn_chooseStruct.js.map