/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////
var fgui;
(function (fgui) {
    var Bag;
    (function (Bag) {
        var BagBinder = /** @class */ (function () {
            function BagBinder() {
            }
            BagBinder.bindAll = function () {
                fairygui.UIObjectFactory.setPackageItemExtension(Bag.BagItemInfo.URL, Bag.BagItemInfo);
                fairygui.UIObjectFactory.setPackageItemExtension(Bag.BagMainPanel.URL, Bag.BagMainPanel);
                fairygui.UIObjectFactory.setPackageItemExtension(Bag.SystemSelectActorPanel.URL, Bag.SystemSelectActorPanel);
                fairygui.UIObjectFactory.setPackageItemExtension(Bag.ActorItem.URL, Bag.ActorItem);
                fairygui.UIObjectFactory.setPackageItemExtension(Bag.PactItem.URL, Bag.PactItem);
                fairygui.UIObjectFactory.setPackageItemExtension(Bag.PropItem.URL, Bag.PropItem);
                fairygui.UIObjectFactory.setPackageItemExtension(Bag.BtnTab.URL, Bag.BtnTab);
                fairygui.UIObjectFactory.setPackageItemExtension(Bag.ActorBg.URL, Bag.ActorBg);
                fairygui.UIObjectFactory.setPackageItemExtension(Bag.MarketLabAsset.URL, Bag.MarketLabAsset);
            };
            return BagBinder;
        }());
        Bag.BagBinder = BagBinder;
    })(Bag = fgui.Bag || (fgui.Bag = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=BagBinder.js.map