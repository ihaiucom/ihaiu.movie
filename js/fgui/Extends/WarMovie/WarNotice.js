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
        var WarNotice = /** @class */ (function (_super) {
            __extends(WarNotice, _super);
            function WarNotice() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.mediaId = 0;
                _this.actorData = new Array();
                return _this;
            }
            WarNotice.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_title.text = TEXT.FilmNoticeTitle;
                this.m_nameTip.text = TEXT.FilmNoticeTitle;
                // 确定按钮
                this.m_okBtn.onClick(this, this.onClickOkBtn);
                // 通告列表
                this.m_noticeList.itemRenderer = Laya.Handler.create(this, this.initNoticeItem, null, false);
                // 关闭按钮
                this.m_closeBtn.onClick(this, this.onClickClose);
            };
            WarNotice.prototype.onClickOkBtn = function () {
                // this.moduleWindow.closeSelf();
                this.moduleMain.conent.startShowWaiting();
                // 保存当前状态到服务器
                Game.moduleModel.warData.sendUpdateMovieState();
            };
            WarNotice.prototype.onClickClose = function () {
                this.moduleWindow.closeSelf();
                this.moduleMain.menuClose();
            };
            WarNotice.prototype.onWindowShow = function () {
                Game.moduleModel.warData.sUpdateMediaCall.add(this.onAcceptBack, this);
                this.setData();
            };
            WarNotice.prototype.onWindowHide = function () {
                Game.moduleModel.warData.sUpdateMediaCall.remove(this.onAcceptBack, this);
            };
            WarNotice.prototype.setData = function () {
                this.m_noticeList.numItems = 0;
                this.moduleMain = this.moduleWindow.mainWindow;
                this.getRandomActor();
                this.m_noticeList.numItems = Game.moduleModel.warData.moveData.mediaVisit.length;
            };
            WarNotice.prototype.getRandomActor = function () {
                this.actorList = new Dictionary();
                // 当前艺人列表
                var actors = Game.moduleModel.warData.getRealYRList;
                // 当前艺人列表长度
                var actorLength = actors.count;
                for (var i = 0; i < Game.moduleModel.warData.moveData.mediaVisit.length; i++) {
                    var randomActorList = new Array();
                    var randomCount = Random.rangeBoth(1, 2);
                    // 单个通告艺人列表
                    var arrActor = new Array();
                    if (actorLength <= randomCount || actorLength <= 2) {
                        var lengths = randomCount < actorLength ? randomCount : actorLength;
                        for (var j = 0; j < lengths; j++) {
                            arrActor.push(actors.getValue(j));
                        }
                    }
                    else {
                        var random1 = Random.range(0, actorLength);
                        arrActor.push(actors.getValue(random1));
                        if (randomCount > 1) {
                            var halfLeght = actorLength / 2;
                            var random2 = void 0;
                            if (random1 < halfLeght) {
                                random2 = Random.range(halfLeght + 1, actorLength);
                            }
                            else {
                                random2 = Random.range(0, halfLeght);
                            }
                            random2 = Math.floor(random2);
                            if (random2 < 0 || random2 >= actorLength || random2 == random1) {
                            }
                            else {
                                arrActor.push(actors.getValue(random2));
                            }
                        }
                    }
                    this.actorList.add(i, arrActor);
                }
            };
            // 通告列表单个item赋值
            WarNotice.prototype.initNoticeItem = function (index, obj) {
                var _this = this;
                var item = obj;
                item.setData(index, this.actorList.getValue(index), function (arg, actorData) {
                    _this.selectItemGetValue(arg, actorData);
                });
            };
            WarNotice.prototype.selectItemGetValue = function (index, actorData) {
                this.mediaId = index;
                this.actorData = actorData;
                Game.moduleModel.warData.AcceptMediaVisit(index);
            };
            WarNotice.prototype.onAcceptBack = function (arg) {
                Game.moduleModel.warData.filmExpectations.add(this.mediaId, arg);
                Game.moduleModel.warData.filmExpecteActor.add(this.mediaId, this.actorData);
                this.m_noticeList.numItems = 0;
                this.m_noticeList.numItems = Game.moduleModel.warData.moveData.mediaVisit.length;
            };
            return WarNotice;
        }(WarMovie.WarNoticeStruct));
        WarMovie.WarNotice = WarNotice;
    })(WarMovie = fgui.WarMovie || (fgui.WarMovie = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=WarNotice.js.map