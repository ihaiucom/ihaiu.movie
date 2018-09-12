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
        var AddBtn2Struct = /** @class */ (function (_super) {
            __extends(AddBtn2Struct, _super);
            function AddBtn2Struct() {
                return _super.call(this) || this;
            }
            AddBtn2Struct.createInstance = function () {
                return (fairygui.UIPackage.createObject("Common", "addBtn2"));
            };
            AddBtn2Struct.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_button = this.getController("button");
            };
            AddBtn2Struct.URL = "ui://txcuvopdo3z6ad";
            AddBtn2Struct.DependPackages = ["Common"];
            return AddBtn2Struct;
        }(fairygui.GButton));
        Common.AddBtn2Struct = AddBtn2Struct;
    })(Common = fgui.Common || (fgui.Common = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=AddBtn2Struct.js.map