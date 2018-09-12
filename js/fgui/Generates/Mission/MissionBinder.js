/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////
var fgui;
(function (fgui) {
    var Mission;
    (function (Mission) {
        var MissionBinder = /** @class */ (function () {
            function MissionBinder() {
            }
            MissionBinder.bindAll = function () {
                fairygui.UIObjectFactory.setPackageItemExtension(Mission.MissionMainPanel.URL, Mission.MissionMainPanel);
                fairygui.UIObjectFactory.setPackageItemExtension(Mission.MissionItem.URL, Mission.MissionItem);
                fairygui.UIObjectFactory.setPackageItemExtension(Mission.CommonProgressBar.URL, Mission.CommonProgressBar);
                fairygui.UIObjectFactory.setPackageItemExtension(Mission.ProgressMission.URL, Mission.ProgressMission);
                fairygui.UIObjectFactory.setPackageItemExtension(Mission.MissionReward.URL, Mission.MissionReward);
            };
            return MissionBinder;
        }());
        Mission.MissionBinder = MissionBinder;
    })(Mission = fgui.Mission || (fgui.Mission = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=MissionBinder.js.map