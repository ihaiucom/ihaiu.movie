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
    var ArtistDic;
    (function (ArtistDic) {
        var ActorBg = /** @class */ (function (_super) {
            __extends(ActorBg, _super);
            function ActorBg() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            ActorBg.prototype.setData = function (data) {
                this.m_starList.numItems = data.starNum;
                this.m_icon.m_icon.icon = Games.WarLoadPic.getActorIcon(data.avatar);
                if (Game.moduleModel.actor.hasActor(data.id)) {
                    this.m_noHave.setSelectedIndex(0);
                    this.m_title.text = Game.moduleModel.actor.getActor(data.id).name;
                }
                else {
                    this.m_noHave.setSelectedIndex(1);
                    this.m_title.text = data.name;
                }
            };
            return ActorBg;
        }(ArtistDic.ActorBgStruct));
        ArtistDic.ActorBg = ActorBg;
    })(ArtistDic = fgui.ArtistDic || (fgui.ArtistDic = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=ActorBg.js.map