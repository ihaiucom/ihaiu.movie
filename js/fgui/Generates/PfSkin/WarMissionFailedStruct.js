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
    var PfSkin;
    (function (PfSkin) {
        var WarMissionFailedStruct = /** @class */ (function (_super) {
            __extends(WarMissionFailedStruct, _super);
            function WarMissionFailedStruct() {
                return _super.call(this) || this;
            }
            WarMissionFailedStruct.createInstance = function () {
                return (fairygui.UIPackage.createObject("PfSkin", "WarMissionFailed"));
            };
            WarMissionFailedStruct.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_bg = (this.getChild("bg"));
                this.m_bg2 = (this.getChild("bg2"));
                this.m_bg3 = (this.getChild("bg3"));
                this.m_bg4 = (this.getChild("bg4"));
                this.m_bg5 = (this.getChild("bg5"));
                this.m_bgCom = (this.getChild("bgCom"));
                this.m_title = (this.getChild("title"));
                this.m_tip = (this.getChild("tip"));
                this.m_cb1 = (this.getChild("cb1"));
                this.m_cb2 = (this.getChild("cb2"));
                this.m_box = (this.getChild("box"));
                this.m_boxCom = (this.getChild("boxCom"));
                this.m_missionList = (this.getChild("missionList"));
            };
            WarMissionFailedStruct.URL = "ui://s33x8418k8js1hb";
            WarMissionFailedStruct.DependPackages = ["PfSkin"];
            return WarMissionFailedStruct;
        }(fairygui.GComponent));
        PfSkin.WarMissionFailedStruct = WarMissionFailedStruct;
    })(PfSkin = fgui.PfSkin || (fgui.PfSkin = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=WarMissionFailedStruct.js.map