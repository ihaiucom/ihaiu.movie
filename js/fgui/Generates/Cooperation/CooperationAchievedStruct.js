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
        var CooperationAchievedStruct = /** @class */ (function (_super) {
            __extends(CooperationAchievedStruct, _super);
            function CooperationAchievedStruct() {
                return _super.call(this) || this;
            }
            CooperationAchievedStruct.createInstance = function () {
                return (fairygui.UIPackage.createObject("Cooperation", "CooperationAchieved"));
            };
            CooperationAchievedStruct.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_me = (this.getChild("me"));
                this.m_other = (this.getChild("other"));
                this.m_name1 = (this.getChild("name1"));
                this.m_name2 = (this.getChild("name2"));
                this.m_level1 = (this.getChild("level1"));
                this.m_level2 = (this.getChild("level2"));
                this.m_remind = (this.getChild("remind"));
            };
            CooperationAchievedStruct.URL = "ui://k9ycebr5w3bv1";
            CooperationAchievedStruct.DependPackages = ["Cooperation", "Fx", "Common"];
            return CooperationAchievedStruct;
        }(fairygui.GComponent));
        Cooperation.CooperationAchievedStruct = CooperationAchievedStruct;
    })(Cooperation = fgui.Cooperation || (fgui.Cooperation = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=CooperationAchievedStruct.js.map