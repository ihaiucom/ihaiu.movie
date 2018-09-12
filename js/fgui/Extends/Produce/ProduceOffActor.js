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
    var Produce;
    (function (Produce) {
        var ProduceOffActor = /** @class */ (function (_super) {
            __extends(ProduceOffActor, _super);
            function ProduceOffActor() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.attrs = [];
                return _this;
            }
            ProduceOffActor.prototype.show = function (produceId, actorId, parent) {
                this.produceId = produceId;
                this.actorId = actorId;
                this.actorData = Game.moduleModel.actor.getActor(actorId);
                Games.MenuLayer.module.addChild(this);
                Game.protoOkEvent.add(ProtoEventKey.manageProduce_SendActor, this.callBackSendActor, this);
                //initUI	
                var produceCfg = Game.config.produce.getConfig(this.produceId);
                this.m_commonPanel.m_title.text = format(TEXT.ProduceOffActorTitle, produceCfg.name);
                this.m_actorIcon.url = Game.config.avatar.getConfig(this.actorData.config.avatar).bodyIconUrl;
                this.m_actorName.text = this.actorData.config.name;
                this.m_starList.touchable = false;
                this.m_starList.removeChildrenToPool();
                for (var i_1 = 0; i_1 < this.actorData.star; i_1++) {
                    var star = this.m_starList.addItemFromPool();
                    this.m_starList.addChild(star);
                }
                this.attrs.push(this.m_attr1);
                this.attrs.push(this.m_attr2);
                this.attrs.push(this.m_attr3);
                this.attrs.push(this.m_attr4);
                var props = this.actorData.getProps();
                var attrIndex = -1;
                for (var i = 0; i < props.length; i++) {
                    var id = props[i];
                    var config = Game.config.property.getConfig(id);
                    var field = config.field;
                    var value = this.actorData[field];
                    if (value > 0) {
                        attrIndex++;
                        this.attrs[attrIndex].m_attrIcon.url = Game.config.avatar.getConfig(config.icon).iconUrl;
                        this.attrs[attrIndex].m_attrValue.text = value;
                    }
                }
                this.m_btnOffActor.m_title.text = TEXT.ProduceOffActor;
                this.m_btnOffActor.onClick(this, this.onOffActorClick);
                this.m_commonPanel.m_closeBtn.onClick(this, this.onClose);
            };
            ProduceOffActor.prototype.onClose = function () {
                Game.protoOkEvent.remove(ProtoEventKey.manageProduce_SendActor, this.callBackSendActor, this);
                this.removeFromParent();
            };
            ProduceOffActor.prototype.callBackSendActor = function (proto) {
                this.onClose();
            };
            ProduceOffActor.prototype.onOffActorClick = function () {
                //request
                Game.protosender.manageProduce.SendActor(this.produceId, 0);
            };
            return ProduceOffActor;
        }(Produce.ProduceOffActorStruct));
        Produce.ProduceOffActor = ProduceOffActor;
    })(Produce = fgui.Produce || (fgui.Produce = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=ProduceOffActor.js.map