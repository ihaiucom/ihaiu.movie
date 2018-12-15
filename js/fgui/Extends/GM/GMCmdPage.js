/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
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
var fgui;
(function (fgui) {
    var GM;
    (function (GM) {
        var GMCmdPage = /** @class */ (function (_super) {
            __extends(GMCmdPage, _super);
            function GMCmdPage() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                // 数量列表
                _this.dataList = [];
                return _this;
            }
            // 窗口初始化完毕
            GMCmdPage.prototype.onWindowInited = function () {
                this.m_subMenuBar.setListData(Games.GMCmdSubMenuType.list);
                this.m_subMenuBar.sOnSelect.add(this.onClickSubMenu, this);
                this.m_subMenuBar.select = Games.GMCmdSubMenuType.Server;
                this.m_sendButton.onClick(this, this.onClickSend);
                this.m_clearButton.onClick(this, this.onClickClear);
                Games.GM.historCmd.read();
                Laya.loader.load(Games.GM.serverCmdUrl, Handler.create(this, this.onLoadJson, [Games.GM.serverCmdUrl]));
                Laya.loader.load(Games.GM.clientCmdUrl, Handler.create(this, this.onLoadJson, [Games.GM.clientCmdUrl]));
            };
            Object.defineProperty(GMCmdPage.prototype, "inputTxt", {
                get: function () {
                    return this.m_input.m_title.text;
                },
                set: function (value) {
                    this.m_input.m_title.text = value;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(GMCmdPage.prototype, "selectSubMenu", {
                get: function () {
                    return this.m_subMenuBar.select;
                },
                enumerable: true,
                configurable: true
            });
            GMCmdPage.prototype.onLoadJson = function (url) {
                var cmdList = Laya.loader.getRes(url);
                if (!cmdList)
                    return;
                cmdList = isString(cmdList) ? JSON.parse(cmdList) : cmdList;
                switch (url) {
                    case Games.GM.serverCmdUrl:
                        Games.GM.serverCmd.setList(cmdList, false);
                        break;
                    case Games.GM.clientCmdUrl:
                        Games.GM.clientCmd.setList(cmdList, true);
                        break;
                }
                this.refreshList();
            };
            GMCmdPage.prototype.onClickSubMenu = function (menu) {
                var _this = this;
                this.m_clearButton.visible = menu == Games.GMCmdSubMenuType.HISTORY;
                setTimeout(function () {
                    _this.refreshList();
                }, 10);
            };
            GMCmdPage.prototype.onClickSend = function () {
                var isProto = false;
                var str = this.inputTxt;
                if (str.startsWith("eval")) {
                    eval(str.replace("eval", ""));
                }
                var arr = this.inputTxt.split("\n");
                for (var i = 0; i < arr.length; i++) {
                    var item = arr[i];
                    if (item.indexOf(":") != -1) {
                        var cmdName = item.substring(0, item.indexOf(":")).trim();
                        var cmdData = item.substring(item.indexOf(":") + 1, item.length);
                        Games.GM.sendCmd(cmdName, cmdData, true);
                        console.log(cmdName);
                        console.log(cmdData);
                        isProto = true;
                    }
                }
                this.m_subMenuBar.select = Games.GMCmdSubMenuType.HISTORY;
                if (!isProto) {
                    eval(str);
                }
            };
            GMCmdPage.prototype.onClickClear = function () {
                Games.GM.historCmd.clear();
                Games.GM.clientCmd.clearCache();
                Games.GM.serverCmd.clearCache();
                this.refreshList();
            };
            GMCmdPage.prototype.refreshList = function () {
                switch (this.selectSubMenu) {
                    case Games.GMCmdSubMenuType.Server:
                        this.setList(Games.GM.serverCmd.list);
                        break;
                    case Games.GMCmdSubMenuType.Client:
                        this.setList(Games.GM.clientCmd.list);
                        break;
                    case Games.GMCmdSubMenuType.HISTORY:
                        this.setList(Games.GM.historCmd.list);
                        break;
                }
            };
            GMCmdPage.prototype.setList = function (items) {
                this.dataList = items;
                var list = this.m_list;
                list.setVirtual();
                list.setVirtualAndLoop();
                if (!list.itemRenderer)
                    list.itemRenderer = Handler.create(this, this.renderListItem, null, false);
                list.numItems = items.length;
            };
            GMCmdPage.prototype.renderListItem = function (index, item) {
                var data = this.dataList[index];
                item.cmdPage = this;
                item.setItemData(data);
            };
            return GMCmdPage;
        }(GM.GMCmdPageStruct));
        GM.GMCmdPage = GMCmdPage;
    })(GM = fgui.GM || (fgui.GM = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=GMCmdPage.js.map