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
    var MainUI;
    (function (MainUI) {
        /**
         * 主界面--用户信息栏
         */
        var TopMainBar = /** @class */ (function (_super) {
            __extends(TopMainBar, _super);
            function TopMainBar() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            // 窗口初始化完毕
            TopMainBar.prototype.onWindowInited = function () {
                this.m_headInfo.m_headIcon.onClick(this, this.onClickHeadIcon);
                this.m_street.onClick(this, this.onClickStreet);
                this.m_server.onClick(this, this.onClickRank);
            };
            // 窗口显示
            TopMainBar.prototype.onWindowShow = function () {
                // 刷新数据
                this.refreshData();
                Game.protoOkEvent.add(ProtoEventKey.GameInfo, this.refreshData, this);
                Game.protoOkEvent.add(ProtoEventKey.rank_GetSelfList, this.OnRankSelfListResponse, this);
            };
            // 窗口隐藏
            TopMainBar.prototype.onWindowHide = function () {
                Game.protoOkEvent.remove(ProtoEventKey.GameInfo, this.refreshData, this);
                Game.protoOkEvent.remove(ProtoEventKey.rank_GetSelfList, this.OnRankSelfListResponse, this);
            };
            // 点击玩家头像	
            TopMainBar.prototype.onClickHeadIcon = function () {
                Game.menu.open(MenuId.PlayerInfo);
                // let msg: Proto.SS.PlayerLevelUp = new Proto.SS.PlayerLevelUp();
                // msg.old_level = 9;
                // msg.now_level = 10;
                // msg.story = [];
                // Game.moduleModel.playerInfo.enqueuePlayerLevelUpMsg(msg);
                // Game.system.tryAlertLevelUp();
                //
                // let renderer = fgui.Fx.Circle.createInstance();
                // let emitter2D = new Games.TrailEmitter();
                // emitter2D.x = Laya.stage.width / 2;
                // emitter2D.y = Laya.stage.height / 2;
                // Laya.stage.addChild(emitter2D);
                // emitter2D.setRenderer(renderer);
                // emitter2D.start();
                // let emitter2D = new Games.ParticleEmitter2D();
                // let textureInit = new Games.TextureInit();
                // textureInit.setRenderer(renderer);
                // emitter2D.addInitializer(textureInit);
                // emitter2D.addInitializer(new Games.LiftTimeInit(0.5, 1));
                // emitter2D.addInitializer(new Games.ScaleInit(0.5, 1));
                // emitter2D.addInitializer(new Games.RotationInit(0, 360));
                // emitter2D.addActoiner(new Games.Age());
                // emitter2D.addActoiner(new Games.Fade(1, 0));
                // emitter2D.addActoiner(new Games.Move(100, 100));
                // emitter2D.start();
            };
            // 点击排行
            TopMainBar.prototype.onClickRank = function () {
                Game.menu.open(MenuId.Rank);
            };
            // 点击街区
            TopMainBar.prototype.onClickStreet = function () {
                Game.menu.open(MenuId.Street);
            };
            TopMainBar.prototype.OnRankSelfListResponse = function () {
                this.m_server.m_serverName.text = Game.moduleModel.rank.ServerName;
                this.m_server.m_serverRank.text = Games.TEXT.RankText.format(Game.moduleModel.rank.SelfServerRank);
                this.m_street.m_streetId.text = Game.moduleModel.street.GetStreetName(Game.moduleModel.street.streetCurrentId);
                this.m_street.m_streetRank.text = Games.TEXT.RankText.format(Game.moduleModel.rank.SelfGroupRank);
            };
            // 刷新数据
            TopMainBar.prototype.refreshData = function () {
                ///------------- 头像--------------
                // 头像
                this.m_headInfo.m_headIcon.icon = User.headIconUrl;
                // 经验条
                this.m_headInfo.m_expBar.max = User.upgradeFans;
                this.m_headInfo.m_expBar.value = User.info.fans;
                // VIP
                this.m_headInfo.m_vip.text = "Star " + User.info.vipLevel;
                // Heart
                this.m_headInfo.m_level.text = User.info.level.toString();
                ///------------- 街区--------------
                // 角色名称
                this.m_street.m_roleName.text = User.info.name;
                // 排行数据刷新
                this.OnRankSelfListResponse();
            };
            return TopMainBar;
        }(MainUI.TopMainBarStruct));
        MainUI.TopMainBar = TopMainBar;
    })(MainUI = fgui.MainUI || (fgui.MainUI = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=TopMainBar.js.map