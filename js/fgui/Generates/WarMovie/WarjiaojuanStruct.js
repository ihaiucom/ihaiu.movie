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
        var WarjiaojuanStruct = /** @class */ (function (_super) {
            __extends(WarjiaojuanStruct, _super);
            function WarjiaojuanStruct() {
                return _super.call(this) || this;
            }
            WarjiaojuanStruct.createInstance = function () {
                return (fairygui.UIPackage.createObject("WarMovie", "Warjiaojuan"));
            };
            WarjiaojuanStruct.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_t0 = this.getTransition("t0");
            };
            WarjiaojuanStruct.URL = "ui://y6ozucp1qbxl9d";
            WarjiaojuanStruct.DependPackages = ["WarMovie"];
            return WarjiaojuanStruct;
        }(fairygui.GComponent));
        WarMovie.WarjiaojuanStruct = WarjiaojuanStruct;
    })(WarMovie = fgui.WarMovie || (fgui.WarMovie = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=WarjiaojuanStruct.js.map