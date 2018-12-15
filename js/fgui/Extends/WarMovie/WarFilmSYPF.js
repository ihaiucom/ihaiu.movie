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
        var WarFilmSYPF = /** @class */ (function (_super) {
            __extends(WarFilmSYPF, _super);
            function WarFilmSYPF() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            WarFilmSYPF.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                // 关闭按钮
                this.onClick(this, this.onClickOkBtn);
            };
            WarFilmSYPF.prototype.onClickOkBtn = function () {
                // this.moduleWindow.closeSelf();
                this.moduleMain.conent.startShowWaiting();
                // 保存当前状态到服务器
                Game.moduleModel.warData.sendUpdateMovieState();
            };
            WarFilmSYPF.prototype.onWindowShow = function () {
                this.setData();
            };
            WarFilmSYPF.prototype.onWindowHide = function () {
            };
            WarFilmSYPF.prototype.setData = function () {
                var _this = this;
                this.m_t1.stop();
                Game.sound.playSound(SoundKey.MM23_Premiere);
                var list = Game.moduleModel.warData.getRealYRList.getValues();
                for (var i = 0; i < list.length; i++) {
                    if (i === list.length - 1) {
                        Game.system.playSkillEffect(list[i].id, Games.SkillTriggerType.box_office_earnings, function () {
                            if (Game.moduleModel.warData.moveData.extBoxOffice > 0) {
                                _this.m_add.text = "+" + formatNumberUnit(Game.moduleModel.warData.moveData.extBoxOffice);
                                _this.m_t1.play(laya.utils.Handler.create(_this, _this.moveOverCall), 1);
                            }
                            else {
                                _this.m_t1.stop();
                            }
                        });
                    }
                    else {
                        Game.system.playSkillEffect(list[i].id, Games.SkillTriggerType.box_office_earnings);
                    }
                }
                this.moduleMain = this.moduleWindow.mainWindow;
                this.m_total.text = formatNumberUnit(Game.moduleModel.warData.moveData.premiereBoxOffice - Game.moduleModel.warData.moveData.extBoxOffice);
            };
            WarFilmSYPF.prototype.moveOverCall = function () {
                this.m_total.text = formatNumberUnit(Game.moduleModel.warData.moveData.premiereBoxOffice);
            };
            return WarFilmSYPF;
        }(WarMovie.WarFilmSYPFStruct));
        WarMovie.WarFilmSYPF = WarFilmSYPF;
    })(WarMovie = fgui.WarMovie || (fgui.WarMovie = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=WarFilmSYPF.js.map