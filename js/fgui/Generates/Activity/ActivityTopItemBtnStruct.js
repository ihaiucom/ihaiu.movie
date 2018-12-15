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
        var ActivityTopItemBtnStruct = /** @class */ (function (_super) {
            __extends(ActivityTopItemBtnStruct, _super);
            function ActivityTopItemBtnStruct() {
                return _super.call(this) || this;
            }
            ActivityTopItemBtnStruct.createInstance = function () {
                return (fairygui.UIPackage.createObject("Activity", "ActivityTopItemBtn"));
            };
            ActivityTopItemBtnStruct.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_button = this.getController("button");
                this.m_icon = (this.getChild("icon"));
                this.m_iconSelect = (this.getChild("iconSelect"));
                this.m_title = (this.getChild("title"));
                this.m_red = (this.getChild("red"));
            };
            ActivityTopItemBtnStruct.URL = "ui://9qou8rs7sga11";
            ActivityTopItemBtnStruct.DependPackages = ["Activity", "MainUI", "Common"];
            return ActivityTopItemBtnStruct;
        }(fairygui.GButton));
        Activity.ActivityTopItemBtnStruct = ActivityTopItemBtnStruct;
    })(Activity = fgui.Activity || (fgui.Activity = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=ActivityTopItemBtnStruct.js.map