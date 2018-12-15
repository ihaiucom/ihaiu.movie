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
        var ProperTextStruct = /** @class */ (function (_super) {
            __extends(ProperTextStruct, _super);
            function ProperTextStruct() {
                return _super.call(this) || this;
            }
            ProperTextStruct.createInstance = function () {
                return (fairygui.UIPackage.createObject("Common", "ProperText"));
            };
            ProperTextStruct.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_title = (this.getChild("title"));
                this.m_value = (this.getChild("value"));
            };
            ProperTextStruct.URL = "ui://txcuvopdcvs8d8";
            ProperTextStruct.DependPackages = ["Common"];
            return ProperTextStruct;
        }(fairygui.GLabel));
        Common.ProperTextStruct = ProperTextStruct;
    })(Common = fgui.Common || (fgui.Common = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=ProperTextStruct.js.map