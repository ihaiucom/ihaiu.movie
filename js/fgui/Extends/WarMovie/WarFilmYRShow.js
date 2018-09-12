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
        var WarFilmYRShow = /** @class */ (function (_super) {
            __extends(WarFilmYRShow, _super);
            function WarFilmYRShow() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.haveClick = false;
                return _this;
            }
            WarFilmYRShow.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_actor1.visible = false;
                this.m_actor2.visible = false;
                this.m_actor3.visible = false;
                this.m_actor4.visible = false;
                this.m_actor5.visible = false;
                this.yrList = [this.m_actor1, this.m_actor2, this.m_actor3, this.m_actor4, this.m_actor5];
                // 关闭
                this.onClick(this, this.onClickClose);
            };
            WarFilmYRShow.prototype.onClickClose = function () {
                var _this = this;
                if (!this.haveClick) {
                    this.haveClick = true;
                    this.moduleWindow.closeSelf();
                    // 保存当前状态到服务器
                    Game.moduleModel.warData.sendUpdateMovieState(function () {
                        _this.moduleMain.conent.subWindowToMain();
                    });
                }
            };
            WarFilmYRShow.prototype.onWindowShow = function () {
                this.haveClick = false;
                this.setData();
            };
            WarFilmYRShow.prototype.onWindowHide = function () {
            };
            WarFilmYRShow.prototype.setData = function () {
                this.moduleMain = this.moduleWindow.mainWindow;
                this.curFilmYRItemNumber = 0;
                for (var i = 0; i < this.yrList.length; i++) {
                    this.yrList[i].visible = false;
                }
                var count = Game.moduleModel.warData.getRealYRList.count;
                var _xx = 720 / count;
                for (var i = 0; i < count; i++) {
                    this.yrList[i].m_mask.width = _xx;
                    this.yrList[i].m_bg.width = _xx;
                    var maskX = this.yrList[i].m_mask.x;
                    this.yrList[i].x = i * _xx - maskX;
                    this.yrList[i].m_left.x = maskX - 2;
                    this.yrList[i].m_right.x = 144 - maskX - 2;
                }
                Game.sound.playSound(SoundKey.MM18_Screen);
                this.filmYRShowItem(count);
            };
            // 刷新艺人展示
            WarFilmYRShow.prototype.filmYRShowItem = function (max) {
                var _this = this;
                this.curFilmYRItemNumber++;
                if (this.curFilmYRItemNumber <= max) {
                    var actor = Game.moduleModel.warData.getRealYRList.getValue(this.curFilmYRItemNumber - 1);
                    this.yrList[this.curFilmYRItemNumber - 1].visible = true;
                    var config = Game.config.actor.getConfig(actor.id);
                    this.yrList[this.curFilmYRItemNumber - 1].m_icon.icon = Game.config.avatar.getConfig(config.avatar).bodyIconUrl;
                    this.yrList[this.curFilmYRItemNumber - 1].m_t0.play(laya.utils.Handler.create(this, this.filmYRShowAniOver, [max]), 1);
                    this.yrList[this.curFilmYRItemNumber - 1].m_t0.setHook("over", laya.utils.Handler.create(this, this.filmYRShowAni, [max]));
                }
                else {
                    setTimeout(function () { _this.onClickClose(); }, 3000);
                }
            };
            // 动画播放到指定时间的回调
            WarFilmYRShow.prototype.filmYRShowAni = function (max) {
                if (this.curFilmYRItemNumber < max) {
                    this.filmYRShowItem(max);
                }
            };
            // 动画结束的回调
            WarFilmYRShow.prototype.filmYRShowAniOver = function (max) {
                if (this.curFilmYRItemNumber == max) {
                    this.filmYRShowItem(max);
                }
            };
            return WarFilmYRShow;
        }(WarMovie.WarFilmYRShowStruct));
        WarMovie.WarFilmYRShow = WarFilmYRShow;
    })(WarMovie = fgui.WarMovie || (fgui.WarMovie = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=WarFilmYRShow.js.map