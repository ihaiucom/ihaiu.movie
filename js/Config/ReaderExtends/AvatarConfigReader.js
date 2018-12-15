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
    var AvatarConfigReader = /** @class */ (function (_super) {
        __extends(AvatarConfigReader, _super);
        function AvatarConfigReader() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.listBoxOfficeIcon = [6023, 6024, 6025, 6026, 6027, 6028];
            return _this;
        }
        AvatarConfigReader.prototype.GetAvatarInfo = function (id) {
            var avatarCfg = this.getConfig(id);
            var avatarInfo = new Games.AvatarInfo();
            avatarInfo.texturePath = avatarCfg.modelSkinUrl;
            avatarInfo.skeletonPath = avatarCfg.modelBoneUrl;
            avatarInfo.type = Games.AvatarType.Npc;
            return avatarInfo;
        };
        AvatarConfigReader.prototype.GetBodyIconUrl = function (avatarId) {
            var cfg = this.getConfig(avatarId);
            if (cfg) {
                return cfg.bodyIconUrl;
            }
            return "";
        };
        AvatarConfigReader.prototype.GetIconUrl = function (avatarId) {
            var cfg = this.getConfig(avatarId);
            if (cfg) {
                return cfg.iconUrl;
            }
            return "";
        };
        AvatarConfigReader.prototype.GetBoxOfficEvaluationIconUrl = function (index) {
            var avatarIcon = this.listBoxOfficeIcon[index];
            if (avatarIcon) {
                return Game.config.avatar.GetIconUrl(this.listBoxOfficeIcon[index]);
            }
            console.log("票房等级" + index + "没有数据");
            return "";
        };
        return AvatarConfigReader;
    }(configs.AvatarConfigReaderStruct));
    configs.AvatarConfigReader = AvatarConfigReader;
})(configs || (configs = {}));
//# sourceMappingURL=AvatarConfigReader.js.map