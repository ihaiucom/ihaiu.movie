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
        var ProgressTotalBarStruct = /** @class */ (function (_super) {
            __extends(ProgressTotalBarStruct, _super);
            function ProgressTotalBarStruct() {
                return _super.call(this) || this;
            }
            ProgressTotalBarStruct.createInstance = function () {
                return (fairygui.UIPackage.createObject("Common", "ProgressTotalBar"));
            };
            ProgressTotalBarStruct.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_c_state = this.getController("c_state");
                this.m_title = (this.getChild("title"));
                this.m_list = (this.getChild("list"));
                this.m_bar = (this.getChild("bar"));
            };
            ProgressTotalBarStruct.URL = "ui://txcuvopdx9zq3r";
            ProgressTotalBarStruct.DependPackages = ["Common"];
            return ProgressTotalBarStruct;
        }(fairygui.GComponent));
        Common.ProgressTotalBarStruct = ProgressTotalBarStruct;
    })(Common = fgui.Common || (fgui.Common = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=ProgressTotalBarStruct.js.map