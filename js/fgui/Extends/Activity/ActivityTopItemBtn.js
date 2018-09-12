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
        var ActivityTopItemBtn = /** @class */ (function (_super) {
            __extends(ActivityTopItemBtn, _super);
            function ActivityTopItemBtn() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            ActivityTopItemBtn.prototype.setData = function (data) {
                this.m_title.text = data.activities_name;
                this.m_icon.icon = Games.WarLoadPic.getAvatarIcon(data.icon);
                this.m_iconSelect.icon = Games.WarLoadPic.getAvatarIcon(data.icon);
                switch (data.id) {
                    case 1:
                        {
                            // 首周登录 七日
                            this.m_red.visible = Game.moduleModel.activity.waitForGetNum > 0;
                            this.m_red.m_num.text = Game.moduleModel.activity.waitForGetNum.toString();
                        }
                        break;
                }
            };
            ActivityTopItemBtn.prototype.setDataWelf = function (data) {
                this.m_title.text = data.activities_name;
                this.m_icon.icon = Games.WarLoadPic.getAvatarIcon(data.icon);
                this.m_iconSelect.icon = Games.WarLoadPic.getAvatarIcon(data.icon_chosen);
                switch (data.type) {
                    case 1:
                        {
                            // 签到
                            this.m_red.visible = !Game.moduleModel.activity.curIsSign;
                            this.m_red.m_num.text = "1";
                        }
                        break;
                    case 2:
                        {
                            // 秘书
                            this.m_red.visible = Game.moduleModel.secretary.isCanGetWelf;
                            this.m_red.m_num.text = "1";
                        }
                        break;
                }
            };
            return ActivityTopItemBtn;
        }(Activity.ActivityTopItemBtnStruct));
        Activity.ActivityTopItemBtn = ActivityTopItemBtn;
    })(Activity = fgui.Activity || (fgui.Activity = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=ActivityTopItemBtn.js.map