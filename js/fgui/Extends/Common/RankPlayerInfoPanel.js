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
        var RankPlayerInfoPanel = /** @class */ (function (_super) {
            __extends(RankPlayerInfoPanel, _super);
            function RankPlayerInfoPanel() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            RankPlayerInfoPanel.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_btnClose.onClick(this, this.OnCloseClick);
            };
            RankPlayerInfoPanel.prototype.open = function (playerData) {
                if (typeof (playerData) === "number") {
                    Game.protoOkEvent.add(ProtoEventKey.rank_GetPlayerShortData, this.OnGetPlayerShortDataHandler, this);
                    Game.protosender.rank.GetPlayerShortData(playerData);
                    this.visible = false;
                }
                else {
                    this.UpdateView(playerData);
                }
                Games.MenuLayer.showDialogModel();
                Games.MenuLayer.dialog.addChild(this);
                centerScreen(this);
            };
            RankPlayerInfoPanel.prototype.OnGetPlayerShortDataHandler = function (msg) {
                Game.protoOkEvent.remove(ProtoEventKey.rank_GetPlayerShortData, this.OnGetPlayerShortDataHandler, this);
                this.UpdateView(msg.data);
            };
            RankPlayerInfoPanel.prototype.UpdateView = function (playerData) {
                this.visible = true;
                this.playerData = playerData;
                this.m_info.Render(this.playerData);
                this.m_movie.Render(this.playerData);
            };
            RankPlayerInfoPanel.prototype.OnCloseClick = function () {
                this.close();
            };
            RankPlayerInfoPanel.prototype.close = function () {
                Games.MenuLayer.hideDialogModel();
                this.onHide();
            };
            RankPlayerInfoPanel.prototype.onHide = function () {
                this.removeFromParent();
            };
            return RankPlayerInfoPanel;
        }(Common.RankPlayerInfoPanelStruct));
        Common.RankPlayerInfoPanel = RankPlayerInfoPanel;
    })(Common = fgui.Common || (fgui.Common = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=RankPlayerInfoPanel.js.map