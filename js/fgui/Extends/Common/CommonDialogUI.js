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
        var CommonDialogUI = /** @class */ (function (_super) {
            __extends(CommonDialogUI, _super);
            function CommonDialogUI() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.isClose = true;
                return _this;
            }
            CommonDialogUI.prototype.onWindowHide = function () {
                this.m_closeBtn.offClick(this, this.onClickClosebtn);
            };
            CommonDialogUI.prototype.onWindowShow = function () {
                this.m_closeBtn.onClick(this, this.onClickClosebtn);
            };
            CommonDialogUI.prototype.onClickClosebtn = function () {
                if (this.moduleWindow && this.isClose) {
                    this.moduleWindow.menuClose();
                }
            };
            return CommonDialogUI;
        }(Common.CommonDialogUIStruct));
        Common.CommonDialogUI = CommonDialogUI;
    })(Common = fgui.Common || (fgui.Common = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=CommonDialogUI.js.map