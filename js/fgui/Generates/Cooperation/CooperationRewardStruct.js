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
    var Cooperation;
    (function (Cooperation) {
        var CooperationRewardStruct = /** @class */ (function (_super) {
            __extends(CooperationRewardStruct, _super);
            function CooperationRewardStruct() {
                return _super.call(this) || this;
            }
            CooperationRewardStruct.createInstance = function () {
                return (fairygui.UIPackage.createObject("Cooperation", "CooperationReward"));
            };
            CooperationRewardStruct.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_icon = (this.getChild("icon"));
                this.m_title = (this.getChild("title"));
            };
            CooperationRewardStruct.URL = "ui://k9ycebr5w3bv6";
            CooperationRewardStruct.DependPackages = ["Cooperation", "Common"];
            return CooperationRewardStruct;
        }(fairygui.GComponent));
        Cooperation.CooperationRewardStruct = CooperationRewardStruct;
    })(Cooperation = fgui.Cooperation || (fgui.Cooperation = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=CooperationRewardStruct.js.map