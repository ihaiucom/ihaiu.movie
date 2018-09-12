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
        var WarInfBtnStruct = /** @class */ (function (_super) {
            __extends(WarInfBtnStruct, _super);
            function WarInfBtnStruct() {
                return _super.call(this) || this;
            }
            WarInfBtnStruct.createInstance = function () {
                return (fairygui.UIPackage.createObject("WarMovie", "WarInfBtn"));
            };
            WarInfBtnStruct.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
            };
            WarInfBtnStruct.URL = "ui://y6ozucp1kh7oa2";
            WarInfBtnStruct.DependPackages = ["WarMovie", "Common"];
            return WarInfBtnStruct;
        }(fairygui.GButton));
        WarMovie.WarInfBtnStruct = WarInfBtnStruct;
    })(WarMovie = fgui.WarMovie || (fgui.WarMovie = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=WarInfBtnStruct.js.map