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
        var CooperationEnd = /** @class */ (function (_super) {
            __extends(CooperationEnd, _super);
            function CooperationEnd() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            CooperationEnd.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_title.text = TEXT.CooperationEndTitle;
                // 关闭面板
                this.m_closeBtn.onClick(this, this.onClicClose);
                this.m_sureBtn.onClick(this, this.onClicSureClose);
            };
            // 关闭窗口
            CooperationEnd.prototype.onClicClose = function () {
                this.moduleWindow.closeSelf();
            };
            CooperationEnd.prototype.onClicSureClose = function () {
                Game.moduleModel.cooperation.sendRelieve();
                this.moduleWindow.closeSelf();
            };
            CooperationEnd.prototype.onWindowShow = function () {
                this.setData();
            };
            CooperationEnd.prototype.onWindowHide = function () {
            };
            CooperationEnd.prototype.setData = function () {
                this.m_text1.text = TEXT.CooperationEndTip1;
                this.m_text2.text = TEXT.CooperationEndTip2;
            };
            return CooperationEnd;
        }(Cooperation.CooperationEndStruct));
        Cooperation.CooperationEnd = CooperationEnd;
    })(Cooperation = fgui.Cooperation || (fgui.Cooperation = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=CooperationEnd.js.map