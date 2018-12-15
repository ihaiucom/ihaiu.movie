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
        var PlayerMovieInfo = /** @class */ (function (_super) {
            __extends(PlayerMovieInfo, _super);
            function PlayerMovieInfo() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.BestMovieItemName = "BestMovieItem";
                return _this;
            }
            PlayerMovieInfo.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_listMovieLv.itemRenderer = new Handler(this, this.RenderMovieLvItem, null, false);
                this.m_listBestMovie.itemRenderer = new Handler(this, this.RenderBestMovieItem, null, false);
                this.m_listMovieLv.on(fairygui.Events.CLICK_ITEM, this, this.OnMovieLvClick);
                this.m_listBestMovie.on(fairygui.Events.CLICK_ITEM, this, this.OnBestMovieClick);
                this.m_listMovieLv.foldInvisibleItems = true;
            };
            PlayerMovieInfo.prototype.Render = function (playerData) {
                this.playerData = playerData;
                this.m_listMovieLv.numItems = this.playerData.boxOfficeEvaluation.length;
                this.m_listBestMovie.numItems = this.playerData.bestMovie.length;
                this.m_listMovieLv.ensureBoundsCorrect();
            };
            PlayerMovieInfo.prototype.OnMovieLvClick = function () { };
            PlayerMovieInfo.prototype.OnBestMovieClick = function (obj) {
                var index = parseInt(obj.name.slice(this.BestMovieItemName.length));
                var movieData = this.playerData.bestMovie[index];
                var playerInfo = this.parent;
                playerInfo.close();
                Game.system.movieInfo(movieData.movieUuid);
            };
            PlayerMovieInfo.prototype.RenderMovieLvItem = function (index, obj) {
                var data = this.playerData.boxOfficeEvaluation[index];
                if (data <= 0) {
                    obj.visible = false;
                    return;
                }
                obj.visible = true;
                obj.title = data.toString();
                obj.icon = Game.config.avatar.GetBoxOfficEvaluationIconUrl(index);
                obj.ColorIndex = index;
                if (index == 5) {
                    obj.m_trColor.setSelectedIndex(1);
                }
                else if (index == 6) {
                    obj.m_trColor.setSelectedIndex(2);
                }
                else {
                    obj.m_trColor.setSelectedIndex(0);
                }
            };
            PlayerMovieInfo.prototype.RenderBestMovieItem = function (index, obj) {
                var data = this.playerData.bestMovie[index];
                obj.name = this.BestMovieItemName + index;
                obj.Render(data, this.playerData.blockLevel);
            };
            return PlayerMovieInfo;
        }(Common.PlayerMovieInfoStruct));
        Common.PlayerMovieInfo = PlayerMovieInfo;
    })(Common = fgui.Common || (fgui.Common = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=PlayerMovieInfo.js.map