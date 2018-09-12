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
    var Activity;
    (function (Activity) {
        var SignItem = /** @class */ (function (_super) {
            __extends(SignItem, _super);
            function SignItem() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            SignItem.prototype.setData = function (data) {
                this.m_day.text = format(Game.config.msg.getConfig(MsgKey.day_count).notice, data.day);
                this.m_icon.icon = Game.config.item.getItemIcon(data.reward.itemId);
                this.m_num.text = data.reward.itemNum.toFixed(0);
                this.m_c1.setSelectedIndex(Game.moduleModel.activity.curSignStatus(data.day));
            };
            return SignItem;
        }(Activity.SignItemStruct));
        Activity.SignItem = SignItem;
    })(Activity = fgui.Activity || (fgui.Activity = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=SignItem.js.map