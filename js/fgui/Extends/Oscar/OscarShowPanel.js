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
        var OscarShowPanel = /** @class */ (function (_super) {
            __extends(OscarShowPanel, _super);
            function OscarShowPanel() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.currentAwards = -1;
                _this.midCandidateIndex = 2;
                // 展示候选人每个用时
                _this.delayCandidateShow = 500;
                _this.currentCandidate = 2;
                _this.lastNextTime = 0;
                return _this;
            }
            OscarShowPanel.prototype.onWindowInited = function () {
                this.m_btnNext.onClick(this, this.OnNextClick);
                this.m_btnSend.onClick(this, this.OnSendClick);
                this.m_btnClose.onClick(this, this.OnCloseClick);
                this.m_listCandidate.itemRenderer = new Handler(this, this.RenderCandidateItem, null, false);
                this.m_animContainer.m_oscarCard.asCom.addChild(this.m_listCandidate);
                this.m_listCandidate.setPivot(0, 0);
                this.m_animContainer.m_oscarCard.asCom.addChild(this.m_winnerItem);
                this.m_winnerItem.setPivot(0.5, 0.5);
                this.m_showWinner.visible = false;
            };
            OscarShowPanel.prototype.onWindowOpen = function (arg) {
                this.currentAwards = -1;
                this.UpdateView();
                this.m_isFinish.setSelectedIndex(0);
                this.m_btnNext.visible = false;
                this.m_input.text = "";
                Game.protosender.Danmu.get(Game.moduleModel.rank.LastStreetId, 0);
                if (this.oscarAnim == null) {
                    //ANi Start
                    // this.oscarAnim = fgui.PfSkin.OscarAnim.createInstance();
                    this.oscarAnim = Game.stageManager.oscar.mainScene.mainView;
                    Game.stageManager.oscar.isActive = true;
                    //todo anim
                    this.oscarAnim.showFor(this.m_animContainer.m_oscarAvatar.asCom, this);
                }
                else {
                    this.m_btnNext.visible = true;
                    this.oscarAnim.reStartShow();
                }
            };
            OscarShowPanel.prototype.UpdateView = function () {
                this.oscarAwardsList = Game.moduleModel.oscar.OscarAwardsList;
                this.m_txtTime.text = Games.TEXT.OscarTitle.format(Game.moduleModel.street.currentStreetData.Name, Game.moduleModel.oscar.LastOscarDay);
                this.m_frontView.UpdateView();
            };
            OscarShowPanel.prototype.StartOscar = function () {
                var _this = this;
                //
                Game.story.triggerPlayStoryByType(Games.StoryTriggerType.OpenOscar, 1, Handler.create(null, function () {
                    _this.currentAwards = -1;
                    _this.NextPrize();
                }), true);
            };
            OscarShowPanel.prototype.ShowNextPrizeUI = function () {
                this.m_btnNext.visible = true;
            };
            OscarShowPanel.prototype.NextPrize = function () {
                this.HideCandidate();
                this.currentAwards++;
                this.UpdateView();
                if (this.oscarAwardsList.length <= (this.currentAwards)) {
                    this.OnFinish();
                    return;
                }
                var awardsData = this.oscarAwardsList[this.currentAwards];
                if (awardsData) {
                    this.StartPrize(awardsData);
                }
                else {
                    console.log("奥斯卡奖项数据为空，ID：" + this.currentAwards);
                    this.OnFinish();
                }
            };
            OscarShowPanel.prototype.StartPrize = function (awards) {
                var danmuList = Game.moduleModel.oscar.GetDanmu(this.currentAwards + 1);
                this.m_danmu.AddDanmuList(danmuList);
                this.AniStartPrize(awards);
                this.m_frontView.Next(this.currentAwards);
                if (awards.listCandidate == null || awards.listCandidate.length == 0) {
                    return;
                }
                this.m_listCandidate.numItems = awards.listCandidate.length;
                this.currentCandidate = Math.ceil((awards.listCandidate.length - 1) / 2);
                this.midCandidateIndex = Math.ceil((awards.listCandidate.length - 1) / 2);
                Laya.timer.loop(this.delayCandidateShow, this, this.LoopShowCandidate);
            };
            OscarShowPanel.prototype.LoopShowCandidate = function () {
                if (this.currentCandidate >= this.m_listCandidate.numChildren || this.currentCandidate < 0) {
                    Laya.timer.clear(this, this.LoopShowCandidate);
                    return;
                }
                var obj = this.m_listCandidate.getChildAt(this.currentCandidate);
                if (obj == null) {
                    Laya.timer.clear(this, this.LoopShowCandidate);
                    return;
                }
                obj.setScale(0, 0);
                // let ss = 1 - Math.abs(this.currentCandidate - this.midCandidateIndex) * 0.05;
                var ss = 1;
                Laya.Tween.to(obj, { scaleX: ss, scaleY: ss }, this.delayCandidateShow);
                var d = this.midCandidateIndex - this.currentCandidate;
                if (d <= 0) {
                    this.currentCandidate = this.midCandidateIndex + d - 1;
                }
                else {
                    this.currentCandidate = this.midCandidateIndex + d;
                }
            };
            OscarShowPanel.prototype.OnPrizeSelect = function () {
                Laya.timer.loop(100, this, this.LoopSelectCandidateItem);
            };
            OscarShowPanel.prototype.LoopSelectCandidateItem = function () {
                Game.sound.playSound(SoundKey.MM10_AwardSwitching);
                var select = this.m_listCandidate.selectedIndex + 1;
                if (select >= this.m_listCandidate.numItems) {
                    this.m_listCandidate.selectNone();
                    Laya.timer.clear(this, this.LoopSelectCandidateItem);
                    this.ShowWinner();
                    return;
                }
                this.m_listCandidate.selectedIndex = select;
            };
            OscarShowPanel.prototype.OnPrize = function () {
                var oscarData = this.oscarAwardsList[this.currentAwards];
                var prizeIndex = oscarData.winnerIndex;
                this.RenderCandidateItem(oscarData.winnerIndex, this.m_winnerItem);
                this.m_winnerItem.visible = true;
                this.m_winnerItem.y = 384;
                this.m_winnerItem.setScale(1.8, 1.8);
                this.m_showWinner.Hide();
                Laya.Tween.to(this.m_winnerItem, { y: 61, scaleX: 1.2, scaleY: 1.2 }, this.delayCandidateShow);
                var cnt = this.m_listCandidate.numChildren;
                for (var i = 0; i < cnt; i++) {
                    var obj = this.m_listCandidate.getChildAt(i);
                    Laya.Tween.to(obj, { scaleX: 0, scaleY: 0 }, this.delayCandidateShow);
                }
            };
            OscarShowPanel.prototype.ShowWinner = function () {
                var _this = this;
                if (this.oscarAwardsList.length <= this.currentAwards) {
                    this.OnFinish();
                    return;
                }
                var oscarData = this.oscarAwardsList[this.currentAwards];
                var prizeIndex = oscarData.winnerIndex;
                var winner = oscarData.winner;
                if (winner == null) {
                    return;
                }
                this.AniWinner(winner);
                this.m_frontView.Finish();
                this.m_showWinner.Open(oscarData);
                setTimeout(function () {
                    _this.OnPrize();
                }, 1000);
            };
            OscarShowPanel.prototype.HideCandidate = function () {
                Laya.timer.clear(this, this.LoopShowCandidate);
                var cnt = this.m_listCandidate.numChildren;
                for (var i = 0; i < cnt; i++) {
                    var obj = this.m_listCandidate.getChildAt(i);
                    obj.setScale(0, 0);
                    Laya.Tween.to(obj, { scaleX: 0, scaleY: 0 }, this.delayCandidateShow);
                }
                this.m_winnerItem.visible = false;
            };
            OscarShowPanel.prototype.FinishPrize = function () {
                this.m_frontView.Finish();
                this.NextPrize();
            };
            OscarShowPanel.prototype.OnFinish = function () {
                this.m_btnNext.visible = false;
                this.AniFinish();
                this.HideCandidate();
                this.m_danmu.Hide();
            };
            OscarShowPanel.prototype.RenderCandidateItem = function (index, obj) {
                obj.setPivot(0.5, 0.5);
                obj.setScale(0, 0);
                var awardsData = this.oscarAwardsList[this.currentAwards];
                var data = awardsData.listCandidate[index];
                obj.Render(data, awardsData.type);
            };
            OscarShowPanel.prototype.OnNextClick = function () {
                if (Game.time.serverSeconds - this.lastNextTime >= 2) {
                    this.lastNextTime = Game.time.serverSeconds;
                    this.FinishPrize();
                }
            };
            OscarShowPanel.prototype.OnSendClick = function () {
                var msg = this.m_input.text;
                if (validateDanmu(msg, 4, 100)) {
                    msg = msg + (this.currentAwards + 1);
                    Game.protosender.Danmu.set(Game.moduleModel.rank.LastStreetId, msg);
                }
            };
            OscarShowPanel.prototype.OnCloseClick = function () {
                if (this.oscarAnim) {
                    Game.stageManager.oscar.isActive = false;
                    this.oscarAnim.dispose();
                    this.oscarAnim = null;
                }
                // this.moduleWindow.closeSelf();
                this.moduleWindow.mainWindow.menuClose();
            };
            OscarShowPanel.prototype.onWindowShow = function () {
                Game.sound.playMusic(SoundKey.MM_BGM_Award);
                this.m_danmu.Show();
                this.m_frontView.Show();
                Game.protoOkEvent.add(ProtoEventKey.Danmu_get, this.OnDanmuGet, this);
                Game.protoOkEvent.add(ProtoEventKey.Danmu_set, this.OnDanmuSend, this);
                Game.protoOkEvent.add(ProtoEventKey.rank_GetOscarReward, this.OnGetReward, this);
            };
            OscarShowPanel.prototype.onWindowHide = function () {
                Game.sound.playMusic(SoundKey.MM_BGM_Cinema);
                this.m_danmu.Hide();
                this.m_frontView.Hide();
                if (this.oscarAnim) {
                    this.oscarAnim.dispose();
                    this.oscarAnim = null;
                }
                Game.protoOkEvent.remove(ProtoEventKey.Danmu_get, this.OnDanmuGet, this);
                Game.protoOkEvent.remove(ProtoEventKey.Danmu_set, this.OnDanmuSend, this);
                Game.protoOkEvent.remove(ProtoEventKey.rank_GetOscarReward, this.OnGetReward, this);
            };
            OscarShowPanel.prototype.OnDanmuGet = function () {
                var danmuList = Game.moduleModel.oscar.GetDanmu(this.currentAwards + 1);
                this.m_danmu.AddDanmuList(danmuList);
            };
            OscarShowPanel.prototype.OnDanmuSend = function () {
                var _this = this;
                var msg = this.m_input.text;
                var danmu = Games.DanmuData.Create(msg, this.currentAwards + 1);
                this.m_danmu.AddDanmu(danmu);
                this.m_input.text = "";
                this.m_btnSend.enabled = false;
                setTimeout(function () {
                    _this.m_btnSend.enabled = true;
                }, 5 * 1000);
            };
            OscarShowPanel.prototype.OnGetReward = function () {
                this.UpdateView();
            };
            // z-s
            OscarShowPanel.prototype.AniStartPrize = function (arg) {
                this.oscarAnim.startTurnShow(arg);
            };
            // z-s		
            OscarShowPanel.prototype.AniWinner = function (arg) {
                this.oscarAnim.setWinner(arg);
            };
            //z-s
            OscarShowPanel.prototype.AniFinish = function () {
                this.oscarAnim.endAllPrize();
            };
            // s-z
            OscarShowPanel.prototype.AniStart = function () {
                this.StartOscar();
            };
            // s-z
            OscarShowPanel.prototype.AniSelectCandidtate = function () {
                this.OnPrizeSelect();
            };
            // s-z		
            OscarShowPanel.prototype.AniFinishPrize = function () {
                this.FinishPrize();
            };
            OscarShowPanel.prototype.showOscarReward = function () {
                this.oscarAnim.endShow();
                // this.m_btnClose.visible = true;
                this.m_isFinish.setSelectedIndex(1);
                Game.story.triggerPlayStoryByType(Games.StoryTriggerType.OpenOscar, 2);
                this.moduleWindow.mainWindow.openSubwindowByIndex(Games.OscarSubEnum.OscarReward, true);
            };
            return OscarShowPanel;
        }(Oscar.OscarShowPanelStruct));
        Oscar.OscarShowPanel = OscarShowPanel;
    })(Oscar = fgui.Oscar || (fgui.Oscar = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=OscarShowPanel.js.map