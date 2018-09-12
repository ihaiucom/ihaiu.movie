var AssetManager = Games.AssetManager;
var ConfigManager = configs.ConfigManager;
var ModelManager = Games.ModelManager;
var Handler = laya.utils.Handler;
var Loader = laya.net.Loader;
var TEXT = Games.TEXT;
var Skeleton = laya.ani.bone.Skeleton;
var Templet = laya.ani.bone.Templet;
var Texture = Laya.Texture;
var Sprite = laya.display.Sprite;
var Rectangle = laya.maths.Rectangle;
var Game = /** @class */ (function () {
    function Game() {
    }
    Object.defineProperty(Game, "protosender", {
        get: function () {
            if (!Game._protosender) {
                Game._protosender = new Games.ProtoSenderList();
                var server = Game.channel.serverItem;
                console.log("服务器：name=" + server.name + ", ip=" + server.ip + ", port=" + server.port + ", https=" + server.https);
                Game.installProto(server.ip, server.port, server.https);
            }
            return Game._protosender;
        },
        enumerable: true,
        configurable: true
    });
    // 初始化
    Game.install = function () {
        if (!Games.GameLaunch.isRunEnd)
            return;
        if (Game._isInstall)
            return;
        Game._isInstall = true;
        gameLaunchLoding.onLoadedAllScript();
        var stage = Laya.stage;
        var fstage = fairygui.GRoot.inst;
        Game.loader = Games.LoaderManager.getInstance();
        Game.installer.install();
    };
    // 初始化协议
    Game.installProto = function (ip, port, useHttps) {
        if (ip === void 0) { ip = "172.16.0.116"; }
        if (port === void 0) { port = 8360; }
        if (useHttps === void 0) { useHttps = false; }
        Game.protosender.install();
        Game.protohandler.install();
        Game.proto.install(ip, port, useHttps);
    };
    // 安装完成
    Game.onInstallComplete = function () {
        console.log("Game.onInstallComplete");
        Game.sound.install();
        Game.tick.install();
        Game.tickhandler.start();
        Game.menu.open(MenuId.Login);
        gameLaunchLoding.onEnd();
        // Game.menu.open(MenuId.Home);
        // GameBoone.templetPool.requrestItem("./res/spine/Male01/1001_Sven/1001_Sven.png",
        //     "./res/spine/Male01/1001_Sven/1001_Sven.sk",
        //     null, (tpl: Templet) => { console.log("成功 " + tpl) }, (error: string) => { console.error(error) });
        // GameBoone.templetPool.requrestItem("./res/spine/Male01/1001_Sven/1001_Sven.png",
        //     "./res/spine/Male01/1001_Sven/1001_Sven.sk",
        //     null, (tpl: Templet) => { console.log("成功 " + tpl) }, (error: string) => { console.error(error) });
        // 生成GlobalConfig.Key
        // Game.config.global.outKeyCode();
        // Game.config.msg.outKeyCode();
        // 全局参数配置获取
        // let val: number = GlobalConfig.getValue(GlobalConfigKey.KEY_1001);
        // let val1: number[] = GlobalConfig.getValue1(GlobalConfigKey.KEY_1001);
        // let val2: DTlValue2[] = GlobalConfig.getValue2(GlobalConfigKey.KEY_1001);
        // let val3: DTlValue3[] = GlobalConfig.getValue3(GlobalConfigKey.Gold_Convert_Count);
        //==================
        // 字符窜格式化
        //------------------
        // let str1 = "我是{0}, 年龄{1}";
        // let rst1 = str1.format("ZF", 18); // 对象方法方式；该方式,如果str1==undefine, null， 将会报错
        // let rst2 = format(str1, "静态方法", 18); // 静态方法方式
        // console.log(rst1);
        // console.log(rst2);
        // 播放声效        
        // Game.sound.playSound(SoundKey.MM17_Action);
        var test = Proto.API.test;
    };
    Game.test1 = function () {
    };
    Game.installer = new Games.GameInstaller();
    Game.menu = new Games.MenuManager();
    Game.guiRes = new Games.GuiResPackageConfigReader();
    Game.spriteRes = new Games.SpriteResPackageConfigReader();
    Game.system = new Games.SystemMessag;
    Game.guide = new Games.GuideManager();
    Game.guideUI = new Games.GuideWindow();
    //打字机效果
    Game.typeWrite = new Games.TypeWriteManager();
    Game.localStorage = Games.GameLocalStorage.Instance;
    Game.proto = new Games.ProtoManager();
    Game.protohandler = new Games.ProtoHandlerList();
    // 协议--事件--成功
    Game.protoOkEvent = new Emitter();
    // 协议--事件--失败
    Game.protoFailEvent = new Emitter();
    // 游戏--事件
    Game.event = new Emitter();
    // 游戏时间
    Game.time = new Games.GameTimeData;
    //Laya特效
    Game.Fx = new FxManager();
    Game.asset = new AssetManager();
    Game.config = new ConfigManager();
    Game.lang = LangManager.Instance;
    Game.moduleModel = new ModelManager();
    Game.sound = new Games.AudioManager();
    Game.tick = new Games.TickManager();
    Game.tickhandler = Games.TickHandlerManager.Instance;
    Game._isInstall = false;
    return Game;
}());
var User = new Games.UserData();
setTimeout(function () {
    Game.install();
}, 500);
//# sourceMappingURL=Game.js.map