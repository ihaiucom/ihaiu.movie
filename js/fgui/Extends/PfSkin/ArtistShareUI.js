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
        var ArtistShareUI = /** @class */ (function (_super) {
            __extends(ArtistShareUI, _super);
            function ArtistShareUI() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            ArtistShareUI.prototype.updateView = function (data) {
                this.m_icon.icon = data.config.avatarConfig.bodyIconUrl;
                this.m_name.text = data.name;
                this.m_shareBtn.visible = false;
                // this.m_signActor.text = format(Games.TEXT.CompanySignAcotr, User.info.name);
            };
            ArtistShareUI.prototype.onWindowShow = function () {
                this.m_shareBtn.onClick(this, this.onClickShareBtn);
                this.m_closeBtn.onClick(this, this.onClickCloseBtn);
            };
            ArtistShareUI.prototype.onWindowHide = function () {
                this.m_shareBtn.offClick(this, this.onClickShareBtn);
                this.m_closeBtn.offClick(this, this.onClickCloseBtn);
            };
            ArtistShareUI.prototype.onClickShareBtn = function () {
            };
            ArtistShareUI.prototype.onClickCloseBtn = function () {
                this.moduleWindow.menuClose();
            };
            return ArtistShareUI;
        }(PfSkin.ArtistShareUIStruct));
        PfSkin.ArtistShareUI = ArtistShareUI;
    })(PfSkin = fgui.PfSkin || (fgui.PfSkin = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=ArtistShareUI.js.map