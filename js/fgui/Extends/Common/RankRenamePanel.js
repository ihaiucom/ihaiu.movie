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
        var RankRenamePanel = /** @class */ (function (_super) {
            __extends(RankRenamePanel, _super);
            function RankRenamePanel() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            RankRenamePanel.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_btn_rename.onClick(this, this.onRenameClick);
                this.m_btn_close.onClick(this, this.OnCloseClick);
            };
            RankRenamePanel.prototype.open = function (title, caller, renameFun, oldName) {
                this.oldName = oldName;
                this.caller = caller;
                this.renameFun = renameFun;
                this.m_inputName.input.focus = true;
                this.m_inputName.text = this.oldName;
                Games.MenuLayer.showDialogModel();
                Games.MenuLayer.dialog.addChild(this);
                centerScreen(this);
            };
            RankRenamePanel.prototype.onRenameClick = function () {
                var newName = this.m_inputName.text;
                if (this.check() && newName != "") {
                    this.renameFun.apply(this.caller, [newName]);
                    this.close();
                }
            };
            RankRenamePanel.prototype.check = function () {
                var newName = this.m_inputName.text;
                if (!validateServerName(newName, 4, 18)) {
                    return false;
                }
                if (newName == this.oldName) {
                    Game.system.toastText(Game.config.msg.getTxt(MsgKey.account_name_repeat));
                    return false;
                }
                return true;
            };
            RankRenamePanel.prototype.OnCloseClick = function () {
                this.close();
            };
            RankRenamePanel.prototype.close = function () {
                Games.MenuLayer.hideDialogModel();
                // this.m_t1.play(Handler.create(this, this.onHide));
                this.onHide();
            };
            RankRenamePanel.prototype.onHide = function () {
                this.m_inputName.input.focus = false;
                this.removeFromParent();
            };
            return RankRenamePanel;
        }(Common.RankRenamePanelStruct));
        Common.RankRenamePanel = RankRenamePanel;
    })(Common = fgui.Common || (fgui.Common = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=RankRenamePanel.js.map