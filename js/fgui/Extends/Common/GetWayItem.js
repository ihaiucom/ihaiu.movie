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
        var GetWayItem = /** @class */ (function (_super) {
            __extends(GetWayItem, _super);
            function GetWayItem() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.menuId = 0;
                return _this;
            }
            GetWayItem.prototype.setMenuId = function (menuId) {
                this.menuId = menuId;
                var menuCfg = Game.config.menu.getConfig(menuId);
                var avatarCfg = Game.config.avatar.getConfig(Number(menuCfg.icon));
                if (avatarCfg) {
                    this.m_loader.url = avatarCfg.iconUrl;
                }
                this.m_title.text = menuCfg.name;
                if (!menuCfg.isUnlock) {
                    FguiHelper.halfStaturation(this);
                    this.m_lock.visible = true;
                }
                else {
                    this.m_lock.visible = false;
                    FguiHelper.clearFilters(this);
                }
            };
            return GetWayItem;
        }(Common.GetWayItemStruct));
        Common.GetWayItem = GetWayItem;
    })(Common = fgui.Common || (fgui.Common = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=GetWayItem.js.map