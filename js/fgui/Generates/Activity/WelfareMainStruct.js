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
    var Activity;
    (function (Activity) {
        var WelfareMainStruct = /** @class */ (function (_super) {
            __extends(WelfareMainStruct, _super);
            function WelfareMainStruct() {
                return _super.call(this) || this;
            }
            WelfareMainStruct.createInstance = function () {
                return (fairygui.UIPackage.createObject("Activity", "WelfareMain"));
            };
            WelfareMainStruct.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_title = (this.getChild("title"));
                this.m_tabPanel = (this.getChild("tabPanel"));
                this.m_closeBtn = (this.getChild("closeBtn"));
                this.m_secretaryPanel = (this.getChild("secretaryPanel"));
            };
            WelfareMainStruct.URL = "ui://9qou8rs7rrsje";
            WelfareMainStruct.DependPackages = ["Activity", "Common"];
            return WelfareMainStruct;
        }(fairygui.GComponent));
        Activity.WelfareMainStruct = WelfareMainStruct;
    })(Activity = fgui.Activity || (fgui.Activity = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=WelfareMainStruct.js.map