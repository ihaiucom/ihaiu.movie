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
        var WarFilmStarStruct = /** @class */ (function (_super) {
            __extends(WarFilmStarStruct, _super);
            function WarFilmStarStruct() {
                return _super.call(this) || this;
            }
            WarFilmStarStruct.createInstance = function () {
                return (fairygui.UIPackage.createObject("Common", "WarFilmStar"));
            };
            WarFilmStarStruct.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_starList = (this.getChild("starList"));
            };
            WarFilmStarStruct.URL = "ui://txcuvopda919t25z";
            WarFilmStarStruct.DependPackages = ["Common"];
            return WarFilmStarStruct;
        }(fairygui.GComponent));
        Common.WarFilmStarStruct = WarFilmStarStruct;
    })(Common = fgui.Common || (fgui.Common = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=WarFilmStarStruct.js.map