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
        var OscarRewardPanel = /** @class */ (function (_super) {
            __extends(OscarRewardPanel, _super);
            function OscarRewardPanel() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.listData = [];
                return _this;
            }
            OscarRewardPanel.prototype.onWindowInited = function () {
                this.m_btnConfirm.onClick(this, this.OnConfirm);
                this.m_list.itemRenderer = new Handler(this, this.RenderItem, null, false);
                this.m_list.setVirtual();
            };
            OscarRewardPanel.prototype.onWindowOpen = function (arg) {
                this.UpdateView();
            };
            OscarRewardPanel.prototype.UpdateView = function () {
                this.listData = Game.moduleModel.oscar.OscarRewardList;
                this.m_list.numItems = this.listData.length;
                this.m_btnConfirm.visible = Game.moduleModel.oscar.IsFinishReward;
            };
            OscarRewardPanel.prototype.onWindowShow = function () {
                Game.protoOkEvent.add(ProtoEventKey.rank_GetOscarReward, this.UpdateView, this);
                Game.protoOkEvent.add(ProtoEventKey.rank_GetOscarData, this.UpdateView, this);
                Game.protoOkEvent.add(ProtoEventKey.RankListData, this.UpdateView, this);
            };
            OscarRewardPanel.prototype.onWindowHide = function () {
                Game.protoOkEvent.remove(ProtoEventKey.rank_GetOscarReward, this.UpdateView, this);
                Game.protoOkEvent.remove(ProtoEventKey.rank_GetOscarData, this.UpdateView, this);
                Game.protoOkEvent.remove(ProtoEventKey.RankListData, this.UpdateView, this);
            };
            OscarRewardPanel.prototype.RenderItem = function (index, obj) {
                var data = this.listData[index];
                obj.Render(data);
            };
            OscarRewardPanel.prototype.OnConfirm = function () {
                this.OnCloseClick();
            };
            OscarRewardPanel.prototype.OnCloseClick = function () {
                Game.event.dispatch(GameEventKey.PopupPanel);
                this.moduleWindow.closeSelf();
                var mainWindow = this.moduleWindow.mainWindow;
                mainWindow.conent.UpdateView();
            };
            return OscarRewardPanel;
        }(Oscar.OscarRewardPanelStruct));
        Oscar.OscarRewardPanel = OscarRewardPanel;
    })(Oscar = fgui.Oscar || (fgui.Oscar = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=OscarRewardPanel.js.map