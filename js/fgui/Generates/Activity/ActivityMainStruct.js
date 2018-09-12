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
        var ActivityMainStruct = /** @class */ (function (_super) {
            __extends(ActivityMainStruct, _super);
            function ActivityMainStruct() {
                return _super.call(this) || this;
            }
            ActivityMainStruct.createInstance = function () {
                return (fairygui.UIPackage.createObject("Activity", "ActivityMain"));
            };
            ActivityMainStruct.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_topList = (this.getChild("topList"));
                this.m_title = (this.getChild("title"));
                this.m_closeBtn = (this.getChild("closeBtn"));
                this.m_panel = (this.getChild("panel"));
            };
            ActivityMainStruct.URL = "ui://9qou8rs7sga10";
            ActivityMainStruct.DependPackages = ["Activity", "Common", "WarMovie"];
            return ActivityMainStruct;
        }(fairygui.GComponent));
        Activity.ActivityMainStruct = ActivityMainStruct;
    })(Activity = fgui.Activity || (fgui.Activity = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=ActivityMainStruct.js.map