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
        var ArtistAssistantPanel = /** @class */ (function (_super) {
            __extends(ArtistAssistantPanel, _super);
            function ArtistAssistantPanel() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            /**
             *更新界面显示
             * @param data 艺人数据
             */
            ArtistAssistantPanel.prototype.updateView = function (data) {
                this.actorData = data;
                if (data) {
                    var props = data.getProps();
                    this.m_attrList.numItems = props.length;
                    this.m_lessonList.numItems = data.assitantList.length;
                    this.m_pactIcon.updateContractByActorId(data.id);
                    if (data.aideLvConfig) {
                        //
                        this.m_lvIcon.url = data.aideLvConfig.itemUrl;
                        //
                        //
                        if (data.aideLvConfig.id == 0) {
                            this.m_energyBar.value = 0;
                            this.m_energyBar.max = data.aideLvConfig.lv[1];
                            this.m_energyBar.m_title.visible = false;
                        }
                        else {
                            this.m_energyBar.value = data.assistantLv;
                            this.m_energyBar.max = data.aideLvConfig.lv[1];
                            this.m_energyBar.m_title.visible = true;
                        }
                    }
                }
            };
            ArtistAssistantPanel.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
            };
            ArtistAssistantPanel.prototype.onWindowShow = function () {
                this.m_attrList.itemRenderer = Handler.create(this, this.updateAttrHandler, null, false);
                this.m_lessonList.itemRenderer = Handler.create(this, this.updateLessonHandler, null, false);
                this.m_lessonList.on(fairygui.Events.CLICK_ITEM, this, this.onClickLessonItem);
                Game.protoOkEvent.add(ProtoEventKey.ActorData, this.onUpdatehandler, this);
                //助理icon
                this.m_icon.url = Game.moduleModel.actor.assistantNpcUrl;
                //
                this.m_desc.text = TEXT.AssistantBaseDesc;
            };
            ArtistAssistantPanel.prototype.onWindowHide = function () {
                this.m_attrList.itemRenderer.recover();
                this.m_lessonList.itemRenderer.recover();
                Game.protoOkEvent.remove(ProtoEventKey.ActorData, this.onUpdatehandler, this);
                this.m_lessonList.off(fairygui.Events.CLICK_ITEM, this, this.onClickLessonItem);
            };
            /**
             * 更新
             */
            ArtistAssistantPanel.prototype.onUpdatehandler = function () {
                this.updateView(this.actorData);
            };
            /**
             *
             * @param item
             */
            ArtistAssistantPanel.prototype.onClickLessonItem = function (item) {
                Game.menu.open(MenuId.ArtistAssistant, item.lessonData);
            };
            ArtistAssistantPanel.prototype.updateAttrHandler = function (index, item) {
                var assistantData = this.actorData.assitantList[index];
                item.updateView(assistantData, assistantData.propId);
            };
            ArtistAssistantPanel.prototype.updateLessonHandler = function (index, item) {
                var lessonData = this.actorData.assitantList[index];
                if (lessonData) {
                    item.showUp = true;
                    item.updateView(lessonData);
                }
            };
            return ArtistAssistantPanel;
        }(ArtistDetail.ArtistAssistantPanelStruct));
        ArtistDetail.ArtistAssistantPanel = ArtistAssistantPanel;
    })(ArtistDetail = fgui.ArtistDetail || (fgui.ArtistDetail = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=ArtistAssistantPanel.js.map