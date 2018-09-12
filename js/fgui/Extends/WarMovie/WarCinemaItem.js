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
        var WarCinemaItem = /** @class */ (function (_super) {
            __extends(WarCinemaItem, _super);
            function WarCinemaItem() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            WarCinemaItem.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_okBtn.onClick(this, this.onClickSelectBtn);
            };
            WarCinemaItem.prototype.setData = function (data, index, moduleModels) {
                this.dataid = data.id;
                this.moduleModels = moduleModels;
                // 
                if (this.dataid === Game.moduleModel.warData.emptyCinemalist[0] || this.dataid === Game.moduleModel.warData.emptyCinemalist[1]) {
                    this.m_c1.setSelectedIndex(0);
                    var blockLevel = Game.config.blockLevel.getConfig(data.unlock);
                    this.m_title.text = format(Game.config.msg.getConfig(MsgKey.movie_unlock_cinema_tips).notice, blockLevel.name);
                }
                else {
                    this.m_c1.setSelectedIndex(1);
                    this.m_title.text = format(Game.config.msg.getConfig(MsgKey.movie_cinema_tips).notice, data.sign_level, data.num);
                }
                this.m_icon.icon = Game.config.avatar.getConfig(data.pic).iconUrl;
            };
            WarCinemaItem.prototype.onClickSelectBtn = function () {
                var _this = this;
                this.moduleMain = this.moduleModels.mainWindow;
                this.moduleModels.closeSelf();
                // 此处需要发送院线选择到服务器
                Game.moduleModel.warData.setPublishMovie(this.dataid, function () {
                    _this.moduleMain.conent.subWindowToMain();
                });
            };
            return WarCinemaItem;
        }(WarMovie.WarCinemaItemStruct));
        WarMovie.WarCinemaItem = WarCinemaItem;
    })(WarMovie = fgui.WarMovie || (fgui.WarMovie = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=WarCinemaItem.js.map