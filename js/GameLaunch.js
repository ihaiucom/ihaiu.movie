var Games;
(function (Games) {
    var GameLaunch = /** @class */ (function () {
        function GameLaunch() {
        }
        GameLaunch.prototype.install = function () {
            var _this = this;
            // Laya.init(ScreenSetting.developWidth, ScreenSetting.developHeight, Laya.CanvasMeshRender);
            Laya.init(ScreenSetting.developWidth, ScreenSetting.developHeight, Laya.WebGL);
            // 初始化桥接
            Games.GameBridgerManager.Instance.init();
            // 设置	 gameApplication
            if (BrowserDetect.isCrosswalk) {
                window["gameApplication"] = Games.GameBridgerManager.Instance.applicationBridger;
            }
            else {
                var gameApplication = new GameApplicationConch(window["gameApplication"]);
                window["gameApplication"] = gameApplication;
            }
            if (BrowserDetect.isApp) {
                if (BrowserDetect.isIphoneX) {
                    // iPhone X适配
                    Laya.stage["__offestY"] = 90;
                    Laya.stage["__screenHeightSub"] = Laya.stage["__offestY"] + 68;
                }
            }
            // 状态显示
            if (BrowserDetect.isShowState)
                laya.utils.Stat.show(0, 0);
            //设置适配模式
            Laya.stage.scaleMode = BrowserDetect.isMobile ? Laya.Stage.SCALE_FIXED_AUTO : Laya.Stage.SCALE_SHOWALL;
            Laya.stage.alignH = "center";
            Laya.stage.alignV = "top";
            if (!BrowserDetect.isAndroid) {
                Laya.stage.frameRate = Laya.Stage.FRAME_SLOW;
            }
            // 是否开启多点触控
            Laya.MouseManager.multiTouchEnabled = false;
            if (LangManager.Instance.lang == LangType.zh_cn) {
                LoadingStateTxt = LoadingStateTxt_ZH_Cn;
            }
            gameLaunchLoding.setTips(LoadingStateTxt.tips);
            // 初始化UI层级容器
            Games.MenuLayer.install();
            Games.ChannelManager.getInstance().requestServerList(null, null, 
            // onSuccess
            function () {
                _this.loadVersion();
            }, 
            // onFaile    
            function () {
                _this.loadVersion();
            });
        };
        // 加载版本信息		
        GameLaunch.prototype.loadVersion = function () {
            if (BrowserDetect.isUseVersion) {
                console.log("loadVersion:" + BrowserDetect.versionUrl);
                //设置版本控制类型为使用文件名映射的方式
                Laya.ResourceVersion.type = Laya.ResourceVersion.FILENAME_VERSION;
                //加载版本信息文件
                Laya.ResourceVersion.enable(BrowserDetect.versionUrl + "?t=" + new Date().getTime(), Laya.Handler.create(this, this.onLoadedVersion));
            }
            else {
                this.installSystem();
            }
        };
        GameLaunch.prototype.onLoadedVersion = function () {
            // new ZFTests.TestMemory();
            this.installSystem();
        };
        // 初始化系统
        GameLaunch.prototype.installSystem = function () {
            // 设置fgui文件后缀
            fairygui.UIConfig["packageFileExtension"] = Games.GuiSetting.packageFileExtension;
            // 设置按钮声音
            fairygui.UIConfig.buttonSound = SoundKey.getUrl(SoundKey.MM01_Button);
            // 绑定组件
            fgui.System.SystemBinder.bindAll();
            // 注册Loader类
            fairygui.UIObjectFactory.setLoaderExtension(FGLoader);
            //设置字体
            // switch (LangManager.Instance.lang)
            // {
            //     case LangType.zh_cn:
            //         fairygui.UIConfig.defaultFont = "黑体";
            //         break;
            //     default:
            //         fairygui.UIConfig.defaultFont = "Arial";
            //         break;
            // }
            // fairygui.UIConfig.defaultFont = BrowserDetect.isApp ? "HYZhengYuan-65W" : "HYZhengYuan";
            fairygui.UIConfig.defaultFont = "HYZhengYuan-65W";
            window["__isCnLang"] = LangManager.Instance.lang == LangType.zh_cn;
            // 加载系统UI
            Laya.loader.load([
                { url: "res/fgui/System.bin", type: Laya.Loader.BUFFER },
                { url: "res/fgui/System_atlas0.png", type: Laya.Loader.IMAGE },
                { url: "res/fgui/System_atlas_5sasa.png", type: Laya.Loader.IMAGE },
            ], Laya.Handler.create(this, this.onLoadedSystem));
        };
        // 加载完系统UI
        GameLaunch.prototype.onLoadedSystem = function () {
            // console.log(document.body.textContent.replace("<", " ").replace(">", " "));
            // alert("onLoadedSystem");
            Games.GuiSetting.addPackage("res/fgui/System");
            // 初始化转圈
            fairygui.UIConfig.globalModalWaiting = fairygui.UIPackage.getItemURL("System", "GlobalModalWaiting");
            fairygui.UIConfig.windowModalWaiting = fairygui.UIPackage.getItemURL("System", "WindowModalWaiting");
            Games.LoaderManager.instance = Games.LoaderManager.getInstance();
            Games.LoaderManager.instance.install();
            Games.LoaderManager.instance.open(Games.LoaderId.Launch);
            gameLaunchLoding.onLoadedLaunch();
            // 创建GM按钮
            var gm = fgui.System.GMLanuchButton.createInstance();
            gm.draggable = true;
            gm.dragBounds = new laya.maths.Rectangle(-50, -50, Laya.stage.width + 100, Laya.stage.height + 100);
            gm.visible = false;
            window["gmButton"] = gm;
            Games.MenuLayer.floatMsg.addChild(gm);
            if (BrowserDetect.enableGM) {
                gm.visible = true;
            }
            GameVersions.Manager.Instance.init();
            var launchImg = document.getElementById("launch");
            if (launchImg) {
                launchImg.remove();
            }
            var fontText = document.getElementById("fontText");
            if (fontText) {
                fontText.remove();
            }
        };
        GameLaunch.isRunEnd = false;
        return GameLaunch;
    }());
    Games.GameLaunch = GameLaunch;
})(Games || (Games = {}));
var BrowserDetect = new BrowserDetectConfig();
var gameDeviceConfig;
var ScreenSetting;
var isStartGamed = false;
function StartGame() {
    if (isStartGamed)
        return;
    isStartGamed = true;
    gameDeviceConfig = new GameDeviceConfig();
    ScreenSetting = new ScreenSettingConfig();
    gameDeviceConfig.init();
    new Games.GameLaunch().install();
}
if (!BrowserDetect.isCrosswalk) {
    StartGame();
}
window.onload = function onWindowLoad() {
    window["__isloaded"] = true;
    if (window["Game"]) {
        Game.install();
    }
};
//# sourceMappingURL=GameLaunch.js.map