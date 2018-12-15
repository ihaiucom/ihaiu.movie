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
        var FunctionItem = /** @class */ (function (_super) {
            __extends(FunctionItem, _super);
            function FunctionItem() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            FunctionItem.prototype.updateView = function (type) {
                this.type = type;
                switch (type) {
                    case OtherFunctionType.ActorSkillExp: //技能经验获取
                        var menuCfg = Game.config.menu.getConfig(MenuId.ArtListExercise);
                        if (menuCfg) {
                            var avatarCfg = Game.config.avatar.getConfig(Number(menuCfg.icon));
                            if (avatarCfg) {
                                this.m_icon.icon = avatarCfg.iconUrl;
                            }
                        }
                        this.m_title.text = TEXT.SystemGoOtherFunction_Go_1;
                        break;
                    case OtherFunctionType.ActorStarCard: //星探卡
                        var itemConfig = Game.config.item.getConfig(5007);
                        if (itemConfig) {
                            this.m_icon.icon = itemConfig.iconUrl;
                            this.m_title.text = itemConfig.name;
                        }
                        break;
                    default:
                        break;
                }
            };
            return FunctionItem;
        }(Common.FunctionItemStruct));
        Common.FunctionItem = FunctionItem;
    })(Common = fgui.Common || (fgui.Common = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=FunctionItem.js.map