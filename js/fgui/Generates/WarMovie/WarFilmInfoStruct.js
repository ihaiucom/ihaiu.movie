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
        var WarFilmInfoStruct = /** @class */ (function (_super) {
            __extends(WarFilmInfoStruct, _super);
            function WarFilmInfoStruct() {
                return _super.call(this) || this;
            }
            WarFilmInfoStruct.createInstance = function () {
                return (fairygui.UIPackage.createObject("WarMovie", "WarFilmInfo"));
            };
            WarFilmInfoStruct.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_title = (this.getChild("title"));
                this.m_filmName = (this.getChild("filmName"));
                this.m_filmTypeList = (this.getChild("filmTypeList"));
                this.m_completeList = (this.getChild("completeList"));
                this.m_reqTip = (this.getChild("reqTip"));
                this.m_rewardTip = (this.getChild("rewardTip"));
                this.m_rewardIcon = (this.getChild("rewardIcon"));
                this.m_rewardVal = (this.getChild("rewardVal"));
                this.m_rewardCom = (this.getChild("rewardCom"));
                this.m_filmActorList = (this.getChild("filmActorList"));
                this.m_closeBtn = (this.getChild("closeBtn"));
                this.m_filmIcon = (this.getChild("filmIcon"));
                this.m_filmDes = (this.getChild("filmDes"));
                this.m_men = (this.getChild("men"));
                this.m_women = (this.getChild("women"));
                this.m_child = (this.getChild("child"));
            };
            WarFilmInfoStruct.URL = "ui://y6ozucp1r0zd59";
            WarFilmInfoStruct.DependPackages = ["WarMovie", "Common", "System"];
            return WarFilmInfoStruct;
        }(fairygui.GComponent));
        WarMovie.WarFilmInfoStruct = WarFilmInfoStruct;
    })(WarMovie = fgui.WarMovie || (fgui.WarMovie = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=WarFilmInfoStruct.js.map