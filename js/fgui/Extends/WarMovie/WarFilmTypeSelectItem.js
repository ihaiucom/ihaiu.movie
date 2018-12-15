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
        var WarFilmTypeSelectItem = /** @class */ (function (_super) {
            __extends(WarFilmTypeSelectItem, _super);
            function WarFilmTypeSelectItem() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.actorList = new Array();
                _this.actorValList = new Array();
                return _this;
            }
            WarFilmTypeSelectItem.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.actorList = [this.m_actor1, this.m_actor2, this.m_actor3, this.m_actor4, this.m_actor5];
                this.actorValList = [this.m_actorVal1, this.m_actorVal2, this.m_actorVal3, this.m_actorVal4, this.m_actorVal5];
            };
            WarFilmTypeSelectItem.prototype.setData = function (data, index) {
                this.m_filmType.text = data.getName;
                this.m_lovePeople.text = data.getLove;
                this.m_icon.icon = Game.config.avatar.getConfig(data.pic).iconUrl;
                var allsType = 0;
                for (var i = 0; i < 5; i++) {
                    if (i < Game.moduleModel.warData.getRealYRList.count) {
                        this.actorList[i].visible = true;
                        this.actorValList[i].visible = true;
                        var actor = Game.moduleModel.warData.getRealYRList.getValue(i);
                        var config = Game.config.actor.getConfig(actor.id);
                        this.actorList[i].ActorId = actor.id;
                        // this.actorList[i].setIcon(Game.config.avatar.getConfig(config.avatar).bodyIconUrl);
                        var stype = actor.getShootType(data.id + 400);
                        if (stype !== null) {
                            allsType += stype.proficiencyLevel;
                            this.actorValList[i].text = stype.proficiencyLevel.toString();
                        }
                        else {
                            this.actorValList[i].text = "0";
                        }
                    }
                    else {
                        this.actorList[i].visible = false;
                        this.actorValList[i].visible = false;
                    }
                }
                this.m_proficiency.text = allsType.toString();
            };
            return WarFilmTypeSelectItem;
        }(WarMovie.WarFilmTypeSelectItemStruct));
        WarMovie.WarFilmTypeSelectItem = WarFilmTypeSelectItem;
    })(WarMovie = fgui.WarMovie || (fgui.WarMovie = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=WarFilmTypeSelectItem.js.map