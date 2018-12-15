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
        var AvatarIconItemStruct = /** @class */ (function (_super) {
            __extends(AvatarIconItemStruct, _super);
            function AvatarIconItemStruct() {
                return _super.call(this) || this;
            }
            AvatarIconItemStruct.createInstance = function () {
                return (fairygui.UIPackage.createObject("PlayerInfo", "AvatarIconItem"));
            };
            AvatarIconItemStruct.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_avatarLoader = (this.getChild("avatarLoader"));
                this.m_flag_inuse = (this.getChild("flag_inuse"));
                this.m_flag_lock = (this.getChild("flag_lock"));
                this.m_g_lock = (this.getChild("g_lock"));
                this.m_btn_choose = (this.getChild("btn_choose"));
                this.m_btn_itemBuy = (this.getChild("btn_itemBuy"));
            };
            AvatarIconItemStruct.URL = "ui://tderqmz5o11z1p";
            AvatarIconItemStruct.DependPackages = ["PlayerInfo", "Common"];
            return AvatarIconItemStruct;
        }(fairygui.GButton));
        PlayerInfo.AvatarIconItemStruct = AvatarIconItemStruct;
    })(PlayerInfo = fgui.PlayerInfo || (fgui.PlayerInfo = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=AvatarIconItemStruct.js.map