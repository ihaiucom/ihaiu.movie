var Games;
(function (Games) {
    var UnitModel = /** @class */ (function () {
        function UnitModel() {
            this.STAGE_OFFSET_ENTER = 180; //avatar进入
            this.STAGE_OFFSET_LEAVE = 50; //avatar离开
            /** 基础信息 */
            this.info = new AvatarInfo();
            /** 移动信息 */
            this.move = new MoveInfo();
            /** 坐标值 */
            this.x = 0;
            this.y = 0;
            /** 宽高 */
            this.width = 0;
            this.height = 0;
            /** 缩放比 */
            this.scaleFactor = 0.26;
            /** 当前播放动 */
            this.currentAnimId = 1002;
            /** 是否开启阴影 */
            this.isOpenShadow = false;
            /** 执行事件 */
            this.eventList = []; //事件列表
            this.performType = Games.PerformType.FreeWalk; //表演类型
            this.currEventId = 0; //当前事件Id
            this.info.recover();
            this.move.recover();
            this.roomInfo = null;
        }
        UnitModel.prototype.dispose = function () {
            this.info.recover();
            this.move.recover();
            this.roomInfo = null;
            this.bounds = null;
        };
        /** 基础信息 */
        UnitModel.prototype.setInfo = function (info) {
            this.info = info;
            this.currentAnimId = Game.config.action.getActionId(this.info.idleName);
        };
        Object.defineProperty(UnitModel.prototype, "roomInfo", {
            get: function () {
                return this.info.roomInfo;
            },
            /** 房间信息 */
            set: function (val) {
                this.info.roomInfo = val;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(UnitModel.prototype, "currentAnimName", {
            /** 设置当前动画名 */
            set: function (val) {
                this.currentAnimId = Game.config.action.getActionId(this.info.idleName);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(UnitModel.prototype, "boundWidth", {
            /**缩放后的宽高 */
            get: function () {
                return this.scaleFactor * this.width;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(UnitModel.prototype, "boundHeight", {
            get: function () {
                return this.scaleFactor * this.height;
            },
            enumerable: true,
            configurable: true
        });
        return UnitModel;
    }());
    Games.UnitModel = UnitModel;
    var AvatarType;
    (function (AvatarType) {
        AvatarType[AvatarType["None"] = 0] = "None";
        AvatarType[AvatarType["Npc"] = 1] = "Npc";
        AvatarType[AvatarType["Actor"] = 2] = "Actor";
        AvatarType[AvatarType["Assistant"] = 3] = "Assistant";
        AvatarType[AvatarType["Performer"] = 4] = "Performer";
    })(AvatarType = Games.AvatarType || (Games.AvatarType = {}));
    //======================
    // 基础数据
    //======================
    var AvatarInfo = /** @class */ (function () {
        function AvatarInfo() {
            this.uid = 0;
            this.id = 0;
            this.name = "";
            //加载完成时的初始动作[有两个Idle]
            this.idleName = "zhanli1";
            //朝向
            this.direction = Games.DirtionType.Right;
        }
        AvatarInfo.prototype.recover = function () {
            this.uid = 0;
            this.id = 0;
            this.type = AvatarType.None;
            this.roomInfo = null;
            this.idleName = "zhanli1";
            this.direction = Games.DirtionType.Right;
            this.texturePath = undefined;
            this.skeletonPath = undefined;
        };
        Object.defineProperty(AvatarInfo.prototype, "config", {
            get: function () {
                if (this._config == null) {
                    this._config = Game.config.actor.getConfig(this.id);
                }
                return this._config;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(AvatarInfo.prototype, "npcConfig", {
            get: function () {
                if (this._npcConfig == null) {
                    this._npcConfig = Game.config.npc.getConfig(this.id);
                }
                return this._npcConfig;
            },
            enumerable: true,
            configurable: true
        });
        AvatarInfo.creatByActor = function (actor) {
            var aInfo = new AvatarInfo();
            aInfo.id = actor.id;
            aInfo.name = actor.name;
            aInfo.type = AvatarType.Actor;
            var avatarCfg = Game.config.avatar.getConfig(actor.config.avatar);
            aInfo.texturePath = avatarCfg.modelSkinUrl;
            aInfo.skeletonPath = avatarCfg.modelBoneUrl;
            return aInfo;
        };
        //创建艺人
        AvatarInfo.creatByAvatarId = function (actorId) {
            var aInfo = new Games.AvatarInfo();
            aInfo.id = actorId;
            if (aInfo.config == null) {
                return null;
            }
            aInfo.name = aInfo.config.name;
            aInfo.type = AvatarType.Actor;
            var avatarCfg = Game.config.avatar.getConfig(aInfo.config.avatar);
            aInfo.texturePath = avatarCfg.modelSkinUrl;
            aInfo.skeletonPath = avatarCfg.modelBoneUrl;
            return aInfo;
        };
        AvatarInfo.creatAssistantById = function (actorId) {
            if (actorId === void 0) { actorId = 9998; }
            var aInfo = new Games.AvatarInfo();
            aInfo.id = actorId;
            if (aInfo.config == null) {
                return null;
            }
            aInfo.name = aInfo.config.name;
            aInfo.type = AvatarType.Assistant;
            var avatarCfg = Game.config.avatar.getConfig(aInfo.config.avatar);
            aInfo.texturePath = avatarCfg.modelSkinUrl;
            aInfo.skeletonPath = avatarCfg.modelBoneUrl;
            return aInfo;
        };
        //创建NPC
        AvatarInfo.creatByNpcId = function (npcId) {
            var aInfo = new AvatarInfo();
            aInfo.id = npcId;
            aInfo.name = aInfo.npcConfig.name;
            aInfo.type = AvatarType.Npc;
            var avatarCfg = Game.config.avatar.getConfig(aInfo.npcConfig.avatar);
            aInfo.texturePath = avatarCfg.modelSkinUrl;
            aInfo.skeletonPath = avatarCfg.modelBoneUrl;
            return aInfo;
        };
        return AvatarInfo;
    }());
    Games.AvatarInfo = AvatarInfo;
    //======================
    // 移动数据
    //======================
    var MoveInfo = /** @class */ (function () {
        function MoveInfo() {
            this.pointX = 0;
            //移动动作Id
            this.animId = 1004; //行走
            //移动结束动作名
            this.endAnimName = "zhanli1";
            //移动结束动作是否循环播放
            this.endAnimLoop = true;
            //是否被激活
            this.active = false;
            //是否移动结束
            this.isMoveEnd = false;
        }
        Object.defineProperty(MoveInfo.prototype, "run", {
            set: function (val) {
                this.animId = val ? 1005 : 1004;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(MoveInfo.prototype, "moveAnimId", {
            set: function (animId) {
                this.animId = animId;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(MoveInfo.prototype, "complete", {
            set: function (val) {
                this.isMoveEnd = val;
            },
            enumerable: true,
            configurable: true
        });
        MoveInfo.prototype.recover = function () {
            this.pointX = 0;
            this.animId = 1004; //行走
            this.endAnimName = "zhanli1";
            this.endAnimLoop = true;
            this.completeHandler = null;
            this.active = false;
            this.isMoveEnd = false;
        };
        return MoveInfo;
    }());
    Games.MoveInfo = MoveInfo;
})(Games || (Games = {}));
//# sourceMappingURL=UnitModel.js.map