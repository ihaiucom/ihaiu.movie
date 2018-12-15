/////////////////////////////////////
// ExportXlsx生成
// http://blog.ihaiu.com/tool-ExportXlsx
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
var configs;
(function (configs) {
    var ActorConfig = /** @class */ (function (_super) {
        __extends(ActorConfig, _super);
        function ActorConfig() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        Object.defineProperty(ActorConfig.prototype, "sexUrl", {
            /** */
            get: function () {
                if (this.sex == 1101) {
                    return "res/sprites/icon/nv_logo.png";
                }
                else if (this.sex == 1102) {
                    return "res/sprites/icon/nan_logo.png";
                }
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ActorConfig.prototype, "ID", {
            get: function () {
                return this.id;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ActorConfig.prototype, "yrName", {
            get: function () {
                return this.cn_name;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ActorConfig.prototype, "getSex", {
            get: function () {
                return this.sex;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ActorConfig.prototype, "getReqCountry", {
            get: function () {
                return this.country;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ActorConfig.prototype, "getReqShowType", {
            get: function () {
                return this.show_type;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ActorConfig.prototype, "getReqageType", {
            get: function () {
                return this.age_type;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ActorConfig.prototype, "getSpectacle", {
            get: function () {
                return this.spectacle;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ActorConfig.prototype, "getPerform", {
            get: function () {
                return this.perform;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ActorConfig.prototype, "getPlot", {
            get: function () {
                return this.plot;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ActorConfig.prototype, "getArt", {
            get: function () {
                return this.art;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ActorConfig.prototype, "getEntertainment", {
            get: function () {
                return this.entertainment;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ActorConfig.prototype, "getPayCost", {
            get: function () {
                return this.paycheck;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ActorConfig.prototype, "avatarConfig", {
            /** Avatar Config */
            get: function () {
                return Game.config.avatar.getConfig(this.avatar);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ActorConfig.prototype, "starProperty", {
            /**
             * 星属性
             */
            get: function () {
                if (this._starPropertyConfig == null) {
                    this._starPropertyConfig = Game.config.property.getConfig(this.star);
                }
                return this._starPropertyConfig;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ActorConfig.prototype, "starNum", {
            /**
             * 获取星级数量 star
             */
            get: function () {
                if (this._star == null) {
                    if (this.starProperty) {
                        this._star = parseInt(this.starProperty.field);
                    }
                    else {
                        this._star = 0;
                    }
                }
                return this._star;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ActorConfig.prototype, "starUrl", {
            /**
             * 星星Url
             */
            get: function () {
                if (isNullOrEmpty(this._starUrl)) {
                    this._starUrl = Game.config.avatar.getConfig(this.starProperty.icon).iconUrl;
                }
                return this._starUrl;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ActorConfig.prototype, "modelSkinUrl", {
            //获取模型Path
            get: function () {
                var avatarCfg = Game.config.avatar.getConfig(this.avatar);
                if (avatarCfg) {
                    return avatarCfg.modelSkinUrl;
                }
                return "";
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ActorConfig.prototype, "modelBoneUrl", {
            get: function () {
                var avatarCfg = Game.config.avatar.getConfig(this.avatar);
                if (avatarCfg) {
                    return avatarCfg.modelBoneUrl;
                }
                return "";
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ActorConfig.prototype, "bodyIconUrl", {
            get: function () {
                var avatarCfg = Game.config.avatar.getConfig(this.avatar);
                if (avatarCfg) {
                    return avatarCfg.bodyIconUrl;
                }
                return "";
            },
            enumerable: true,
            configurable: true
        });
        //是否是主属性id
        ActorConfig.prototype.isMainID = function (id) {
            return this.main_id == id;
        };
        return ActorConfig;
    }(configs.ActorConfigStruct));
    configs.ActorConfig = ActorConfig;
})(configs || (configs = {}));
//# sourceMappingURL=ActorConfig.js.map