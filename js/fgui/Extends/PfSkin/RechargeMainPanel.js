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
        var RechargeMainPanel = /** @class */ (function (_super) {
            __extends(RechargeMainPanel, _super);
            function RechargeMainPanel() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            RechargeMainPanel.prototype.onWindowInited = function () {
                this.m_listRechargeItem.itemRenderer = new Handler(this, this.RenderItem, null, false);
            };
            RechargeMainPanel.prototype.onWindowOpen = function () {
                var arg = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    arg[_i] = arguments[_i];
                }
                this.UpdateView();
            };
            RechargeMainPanel.prototype.UpdateView = function () {
                this.rechargeList = Game.moduleModel.recharge.rechargeList;
                this.m_listRechargeItem.numItems = this.rechargeList.length;
                this.m_title.text = Games.TEXT.RechargeTitle;
                //	let msgList = [Game.config.msg.getTxt(MsgKey.), Game.config.msg.getTxt(MsgKey.)]
                //	this.m_marquee.UpdateView(msgList);
            };
            RechargeMainPanel.prototype.RenderItem = function (index, item) {
                var data = this.rechargeList[index];
                item.RenderItem(data);
            };
            RechargeMainPanel.prototype.onWindowShow = function () {
                // Game.protoOkEvent.add(ProtoEventKey.ItemData, this.m_topPanel.updateAsset, this.m_topPanel);
                // this.m_topPanel.updateAsset();
                this.UpdateView();
                this.m_btnClose.onClick(this, this.OnCloseClick);
                this.m_marquee.Show();
            };
            RechargeMainPanel.prototype.onWindowHide = function () {
                // Game.protoOkEvent.remove(ProtoEventKey.ItemData, this.m_topPanel.updateAsset, this.m_topPanel);
                this.m_marquee.Hide();
            };
            RechargeMainPanel.prototype.OnCloseClick = function () {
                this.moduleWindow.menuClose();
            };
            return RechargeMainPanel;
        }(PfSkin.RechargeMainPanelStruct));
        PfSkin.RechargeMainPanel = RechargeMainPanel;
    })(PfSkin = fgui.PfSkin || (fgui.PfSkin = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=RechargeMainPanel.js.map