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
        var ActivitySevenStruct = /** @class */ (function (_super) {
            __extends(ActivitySevenStruct, _super);
            function ActivitySevenStruct() {
                return _super.call(this) || this;
            }
            ActivitySevenStruct.createInstance = function () {
                return (fairygui.UIPackage.createObject("Activity", "ActivitySeven"));
            };
            ActivitySevenStruct.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_rewardList = (this.getChild("rewardList"));
                this.m_tip1 = (this.getChild("tip1"));
                this.m_tip2 = (this.getChild("tip2"));
                this.m_tip1Val = (this.getChild("tip1Val"));
                this.m_tip2Val = (this.getChild("tip2Val"));
            };
            ActivitySevenStruct.URL = "ui://9qou8rs7sga12";
            ActivitySevenStruct.DependPackages = ["Activity"];
            return ActivitySevenStruct;
        }(fairygui.GComponent));
        Activity.ActivitySevenStruct = ActivitySevenStruct;
    })(Activity = fgui.Activity || (fgui.Activity = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=ActivitySevenStruct.js.map