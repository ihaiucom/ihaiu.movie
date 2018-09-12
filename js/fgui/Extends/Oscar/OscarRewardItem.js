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
    var Oscar;
    (function (Oscar) {
        var OscarRewardItem = /** @class */ (function (_super) {
            __extends(OscarRewardItem, _super);
            function OscarRewardItem() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            OscarRewardItem.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_list.itemRenderer = new Handler(this, this.RenderItem, null, false);
                this.m_btnReward.onClick(this, this.OnRewardClick);
            };
            OscarRewardItem.prototype.Render = function (oscarRewardData) {
                this.oscarRewardData = oscarRewardData;
                this.m_name.text = this.oscarRewardData.name;
                this.m_title.text = this.oscarRewardData.title;
                this.m_info.text = this.oscarRewardData.info;
                this.m_isNew.setSelectedIndex(this.oscarRewardData.IsHistoryBest ? 1 : 0);
                if (this.oscarRewardData.canReward) {
                    this.m_list.numItems = this.oscarRewardData.RewardList.length;
                    if (this.oscarRewardData.hasGetReward) {
                        this.m_rewardState.setSelectedIndex(2);
                    }
                    else {
                        this.m_rewardState.setSelectedIndex(1);
                    }
                }
                else {
                    this.m_rewardState.setSelectedIndex(0);
                    this.m_tip.text = this.oscarRewardData.tip;
                }
            };
            OscarRewardItem.prototype.RenderItem = function (index, obj) {
                var data = this.oscarRewardData.RewardList[index];
                obj.m_num.text = data.itemNumTxt;
                obj.icon = data.itemIconUrl;
                obj.m_star.starNum = data.itemStar;
                obj.PopupInfo = data.itemId;
            };
            OscarRewardItem.prototype.OnRewardClick = function () {
                Game.protosender.rank.GetOscarReward(this.oscarRewardData.type);
            };
            return OscarRewardItem;
        }(Oscar.OscarRewardItemStruct));
        Oscar.OscarRewardItem = OscarRewardItem;
    })(Oscar = fgui.Oscar || (fgui.Oscar = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=OscarRewardItem.js.map