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
        var PopUpMsgStruct = /** @class */ (function (_super) {
            __extends(PopUpMsgStruct, _super);
            function PopUpMsgStruct() {
                return _super.call(this) || this;
            }
            PopUpMsgStruct.createInstance = function () {
                return (fairygui.UIPackage.createObject("Common", "PopUpMsg"));
            };
            PopUpMsgStruct.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
            };
            PopUpMsgStruct.URL = "ui://txcuvopdhh765a";
            PopUpMsgStruct.DependPackages = ["Common", "WarMovie"];
            return PopUpMsgStruct;
        }(fairygui.GComponent));
        Common.PopUpMsgStruct = PopUpMsgStruct;
    })(Common = fgui.Common || (fgui.Common = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=PopUpMsgStruct.js.map