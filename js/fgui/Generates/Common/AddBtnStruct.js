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
        var AddBtnStruct = /** @class */ (function (_super) {
            __extends(AddBtnStruct, _super);
            function AddBtnStruct() {
                return _super.call(this) || this;
            }
            AddBtnStruct.createInstance = function () {
                return (fairygui.UIPackage.createObject("Common", "addBtn"));
            };
            AddBtnStruct.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_button = this.getController("button");
            };
            AddBtnStruct.URL = "ui://txcuvopdhh7684";
            AddBtnStruct.DependPackages = ["Common"];
            return AddBtnStruct;
        }(fairygui.GButton));
        Common.AddBtnStruct = AddBtnStruct;
    })(Common = fgui.Common || (fgui.Common = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=AddBtnStruct.js.map