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
        var UnlockPanelStruct = /** @class */ (function (_super) {
            __extends(UnlockPanelStruct, _super);
            function UnlockPanelStruct() {
                return _super.call(this) || this;
            }
            UnlockPanelStruct.createInstance = function () {
                return (fairygui.UIPackage.createObject("Common", "UnlockPanel"));
            };
            UnlockPanelStruct.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_effect = (this.getChild("effect"));
            };
            UnlockPanelStruct.URL = "ui://txcuvopdluhpt25y";
            UnlockPanelStruct.DependPackages = ["Common", "Fx"];
            return UnlockPanelStruct;
        }(fairygui.GComponent));
        Common.UnlockPanelStruct = UnlockPanelStruct;
    })(Common = fgui.Common || (fgui.Common = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=UnlockPanelStruct.js.map