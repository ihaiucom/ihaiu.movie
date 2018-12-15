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
        var WarShangYingProgressStruct = /** @class */ (function (_super) {
            __extends(WarShangYingProgressStruct, _super);
            function WarShangYingProgressStruct() {
                return _super.call(this) || this;
            }
            WarShangYingProgressStruct.createInstance = function () {
                return (fairygui.UIPackage.createObject("WarMovie", "WarShangYingProgress"));
            };
            WarShangYingProgressStruct.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_bar_v = (this.getChild("bar_v"));
            };
            WarShangYingProgressStruct.URL = "ui://y6ozucp1qbxl78";
            WarShangYingProgressStruct.DependPackages = ["WarMovie"];
            return WarShangYingProgressStruct;
        }(fairygui.GProgressBar));
        WarMovie.WarShangYingProgressStruct = WarShangYingProgressStruct;
    })(WarMovie = fgui.WarMovie || (fgui.WarMovie = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=WarShangYingProgressStruct.js.map