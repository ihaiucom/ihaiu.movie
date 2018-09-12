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
        var WarActorProficiencyItem = /** @class */ (function (_super) {
            __extends(WarActorProficiencyItem, _super);
            function WarActorProficiencyItem() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            WarActorProficiencyItem.prototype.setData = function (data, index) {
                this.m_name.text = data.name;
                this.m_icon.setIcon(Game.config.avatar.getConfig(data.config.avatar).bodyIconUrl);
                this.m_lv.text = format(TEXT.Lv, data.level);
                this.prop = data.getShootType(Game.moduleModel.warData.moveData.type + 400);
                this.config = Game.config.actorProficiency.getConfig(Game.moduleModel.warData.moveData.type * 100 + this.prop.proficiencyLevel);
                this.add = Game.moduleModel.warData.moveData.actorShootType[Game.moduleModel.warData.proficiencyForActor.getValue(index + 1)];
                this.checkProgress(data, index);
            };
            // 进度监测
            WarActorProficiencyItem.prototype.checkProgress = function (data, index) {
                var showLv = this.prop.proficiencyLevel;
                var curExp = this.prop.proficiencyExp;
                if (curExp - this.add >= 0) {
                    // 在当前等级，直接增加经验
                    this.m_progress.max = this.config.exp;
                    this.m_progress.value = curExp - this.add;
                    laya.utils.Tween.to(this.m_progress, { value: curExp }, 1000, Laya.Ease.linearIn, Laya.Handler.create(this, this.compleOver));
                    this.m_tip.text = format(TEXT.FilmProficiency, showLv, this.add);
                }
                else {
                    // 不在当前等级，从上一级增加
                    showLv--;
                    var preConfig = Game.config.actorProficiency.getConfig(Game.moduleModel.warData.moveData.type * 100 + showLv);
                    this.m_progress.max = preConfig.exp;
                    this.m_progress.value = curExp + preConfig.exp - this.add;
                    laya.utils.Tween.to(this.m_progress, { value: preConfig.exp }, 1000, Laya.Ease.linearIn, Laya.Handler.create(this, this.compleProgress));
                    this.m_tip.text = format(TEXT.FilmProficiency, showLv, this.add);
                }
            };
            WarActorProficiencyItem.prototype.compleProgress = function () {
                this.m_progress.max = this.config.exp;
                this.m_progress.value = 0;
                laya.utils.Tween.to(this.m_progress, { value: this.prop.proficiencyExp }, 1000, Laya.Ease.linearIn, Laya.Handler.create(this, this.compleOver));
                this.m_tip.text = format(TEXT.FilmProficiency, this.prop.proficiencyLevel, this.add);
            };
            WarActorProficiencyItem.prototype.compleOver = function () {
                Game.moduleModel.warData.sProficiencyUpdate.dispatch();
            };
            return WarActorProficiencyItem;
        }(WarMovie.WarActorProficiencyItemStruct));
        WarMovie.WarActorProficiencyItem = WarActorProficiencyItem;
    })(WarMovie = fgui.WarMovie || (fgui.WarMovie = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=WarActorProficiencyItem.js.map