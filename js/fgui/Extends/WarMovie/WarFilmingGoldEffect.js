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
    var WarMovie;
    (function (WarMovie) {
        var WarFilmingGoldEffect = /** @class */ (function (_super) {
            __extends(WarFilmingGoldEffect, _super);
            function WarFilmingGoldEffect() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            WarFilmingGoldEffect.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                // 关闭
                this.onClick(this, this.onClickClose);
            };
            WarFilmingGoldEffect.prototype.onClickClose = function () {
                clearTimeout(this.autoCloseTimeout);
                this.visible = false;
            };
            WarFilmingGoldEffect.prototype.setData = function (curAtt, curAtt2) {
                var _this = this;
                if (!this.listSpeak || this.listSpeak.length !== 3) {
                    this.listSpeak = new Array();
                    this.listSpeak.push(Game.config.speak.getConfig(1701).speak);
                    this.listSpeak.push(Game.config.speak.getConfig(1702).speak);
                    this.listSpeak.push(Game.config.speak.getConfig(1703).speak);
                }
                this.m_dialog.m_title.text = this.listSpeak[Random.rangeBoth(0, 2)];
                this.m_attIcon1.icon = this.urlPath(curAtt.propertyId);
                this.m_attIcon2.icon = this.urlPath(curAtt2.propertyId);
                this.m_attText1.text = "+ " + formatNumberUnit(curAtt.value);
                this.m_attText2.text = "+ " + formatNumberUnit(curAtt2.value);
                var actorList = Game.moduleModel.actor.getActors();
                for (var j = 0; j < actorList.length; j++) {
                    if (actorList[j].id == curAtt.actorId) {
                        this.m_icon.icon = Games.WarLoadPic.getActorIcon(actorList[j].config.avatar);
                        break;
                    }
                }
                this.visible = true;
                this.autoCloseTimeout = setTimeout(function () {
                    _this.onClickClose();
                }, 3000);
            };
            WarFilmingGoldEffect.prototype.urlPath = function (id) {
                var iconConfig = Game.config.property.getConfig(id);
                if (iconConfig) {
                    return Game.config.avatar.getConfig(iconConfig.icon).iconUrl;
                }
                return "";
            };
            return WarFilmingGoldEffect;
        }(WarMovie.WarFilmingGoldEffectStruct));
        WarMovie.WarFilmingGoldEffect = WarFilmingGoldEffect;
    })(WarMovie = fgui.WarMovie || (fgui.WarMovie = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=WarFilmingGoldEffect.js.map