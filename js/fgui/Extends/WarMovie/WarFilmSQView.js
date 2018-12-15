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
        var WarFilmSQView = /** @class */ (function (_super) {
            __extends(WarFilmSQView, _super);
            function WarFilmSQView() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.maxVal = 0;
                return _this;
            }
            WarFilmSQView.prototype.constructFromXML = function (xml) {
                var _this = this;
                _super.prototype.constructFromXML.call(this, xml);
                this.m_title.text = TEXT.FilmSQViewTitle;
                // 确定按钮
                this.m_okBtn.onClick(this, this.onClickOkBtn);
                // 艺人列表
                this.m_filmAttributeList.itemRenderer = Laya.Handler.create(this, this.initAttItem, null, false);
                this.m_zhuyanList.itemRenderer = Laya.Handler.create(this, this.initYRItem, null, false);
                // 电影详情
                this.m_filmIcon.onClick(this, function () {
                    _this.moduleMain.openSubwindowByIndex(Games.WarSubwindowType.FilmInfo, true);
                });
            };
            WarFilmSQView.prototype.onClickOkBtn = function () {
                // this.m_filmAttributeList.numItems = 0;
                this.m_filmAttributeList.visible = false;
                this.m_okBtn.visible = false;
                this.moduleMain.conent.startShowWaiting();
                // 保存当前状态到服务器
                Game.moduleModel.warData.sendUpdateMovieState();
            };
            WarFilmSQView.prototype.onWindowShow = function () {
                var _this = this;
                this.m_filmAttributeList.visible = false;
                // this.m_filmAttributeList.numItems = 0;
                this.m_okBtn.visible = false;
                setTimeout(function () { _this.setData(); }, 100);
            };
            WarFilmSQView.prototype.onWindowHide = function () {
            };
            WarFilmSQView.prototype.setData = function () {
                var _this = this;
                this.maxVal = 0;
                this.m_zhuyanList.numItems = 0;
                this.moduleMain = this.moduleWindow.mainWindow;
                this.m_filmName.text = Game.moduleModel.warData.moveStory.filmName;
                this.m_filmIcon.setData(Game.moduleModel.warData.moveStory);
                var types = Game.config.movieShootType.getConfigList();
                var tips = Game.config.msg.getConfig(MsgKey.movie_type_tips).notice;
                for (var i = 0; i < types.length; i++) {
                    if (types[i].id == Game.moduleModel.warData.moveData.type) {
                        this.m_type.text = Game.moduleModel.warData.moveStory.filmType + "/" + types[i].getName;
                        break;
                    }
                }
                this.m_filmTime.text = format(TEXT.FilmLongTime, Game.moduleModel.warData.moveStory.length);
                for (var i = 0; i < 5; i++) {
                    if (this.maxVal < Game.moduleModel.warData.moveData.avrAttribute[i]) {
                        this.maxVal = Game.moduleModel.warData.moveData.avrAttribute[i];
                    }
                }
                this.maxVal *= Random.range(200, 220) * 0.01;
                this.m_filmAttributeList.numItems = 5;
                this.m_filmAttributeList.visible = true;
                this.m_zhuyanList.numItems = Game.moduleModel.warData.getRealYRList.count;
                setTimeout(function () { _this.m_okBtn.visible = true; }, 2000);
            };
            // 列表单个item赋值
            WarFilmSQView.prototype.initAttItem = function (index, obj) {
                var item = obj;
                item.setData(index, this.maxVal);
            };
            // 艺人列表单个赋值		
            WarFilmSQView.prototype.initYRItem = function (index, obj) {
                var item = obj;
                var data = Game.moduleModel.warData.getRealYRList.getValue(index);
                item.setIcon(Game.config.avatar.getConfig(data.config.avatar).bodyIconUrl);
            };
            return WarFilmSQView;
        }(WarMovie.WarFilmSQViewStruct));
        WarMovie.WarFilmSQView = WarFilmSQView;
    })(WarMovie = fgui.WarMovie || (fgui.WarMovie = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=WarFilmSQView.js.map