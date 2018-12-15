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
    var ActorLoyaltyConfigReader = /** @class */ (function (_super) {
        __extends(ActorLoyaltyConfigReader, _super);
        function ActorLoyaltyConfigReader() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.acotrLoyaltyDict = new Dictionary();
            return _this;
        }
        ActorLoyaltyConfigReader.prototype.addConfig = function (cfg) {
            _super.prototype.addConfig.call(this, cfg);
            var actorId = this.getActorId(cfg.id);
            var lvs;
            if (this.acotrLoyaltyDict.hasKey(actorId) == false) {
                lvs = [];
                this.acotrLoyaltyDict.add(actorId, lvs);
            }
            else {
                lvs = this.acotrLoyaltyDict.getValue(actorId);
            }
            if (lvs.length == 0 || (lvs.length > 0 && lvs[lvs.length - 1] != cfg.max_lv)) {
                lvs.push(cfg.max_lv);
            }
        };
        /**
         *获取忠诚度id
         * @param id 艺人id
         * @param lv 等级
         */
        ActorLoyaltyConfigReader.prototype.getLoyaltyId = function (id, lv) {
            return id * 100 + lv;
        };
        /**
         *获取忠诚度id
         * @param id 艺人id
         * @param lv 等级
         */
        ActorLoyaltyConfigReader.prototype.getActorId = function (id) {
            return Math.floor(id / 100);
        };
        /**
         *获取忠诚度配置
         * @param id 艺人id
         * @param lv 等级
         */
        ActorLoyaltyConfigReader.prototype.getConfigByIdLv = function (id, lv) {
            var id = this.getLoyaltyId(id, lv);
            return this.getConfig(id);
        };
        //获取当前等级
        ActorLoyaltyConfigReader.prototype.getCurMaxLv = function (id, lv, realMaxLv) {
            var maxlv = 0;
            var lvs = this.acotrLoyaltyDict.getValue(id);
            if (lvs && lvs.length > 0) {
                for (var index = 0; index < lvs.length; index++) {
                    var element = lvs[index];
                    if (element > lv) {
                        maxlv = element;
                        break;
                    }
                    else if (element == lv) {
                        if (realMaxLv <= element) {
                            maxlv = element;
                            break;
                        }
                    }
                }
            }
            return maxlv;
        };
        //获取当前等级
        ActorLoyaltyConfigReader.prototype.getMaxLv = function (id, lv) {
            var maxlv = 0;
            var lvs = this.acotrLoyaltyDict.getValue(id);
            if (lvs && lvs.length > 0) {
                for (var index = 0; index < lvs.length; index++) {
                    var element = lvs[index];
                    if (element >= lv) {
                        maxlv = element;
                        break;
                    }
                }
            }
            return maxlv;
        };
        return ActorLoyaltyConfigReader;
    }(configs.ActorLoyaltyConfigReaderStruct));
    configs.ActorLoyaltyConfigReader = ActorLoyaltyConfigReader;
})(configs || (configs = {}));
//# sourceMappingURL=ActorLoyaltyConfigReader.js.map