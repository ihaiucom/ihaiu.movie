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
    var FilmScreenCommon;
    (function (FilmScreenCommon) {
        var FilmScreenCommonStruct = /** @class */ (function (_super) {
            __extends(FilmScreenCommonStruct, _super);
            function FilmScreenCommonStruct() {
                return _super.call(this) || this;
            }
            FilmScreenCommonStruct.createInstance = function () {
                return (fairygui.UIPackage.createObject("FilmScreenCommon", "FilmScreenCommon"));
            };
            FilmScreenCommonStruct.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
            };
            FilmScreenCommonStruct.URL = "ui://z8q2tigaczff0";
            FilmScreenCommonStruct.DependPackages = ["FilmScreenCommon"];
            return FilmScreenCommonStruct;
        }(fairygui.GComponent));
        FilmScreenCommon.FilmScreenCommonStruct = FilmScreenCommonStruct;
    })(FilmScreenCommon = fgui.FilmScreenCommon || (fgui.FilmScreenCommon = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=FilmScreenCommonStruct.js.map