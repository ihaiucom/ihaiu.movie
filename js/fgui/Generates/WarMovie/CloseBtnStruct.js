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
        var CloseBtnStruct = /** @class */ (function (_super) {
            __extends(CloseBtnStruct, _super);
            function CloseBtnStruct() {
                return _super.call(this) || this;
            }
            CloseBtnStruct.createInstance = function () {
                return (fairygui.UIPackage.createObject("WarMovie", "CloseBtn"));
            };
            CloseBtnStruct.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_icon = (this.getChild("icon"));
            };
            CloseBtnStruct.URL = "ui://y6ozucp1r0zd31";
            CloseBtnStruct.DependPackages = ["WarMovie", "Common"];
            return CloseBtnStruct;
        }(fairygui.GButton));
        WarMovie.CloseBtnStruct = CloseBtnStruct;
    })(WarMovie = fgui.WarMovie || (fgui.WarMovie = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=CloseBtnStruct.js.map