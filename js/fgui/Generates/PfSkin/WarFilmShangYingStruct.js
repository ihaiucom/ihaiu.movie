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
        var WarFilmShangYingStruct = /** @class */ (function (_super) {
            __extends(WarFilmShangYingStruct, _super);
            function WarFilmShangYingStruct() {
                return _super.call(this) || this;
            }
            WarFilmShangYingStruct.createInstance = function () {
                return (fairygui.UIPackage.createObject("PfSkin", "WarFilmShangYing"));
            };
            WarFilmShangYingStruct.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_bg = (this.getChild("bg"));
                this.m_bgTop = (this.getChild("bgTop"));
                this.m_bg2 = (this.getChild("bg2"));
                this.m_bg4 = (this.getChild("bg4"));
                this.m_progressList = (this.getChild("progressList"));
                this.m_bg3 = (this.getChild("bg3"));
                this.m_jiaojuan = (this.getChild("jiaojuan"));
                this.m_deng = (this.getChild("deng"));
                this.m_dengguang = (this.getChild("dengguang"));
                this.m_filmName = (this.getChild("filmName"));
                this.m_filmTime = (this.getChild("filmTime"));
                this.m_tip = (this.getChild("tip"));
                this.m_filmTotal = (this.getChild("filmTotal"));
                this.m_filmcurrent = (this.getChild("filmcurrent"));
                this.m_filmTip = (this.getChild("filmTip"));
                this.m_guanzhongList = (this.getChild("guanzhongList"));
                this.m_closeBtn = (this.getChild("closeBtn"));
                this.m_tiaowen = (this.getChild("tiaowen"));
                this.m_roomContainer = (this.getChild("roomContainer"));
                this.m_t0 = this.getTransition("t0");
            };
            WarFilmShangYingStruct.URL = "ui://s33x8418k8js1hx";
            WarFilmShangYingStruct.DependPackages = ["PfSkin"];
            return WarFilmShangYingStruct;
        }(fairygui.GComponent));
        PfSkin.WarFilmShangYingStruct = WarFilmShangYingStruct;
    })(PfSkin = fgui.PfSkin || (fgui.PfSkin = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=WarFilmShangYingStruct.js.map