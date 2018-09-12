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
    var Common;
    (function (Common) {
        var ActorLvBreaktUI = /** @class */ (function (_super) {
            __extends(ActorLvBreaktUI, _super);
            function ActorLvBreaktUI() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            ActorLvBreaktUI.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.onClick(this, this.onClickClose);
            };
            //关闭界面
            ActorLvBreaktUI.prototype.onClickClose = function () {
                if (this.isCanClosed) {
                    this.removeFromParent();
                }
            };
            /**
             * 显示特效
             * @param acotrId
             * @param skillId
             */
            ActorLvBreaktUI.prototype.playEffect = function (actorId, desc) {
                this.isCanClosed = false;
                var data = Game.moduleModel.actor.getActor(actorId);
                if (data) {
                    Games.MenuLayer.floatMsg.addChild(this);
                    //
                    //描述
                    this.m_desc.text = desc;
                    //
                    this.m_icon.icon = data.bodyIconUrl;
                    //
                    this.m_t0.play(Handler.create(this, this.playEnd), 1);
                }
            };
            //播放完毕
            ActorLvBreaktUI.prototype.playEnd = function () {
                var _this = this;
                setTimeout(function () {
                    _this.isCanClosed = true;
                }, 1000);
            };
            return ActorLvBreaktUI;
        }(Common.ActorLvBreaktUIStruct));
        Common.ActorLvBreaktUI = ActorLvBreaktUI;
    })(Common = fgui.Common || (fgui.Common = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=ActorLvBreaktUI.js.map