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
        var ChooseAvatarStruct = /** @class */ (function (_super) {
            __extends(ChooseAvatarStruct, _super);
            function ChooseAvatarStruct() {
                return _super.call(this) || this;
            }
            ChooseAvatarStruct.createInstance = function () {
                return (fairygui.UIPackage.createObject("PlayerInfo", "ChooseAvatar"));
            };
            ChooseAvatarStruct.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_bg = (this.getChild("bg"));
                this.m_titleName = (this.getChild("titleName"));
                this.m_avatarList = (this.getChild("avatarList"));
                this.m_btn_close = (this.getChild("btn_close"));
            };
            ChooseAvatarStruct.URL = "ui://tderqmz5o11z1l";
            ChooseAvatarStruct.DependPackages = ["PlayerInfo", "Common"];
            return ChooseAvatarStruct;
        }(fairygui.GComponent));
        PlayerInfo.ChooseAvatarStruct = ChooseAvatarStruct;
    })(PlayerInfo = fgui.PlayerInfo || (fgui.PlayerInfo = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=ChooseAvatarStruct.js.map