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
        var CooperationMain = /** @class */ (function (_super) {
            __extends(CooperationMain, _super);
            function CooperationMain() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            CooperationMain.prototype.onWindowShow = function () {
                // let list = Game.config.story.getConfigList();
                // for (let i = 0; i < list.length; i++)
                // {
                // 	if (list[i].starNumber > 1)
                // 	{
                // 		Game.protosender.test.AddStory(list[i].id);
                // 	}
                // }
                this.checkStatus();
                Game.moduleModel.cooperation.sAccountCooperateDataUpdate.add(this.checkStatus, this);
            };
            CooperationMain.prototype.onWindowHide = function () {
                Game.moduleModel.cooperation.sAccountCooperateDataUpdate.remove(this.checkStatus, this);
            };
            // 检查当前合作状态，确定打开不同的界面		
            CooperationMain.prototype.checkStatus = function () {
                if (Game.moduleModel.cooperation.havePartner) {
                    if (Game.moduleModel.cooperation.cooperData.isRead) {
                        if (!this.moduleWindow.cooperationAchievedSubwindow.isShowed && Game.moduleModel.cooperation.partnerInfData && Game.moduleModel.cooperation.partnerInfData !== null) {
                            if (this.moduleWindow.cooperationRealtionshipSubwindow.isShowed) {
                                this.moduleWindow.cooperationRealtionshipSubwindow.closeSelf();
                            }
                            if (this.moduleWindow.serachOther.isShowed) {
                                this.moduleWindow.serachOther.closeSelf();
                            }
                            if (this.moduleWindow.cooperationApplySubwindow.isShowed) {
                                this.moduleWindow.cooperationApplySubwindow.closeSelf();
                            }
                            this.moduleWindow.openSubwindowByIndex(Games.CooperationSubwindowType.CooperationAchieved, true);
                        }
                    }
                    else {
                        // 合作任务界面
                        if (!this.moduleWindow.cooperationRealtionshipSubwindow.isShowed && Game.moduleModel.cooperation.cooperTaskData && Game.moduleModel.cooperation.cooperTaskData !== null) {
                            if (this.moduleWindow.serachOther.isShowed) {
                                this.moduleWindow.serachOther.closeSelf();
                            }
                            if (this.moduleWindow.cooperationApplySubwindow.isShowed) {
                                this.moduleWindow.cooperationApplySubwindow.closeSelf();
                            }
                            if (this.moduleWindow.cooperationAchievedSubwindow.isShowed) {
                                this.moduleWindow.cooperationAchievedSubwindow.closeSelf();
                            }
                            this.moduleWindow.openSubwindowByIndex(Games.CooperationSubwindowType.cooperationRealtionship, true);
                        }
                    }
                }
                else {
                    if (Game.moduleModel.cooperation.cooperData && Game.moduleModel.cooperation.cooperData !== null && Game.moduleModel.cooperation.cooperData.appList.length > 0) {
                        if (this.moduleWindow.serachOther.isShowed) {
                            this.moduleWindow.serachOther.closeSelf();
                        }
                        if (this.moduleWindow.cooperationRealtionshipSubwindow.isShowed) {
                            this.moduleWindow.cooperationRealtionshipSubwindow.closeSelf();
                        }
                        // 存在合作请求
                        if (!this.moduleWindow.cooperationApplySubwindow.isShowed) {
                            if (Game.moduleModel.cooperation.partnerInfData && Game.moduleModel.cooperation.partnerInfData !== null) {
                                this.moduleWindow.openSubwindowByIndex(Games.CooperationSubwindowType.cooperationApply, true);
                            }
                        }
                        else {
                            this.moduleWindow.cooperationApplySubwindow.conent.setData();
                        }
                    }
                    else {
                        if (this.moduleWindow.cooperationApplySubwindow.isShowed) {
                            this.moduleWindow.cooperationApplySubwindow.closeSelf();
                        }
                        if (this.moduleWindow.cooperationRealtionshipSubwindow.isShowed) {
                            this.moduleWindow.cooperationRealtionshipSubwindow.closeSelf();
                        }
                        // 不存在合作请求
                        if (!this.moduleWindow.serachOther.isShowed) {
                            this.moduleWindow.openSubwindowByIndex(Games.CooperationSubwindowType.serachOther, true);
                        }
                    }
                }
            };
            return CooperationMain;
        }(Cooperation.CooperationMainStruct));
        Cooperation.CooperationMain = CooperationMain;
    })(Cooperation = fgui.Cooperation || (fgui.Cooperation = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=CooperationMain.js.map