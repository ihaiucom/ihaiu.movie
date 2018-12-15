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
        var WarFilmSYPFStruct = /** @class */ (function (_super) {
            __extends(WarFilmSYPFStruct, _super);
            function WarFilmSYPFStruct() {
                return _super.call(this) || this;
            }
            WarFilmSYPFStruct.createInstance = function () {
                return (fairygui.UIPackage.createObject("WarMovie", "WarFilmSYPF"));
            };
            WarFilmSYPFStruct.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_tip1 = (this.getChild("tip1"));
                this.m_tip2 = (this.getChild("tip2"));
                this.m_total = (this.getChild("total"));
                this.m_add = (this.getChild("add"));
                this.m_closeBtn = (this.getChild("closeBtn"));
                this.m_t1 = this.getTransition("t1");
            };
            WarFilmSYPFStruct.URL = "ui://y6ozucp1qbxl9x";
            WarFilmSYPFStruct.DependPackages = ["WarMovie", "Common"];
            return WarFilmSYPFStruct;
        }(fairygui.GComponent));
        WarMovie.WarFilmSYPFStruct = WarFilmSYPFStruct;
    })(WarMovie = fgui.WarMovie || (fgui.WarMovie = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=WarFilmSYPFStruct.js.map