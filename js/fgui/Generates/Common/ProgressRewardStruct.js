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
    var Common;
    (function (Common) {
        var ProgressRewardStruct = /** @class */ (function (_super) {
            __extends(ProgressRewardStruct, _super);
            function ProgressRewardStruct() {
                return _super.call(this) || this;
            }
            ProgressRewardStruct.createInstance = function () {
                return (fairygui.UIPackage.createObject("Common", "ProgressReward"));
            };
            ProgressRewardStruct.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_icon = (this.getChild("icon"));
                this.m_title = (this.getChild("title"));
                this.m_default = this.getTransition("default");
                this.m_twinkle = this.getTransition("twinkle");
            };
            ProgressRewardStruct.URL = "ui://txcuvopdx9zq3w";
            ProgressRewardStruct.DependPackages = ["Common"];
            return ProgressRewardStruct;
        }(fairygui.GButton));
        Common.ProgressRewardStruct = ProgressRewardStruct;
    })(Common = fgui.Common || (fgui.Common = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=ProgressRewardStruct.js.map