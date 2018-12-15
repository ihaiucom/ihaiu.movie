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
    var MainUI;
    (function (MainUI) {
        var WarFilmSmallsStruct = /** @class */ (function (_super) {
            __extends(WarFilmSmallsStruct, _super);
            function WarFilmSmallsStruct() {
                return _super.call(this) || this;
            }
            WarFilmSmallsStruct.createInstance = function () {
                return (fairygui.UIPackage.createObject("MainUI", "WarFilmSmalls"));
            };
            WarFilmSmallsStruct.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_filmName = (this.getChild("filmName"));
                this.m_dayLeft = (this.getChild("dayLeft"));
                this.m_total = (this.getChild("total"));
                this.m_addVal = (this.getChild("addVal"));
                this.m_progressList = (this.getChild("progressList"));
                this.m_t0 = this.getTransition("t0");
            };
            WarFilmSmallsStruct.URL = "ui://7ecreso0mjkfx3t";
            WarFilmSmallsStruct.DependPackages = ["MainUI", "Common"];
            return WarFilmSmallsStruct;
        }(fairygui.GButton));
        MainUI.WarFilmSmallsStruct = WarFilmSmallsStruct;
    })(MainUI = fgui.MainUI || (fgui.MainUI = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=WarFilmSmallsStruct.js.map