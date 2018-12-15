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
        var WarActorItem = /** @class */ (function (_super) {
            __extends(WarActorItem, _super);
            function WarActorItem() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            WarActorItem.prototype.setDataEmpty = function () {
                var temActor = Game.moduleModel.warData.temActor;
                this.m_YRHave.setSelectedIndex(1);
                this.m_isUse.setSelectedIndex(0);
                this.m_Icon.icon = Game.config.avatar.getConfig(temActor.config.avatar).bodyIconUrl;
                this.m_yrName.text = temActor.name;
                this.m_temName.text = TEXT.NoAttAdd;
                this.m_freeCost.text = TEXT.CostFree;
                this.m_okBtn.text = TEXT.SYNTH;
            };
            WarActorItem.prototype.setData = function (data, charcterData) {
                this.m_okBtn.text = TEXT.SYNTH;
                this.m_YRHave.setSelectedIndex(0);
                this.m_yrName.text = format(TEXT.NameLV, data.name, data.level);
                this.m_filmStar.m_starList.numItems = data.config.starNum;
                this.m_Icon.icon = Game.config.avatar.getConfig(data.config.avatar).bodyIconUrl;
                var effect = charcterData.geteffectVal;
                this.m_attribute1Val.text = formatNumberUnit(this.getEffectValue(effect[0], data));
                this.m_attribute2Val.text = formatNumberUnit(this.getEffectValue(effect[1], data));
                Games.WarLoadPic.setIcon(this.m_attribute1, effect[0]);
                Games.WarLoadPic.setIcon(this.m_attribute2, effect[1]);
                if (data.id === 9997) {
                    this.m_costVal.text = "0";
                }
                else {
                    this.m_costVal.text = formatNumberUnit(data.PayForFilming(charcterData.type), 1);
                }
                this.m_costIcon.icon = Game.config.avatar.getConfig(Game.config.item.getConfig(EItemId.dollar).icon).iconUrl;
            };
            WarActorItem.prototype.getEffectValue = function (effect, data) {
                var result = 0;
                switch (effect) {
                    case 1601:
                        result = data.spectacle;
                        break;
                    case 1602:
                        result = data.perform;
                        break;
                    case 1603:
                        result = data.plot;
                        break;
                    case 1604:
                        result = data.art;
                        break;
                    case 1605:
                        result = data.entertainment;
                        break;
                }
                return result;
            };
            return WarActorItem;
        }(WarMovie.WarActorItemStruct));
        WarMovie.WarActorItem = WarActorItem;
    })(WarMovie = fgui.WarMovie || (fgui.WarMovie = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=WarActorItem.js.map