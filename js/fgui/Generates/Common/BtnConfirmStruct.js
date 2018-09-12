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
        var BtnConfirmStruct = /** @class */ (function (_super) {
            __extends(BtnConfirmStruct, _super);
            function BtnConfirmStruct() {
                return _super.call(this) || this;
            }
            BtnConfirmStruct.createInstance = function () {
                return (fairygui.UIPackage.createObject("Common", "BtnConfirm"));
            };
            BtnConfirmStruct.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_button = this.getController("button");
                this.m_Title = (this.getChild("Title"));
            };
            BtnConfirmStruct.URL = "ui://txcuvopdsc1s30";
            BtnConfirmStruct.DependPackages = ["Common"];
            return BtnConfirmStruct;
        }(fairygui.GButton));
        Common.BtnConfirmStruct = BtnConfirmStruct;
    })(Common = fgui.Common || (fgui.Common = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=BtnConfirmStruct.js.map