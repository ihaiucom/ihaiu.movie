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
        var ProgressBarMainStruct = /** @class */ (function (_super) {
            __extends(ProgressBarMainStruct, _super);
            function ProgressBarMainStruct() {
                return _super.call(this) || this;
            }
            ProgressBarMainStruct.createInstance = function () {
                return (fairygui.UIPackage.createObject("Common", "ProgressBarMain"));
            };
            ProgressBarMainStruct.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_bar = (this.getChild("bar"));
                this.m_light = (this.getChild("light"));
                this.m_bar1 = (this.getChild("bar1"));
                this.m_bar2 = (this.getChild("bar2"));
                this.m_bar3 = (this.getChild("bar3"));
                this.m_value = (this.getChild("value"));
                this.m_top1 = (this.getChild("top1"));
                this.m_top2 = (this.getChild("top2"));
                this.m_top3 = (this.getChild("top3"));
            };
            ProgressBarMainStruct.URL = "ui://txcuvopdhh7651";
            ProgressBarMainStruct.DependPackages = ["Common", "PlayerInfo", "System"];
            return ProgressBarMainStruct;
        }(fairygui.GProgressBar));
        Common.ProgressBarMainStruct = ProgressBarMainStruct;
    })(Common = fgui.Common || (fgui.Common = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=ProgressBarMainStruct.js.map