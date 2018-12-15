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
        var ProgressYellowBarStruct = /** @class */ (function (_super) {
            __extends(ProgressYellowBarStruct, _super);
            function ProgressYellowBarStruct() {
                return _super.call(this) || this;
            }
            ProgressYellowBarStruct.createInstance = function () {
                return (fairygui.UIPackage.createObject("Common", "ProgressYellowBar"));
            };
            ProgressYellowBarStruct.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_visiableTitle = this.getController("visiableTitle");
                this.m_bar = (this.getChild("bar"));
                this.m_title = (this.getChild("title"));
            };
            ProgressYellowBarStruct.URL = "ui://txcuvopdx9zq3y";
            ProgressYellowBarStruct.DependPackages = ["Common"];
            return ProgressYellowBarStruct;
        }(fairygui.GProgressBar));
        Common.ProgressYellowBarStruct = ProgressYellowBarStruct;
    })(Common = fgui.Common || (fgui.Common = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=ProgressYellowBarStruct.js.map