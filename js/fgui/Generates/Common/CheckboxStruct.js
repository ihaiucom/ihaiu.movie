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
        var CheckboxStruct = /** @class */ (function (_super) {
            __extends(CheckboxStruct, _super);
            function CheckboxStruct() {
                return _super.call(this) || this;
            }
            CheckboxStruct.createInstance = function () {
                return (fairygui.UIPackage.createObject("Common", "Checkbox"));
            };
            CheckboxStruct.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_button = this.getController("button");
            };
            CheckboxStruct.URL = "ui://txcuvopdj3a33o";
            CheckboxStruct.DependPackages = ["Common", "PfSkin"];
            return CheckboxStruct;
        }(fairygui.GButton));
        Common.CheckboxStruct = CheckboxStruct;
    })(Common = fgui.Common || (fgui.Common = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=CheckboxStruct.js.map