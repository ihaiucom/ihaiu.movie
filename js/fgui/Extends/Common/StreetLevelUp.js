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
        var StreetLevelUp = /** @class */ (function (_super) {
            __extends(StreetLevelUp, _super);
            function StreetLevelUp() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            /**
             * 街区升级
             */
            StreetLevelUp.prototype.open = function () {
                this.streetData = Game.moduleModel.street.currentStreetData;
                var lastStreet = this.streetData.LastStreet;
                if (lastStreet) {
                    this.m_lastStreet.text = lastStreet.Name;
                }
                this.m_street.m_name.text = this.streetData.Name;
                this.m_street.m_icon.url = this.streetData.iconUrl;
                this.m_currentStreet.text = this.streetData.Name;
                this.m_awardList.itemRenderer = Handler.create(this, this.RenderRewardItem, null, false);
                this.m_awardList.itemProvider = Handler.create(this, this.GetRewardItemResource, null, false);
                this.m_awardList.numItems = this.streetData.Reward.length;
                this.m_btnGetAward.onClick(this, this.close);
                Games.MenuLayer.showDialogModel();
                Games.MenuLayer.dialog.addChild(this);
                centerScreen(this);
            };
            StreetLevelUp.prototype.RenderRewardItem = function (index, obj) {
                var data = this.streetData.Cfg.upgrade_reward[index];
                if (data == null) {
                    return;
                }
                var itemData = Games.ItemData.Create(data.itemId, data.itemNum);
                if (itemData.itemType == 7) {
                    var pact = obj;
                    pact.Render(itemData);
                    // pact.m_icon.m_icon.url = itemData.itemBodyIconUrl;
                    // pact.title = itemData.itemNumTxt;
                    // pact.m_star.starNum = itemData.itemStar;
                }
                else {
                    var item = obj;
                    item.m_icon.url = itemData.itemIconUrl;
                    item.m_title.text = itemData.itemNumTxt;
                    item.m_star.starNum = itemData.itemStar;
                    item.PopupInfo = data.itemId;
                }
            };
            StreetLevelUp.prototype.GetRewardItemResource = function (index) {
                var data = this.streetData.Cfg.upgrade_reward[index];
                if (data == null) {
                    return fgui.Common.CommonItem.URL;
                }
                var itemType = Game.config.item.getType(data.itemId);
                if (itemType == 7) {
                    return fgui.Common.PactIcon_80.URL;
                }
                else {
                    return fgui.Common.CommonItem.URL;
                }
            };
            StreetLevelUp.prototype.close = function () {
                Games.MenuLayer.hideDialogModel();
                this.onHide();
                //检测升档
                Game.moduleModel.func.checkBlockLevel();
            };
            StreetLevelUp.prototype.onHide = function () {
                this.removeFromParent();
            };
            return StreetLevelUp;
        }(Common.StreetLevelUpStruct));
        Common.StreetLevelUp = StreetLevelUp;
    })(Common = fgui.Common || (fgui.Common = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=StreetLevelUp.js.map