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
        var WarActor44 = /** @class */ (function (_super) {
            __extends(WarActor44, _super);
            function WarActor44() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            WarActor44.prototype.setIcon = function (iconPath) {
                this.m_icon.m_icon.icon = iconPath;
            };
            WarActor44.prototype.Render = function (actor) {
                this.m_icon.AvatarId = actor.config.avatar;
            };
            Object.defineProperty(WarActor44.prototype, "ActorId", {
                set: function (id) {
                    var cfg = Game.config.actor.getConfig(id);
                    this.m_icon.AvatarId = cfg.avatar;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(WarActor44.prototype, "AvatarId", {
                set: function (id) {
                    this.m_icon.AvatarId = id;
                },
                enumerable: true,
                configurable: true
            });
            return WarActor44;
        }(Common.WarActor44Struct));
        Common.WarActor44 = WarActor44;
    })(Common = fgui.Common || (fgui.Common = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=WarActor44.js.map