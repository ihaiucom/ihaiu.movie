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
    var Talk;
    (function (Talk) {
        var PrivateChatPanelStruct = /** @class */ (function (_super) {
            __extends(PrivateChatPanelStruct, _super);
            function PrivateChatPanelStruct() {
                return _super.call(this) || this;
            }
            PrivateChatPanelStruct.createInstance = function () {
                return (fairygui.UIPackage.createObject("Talk", "PrivateChatPanel"));
            };
            PrivateChatPanelStruct.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
            };
            PrivateChatPanelStruct.URL = "ui://tqkotd6ue3hkd";
            PrivateChatPanelStruct.DependPackages = ["Talk"];
            return PrivateChatPanelStruct;
        }(fairygui.GComponent));
        Talk.PrivateChatPanelStruct = PrivateChatPanelStruct;
    })(Talk = fgui.Talk || (fgui.Talk = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=PrivateChatPanelStruct.js.map