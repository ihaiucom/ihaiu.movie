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
    var ArtistDic;
    (function (ArtistDic) {
        var ArtistShow = /** @class */ (function (_super) {
            __extends(ArtistShow, _super);
            function ArtistShow() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            ArtistShow.prototype.onShowDetailsBtn = function () {
                Game.menu.open(MenuId.ArtistDetail, this.actorData.id, Games.ArtistDetailTabType.Base);
            };
            ArtistShow.prototype.onSendBtn = function () {
                if (validateSendMsgBoard(this.m_input.text)) {
                    Game.protosender.story.setMessage(this.actorData.id, this.m_input.text);
                    this.m_input.text = "";
                }
            };
            ArtistShow.prototype.setData = function (actorData) {
                this.m_talkList.numItems = 0;
                this.actorData = actorData;
                var hasactor = Game.moduleModel.actor.hasActor(this.actorData.id);
                this.m_nameTip1.text = TEXT.ArtistDicUIDefName;
                this.m_tip1.text = TEXT.ArtistDicUIHowHave;
                this.m_nameTip2.text = this.actorData.name;
                this.m_icon.icon = Games.WarLoadPic.getActorIcon(this.actorData.avatar);
                if (hasactor) {
                    this.m_name.text = Game.moduleModel.actor.getActor(this.actorData.id).name;
                    FguiHelper.clearFilters(this.m_icon);
                    this.m_HaveNo.setSelectedIndex(0);
                }
                else {
                    this.m_name.text = this.actorData.name;
                    FguiHelper.half2Staturation(this.m_icon);
                    this.m_HaveNo.setSelectedIndex(1);
                }
                this.m_starList.numItems = this.actorData.starNum;
                this.m_sexIcon.icon = Games.WarLoadPic.getActorTypeIcon(this.actorData.sex);
                this.m_countryIcon.icon = Games.WarLoadPic.getActorTypeIcon(this.actorData.country);
                this.m_ageIcon.icon = Games.WarLoadPic.getActorTypeIcon(this.actorData.show_type);
                this.m_showIcon.icon = Games.WarLoadPic.getActorTypeIcon(this.actorData.age_type);
                this.m_tip2.text = this.actorData.getway.replace("/n", "\n");
                Game.protosender.story.getMessage(this.actorData.id);
            };
            //留言item赋值
            ArtistShow.prototype.initItem = function (index, obj) {
                var item = obj;
                item.updateView(this.talkMsg[index]);
            };
            return ArtistShow;
        }(ArtistDic.ArtistShowStruct));
        ArtistDic.ArtistShow = ArtistShow;
    })(ArtistDic = fgui.ArtistDic || (fgui.ArtistDic = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=ArtistShow.js.map