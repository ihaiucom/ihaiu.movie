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
    var Login;
    (function (Login) {
        var InitialActor = /** @class */ (function (_super) {
            __extends(InitialActor, _super);
            function InitialActor() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.selectIndex = -1;
                _this.actorItems = [];
                return _this;
            }
            // 窗口初始化完毕
            InitialActor.prototype.onWindowInited = function () {
                var bgUrl = ["card_as", "card_eu", "card_na"];
                console.log(this.packageItem.owner.name);
                this.m_btn_next.onClick(this, this.onClickNext);
                var index = 1;
                for (var i = 0; i < this.m_actorGroup.numChildren; i++) {
                    var item = this.m_actorGroup.getChildAt(i);
                    if (item.name.startsWith("actorItem")) {
                        var actorId = Game.config.initialActor.getConfig(index).actor_id;
                        var bgIndex = Mathf.clamp(index - 1, 0, bgUrl.length);
                        item.m_bg.url = "ui://" + this.packageItem.owner.name + "/" + bgUrl[bgIndex];
                        item.icon = Game.config.actor.getConfig(actorId).avatarConfig.bodyIconUrl;
                        item.onClick(this, this.onClickActorItem, [index]);
                        index++;
                        this.actorItems.push(item);
                    }
                }
                this.m_btn_next.visible = false;
            };
            InitialActor.prototype.onClickActorItem = function (index) {
                for (var i = 0; i < this.actorItems.length; i++) {
                    if (i != index - 1)
                        this.actorItems[i].selected = false;
                }
                this.selectIndex = index;
                this.m_btn_next.visible = true;
            };
            InitialActor.prototype.onClickNext = function () {
                Game.protosender.GameData.GetInitActor(this.selectIndex);
            };
            return InitialActor;
        }(Login.InitialActorStruct));
        Login.InitialActor = InitialActor;
    })(Login = fgui.Login || (fgui.Login = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=InitialActor.js.map