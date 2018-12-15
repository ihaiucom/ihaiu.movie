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
    var GuideComplete;
    (function (GuideComplete) {
        var CompletePanel = /** @class */ (function (_super) {
            __extends(CompletePanel, _super);
            function CompletePanel() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            CompletePanel.prototype.onWindowShow = function () {
                this.m_getBtn.onClick(this, this.onClickGetBtn);
                this.m_dialogPanel.m_closeBtn.onClick(this, this.onClickCloseBtn);
                this.visible = true;
                this.updateView();
            };
            CompletePanel.prototype.onClickCloseBtn = function () {
                // let btn = Game.moduleModel.func.getMenuCtrlByMenuId(this.moduleWindow.menuId);
                // if (btn)
                // {
                // 	let p = btn.getGlobalPos();
                // 	p.x = p.x;// + btn.button.width >> 1
                // 	p.y = p.y;//+ btn.button.height >> 1
                // 	let srcX = this.x;
                // 	let srcY = this.y;
                // 	this.onWindowHide();
                // 	Laya.Tween.to(this, { x: p.x, y: p.y, scaleX: 0.1, scaleY: 0.1 }, 500, Laya.Ease.linearIn, Handler.create(null, () =>
                // 	{
                // 		this.x = srcX;
                // 		this.y = srcY;
                // 		this.scaleX = 1;
                // 		this.scaleY = 1;
                // 		this.visible = false;
                // 	}));
                // }
                this.moduleWindow.menuClose();
            };
            CompletePanel.prototype.onWindowHide = function () {
                this.m_getBtn.offClick(this, this.onClickGetBtn);
            };
            CompletePanel.prototype.onClickGetBtn = function () {
                Game.protosender.BeginnerGuide.GuideEndReward();
                this.onClickCloseBtn();
            };
            //更新界面
            CompletePanel.prototype.updateView = function () {
                var remain = Game.moduleModel.task.remainMainTaskCount;
                var count = Game.moduleModel.task.allMainTaskCount;
                var remainTxt = "";
                //剩余进度
                if (remain > 0) {
                    this.m_getBtn.enabled = false;
                    this.m_getBtn.grayed = true;
                    remainTxt = "当前进度：[color=#e02f2b]{0}[/color]/{1}";
                }
                else {
                    this.m_getBtn.enabled = true;
                    this.m_getBtn.grayed = false;
                    remainTxt = "当前进度：[color=#57ff36]{0}[/color]/{1}";
                }
                this.m_getBtn.text = TEXT.GuideCompleteGetBtnTitle;
                this.m_progressLabel.text = format(remainTxt, count - remain, count);
                this.m_dialogPanel.m_title.text = TEXT.GuideCompleteRewardTitle;
                //艺人id
                var id = Game.moduleModel.task.guideCompleteRewardID;
                var actorConfig = Game.config.actor.getConfig(id);
                if (actorConfig) {
                    //艺人icon
                    this.m_icon.icon = ImageConfig.getUrl(GlobalConfig.getValue4(GlobalKey.maintask_complete_image)); // actorConfig.bodyIconUrl;
                }
            };
            return CompletePanel;
        }(GuideComplete.CompletePanelStruct));
        GuideComplete.CompletePanel = CompletePanel;
    })(GuideComplete = fgui.GuideComplete || (fgui.GuideComplete = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=CompletePanel.js.map