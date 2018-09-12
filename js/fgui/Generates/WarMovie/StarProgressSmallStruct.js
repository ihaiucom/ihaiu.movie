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
        var StarProgressSmallStruct = /** @class */ (function (_super) {
            __extends(StarProgressSmallStruct, _super);
            function StarProgressSmallStruct() {
                return _super.call(this) || this;
            }
            StarProgressSmallStruct.createInstance = function () {
                return (fairygui.UIPackage.createObject("WarMovie", "StarProgressSmall"));
            };
            StarProgressSmallStruct.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_bar = (this.getChild("bar"));
            };
            StarProgressSmallStruct.URL = "ui://y6ozucp1qbxl71";
            StarProgressSmallStruct.DependPackages = ["WarMovie"];
            return StarProgressSmallStruct;
        }(fairygui.GProgressBar));
        WarMovie.StarProgressSmallStruct = StarProgressSmallStruct;
    })(WarMovie = fgui.WarMovie || (fgui.WarMovie = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=StarProgressSmallStruct.js.map