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
    var PfSkin;
    (function (PfSkin) {
        var ActorExperciseItem = /** @class */ (function (_super) {
            __extends(ActorExperciseItem, _super);
            function ActorExperciseItem() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            ActorExperciseItem.prototype.setInfo = function (data) {
                this.data = data;
                this.m_title.text = data.name;
                this.m_skillExp.text = format(TEXT.ActorSkillExp, data.skillExp);
                this.m_btnSelect.m_title.text = TEXT.ButtonSelect;
                this.m_starList.removeChildrenToPool();
                for (var i = 0; i < data.star; i++) {
                    var star = this.m_starList.addItemFromPool();
                    this.m_starList.addChild(star);
                }
                this.m_icon.url = Game.config.avatar.getConfig(data.config.avatar).bodyIconUrl;
            };
            return ActorExperciseItem;
        }(PfSkin.ActorExperciseItemStruct));
        PfSkin.ActorExperciseItem = ActorExperciseItem;
    })(PfSkin = fgui.PfSkin || (fgui.PfSkin = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=ActorExperciseItem.js.map