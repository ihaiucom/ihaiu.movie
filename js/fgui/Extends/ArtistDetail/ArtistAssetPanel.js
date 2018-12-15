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
        var ArtistAssetPanel = /** @class */ (function (_super) {
            __extends(ArtistAssetPanel, _super);
            function ArtistAssetPanel() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            ArtistAssetPanel.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_list.itemRenderer = Handler.create(this, this.onUpdateItem, null, false);
                this.m_list.setVirtual();
                this.poolIcons = [];
                this.items = [];
                this.tweenItems = [];
            };
            /**
             *
             * @param data 艺人数据
             */
            ArtistAssetPanel.prototype.updateView = function (data) {
                this.actorData = data;
                var curConfig = Game.config.actorLoyalty.getConfigByIdLv(this.actorData.id, this.actorData.loyaltyLevel);
                this.m_assetLoyaltyBar.m_assetBar.value = this.actorData.loyaltyExp;
                ;
                this.m_assetLoyaltyBar.m_assetBar.max = curConfig.exp;
                this.m_tipMsg.text = Games.TEXT.PropertyTipMsg;
                this.m_assetLoyaltyBar.m_assetBar.m_title.visible = false;
                if (this.actorData.isLoyaltyMaxLv) {
                    this.m_assetLoyaltyBar.m_title.text = "MAX";
                }
                else {
                    this.m_assetLoyaltyBar.m_title.text = this.actorData.loyaltyExp + "/" + curConfig.exp;
                }
                //资产
                this.m_list.numItems = Games.ActorModel.assetLenth;
                //当前忠诚度
                this.m_assetLoyaltyBar.m_love.text = Games.TEXT.Level + this.actorData.loyaltyLevel;
            };
            /**
             *
             * @param index 索引
             * @param item
             */
            ArtistAssetPanel.prototype.onUpdateItem = function (index, item) {
                item.updateView(this.actorData, index);
            };
            /**
             * 播放一个特效
             */
            ArtistAssetPanel.prototype.playeffect = function () {
                this.m_t0.play();
            };
            ArtistAssetPanel.prototype.playUpAsset = function () {
                var _this = this;
                var type = Game.moduleModel.actor.giveAssetType;
                var uuid = Game.moduleModel.actor.giveAssetUUid;
                var num = Game.moduleModel.actor.giveAssetNum;
                if (uuid == this.actorData.uuid) {
                    var item = this.m_list.getChildAt(type);
                    if (item) {
                        var globalPos = item.localToGlobal(item.m_sendBtn.x, item.m_sendBtn.y);
                        var localPos = this.globalToLocal(globalPos.x, globalPos.y);
                        var cItem_1;
                        if (this.poolIcons.length > 0) {
                            cItem_1 = this.poolIcons[0];
                            this.poolIcons.splice(0, 1);
                        }
                        else {
                            cItem_1 = fgui.Common.CommonItem.createInstance();
                            this.items.push(cItem_1);
                        }
                        cItem_1.m_icon.icon = fairygui.UIPackage.getItemURL(Games.GuiPackageNames.PfSkin, "icon_contribution");
                        cItem_1.m_c_show_bg.selectedIndex = 1;
                        cItem_1.m_title.text = "";
                        this.addChild(cItem_1);
                        cItem_1.alpha = 0.5;
                        cItem_1.setXY(localPos.x, localPos.y);
                        this.tweenItems.push(cItem_1);
                        Game.sound.playSound(SoundKey.MM21_ArtistAccord);
                        Laya.Tween.to(cItem_1, { x: 0, y: 0, alpha: 1 }, 500, Laya.Ease.quadIn, Handler.create(null, function () {
                            _this.removeChild(cItem_1);
                            _this.poolIcons.push(cItem_1);
                        }));
                    }
                }
            };
            //
            ArtistAssetPanel.prototype.stopUpAsset = function () {
                for (var index = 0; index < this.tweenItems.length; index++) {
                    var element = this.tweenItems[index];
                    Laya.Tween.clearAll(element);
                    element.removeFromParent();
                }
            };
            return ArtistAssetPanel;
        }(ArtistDetail.ArtistAssetPanelStruct));
        ArtistDetail.ArtistAssetPanel = ArtistAssetPanel;
    })(ArtistDetail = fgui.ArtistDetail || (fgui.ArtistDetail = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=ArtistAssetPanel.js.map