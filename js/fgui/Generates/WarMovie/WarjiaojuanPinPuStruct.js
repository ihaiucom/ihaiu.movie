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
        var WarjiaojuanPinPuStruct = /** @class */ (function (_super) {
            __extends(WarjiaojuanPinPuStruct, _super);
            function WarjiaojuanPinPuStruct() {
                return _super.call(this) || this;
            }
            WarjiaojuanPinPuStruct.createInstance = function () {
                return (fairygui.UIPackage.createObject("WarMovie", "WarjiaojuanPinPu"));
            };
            WarjiaojuanPinPuStruct.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
            };
            WarjiaojuanPinPuStruct.URL = "ui://y6ozucp1hz8fd4";
            WarjiaojuanPinPuStruct.DependPackages = ["WarMovie"];
            return WarjiaojuanPinPuStruct;
        }(fairygui.GComponent));
        WarMovie.WarjiaojuanPinPuStruct = WarjiaojuanPinPuStruct;
    })(WarMovie = fgui.WarMovie || (fgui.WarMovie = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=WarjiaojuanPinPuStruct.js.map