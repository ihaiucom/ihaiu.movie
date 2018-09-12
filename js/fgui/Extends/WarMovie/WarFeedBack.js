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
        var WarFeedBack = /** @class */ (function (_super) {
            __extends(WarFeedBack, _super);
            function WarFeedBack() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.curIndexOf = 0;
                _this.dianVal = 0;
                return _this;
            }
            WarFeedBack.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_title.text = TEXT.FeedBackTitle;
                // 通告列表
                this.m_feedList.itemRenderer = Laya.Handler.create(this, this.initItem, null, false);
                // 关闭按钮
                this.m_okBtn.onClick(this, this.onClickOkBtn);
                this.m_closeBtn.onClick(this, this.onClickCloseBtn);
            };
            WarFeedBack.prototype.onClickCloseBtn = function () {
                this.moduleWindow.closeSelf();
                this.moduleMain.menuClose();
            };
            WarFeedBack.prototype.onClickOkBtn = function () {
                var _this = this;
                this.moduleWindow.closeSelf();
                // 保存当前状态到服务器
                Game.moduleModel.warData.sendUpdateMovieState(function () {
                    _this.moduleMain.conent.subWindowToMain();
                });
            };
            WarFeedBack.prototype.onWindowShow = function () {
                var _this = this;
                Game.moduleModel.warData.sFeedBackUpdate.add(this.updateList, this);
                this.clearData();
                this.setDataBefor();
                this.m_t1.play(laya.utils.Handler.create(this, function () { _this.setData(); }), 1);
            };
            WarFeedBack.prototype.onWindowHide = function () {
                if (this.mindDialog && this.mindDialog !== null) {
                    this.mindDialog.close();
                }
                Laya.timer.clear(this, this.showNum);
                Game.moduleModel.warData.sFeedBackUpdate.remove(this.updateList, this);
            };
            WarFeedBack.prototype.clearData = function () {
                this.m_dianzhanCom.visible = false;
                this.m_okBtn.visible = false;
                this.m_starProgress.value = 0;
                this.m_zongfen.visible = false;
                this.m_dianzanValue.text = "";
                this.m_filmName.text = "";
                this.m_feedList.numItems = 0;
                this.dianVal = 0;
                this.curIndexOf = 0;
            };
            WarFeedBack.prototype.setDataBefor = function () {
                this.moduleMain = this.moduleWindow.mainWindow;
                this.m_starProgress.value = Game.moduleModel.warData.moveData.mediaCommend * 0.1;
                this.m_zongfen.text = (Game.moduleModel.warData.moveData.mediaCommend * 0.1).toFixed(1);
                this.m_zongfen.visible = false;
                this.scoreList = new Array();
                var total = Game.moduleModel.warData.moveData.mediaCommend * 3;
                for (var i = 0; i < 2; i++) {
                    var val = Math.floor(Game.moduleModel.warData.moveData.mediaCommendArr[i] / total * Game.moduleModel.warData.moveData.praise);
                    this.scoreList.push(val);
                }
                var val2 = Math.floor(Game.moduleModel.warData.moveData.praise) - this.scoreList[0] - this.scoreList[1];
                this.scoreList.push(val2);
                this.m_filmName.text = Game.moduleModel.warData.moveData.name;
                this.m_filmInf.setData(Game.moduleModel.warData.moveStory);
                this.m_filmDes.setData(Game.moduleModel.warData.moveStory.filmDes);
            };
            WarFeedBack.prototype.setData = function () {
                this.updateList();
            };
            WarFeedBack.prototype.updateList = function () {
                if (this.curIndexOf < 3) {
                    this.curIndexOf++;
                    this.m_feedList.numItems = this.curIndexOf;
                }
                else {
                    this.m_zongfen.visible = true;
                    this.m_t0.play();
                    this.m_dianzhanCom.visible = true;
                    this.m_dianzhanAni.play(null, 1);
                    Laya.timer.loop(10, this, this.showNum);
                }
            };
            // 数字变化		
            WarFeedBack.prototype.showNum = function () {
                if (this.dianVal < Game.moduleModel.warData.moveData.praise) {
                    this.dianVal += Game.moduleModel.warData.moveData.praise / 100;
                    if (this.dianVal >= Game.moduleModel.warData.moveData.praise) {
                        this.dianVal = Game.moduleModel.warData.moveData.praise;
                        this.m_okBtn.visible = true;
                        var val = Game.moduleModel.warData.moveData.mediaCommend * 0.1;
                        // 媒体评分 提示
                        if (!this.mindDialog || this.mindDialog === null) {
                            this.mindDialog = fgui.WarMovie.ShwoMinDialog.createInstance();
                            this.addChild(this.mindDialog);
                            this.mindDialog.setXY(0, 0);
                        }
                        this.mindDialog.setData(format(Game.config.movieMidiaEvaluationMsg.getMsgFoNotice(val).msg, val.toFixed(1)));
                    }
                    this.m_dianzanValue.text = this.dianVal.toFixed(0);
                }
            };
            // 列表单个item赋值
            WarFeedBack.prototype.initItem = function (index, obj) {
                if (index === this.curIndexOf - 1) {
                    var item = obj;
                    item.setData(Game.moduleModel.warData.moveData.mediaCommendArr[index], this.scoreList[index], index);
                }
            };
            return WarFeedBack;
        }(WarMovie.WarFeedBackStruct));
        WarMovie.WarFeedBack = WarFeedBack;
    })(WarMovie = fgui.WarMovie || (fgui.WarMovie = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=WarFeedBack.js.map