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
    var SkillConfigReader = /** @class */ (function (_super) {
        __extends(SkillConfigReader, _super);
        function SkillConfigReader() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        SkillConfigReader.prototype.addConfig = function (config) {
            _super.prototype.addConfig.call(this, config);
            if (this.groups == null) {
                this.groups = new Dictionary();
            }
            var skills;
            if (this.groups.hasKey(config.group_id)) {
                skills = this.groups.getValue(config.group_id);
            }
            else {
                skills = new Dictionary();
                this.groups.add(config.group_id, skills);
            }
            skills.add(config.lv, config);
        };
        /**
         *获取技能信息 通过组id 等级
         * @param groupId 组id
         * @param lv  等级
         */
        SkillConfigReader.prototype.getConfigByGroupIdAndLv = function (groupId, lv) {
            var config;
            if (this.groups.hasKey(groupId)) {
                var skills = this.groups.getValue(groupId);
                config = skills.getValue(lv);
            }
            return config;
        };
        return SkillConfigReader;
    }(configs.SkillConfigReaderStruct));
    configs.SkillConfigReader = SkillConfigReader;
})(configs || (configs = {}));
//# sourceMappingURL=SkillConfigReader.js.map