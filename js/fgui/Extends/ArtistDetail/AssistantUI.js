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
    var ArtistDetail;
    (function (ArtistDetail) {
        var AssistantUI = /** @class */ (function (_super) {
            __extends(AssistantUI, _super);
            function AssistantUI() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            AssistantUI.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.attrlist = new Array();
            };
            AssistantUI.prototype.onWindowShow = function () {
                this.m_upgradeBtn.onClick(this, this.onClickUpgradeBtn);
                this.m_costList.itemRenderer = Handler.create(this, this.onUpdateCostRender, null, false);
                this.m_costList.itemProvider = Handler.create(this, this.onUpdateProviderRender, null, false);
                this.lessonData = this.moduleWindow.menuParameter.args[0];
                Game.protoOkEvent.add(ProtoEventKey.ActorData, this.updateView, this);
                Game.protoOkEvent.add(ProtoEventKey.Actor_AssistantUpLv, this.assistantUpHandler, this);
                this.updateView();
                this.m_c_effect_visible.selectedIndex = 0;
            };
            AssistantUI.prototype.onWindowHide = function () {
                this.m_costList.itemRenderer.recover();
                this.m_costList.itemProvider.recover();
                this.m_upgradeBtn.offClick(this, this.onClickUpgradeBtn);
                Game.protoOkEvent.remove(ProtoEventKey.ActorData, this.updateView, this);
                Game.protoOkEvent.remove(ProtoEventKey.Actor_AssistantUpLv, this.assistantUpHandler, this);
            };
            AssistantUI.prototype.assistantUpHandler = function (msg) {
                var _this = this;
                var data = Game.moduleModel.actor.getActorByUUid(msg.uuid);
                if (data) {
                    var assistantData = data.assitantList[msg.id - 1];
                    if (assistantData && assistantData.preValue) {
                        var preValue = assistantData.preValue;
                        if (preValue <= 0) {
                            return;
                        }
                        var attr;
                        if (this.attrlist.length > 0) {
                            attr = this.attrlist.pop();
                        }
                        else {
                            attr = fgui.Common.AttrUpView.createInstance();
                            this.addChild(attr);
                        }
                        attr.text = "+" + preValue;
                        attr.icon = assistantData.propUrl;
                        var posX = this.m_topPanel.x + this.m_topPanel.width - 100;
                        var posY = this.m_topPanel.y + this.m_topPanel.height - attr.height;
                        attr.setXY(posX, posY);
                        attr.visible = true;
                        laya.utils.Tween.to(attr, { y: posY - 100 }, 500, Laya.Ease.quadIn, Handler.create(this, function () {
                            _this.attrlist.push(attr);
                            attr.visible = false;
                        }));
                        this.m_effect.m_t501.stop(true, true);
                        this.m_c_effect_visible.selectedIndex = 1;
                        this.m_effect.m_t501.play(Handler.create(null, function () {
                            _this.m_c_effect_visible.selectedIndex = 0;
                        }), 1, 0, 0, 1);
                    }
                }
            };
            AssistantUI.prototype.onClickUpgradeBtn = function () {
                if (this.lessonData.isMax) {
                    Game.system.toastText(TEXT.AssistantUpgradeMax);
                    return;
                }
                var enough = ItemHelper.checkItemsEnough(this.cost);
                if (enough) {
                    Game.protosender.Actor.AssistantUpLv(this.lessonData.uuid, this.lessonData.id);
                }
                else {
                    var item = ItemHelper.getItemNotEnough(this.cost);
                    Game.system.openItemWay(item.itemId, item.itemNum);
                }
            };
            //
            AssistantUI.prototype.onUpdateProviderRender = function (index) {
                var url = fgui.Common.PactIcon_80.URL;
                if (this.lessonData.cost[index].itemType != EItemCategory.contract) {
                    url = fgui.Common.PropInfoItem.URL;
                }
                return url;
            };
            AssistantUI.prototype.onUpdateCostRender = function (index, item) {
                item.setCost(this.lessonData.cost[index]);
            };
            AssistantUI.prototype.updateView = function () {
                if (this.lessonData.level > 0) {
                    //unlock
                    this.m_upgradeBtn.text = TEXT.AssistantUpgrade;
                    this.m_c_canup.selectedIndex = 0;
                }
                else {
                    //lock
                    this.m_upgradeBtn.text = TEXT.AssistantStudy;
                    this.m_c_canup.selectedIndex = 1;
                    var propId = this.lessonData.actorData.getProps()[this.lessonData.id - 1];
                    var propstr = Game.config.property.getConfig(propId).name;
                    //
                    this.m_des.text = format(TEXT.AssistantDesc, propstr);
                }
                this.m_topPanel.updateView(this.lessonData);
                this.m_centerPanel.updateView(this.lessonData);
                //消耗
                this.cost = this.lessonData.cost;
                this.m_costList.removeChildrenToPool();
                this.m_costList.numItems = this.cost.length;
            };
            return AssistantUI;
        }(ArtistDetail.AssistantUIStruct));
        ArtistDetail.AssistantUI = AssistantUI;
    })(ArtistDetail = fgui.ArtistDetail || (fgui.ArtistDetail = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=AssistantUI.js.map