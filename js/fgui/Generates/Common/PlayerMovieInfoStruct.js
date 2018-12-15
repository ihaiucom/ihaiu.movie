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
        var PlayerMovieInfoStruct = /** @class */ (function (_super) {
            __extends(PlayerMovieInfoStruct, _super);
            function PlayerMovieInfoStruct() {
                return _super.call(this) || this;
            }
            PlayerMovieInfoStruct.createInstance = function () {
                return (fairygui.UIPackage.createObject("Common", "PlayerMovieInfo"));
            };
            PlayerMovieInfoStruct.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_listMovieLv = (this.getChild("listMovieLv"));
                this.m_listBestMovie = (this.getChild("listBestMovie"));
            };
            PlayerMovieInfoStruct.URL = "ui://txcuvopdcvs8cq";
            PlayerMovieInfoStruct.DependPackages = ["Common"];
            return PlayerMovieInfoStruct;
        }(fairygui.GComponent));
        Common.PlayerMovieInfoStruct = PlayerMovieInfoStruct;
    })(Common = fgui.Common || (fgui.Common = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=PlayerMovieInfoStruct.js.map