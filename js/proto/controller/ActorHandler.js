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
     *艺人接口
     */
    var ActorHandler = /** @class */ (function (_super) {
        __extends(ActorHandler, _super);
        function ActorHandler() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.moduleName = Games.ProtoModuleNames.Actor;
            return _this;
        }
        /**
         *招募艺人
         */
        ActorHandler.prototype.RecruitActor = function (msg) {
            if (msg.result == 0) {
                var data = Game.moduleModel.actor.getActor(msg.actorId);
                if (data) {
                    Game.menu.open(Games.MenuId.ArtistScoutSuccess, data, msg.isNewActor == false);
                    // 埋点 星探招募
                    Games.Static.Instance.onUserorbit("star", "starGet&" + data.star + "&" + data.id, "get");
                    Games.Static.Instance.onUpgrdae("starUnlock", data.id.toString(), "", "unlock", "");
                }
            }
            Game.moduleModel.actor.isRecruiting = false;
        };
        /**
         *雪藏艺人
         */
        ActorHandler.prototype.hideActor = function (msg) {
        };
        /**
         *增加艺人槽位
         */
        ActorHandler.prototype.AddActorSlot = function (msg) {
        };
        /**
         * 升级艺人
         *@param actorId
         */
        ActorHandler.prototype.upgradeActor = function (msg) {
            Game.moduleModel.task.clientUpdateMainTaskProgress(Games.MainTaskRequireType.RequireType_3_UpgradeActor);
        };
        /**
         *赠送艺人资产
         */
        ActorHandler.prototype.giveActorAssets = function (msg) {
        };
        /**
         *艺人技能升级
         */
        ActorHandler.prototype.upgradeActorSkill = function (msg) {
        };
        /**
         * 艺人培养
         * @param msg
         */
        ActorHandler.prototype.ActorTrain = function (msg) {
            if (msg.result == 0) {
                Game.menu.open(Games.MenuId.ArtistTrainResult, msg.uuid, msg.attrChangeList, msg.trainType);
            }
        };
        /**
         * 查探艺人
         */
        ActorHandler.prototype.NoseInfoActor = function (msg) {
            // 埋点 星探探索
            Games.Static.Instance.onUserorbit("star", "starFind", "find");
        };
        /**
         * 雪藏艺人
         */
        ActorHandler.prototype.HideActor = function (msg) {
        };
        /**
         * 艺人升级
         */
        ActorHandler.prototype.UpgradeActor = function (msg) {
        };
        /**
         * 赠送艺人资产
         */
        ActorHandler.prototype.GiveActorAssets = function (msg) {
        };
        /**
         * 艺人技能升级
         */
        ActorHandler.prototype.UpgradeActorSkill = function (msg) {
        };
        /**
         * 艺人改名
         */
        ActorHandler.prototype.ActorChangeName = function (msg) {
        };
        /**
         *  艺人训练开始
         */
        ActorHandler.prototype.ActorExerciseStart = function (msg) {
        };
        /**
         *  艺人结束训练
         */
        ActorHandler.prototype.ActorExerciseReward = function (msg) {
        };
        /**
         *  增加训练队列
         */
        ActorHandler.prototype.ActorExerciseAdd = function (msg) {
        };
        /**
         *  赠送忠诚卡
         */
        ActorHandler.prototype.GiveLoyaltyCard = function (msg) {
        };
        /**
         *  艺人助理升级
         */
        ActorHandler.prototype.AssistantUpLv = function (msg) {
            var data = Game.moduleModel.actor.getActorByUUid(msg.uuid);
            if (data && data.assitantList[msg.id - 1].level == 1) {
                var lesson = data.assitantList[msg.id - 1];
                if (lesson && lesson.config) {
                    Game.system.openUnlockLessonFunc(lesson.iconUrl, lesson.config.name);
                }
            }
        };
        return ActorHandler;
    }(Games.ProtoHandler));
    Games.ActorHandler = ActorHandler;
})(Games || (Games = {}));
//# sourceMappingURL=ActorHandler.js.map