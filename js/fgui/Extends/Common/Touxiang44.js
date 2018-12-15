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
        var Touxiang44 = /** @class */ (function (_super) {
            __extends(Touxiang44, _super);
            function Touxiang44() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            Object.defineProperty(Touxiang44.prototype, "AvatarId", {
                set: function (id) {
                    var cfg = Game.config.avatar.getConfig(id);
                    if (cfg) {
                        this.Icon = cfg.bodyIconUrl;
                        this.Vector = cfg.co_vector;
                    }
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(Touxiang44.prototype, "Icon", {
                set: function (url) {
                    this.m_icon.url = url;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(Touxiang44.prototype, "Vector", {
                set: function (pos) {
                    this.m_icon.x = isNaN(pos.x) ? -34 : 0 - pos.x;
                    this.m_icon.y = isNaN(pos.y) ? -3 : 0 - pos.y;
                },
                enumerable: true,
                configurable: true
            });
            return Touxiang44;
        }(Common.Touxiang44Struct));
        Common.Touxiang44 = Touxiang44;
    })(Common = fgui.Common || (fgui.Common = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=Touxiang44.js.map