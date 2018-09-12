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
var Games;
(function (Games) {
    //======================
    // 房间建造列表窗口
    //----------------------
    var BuildRoomListWindow = /** @class */ (function (_super) {
        __extends(BuildRoomListWindow, _super);
        function BuildRoomListWindow() {
            var _this = _super.call(this) || this;
            // 添加依赖资源
            _this.addAssetForFguiComponent(fgui.Building.BuildRoomList);
            return _this;
        }
        // 生成动态预加载资源
        BuildRoomListWindow.prototype.generateAssetsForDynmic = function () {
            _super.prototype.generateAssetsForDynmic.call(this);
        };
        // 菜单创建
        BuildRoomListWindow.prototype.onMenuCreate = function () {
            this.conent = fgui.Building.BuildRoomList.createInstance();
            this.contentPane = this.conent;
            // this.center();
            // //弹出窗口的动效已中心为轴心
            // this.setPivot(0.5, 0.5);
            _super.prototype.onMenuCreate.call(this);
        };
        //=========================
        // 显示完成
        // 可以在这里添加协议消息监听
        //-------------------------
        BuildRoomListWindow.prototype.onShowComplete = function () {
            var floorIndex = this.menuParameter.args[0];
            this.conent.init(floorIndex);
            _super.prototype.onShowComplete.call(this);
        };
        //=========================
        // 隐藏完成
        // 可以在这里移除协议消息监听
        //-------------------------
        BuildRoomListWindow.prototype.onHideComplete = function () {
            _super.prototype.onHideComplete.call(this);
        };
        //-----------------------------------
        // 建筑引导
        //-----------------------------------
        //获取待建造房间
        BuildRoomListWindow.prototype.getWaitBuildRoomTouch = function (roomType) {
            var room = this.conent.getRoomAndScrollTop(roomType);
            if (room) {
                return room.m_touch;
            }
            return null;
        };
        return BuildRoomListWindow;
    }(Games.MWindow));
    Games.BuildRoomListWindow = BuildRoomListWindow;
})(Games || (Games = {}));
//# sourceMappingURL=BuildRoomListWindow.js.map