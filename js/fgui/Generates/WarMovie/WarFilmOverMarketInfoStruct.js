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
        var WarFilmOverMarketInfoStruct = /** @class */ (function (_super) {
            __extends(WarFilmOverMarketInfoStruct, _super);
            function WarFilmOverMarketInfoStruct() {
                return _super.call(this) || this;
            }
            WarFilmOverMarketInfoStruct.createInstance = function () {
                return (fairygui.UIPackage.createObject("WarMovie", "WarFilmOverMarketInfo"));
            };
            WarFilmOverMarketInfoStruct.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_tip = (this.getChild("tip"));
                this.m_closeBtn = (this.getChild("closeBtn"));
                this.m_okBtn = (this.getChild("okBtn"));
            };
            WarFilmOverMarketInfoStruct.URL = "ui://y6ozucp1qbxl79";
            WarFilmOverMarketInfoStruct.DependPackages = ["WarMovie", "Common"];
            return WarFilmOverMarketInfoStruct;
        }(fairygui.GComponent));
        WarMovie.WarFilmOverMarketInfoStruct = WarFilmOverMarketInfoStruct;
    })(WarMovie = fgui.WarMovie || (fgui.WarMovie = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=WarFilmOverMarketInfoStruct.js.map