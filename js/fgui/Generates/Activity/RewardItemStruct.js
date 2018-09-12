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
        var RewardItemStruct = /** @class */ (function (_super) {
            __extends(RewardItemStruct, _super);
            function RewardItemStruct() {
                return _super.call(this) || this;
            }
            RewardItemStruct.createInstance = function () {
                return (fairygui.UIPackage.createObject("Activity", "RewardItem"));
            };
            RewardItemStruct.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_bg = (this.getChild("bg"));
                this.m_icon = (this.getChild("icon"));
                this.m_title = (this.getChild("title"));
                this.m_star = (this.getChild("star"));
            };
            RewardItemStruct.URL = "ui://9qou8rs7sga14";
            RewardItemStruct.DependPackages = ["Activity", "Common"];
            return RewardItemStruct;
        }(fairygui.GLabel));
        Activity.RewardItemStruct = RewardItemStruct;
    })(Activity = fgui.Activity || (fgui.Activity = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=RewardItemStruct.js.map