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
    var Manage;
    (function (Manage) {
        var VisitUI = /** @class */ (function (_super) {
            __extends(VisitUI, _super);
            function VisitUI() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            VisitUI.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_okBtn.text = Games.TEXT.VisitStartBtnOk;
            };
            VisitUI.prototype.onWindowHide = function () {
                this.m_okBtn.offClick(this, this.onClickOkBtn);
                Game.protoOkEvent.remove(ProtoEventKey.ManageVisitData, this.updateView, this);
                Game.protoOkEvent.remove(ProtoEventKey.manageVisit_GetReward, this.closeMenuWindow, this);
                Game.event.remove(GameEventKey.GameEventKey_UpdateVisitActor, this.updateVisitView, this);
                Game.event.dispatch(GameEventKey.GameEventKey_EnabledScrollMain, true);
            };
            VisitUI.prototype.onWindowShow = function () {
                this.m_okBtn.onClick(this, this.onClickOkBtn);
                Game.protoOkEvent.add(ProtoEventKey.ManageVisitData, this.updateView, this);
                Game.protoOkEvent.add(ProtoEventKey.manageVisit_GetReward, this.closeMenuWindow, this);
                Game.event.add(GameEventKey.GameEventKey_UpdateVisitActor, this.updateVisitView, this);
                Game.event.dispatch(GameEventKey.GameEventKey_ScrollMainRoom, [Games.RoomType.Reception]);
                Game.event.dispatch(GameEventKey.GameEventKey_EnabledScrollMain, false);
                this.updateView();
            };
            VisitUI.prototype.closeMenuWindow = function () {
                this.onClickOkBtn();
            };
            //更新一下界面
            VisitUI.prototype.updateView = function () {
                var visitData = Game.moduleModel.visit.getVisitData();
                if (visitData) {
                    //探班数量
                    var nextFans = visitData.nextFansNum;
                    //待接见粉丝数量
                    this.m_nextFans.text = format(Games.TEXT.VisitNextFansNum, nextFans, visitData.lineLimit);
                    ;
                    if (visitData.actorId > 0) {
                        //见艺人
                        this.m_dialog.m_title.text = Games.TEXT.VisitFansTomeetActor;
                        this.m_dialog.m_name.text = Game.moduleModel.actor.getActor(visitData.actorId).name;
                    }
                    //
                    this.m_icon.icon = Game.config.avatar.GetBodyIconUrl(9999);
                }
            };
            VisitUI.prototype.updateVisitView = function () {
                this.onClickOkBtn();
            };
            //点击确定按钮
            VisitUI.prototype.onClickOkBtn = function () {
                this.moduleWindow.menuClose();
            };
            return VisitUI;
        }(Manage.VisitUIStruct));
        Manage.VisitUI = VisitUI;
    })(Manage = fgui.Manage || (fgui.Manage = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=VisitUI.js.map