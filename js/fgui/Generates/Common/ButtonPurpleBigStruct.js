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
        var ButtonPurpleBigStruct = /** @class */ (function (_super) {
            __extends(ButtonPurpleBigStruct, _super);
            function ButtonPurpleBigStruct() {
                return _super.call(this) || this;
            }
            ButtonPurpleBigStruct.createInstance = function () {
                return (fairygui.UIPackage.createObject("Common", "ButtonPurpleBig"));
            };
            ButtonPurpleBigStruct.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_button = this.getController("button");
                this.m_title = (this.getChild("title"));
            };
            ButtonPurpleBigStruct.URL = "ui://txcuvopdx9zq4m";
            ButtonPurpleBigStruct.DependPackages = ["Common"];
            return ButtonPurpleBigStruct;
        }(fairygui.GButton));
        Common.ButtonPurpleBigStruct = ButtonPurpleBigStruct;
    })(Common = fgui.Common || (fgui.Common = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=ButtonPurpleBigStruct.js.map