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
    var WarMovie;
    (function (WarMovie) {
        var WarFilmJiesuanStruct = /** @class */ (function (_super) {
            __extends(WarFilmJiesuanStruct, _super);
            function WarFilmJiesuanStruct() {
                return _super.call(this) || this;
            }
            WarFilmJiesuanStruct.createInstance = function () {
                return (fairygui.UIPackage.createObject("WarMovie", "WarFilmJiesuan"));
            };
            WarFilmJiesuanStruct.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_colorCon = this.getController("colorCon");
                this.m_filmName = (this.getChild("filmName"));
                this.m_filmType = (this.getChild("filmType"));
                this.m_filmTime = (this.getChild("filmTime"));
                this.m_zhuyanList = (this.getChild("zhuyanList"));
                this.m_koubei = (this.getChild("koubei"));
                this.m_tip = (this.getChild("tip"));
                this.m_tip1 = (this.getChild("tip1"));
                this.m_auther = (this.getChild("auther"));
                this.m_tip2 = (this.getChild("tip2"));
                this.m_totalList = (this.getChild("totalList"));
                this.m_tip3 = (this.getChild("tip3"));
                this.m_tip4 = (this.getChild("tip4"));
                this.m_rewardValue = (this.getChild("rewardValue"));
                this.m_tip5 = (this.getChild("tip5"));
                this.m_rewardList = (this.getChild("rewardList"));
                this.m_filmTip = (this.getChild("filmTip"));
                this.m_icon = (this.getChild("icon"));
                this.m_clickTip = (this.getChild("clickTip"));
                this.m_filmIcon = (this.getChild("filmIcon"));
                this.m_starProgress = (this.getChild("starProgress"));
                this.m_costProgress = (this.getChild("costProgress"));
                this.m_totalProgress = (this.getChild("totalProgress"));
                this.m_fx = (this.getChild("fx"));
                this.m_t0 = this.getTransition("t0");
            };
            WarFilmJiesuanStruct.URL = "ui://y6ozucp1qbxl7b";
            WarFilmJiesuanStruct.DependPackages = ["WarMovie", "Fx", "Common"];
            return WarFilmJiesuanStruct;
        }(fairygui.GComponent));
        WarMovie.WarFilmJiesuanStruct = WarFilmJiesuanStruct;
    })(WarMovie = fgui.WarMovie || (fgui.WarMovie = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=WarFilmJiesuanStruct.js.map