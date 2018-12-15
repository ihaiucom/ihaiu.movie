var Games;
(function (Games) {
    // 游戏初始化
    var GameInstaller = /** @class */ (function () {
        function GameInstaller() {
            //============ 加载字体 ======================
            this._fontNum = 0;
            this._fontTotal = 1;
        }
        // 初始化
        GameInstaller.prototype.install = function () {
            // 初始化UI层级容器
            // MenuLayer.install();
            // 初始化UI窗口配置
            Games.MenuWindows.install();
            // 初始化 fgui资源列表
            Game.guiRes.install();
            // 初始化 fsprite资源列表
            Game.spriteRes.install();
            this.installSystem();
        };
        // 初始化系统
        GameInstaller.prototype.installSystem = function () {
            // 设置fgui文件后缀
            fairygui.UIConfig["packageFileExtension"] = Games.GuiSetting.packageFileExtension;
            // 设置按钮声音
            fairygui.UIConfig.buttonSound = SoundKey.getUrl(SoundKey.MM01_Button);
            // 绑定组件
            fguiBinderAll();
            if (BrowserDetect.isConch) {
                this.loadFonts();
            }
            else {
                // 加载配置            
                this.loadConfig();
            }
        };
        GameInstaller.prototype.loadFonts = function () {
            // alert("loadFonts LangManager.Instance.lang=" + LangManager.Instance.lang);
            // alert("loadFonts GameLocalStorage.Instance.fontSetting=" + GameLocalStorage.Instance.fontSetting);
            Laya.loader.load("font/ArialInput.ttf", Laya.Handler.create(this, this.onLoadFont, ["font/ArialInput.ttf", "ArialInput"]), null, Loader.BUFFER);
            Laya.loader.load("font/Content.ttf", Laya.Handler.create(this, this.onLoadFont, ["font/Content.ttf", "HYZhengYuan-65W"]), null, Loader.BUFFER);
            if (LangManager.Instance.lang == LangType.zh_cn) {
                Laya.loader.load("font/TitleEn.ttf", Laya.Handler.create(this, this.onLoadFont, ["font/TitleEn.ttf", "HYZhengYuan-95W"]), null, Loader.BUFFER);
            }
            else {
                Laya.loader.load("font/TitleCn.ttf", Laya.Handler.create(this, this.onLoadFont, ["font/TitleCn.ttf", "HYZhengYuan-95W"]), null, Loader.BUFFER);
            }
            // if (LangManager.Instance.lang == LangType.zh_cn)
            // {
            //     if (GameLocalStorage.Instance.fontSetting == LangType.zh_cn)
            //     {
            //         // 加载配置            
            //         this.loadConfig();
            //     }
            //     else
            //     {
            //         Laya.loader.load("font/fzctht.ttf", Laya.Handler.create(this, this.onLoadFont, ["font/fzctht.ttf", "Arial"]), null, Loader.BUFFER);
            //     }
            // }
            // else
            // {
            //     if (!GameLocalStorage.Instance.fontSetting || GameLocalStorage.Instance.fontSetting != LangType.zh_cn)
            //     {
            //         // 加载配置            
            //         this.loadConfig();
            //     }
            //     else
            //     {
            //         Laya.loader.load("font/fzzyjt.ttf", Laya.Handler.create(this, this.onLoadFont, ["font/fzzyjt.ttf", "Arial"]), null, Loader.BUFFER);
            //     }
            // }
        };
        GameInstaller.prototype.onLoadFont = function (path, name) {
            // alert("onLoadFont path=" + path + ",  name" + name);
            var buff = Laya.loader.getRes(path);
            console.log("onLoadFont path=" + path + ",  name=" + name + ",  buff=" + buff);
            if (buff) {
                // alert("setFontFaceFromBuffer");
                window["conch"].setFontFaceFromBuffer(name, buff);
            }
            this._fontNum++;
            if (this._fontNum >= this._fontTotal) {
                // 加载配置            
                this.loadConfig();
            }
        };
        //============ 加载配置 ======================
        GameInstaller.prototype.loadConfig = function () {
            // Game.loader.setProgress(0);
            // Game.loader.setMax(1);
            Game.config.configLoader = Game.asset;
            Game.config.sLoaded.add(this.onLoadedConfig, this);
            Game.config.initList();
            Game.config.loadAll();
        };
        // 加载配置完成
        GameInstaller.prototype.onLoadedConfig = function () {
            console.log("\u914D\u7F6E \u52A0\u8F7D\u5B8C\u6210\u6240\u6709");
            this.loadLangConfig();
        };
        //============ 加载多语言配置 ======================
        GameInstaller.prototype.loadLangConfig = function () {
            Game.lang.current.configLoader = Game.asset;
            Game.lang.current.sLoaded.add(this.onLoadedLangConfig, this);
            Game.lang.current.initList();
            Game.lang.current.loadAll();
        };
        // 加载多语言配置完成
        GameInstaller.prototype.onLoadedLangConfig = function () {
            console.log("\u591A\u8BED\u8A00\u914D\u7F6E \u52A0\u8F7D\u5B8C\u6210\u6240\u6709");
            // 初始化数据模型
            Game.moduleModel.install();
            // 加载资源
            this.loadRes();
        };
        //============ 加载资源 ======================
        GameInstaller.prototype.loadRes = function () {
            var preload = new Games.GamePreload();
            preload.begin(this, this.onLoadRes);
        };
        GameInstaller.prototype.onLoadRes = function () {
            // 初始化转圈
            fairygui.UIConfig.globalModalWaiting = fairygui.UIPackage.getItemURL("System", "GlobalModalWaiting");
            fairygui.UIConfig.windowModalWaiting = fairygui.UIPackage.getItemURL("System", "WindowModalWaiting");
            Game.circle = new Games.Circle();
            // 请求服务器列表
            this.requestServerList();
        };
        // 请求服务器列表
        GameInstaller.prototype.requestServerList = function () {
            Game.channel = Games.ChannelManager.getInstance();
            Game.channel.requestServerList(null, null, 
            // onSuccess    
            function () {
                // 请求通知
                Game.channel.requestNotice();
                // 关闭启动加载界面
                Game.loader.close(Games.LoaderId.Launch);
                // 调安装完成
                Game.onInstallComplete();
            }, 
            // onFaile    
            function () {
                Game.system.alertText(Games.TEXT.ErorRequestServerList);
                // 关闭启动加载界面
                Game.loader.close(Games.LoaderId.Launch);
                // 调安装完成
                Game.onInstallComplete();
            });
        };
        return GameInstaller;
    }());
    Games.GameInstaller = GameInstaller;
})(Games || (Games = {}));
//# sourceMappingURL=GameInstaller.js.map