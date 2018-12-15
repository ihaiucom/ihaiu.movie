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
        var CooperationApply = /** @class */ (function (_super) {
            __extends(CooperationApply, _super);
            function CooperationApply() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            CooperationApply.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_title.text = TEXT.CooperationApplyTitle;
                this.m_remind.text = TEXT.CooperationremindTip;
                this.m_refuseBtn.m_title.text = TEXT.CooperationrefuseBtn;
                this.m_receiveBtn.m_title.text = TEXT.CooperationreceiveBtn;
                // 关闭面板
                this.m_closeBtn.onClick(this, this.onClicClose);
                // 接受合作
                this.m_receiveBtn.onClick(this, this.onClickReceiveBtn);
                // 拒绝合作
                this.m_refuseBtn.onClick(this, this.onClickRefuseBtn);
            };
            // 拒绝合作
            CooperationApply.prototype.onClickRefuseBtn = function () {
                Game.moduleModel.cooperation.sendApprove(1, this.curData.entityId);
            };
            // 接受合作
            CooperationApply.prototype.onClickReceiveBtn = function () {
                Game.moduleModel.cooperation.sendApprove(0, this.curData.entityId);
            };
            // 关闭窗口
            CooperationApply.prototype.onClicClose = function () {
                this.moduleWindow.menuBack();
            };
            CooperationApply.prototype.onWindowShow = function () {
                this.setData();
            };
            CooperationApply.prototype.onWindowHide = function () {
            };
            CooperationApply.prototype.setData = function () {
                this.curData = null;
                if (Game.moduleModel.cooperation.cooperData && Game.moduleModel.cooperation.cooperData !== null && Game.moduleModel.cooperation.cooperData.appList.length > 0) {
                    this.curData = Game.moduleModel.cooperation.cooperData.appList[0];
                }
                if (this.curData !== null) {
                    // 图片赋值
                    this.m_icon.m_icon.icon = Game.config.headPortrait.GetPlayerIconUrl(Game.moduleModel.cooperation.partnerInfData.portrait, Game.moduleModel.cooperation.partnerInfData.sex);
                    this.m_name.text = Game.moduleModel.cooperation.partnerInfData.name;
                    this.m_msg.text = TEXT.CooperationApplyTip;
                }
            };
            return CooperationApply;
        }(Cooperation.CooperationApplyStruct));
        Cooperation.CooperationApply = CooperationApply;
    })(Cooperation = fgui.Cooperation || (fgui.Cooperation = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=CooperationApply.js.map