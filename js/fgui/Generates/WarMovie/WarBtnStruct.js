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
        var WarBtnStruct = /** @class */ (function (_super) {
            __extends(WarBtnStruct, _super);
            function WarBtnStruct() {
                return _super.call(this) || this;
            }
            WarBtnStruct.createInstance = function () {
                return (fairygui.UIPackage.createObject("WarMovie", "WarBtn"));
            };
            WarBtnStruct.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_button = this.getController("button");
                this.m_icon = (this.getChild("icon"));
                this.m_title = (this.getChild("title"));
            };
            WarBtnStruct.URL = "ui://y6ozucp1qbxl92";
            WarBtnStruct.DependPackages = ["WarMovie"];
            return WarBtnStruct;
        }(fairygui.GButton));
        WarMovie.WarBtnStruct = WarBtnStruct;
    })(WarMovie = fgui.WarMovie || (fgui.WarMovie = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=WarBtnStruct.js.map