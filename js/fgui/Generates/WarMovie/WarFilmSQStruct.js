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
        var WarFilmSQStruct = /** @class */ (function (_super) {
            __extends(WarFilmSQStruct, _super);
            function WarFilmSQStruct() {
                return _super.call(this) || this;
            }
            WarFilmSQStruct.createInstance = function () {
                return (fairygui.UIPackage.createObject("WarMovie", "WarFilmSQ"));
            };
            WarFilmSQStruct.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_tip1 = (this.getChild("tip1"));
                this.m_closeBtn = (this.getChild("closeBtn"));
                this.m_flash = (this.getChild("flash"));
            };
            WarFilmSQStruct.URL = "ui://y6ozucp1qbxl9r";
            WarFilmSQStruct.DependPackages = ["WarMovie", "Common"];
            return WarFilmSQStruct;
        }(fairygui.GComponent));
        WarMovie.WarFilmSQStruct = WarFilmSQStruct;
    })(WarMovie = fgui.WarMovie || (fgui.WarMovie = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=WarFilmSQStruct.js.map