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
    var Oscar;
    (function (Oscar) {
        var OscarCandidateItem = /** @class */ (function (_super) {
            __extends(OscarCandidateItem, _super);
            function OscarCandidateItem() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            OscarCandidateItem.prototype.Render = function (data, type) {
                if (data == null) {
                    return;
                }
                switch (type) {
                    case Games.OscarAwardsType.Art:
                    case Games.OscarAwardsType.Perform:
                    case Games.OscarAwardsType.PublicPraise:
                        this.icon = Game.config.story.GetPoster(data.id);
                        break;
                    case Games.OscarAwardsType.Man:
                    case Games.OscarAwardsType.Woman:
                        this.icon = Game.config.actor.GetBodyIconUrl(data.id);
                        break;
                    default:
                        break;
                }
                this.title = data.name;
                this.m_name.text = data.playerName;
            };
            return OscarCandidateItem;
        }(Oscar.OscarCandidateItemStruct));
        Oscar.OscarCandidateItem = OscarCandidateItem;
    })(Oscar = fgui.Oscar || (fgui.Oscar = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=OscarCandidateItem.js.map