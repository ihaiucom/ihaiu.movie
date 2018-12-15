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
    var Common;
    (function (Common) {
        var ActorIcon = /** @class */ (function (_super) {
            __extends(ActorIcon, _super);
            function ActorIcon() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            ActorIcon.prototype.Render = function (actorId, name) {
                var cfg = Game.config.actor.getConfig(actorId);
                this.m_icon.icon = Game.config.actor.GetBodyIconUrl(actorId);
                this.title = name;
                this.m_star.starNum = cfg.starNum;
            };
            return ActorIcon;
        }(Common.ActorIconStruct));
        Common.ActorIcon = ActorIcon;
    })(Common = fgui.Common || (fgui.Common = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=ActorIcon.js.map