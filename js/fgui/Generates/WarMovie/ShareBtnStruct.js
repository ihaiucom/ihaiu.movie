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
        var ShareBtnStruct = /** @class */ (function (_super) {
            __extends(ShareBtnStruct, _super);
            function ShareBtnStruct() {
                return _super.call(this) || this;
            }
            ShareBtnStruct.createInstance = function () {
                return (fairygui.UIPackage.createObject("WarMovie", "ShareBtn"));
            };
            ShareBtnStruct.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_icon = (this.getChild("icon"));
            };
            ShareBtnStruct.URL = "ui://y6ozucp1qbxl7z";
            ShareBtnStruct.DependPackages = ["WarMovie", "Common"];
            return ShareBtnStruct;
        }(fairygui.GButton));
        WarMovie.ShareBtnStruct = ShareBtnStruct;
    })(WarMovie = fgui.WarMovie || (fgui.WarMovie = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=ShareBtnStruct.js.map