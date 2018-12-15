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
        var WarFilmSelecting = /** @class */ (function (_super) {
            __extends(WarFilmSelecting, _super);
            function WarFilmSelecting() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                // 是否显示选择按钮
                _this.isShowSelectBtn = false;
                return _this;
            }
            WarFilmSelecting.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_men.m_sex.text = TEXT.sexMan;
                this.m_women.m_sex.text = TEXT.sexWomen;
                this.m_child.m_sex.text = TEXT.sexChild;
                this.m_licence.visible = false;
                this.m_filmItemList.itemRenderer = Laya.Handler.create(this, this.roomItem, null, false);
                // 关闭按钮
                this.m_closeBtn.onClick(this, this.onClickClose);
                this.m_refrush.onClick(this, this.onClickRefrush);
                this.m_refrush.m_title.text = TEXT.RefrushStory;
                this.setRefrushText();
            };
            WarFilmSelecting.prototype.setRefrushText = function () {
                if (Game.moduleModel.warData.curRefrushTimes[0] <= 0) {
                    this.m_refrush.visible = false;
                    return;
                }
                this.m_refrush.visible = true;
                if (Game.moduleModel.warData.curRefrushTimes[1] >= 0) {
                    this.m_refrush.grayed = false;
                }
                else {
                    this.m_refrush.grayed = true;
                }
            };
            // 刷新剧本
            WarFilmSelecting.prototype.onClickRefrush = function () {
                var times = Game.moduleModel.warData.curRefrushTimes[1];
                if (times >= 0) {
                    var inf = Game.config.storyRefreshPrice.getConfig(times + 1).price;
                    var itemName = Game.config.item.getConfig(inf.itemId).name;
                    var msg = format(TEXT.RefrushStoryTip, inf.itemNum, itemName, Game.moduleModel.warData.curRefrushTimes[2]);
                    Game.system.confirmText(msg, null, this, function () {
                        Game.moduleModel.warData.refreshMovieStory();
                    });
                }
                else {
                    Game.system.toastText(TEXT.RefrushStoryTipOver);
                }
            };
            // 关闭
            WarFilmSelecting.prototype.onClickClose = function () {
                this.moduleWindow.menuBack();
            };
            WarFilmSelecting.prototype.onWindowShow = function () {
                this.setData();
            };
            WarFilmSelecting.prototype.onWindowHide = function () {
            };
            WarFilmSelecting.prototype.setData = function () {
                this.setRefrushText();
                WarMovie.FilmSelectItem.isSelectStory = false;
                this.moduleMain = this.moduleWindow.mainWindow;
                this.storyList = Game.moduleModel.warData.getStoryList;
                if (this.storyList.length == 0) {
                    Game.system.toastText(TEXT.NoStoryList);
                    this.onClickClose();
                    return;
                }
                // 美元
                this.m_sliver.setData(EItemId.dollar, formatNumberUnit(Game.moduleModel.item.getItemNum(EItemId.dollar)));
                // 电影票
                // this.m_licence.setData(EItemId.licence, Game.moduleModel.warData.licenceNumInFilming.toString());
                var man = Game.moduleModel.warData.moveData.expected[0];
                var woman = Game.moduleModel.warData.moveData.expected[1];
                var child = Game.moduleModel.warData.moveData.expected[2];
                // 当前调查进度
                if (Game.moduleModel.building.getRoomLevel(Games.RoomType.Market) > 0) {
                    this.isHaveGuanzhong = true;
                    this.m_marketTip1.visible = true;
                    this.m_marketTip2.visible = true;
                    // 当前市场情况
                    if (man > 0) {
                        this.m_men.visible = true;
                        this.m_men.m_title.text = man + "%";
                    }
                    else {
                        this.m_men.visible = false;
                    }
                    if (woman > 0) {
                        this.m_women.visible = true;
                        this.m_women.m_title.text = woman + "%";
                    }
                    else {
                        this.m_women.visible = false;
                    }
                    if (child > 0) {
                        this.m_child.visible = true;
                        this.m_child.m_title.text = child + "%";
                    }
                    else {
                        this.m_child.visible = false;
                    }
                }
                else {
                    this.isHaveGuanzhong = false;
                    this.m_marketTip1.visible = false;
                    this.m_marketTip2.visible = false;
                    this.m_men.visible = false;
                    this.m_women.visible = false;
                    this.m_child.visible = false;
                }
                // 刷新列表
                this.roomCurCount = 1;
                this.roomMaxCount = this.storyList.length;
                this.isShowSelectBtn = false;
                Game.moduleModel.warData.filmInfoConfig = null;
                this.refrushStoryList();
            };
            // 刷新剧本列表		
            WarFilmSelecting.prototype.refrushStoryList = function () {
                if (this.roomCurCount <= this.roomMaxCount) {
                    this.isShowSelectBtn = false;
                    this.m_filmItemList.numItems = this.roomCurCount;
                    this.roomCurCount++;
                }
                else {
                    this.isShowSelectBtn = true;
                    this.m_filmItemList.numItems = this.roomCurCount - 1;
                    //抛出事件
                    Game.event.dispatch(GameEventKey.GameEventKey_FilmStoryAnimationComplete, this.storyList);
                }
            };
            // 单个电影赋值
            WarFilmSelecting.prototype.roomItem = function (index, obj) {
                var item = obj;
                if (this.isShowSelectBtn) {
                    item.m_selectBtn.visible = true;
                    item.canShowInf = true;
                }
                else {
                    if (this.roomCurCount < index + 2) {
                        item.m_selectBtn.visible = false;
                        item.canShowInf = false;
                        item.moduleWindow = this.moduleMain;
                        item.setData(this.storyList[index], index, this.isHaveGuanzhong);
                        Game.sound.playSound(SoundKey.MM16_ScriptRolling);
                        item.m_filmInf.m_icon.m_moveShow.play(laya.utils.Handler.create(this, this.moveOverCall), 1);
                    }
                    else {
                        item.m_filmInf.m_icon.m_moveShow.stop();
                    }
                }
            };
            // 电影icon动画结束回调
            WarFilmSelecting.prototype.moveOverCall = function () {
                this.refrushStoryList();
            };
            return WarFilmSelecting;
        }(WarMovie.WarFilmSelectingStruct));
        WarMovie.WarFilmSelecting = WarFilmSelecting;
    })(WarMovie = fgui.WarMovie || (fgui.WarMovie = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=WarFilmSelecting.js.map