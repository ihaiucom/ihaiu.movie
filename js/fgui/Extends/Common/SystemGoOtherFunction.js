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
        var OtherFunctionType = Games.OtherFunctionType;
        var SystemGoOtherFunction = /** @class */ (function (_super) {
            __extends(SystemGoOtherFunction, _super);
            function SystemGoOtherFunction() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            SystemGoOtherFunction.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                // this.m_closeBtn.onClick(this, this.onClickCloseBtn);
                this.m_closeBtn.visible = false;
                this.m_closeFullBtn.onClick(this, this.onClickFullCloseBtn);
                this.m_list.on(fairygui.Events.CLICK_ITEM, this, this.onClickItem);
            };
            SystemGoOtherFunction.prototype.onClickItem = function (item) {
                this.onClose();
                switch (item.type) {
                    case OtherFunctionType.ActorSkillExp:
                        var menuId = MenuId.ArtListExercise;
                        var menuConfig = Game.config.menu.getConfig(menuId);
                        var lv = Game.moduleModel.building.getRoomLevel(Games.RoomType.Training);
                        if (lv > 0) {
                            var enableOpen = Games.MenuValidateEnableOpen.getInstance().validate(menuId);
                            if (enableOpen) {
                                Game.menu.open(menuId);
                                return;
                            }
                        }
                        else {
                            //解锁提示
                            Game.system.toastMsg(MsgKey.actor_trainingroom);
                        }
                        break;
                    case OtherFunctionType.ActorStarCard:
                        this.onConfirm();
                        break;
                    default:
                        break;
                }
            };
            SystemGoOtherFunction.prototype.onClickCloseBtn = function () {
                this.onClose();
            };
            SystemGoOtherFunction.prototype.onClickFullCloseBtn = function () {
                this.onClose();
            };
            SystemGoOtherFunction.prototype.open = function (type, title, desc, confirmFunc) {
                this.type = type;
                this.confirmFunc = confirmFunc;
                this.m_list.removeChildrenToPool();
                var item = this.m_list.addItemFromPool();
                item.updateView(type);
                if (isNullOrEmpty(title)) {
                    this.m_title.text = TEXT.SystemGoOtherFunction_Title;
                }
                else {
                    //描述
                    this.m_title.text = title;
                }
                if (isNullOrEmpty(desc)) {
                    switch (this.type) {
                        case OtherFunctionType.ActorSkillExp:
                            this.m_des.text = TEXT.SystemGoOtherFunction_Desc_1;
                            break;
                        case OtherFunctionType.ActorStarCard:
                            this.m_des.text = TEXT.SystemGoOtherFunction_Desc_2;
                            break;
                        default:
                            break;
                    }
                }
                else {
                    this.m_des.text = desc;
                }
                //display
                Games.MenuLayer.showDialogModel();
                setScreenSize(this);
                centerScreen(this);
                Games.MenuLayer.dialog.addChild(this);
            };
            SystemGoOtherFunction.prototype.onConfirm = function () {
                if (this.confirmFunc) {
                    this.confirmFunc.apply(null);
                }
                this.onClose();
            };
            SystemGoOtherFunction.prototype.onClose = function () {
                Games.MenuLayer.hideDialogModel();
                this.removeFromParent();
            };
            return SystemGoOtherFunction;
        }(Common.SystemGoOtherFunctionStruct));
        Common.SystemGoOtherFunction = SystemGoOtherFunction;
    })(Common = fgui.Common || (fgui.Common = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=SystemGoOtherFunction.js.map