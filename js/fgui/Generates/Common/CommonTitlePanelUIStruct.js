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
        var CommonTitlePanelUIStruct = /** @class */ (function (_super) {
            __extends(CommonTitlePanelUIStruct, _super);
            function CommonTitlePanelUIStruct() {
                return _super.call(this) || this;
            }
            CommonTitlePanelUIStruct.createInstance = function () {
                return (fairygui.UIPackage.createObject("Common", "CommonTitlePanelUI"));
            };
            CommonTitlePanelUIStruct.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_title = (this.getChild("title"));
                this.m_closeBtn = (this.getChild("closeBtn"));
            };
            CommonTitlePanelUIStruct.URL = "ui://txcuvopdq41hg4";
            CommonTitlePanelUIStruct.DependPackages = ["Common", "System"];
            return CommonTitlePanelUIStruct;
        }(fairygui.GComponent));
        Common.CommonTitlePanelUIStruct = CommonTitlePanelUIStruct;
    })(Common = fgui.Common || (fgui.Common = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=CommonTitlePanelUIStruct.js.map