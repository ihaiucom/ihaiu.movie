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
        var Touxiang = /** @class */ (function (_super) {
            __extends(Touxiang, _super);
            function Touxiang() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            Object.defineProperty(Touxiang.prototype, "AvatarId", {
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
            Object.defineProperty(Touxiang.prototype, "Icon", {
                set: function (url) {
                    this.m_icon.url = url;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(Touxiang.prototype, "Vector", {
                set: function (pos) {
                    this.m_icon.x = 0 - pos.x;
                    this.m_icon.y = 0 - pos.y;
                },
                enumerable: true,
                configurable: true
            });
            return Touxiang;
        }(Common.TouxiangStruct));
        Common.Touxiang = Touxiang;
    })(Common = fgui.Common || (fgui.Common = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=Touxiang.js.map