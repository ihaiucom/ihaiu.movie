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
        var WarActor80noMaskStruct = /** @class */ (function (_super) {
            __extends(WarActor80noMaskStruct, _super);
            function WarActor80noMaskStruct() {
                return _super.call(this) || this;
            }
            WarActor80noMaskStruct.createInstance = function () {
                return (fairygui.UIPackage.createObject("WarMovie", "WarActor80noMask"));
            };
            WarActor80noMaskStruct.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_icon = (this.getChild("icon"));
            };
            WarActor80noMaskStruct.URL = "ui://y6ozucp1xfnlcq";
            WarActor80noMaskStruct.DependPackages = ["WarMovie", "Common"];
            return WarActor80noMaskStruct;
        }(fairygui.GComponent));
        WarMovie.WarActor80noMaskStruct = WarActor80noMaskStruct;
    })(WarMovie = fgui.WarMovie || (fgui.WarMovie = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=WarActor80noMaskStruct.js.map