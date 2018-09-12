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
    var Market;
    (function (Market) {
        var MarketRoadShowPanel = /** @class */ (function (_super) {
            __extends(MarketRoadShowPanel, _super);
            function MarketRoadShowPanel() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.debug = false;
                return _this;
            }
            MarketRoadShowPanel.prototype.onWindowInited = function () {
                this.m_btnSkip.onClick(this, this.OnBtnSkipClick);
                this.m_btnFinish.onClick(this, this.OnBtnFinishClick);
            };
            MarketRoadShowPanel.prototype.onWindowDestory = function () {
                this.m_btnSkip.onClick(null, null);
                this.m_btnFinish.onClick(null, null);
            };
            MarketRoadShowPanel.prototype.onWindowShow = function () {
                Game.sound.playMusic(SoundKey.MM_BGM_RoadShow, 0);
                this.UpdateView();
            };
            MarketRoadShowPanel.prototype.onWindowHide = function () {
                Game.sound.stopMusic();
                Game.sound.playMusic(SoundKey.MM_BGM_Cinema);
            };
            MarketRoadShowPanel.prototype.UpdateView = function () {
                this.m_listActor.itemRenderer = new Handler(this, this.RenderActorItem, null, false);
                this.m_state.setSelectedIndex(0);
                this.cityData = Game.moduleModel.market.GetLastCity();
                this.actorList = Game.moduleModel.market.GetActorList();
                this.m_listActor.numItems = this.actorList.length;
                this.show_need = Game.config.city.getConfig(this.cityData.id).show_need;
                this.m_progress.max = this.show_need;
                this.m_progress.value = 0;
                this.StartAnim();
            };
            MarketRoadShowPanel.prototype.StartAnim = function () {
                this.roadShowAnimPanel = fgui.PfSkin.LyShow.createInstance();
                this.roadShowAnimPanel.showFor(this.m_roadshowContainer, this);
            };
            MarketRoadShowPanel.prototype.OnAnimFinish = function () {
                this.OnFinish();
            };
            MarketRoadShowPanel.prototype.currentActorData = function () {
                return this.actorList[this.m_listActor.numItems - 1];
            };
            //当前艺人热度值
            MarketRoadShowPanel.prototype.curActorPopularValue = function (actor) {
                return actor.art + actor.plot + actor.perform + actor.spectacle + actor.entertainment;
            };
            MarketRoadShowPanel.prototype.UpdateProgress = function (actor) {
                this.m_listActor.numItems = this.m_listActor.numItems - 1;
                var total = actor.art + actor.plot + actor.perform + actor.spectacle + actor.entertainment;
                total = this.m_progress.value + total;
                if (total >= this.show_need) {
                    total = this.show_need;
                }
                // this.m_progress.m_aniProgress.play();
                this.m_progress.value = total;
                if (this.m_progress.value == this.show_need) {
                    return true;
                }
                var num = this.m_listActor.numItems;
                if (num == 0) {
                    return true;
                }
                return false;
            };
            MarketRoadShowPanel.prototype.RenderActorItem = function (index, obj) {
                var data = this.actorList[index];
                obj.Render(data);
            };
            MarketRoadShowPanel.prototype.OnFinish = function () {
                if (Game.moduleModel.market.Info.roadShowFlag) {
                    this.OnSuccess();
                }
                else {
                    this.OnFail();
                }
            };
            MarketRoadShowPanel.prototype.OnSuccess = function () {
                this.m_state.setSelectedIndex(1);
            };
            MarketRoadShowPanel.prototype.OnFail = function () {
                this.m_state.setSelectedIndex(2);
            };
            MarketRoadShowPanel.prototype.OnBtnSkipClick = function () {
                if (this.roadShowAnimPanel) {
                    this.roadShowAnimPanel.dispose();
                    this.roadShowAnimPanel = null;
                }
                this.OnAnimFinish();
            };
            MarketRoadShowPanel.prototype.OnBtnFinishClick = function () {
                Game.guide.checkPlayStoryByType(Games.StoryTriggerType.FinishRoadShow);
                // this.moduleWindow.closeSelf();
                this.moduleWindow.backPreWindow();
                // let mainWindow: Games.MarketWindow = <Games.MarketWindow>this.moduleWindow.mainWindow;
                // mainWindow.conent.UpdateView();
            };
            return MarketRoadShowPanel;
        }(Market.MarketRoadShowPanelStruct));
        Market.MarketRoadShowPanel = MarketRoadShowPanel;
    })(Market = fgui.Market || (fgui.Market = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=MarketRoadShowPanel.js.map