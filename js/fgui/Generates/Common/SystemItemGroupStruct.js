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
        var SystemItemGroupStruct = /** @class */ (function (_super) {
            __extends(SystemItemGroupStruct, _super);
            function SystemItemGroupStruct() {
                return _super.call(this) || this;
            }
            SystemItemGroupStruct.createInstance = function () {
                return (fairygui.UIPackage.createObject("Common", "SystemItemGroup"));
            };
            SystemItemGroupStruct.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_listItem = (this.getChild("listItem"));
                this.m_t0 = this.getTransition("t0");
            };
            SystemItemGroupStruct.URL = "ui://txcuvopdmxlst24b";
            SystemItemGroupStruct.DependPackages = ["Common", "Fx"];
            return SystemItemGroupStruct;
        }(fairygui.GComponent));
        Common.SystemItemGroupStruct = SystemItemGroupStruct;
    })(Common = fgui.Common || (fgui.Common = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=SystemItemGroupStruct.js.map