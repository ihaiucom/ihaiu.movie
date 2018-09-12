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
        var ProgressGreenBarStruct = /** @class */ (function (_super) {
            __extends(ProgressGreenBarStruct, _super);
            function ProgressGreenBarStruct() {
                return _super.call(this) || this;
            }
            ProgressGreenBarStruct.createInstance = function () {
                return (fairygui.UIPackage.createObject("Common", "ProgressGreenBar"));
            };
            ProgressGreenBarStruct.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_visiableTitle = this.getController("visiableTitle");
                this.m_bar = (this.getChild("bar"));
                this.m_title = (this.getChild("title"));
            };
            ProgressGreenBarStruct.URL = "ui://txcuvopdx9zq3s";
            ProgressGreenBarStruct.DependPackages = ["Common"];
            return ProgressGreenBarStruct;
        }(fairygui.GProgressBar));
        Common.ProgressGreenBarStruct = ProgressGreenBarStruct;
    })(Common = fgui.Common || (fgui.Common = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=ProgressGreenBarStruct.js.map