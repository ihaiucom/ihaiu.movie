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
    var Mission;
    (function (Mission) {
        var MissionMainPanel = /** @class */ (function (_super) {
            __extends(MissionMainPanel, _super);
            function MissionMainPanel() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            // 窗口初始化完毕
            MissionMainPanel.prototype.onWindowInited = function () {
                this.m_title.text = Games.TEXT.TaskArrangement;
                this.m_progressTotalBar.setProgressId(EProgressBoxId.dailyTask);
                this.m_closeBtn.onClick(this, this.oncloseBtn);
            };
            // 窗口显示
            MissionMainPanel.prototype.onWindowShow = function () {
                Game.protoOkEvent.add(ProtoEventKey.TaskData, this.refreshData, this);
                this.m_tipMsg.text = Game.config.msg.getTxt(MsgKey.task_bottom);
                this.refreshData();
            };
            // 窗口隐藏
            MissionMainPanel.prototype.onWindowHide = function () {
                Game.protoOkEvent.remove(ProtoEventKey.TaskData, this.refreshData, this);
            };
            // 刷新数据		
            MissionMainPanel.prototype.refreshData = function () {
                this.refreshList(Game.moduleModel.mission.getUnlockList());
            };
            // 刷新列表		
            MissionMainPanel.prototype.refreshList = function (items) {
                this.listData = items;
                var list = this.m_list;
                list.setVirtual();
                list.setVirtualAndLoop();
                if (!list.itemRenderer)
                    list.itemRenderer = Handler.create(this, this.renderListItem, null, false);
                list.numItems = items.length;
            };
            MissionMainPanel.prototype.renderListItem = function (index, item) {
                var data = this.listData[index];
                item.setData(data);
            };
            //关闭界面
            MissionMainPanel.prototype.oncloseBtn = function () {
                this.moduleWindow.menuClose();
            };
            return MissionMainPanel;
        }(Mission.MissionMainPanelStruct));
        Mission.MissionMainPanel = MissionMainPanel;
    })(Mission = fgui.Mission || (fgui.Mission = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=MissionMainPanel.js.map