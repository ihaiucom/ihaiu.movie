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
        var DialogMsgPanelStruct = /** @class */ (function (_super) {
            __extends(DialogMsgPanelStruct, _super);
            function DialogMsgPanelStruct() {
                return _super.call(this) || this;
            }
            DialogMsgPanelStruct.createInstance = function () {
                return (fairygui.UIPackage.createObject("Common", "DialogMsgPanel"));
            };
            DialogMsgPanelStruct.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_dir = this.getController("dir");
                this.m_talkBg = (this.getChild("talkBg"));
                this.m_title = (this.getChild("title"));
            };
            DialogMsgPanelStruct.URL = "ui://txcuvopdtpm8c0";
            DialogMsgPanelStruct.DependPackages = ["Common"];
            return DialogMsgPanelStruct;
        }(fairygui.GLabel));
        Common.DialogMsgPanelStruct = DialogMsgPanelStruct;
    })(Common = fgui.Common || (fgui.Common = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=DialogMsgPanelStruct.js.map