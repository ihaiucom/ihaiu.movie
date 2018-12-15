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
        var ArtistBasePanel = /** @class */ (function (_super) {
            __extends(ArtistBasePanel, _super);
            function ArtistBasePanel() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            /**
             *更新界面显示
             * @param data 艺人数据
             */
            ArtistBasePanel.prototype.updateView = function (data) {
                this.actorData = data;
                if (data) {
                    // this.m_attLabel1.text = data.spectacle + "";
                    // this.m_attLabel2.text = data.perform + "";
                    // this.m_attLabel3.text = data.plot + "";
                    // this.m_attLabel4.text = data.entertainment + "";
                    var props = data.getProps();
                    this.m_attrList.numItems = props.length;
                    this.m_upgradeBtn.grayed = Game.moduleModel.actor.isOpenTrain == false;
                    this.m_DetailTextCom.text = data.config.tips;
                    //雪藏艺人隐藏训练按钮
                    var isHide = Game.moduleModel.actor.isHide(data.id);
                    this.m_upgradeBtn.visible = !isHide;
                }
            };
            ArtistBasePanel.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_attrList.itemRenderer = Handler.create(this, this.updateAttrHandler, null, false);
                this.m_upgradeBtn.text = Games.TEXT.ActorTrain;
                this.m_upgradeBtn.onClick(this, this.onClickUpgradeBtn);
            };
            ArtistBasePanel.prototype.updateAttrHandler = function (index, item) {
                var props = this.actorData.getProps();
                var id = props[index];
                var config = Game.config.property.getConfig(id);
                var field = config.field;
                var value = this.actorData[field];
                item.updateView(value, config.name, Game.config.avatar.getConfig(config.icon).iconUrl);
                // this.attrLabels[index].text = value;
                // this.attrTitles[index].text = ;
                // this.attrIcons[index].icon = Game.config.avatar.getConfig(config.icon).iconUrl;
            };
            /**
             * 点击培养
             */
            ArtistBasePanel.prototype.onClickUpgradeBtn = function () {
                if (Game.moduleModel.actor.isOpenTrain) {
                    Game.menu.open(MenuId.ArtistTrain, this.actorData.id);
                }
                else {
                    Game.system.toastText(Game.moduleModel.actor.openTrainTip);
                }
            };
            ArtistBasePanel.lv = 30;
            return ArtistBasePanel;
        }(ArtistDetail.ArtistBasePanelStruct));
        ArtistDetail.ArtistBasePanel = ArtistBasePanel;
    })(ArtistDetail = fgui.ArtistDetail || (fgui.ArtistDetail = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=ArtistBasePanel.js.map