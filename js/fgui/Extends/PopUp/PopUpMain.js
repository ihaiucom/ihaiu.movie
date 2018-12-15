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
    var PopUp;
    (function (PopUp) {
        var PopUpMain = /** @class */ (function (_super) {
            __extends(PopUpMain, _super);
            function PopUpMain() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                // 第几个弹窗
                _this.curShowNum = 0;
                // 最大弹窗数量
                _this.maxShowNum = 0;
                return _this;
            }
            PopUpMain.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                // 关闭按钮
                this.m_close.onClick(this, this.setData);
            };
            PopUpMain.prototype.onWindowShow = function () {
                Games.GameLocalStorage.Instance.setBoolean("__PopUpMain_HavePopToday", true, false);
                this.m_check.selected = false;
                if (this.moduleWindow.menuParameter.args.length > 0) {
                    this.curPopUpconfigList = this.moduleWindow.menuParameter.args[0];
                    this.curPopUpconfigList.sort(function (a, b) { return b.priority - a.priority; });
                    this.maxShowNum = this.curPopUpconfigList.length;
                    this.curShowNum = 0;
                    this.setData();
                }
            };
            PopUpMain.prototype.onWindowHide = function () {
            };
            PopUpMain.prototype.setData = function () {
                if (this.curShowNum > 0) {
                    Games.GameLocalStorage.Instance.setBoolean("__PopUpMain_HidePopToday" + this.curPopUpconfigList[this.curShowNum - 1].id, this.m_check.selected, false);
                }
                if (this.curShowNum < this.maxShowNum) {
                    this.m_check.selected = false;
                    this.m_pic.icon = ImageConfig.getUrl(this.curPopUpconfigList[this.curShowNum].image);
                    this.curShowNum++;
                }
                else {
                    Games.GameLocalStorage.Instance.setInt("__PopUpMain_HidePopTodayServerTime", Game.time.serverMilliseconds, false);
                    this.moduleWindow.menuBack();
                }
            };
            return PopUpMain;
        }(PopUp.PopUpMainStruct));
        PopUp.PopUpMain = PopUpMain;
    })(PopUp = fgui.PopUp || (fgui.PopUp = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=PopUpMain.js.map