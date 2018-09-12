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
    var Guide;
    (function (Guide) {
        var GuideTaskUI = /** @class */ (function (_super) {
            __extends(GuideTaskUI, _super);
            function GuideTaskUI() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.isGettingReward = false;
                return _this;
            }
            GuideTaskUI.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_rewardlist.itemRenderer = Handler.create(this, this.onUpdateItemRender, null, false);
                this.m_goBtn.text = "Go";
                this.m_getBtn.text = "Get";
            };
            GuideTaskUI.prototype.onUpdateItemRender = function (index, item) {
                var item1 = item;
                item1.updateViewByDTNum(this.mainTask.config.reward[index]);
            };
            /**
             * 更新界面
             */
            GuideTaskUI.prototype.updateView = function () {
                this.mainTask = Game.moduleModel.task.getCurrentMainTask();
                this.m_getBtn.visible = false;
                this.m_goBtn.visible = false;
                if (this.mainTask) {
                    this.m_taskDesc.updateView(this.mainTask);
                    //标题
                    this.m_title.text = this.mainTask.mainConfig.content;
                    //奖励
                    this.m_rewardlist.numItems = this.mainTask.config.reward.length;
                    //
                    if (this.mainTask.isFinished) {
                        this.m_getBtn.visible = true;
                        //描述
                        this.m_desc.text = this.mainTask.mainConfig.cinfo;
                    }
                    else {
                        this.m_goBtn.visible = true;
                        //描述
                        this.m_desc.text = this.mainTask.mainConfig.info;
                    }
                }
            };
            GuideTaskUI.prototype.onWindowHide = function () {
                this.m_closeBtn.offClick(this, this.onClickCloseBtn);
                this.m_getBtn.offClick(this, this.onClickGetBtn);
                this.m_goBtn.offClick(this, this.onClickGoBtn);
                this.m_recordsBtn.offClick(this, this.onClickRecordBtn);
                Game.protoOkEvent.remove(ProtoEventKey.task_reward, this.onTaskRewardHandler, this);
                clearTimeout(this.closeTimeHandler);
            };
            GuideTaskUI.prototype.onRemoved = function () {
                console.log("ffsfdsfds");
            };
            GuideTaskUI.prototype.onWindowShow = function () {
                this.m_closeBtn.onClick(this, this.onClickCloseBtn);
                this.m_getBtn.onClick(this, this.onClickGetBtn);
                this.m_goBtn.onClick(this, this.onClickGoBtn);
                this.m_recordsBtn.onClick(this, this.onClickRecordBtn);
                this.m_getBtn.on(Laya.Event.REMOVED, this, this.onRemoved);
                this.isGettingReward = false;
                Game.protoOkEvent.add(ProtoEventKey.task_reward, this.onTaskRewardHandler, this);
                this.updateView();
                this.m_recordPanel.hide();
            };
            //关闭
            GuideTaskUI.prototype.onClickCloseBtn = function () {
                this.moduleWindow.menuClose();
            };
            GuideTaskUI.prototype.onTaskRewardHandler = function (msg) {
                // this.closeTimeHandler = setTimeout(() =>
                // {
                this.onClickCloseBtn();
                // }, 1000);
            };
            //领奖
            GuideTaskUI.prototype.onClickGetBtn = function () {
                //没有领取
                if (this.isGettingReward == false) {
                    this.isGettingReward = true;
                    Game.guide.clearGuide();
                    Game.protosender.task.reward(this.mainTask.uuid);
                }
                // let noLicence = true;
                // for (var index = 0; index < this.mainTask.config.reward.length; index++)
                // {
                // 	var element = this.mainTask.config.reward[index];
                // 	if (element.itemId == EItemId.licence)
                // 	{
                // 		noLicence = false;
                // 	}
                // }
                // if (noLicence)
                // {
                // }
                // else
                // {
                // 	if (Game.moduleModel.warData.isLicenceMax)
                // 	{
                // 		Game.system.toastText(TEXT.LincenceMax);
                // 	}
                // 	else
                // 	{
                // 		//没有领取
                // 		if (this.isGettingReward == false)
                // 		{
                // 			this.isGettingReward = true;
                // 			Game.guide.clearGuide();
                // 			Game.protosender.task.reward(this.mainTask.uuid);
                // 		}
                // 	}
                // }
            };
            //go
            GuideTaskUI.prototype.onClickGoBtn = function () {
                if (this.mainTask.mainConfig.guide_id > 0) {
                    this.onClickCloseBtn();
                    Game.guide.readyPlayGuide(this.mainTask.mainConfig.guide_id);
                }
            };
            //点击
            GuideTaskUI.prototype.onClickRecordBtn = function () {
                this.m_recordPanel.show();
            };
            return GuideTaskUI;
        }(Guide.GuideTaskUIStruct));
        Guide.GuideTaskUI = GuideTaskUI;
    })(Guide = fgui.Guide || (fgui.Guide = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=GuideTaskUI.js.map