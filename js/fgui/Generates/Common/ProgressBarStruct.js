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
        var ProgressBarStruct = /** @class */ (function (_super) {
            __extends(ProgressBarStruct, _super);
            function ProgressBarStruct() {
                return _super.call(this) || this;
            }
            ProgressBarStruct.createInstance = function () {
                return (fairygui.UIPackage.createObject("Common", "ProgressBar"));
            };
            ProgressBarStruct.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_bar = (this.getChild("bar"));
                this.m_title = (this.getChild("title"));
            };
            ProgressBarStruct.URL = "ui://txcuvopdj3a33n";
            ProgressBarStruct.DependPackages = ["Common"];
            return ProgressBarStruct;
        }(fairygui.GProgressBar));
        Common.ProgressBarStruct = ProgressBarStruct;
    })(Common = fgui.Common || (fgui.Common = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=ProgressBarStruct.js.map