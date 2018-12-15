/////////////////////////////////////
// ihaiu.ExportProto生成
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
var Games;
(function (Games) {
    /**
     * 运营探班
     */
    var manageVisitHandler = /** @class */ (function (_super) {
        __extends(manageVisitHandler, _super);
        function manageVisitHandler() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.moduleName = Games.ProtoModuleNames.manageVisit;
            return _this;
        }
        /**
         * 开始探班
         */
        manageVisitHandler.prototype.StartVisit = function (msg) {
            if (Game.moduleModel.secretary.isAutoVisit) {
                Game.menu.close(Games.MenuId.Fans);
                var data = Game.moduleModel.visit.getVisitData();
                if (data.actorId > 0) {
                    Games.AvatarManager.autoActorToReception(data.actorId);
                }
            }
        };
        /**
         * 领取收益
         */
        manageVisitHandler.prototype.GetReward = function (msg) {
            Game.moduleModel.visit.isReward = true;
            if (Game.moduleModel.visit.rewardVisitId <= 0) {
                return;
            }
            var config = Game.config.visit.getConfig(Game.moduleModel.visit.rewardVisitId);
            if (!config) {
                return;
            }
            var items = Game.moduleModel.visit.resultRewards;
            var isAuto = Game.moduleModel.secretary.isAutoVisit;
            Game.system.getItemText(items, function () {
                Game.system.playEffects(items);
                var data = Game.moduleModel.visit.getVisitData();
                var fansnnum = data.nextFansNum;
                if (fansnnum < 1) {
                    return;
                }
                if (Game.moduleModel.secretary.isTempSecretary && Game.moduleModel.secretary.autoVisitNum <= 0 && Game.moduleModel.secretary.realAutoVisit) {
                    isAuto = false;
                    Game.moduleModel.secretary.isAutoVisit = false;
                    //免费次数已经用完
                    Game.system.confirmText(Game.config.msg.getTxtFormat(MsgKey.secretary_experience, Game.config.msg.getTxt(MsgKey.secretary_auto2)), Games.TEXT.SecretaryForeverAgent, null, function () {
                        Game.menu.open(Games.MenuId.Weal, 1);
                    }, function () {
                        Game.system.confirmText(format(Games.TEXT.VisitNextVisitActor, fansnnum), Games.TEXT.VisitNextFans, null, function () {
                            var enableOpen = Games.MenuValidateEnableOpen.getInstance().validate(Games.MenuId.Fans);
                            if (enableOpen) {
                                Game.menu.open(Games.MenuId.Fans);
                            }
                        });
                    }, Game.config.msg.getTxt(MsgKey.go_to_hire), Games.TEXT.ButtonCannel, false);
                }
                else {
                    if (isAuto) {
                        Game.system.toastText(Games.TEXT.ActorAutoVisit);
                        if (Game.moduleModel.actor.hasCanVisitActor) {
                            Game.protosender.manageVisit.StartVisit();
                        }
                        else {
                            Game.system.toastMsg(MsgKey.visit_noone);
                        }
                    }
                    else {
                        Game.system.confirmText(format(Games.TEXT.VisitNextVisitActor, fansnnum), Games.TEXT.VisitNextFans, null, function () {
                            var enableOpen = Games.MenuValidateEnableOpen.getInstance().validate(Games.MenuId.Fans);
                            if (enableOpen) {
                                Game.menu.open(Games.MenuId.Fans);
                            }
                        });
                    }
                }
            }, isAuto);
        };
        /**
         *  开始接待
         */
        manageVisitHandler.prototype.StartRece = function (msg) {
        };
        return manageVisitHandler;
    }(Games.ProtoHandler));
    Games.manageVisitHandler = manageVisitHandler;
})(Games || (Games = {}));
//# sourceMappingURL=manageVisitHandler.js.map