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
    var Activity;
    (function (Activity) {
        var SevenItem = /** @class */ (function (_super) {
            __extends(SevenItem, _super);
            function SevenItem() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.specialNum = 0;
                return _this;
            }
            SevenItem.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_waitTip.text = TEXT.NoGetReward;
                this.m_okBtn.m_title.text = TEXT.GetReward;
                this.m_rewardList.itemRenderer = Laya.Handler.create(this, this.initItem, null, false);
                this.m_rewardList.itemProvider = Handler.create(this, this.providerItem, null, false);
                // 领取按钮
                this.m_okBtn.onClick(this, this.onClickOkBtn);
            };
            SevenItem.prototype.onClickOkBtn = function () {
                if (Game.moduleModel.activity.sevenIsOver) {
                    Game.system.toastText(Game.config.msg.getConfig(MsgKey.time_out_sevendays).notice);
                }
                else {
                    GlobalModalWaiting.show();
                    Game.moduleModel.activity.sendSevenGet(this.indexOf);
                }
            };
            SevenItem.prototype.setData = function (data, index) {
                this.indexOf = index;
                this.curData = data;
                this.m_dayTip.text = format(Game.config.msg.getConfig(MsgKey.day_count).notice, this.curData.count);
                this.setItemInfData(this.curData.special_reward, this.curData.reward);
                this.m_rewardList.numItems = this.itemInf.length;
                // 控制显示那个状态
                this.m_c1.setSelectedIndex(Game.moduleModel.activity.curSevenStatus(data.count));
            };
            // 列表信息赋值
            SevenItem.prototype.setItemInfData = function (special_reward, reward) {
                this.itemInf = [];
                this.specialNum = 0;
                for (var i = 0; i < special_reward.length; i++) {
                    this.itemInf.push(special_reward[i]);
                    this.specialNum++;
                }
                for (var i = 0; i < reward.length; i++) {
                    this.itemInf.push(reward[i]);
                }
            };
            SevenItem.prototype.initItem = function (index, obj) {
                var data = this.itemInf[index];
                var showSpecail = 0;
                if (index < this.specialNum) {
                    showSpecail = 1;
                }
                if (data == null) {
                    return;
                }
                var itemData = Games.ItemData.Create(data.itemId, data.itemNum);
                if (itemData.itemType == 7) {
                    var item = obj;
                    item.Render(itemData);
                    if (showSpecail === 1 && this.curData.image.length > 1) {
                        item.m_special.icon = ImageConfig.getUrl(this.curData.image);
                        item.m_showSpecial.setSelectedIndex(showSpecail);
                    }
                    else {
                        item.m_showSpecial.setSelectedIndex(0);
                    }
                }
                else {
                    var item = obj;
                    item.m_icon.icon = itemData.itemIconUrl;
                    item.title = itemData.itemNumTxt;
                    item.m_star.starNum = itemData.itemStar;
                    item.PopupInfo = itemData.itemId;
                    if (showSpecail === 1 && this.curData.image.length > 1) {
                        item.m_special.icon = ImageConfig.getUrl(this.curData.image);
                        item.m_showSpecial.setSelectedIndex(showSpecail);
                    }
                    else {
                        item.m_showSpecial.setSelectedIndex(0);
                    }
                }
            };
            SevenItem.prototype.providerItem = function (index) {
                var data = this.itemInf[index];
                if (data == null) {
                    return fgui.Common.CommonAssetItem_little.URL;
                }
                var item = Games.ItemData.Create(data.itemId, data.itemNum);
                if (item.itemType == 7) {
                    return fgui.Common.PactIcon_44.URL;
                }
                else {
                    return fgui.Common.CommonAssetItem_little.URL;
                }
            };
            return SevenItem;
        }(Activity.SevenItemStruct));
        Activity.SevenItem = SevenItem;
    })(Activity = fgui.Activity || (fgui.Activity = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=SevenItem.js.map