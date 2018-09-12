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
    var CreateRoleTabType;
    (function (CreateRoleTabType) {
        // 设置角色名
        CreateRoleTabType[CreateRoleTabType["Default"] = 0] = "Default";
        // 选择初始艺人
        CreateRoleTabType[CreateRoleTabType["InitialActor"] = 1] = "InitialActor";
    })(CreateRoleTabType = Games.CreateRoleTabType || (Games.CreateRoleTabType = {}));
    //======================
    // 创建角色窗口
    //----------------------
    var CreateRoleWindow = /** @class */ (function (_super) {
        __extends(CreateRoleWindow, _super);
        function CreateRoleWindow() {
            var _this = _super.call(this) || this;
            // 添加依赖资源
            _this.addAssetForFguiComponent(fgui.Login.CreatRole);
            return _this;
        }
        // 菜单创建
        CreateRoleWindow.prototype.onMenuCreate = function () {
            this.conent = fgui.Login.CreatRole.createInstance();
            this.contentPane = this.conent;
            // this.center();
            // //弹出窗口的动效已中心为轴心
            // this.setPivot(0.5, 0.5);
            this.registerTab(CreateRoleTabType.InitialActor, this.conent.m_initialActor);
            // this.openTab(CreateRoleTabType.Default);
            _super.prototype.onMenuCreate.call(this);
        };
        //=========================
        // 显示完成
        // 可以在这里添加协议消息监听
        //-------------------------
        CreateRoleWindow.prototype.onShowComplete = function () {
            _super.prototype.onShowComplete.call(this);
            Game.protoOkEvent.add(ProtoEventKey.GameData_InitGameData, this.onInitGameData, this);
            Game.moduleModel.actor.sAddActorList.add(this.onAddActorHandler, this);
            Game.protoOkEvent.add(ProtoEventKey.Actor_ActorChangeName, this.onActorChangeName, this);
        };
        //=========================
        // 隐藏完成
        // 可以在这里移除协议消息监听
        //-------------------------
        CreateRoleWindow.prototype.onHideComplete = function () {
            _super.prototype.onHideComplete.call(this);
            Game.protoOkEvent.remove(ProtoEventKey.GameData_InitGameData, this.onInitGameData, this);
            Game.moduleModel.actor.sAddActorList.remove(this.onAddActorHandler, this);
        };
        // 协议事件--初始化信息
        CreateRoleWindow.prototype.onInitGameData = function (msg, ops, uuid) {
            //this.openTab(CreateRoleTabType.InitialActor);
            Game.menu.open(Games.MenuId.Home);
            Game.menu.close(Games.MenuId.Login);
            Game.menu.close(Games.MenuId.CreateRole);
        };
        // 消息--添加艺人        
        CreateRoleWindow.prototype.onAddActorHandler = function (data) {
            Game.menu.open(Games.MenuId.ArtistScoutSuccess, data);
            Game.menu.close(Games.MenuId.Login);
            Game.menu.close(Games.MenuId.CreateRole);
        };
        // 协议事件--修改艺人名称
        CreateRoleWindow.prototype.onActorChangeName = function (msg) {
            Game.protoOkEvent.remove(ProtoEventKey.Actor_ActorChangeName, this.onActorChangeName, this);
            Game.menu.open(Games.MenuId.Home);
        };
        return CreateRoleWindow;
    }(Games.MWindow));
    Games.CreateRoleWindow = CreateRoleWindow;
})(Games || (Games = {}));
//# sourceMappingURL=CreateRoleWindow.js.map