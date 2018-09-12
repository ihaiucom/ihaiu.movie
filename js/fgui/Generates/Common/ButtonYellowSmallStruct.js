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
        var ButtonYellowSmallStruct = /** @class */ (function (_super) {
            __extends(ButtonYellowSmallStruct, _super);
            function ButtonYellowSmallStruct() {
                return _super.call(this) || this;
            }
            ButtonYellowSmallStruct.createInstance = function () {
                return (fairygui.UIPackage.createObject("Common", "ButtonYellowSmall"));
            };
            ButtonYellowSmallStruct.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_button = this.getController("button");
                this.m_title = (this.getChild("title"));
            };
            ButtonYellowSmallStruct.URL = "ui://txcuvopdx9zq4j";
            ButtonYellowSmallStruct.DependPackages = ["Common"];
            return ButtonYellowSmallStruct;
        }(fairygui.GButton));
        Common.ButtonYellowSmallStruct = ButtonYellowSmallStruct;
    })(Common = fgui.Common || (fgui.Common = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=ButtonYellowSmallStruct.js.map