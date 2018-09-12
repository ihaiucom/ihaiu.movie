/////////////////////////////////////
// ihaiu.GenerateFguiResPackageConfig生成
// http://blog.ihaiu.com
/////////////////////////////////////
var Games;
(function (Games) {
    // =====================
    // fgui包资源配置列表
    // ---------------------
    var SpriteResPackageConfigReader = /** @class */ (function () {
        function SpriteResPackageConfigReader() {
            // 字典
            this.dict = new Dictionary();
        }
        // 添加配置
        SpriteResPackageConfigReader.prototype.addconfig = function (config) {
            this.dict.add(config.packageName, config);
        };
        // 获取配置
        SpriteResPackageConfigReader.prototype.getconfig = function (packageName) {
            return this.dict.getValue(packageName);
        };
        // 初始化
        SpriteResPackageConfigReader.prototype.install = function () {
            var config;
            config = new Games.GuiResPackageConfig();
            config.resDir = "fsprite";
            config.packageName = "ActivityIcon";
            config.resBin = "ActivityIcon.bin";
            config.resAtlas.push("ActivityIcon@atlas0.png");
            this.addconfig(config);
            config = new Games.GuiResPackageConfig();
            config.resDir = "fsprite";
            config.packageName = "ActorBodyIcon";
            config.resBin = "ActorBodyIcon.bin";
            config.resAtlas.push("ActorBodyIcon@atlas0.png");
            config.resAtlas.push("ActorBodyIcon@atlas0_1.png");
            config.resAtlas.push("ActorBodyIcon@atlas0_2.png");
            config.resAtlas.push("ActorBodyIcon@atlas0_3.png");
            config.resAtlas.push("ActorBodyIcon@atlas0_4.png");
            config.resAtlas.push("ActorBodyIcon@atlas0_5.png");
            this.addconfig(config);
            config = new Games.GuiResPackageConfig();
            config.resDir = "fsprite";
            config.packageName = "ActorHeadIcon";
            config.resBin = "ActorHeadIcon.bin";
            config.resAtlas.push("ActorHeadIcon@atlas0.png");
            this.addconfig(config);
            config = new Games.GuiResPackageConfig();
            config.resDir = "fsprite";
            config.packageName = "ActorPieceIcon";
            config.resBin = "ActorPieceIcon.bin";
            config.resAtlas.push("ActorPieceIcon@atlas0.png");
            this.addconfig(config);
            config = new Games.GuiResPackageConfig();
            config.resDir = "fsprite";
            config.packageName = "BlockIcon";
            config.resBin = "BlockIcon.bin";
            config.resAtlas.push("BlockIcon@atlas0.png");
            this.addconfig(config);
            config = new Games.GuiResPackageConfig();
            config.resDir = "fsprite";
            config.packageName = "Building";
            config.resBin = "Building.bin";
            config.resAtlas.push("Building@atlas0.png");
            config.resAtlas.push("Building@atlas0_1.png");
            this.addconfig(config);
            config = new Games.GuiResPackageConfig();
            config.resDir = "fsprite";
            config.packageName = "BuildingSmall";
            config.resBin = "BuildingSmall.bin";
            config.resAtlas.push("BuildingSmall@atlas0.png");
            this.addconfig(config);
            config = new Games.GuiResPackageConfig();
            config.resDir = "fsprite";
            config.packageName = "CinemaIcon";
            config.resBin = "CinemaIcon.bin";
            config.resAtlas.push("CinemaIcon@atlas0.png");
            this.addconfig(config);
            config = new Games.GuiResPackageConfig();
            config.resDir = "fsprite";
            config.packageName = "GeneralIcon";
            config.resBin = "GeneralIcon.bin";
            config.resAtlas.push("GeneralIcon@atlas0.png");
            this.addconfig(config);
            config = new Games.GuiResPackageConfig();
            config.resDir = "fsprite";
            config.packageName = "Icon_En";
            config.resBin = "Icon_En.bin";
            config.resAtlas.push("Icon_En@atlas0.png");
            this.addconfig(config);
            config = new Games.GuiResPackageConfig();
            config.resDir = "fsprite";
            config.packageName = "Icon_ZH_CN";
            config.resBin = "Icon_ZH_CN.bin";
            config.resAtlas.push("Icon_ZH_CN@atlas0.png");
            this.addconfig(config);
            config = new Games.GuiResPackageConfig();
            config.resDir = "fsprite";
            config.packageName = "ItemIcon";
            config.resBin = "ItemIcon.bin";
            config.resAtlas.push("ItemIcon@atlas0.png");
            this.addconfig(config);
            config = new Games.GuiResPackageConfig();
            config.resDir = "fsprite";
            config.packageName = "MeetingIcon";
            config.resBin = "MeetingIcon.bin";
            config.resAtlas.push("MeetingIcon@atlas0.png");
            this.addconfig(config);
            config = new Games.GuiResPackageConfig();
            config.resDir = "fsprite";
            config.packageName = "MenuIcon";
            config.resBin = "MenuIcon.bin";
            config.resAtlas.push("MenuIcon@atlas0.png");
            this.addconfig(config);
            config = new Games.GuiResPackageConfig();
            config.resDir = "fsprite";
            config.packageName = "NPCHeadIcon";
            config.resBin = "NPCHeadIcon.bin";
            config.resAtlas.push("NPCHeadIcon@atlas0.png");
            this.addconfig(config);
            config = new Games.GuiResPackageConfig();
            config.resDir = "fsprite";
            config.packageName = "PlayerBodyIcon";
            config.resBin = "PlayerBodyIcon.bin";
            config.resAtlas.push("PlayerBodyIcon@atlas0.png");
            this.addconfig(config);
            config = new Games.GuiResPackageConfig();
            config.resDir = "fsprite";
            config.packageName = "PlayerHeadIcon";
            config.resBin = "PlayerHeadIcon.bin";
            config.resAtlas.push("PlayerHeadIcon@atlas0.png");
            this.addconfig(config);
            config = new Games.GuiResPackageConfig();
            config.resDir = "fsprite";
            config.packageName = "PopularityIcon";
            config.resBin = "PopularityIcon.bin";
            config.resAtlas.push("PopularityIcon@atlas0.png");
            this.addconfig(config);
            config = new Games.GuiResPackageConfig();
            config.resDir = "fsprite";
            config.packageName = "SettingIcon";
            config.resBin = "SettingIcon.bin";
            config.resAtlas.push("SettingIcon@atlas0.png");
            this.addconfig(config);
            config = new Games.GuiResPackageConfig();
            config.resDir = "fsprite";
            config.packageName = "ShootIcon";
            config.resBin = "ShootIcon.bin";
            config.resAtlas.push("ShootIcon@atlas0.png");
            this.addconfig(config);
            config = new Games.GuiResPackageConfig();
            config.resDir = "fsprite";
            config.packageName = "SkillIcon";
            config.resBin = "SkillIcon.bin";
            config.resAtlas.push("SkillIcon@atlas0.png");
            this.addconfig(config);
            config = new Games.GuiResPackageConfig();
            config.resDir = "fsprite";
            config.packageName = "StoryIcon";
            config.resBin = "StoryIcon.bin";
            config.resAtlas.push("StoryIcon@atlas0.png");
            config.resAtlas.push("StoryIcon@atlas0_1.png");
            config.resAtlas.push("StoryIcon@atlas0_2.png");
            config.resAtlas.push("StoryIcon@atlas0_3.png");
            this.addconfig(config);
            config = new Games.GuiResPackageConfig();
            config.resDir = "fsprite";
            config.packageName = "StoryStackIcon";
            config.resBin = "StoryStackIcon.bin";
            config.resAtlas.push("StoryStackIcon@atlas0.png");
            this.addconfig(config);
        };
        return SpriteResPackageConfigReader;
    }());
    Games.SpriteResPackageConfigReader = SpriteResPackageConfigReader;
})(Games || (Games = {}));
//# sourceMappingURL=SpriteResPackageConfigReader.js.map