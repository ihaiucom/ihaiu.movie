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
        var WarCinemaSelectionStruct = /** @class */ (function (_super) {
            __extends(WarCinemaSelectionStruct, _super);
            function WarCinemaSelectionStruct() {
                return _super.call(this) || this;
            }
            WarCinemaSelectionStruct.createInstance = function () {
                return (fairygui.UIPackage.createObject("WarMovie", "WarCinemaSelection"));
            };
            WarCinemaSelectionStruct.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_allTip = (this.getChild("allTip"));
                this.m_title = (this.getChild("title"));
                this.m_yxList = (this.getChild("yxList"));
                this.m_closeBtn = (this.getChild("closeBtn"));
            };
            WarCinemaSelectionStruct.URL = "ui://y6ozucp1qbxl6s";
            WarCinemaSelectionStruct.DependPackages = ["WarMovie", "Common", "System"];
            return WarCinemaSelectionStruct;
        }(fairygui.GComponent));
        WarMovie.WarCinemaSelectionStruct = WarCinemaSelectionStruct;
    })(WarMovie = fgui.WarMovie || (fgui.WarMovie = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=WarCinemaSelectionStruct.js.map