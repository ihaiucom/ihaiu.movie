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
    var Common;
    (function (Common) {
        var RankMovieInfoPanel = /** @class */ (function (_super) {
            __extends(RankMovieInfoPanel, _super);
            function RankMovieInfoPanel() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            RankMovieInfoPanel.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_listActor.itemRenderer = new Handler(this, this.RenderActor, null, false);
                this.m_btnClose.onClick(this, this.OnCloseClick);
            };
            RankMovieInfoPanel.prototype.open = function (movieData) {
                if (typeof (movieData) === "string") {
                    Game.protoOkEvent.add(ProtoEventKey.rank_GetMovieShortData, this.OnGetMovieShortData, this);
                    Game.protosender.rank.GetMovieShortData(movieData);
                    this.visible = false;
                }
                else {
                    this.UpdateView(movieData);
                }
                Games.MenuLayer.showDialogModel();
                Games.MenuLayer.dialog.addChild(this);
                centerScreen(this);
            };
            RankMovieInfoPanel.prototype.OnGetMovieShortData = function (msg) {
                Game.protoOkEvent.remove(ProtoEventKey.rank_GetMovieShortData, this.OnGetMovieShortData, this);
                this.UpdateView(msg.data);
            };
            RankMovieInfoPanel.prototype.UpdateView = function (movieData) {
                this.visible = true;
                this.movieData = movieData;
                this.m_name.text = movieData.name;
                var cfg = Game.config.story.getConfig(movieData.movieId);
                this.m_movieIcon.touchable = false;
                this.m_movieIcon.icon = Game.config.story.GetPoster(this.movieData.movieId);
                this.m_movieIcon.m_starList.numItems = Game.config.story.GetStar(this.movieData.movieId);
                this.m_txtDesc.text = cfg.filmDes;
                this.m_mdiaEaluation.text = this.movieData.mediaCommend.toFixed(1);
                this.m_praise.text = this.movieData.publicPraise.toFixed(0);
                if (this.movieData.totalBoxOffice) {
                    this.m_lv.text = "";
                    var sellIcon = Game.config.movieDrop.getSellIcon(this.movieData.boxOfficeEvaluation);
                    this.m_lv.icon = Game.config.avatar.getConfig(sellIcon).iconUrl;
                    this.m_boxOffice.text = formatNumberUnit(this.movieData.totalBoxOffice, this.movieData.totalBoxOffice >= 1000 ? 1 : 0);
                }
                else {
                    this.m_lv.text = "";
                    this.m_lv.icon = "";
                    this.m_boxOffice.text = "";
                }
                this.actorList = [];
                for (var index = 0; index < this.movieData.data.length; index++) {
                    var actor = this.movieData.data[index];
                    if (actor.actorId < 9999) {
                        this.actorList.push(actor);
                    }
                }
                this.m_listActor.numItems = this.actorList.length;
            };
            RankMovieInfoPanel.prototype.RenderActor = function (index, obj) {
                var actor = this.actorList[index];
                obj.touchable = false;
                obj.Render(actor.actorId, actor.name);
            };
            RankMovieInfoPanel.prototype.OnCloseClick = function () {
                this.close();
            };
            RankMovieInfoPanel.prototype.close = function () {
                Games.MenuLayer.hideDialogModel();
                this.onHide();
            };
            RankMovieInfoPanel.prototype.onHide = function () {
                this.removeFromParent();
            };
            return RankMovieInfoPanel;
        }(Common.RankMovieInfoPanelStruct));
        Common.RankMovieInfoPanel = RankMovieInfoPanel;
    })(Common = fgui.Common || (fgui.Common = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=RankMovieInfoPanel.js.map