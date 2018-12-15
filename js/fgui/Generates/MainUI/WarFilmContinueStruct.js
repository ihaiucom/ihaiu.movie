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
        var WarFilmContinueStruct = /** @class */ (function (_super) {
            __extends(WarFilmContinueStruct, _super);
            function WarFilmContinueStruct() {
                return _super.call(this) || this;
            }
            WarFilmContinueStruct.createInstance = function () {
                return (fairygui.UIPackage.createObject("MainUI", "WarFilmContinue"));
            };
            WarFilmContinueStruct.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_filmIcon = (this.getChild("filmIcon"));
                this.m_t0 = this.getTransition("t0");
            };
            WarFilmContinueStruct.URL = "ui://7ecreso0gbg3x3x";
            WarFilmContinueStruct.DependPackages = ["MainUI", "Common"];
            return WarFilmContinueStruct;
        }(fairygui.GButton));
        MainUI.WarFilmContinueStruct = WarFilmContinueStruct;
    })(MainUI = fgui.MainUI || (fgui.MainUI = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=WarFilmContinueStruct.js.map