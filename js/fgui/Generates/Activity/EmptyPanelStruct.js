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
        var EmptyPanelStruct = /** @class */ (function (_super) {
            __extends(EmptyPanelStruct, _super);
            function EmptyPanelStruct() {
                return _super.call(this) || this;
            }
            EmptyPanelStruct.createInstance = function () {
                return (fairygui.UIPackage.createObject("Activity", "emptyPanel"));
            };
            EmptyPanelStruct.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
            };
            EmptyPanelStruct.URL = "ui://9qou8rs7mk2r1h";
            EmptyPanelStruct.DependPackages = ["Activity", "Common"];
            return EmptyPanelStruct;
        }(fairygui.GComponent));
        Activity.EmptyPanelStruct = EmptyPanelStruct;
    })(Activity = fgui.Activity || (fgui.Activity = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=EmptyPanelStruct.js.map