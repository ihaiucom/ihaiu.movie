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
        var AddBtn3Struct = /** @class */ (function (_super) {
            __extends(AddBtn3Struct, _super);
            function AddBtn3Struct() {
                return _super.call(this) || this;
            }
            AddBtn3Struct.createInstance = function () {
                return (fairygui.UIPackage.createObject("Common", "addBtn3"));
            };
            AddBtn3Struct.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_button = this.getController("button");
            };
            AddBtn3Struct.URL = "ui://txcuvopdo3z6af";
            AddBtn3Struct.DependPackages = ["Common"];
            return AddBtn3Struct;
        }(fairygui.GButton));
        Common.AddBtn3Struct = AddBtn3Struct;
    })(Common = fgui.Common || (fgui.Common = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=AddBtn3Struct.js.map