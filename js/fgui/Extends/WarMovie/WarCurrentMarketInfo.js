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
        var WarCurrentMarketInfo = /** @class */ (function (_super) {
            __extends(WarCurrentMarketInfo, _super);
            function WarCurrentMarketInfo() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            WarCurrentMarketInfo.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                // 关闭面板
                this.onClick(this, this.onClickClose);
            };
            WarCurrentMarketInfo.prototype.onClickClose = function () {
                var _this = this;
                this.moduleWindow.closeSelf();
                // 保存当前状态到服务器
                Game.moduleModel.warData.sendUpdateMovieState(function () {
                    _this.moduleMain.conent.subWindowToMain();
                });
            };
            WarCurrentMarketInfo.prototype.onWindowShow = function () {
                this.setData();
            };
            WarCurrentMarketInfo.prototype.onWindowHide = function () {
            };
            WarCurrentMarketInfo.prototype.setData = function () {
                this.moduleMain = this.moduleWindow.mainWindow;
                var data = Game.moduleModel.warData.moveStory;
                var man = Game.moduleModel.warData.moveData.expected[0];
                var woman = Game.moduleModel.warData.moveData.expected[1];
                var child = Game.moduleModel.warData.moveData.expected[2];
                var ok1 = this.m_men.setData(data.getMale, man, 0);
                var ok2 = this.m_women.setData(data.getFemale, woman, 1);
                var ok3 = this.m_child.setData(data.getChild, child, 2);
                var strTip = "";
                if (ok1 && ok2 && ok3) {
                    if (Random.rangeBoth(0, 1) === 0) {
                        strTip = Game.config.msg.getConfig(MsgKey.movie_market_good1).notice;
                    }
                    else {
                        strTip = Game.config.msg.getConfig(MsgKey.movie_market_good2).notice;
                    }
                }
                else {
                    if (Random.rangeBoth(0, 1) === 0) {
                        strTip = Game.config.msg.getConfig(MsgKey.movie_market_bad1).notice;
                    }
                    else {
                        strTip = Game.config.msg.getConfig(MsgKey.movie_market_bad2).notice;
                    }
                }
                this.m_des.text = format(strTip, Game.moduleModel.warData.moveData.name);
            };
            return WarCurrentMarketInfo;
        }(WarMovie.WarCurrentMarketInfoStruct));
        WarMovie.WarCurrentMarketInfo = WarCurrentMarketInfo;
    })(WarMovie = fgui.WarMovie || (fgui.WarMovie = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=WarCurrentMarketInfo.js.map