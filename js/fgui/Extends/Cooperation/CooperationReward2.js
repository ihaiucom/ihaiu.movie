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
    var Cooperation;
    (function (Cooperation) {
        var CooperationReward2 = /** @class */ (function (_super) {
            __extends(CooperationReward2, _super);
            function CooperationReward2() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            CooperationReward2.prototype.setData = function (msg) {
                this.m_icon.icon = Games.WarLoadPic.getItemIcon(msg.itemId);
                this.m_title.text = formatNumberUnit(msg.itemNum, 0);
            };
            return CooperationReward2;
        }(Cooperation.CooperationReward2Struct));
        Cooperation.CooperationReward2 = CooperationReward2;
    })(Cooperation = fgui.Cooperation || (fgui.Cooperation = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=CooperationReward2.js.map