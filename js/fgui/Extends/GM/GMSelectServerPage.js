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
        var GMSelectServerPage = /** @class */ (function (_super) {
            __extends(GMSelectServerPage, _super);
            function GMSelectServerPage() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            // 窗口初始化完毕
            GMSelectServerPage.prototype.onWindowInited = function () {
                var _this = this;
                var list = this.m_list;
                list.setVirtual();
                list.setVirtualAndLoop();
                this.channel = Games.ChannelManager.getInstance();
                this.channel.requestServerList(null, null, 
                // onSucess	
                function () {
                    list.on(fairygui.Events.CLICK_ITEM, _this, _this.onClickItem);
                    list.itemRenderer = Handler.create(_this, _this.renderListItem, null, false);
                    list.numItems = _this.channel.serverList.list.length;
                    if (_this.channel.serverIndex >= 0)
                        _this.m_list.selectedIndex = _this.channel.serverIndex;
                }, 
                // onFail
                function () {
                    list.numItems = 0;
                    Game.system.alertText(Games.TEXT.ErorRequestServerList);
                });
            };
            // 该组件所在Tab 显示
            GMSelectServerPage.prototype.onTabShow = function () {
                if (this.channel.serverIndex >= 0)
                    this.m_list.selectedIndex = this.channel.serverIndex;
            };
            GMSelectServerPage.prototype.renderListItem = function (index, item) {
                var data = this.channel.serverList.list[index];
                item.title = data.name + "  " + data.ip + ":" + data.port;
                item["serverItem"] = data;
            };
            GMSelectServerPage.prototype.onClickItem = function (item) {
                var args = [];
                for (var _i = 1; _i < arguments.length; _i++) {
                    args[_i - 1] = arguments[_i];
                }
                var data = item["serverItem"];
                if (data) {
                    this.channel.serverName = data.name;
                }
            };
            return GMSelectServerPage;
        }(GM.GMSelectServerPageStruct));
        GM.GMSelectServerPage = GMSelectServerPage;
    })(GM = fgui.GM || (fgui.GM = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=GMSelectServerPage.js.map