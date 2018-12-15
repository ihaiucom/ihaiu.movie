/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////
var fgui;
(function (fgui) {
    var GuideComplete;
    (function (GuideComplete) {
        var GuideCompleteBinder = /** @class */ (function () {
            function GuideCompleteBinder() {
            }
            GuideCompleteBinder.bindAll = function () {
                fairygui.UIObjectFactory.setPackageItemExtension(GuideComplete.GuideCompleteUI.URL, GuideComplete.GuideCompleteUI);
                fairygui.UIObjectFactory.setPackageItemExtension(GuideComplete.CompletePanel.URL, GuideComplete.CompletePanel);
            };
            return GuideCompleteBinder;
        }());
        GuideComplete.GuideCompleteBinder = GuideCompleteBinder;
    })(GuideComplete = fgui.GuideComplete || (fgui.GuideComplete = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=GuideCompleteBinder.js.map