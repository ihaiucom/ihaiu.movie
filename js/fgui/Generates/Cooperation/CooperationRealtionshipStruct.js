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
        var CooperationRealtionshipStruct = /** @class */ (function (_super) {
            __extends(CooperationRealtionshipStruct, _super);
            function CooperationRealtionshipStruct() {
                return _super.call(this) || this;
            }
            CooperationRealtionshipStruct.createInstance = function () {
                return (fairygui.UIPackage.createObject("Cooperation", "CooperationRealtionship"));
            };
            CooperationRealtionshipStruct.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_title = (this.getChild("title"));
                this.m_me = (this.getChild("me"));
                this.m_other = (this.getChild("other"));
                this.m_name1 = (this.getChild("name1"));
                this.m_name2 = (this.getChild("name2"));
                this.m_level1 = (this.getChild("level1"));
                this.m_level2 = (this.getChild("level2"));
                this.m_des = (this.getChild("des"));
                this.m_tasklist = (this.getChild("tasklist"));
                this.m_taskTitleList = (this.getChild("taskTitleList"));
                this.m_bg = (this.getChild("bg"));
                this.m_relieveBtn = (this.getChild("relieveBtn"));
                this.m_progressbar = (this.getChild("progressbar"));
                this.m_showOtherInf = (this.getChild("showOtherInf"));
            };
            CooperationRealtionshipStruct.URL = "ui://k9ycebr5w3bv4";
            CooperationRealtionshipStruct.DependPackages = ["Cooperation", "Common", "WarMovie"];
            return CooperationRealtionshipStruct;
        }(fairygui.GComponent));
        Cooperation.CooperationRealtionshipStruct = CooperationRealtionshipStruct;
    })(Cooperation = fgui.Cooperation || (fgui.Cooperation = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=CooperationRealtionshipStruct.js.map