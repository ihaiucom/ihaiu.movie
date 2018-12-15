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
        var WarYRNoticeItem = /** @class */ (function (_super) {
            __extends(WarYRNoticeItem, _super);
            function WarYRNoticeItem() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.mediaId = 0;
                _this.actorData = new Array();
                return _this;
            }
            WarYRNoticeItem.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                // 选择按钮
                this.m_okBtn.m_title.text = TEXT.ButtonSelect;
            };
            WarYRNoticeItem.prototype.setData = function (index, actor, selectNotice) {
                this.actorData = actor;
                var media = Game.moduleModel.warData.moveData.mediaVisit[index];
                this.mediaId = media.mediaId;
                this.mediaConfig = Game.config.movieMediaVisit.getConfig(this.mediaId);
                this.m_icon.icon = Games.WarLoadPic.getAvatarIcon(this.mediaConfig.pic);
                this.m_lv.text = format(TEXT.Lv, media.level);
                this.m_title.text = this.mediaConfig.name;
                this.m_yr1.setIcon(Games.WarLoadPic.getActorIcon(actor[0].config.avatar));
                if (actor.length == 2) {
                    this.m_yr2.setIcon(Games.WarLoadPic.getActorIcon(actor[1].config.avatar));
                    this.m_yr2.visible = true;
                }
                else {
                    this.m_yr2.visible = false;
                }
                var curNum = Game.moduleModel.item.getItemNum(this.mediaConfig.cost_id);
                if (curNum >= this.mediaConfig.cost_num) {
                    this.canClick = true;
                    this.m_okBtn.m_colorCtrol.setSelectedIndex(0);
                }
                else {
                    this.m_okBtn.m_colorCtrol.setSelectedIndex(1);
                    this.canClick = false;
                }
                if (media.bAccept) {
                    this.m_selected.setSelectedIndex(1);
                }
                else {
                    this.m_selected.setSelectedIndex(0);
                }
                this.m_okBtn.m_cost.text = formatNumberUnit(this.mediaConfig.cost_num);
                this.m_okBtn.m_item.icon = Games.WarLoadPic.getItemIcon(this.mediaConfig.cost_id);
                this.m_okBtn.onClick(this, this.onClickSelectNotice, [selectNotice]);
            };
            WarYRNoticeItem.prototype.onClickSelectNotice = function (selectNotice) {
                if (this.canClick) {
                    selectNotice(this.mediaId, this.actorData);
                }
                else {
                    Game.system.openItemWay(this.mediaConfig.cost_id, this.mediaConfig.cost_num);
                }
            };
            return WarYRNoticeItem;
        }(WarMovie.WarYRNoticeItemStruct));
        WarMovie.WarYRNoticeItem = WarYRNoticeItem;
    })(WarMovie = fgui.WarMovie || (fgui.WarMovie = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=WarYRNoticeItem.js.map