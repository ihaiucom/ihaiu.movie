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
        var Touxiang80noMaskStruct = /** @class */ (function (_super) {
            __extends(Touxiang80noMaskStruct, _super);
            function Touxiang80noMaskStruct() {
                return _super.call(this) || this;
            }
            Touxiang80noMaskStruct.createInstance = function () {
                return (fairygui.UIPackage.createObject("WarMovie", "touxiang80noMask"));
            };
            Touxiang80noMaskStruct.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_icon = (this.getChild("icon"));
            };
            Touxiang80noMaskStruct.URL = "ui://y6ozucp1xfnlcp";
            Touxiang80noMaskStruct.DependPackages = ["WarMovie", "Common"];
            return Touxiang80noMaskStruct;
        }(fairygui.GComponent));
        WarMovie.Touxiang80noMaskStruct = Touxiang80noMaskStruct;
    })(WarMovie = fgui.WarMovie || (fgui.WarMovie = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=Touxiang80noMaskStruct.js.map