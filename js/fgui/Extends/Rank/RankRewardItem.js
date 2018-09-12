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
    var Rank;
    (function (Rank) {
        var RankRewardItem = /** @class */ (function (_super) {
            __extends(RankRewardItem, _super);
            function RankRewardItem() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            RankRewardItem.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_listReward.itemRenderer = new Handler(this, this.RenderRewardItem, null, false);
            };
            RankRewardItem.prototype.Render = function (serverRewardData) {
                this.serverRewardData = serverRewardData;
                if (this.serverRewardData == null) {
                    return;
                }
                this.m_txtRank.text = this.serverRewardData.stringRank;
                this.m_listReward.numItems = this.serverRewardData.rewardList.length;
            };
            RankRewardItem.prototype.RenderRewardItem = function (index, obj) {
                var data = this.serverRewardData.rewardList[index];
                obj.m_num.text = formatNumberUnit(data.itemNum);
                obj.icon = data.itemIconUrl;
                obj.m_star.starNum = data.itemStar;
                obj.PopupInfo = data.itemId;
            };
            return RankRewardItem;
        }(Rank.RankRewardItemStruct));
        Rank.RankRewardItem = RankRewardItem;
    })(Rank = fgui.Rank || (fgui.Rank = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=RankRewardItem.js.map