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
        var DialogStruct = /** @class */ (function (_super) {
            __extends(DialogStruct, _super);
            function DialogStruct() {
                return _super.call(this) || this;
            }
            DialogStruct.createInstance = function () {
                return (fairygui.UIPackage.createObject("Common", "Dialog"));
            };
            DialogStruct.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_dir = this.getController("dir");
                this.m_bg = (this.getChild("bg"));
                this.m_arrowRight = (this.getChild("arrowRight"));
                this.m_arrowLeft = (this.getChild("arrowLeft"));
                this.m_bgShadow = (this.getChild("bgShadow"));
                this.m_title = (this.getChild("title"));
            };
            DialogStruct.URL = "ui://txcuvopddat1t25z";
            DialogStruct.DependPackages = ["Common"];
            return DialogStruct;
        }(fairygui.GLabel));
        Common.DialogStruct = DialogStruct;
    })(Common = fgui.Common || (fgui.Common = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=DialogStruct.js.map