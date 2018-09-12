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
        var WarBgCloseBtnStruct = /** @class */ (function (_super) {
            __extends(WarBgCloseBtnStruct, _super);
            function WarBgCloseBtnStruct() {
                return _super.call(this) || this;
            }
            WarBgCloseBtnStruct.createInstance = function () {
                return (fairygui.UIPackage.createObject("WarMovie", "WarBgCloseBtn"));
            };
            WarBgCloseBtnStruct.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_closeBtn = (this.getChild("closeBtn"));
            };
            WarBgCloseBtnStruct.URL = "ui://y6ozucp1icyf9y";
            WarBgCloseBtnStruct.DependPackages = ["WarMovie", "Common"];
            return WarBgCloseBtnStruct;
        }(fairygui.GButton));
        WarMovie.WarBgCloseBtnStruct = WarBgCloseBtnStruct;
    })(WarMovie = fgui.WarMovie || (fgui.WarMovie = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=WarBgCloseBtnStruct.js.map