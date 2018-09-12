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
        var WarGoldProgressBarStruct = /** @class */ (function (_super) {
            __extends(WarGoldProgressBarStruct, _super);
            function WarGoldProgressBarStruct() {
                return _super.call(this) || this;
            }
            WarGoldProgressBarStruct.createInstance = function () {
                return (fairygui.UIPackage.createObject("WarMovie", "WarGoldProgressBar"));
            };
            WarGoldProgressBarStruct.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_bar = (this.getChild("bar"));
            };
            WarGoldProgressBarStruct.URL = "ui://y6ozucp1qnq0dv";
            WarGoldProgressBarStruct.DependPackages = ["WarMovie"];
            return WarGoldProgressBarStruct;
        }(fairygui.GProgressBar));
        WarMovie.WarGoldProgressBarStruct = WarGoldProgressBarStruct;
    })(WarMovie = fgui.WarMovie || (fgui.WarMovie = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=WarGoldProgressBarStruct.js.map