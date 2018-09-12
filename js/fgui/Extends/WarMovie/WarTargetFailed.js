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
        var WarTargetFailed = /** @class */ (function (_super) {
            __extends(WarTargetFailed, _super);
            function WarTargetFailed() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            WarTargetFailed.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                // 关闭
                this.onClick(this, this.onClickClose);
            };
            WarTargetFailed.prototype.onClickClose = function () {
                if (this.callBack !== null) {
                    this.callBack();
                }
                this.visible = false;
            };
            WarTargetFailed.prototype.setData = function (propertyReward, haveNum, okList, callBack) {
                Games.WarLoadPic.setIcon(this.m_target1.m_icon, propertyReward[0]);
                this.m_target1.m_title.text = haveNum[0] + "/" + okList[0];
                if (haveNum[0] >= okList[0]) {
                    this.m_target1.m_c1.setSelectedIndex(0);
                }
                else {
                    this.m_target1.m_c1.setSelectedIndex(1);
                }
                Games.WarLoadPic.setIcon(this.m_target2.m_icon, propertyReward[1]);
                this.m_target2.m_title.text = haveNum[1] + "/" + okList[1];
                if (haveNum[1] >= okList[1]) {
                    this.m_target2.m_c1.setSelectedIndex(0);
                }
                else {
                    this.m_target2.m_c1.setSelectedIndex(1);
                }
                this.callBack = callBack;
                this.m_tip.text = Game.config.msg.getConfig(MsgKey.movie_target_fail).notice;
                this.visible = true;
            };
            return WarTargetFailed;
        }(WarMovie.WarTargetFailedStruct));
        WarMovie.WarTargetFailed = WarTargetFailed;
    })(WarMovie = fgui.WarMovie || (fgui.WarMovie = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=WarTargetFailed.js.map