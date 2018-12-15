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
        var WarFilmShangYingStruct = /** @class */ (function (_super) {
            __extends(WarFilmShangYingStruct, _super);
            function WarFilmShangYingStruct() {
                return _super.call(this) || this;
            }
            WarFilmShangYingStruct.createInstance = function () {
                return (fairygui.UIPackage.createObject("WarMovie", "WarFilmShangYing"));
            };
            WarFilmShangYingStruct.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_filmName = (this.getChild("filmName"));
                this.m_progressList = (this.getChild("progressList"));
                this.m_filmTime = (this.getChild("filmTime"));
                this.m_filmTotal = (this.getChild("filmTotal"));
                this.m_filmcurrent = (this.getChild("filmcurrent"));
                this.m_guanzhongList = (this.getChild("guanzhongList"));
                this.m_roomContainer = (this.getChild("roomContainer"));
                this.m_closeBtn = (this.getChild("closeBtn"));
            };
            WarFilmShangYingStruct.URL = "ui://y6ozucp1qbxl75";
            WarFilmShangYingStruct.DependPackages = ["WarMovie", "PfSkin", "Common", "System"];
            return WarFilmShangYingStruct;
        }(fairygui.GComponent));
        WarMovie.WarFilmShangYingStruct = WarFilmShangYingStruct;
    })(WarMovie = fgui.WarMovie || (fgui.WarMovie = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=WarFilmShangYingStruct.js.map