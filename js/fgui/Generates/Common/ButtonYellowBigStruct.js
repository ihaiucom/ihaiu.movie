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
        var ButtonYellowBigStruct = /** @class */ (function (_super) {
            __extends(ButtonYellowBigStruct, _super);
            function ButtonYellowBigStruct() {
                return _super.call(this) || this;
            }
            ButtonYellowBigStruct.createInstance = function () {
                return (fairygui.UIPackage.createObject("Common", "ButtonYellowBig"));
            };
            ButtonYellowBigStruct.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_button = this.getController("button");
                this.m_title = (this.getChild("title"));
            };
            ButtonYellowBigStruct.URL = "ui://txcuvopdx9zq4r";
            ButtonYellowBigStruct.DependPackages = ["Common"];
            return ButtonYellowBigStruct;
        }(fairygui.GButton));
        Common.ButtonYellowBigStruct = ButtonYellowBigStruct;
    })(Common = fgui.Common || (fgui.Common = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=ButtonYellowBigStruct.js.map