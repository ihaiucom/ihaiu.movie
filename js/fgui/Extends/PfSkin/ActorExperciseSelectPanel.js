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
    var PfSkin;
    (function (PfSkin) {
        var ActorExperciseSelectPanel = /** @class */ (function (_super) {
            __extends(ActorExperciseSelectPanel, _super);
            function ActorExperciseSelectPanel() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            ActorExperciseSelectPanel.prototype.showForParent = function (lineUuid, parent) {
                this.lineUuid = lineUuid;
                if (parent == null) {
                    parent = Games.MenuLayer.module;
                }
                parent.addChild(this);
                //aspect
                this.setSize(fairygui.GRoot.inst.width, fairygui.GRoot.inst.height);
                this.addRelation(parent, fairygui.RelationType.Size);
                this.actorList = Game.moduleModel.actor.getActors();
                this.m_title.text = TEXT.ProduceActorTitle;
                this.m_btnClose.onClick(this, this.onClose);
                this.setListContent();
                Game.protoOkEvent.add(ProtoEventKey.Actor_ActorExerciseStart, this.callBackActorExerciseStart, this);
            };
            ActorExperciseSelectPanel.prototype.onClose = function () {
                Game.protoOkEvent.remove(ProtoEventKey.Actor_ActorExerciseStart, this.callBackActorExerciseStart, this);
                this.selectItem = null;
                this.actorList.length = 0;
                this.removeFromParent();
            };
            ActorExperciseSelectPanel.prototype.callBackActorExerciseStart = function (proto) {
                this.onClose();
            };
            ActorExperciseSelectPanel.prototype.setListContent = function () {
                var _this = this;
                this.m_list.removeChildrenToPool();
                var i = -1;
                this.actorList = this.actorList.filter(function (value, index, array) {
                    return !_this.isExperciseActor(value.uuid);
                });
                for (var _i = 0, _a = this.actorList; _i < _a.length; _i++) {
                    var actor = _a[_i];
                    i++;
                    var item = this.m_list.addItemFromPool();
                    item.setInfo(actor);
                    item.name = i.toString();
                    item.m_btnSelect.onClick(this, this.onAvatarSelected, [item]);
                    this.m_list.addChild(item);
                }
            };
            ActorExperciseSelectPanel.prototype.isExperciseActor = function (actorUuid) {
                var actorExperciseData = Game.moduleModel.actor.getActorExerciseDataByActorUuid(actorUuid);
                return (actorExperciseData != null && actorExperciseData.uuid != "");
            };
            ActorExperciseSelectPanel.prototype.onAvatarSelected = function (e) {
                this.selectItem = e;
                if (!Games.AvatarManager.isActorExerciseOnLimit(e.data.id)) {
                    //requset
                    var actorUuid = Game.moduleModel.actor.getActor(e.data.id).uuid;
                    Game.protosender.Actor.ActorExerciseStart(actorUuid, this.lineUuid);
                }
            };
            return ActorExperciseSelectPanel;
        }(PfSkin.ActorExperciseSelectPanelStruct));
        PfSkin.ActorExperciseSelectPanel = ActorExperciseSelectPanel;
    })(PfSkin = fgui.PfSkin || (fgui.PfSkin = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=ActorExperciseSelectPanel.js.map