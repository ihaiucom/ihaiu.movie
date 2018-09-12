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
    var PlayerInfo;
    (function (PlayerInfo) {
        var RenameCompany = /** @class */ (function (_super) {
            __extends(RenameCompany, _super);
            function RenameCompany() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.ITEM_RENAME_ID = 5008;
                return _this;
            }
            RenameCompany.prototype.showForParent = function (parent) {
                parent.addChild(this);
            };
            RenameCompany.prototype.setInfo = function () {
                this.m_inputName.input.focus = true;
                this.m_inputName.text = User.info.name;
                var item = Game.moduleModel.item.getItem(this.ITEM_RENAME_ID);
                this.m_btn_rename.m_icon.url = item.itemIconUrl;
                this.m_btn_rename.m_num.text = "1";
                this.m_btn_rename.m_title.text = TEXT.Rename;
                this.m_btn_rename.onClick(this, this.onRenameClick);
                this.m_btn_close.onClick(this, this.onClose);
            };
            RenameCompany.prototype.onRenameClick = function () {
                var newName = this.m_inputName.text;
                if (this.check() && newName != "") {
                    Game.moduleModel.playerInfo.playerName = newName;
                    Game.protosender.GameData.RenameGameData(newName);
                    this.onClose();
                }
            };
            RenameCompany.prototype.check = function () {
                var newName = this.m_inputName.text;
                if (!validateRoleName(newName)) {
                    return false;
                }
                if (newName == User.info.name) {
                    Game.system.toastText(Game.config.msg.getTxt(MsgKey.account_name_repeat));
                    return false;
                }
                if (Game.moduleModel.item.getItemNum(this.ITEM_RENAME_ID) == 0) {
                    var itemBuy = PlayerInfo.ItemBuy.createInstance();
                    itemBuy.showForParent(this.parent);
                    return false;
                }
                return true;
            };
            RenameCompany.prototype.onClose = function () {
                this.parent.removeChild(this);
            };
            return RenameCompany;
        }(PlayerInfo.RenameCompanyStruct));
        PlayerInfo.RenameCompany = RenameCompany;
    })(PlayerInfo = fgui.PlayerInfo || (fgui.PlayerInfo = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=RenameCompany.js.map