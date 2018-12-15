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
    var Cooperation;
    (function (Cooperation) {
        var CooperationRealtionship = /** @class */ (function (_super) {
            __extends(CooperationRealtionship, _super);
            function CooperationRealtionship() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                // 当前最新任务序号
                _this.curMaxTaskNum = 0;
                // 当前选择的任务序号
                _this.curSelectTaskNum = 0;
                return _this;
            }
            CooperationRealtionship.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_title.text = TEXT.CooperationRealtionshipTitle;
                this.m_des.text = TEXT.CooperationRealtionshipTip;
                this.m_relieveBtn.m_title.text = TEXT.CooperationRealtionshiprelieveBtn;
                this.m_progressbar.m_progressbar.m_title.visible = false;
                this.m_progressbar.m_list.itemRenderer = Laya.Handler.create(this, this.progressItem, null, false);
                this.m_tasklist.itemRenderer = Laya.Handler.create(this, this.taskItem, null, false);
                // 选中列表某一项
                this.m_taskTitleList.on(fairygui.Events.CLICK_ITEM, this, this.onClickItem);
                // 关闭面板
                this.m_bg.m_closeBtn.onClick(this, this.onClicClose);
                // 解除合作
                this.m_relieveBtn.onClick(this, this.onClicRelieveBtn);
                this.m_showOtherInf.onClick(this, this.onClicShowOtherBtn);
                this.onClick(this, this.clickPanel);
            };
            CooperationRealtionship.prototype.onClicShowOtherBtn = function () {
                Game.system.playerInfo(Game.moduleModel.cooperation.partnerInfData);
            };
            // 点击面板
            CooperationRealtionship.prototype.clickPanel = function () {
                Game.moduleModel.cooperation.sRewardHideCall.dispatch();
            };
            // 解除合作
            CooperationRealtionship.prototype.onClicRelieveBtn = function () {
                this.moduleWindow.mainWindow.openSubwindowByIndex(Games.CooperationSubwindowType.CooperationEnd, true);
            };
            // 关闭窗口
            CooperationRealtionship.prototype.onClicClose = function () {
                this.moduleWindow.menuBack();
            };
            CooperationRealtionship.prototype.onWindowShow = function () {
                Game.moduleModel.cooperation.sCooperateTaskDataUpdate.add(this.updateTask, this);
                Game.moduleModel.cooperation.sUpdateBoxProgress.add(this.updateBoxProgress, this);
                this.setData();
            };
            CooperationRealtionship.prototype.onWindowHide = function () {
                Game.moduleModel.cooperation.sCooperateTaskDataUpdate.remove(this.updateTask, this);
                Game.moduleModel.cooperation.sUpdateBoxProgress.remove(this.updateBoxProgress, this);
                Game.moduleModel.cooperation.sRewardHideCall.removeAll();
            };
            CooperationRealtionship.prototype.setData = function () {
                var otherInf = Game.moduleModel.cooperation.partnerInfData;
                this.m_name1.text = User.info.name;
                this.m_level1.text = format(TEXT.Lv, User.info.level);
                this.m_me.icon = User.headIconUrl;
                if (otherInf && otherInf !== null) {
                    this.m_name2.text = otherInf.name;
                    this.m_level2.text = format(TEXT.Lv, otherInf.level);
                    this.m_other.icon = Game.config.headPortrait.GetPlayerIconUrl(otherInf.portrait, otherInf.sex);
                }
                else {
                    this.m_name2.text = "";
                    this.m_level2.text = "";
                }
                this.completeConfig = Game.config.complete.getCompleteList(EProgressBoxId.cooperateTask);
                this.cooperTaskData = Game.moduleModel.cooperation.cooperTaskData;
                this.curMaxTaskNum = this.cooperTaskData.currentStar - 1;
                this.curSelectTaskNum = this.curMaxTaskNum;
                this.m_progressbar.m_progressbar.max = 6;
                this.updateTask();
            };
            // 更新任务信息		
            CooperationRealtionship.prototype.updateTask = function () {
                this.cooperTaskData = Game.moduleModel.cooperation.cooperTaskData;
                if (this.cooperTaskData !== null) {
                    this.m_progressbar.m_progressbar.value = this.cooperTaskData.progree;
                    if (this.curMaxTaskNum < this.cooperTaskData.currentStar - 1) {
                        this.curSelectTaskNum = this.cooperTaskData.currentStar - 1;
                    }
                    this.curMaxTaskNum = this.cooperTaskData.currentStar - 1;
                    this.m_progressbar.m_level.text = this.curMaxTaskNum.toString();
                    this.tasks = this.cooperTaskData.tasks;
                    Game.moduleModel.cooperation.taskIsHaveGetOne = false;
                    if (this.curSelectTaskNum >= this.tasks.length) {
                        this.curSelectTaskNum = this.tasks.length - 1;
                    }
                    this.m_tasklist.numItems = this.tasks[this.curSelectTaskNum].starTasks.length;
                    this.m_taskTitleList.addSelection(this.curSelectTaskNum);
                    this.m_progressbar.m_list.numItems = this.completeConfig.length;
                }
            };
            CooperationRealtionship.prototype.updateBoxProgress = function (arg) {
                var index = arg[0];
                var status = arg[1];
                if (index >= this.curMaxTaskNum && status !== 1 && Game.moduleModel.cooperation.cooperTaskData.progree > index) {
                    this.m_progressbar.m_level.text = (this.curMaxTaskNum + 1).toString();
                }
            };
            // 奖励宝箱		
            CooperationRealtionship.prototype.progressItem = function (index, obj) {
                var item = obj;
                item.setData(this.completeConfig[index], index);
            };
            // 任务详情item
            CooperationRealtionship.prototype.taskItem = function (index, obj) {
                var item = obj;
                item.setData(this.tasks[this.curSelectTaskNum].starTasks[index]);
            };
            CooperationRealtionship.prototype.onClickItem = function (obj) {
                var index = this.m_taskTitleList.getChildIndex(obj);
                if (index > this.curMaxTaskNum) {
                    this.m_taskTitleList.addSelection(this.curSelectTaskNum);
                }
                else {
                    this.curSelectTaskNum = index;
                    this.updateTask();
                }
            };
            return CooperationRealtionship;
        }(Cooperation.CooperationRealtionshipStruct));
        Cooperation.CooperationRealtionship = CooperationRealtionship;
    })(Cooperation = fgui.Cooperation || (fgui.Cooperation = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=CooperationRealtionship.js.map