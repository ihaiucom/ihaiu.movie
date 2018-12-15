/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////
var fgui;
(function (fgui) {
    var GoldExchange;
    (function (GoldExchange) {
        var GoldExchangeBinder = /** @class */ (function () {
            function GoldExchangeBinder() {
            }
            GoldExchangeBinder.bindAll = function () {
                fairygui.UIObjectFactory.setPackageItemExtension(GoldExchange.GoldExchangeView.URL, GoldExchange.GoldExchangeView);
                fairygui.UIObjectFactory.setPackageItemExtension(GoldExchange.GoldExchangePanel.URL, GoldExchange.GoldExchangePanel);
            };
            return GoldExchangeBinder;
        }());
        GoldExchange.GoldExchangeBinder = GoldExchangeBinder;
    })(GoldExchange = fgui.GoldExchange || (fgui.GoldExchange = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=GoldExchangeBinder.js.map