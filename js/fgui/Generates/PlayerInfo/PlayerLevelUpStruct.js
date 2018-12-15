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
        var PlayerLevelUpStruct = /** @class */ (function (_super) {
            __extends(PlayerLevelUpStruct, _super);
            function PlayerLevelUpStruct() {
                return _super.call(this) || this;
            }
            PlayerLevelUpStruct.createInstance = function () {
                return (fairygui.UIPackage.createObject("PlayerInfo", "PlayerLevelUp"));
            };
            PlayerLevelUpStruct.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_bg = (this.getChild("bg"));
                this.m_processBarIcon = (this.getChild("processBarIcon"));
                this.m_stroyIcon = (this.getChild("stroyIcon"));
                this.m_starList = (this.getChild("starList"));
                this.m_group1 = (this.getChild("group1"));
                this.m_actorNum = (this.getChild("actorNum"));
                this.m_actorNumUpgrade = (this.getChild("actorNumUpgrade"));
                this.m_group2 = (this.getChild("group2"));
                this.m_awardList = (this.getChild("awardList"));
                this.m_group3 = (this.getChild("group3"));
                this.m_levelNumList = (this.getChild("levelNumList"));
                this.m_infiniten_star = (this.getChild("infiniten_star"));
                this.m_progressBar = (this.getChild("progressBar"));
                this.m_btnGetAward = (this.getChild("btnGetAward"));
                this.m_starboom_use01 = (this.getChild("starboom_use01"));
                this.m_fireworks_level01 = (this.getChild("fireworks_level01"));
                this.m_t0 = this.getTransition("t0");
            };
            PlayerLevelUpStruct.URL = "ui://tderqmz5mk9y1r";
            PlayerLevelUpStruct.DependPackages = ["PlayerInfo", "Fx", "Common"];
            return PlayerLevelUpStruct;
        }(fairygui.GComponent));
        PlayerInfo.PlayerLevelUpStruct = PlayerLevelUpStruct;
    })(PlayerInfo = fgui.PlayerInfo || (fgui.PlayerInfo = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=PlayerLevelUpStruct.js.map