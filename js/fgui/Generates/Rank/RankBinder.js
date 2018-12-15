/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////
var fgui;
(function (fgui) {
    var Rank;
    (function (Rank) {
        var RankBinder = /** @class */ (function () {
            function RankBinder() {
            }
            RankBinder.bindAll = function () {
                fairygui.UIObjectFactory.setPackageItemExtension(Rank.RankMainPanel.URL, Rank.RankMainPanel);
                fairygui.UIObjectFactory.setPackageItemExtension(Rank.RankRewardPanel.URL, Rank.RankRewardPanel);
                fairygui.UIObjectFactory.setPackageItemExtension(Rank.RankItem.URL, Rank.RankItem);
                fairygui.UIObjectFactory.setPackageItemExtension(Rank.RankRewardItem.URL, Rank.RankRewardItem);
                fairygui.UIObjectFactory.setPackageItemExtension(Rank.UserRank.URL, Rank.UserRank);
            };
            return RankBinder;
        }());
        Rank.RankBinder = RankBinder;
    })(Rank = fgui.Rank || (fgui.Rank = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=RankBinder.js.map