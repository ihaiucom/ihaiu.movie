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
        var WarMoveTextHideStruct = /** @class */ (function (_super) {
            __extends(WarMoveTextHideStruct, _super);
            function WarMoveTextHideStruct() {
                return _super.call(this) || this;
            }
            WarMoveTextHideStruct.createInstance = function () {
                return (fairygui.UIPackage.createObject("WarMovie", "WarMoveTextHide"));
            };
            WarMoveTextHideStruct.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_title = (this.getChild("title"));
            };
            WarMoveTextHideStruct.URL = "ui://y6ozucp1row7e2";
            WarMoveTextHideStruct.DependPackages = ["WarMovie"];
            return WarMoveTextHideStruct;
        }(fairygui.GLabel));
        WarMovie.WarMoveTextHideStruct = WarMoveTextHideStruct;
    })(WarMovie = fgui.WarMovie || (fgui.WarMovie = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=WarMoveTextHideStruct.js.map