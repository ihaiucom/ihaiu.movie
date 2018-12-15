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
        var Btn_editor_nameStruct = /** @class */ (function (_super) {
            __extends(Btn_editor_nameStruct, _super);
            function Btn_editor_nameStruct() {
                return _super.call(this) || this;
            }
            Btn_editor_nameStruct.createInstance = function () {
                return (fairygui.UIPackage.createObject("Common", "btn_editor_name"));
            };
            Btn_editor_nameStruct.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_button = this.getController("button");
            };
            Btn_editor_nameStruct.URL = "ui://txcuvopdcvs8dq";
            Btn_editor_nameStruct.DependPackages = ["Common"];
            return Btn_editor_nameStruct;
        }(fairygui.GButton));
        Common.Btn_editor_nameStruct = Btn_editor_nameStruct;
    })(Common = fgui.Common || (fgui.Common = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=Btn_editor_nameStruct.js.map