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
        var CheckBox2Struct = /** @class */ (function (_super) {
            __extends(CheckBox2Struct, _super);
            function CheckBox2Struct() {
                return _super.call(this) || this;
            }
            CheckBox2Struct.createInstance = function () {
                return (fairygui.UIPackage.createObject("Common", "CheckBox2"));
            };
            CheckBox2Struct.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_button = this.getController("button");
            };
            CheckBox2Struct.URL = "ui://txcuvopde77bbw";
            CheckBox2Struct.DependPackages = ["Common"];
            return CheckBox2Struct;
        }(fairygui.GButton));
        Common.CheckBox2Struct = CheckBox2Struct;
    })(Common = fgui.Common || (fgui.Common = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=CheckBox2Struct.js.map