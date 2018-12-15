var Games;
(function (Games) {
    var DebugTimerLoop = /** @class */ (function () {
        function DebugTimerLoop() {
            this.enable = true;
            this.callNum = 0;
            this.costTime = 0;
            this.costTimeToal = 0;
        }
        Object.defineProperty(DebugTimerLoop.prototype, "evaluateCost", {
            get: function () {
                if (this.callNum > 0) {
                    return Math.round(this.costTimeToal / this.callNum);
                }
                return this.costTime;
            },
            enumerable: true,
            configurable: true
        });
        DebugTimerLoop.prototype.toString = function () {
            return this.key + "  callTime:" + this.callTime + " callNum:" + this.callNum + "  costTime:" + this.costTime + "  costTimeToal:" + this.costTimeToal + "  evaluateCost:" + this.evaluateCost;
        };
        return DebugTimerLoop;
    }());
    Games.DebugTimerLoop = DebugTimerLoop;
    var DebugTimerLoopManager = /** @class */ (function () {
        function DebugTimerLoopManager() {
            this.dict = new Dictionary();
        }
        Object.defineProperty(DebugTimerLoopManager, "Instance", {
            /**
             * 获取单例实例
             */
            get: function () {
                if (!DebugTimerLoopManager._Instance) {
                    DebugTimerLoopManager._Instance = new DebugTimerLoopManager();
                }
                return DebugTimerLoopManager._Instance;
            },
            enumerable: true,
            configurable: true
        });
        DebugTimerLoopManager.onCallerRun = function (caller, method) {
            return DebugTimerLoopManager.Instance.addCaller(caller, method);
        };
        DebugTimerLoopManager.setCallerCost = function (caller, method, cost) {
            return DebugTimerLoopManager.Instance.addCost(caller, method, cost);
        };
        DebugTimerLoopManager.onCall = function (key) {
            return DebugTimerLoopManager.Instance.add(key);
        };
        DebugTimerLoopManager.clear = function () {
            DebugTimerLoopManager.Instance.dict.clear();
        };
        DebugTimerLoopManager.prototype.add = function (key) {
            var item = this.dict.getValue(key);
            if (!item) {
                item = new DebugTimerLoop();
                item.key = key;
                item.beginTime = Game.time.localTime;
                this.dict.add(item.key, item);
            }
            item.callTime = Game.time.localTime;
            return item.enable;
        };
        DebugTimerLoopManager.prototype.addCaller = function (caller, method) {
            var key = caller ? getClassName(caller) + "." + getFunctionName(method) : getFunctionName(method);
            var item = this.dict.getValue(key);
            if (!item) {
                item = new DebugTimerLoop();
                item.caller = caller;
                item.method = method;
                item.key = key;
                item.beginTime = new Date().getTime();
                this.dict.add(item.key, item);
            }
            item.callTime = new Date().getTime();
            return item.enable;
        };
        DebugTimerLoopManager.prototype.addCost = function (caller, method, cost) {
            var key = caller ? getClassName(caller) + "." + getFunctionName(method) : getFunctionName(method);
            var item = this.dict.getValue(key);
            if (item) {
                item.costTime = cost;
                item.costTimeToal += cost;
                item.callNum++;
            }
        };
        DebugTimerLoopManager.enable = false;
        return DebugTimerLoopManager;
    }());
    Games.DebugTimerLoopManager = DebugTimerLoopManager;
    /** 主菜单 */
    var GMMenuType = /** @class */ (function () {
        function GMMenuType() {
        }
        GMMenuType.ADD = "添加";
        GMMenuType.CMD = "命令";
        GMMenuType.SELECTSERVER = "选择服务器";
        GMMenuType.LOG = "日志";
        GMMenuType.MODULE = "模块";
        GMMenuType.DisplayTree = "显示树";
        GMMenuType.TimeLoop = "TimeLoop";
        GMMenuType.Tick = "Tick";
        GMMenuType.list = [GMMenuType.ADD, GMMenuType.CMD, GMMenuType.SELECTSERVER, GMMenuType.MODULE, GMMenuType.LOG, GMMenuType.DisplayTree, GMMenuType.TimeLoop, GMMenuType.Tick];
        return GMMenuType;
    }());
    Games.GMMenuType = GMMenuType;
    /** 日志子菜单 */
    var GMDeubgMenuType = /** @class */ (function () {
        function GMDeubgMenuType() {
        }
        GMDeubgMenuType.getLogType = function (menu) {
            switch (menu) {
                case GMDeubgMenuType.Log:
                    return LogType.Log;
                case GMDeubgMenuType.Warn:
                    return LogType.Warn;
                case GMDeubgMenuType.Error:
                    return LogType.Error;
            }
        };
        GMDeubgMenuType.getLogTypes = function (menus) {
            var types = [];
            for (var i = 0; i < menus.length; i++) {
                types.push(GMDeubgMenuType.getLogType(menus[i]));
            }
            return types;
        };
        GMDeubgMenuType.Log = "Log";
        GMDeubgMenuType.Warn = "Warn";
        GMDeubgMenuType.Error = "Error";
        GMDeubgMenuType.list = [
            GMDeubgMenuType.Log,
            GMDeubgMenuType.Warn,
            GMDeubgMenuType.Error,
        ];
        return GMDeubgMenuType;
    }());
    Games.GMDeubgMenuType = GMDeubgMenuType;
    /** 添加下拉菜单 */
    var GMAddType = /** @class */ (function () {
        function GMAddType() {
        }
        GMAddType.getItemTypes = function (itemAddType) {
            var types = [];
            switch (itemAddType) {
                case GMAddType.Item_Money:
                    types.push(Proto.SE.EItemCategory.diamond);
                    types.push(Proto.SE.EItemCategory.gold);
                    types.push(Proto.SE.EItemCategory.dollar);
                    types.push(10); // 许可证
                    types.push(11); // 粉丝
                    types.push(12); // 点赞
                    types.push(13); // 期待
                    break;
                case GMAddType.Item_Other:
                    types.push(Proto.SE.EItemCategory.other);
                    break;
                case GMAddType.Item_Normal:
                    types.push(Proto.SE.EItemCategory.normal);
                    break;
                case GMAddType.Item_Asset:
                    types.push(Proto.SE.EItemCategory.assets);
                    break;
                case GMAddType.Item_Contract:
                    types.push(Proto.SE.EItemCategory.contract);
                    break;
                case GMAddType.Item_Giftbag:
                    types.push(Proto.SE.EItemCategory.giftbag);
                    break;
                case GMAddType.Item_Build:
                    types.push(9);
                    break;
            }
            return types;
        };
        GMAddType.Actor = "艺人";
        GMAddType.Story = "剧本";
        GMAddType.Item = "物品--所有";
        GMAddType.Item_Money = "物品--货币";
        GMAddType.Item_Other = "物品--周边产品";
        GMAddType.Item_Normal = "物品--普通道具";
        GMAddType.Item_Asset = "物品--资产";
        GMAddType.Item_Contract = "物品--合同";
        GMAddType.Item_Giftbag = "物品--礼包";
        GMAddType.Item_Build = "物品--建筑材料";
        GMAddType.list = [
            GMAddType.Actor,
            GMAddType.Story,
            GMAddType.Item,
            GMAddType.Item_Money,
            GMAddType.Item_Other,
            GMAddType.Item_Normal,
            GMAddType.Item_Asset,
            GMAddType.Item_Contract,
            GMAddType.Item_Giftbag,
            GMAddType.Item_Build
        ];
        return GMAddType;
    }());
    Games.GMAddType = GMAddType;
    /** 命令子菜单菜单 */
    var GMCmdSubMenuType = /** @class */ (function () {
        function GMCmdSubMenuType() {
        }
        GMCmdSubMenuType.Server = "服务器";
        GMCmdSubMenuType.Client = "客户端";
        GMCmdSubMenuType.HISTORY = "最近";
        GMCmdSubMenuType.list = [
            GMCmdSubMenuType.Server,
            GMCmdSubMenuType.Client,
            GMCmdSubMenuType.HISTORY,
        ];
        return GMCmdSubMenuType;
    }());
    Games.GMCmdSubMenuType = GMCmdSubMenuType;
    var GMCmdList = /** @class */ (function () {
        function GMCmdList(name) {
            this.list = [];
            this.dict = new Dictionary();
            this.name = name;
        }
        GMCmdList.prototype.setList = function (arr, isClient) {
            if (isClient === void 0) { isClient = false; }
            this.list = arr;
            for (var i = 0; i < arr.length; i++) {
                var item = arr[i];
                item.title = item.name + " (" + item.cnname + ")";
                item.datatxt = JSON.stringify(item.data);
                item.isClient = isClient;
                this.dict.add(item.name, item);
            }
            this.read();
        };
        GMCmdList.prototype.add = function (item) {
            this.list.push(item);
        };
        GMCmdList.prototype.clear = function () {
            this.list = [];
            this.dict.clear();
            this.save();
        };
        GMCmdList.prototype.clearCache = function () {
            Game.localStorage.removeItem(this.lsKey, true);
        };
        Object.defineProperty(GMCmdList.prototype, "lsKey", {
            get: function () {
                return this.name;
            },
            enumerable: true,
            configurable: true
        });
        GMCmdList.prototype.save = function () {
            Game.localStorage.setJSON(this.lsKey, this.list, true);
        };
        GMCmdList.prototype.read = function () {
            var list = Game.localStorage.getJSON(this.lsKey, true);
            if (!list)
                return;
            for (var i = 0; i < list.length; i++) {
                var item = list[i];
                var pre_1 = this.dict.getValue(item.name);
                if (pre_1) {
                    pre_1.datatxt = item.datatxt;
                }
                else {
                    this.add(item);
                }
            }
        };
        return GMCmdList;
    }());
    Games.GMCmdList = GMCmdList;
    var GM = /** @class */ (function () {
        function GM() {
        }
        Object.defineProperty(GM, "serverCmdUrl", {
            get: function () {
                if (BrowserDetect.isLocal) {
                    return "ServerGM.json";
                }
                else {
                    return GM._serverCmdUrl;
                }
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(GM, "clientCmdUrl", {
            get: function () {
                if (BrowserDetect.isLocal) {
                    return "ClientGM.json";
                }
                else {
                    return GM._clientCmdUrl;
                }
            },
            enumerable: true,
            configurable: true
        });
        GM.sendCmd = function (cmdName, cmdData, isAddHostor) {
            if (isAddHostor === void 0) { isAddHostor = false; }
            var cmdItem;
            if (isString(cmdData)) {
                cmdItem = { cnname: "", name: cmdName, data: JSON.parse(cmdData), datatxt: cmdData, isClient: false };
                cmdItem.isClient = cmdItem.data["isClient"] == true;
                cmdItem.cnname = cmdItem.data["cnname"] ? cmdItem.data["cnname"] : "";
                var cmdList = cmdItem.isClient ? GM.clientCmd : GM.serverCmd;
                var cmdSetting = cmdList.dict.getValue(cmdName);
                if (cmdSetting) {
                    cmdItem.cnname = cmdSetting.cnname;
                    cmdItem.title = cmdSetting.title;
                }
                else {
                    cmdItem.title = cmdItem.cnname ? cmdItem.name + " (" + cmdItem.cnname + ")" : cmdItem.name;
                }
            }
            else {
                cmdItem = cmdData;
                if (cmdItem.isClient) {
                    GM.clientCmd.save();
                }
                else {
                    GM.serverCmd.save();
                }
            }
            if (isAddHostor) {
                GM.historCmd.add(cmdItem);
                GM.historCmd.save();
            }
            if (cmdItem.isClient) {
                var fun = Game.protohandler.ClientGM[cmdName];
                fun.apply(cmdItem.data, Game.protohandler.ClientGM);
            }
            else {
                Game.proto.sendMsg(cmdItem.data, "test/" + cmdName);
            }
        };
        Object.defineProperty(GM, "window", {
            get: function () {
                if (!GM._window) {
                    GM._window = new Games.GMWindow();
                }
                return GM._window;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(GM, "visiable", {
            get: function () {
                if (GM._window) {
                    if (GM._window.parent) {
                        return true;
                    }
                    else {
                        return false;
                    }
                }
                return GM._visiable;
            },
            set: function (value) {
                if (value) {
                    GM.window.show();
                }
                else {
                    if (GM._window) {
                        GM.window.hide();
                    }
                }
                GM._visiable = value;
            },
            enumerable: true,
            configurable: true
        });
        GM._serverCmdUrl = "http://mbqb.ihaiu.com/GamePF/ServerGM.json";
        GM._clientCmdUrl = "http://mbqb.ihaiu.com/GamePF/ClientGM.json";
        GM.serverCmd = new GMCmdList("ServerCmd");
        GM.clientCmd = new GMCmdList("ClientCmd");
        GM.historCmd = new GMCmdList("HistorCmd");
        return GM;
    }());
    Games.GM = GM;
})(Games || (Games = {}));
//# sourceMappingURL=GM.js.map