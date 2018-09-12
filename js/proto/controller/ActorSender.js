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
    var ActorSender = /** @class */ (function (_super) {
        __extends(ActorSender, _super);
        function ActorSender() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.moduleName = Games.ProtoModuleNames.Actor;
            return _this;
        }
        /**
         *查探艺人
         * @param isUseCard 是否使用星探卡
         */
        ActorSender.prototype.noseInfoActor = function (isUseCard) {
            var req = new Proto.API.Actor.NoseInfoActorRequest();
            req.isUseCard = isUseCard;
            this.send(req);
        };
        /**
         *招募艺人
         * @param actorId 艺人ID
         */
        ActorSender.prototype.recruitActor = function (actorId) {
            var req = new Proto.API.Actor.RecruitActorRequest();
            req.actorId = actorId;
            this.send(req);
        };
        /**
         *雪藏艺人
         * @param actorId 艺人id
         * @param isHide 是否雪藏
         */
        ActorSender.prototype.hideActor = function (uuid, isHide) {
            var req = new Proto.API.Actor.HideActorRequest();
            req.uuid = uuid;
            req.isHide = isHide;
            this.send(req);
        };
        /**
         *增加艺人槽位
         */
        ActorSender.prototype.addActorSlot = function () {
            var req = new Proto.API.Actor.AddActorSlotRequest();
            this.send(req);
        };
        /**
         * 升级艺人
         *@param actorId
         */
        ActorSender.prototype.upgradeActor = function (uuid) {
            var req = new Proto.API.Actor.UpgradeActorRequest();
            req.uuid = uuid;
            this.send(req);
        };
        /**
         *赠送艺人资产
         * @param actorId 艺人ID
         * @param giveType 赠送类型
         * @param giveLevel 赠送等级
         * @param giveNum 赠送数量
         */
        ActorSender.prototype.giveActorAssets = function (uuid, giveType, giveLevel, giveNum) {
            var req = new Proto.API.Actor.GiveActorAssetsRequest();
            req.uuid = uuid;
            req.giveLevel = giveLevel;
            req.giveNum = giveNum;
            req.giveType = giveType;
            this.send(req);
        };
        /**
         *艺人技能升级
         * @param actorId 艺人ID
         * @param skillId 技能ID
         */
        ActorSender.prototype.upgradeActorSkill = function (uuid, skillId) {
            var req = new Proto.API.Actor.UpgradeActorSkillRequest();
            req.uuid = uuid;
            req.skillId = skillId;
            this.send(req);
        };
        /**
         * @param actorId 艺人id
         * @param name 名字
         */
        ActorSender.prototype.actorChangeName = function (uuid, name) {
            var req = new Proto.API.Actor.ActorChangeNameRequest();
            req.uuid = uuid;
            req.name = name;
            this.send(req);
        };
        /**
         * 艺人培养
         * @param actorId
         */
        ActorSender.prototype.actorTrain = function (uuid, trainType, useDiamond) {
            var req = new Proto.API.Actor.ActorTrainRequest();
            req.uuid = uuid;
            req.trainType = trainType;
            req.useDiamond = useDiamond;
            this.send(req);
        };
        /**
         * 查探艺人
         * @param isUseCard  是否使用星探卡，强制查探
         */
        ActorSender.prototype.NoseInfoActor = function (isUseCard) {
            var req = new Proto.API.Actor.NoseInfoActorRequest();
            req.isUseCard = isUseCard;
            this.send(req);
        };
        /**
         * 招募艺人
         * @param actorId  艺人ID
         */
        ActorSender.prototype.RecruitActor = function (actorId) {
            var req = new Proto.API.Actor.RecruitActorRequest();
            req.actorId = actorId;
            this.send(req);
        };
        /**
         * 雪藏艺人
         * @param uuid  艺人ID
         * @param isHide  是否雪藏艺人，true雪藏，false取消雪藏
         */
        ActorSender.prototype.HideActor = function (uuid, isHide) {
            var req = new Proto.API.Actor.HideActorRequest();
            req.uuid = uuid;
            req.isHide = isHide;
            this.send(req);
        };
        /**
         * 增加艺人槽位
         */
        ActorSender.prototype.AddActorSlot = function () {
            var req = new Proto.API.Actor.AddActorSlotRequest();
            this.send(req);
        };
        /**
         * 艺人升级
         * @param uuid  艺人ID
         */
        ActorSender.prototype.UpgradeActor = function (uuid) {
            var req = new Proto.API.Actor.UpgradeActorRequest();
            req.uuid = uuid;
            this.send(req);
        };
        /**
         * 赠送艺人资产
         * @param uuid  艺人ID
         * @param giveType  赠送类型
         * @param giveLevel  赠送等级
         * @param giveNum  赠送数量
         */
        ActorSender.prototype.GiveActorAssets = function (uuid, giveType, giveLevel, giveNum) {
            var req = new Proto.API.Actor.GiveActorAssetsRequest();
            req.uuid = uuid;
            req.giveType = giveType;
            req.giveLevel = giveLevel;
            req.giveNum = giveNum;
            this.send(req);
        };
        /**
         * 艺人技能升级
         * @param uuid  艺人ID
         * @param skillId  技能ID
         */
        ActorSender.prototype.UpgradeActorSkill = function (uuid, skillId) {
            var req = new Proto.API.Actor.UpgradeActorSkillRequest();
            req.uuid = uuid;
            req.skillId = skillId;
            this.send(req);
        };
        /**
         *  艺人培养
         * @param uuid   艺人ID
         * @param trainType   培养类型
         * @param useDiamond   使用钻石
         */
        ActorSender.prototype.ActorTrain = function (uuid, trainType, useDiamond) {
            var req = new Proto.API.Actor.ActorTrainRequest();
            req.uuid = uuid;
            req.trainType = trainType;
            req.useDiamond = useDiamond;
            this.send(req);
        };
        /**
         * 艺人改名
         * @param uuid  艺人ID
         * @param name  艺人名字
         */
        ActorSender.prototype.ActorChangeName = function (uuid, name) {
            var req = new Proto.API.Actor.ActorChangeNameRequest();
            req.uuid = uuid;
            req.name = name;
            this.send(req);
        };
        /**
         *  艺人训练开始
         * @param aId   艺人ID
         * @param eId   训练队列id
         */
        ActorSender.prototype.ActorExerciseStart = function (aId, eId) {
            var req = new Proto.API.Actor.ActorExerciseStartRequest();
            req.aId = aId;
            req.eId = eId;
            this.send(req);
        };
        /**
         *  艺人结束训练
         * @param eId   训练队列id
         * @param useMoney   是否使用钻石
         */
        ActorSender.prototype.ActorExerciseReward = function (eId, useMoney) {
            var req = new Proto.API.Actor.ActorExerciseRewardRequest();
            req.eId = eId;
            req.useMoney = useMoney;
            this.send(req);
        };
        /**
         *  增加训练队列
         */
        ActorSender.prototype.ActorExerciseAdd = function () {
            var req = new Proto.API.Actor.ActorExerciseAddRequest();
            this.send(req);
        };
        /**
         *  赠送忠诚卡
         * @param uuid   艺人ID
         * @param giveType   赠送类型
         * @param num   赠送忠诚卡数量
         */
        ActorSender.prototype.GiveLoyaltyCard = function (uuid, giveType, num) {
            var req = new Proto.API.Actor.GiveLoyaltyCardRequest();
            req.uuid = uuid;
            req.giveType = giveType;
            req.num = num;
            this.send(req);
        };
        return ActorSender;
    }(Games.ProtoSender));
    Games.ActorSender = ActorSender;
})(Games || (Games = {}));
//# sourceMappingURL=ActorSender.js.map