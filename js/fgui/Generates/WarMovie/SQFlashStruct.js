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
        var SQFlashStruct = /** @class */ (function (_super) {
            __extends(SQFlashStruct, _super);
            function SQFlashStruct() {
                return _super.call(this) || this;
            }
            SQFlashStruct.createInstance = function () {
                return (fairygui.UIPackage.createObject("WarMovie", "SQFlash"));
            };
            SQFlashStruct.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_t0 = this.getTransition("t0");
            };
            SQFlashStruct.URL = "ui://y6ozucp1row7e3";
            SQFlashStruct.DependPackages = ["WarMovie", "Common"];
            return SQFlashStruct;
        }(fairygui.GComponent));
        WarMovie.SQFlashStruct = SQFlashStruct;
    })(WarMovie = fgui.WarMovie || (fgui.WarMovie = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=SQFlashStruct.js.map