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
        var CooperationRewardBoxStruct = /** @class */ (function (_super) {
            __extends(CooperationRewardBoxStruct, _super);
            function CooperationRewardBoxStruct() {
                return _super.call(this) || this;
            }
            CooperationRewardBoxStruct.createInstance = function () {
                return (fairygui.UIPackage.createObject("Cooperation", "CooperationRewardBox"));
            };
            CooperationRewardBoxStruct.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_level1 = this.getController("level1");
                this.m_level4 = this.getController("level4");
                this.m_level5 = this.getController("level5");
                this.m_levle6 = this.getController("levle6");
                this.m_level3 = this.getController("level3");
                this.m_level2 = this.getController("level2");
                this.m_button = this.getController("button");
                this.m_listBg = (this.getChild("listBg"));
                this.m_rewardList = (this.getChild("rewardList"));
                this.m_rewardCom = (this.getChild("rewardCom"));
                this.m_numVal = (this.getChild("numVal"));
            };
            CooperationRewardBoxStruct.URL = "ui://k9ycebr5w3bv8";
            CooperationRewardBoxStruct.DependPackages = ["Cooperation", "Common"];
            return CooperationRewardBoxStruct;
        }(fairygui.GButton));
        Cooperation.CooperationRewardBoxStruct = CooperationRewardBoxStruct;
    })(Cooperation = fgui.Cooperation || (fgui.Cooperation = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=CooperationRewardBoxStruct.js.map