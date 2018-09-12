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
        var ProduceSelectActorPanel = /** @class */ (function (_super) {
            __extends(ProduceSelectActorPanel, _super);
            function ProduceSelectActorPanel() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            ProduceSelectActorPanel.prototype.showForParent = function (produceId, selectCaller, parent) {
                this.produceId = produceId;
                this.selectCaller = selectCaller;
                this.onProduceActorList = Game.moduleModel.produce.getActorList();
                if (parent == null) {
                    parent = Games.MenuLayer.module;
                }
                parent.addChild(this);
                this.m_commonDialog.m_title.text = TEXT.ProduceActorTitle;
                this.m_commonDialog.m_closeBtn.onClick(this, this.onClose);
                this.setFilterTypeList();
                this.setListContent();
                Game.protoOkEvent.add(ProtoEventKey.manageProduce_SendActor, this.callBackSendActor, this);
            };
            ProduceSelectActorPanel.prototype.callBackSendActor = function (proto) {
                if (this.selectCaller) {
                    this.selectCaller(proto.actBaseId);
                }
                this.onClose();
            };
            //显示类型
            ProduceSelectActorPanel.prototype.setFilterTypeList = function () {
                var cfg = Game.config.produce.getConfig(this.produceId);
                this.actorList = Game.moduleModel.actor.getActors();
                this.m_typefilterList.removeChildrenToPool();
                if (cfg) {
                    var propCfg = void 0;
                    if (cfg.cheer_sex != 0) {
                        var item = this.m_typefilterList.addItemFromPool();
                        propCfg = Game.config.property.getConfig(cfg.cheer_sex);
                        item.m_loader.url = propCfg.iconUrl;
                        this.m_typefilterList.addChild(item);
                        this.actorList = this.actorList.filter(function (value, index, array) {
                            return value.config.sex == cfg.cheer_sex;
                        });
                    }
                    if (cfg.cheer_continents != 0) {
                        var item = this.m_typefilterList.addItemFromPool();
                        propCfg = Game.config.property.getConfig(cfg.cheer_continents);
                        item.m_loader.url = propCfg.iconUrl;
                        this.m_typefilterList.addChild(item);
                        this.actorList = this.actorList.filter(function (value, index, array) {
                            return value.config.country == cfg.cheer_continents;
                        });
                    }
                    if (cfg.cheer_age != 0) {
                        var item = this.m_typefilterList.addItemFromPool();
                        propCfg = Game.config.property.getConfig(cfg.cheer_age);
                        item.m_loader.url = propCfg.iconUrl;
                        this.m_typefilterList.addChild(item);
                        this.actorList = this.actorList.filter(function (value, index, array) {
                            return value.config.age_type == cfg.cheer_age;
                        });
                    }
                    if (cfg.cheer_type != 0) {
                        var item = this.m_typefilterList.addItemFromPool();
                        propCfg = Game.config.property.getConfig(cfg.cheer_type);
                        item.m_loader.url = propCfg.iconUrl;
                        this.m_typefilterList.addChild(item);
                        this.actorList = this.actorList.filter(function (value, index, array) {
                            return value.config.show_type == cfg.cheer_type;
                        });
                    }
                }
            };
            ProduceSelectActorPanel.prototype.setListContent = function () {
                this.m_list.removeChildrenToPool();
                var i = -1;
                for (var _i = 0, _a = this.actorList; _i < _a.length; _i++) {
                    var actor = _a[_i];
                    i++;
                    var item = this.m_list.addItemFromPool();
                    item.setInfo(actor);
                    item.isOnProduce = this.isActorOnProduce(actor.id);
                    item.name = i.toString();
                    this.m_list.addChild(item);
                }
                this.m_list.on(fairygui.Events.CLICK_ITEM, this, this.onAvatarSelected);
            };
            //艺人是否在助产
            ProduceSelectActorPanel.prototype.isActorOnProduce = function (actorId) {
                return this.onProduceActorList.indexOf(actorId) != -1;
            };
            ProduceSelectActorPanel.prototype.onAvatarSelected = function (e) {
                // this.selectItem = e;
                // if (e.isOnProduce)
                // {
                // 	this.onClose();
                // }
                // else
                {
                    //requset
                    Game.protosender.manageProduce.SendActor(this.produceId, e.data.id);
                }
            };
            ProduceSelectActorPanel.prototype.onClose = function () {
                Game.protoOkEvent.remove(ProtoEventKey.manageProduce_SendActor, this.callBackSendActor, this);
                this.selectCaller = null;
                this.removeFromParent();
            };
            return ProduceSelectActorPanel;
        }(Produce.ProduceSelectActorPanelStruct));
        Produce.ProduceSelectActorPanel = ProduceSelectActorPanel;
    })(Produce = fgui.Produce || (fgui.Produce = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=ProduceSelectActorPanel.js.map