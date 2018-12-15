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
    var MainUI;
    (function (MainUI) {
        var GuideTaskDialog = /** @class */ (function (_super) {
            __extends(GuideTaskDialog, _super);
            function GuideTaskDialog() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            GuideTaskDialog.prototype.showHideTaskArrow = function (isShow) {
                this.m_role.m_arrow2.visible = isShow;
                this.m_roleGetReward.m_arrow1.visible = isShow;
                if (isShow) {
                    this.m_role.m_arrow2.m_t0.play(null, -1);
                    this.m_roleGetReward.m_arrow1.m_t0.play(null, -1);
                }
            };
            return GuideTaskDialog;
        }(MainUI.GuideTaskDialogStruct));
        MainUI.GuideTaskDialog = GuideTaskDialog;
    })(MainUI = fgui.MainUI || (fgui.MainUI = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=GuideTaskDialog.js.map