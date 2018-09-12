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
    var Common;
    (function (Common) {
        var MovieIcon_littleStruct = /** @class */ (function (_super) {
            __extends(MovieIcon_littleStruct, _super);
            function MovieIcon_littleStruct() {
                return _super.call(this) || this;
            }
            MovieIcon_littleStruct.createInstance = function () {
                return (fairygui.UIPackage.createObject("Common", "movieIcon_little"));
            };
            MovieIcon_littleStruct.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_icon = (this.getChild("icon"));
            };
            MovieIcon_littleStruct.URL = "ui://txcuvopdpqkqch";
            MovieIcon_littleStruct.DependPackages = ["Common"];
            return MovieIcon_littleStruct;
        }(fairygui.GButton));
        Common.MovieIcon_littleStruct = MovieIcon_littleStruct;
    })(Common = fgui.Common || (fgui.Common = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=MovieIcon_littleStruct.js.map