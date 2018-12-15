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
        var WarSelectActorItem = /** @class */ (function (_super) {
            __extends(WarSelectActorItem, _super);
            function WarSelectActorItem() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            WarSelectActorItem.prototype.setData = function (data, actor) {
                this.m_property.m_title.text = data.getType;
                this.m_property.m_icon.icon = Games.WarLoadPic.getActorTypeIcon(data.type);
                Games.WarLoadPic.setIcon(this.m_sex, data.sex);
                Games.WarLoadPic.setIcon(this.m_nation, data.country);
                if (actor !== null) {
                    this.m_actorOk.setSelectedIndex(1);
                    this.m_actorName.text = actor.name;
                    // this.m_roleTip.text = data.getName;
                    this.m_icon.icon = Game.config.avatar.getConfig(actor.config.avatar).bodyIconUrl;
                }
                else {
                    this.m_actorOk.setSelectedIndex(0);
                    this.m_chName.text = data.getName;
                    if (data.show_type > 0) {
                        this.m_chReq1.visible = true;
                        Games.WarLoadPic.setIcon(this.m_chReq1, data.show_type);
                    }
                    else {
                        this.m_chReq1.visible = false;
                    }
                    if (data.getReqageType > 0) {
                        this.m_chReq2.visible = true;
                        Games.WarLoadPic.setIcon(this.m_chReq2, data.getReqageType);
                    }
                    else {
                        this.m_chReq2.visible = false;
                    }
                }
            };
            return WarSelectActorItem;
        }(WarMovie.WarSelectActorItemStruct));
        WarMovie.WarSelectActorItem = WarSelectActorItem;
    })(WarMovie = fgui.WarMovie || (fgui.WarMovie = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=WarSelectActorItem.js.map