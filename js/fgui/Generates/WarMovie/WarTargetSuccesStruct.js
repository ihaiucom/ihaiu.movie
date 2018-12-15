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
        var WarTargetSuccesStruct = /** @class */ (function (_super) {
            __extends(WarTargetSuccesStruct, _super);
            function WarTargetSuccesStruct() {
                return _super.call(this) || this;
            }
            WarTargetSuccesStruct.createInstance = function () {
                return (fairygui.UIPackage.createObject("WarMovie", "WarTargetSucces"));
            };
            WarTargetSuccesStruct.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_iconList = (this.getChild("iconList"));
                this.m_closeBtn = (this.getChild("closeBtn"));
                this.m_okBtn = (this.getChild("okBtn"));
            };
            WarTargetSuccesStruct.URL = "ui://y6ozucp1qbxl9s";
            WarTargetSuccesStruct.DependPackages = ["WarMovie", "Fx", "Common"];
            return WarTargetSuccesStruct;
        }(fairygui.GComponent));
        WarMovie.WarTargetSuccesStruct = WarTargetSuccesStruct;
    })(WarMovie = fgui.WarMovie || (fgui.WarMovie = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=WarTargetSuccesStruct.js.map