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
    var WarMovie;
    (function (WarMovie) {
        var WarAudienceReputation = /** @class */ (function (_super) {
            __extends(WarAudienceReputation, _super);
            function WarAudienceReputation() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.curIndexOf = 0;
                return _this;
            }
            WarAudienceReputation.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_title.text = TEXT.AudienceReputationTitle;
                this.m_closeBtn.visible = false;
                this.m_typeList.itemRenderer = Laya.Handler.create(this, this.initItem, null, false);
                // 关闭按钮
                this.m_okBtn.onClick(this, this.onClickOkBtn);
            };
            WarAudienceReputation.prototype.onClickOkBtn = function () {
                var _this = this;
                this.moduleWindow.closeSelf();
                // 保存当前状态到服务器
                Game.moduleModel.warData.sendUpdateMovieState(function () {
                    _this.moduleMain.conent.subWindowToMain();
                });
            };
            WarAudienceReputation.prototype.onWindowShow = function () {
                var _this = this;
                Game.moduleModel.warData.sAudienceUpdate.add(this.updateList, this);
                this.clearData();
                this.setDataBefor();
                this.m_t0.play(laya.utils.Handler.create(this, function () { _this.setData(); }), 1);
            };
            WarAudienceReputation.prototype.clearData = function () {
                this.m_okBtn.visible = false;
                this.m_audienceProgress.value = 0;
                this.m_score.text = "";
                this.m_filmName.text = "";
                this.m_typeList.numItems = 0;
            };
            WarAudienceReputation.prototype.onWindowHide = function () {
                Game.moduleModel.warData.sAudienceUpdate.remove(this.updateList, this);
            };
            WarAudienceReputation.prototype.setDataBefor = function () {
                this.moduleMain = this.moduleWindow.mainWindow;
                this.m_audienceProgress.value = 0;
                this.m_filmName.text = Game.moduleModel.warData.moveData.name;
                this.m_filmInf.setData(Game.moduleModel.warData.moveStory);
                this.m_filmDes.setData(Game.moduleModel.warData.moveStory.filmDes);
                this.m_score.text = Game.moduleModel.warData.moveData.publicPraise.toFixed(0);
                this.curIndexOf = 0;
            };
            WarAudienceReputation.prototype.setData = function () {
                laya.utils.Tween.to(this.m_audienceProgress, { value: Game.moduleModel.warData.moveData.publicPraise }, 1000, Laya.Ease.linearIn, null);
                this.updateList();
            };
            WarAudienceReputation.prototype.updateList = function () {
                if (this.curIndexOf < 10) {
                    this.curIndexOf++;
                    this.m_typeList.numItems = this.curIndexOf;
                }
                else {
                    this.m_okBtn.visible = true;
                    this.curIndexOf = 11;
                }
            };
            WarAudienceReputation.prototype.initItem = function (index, obj) {
                if (index === this.curIndexOf - 1) {
                    var item = obj;
                    var min = Game.moduleModel.warData.moveData.publicPraise - 20;
                    var max = Game.moduleModel.warData.moveData.publicPraise + 20;
                    if (min < 1) {
                        min = 1;
                    }
                    if (max > 100) {
                        max = 100;
                    }
                    item.setData(Random.rangeBoth(min, max), index);
                }
            };
            return WarAudienceReputation;
        }(WarMovie.WarAudienceReputationStruct));
        WarMovie.WarAudienceReputation = WarAudienceReputation;
    })(WarMovie = fgui.WarMovie || (fgui.WarMovie = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=WarAudienceReputation.js.map