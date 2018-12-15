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
    var Cooperation;
    (function (Cooperation) {
        var CooperationAchieved = /** @class */ (function (_super) {
            __extends(CooperationAchieved, _super);
            function CooperationAchieved() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            CooperationAchieved.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                // 关闭面板
                this.onClick(this, this.onClicClose);
            };
            // 关闭窗口
            CooperationAchieved.prototype.onClicClose = function () {
                Game.moduleModel.cooperation.sendReadCooperate();
                this.moduleWindow.closeSelf();
            };
            CooperationAchieved.prototype.onWindowShow = function () {
                this.setData();
            };
            CooperationAchieved.prototype.onWindowHide = function () {
            };
            CooperationAchieved.prototype.setData = function () {
                this.m_me.icon = User.headIconUrl;
                this.m_other.icon = Game.config.headPortrait.GetPlayerIconUrl(Game.moduleModel.cooperation.partnerInfData.portrait, Game.moduleModel.cooperation.partnerInfData.sex);
                this.m_name1.text = User.info.name;
                this.m_level1.text = format(TEXT.Lv, User.info.level);
                this.m_name2.text = Game.moduleModel.cooperation.partnerInfData.name;
                this.m_level2.text = format(TEXT.Lv, Game.moduleModel.cooperation.partnerInfData.level);
            };
            return CooperationAchieved;
        }(Cooperation.CooperationAchievedStruct));
        Cooperation.CooperationAchieved = CooperationAchieved;
    })(Cooperation = fgui.Cooperation || (fgui.Cooperation = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=CooperationAchieved.js.map