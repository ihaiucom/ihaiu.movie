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
        var WarActorItemShow = /** @class */ (function (_super) {
            __extends(WarActorItemShow, _super);
            function WarActorItemShow() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            WarActorItemShow.prototype.setData = function (data) {
                this.m_type.text = data.getType;
                this.m_name.text = data.getName;
                this.m_des.setData(data.getDes);
                if (data.sex > 0) {
                    this.m_sexReq.visible = true;
                    Games.WarLoadPic.setIcon(this.m_sexIcon, data.sex);
                }
                else {
                    this.m_sexReq.visible = false;
                }
                if (data.country > 0) {
                    this.m_countryReq.visible = true;
                    Games.WarLoadPic.setIcon(this.m_countryIcon, data.country);
                }
                else {
                    this.m_countryReq.visible = false;
                }
                if (data.show_type > 0) {
                    this.m_showReq.visible = true;
                    Games.WarLoadPic.setIcon(this.m_showIcon, data.show_type);
                }
                else {
                    this.m_showReq.visible = false;
                }
                if (data.getReqageType > 0) {
                    this.m_ageReq.visible = true;
                    Games.WarLoadPic.setIcon(this.m_ageIcon, data.getReqageType);
                }
                else {
                    this.m_ageReq.visible = false;
                }
                var conf2 = Game.config.property.getConfig(data.effect[0]).icon;
                this.m_property1.icon = Game.config.avatar.getConfig(conf2).iconUrl;
                var conf3 = Game.config.property.getConfig(data.effect[1]).icon;
                this.m_property2.icon = Game.config.avatar.getConfig(conf3).iconUrl;
            };
            return WarActorItemShow;
        }(WarMovie.WarActorItemShowStruct));
        WarMovie.WarActorItemShow = WarActorItemShow;
    })(WarMovie = fgui.WarMovie || (fgui.WarMovie = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=WarActorItemShow.js.map