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
    var PlayerInfo;
    (function (PlayerInfo) {
        var ProgressRedBarStruct = /** @class */ (function (_super) {
            __extends(ProgressRedBarStruct, _super);
            function ProgressRedBarStruct() {
                return _super.call(this) || this;
            }
            ProgressRedBarStruct.createInstance = function () {
                return (fairygui.UIPackage.createObject("PlayerInfo", "ProgressRedBar"));
            };
            ProgressRedBarStruct.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_bar = (this.getChild("bar"));
                this.m_top = (this.getChild("top"));
                this.m_barSquare = (this.getChild("barSquare"));
            };
            ProgressRedBarStruct.URL = "ui://tderqmz5dyfe0";
            ProgressRedBarStruct.DependPackages = ["PlayerInfo", "Common"];
            return ProgressRedBarStruct;
        }(fairygui.GProgressBar));
        PlayerInfo.ProgressRedBarStruct = ProgressRedBarStruct;
    })(PlayerInfo = fgui.PlayerInfo || (fgui.PlayerInfo = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=ProgressRedBarStruct.js.map