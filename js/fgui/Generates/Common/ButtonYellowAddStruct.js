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
        var ButtonYellowAddStruct = /** @class */ (function (_super) {
            __extends(ButtonYellowAddStruct, _super);
            function ButtonYellowAddStruct() {
                return _super.call(this) || this;
            }
            ButtonYellowAddStruct.createInstance = function () {
                return (fairygui.UIPackage.createObject("Common", "ButtonYellowAdd"));
            };
            ButtonYellowAddStruct.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_button = this.getController("button");
            };
            ButtonYellowAddStruct.URL = "ui://txcuvopd9mu0c0";
            ButtonYellowAddStruct.DependPackages = ["Common"];
            return ButtonYellowAddStruct;
        }(fairygui.GButton));
        Common.ButtonYellowAddStruct = ButtonYellowAddStruct;
    })(Common = fgui.Common || (fgui.Common = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=ButtonYellowAddStruct.js.map