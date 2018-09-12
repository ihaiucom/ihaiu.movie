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
/**
 * 浏览器检测
 */
var BrowserDetectConfig = /** @class */ (function () {
    function BrowserDetectConfig() {
        // 发布版本
        this.isResease = false;
        // 是本地
        this.isLocal = false;
        // 是否显示GM
        this.enableGM = true;
        // 是否显示状态
        this.isShowState = true;
        this.urlServerListRemote = "http://mbqb.ihaiu.com/GamePF/ServerList.json";
        this.urlServerListLocal = "ServerList.json";
        if (window && window.navigator && window.navigator.userAgent) {
            var agent = window.navigator.userAgent;
            console.log(agent);
            this.isFirefox = (agent.indexOf("Firefox") > -1);
            this.isOpera = (window["opera"] != null);
            this.isChrome = (agent.indexOf("Chrome") > -1); // NOTE that Chrome on Android returns true but is a completely different browser with different abilities
            this.isIOS = agent.indexOf("iPod") > -1 || agent.indexOf("iPhone") > -1 || agent.indexOf("iPad") > -1;
            this.isAndroid = (agent.indexOf("Android") > -1);
            this.isBlackberry = (agent.indexOf("Blackberry") > -1);
            this.isTV = (agent.indexOf("Box") > -1) || (agent.indexOf("box") > -1);
            this.isIE = (agent.indexOf("IE") > -1);
            this.isMobile = this.isIOS || this.isAndroid || this.isBlackberry;
            this.isApp = window["conch"] ? true : false;
        }
        else {
            this.isMobile = true;
            this.isApp = true;
        }
        console.log("window.location=" + JSON.stringify(window.location));
        this.isResease = true;
        if (window.location.pathname.startsWith("/GamePF") || /\/[A-Z]:\//.test(window.location.pathname)) {
            this.isResease = false;
        }
        if (this.isResease) {
            this.enableGM = false;
            this.isShowState = false;
            this.isLocal = true;
        }
        if (this.isAndroid) {
            this.enableGM = false;
            this.isShowState = false;
            this.isLocal = true;
        }
        this.enableGM = true;
        console.log("this.isResease=" + this.isResease);
        console.log("this.urlServerList=" + this.urlServerListRemote);
        if (window["conch"]) {
            var nType = window["conch"].config.getNetworkType();
            console.log("getNetworkType:" + nType);
            window["conch"].setNetworkEvtFunction(function (type) {
                console.log("setNetworkEvtFunction:" + type);
            });
        }
    }
    Object.defineProperty(BrowserDetectConfig.prototype, "urlServerList", {
        get: function () {
            if (this.isLocal) {
                return this.urlServerListLocal;
            }
            else {
                return this.urlServerListRemote;
            }
        },
        enumerable: true,
        configurable: true
    });
    return BrowserDetectConfig;
}());
var BrowserDetect = new BrowserDetectConfig();
/**
 * 屏幕分辨率
 */
