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
        var ArtistAssetItem = /** @class */ (function (_super) {
            __extends(ArtistAssetItem, _super);
            function ArtistAssetItem() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            ArtistAssetItem.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_sendBtn.onClick(this, this.onClickSendBtn);
                this.m_starList.itemRenderer = Handler.create(this, this.onUpdateStarItem, null, false);
                this.m_sendBtn.text = Games.TEXT.Send;
                this.m_lockGroup.visible = false;
            };
            /**
             * 星级
             * @param index 索引
             * @param item
             */
            ArtistAssetItem.prototype.onUpdateStarItem = function (index, item) {
                item.icon = Game.config.avatar.getConfig(Game.config.property.getConfig(this.itemConfig.star).icon).iconUrl;
            };
            /**
             * 更新界面
             * @param data 艺人数据
             */
            ArtistAssetItem.prototype.updateView = function (data, index) {
                this.index = index;
                this.actorData = data;
                this.assetData = data.assets[index];
                var itemId = this.assetData.item;
                var itemConfig = Game.config.item.getConfig(itemId);
                //道具配置
                this.itemConfig = itemConfig;
                //道具
                if (itemConfig) {
                    //道具icon
                    this.m_itemView.icon = itemConfig.iconUrl;
                    //道具名字
                    this.m_name.text = itemConfig.name + "";
                    //属性表
                    var propertyConfig = Game.config.property.getConfig(itemConfig.star);
                    if (propertyConfig) {
                        this.m_starList.numItems = parseInt(propertyConfig.field);
                    }
                }
                //属性图标
                this.m_picon.icon = Game.config.avatar.getConfig(Game.config.property.getConfig(this.assetData.actor_property).icon).iconUrl;
                //+x
                this.m_value.text = format("+{0}", this.assetData.value);
                //描述信息 每得到10个即可
                this.m_desc.text = format(Games.TEXT.GetAssetToGetProp, this.assetData.num);
                //最大可以赠送
                var sendMax = this.assetData.maxSendNum;
                //赠送资产数量上限
                sendMax = Math.min(sendMax, this.assetData.max);
                //当前已经赠送
                var currMax = this.assetData.getItemNum(itemId);
                //个数 
                this.m_itemView.title = format("{0}/{1}", currMax, sendMax);
                this.currSendNum = currMax;
                this.maxSendNum = sendMax;
                //可以赠送数量
                var remain = sendMax - currMax;
                remain = Math.max(0, remain);
                //当前拥有数量
                var curr = Game.moduleModel.item.getItemNum(itemId);
                //可数量
                this.max = Math.min(curr, remain);
                //当前物品数量
                this.curr = curr;
                //是否灰态
                this.m_sendBtn.grayed = this.max <= 0;
                //当前等级最大数量
                this.m_bar.max = this.assetData.num;
                //当前等级已经赠送的数量
                this.m_bar.value = this.assetData.getCurLvItemNum(itemId);
            };
            /**
             * 点击赠送
             */
            ArtistAssetItem.prototype.onClickSendBtn = function () {
                var _this = this;
                if (this.assetData.isMax) {
                    Game.system.toastText(TEXT.AssetSendMax);
                    return;
                }
                if (this.currSendNum >= this.maxSendNum) {
                    Game.system.confirmText(TEXT.AssetSendMaxToExpend, TEXT.AssetExpend, null, function () {
                        //艺人升级 list assetpanel
                    }, function () {
                        if (ItemHelper.checkItemEnough2(5003, 1)) {
                            var max = Math.min(_this.assetData.useCardMax, Game.moduleModel.item.getItemNum(5003));
                            Game.system.setNumText(max, TEXT.AssetChooseCardNum, "", null, function (num) {
                                Game.protosender.Actor.GiveLoyaltyCard(_this.actorData.uuid, _this.assetData.type, num);
                            }, null, TEXT.Use);
                        }
                        else {
                            // Game.system.toastItemNotEnough(5003);
                            Game.system.openItemWay(5003, 1);
                        }
                    }, TEXT.AssetArtistUpgrade, TEXT.AssetUseCard);
                }
                else {
                    if (this.curr > 0) {
                        if (this.max > 0) {
                            Game.system.setNumText(this.max, Games.TEXT.ChooseSendAssetNum, "", null, function (num) {
                                Game.moduleModel.actor.giveAssetType = _this.index;
                                Game.moduleModel.actor.giveAssetUUid = _this.actorData.uuid;
                                Game.moduleModel.actor.giveAssetNum = num;
                                //赠送资产
                                Game.protosender.Actor.giveActorAssets(_this.actorData.uuid, _this.assetData.type, _this.assetData.lv, num);
                                // 埋点 艺人资产赠送
                                Games.Static.Instance.onUserorbit("star", _this.actorData.id.toString(), "asset");
                                Games.Static.Instance.onResourceinput([ItemHelper.createDtItem([_this.itemConfig.id, num])], "starAsset", _this.actorData.id, -1);
                            });
                        }
                        else {
                            //数量上限
                            Game.system.toastText(Games.TEXT.SendAssetMax);
                        }
                    }
                    else {
                        //道具不足
                        // Game.system.toastItemNotEnough(this.itemConfig.id);
                        Game.system.openItemWay(this.itemConfig.id, 1);
                    }
                }
            };
            return ArtistAssetItem;
        }(ArtistDetail.ArtistAssetItemStruct));
        ArtistDetail.ArtistAssetItem = ArtistAssetItem;
    })(ArtistDetail = fgui.ArtistDetail || (fgui.ArtistDetail = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=ArtistAssetItem.js.map