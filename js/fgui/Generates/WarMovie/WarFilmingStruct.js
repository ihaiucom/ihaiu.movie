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
        var WarFilmingStruct = /** @class */ (function (_super) {
            __extends(WarFilmingStruct, _super);
            function WarFilmingStruct() {
                return _super.call(this) || this;
            }
            WarFilmingStruct.createInstance = function () {
                return (fairygui.UIPackage.createObject("WarMovie", "WarFilming"));
            };
            WarFilmingStruct.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_gold = this.getController("gold");
                this.m_expectingTips = (this.getChild("expectingTips"));
                this.m_expectingIcon = (this.getChild("expectingIcon"));
                this.m_expectingVal = (this.getChild("expectingVal"));
                this.m_goal = (this.getChild("goal"));
                this.m_psAim = (this.getChild("psAim"));
                this.m_attIcon1 = (this.getChild("attIcon1"));
                this.m_attIcon2 = (this.getChild("attIcon2"));
                this.m_attIcon3 = (this.getChild("attIcon3"));
                this.m_attIcon4 = (this.getChild("attIcon4"));
                this.m_attIcon5 = (this.getChild("attIcon5"));
                this.m_att1 = (this.getChild("att1"));
                this.m_att2 = (this.getChild("att2"));
                this.m_att3 = (this.getChild("att3"));
                this.m_att4 = (this.getChild("att4"));
                this.m_att5 = (this.getChild("att5"));
                this.m_filmName = (this.getChild("filmName"));
                this.m_filmTime = (this.getChild("filmTime"));
                this.m_filmTypeList = (this.getChild("filmTypeList"));
                this.m_yrList = (this.getChild("yrList"));
                this.m_xuanzeList = (this.getChild("xuanzeList"));
                this.m_roomContainer = (this.getChild("roomContainer"));
                this.m_sliver = (this.getChild("sliver"));
                this.m_xukezheng = (this.getChild("xukezheng"));
                this.m_filmProgress = (this.getChild("filmProgress"));
                this.m_caozuo = (this.getChild("caozuo"));
                this.m_filmIcon = (this.getChild("filmIcon"));
                this.m_filmDes = (this.getChild("filmDes"));
                this.m_notice = (this.getChild("notice"));
                this.m_goldProgress = (this.getChild("goldProgress"));
                this.m_closeBtn = (this.getChild("closeBtn"));
                this.m_goldEffect = (this.getChild("goldEffect"));
                this.m_t0 = this.getTransition("t0");
            };
            WarFilmingStruct.URL = "ui://y6ozucp1r0zd3w";
            WarFilmingStruct.DependPackages = ["WarMovie", "Common", "Fx", "System"];
            return WarFilmingStruct;
        }(fairygui.GComponent));
        WarMovie.WarFilmingStruct = WarFilmingStruct;
    })(WarMovie = fgui.WarMovie || (fgui.WarMovie = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=WarFilmingStruct.js.map