var ScreenSettingConfig = /** @class */ (function () {
    function ScreenSettingConfig() {
        // 开发分辨率
        this.developWidth = 720;
        this.developHeight = 1280;
    }
    Object.defineProperty(ScreenSettingConfig.prototype, "developAspect", {
        get: function () {
            return this.developWidth / this.developHeight;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ScreenSettingConfig.prototype, "screenWidth", {
        // 屏幕分辨率
        get: function () {
            return fairygui.GRoot.inst.width;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ScreenSettingConfig.prototype, "screenHeight", {
        get: function () {
            return fairygui.GRoot.inst.height;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ScreenSettingConfig.prototype, "screenAspect", {
        get: function () {
            return this.screenWidth / this.screenHeight;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ScreenSettingConfig.prototype, "screenScaleExpand", {
        // 获取缩放比例
        get: function () {
            var rate = 1;
            if (this.screenAspect <= this.developAspect) {
                rate = this.screenHeight / this.developHeight / (this.screenWidth / this.developWidth);
            }
            else {
                rate = this.screenWidth / this.developWidth / (this.screenHeight / this.developHeight);
            }
            return rate;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ScreenSettingConfig.prototype, "screenScaleShrink", {
        get: function () {
            var rate = 1;
            if (this.screenAspect <= this.developAspect) {
                rate = this.screenHeight / this.developHeight;
            }
            else {
                rate = this.screenWidth / this.developWidth;
            }
            return rate;
        },
        enumerable: true,
        configurable: true
    });
    return ScreenSettingConfig;
}());
var ScreenSetting = new ScreenSettingConfig();
/*------------------------------------------------------------ */
var ZFTests;
(function (ZFTests) {
    var Component = Laya.Component;
    var List = Laya.List;
    var Button = Laya.Button;
    var Handler = Laya.Handler;
    var Event = Laya.Event;
    var Templet = Laya.Templet;
    var MenuButtons = /** @class */ (function () {
        function MenuButtons() {
        }
        MenuButtons.MainMenu = "返回主菜单";
        MenuButtons.LoadResList = "加载资源列表";
        MenuButtons.AddPackageFgui = "AddPackage Fgui";
        MenuButtons.AddPackageFsprite = "AddPackage Fsprite";
        MenuButtons.BindFgui = "Bind Fgui";
        MenuButtons.SpineSK = "SpineSK";
        MenuButtons.List = [
            MenuButtons.MainMenu,
            MenuButtons.LoadResList,
            MenuButtons.AddPackageFgui,
            MenuButtons.AddPackageFsprite,
            MenuButtons.BindFgui,
            MenuButtons.SpineSK
        ];
        return MenuButtons;
    }());
    ZFTests.MenuButtons = MenuButtons;
    var ButtonListItem = /** @class */ (function (_super) {
        __extends(ButtonListItem, _super);
        function ButtonListItem() {
            var _this = _super.call(this) || this;
            _this.labelSize = 30;
            _this.labelAlign = "left";
            _this.width = ButtonListItem.WID;
            _this.height = ButtonListItem.HEI;
            return _this;
        }
        ButtonListItem.WID = 500;
        ButtonListItem.HEI = 80;
        return ButtonListItem;
    }(Button));
    ZFTests.ButtonListItem = ButtonListItem;
    var ButtonList = /** @class */ (function (_super) {
        __extends(ButtonList, _super);
        function ButtonList(menu, testMemory) {
            var _this = _super.call(this) || this;
            _this.unitM = 1024 * 1024;
            _this.menu = menu;
            _this.testMemory = testMemory;
            return _this;
        }
        ButtonList.prototype.createButtonList = function () {
            var list = new List();
            list.itemRender = ButtonListItem;
            list.repeatX = 1;
            list.repeatY = 10;
            list.x = (Laya.stage.width - ButtonListItem.WID) / 2;
            list.y = (Laya.stage.height - ButtonListItem.HEI * list.repeatY) / 2;
            // 使用但隐藏滚动条
            list.vScrollBarSkin = "";
            list.selectEnable = true;
            list.selectHandler = new Handler(this, this.onSelect);
            list.renderHandler = new Handler(this, this.updateItem);
            this.addChild(list);
            this.list = list;
            list.array = this.listData;
            return list;
        };
        ButtonList.prototype.updateItem = function (cell, index) {
            cell.label = cell.dataSource;
        };
        ButtonList.prototype.onSelect = function (index) {
        };
        Object.defineProperty(ButtonList.prototype, "currentMemorySize", {
            get: function () {
                var val = laya.utils.Stat.currentMemorySize;
                if (laya.utils.Stat.currentMemorySize > this.unitM) {
                    return Math.floor(val / this.unitM * 100) / 100 + " M";
                }
                else {
                    return Math.floor(val / 1024 * 100) / 100 + " K";
                }
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ButtonList.prototype, "currentSubMemorySize", {
            get: function () {
                var sub = ButtonList.preMemorySize - laya.utils.Stat.currentMemorySize;
                ButtonList.preMemorySize = laya.utils.Stat.currentMemorySize;
                return sub;
            },
            enumerable: true,
            configurable: true
        });
        ButtonList.initPreMemorySize = function () {
            ButtonList.preMemorySize = laya.utils.Stat.currentMemorySize;
        };
        ButtonList.preMemorySize = 0;
        return ButtonList;
    }(Component));
    ZFTests.ButtonList = ButtonList;
    var MenuButtonList = /** @class */ (function (_super) {
        __extends(MenuButtonList, _super);
        function MenuButtonList(menu, testMemory) {
            var _this = _super.call(this, menu, testMemory) || this;
            _this.listData = MenuButtons.List;
            _this.createButtonList();
            return _this;
        }
        MenuButtonList.prototype.onSelect = function (index) {
            var button = this.listData[index];
            this.testMemory.openTab(button);
        };
        return MenuButtonList;
    }(ButtonList));
    ZFTests.MenuButtonList = MenuButtonList;
    var ResListView = /** @class */ (function (_super) {
        __extends(ResListView, _super);
        function ResListView(menu, testMemory, list) {
            var _this = _super.call(this, menu, testMemory) || this;
            _this.listData = list;
            _this.createButtonList();
            return _this;
        }
        ResListView.prototype.updateItem = function (cell, index) {
            if (index < this.listData.length) {
                var name_1 = this.listData[index]["path"];
                var arr = name_1.split('/');
                name_1 = arr[arr.length - 1].replace("@", "--");
                cell.label = name_1;
            }
        };
        ResListView.prototype.onSelect = function (index) {
            if (index < this.listData.length) {
                var path = "res" + this.listData[index]["path"];
                var arr = path.split(".");
                var ext = arr[arr.length - 1];
                var type = ext == "bin" ? Laya.Loader.BUFFER : Laya.Loader.IMAGE;
                console.log("BeginLoad: " + path);
                Laya.loader.load(path, Handler.create(this, this.onLoadItem, [path]), null, type);
            }
        };
        ResListView.prototype.onLoadItem = function (path) {
            console.log("onLoadItem: " + path + ", currentMemorySize:" + this.currentMemorySize + "  " + this.currentSubMemorySize);
        };
        return ResListView;
    }(ButtonList));
    ZFTests.ResListView = ResListView;
    var LoadAllResListView = /** @class */ (function (_super) {
        __extends(LoadAllResListView, _super);
        function LoadAllResListView(menu, testMemory, list) {
            var _this = _super.call(this, menu, testMemory) || this;
            _this.listData = list;
            _this.createButtonList();
            return _this;
        }
        LoadAllResListView.prototype.updateItem = function (cell, index) {
            if (index < this.listData.length) {
                cell.label = this.listData[index];
            }
        };
        LoadAllResListView.prototype.onSelect = function (index) {
            if (index < this.listData.length) {
                var path = this.listData[index];
                var list = this.testMemory.getResList(path);
                for (var i = 0; i < list.length; i++) {
                    var itemPath = "res" + list[i]["path"];
                    console.log("BeginLoad: " + itemPath);
                    var arr = itemPath.split(".");
                    var ext = arr[arr.length - 1];
                    var type = ext == "bin" ? Laya.Loader.BUFFER : Laya.Loader.IMAGE;
                    Laya.loader.load(itemPath, Handler.create(this, this.onLoadItem, [itemPath]), null, type);
                }
            }
        };
        LoadAllResListView.prototype.onLoadItem = function (path) {
            console.log("onLoadItem: " + path + ", currentMemorySize:" + this.currentMemorySize + "  " + this.currentSubMemorySize);
        };
        return LoadAllResListView;
    }(ButtonList));
    ZFTests.LoadAllResListView = LoadAllResListView;
    var AddPackageListView = /** @class */ (function (_super) {
        __extends(AddPackageListView, _super);
        function AddPackageListView(menu, testMemory, list) {
            var _this = _super.call(this, menu, testMemory) || this;
            _this.listData = list;
            _this.createButtonList();
            return _this;
        }
        AddPackageListView.prototype.updateItem = function (cell, index) {
            if (index < this.listData.length) {
                cell.label = this.listData[index]["path"];
            }
        };
        AddPackageListView.prototype.onSelect = function (index) {
            if (index < this.listData.length) {
                var pack = this.listData[index]["path"];
                pack = "res" + pack.replace(".bin", "");
                Games.GuiSetting.addPackage(pack);
            }
        };
        return AddPackageListView;
    }(ButtonList));
    ZFTests.AddPackageListView = AddPackageListView;
    var BindListView = /** @class */ (function (_super) {
        __extends(BindListView, _super);
        function BindListView(menu, testMemory, list) {
            var _this = _super.call(this, menu, testMemory) || this;
            _this.listData = list;
            _this.createButtonList();
            return _this;
        }
        BindListView.prototype.updateItem = function (cell, index) {
            if (index < this.listData.length) {
                cell.label = this.listData[index]["path"];
            }
        };
        BindListView.prototype.onSelect = function (index) {
            if (index < this.listData.length) {
                var pack = this.listData[index]["path"].replace(".bin", "");
                var arr = pack.split('/');
                var name_2 = arr[arr.length - 1];
                if (fgui[name_2] && fgui[name_2][name_2 + "Binder"])
                    fgui[name_2][name_2 + "Binder"]["bindAll"]();
            }
        };
        return BindListView;
    }(ButtonList));
    ZFTests.BindListView = BindListView;
    var SpineListView = /** @class */ (function (_super) {
        __extends(SpineListView, _super);
        function SpineListView(menu, testMemory, list) {
            var _this = _super.call(this, menu, testMemory) || this;
            _this.templets = [];
            _this.skeletons = [];
            _this.listData = list;
            _this.createButtonList();
            return _this;
        }
        SpineListView.prototype.updateItem = function (cell, index) {
            if (index < this.listData.length) {
                cell.label = this.listData[index]["path"];
            }
        };
        SpineListView.prototype.onSelect = function (index) {
            if (index < this.listData.length) {
                var path = "res" + this.listData[index]["path"];
                var urls = [
                    { url: path.replace(".sk", ".png"), type: Laya.Loader.IMAGE },
                    { url: path, type: Laya.Loader.BUFFER }
                ];
                Laya.loader.load(urls, Laya.Handler.create(this, this.onLoadRes, [path]));
            }
        };
        SpineListView.prototype.onLoadRes = function (path) {
            var _this = this;
            var png = Laya.loader.getRes(path.replace(".sk", ".png"));
            var sk = Laya.loader.getRes(path);
            var templet = new Templet();
            templet.on(Event.COMPLETE, this, function () {
                var sk = templet.buildArmature(0);
                sk.x = Laya.stage.width * 0.5;
                sk.y = Laya.stage.height - 50;
                sk.play(0, true);
                Laya.stage.addChild(sk);
                _this.skeletons.push(sk);
            });
            templet.parseData(png, sk);
            this.templets.push(templet);
            console.log("this.templets.length=" + this.templets.length);
        };
        return SpineListView;
    }(ButtonList));
    ZFTests.SpineListView = SpineListView;
    var ResList = /** @class */ (function () {
        function ResList() {
        }
        ResList.FguiBin = "ResList/FguiBin.json";
        ResList.FguiImage = "ResList/FguiImage.json";
        ResList.FSpriteBin = "ResList/FSpriteBin.json";
        ResList.FSpriteImage = "ResList/FSpriteImage.json";
        ResList.Sprite = "ResList/Sprite.json";
        ResList.SpineSK = "ResList/SpineSK.json";
        ResList.SpineImage = "ResList/SpineImage.json";
        ResList.List = [
            ResList.FguiBin,
            ResList.FguiImage,
            ResList.FSpriteBin,
            ResList.FSpriteImage,
            ResList.Sprite,
            ResList.SpineSK,
            ResList.SpineImage
        ];
        return ResList;
    }());
    ZFTests.ResList = ResList;
    var TestMemory = /** @class */ (function () {
        function TestMemory() {
            this.tabDict = [];
            this.resListDict = {};
            this.spineSkUrls = [];
            this.spinePngUrls = [];
            this.templets = [];
            this.skeletons = [];
            this.loadResListNum = 0;
            // 设置fgui文件后缀
            fairygui.UIConfig["packageFileExtension"] = Games.GuiSetting.packageFileExtension;
            this.container = new Component();
            Laya.stage.addChild(this.container);
            this.loadResListJson();
            this.container.mouseEnabled = true;
            gameLaunchLoding.onEnd();
        }
        TestMemory.prototype.onClickBackMainMenu = function () {
            this.openTab(MenuButtons.MainMenu);
        };
        TestMemory.prototype.onClicBindAll = function () {
            var list = this.getResList(ResList.FguiBin);
            for (var i = 0; i < list.length; i++) {
                var path = list[i].path.replace(".bin", "");
                var arr = path.split('/');
                var name_3 = arr[arr.length - 1];
                if (fgui[name_3] && fgui[name_3][name_3 + "Binder"])
                    fgui[name_3][name_3 + "Binder"]["bindAll"]();
            }
        };
        TestMemory.prototype.createTabs = function () {
            for (var i = 0; i < ResList.List.length; i++) {
                MenuButtons.List.push(ResList.List[i]);
            }
            var buttonList;
            buttonList = new MenuButtonList(MenuButtons.MainMenu, this);
            this.tabDict.push(buttonList);
            buttonList = new LoadAllResListView(MenuButtons.LoadResList, this, ResList.List);
            this.tabDict.push(buttonList);
            buttonList = new AddPackageListView(MenuButtons.AddPackageFgui, this, this.getResList(ResList.FguiBin));
            this.tabDict.push(buttonList);
            buttonList = new AddPackageListView(MenuButtons.AddPackageFsprite, this, this.getResList(ResList.FSpriteBin));
            this.tabDict.push(buttonList);
            buttonList = new BindListView(MenuButtons.BindFgui, this, this.getResList(ResList.FguiBin));
            this.tabDict.push(buttonList);
            buttonList = new SpineListView(MenuButtons.SpineSK, this, this.getResList(ResList.SpineSK));
            this.tabDict.push(buttonList);
            for (var i = 0; i < ResList.List.length; i++) {
                buttonList = new ResListView(ResList.List[i], this, this.getResList(ResList.List[i]));
                this.tabDict.push(buttonList);
            }
            this.openTab(MenuButtons.MainMenu);
            var mainMenuButton = new Button(null, "主菜单");
            mainMenuButton.width = 300;
            mainMenuButton.height = 80;
            mainMenuButton.labelSize = 30;
            mainMenuButton.mouseEnabled = true;
            mainMenuButton.on(laya.events.Event.CLICK, this, this.onClickBackMainMenu);
            this.container.addChild(mainMenuButton);
            mainMenuButton = new Button(null, "BindAll");
            mainMenuButton.width = 300;
            mainMenuButton.height = 80;
            mainMenuButton.labelSize = 30;
            mainMenuButton.mouseEnabled = true;
            mainMenuButton.on(laya.events.Event.CLICK, this, this.onClicBindAll);
            mainMenuButton.y = 100;
            this.container.addChild(mainMenuButton);
            mainMenuButton = new Button(null, "创建所有单位动画");
            mainMenuButton.width = 300;
            mainMenuButton.height = 80;
            mainMenuButton.labelSize = 30;
            mainMenuButton.mouseEnabled = true;
            mainMenuButton.on(laya.events.Event.CLICK, this, this.createAllUnitSpine);
            mainMenuButton.x = 400;
            mainMenuButton.y = 100;
            this.container.addChild(mainMenuButton);
            mainMenuButton = new Button(null, "销毁所有单位动画");
            mainMenuButton.width = 300;
            mainMenuButton.height = 80;
            mainMenuButton.labelSize = 30;
            mainMenuButton.mouseEnabled = true;
            mainMenuButton.on(laya.events.Event.CLICK, this, this.destoryAllUnitSpine);
            mainMenuButton.x = 400;
            mainMenuButton.y = 200;
            this.container.addChild(mainMenuButton);
            ButtonList.initPreMemorySize();
        };
        TestMemory.prototype.destoryAllUnitSpine = function () {
            this.destorySkeleton();
            this.destoryTemplet();
            this.destorySpineRes();
        };
        TestMemory.prototype.destorySkeleton = function () {
            while (this.skeletons.length > 0) {
                var tmp = this.skeletons.pop();
                tmp.removeSelf();
                tmp.destroy();
            }
        };
        TestMemory.prototype.destoryTemplet = function () {
            while (this.templets.length > 0) {
                var tmp = this.templets.pop();
                tmp.destroy();
                tmp.dispose();
            }
        };
        TestMemory.prototype.destorySpineRes = function () {
            while (this.spinePngUrls.length > 0) {
                Laya.loader.clearRes(this.spinePngUrls.pop(), true);
            }
            while (this.spineSkUrls.length > 0) {
                Laya.loader.clearRes(this.spineSkUrls.pop(), true);
            }
        };
        TestMemory.prototype.createAllUnitSpine = function () {
            var list = this.getResList(ResList.SpineSK);
            for (var i = 0; i < list.length; i++) {
                var path = list[i].path;
                if (path.indexOf("/spine/Female01") == 0 ||
                    path.indexOf("/spine/Female02") == 0 ||
                    path.indexOf("/spine/Female03") == 0 ||
                    path.indexOf("/spine/Male01") == 0 ||
                    path.indexOf("/spine/Male02") == 0 ||
                    path.indexOf("/spine/Male03") == 0) {
                    var skUrl = "res" + path;
                    var pngUrl = skUrl.replace(".sk", ".png");
                    var urls = [
                        { url: pngUrl, type: Laya.Loader.IMAGE },
                        { url: skUrl, type: Laya.Loader.BUFFER }
                    ];
                    Laya.loader.load(urls, Laya.Handler.create(this, this.onLoadSpineRes, [skUrl, pngUrl]));
                    this.spinePngUrls.push(pngUrl);
                    this.spineSkUrls.push(skUrl);
                }
            }
        };
        TestMemory.prototype.onLoadSpineRes = function (skUrl, pngUrl) {
            var _this = this;
            var png = Laya.loader.getRes(pngUrl);
            var sk = Laya.loader.getRes(skUrl);
            var templet = new Templet();
            templet.on(Event.COMPLETE, this, function () {
                var sk = templet.buildArmature(0);
                sk.x = Laya.stage.width * 0.5;
                sk.y = Laya.stage.height - 50;
                sk.play(0, true);
                Laya.stage.addChild(sk);
                _this.skeletons.push(sk);
            });
            templet.parseData(png, sk);
            this.templets.push(templet);
            console.log("this.templets.length=" + this.templets.length);
        };
        TestMemory.prototype.openTab = function (menu) {
            for (var i = 0; i < this.tabDict.length; i++) {
                if (this.tabDict[i].menu == menu) {
                    if (!this.tabDict[i].parent) {
                        this.container.addChildAt(this.tabDict[i], 0);
                    }
                }
                else {
                    if (this.tabDict[i].parent) {
                        this.tabDict[i].removeSelf();
                    }
                }
            }
        };
        TestMemory.prototype.loadResListJson = function () {
            for (var i = 0; i < ResList.List.length; i++) {
                console.log("BeginLoad:" + ResList.List[i]);
                Laya.loader.load(ResList.List[i], Handler.create(this, this.onLoadResList, [ResList.List[i]]), null, Laya.Loader.JSON);
            }
        };
        TestMemory.prototype.onLoadResList = function (path) {
            console.log("onLoadResList:" + path);
            this.resListDict[path] = Laya.loader.getRes(path);
            this.loadResListNum++;
            if (this.loadResListNum >= ResList.List.length) {
                this.createTabs();
            }
        };
        TestMemory.prototype.getResList = function (path) {
            return this.resListDict[path];
        };
        return TestMemory;
    }());
    ZFTests.TestMemory = TestMemory;
})(ZFTests || (ZFTests = {}));
/*------------------------------------------------------------ */
var Games;
(function (Games) {
    var GameLaunch = /** @class */ (function () {
        function GameLaunch() {
        }
        GameLaunch.prototype.install = function () {
            // Laya.init(ScreenSetting.developWidth, ScreenSetting.developHeight, Laya.CanvasMeshRender);
            Laya.init(ScreenSetting.developWidth, ScreenSetting.developHeight, Laya.WebGL);
            // Laya.stage["__screenHeightSub"] = 400;
            // laya.utils.Log.enable();
            // laya.utils.Log.toggle();
            // laya.debug.DebugPanel.init();
            // Laya.init(document.body.clientWidth, document.body.clientHeight, Laya.WebGL);
            // 状态显示
            if (BrowserDetect.isShowState)
                laya.utils.Stat.show(0, 0);
            //设置适配模式
            // Laya.stage.scaleMode = Laya.Stage.SCALE_FIXED_AUTO;
            Laya.stage.scaleMode = BrowserDetect.isMobile ? Laya.Stage.SCALE_FIXED_AUTO : Laya.Stage.SCALE_SHOWALL;
            Laya.stage.alignH = "center";
            Laya.stage.alignV = "top";
            // 初始化UI层级容器
            Games.MenuLayer.install();
            this.loadVersion();
        };
        // 加载版本信息		
        GameLaunch.prototype.loadVersion = function () {
            //设置版本控制类型为使用文件名映射的方式
            Laya.ResourceVersion.type = Laya.ResourceVersion.FILENAME_VERSION;
            //加载版本信息文件
            Laya.ResourceVersion.enable("version.json?t=" + new Date().getTime(), Laya.Handler.create(this, this.onLoadedVersion));
        };
        GameLaunch.prototype.onLoadedVersion = function () {
            // new ZFTests.TestMemory();
            this.installSystem();
        };
        // 初始化系统
        GameLaunch.prototype.installSystem = function () {
            // 设置fgui文件后缀
            fairygui.UIConfig["packageFileExtension"] = Games.GuiSetting.packageFileExtension;
            // 绑定组件
            fgui.System.SystemBinder.bindAll();
            // 注册Loader类
            fairygui.UIObjectFactory.setLoaderExtension(FGLoader);
            //设置字体
            switch (LangManager.Instance.lang) {
                case LangType.zh_cn:
                    fairygui.UIConfig.defaultFont = "黑体";
                    break;
                default:
                    fairygui.UIConfig.defaultFont = "Arial";
                    break;
            }
            // 加载系统UI
            Laya.loader.load([
                { url: "res/fgui/System.bin", type: Laya.Loader.BUFFER },
                { url: "res/fgui/System@atlas0.png", type: Laya.Loader.IMAGE },
                { url: "res/fgui/System@atlas_5sasa.png", type: Laya.Loader.IMAGE },
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
            if (BrowserDetect.enableGM) {
                // 创建GM按钮
                var gm = fgui.System.GMLanuchButton.createInstance();
                gm.draggable = true;
                gm.dragBounds = new laya.maths.Rectangle(-50, -50, Laya.stage.width + 100, Laya.stage.height + 100);
                Games.MenuLayer.floatMsg.addChild(gm);
            }
            // fgui.System.StateView.show();
            // fairygui.GRoot.inst.displayObject.graphics.drawRect(0, 0, fairygui.GRoot.inst.width, fairygui.GRoot.inst.height, "yellow");
            GameLaunch.isRunEnd = true;
            if (window["Game"]) {
                Game.install();
            }
            // console.log("laya.utils.Stat");
            // for (let v in laya.utils.Stat)
            // {
            // 	console.log(v + "=" + laya.utils.Stat[v]);
            // }
        };
        GameLaunch.isRunEnd = false;
        return GameLaunch;
    }());
    Games.GameLaunch = GameLaunch;
})(Games || (Games = {}));
new Games.GameLaunch().install();
//# sourceMappingURL=GameLaunch.js.map