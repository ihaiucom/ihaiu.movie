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
        var ProgressYellowStruct = /** @class */ (function (_super) {
            __extends(ProgressYellowStruct, _super);
            function ProgressYellowStruct() {
                return _super.call(this) || this;
            }
            ProgressYellowStruct.createInstance = function () {
                return (fairygui.UIPackage.createObject("WarMovie", "ProgressYellow"));
            };
            ProgressYellowStruct.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_bar = (this.getChild("bar"));
            };
            ProgressYellowStruct.URL = "ui://y6ozucp1qbxl7r";
            ProgressYellowStruct.DependPackages = ["WarMovie", "Common"];
            return ProgressYellowStruct;
        }(fairygui.GProgressBar));
        WarMovie.ProgressYellowStruct = ProgressYellowStruct;
    })(WarMovie = fgui.WarMovie || (fgui.WarMovie = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=ProgressYellowStruct.js.map