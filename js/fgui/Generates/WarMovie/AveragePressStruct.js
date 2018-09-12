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
        var AveragePressStruct = /** @class */ (function (_super) {
            __extends(AveragePressStruct, _super);
            function AveragePressStruct() {
                return _super.call(this) || this;
            }
            AveragePressStruct.createInstance = function () {
                return (fairygui.UIPackage.createObject("WarMovie", "AveragePress"));
            };
            AveragePressStruct.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_bar = (this.getChild("bar"));
                this.m_tip = (this.getChild("tip"));
            };
            AveragePressStruct.URL = "ui://y6ozucp1qbxl6q";
            AveragePressStruct.DependPackages = ["WarMovie"];
            return AveragePressStruct;
        }(fairygui.GProgressBar));
        WarMovie.AveragePressStruct = AveragePressStruct;
    })(WarMovie = fgui.WarMovie || (fgui.WarMovie = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=AveragePressStruct.js.map